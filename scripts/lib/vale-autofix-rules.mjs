// Node port of the Phase 1 substitutions in scripts/vale-autofix.sh, for the
// local git hooks. The bash script can't run on macOS: BSD sed ignores `\b`,
// so every substitution silently no-ops, and it needs bash 4+.
// test-vale-local.mjs checks the two stay in sync.

const sub = (...pairs) => (line) => pairs.reduce((text, [re, to]) => text.replace(re, to), line);

// sed's `s/  +/ /g` also flattens leading indentation, which breaks nested
// list items; only collapse spaces after the indent.
const collapseSpaces = (line) => {
  const indent = line.match(/^\s*/)[0];
  return indent + line.slice(indent.length).replace(/ {2,}/g, ' ');
};

export const FIXERS = {
  'Netwrix.Checkbox': sub([/\b[Cc]heck [Bb]ox\b/g, 'checkbox']),
  'Netwrix.ClickOn': sub([
    /\b([Dd]ouble-[Cc]lick|[Rr]ight-[Cc]lick|[Ll]eft-[Cc]lick|[Ll]eft [Cc]lick|[Cc]lick) [Oo]n\b/g,
    '$1',
  ]),
  'Netwrix.Contractions': sub(
    [/\bDo [Nn]ot\b/g, "Don't"],
    [/\bdo [Nn]ot\b/g, "don't"],
    [/\bDoes [Nn]ot\b/g, "Doesn't"],
    [/\bdoes [Nn]ot\b/g, "doesn't"],
    [/\bDid [Nn]ot\b/g, "Didn't"],
    [/\bdid [Nn]ot\b/g, "didn't"],
    [/\bCannot\b/g, "Can't"],
    [/\bcannot\b/g, "can't"],
    [/\bCan [Nn]ot\b/g, "Can't"],
    [/\bcan [Nn]ot\b/g, "can't"],
    [/\bWould [Nn]ot\b/g, "Wouldn't"],
    [/\bwould [Nn]ot\b/g, "wouldn't"],
    [/\bShould [Nn]ot\b/g, "Shouldn't"],
    [/\bshould [Nn]ot\b/g, "shouldn't"],
    [/\bCould [Nn]ot\b/g, "Couldn't"],
    [/\bcould [Nn]ot\b/g, "couldn't"],
    [/\bIs [Nn]ot\b/g, "Isn't"],
    [/\bis [Nn]ot\b/g, "isn't"],
    [/\bAre [Nn]ot\b/g, "Aren't"],
    [/\bare [Nn]ot\b/g, "aren't"],
    [/\bWas [Nn]ot\b/g, "Wasn't"],
    [/\bwas [Nn]ot\b/g, "wasn't"],
    [/\bWere [Nn]ot\b/g, "Weren't"],
    [/\bwere [Nn]ot\b/g, "weren't"],
  ),
  'Netwrix.Dropdown': sub([/[Dd]rop[- ][Dd]own/g, 'dropdown']),
  'Netwrix.InOrderTo': sub([/[Ii]n [Oo]rder [Tt]o/g, 'to']),
  'Netwrix.IsAbleTo': sub(
    [/\b[Ii]s [Aa]ble [Tt]o\b/g, 'can'],
    [/\b[Aa]re [Aa]ble [Tt]o\b/g, 'can'],
    [/\b[Ww]as [Aa]ble [Tt]o\b/g, 'could'],
    [/\b[Ww]ere [Aa]ble [Tt]o\b/g, 'could'],
  ),
  'Netwrix.LoginVerb': sub([/\b[Ll]ogin [Tt]o\b/g, 'log in to']),
  'Netwrix.MakeSure': sub([/\b[Mm]ake [Ss]ure\b/g, 'ensure']),
  'Netwrix.ProvidesAbilityTo': sub(
    [/\b[Pp]rovides the ability to\b/g, 'lets you'],
    [/\b[Pp]rovide the ability to\b/g, 'let you'],
    [/\b[Pp]rovided the ability to\b/g, 'let you'],
  ),
  'Netwrix.SetupUsage': sub([/\b([Tt]o|[Ww]ill|[Cc]an|[Mm]ust|[Ss]hould|[Hh]ave|[Hh]as|[Hh]ad|[Gg]etting) [Ss]etup\b/g, '$1 set up']),
  'Netwrix.Utilize': sub([/\b[Uu]tiliz(es|ed|ing|e)\b/g, 'us$1'], [/\b[Uu]tilis(es|ed|ing|e)\b/g, 'us$1']),
  'Netwrix.WishTo': sub([/\b[Ww]ish [Tt]o\b/g, 'want to']),
  'Netwrix.Aforementioned': (line) => collapseSpaces(line.replace(/\b[Aa]forementioned\b */g, '')),
  'Netwrix.LatinAbbreviations': sub([/\be\.g\./g, 'for example'], [/\betc\./g, 'and so on']),
  'Netwrix.Please': (line) =>
    /\bplease\s+note\b/i.test(line) ? line : collapseSpaces(line.replace(/\b[Pp]lease +/g, '')),
  'Netwrix.Spacing': sub([/([.!?]) {2,}/g, '$1 ']),
  'Netwrix.TemporalHedges': (line) =>
    collapseSpaces(
      line
        .replace(/\b[Cc]urrently,? */g, '')
        .replace(/\b[Pp]resently,? */g, '')
        .replace(/\b[Aa]s of this writing,? */g, ''),
    ),
  'Netwrix.Plurals': sub([/(\w+)\(s\)/g, '$1s']),
};

// Headings are skipped because renaming one breaks anchor links elsewhere.
function protectedLines(lines) {
  const skip = new Set();
  let inFence = false;
  lines.forEach((line, i) => {
    const lineNum = i + 1;
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      skip.add(lineNum);
    } else if (inFence || /^#{1,6}\s/.test(line)) {
      skip.add(lineNum);
    }
  });
  return skip;
}

/**
 * @param {string} content file contents
 * @param {{line: number, check: string}[]} violations Vale alerts for this file
 * @returns {{content: string, fixes: {line: number, check: string}[]}}
 */
export function applyFixes(content, violations) {
  const lines = content.split('\n');
  const skip = protectedLines(lines);
  const fixes = [];
  const byCodepoint = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
  const ordered = [...violations].sort((a, b) => byCodepoint(a.check, b.check) || a.line - b.line);

  for (const { line, check } of ordered) {
    const fixer = FIXERS[check];
    if (!fixer || skip.has(line) || line < 1 || line > lines.length) continue;
    const before = lines[line - 1];
    const after = fixer(before);
    if (after !== before) {
      lines[line - 1] = after;
      fixes.push({ line, check });
    }
  }
  return { content: lines.join('\n'), fixes };
}
