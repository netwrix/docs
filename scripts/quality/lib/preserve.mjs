/**
 * Preservation check for a rewritten page. The model may reword prose; it may
 * not touch anything a reader depends on. Returns a list of violations
 * (empty means the rewrite is safe to accept).
 */

const FENCE = /^\s*(```|~~~)/;

/** True for each line the model may never touch: frontmatter, fences, headings, tables, :::, imports, JSX/HTML. */
export function lockedMask(markdown) {
  const lines = markdown.split('\n');
  const mask = new Array(lines.length).fill(false);
  let i = 0;
  if (lines[0]?.trim() === '---') {
    let j = 1;
    while (j < lines.length && lines[j].trim() !== '---') j++;
    for (; i <= j && i < lines.length; i++) mask[i] = true;
  }
  let inFence = false;
  for (; i < lines.length; i++) {
    const line = lines[i];
    if (FENCE.test(line)) {
      inFence = !inFence;
      mask[i] = true;
    } else if (inFence || /^#{1,6}\s/.test(line) || /^\s*\|/.test(line) || /^\s*:::/.test(line) || /^\s*(import|export)\s/.test(line) || /^\s*</.test(line)) {
      mask[i] = true;
    }
  }
  return mask;
}

function split(markdown) {
  const lines = markdown.split('\n');
  const mask = lockedMask(markdown);
  return {
    locked: lines.filter((_, i) => mask[i]),
    prose: lines.filter((_, i) => !mask[i]).join('\n'),
  };
}

const counts = arr => arr.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map());

function missing(before, after, label, out) {
  const a = counts(after);
  for (const [k, n] of counts(before)) {
    if ((a.get(k) || 0) < n) out.push(`${label} removed or changed: ${k}`);
  }
}

function extract(prose) {
  const inlineCode = prose.match(/`[^`\n]+`/g) || [];
  const linkTargets = [...prose.matchAll(/\]\(([^)\s]+)/g)].map(m => m[1]);
  const bold = prose.match(/\*\*[^*\n]+\*\*/g) || [];
  const stripped = prose
    .replace(/`[^`\n]+`/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/^\s*\d+\.\s/gm, '');
  const numbers = stripped.match(/\d+(?:[.,]\d+)*/g) || [];
  return { inlineCode, linkTargets, bold, numbers };
}

export function checkPreserved(original, rewritten) {
  const violations = [];
  const a = split(original);
  const b = split(rewritten);
  if (a.locked.length !== b.locked.length || a.locked.some((l, i) => l !== b.locked[i])) {
    violations.push('frontmatter, headings, tables, code blocks, admonition markers, imports, or JSX lines changed');
  }
  const x = extract(a.prose);
  const y = extract(b.prose);
  missing(x.inlineCode, y.inlineCode, 'inline code', violations);
  missing(x.linkTargets, y.linkTargets, 'link target', violations);
  missing(x.bold, y.bold, 'bold text (UI label)', violations);
  missing(x.numbers, y.numbers, 'number', violations);
  missing(y.numbers, x.numbers, 'number added', violations);
  return violations;
}

/**
 * Content-integrity check for a restyle. Unlike checkPreserved, it lets headings,
 * tables, and prose move, and it compares the whole set of files, so a split or
 * merge still balances. `originals` and `rewrittens` are lists of { path, text };
 * a file missing on one side has empty text. `allow` is a list of { from, to }
 * pairs a writer confirmed (a typo fix, a renamed link): `from` is replaced by
 * `to` in the originals before comparing.
 */
const FREE_FRONTMATTER = new Set(['description', 'sidebar_label', 'title']);
const IGNORED_NUMBER_KEYS = new Set(['sidebar_position']);

function parseDoc(text) {
  const lines = text.split('\n');
  const front = {};
  let start = 0;
  if (lines[0]?.trim() === '---') {
    let j = 1;
    while (j < lines.length && lines[j].trim() !== '---') {
      const m = lines[j].match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
      if (m) front[m[1]] = m[2].trim();
      j++;
    }
    start = j + 1;
  }
  const fences = [];
  const prose = [];
  let block = null;
  for (const line of lines.slice(start)) {
    if (FENCE.test(line)) {
      if (block) {
        block.push(line);
        // Indenting a block under a list item is a layout change, so compare it without its indent.
        const pad = block[0].match(/^\s*/)[0].length;
        fences.push(block.map(l => l.replace(new RegExp(`^\\s{0,${pad}}`), '')).join('\n'));
        block = null;
      } else {
        block = [line];
      }
    } else if (block) {
      block.push(line);
    } else {
      prose.push(line);
    }
  }
  if (block) fences.push(block.join('\n'));
  // "**Step 3 –**" is a list marker written by hand, so a numbered list may replace it.
  return { front, fences, prose: prose.join('\n').replace(/^\s*\*\*Step \d+\s*[–—-]\s*\*\*\s*/gm, '') };
}

function contentFacts(docs) {
  const fences = docs.flatMap(d => d.fences);
  const prose = docs.map(d => d.prose).join('\n');
  const frontNumbers = docs.flatMap(d =>
    Object.entries(d.front)
      .filter(([k]) => !IGNORED_NUMBER_KEYS.has(k) && !FREE_FRONTMATTER.has(k))
      .map(([, v]) => v),
  );
  const x = extract(prose);
  const admonitions = [...prose.matchAll(/^\s*:::(\w+)/gm)].map(m => m[1]);
  // Count numbers inside inline code too, so wrapping `PPE10.2.exe` in backticks does not hide the 10.2.
  const proseNumbers = prose
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/^\s*\d+\.\s/gm, '')
    .match(/\d+(?:[.,]\d+)*/g) || [];
  const numbers = [...proseNumbers, ...(frontNumbers.join(' ').match(/\d+(?:[.,]\d+)*/g) || [])];
  return { fences, inlineCode: x.inlineCode, linkTargets: x.linkTargets, bold: x.bold, numbers, admonitions };
}

export function checkContent(originals, rewrittens, allow = []) {
  const violations = [];
  if (allow.some(a => !a.from)) throw new Error('an allowed change needs a non-empty "from" text');
  // A confirmed fix applies to prose only, so it can never rewrite a code block or frontmatter.
  const fix = text => allow.reduce((t, { from, to }) => t.split(from).join(to), text);
  const before = originals.map(f => {
    const d = parseDoc(f.text);
    return { ...d, prose: fix(d.prose) };
  });
  const after = rewrittens.map(f => parseDoc(f.text));
  const a = contentFacts(before);
  const b = contentFacts(after);
  missing(a.fences, b.fences, 'code block', violations);
  missing(b.fences, a.fences, 'code block added', violations);
  missing(a.inlineCode, b.inlineCode, 'inline code', violations);
  missing(a.linkTargets, b.linkTargets, 'link or image target', violations);
  missing(a.bold, b.bold, 'bold text (UI label)', violations);
  missing(a.numbers, b.numbers, 'number', violations);
  missing(b.numbers, a.numbers, 'number added', violations);
  missing(a.admonitions, b.admonitions, 'admonition', violations);
  rewrittens.forEach((f, i) => {
    const o = originals.find(x => x.path === f.path);
    if (!o || !o.text) return;
    const of = parseDoc(o.text).front;
    for (const [k, v] of Object.entries(of)) {
      if (!FREE_FRONTMATTER.has(k) && after[i].front[k] !== v) violations.push(`frontmatter ${k} changed in ${f.path}`);
    }
  });
  return violations;
}
