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
