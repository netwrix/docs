#!/usr/bin/env node
// Warn about leftover draft markers in docs: {/* TODO: ... */}, <!-- TODO ... -->,
// and TODO(docdraft). Never fails; exit code is always 0.
// Usage: todo-check.mjs [--staged | --base <ref>] [--files a.md b.md]
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const MARKER = /\{\/\*\s*TODO\b|<!--\s*TODO\b|\bTODO\(docdraft\)|^\s*TODO:/;
const args = process.argv.slice(2);
const git = (...a) => execFileSync('git', a, { encoding: 'utf8', maxBuffer: 64 << 20 });
const isDoc = (f) => /^docs\/.*\.mdx?$/.test(f) && !f.startsWith('docs/kb/') && !/(^|\/)(CLAUDE|SKILL)\.md$/.test(f); // CLAUDE.md files explain the marker syntax

let files = [];
let read = (f) => fs.readFileSync(f, 'utf8');
const i = args.indexOf('--files');
if (i >= 0) files = args.slice(i + 1);
else if (args.includes('--staged')) {
  files = git('diff', '--cached', '--name-only', '--diff-filter=AM').split('\n').filter(Boolean);
  read = (f) => git('show', `:${f}`);
} else {
  const b = args.indexOf('--base');
  const base = b >= 0 ? args[b + 1] : 'origin/dev';
  try {
    const mb = git('merge-base', 'HEAD', base).trim();
    files = [
      ...git('diff', '--name-only', '--diff-filter=AM', mb).split('\n'),
      ...git('ls-files', '--others', '--exclude-standard').split('\n'),
    ].filter(Boolean);
  } catch { process.exit(0); }
}

const hits = [];
for (const f of [...new Set(files)].filter(isDoc)) {
  let text;
  try { text = read(f); } catch { continue; }
  text.split('\n').forEach((line, n) => {
    if (MARKER.test(line)) hits.push(`${f}:${n + 1}: ${line.trim().slice(0, 110)}`);
  });
}
if (hits.length) {
  console.error(`todo-check: ${hits.length} unresolved draft marker(s) in docs. Resolve them before the PR merges:`);
  for (const h of hits) console.error(`  ${h}`);
}
process.exit(0);
