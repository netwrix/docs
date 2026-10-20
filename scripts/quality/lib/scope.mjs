import { execFileSync } from 'child_process';
import fs from 'fs';

const git = (args, opts = {}) =>
  execFileSync('git', ['-c', 'diff.renameLimit=100000', ...args], {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    ...opts,
  });

export function isInScope(file, scope) {
  if (!/\.mdx?$/.test(file) || !file.startsWith('docs/')) return false;
  return !scope.exclude.some(ex => (ex.startsWith('/') ? file.endsWith(ex) : file.startsWith(ex)));
}

const DIFF_ARGS = ['diff', '--no-color', '-M50%', '-C50%', '--find-copies-harder', '-U0'];

/**
 * Parse `git diff -U0` output into { file, ranges }. `ranges` is null for a
 * brand-new page (check all of it) and a list of [start, end] added-line
 * ranges (1-based, inclusive) for a page that already existed. A page git
 * detects as a copy or rename of another page (>= 50% similar) is diffed
 * against that source, so a cloned version directory only yields the lines
 * that differ from the release it was cloned from. Pure deletions and
 * unchanged renames yield no ranges and are dropped.
 */
export function parseDiff(text) {
  const out = [];
  for (const block of text.split(/^(?=diff --git )/m).filter(Boolean)) {
    const file = block.match(/^diff --git a\/.+ b\/(.+)$/m)?.[1];
    if (!file) continue;
    if (/^new file mode/m.test(block)) {
      out.push({ file, ranges: null });
      continue;
    }
    const ranges = [];
    for (const m of block.matchAll(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/gm)) {
      const start = Number(m[1]);
      const count = m[2] === undefined ? 1 : Number(m[2]);
      if (count > 0) ranges.push([start, start + count - 1]);
    }
    if (ranges.length) out.push({ file, ranges });
  }
  return out;
}

/**
 * Documentation this change touches, with what to check in each page.
 *   staged: what is staged for the next commit (pre-commit hook)
 *   base:   everything on this branch since it left `base`, including
 *           uncommitted and untracked work (Claude Code hook)
 */
export function discoverChanges({ mode = 'base', base = 'origin/dev', scope }) {
  let diff;
  const untracked = [];
  if (mode === 'staged') {
    diff = git([...DIFF_ARGS, '--cached', '--', 'docs']);
  } else {
    const mergeBase = mergeBaseOf(base);
    diff = git([...DIFF_ARGS, mergeBase, '--', 'docs']);
    untracked.push(...git(['ls-files', '--others', '--exclude-standard', '--', 'docs']).split('\n').filter(Boolean));
  }
  const byFile = new Map(parseDiff(diff).map(c => [c.file, c]));
  for (const f of untracked) byFile.set(f, { file: f, ranges: null });
  return [...byFile.values()]
    .filter(c => isInScope(c.file, scope) && fs.existsSync(c.file))
    .sort((a, b) => a.file.localeCompare(b.file));
}

/** Current changed-line ranges for one file, or null when the page is new. Used between rewrite passes, since edits shift line numbers. */
export function rangesFor(file, { mode = 'base', base = 'origin/dev' }) {
  const hit = discoverChanges({ mode, base, scope: { exclude: [] } }).find(c => c.file === file);
  return hit ? hit.ranges : [];
}

function mergeBaseOf(base) {
  for (const ref of [base, 'dev', 'origin/main']) {
    try {
      return git(['merge-base', ref, 'HEAD']).trim();
    } catch { /* try the next ref */ }
  }
  return 'HEAD';
}

export const inRanges = (line, ranges) => ranges === null || ranges.some(([a, b]) => line >= a && line <= b);

/** Keep only the changes whose path is on a list (one repo-relative path per line). */
export function onlyListed(changes, listText) {
  const wanted = new Set(listText.split('\n').map(l => l.trim()).filter(Boolean));
  return changes.filter(c => wanted.has(c.file));
}
