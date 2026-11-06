#!/usr/bin/env node
/**
 * lint-all.mjs — the final style check of a doc-set run covers EVERY page of the version: new, rewritten, updated,
 * and kept pages alike, not only the pages the run edited. The whole-page report is for the author report and for the
 * separate restyle pass; only findings on the lines the run changed (the commit check) must be fixed in the run.
 *
 *   node scripts/doc-set/lint-all.mjs <run-dir>            write <run-dir>/lintpass/all-pages.txt and print the command to run
 *   node scripts/doc-set/lint-all.mjs <run-dir> --check    exit 1 unless <run-dir>/lintpass/final-recheck.txt covers every page
 *
 * The page list is every .md and .mdx file under the version's folder in the docs worktree (docs/<id>/<version>/, or
 * docs/<id>/ in an align run), except Knowledge Base folders and CLAUDE.md files. Run the printed command detached; the
 * author report's "Style check on every page" section reads its output.
 */
import fs from 'fs';
import path from 'path';
import { readJson } from './manifest.mjs';
import { docsPrefix } from './docs-paths.mjs';

/** Repo-relative paths of every doc page under `prefix` (with trailing slash) in `worktree`, sorted. */
export function listPages(worktree, prefix) {
  const out = [];
  const walk = rel => {
    for (const e of fs.readdirSync(path.join(worktree, rel), { withFileTypes: true })) {
      const next = `${rel}${e.name}`;
      if (e.isDirectory()) { if (e.name !== 'kb' && e.name !== 'node_modules') walk(`${next}/`); }
      else if (/\.mdx?$/.test(e.name) && e.name !== 'CLAUDE.md') out.push(next);
    }
  };
  if (fs.existsSync(path.join(worktree, prefix))) walk(prefix);
  return out.sort();
}

/** Page paths named on the PASS or FAIL lines of a quality-check log. */
export function checkedPages(text) {
  const seen = new Set();
  for (const line of String(text).split('\n')) {
    const m = line.match(/^(?:PASS|FAIL)\s+(\S+)/);
    if (m) seen.add(m[1]);
  }
  return seen;
}

/** Pages in `pages` that the log never mentions. */
export function missingPages(pages, logText) {
  const seen = checkedPages(logText);
  return pages.filter(p => !seen.has(p));
}

export function run(argv) {
  const dir = argv.find(a => !a.startsWith('--'));
  if (!dir) { console.error('Usage: node scripts/doc-set/lint-all.mjs <run-dir> [--check]'); return 2; }
  const meta = readJson(dir, 'meta.json');
  const pages = listPages(meta.docsWorktree, docsPrefix(meta));
  const lintDir = path.join(dir, 'lintpass');
  fs.mkdirSync(lintDir, { recursive: true });
  const list = path.join(lintDir, 'all-pages.txt');
  fs.writeFileSync(list, pages.join('\n') + '\n');
  if (argv.includes('--check')) {
    const log = path.join(lintDir, 'final-recheck.txt');
    if (!fs.existsSync(log)) { console.error(`No ${log}. The final style check has not run on the ${pages.length} pages.`); return 1; }
    const missing = missingPages(pages, fs.readFileSync(log, 'utf8'));
    if (missing.length) { console.error(`The final style check missed ${missing.length} of ${pages.length} pages:\n${missing.map(p => `  ${p}`).join('\n')}`); return 1; }
    console.log(`The final style check covers all ${pages.length} pages.`);
    return 0;
  }
  console.log(`${pages.length} pages listed in ${list}. From ${meta.docsWorktree}, run:`);
  console.log('  (1) the whole-page report, which lists every finding on every page, old text included:');
  console.log(`      npm run quality:check -- --files ${list} --progress > ${path.join(lintDir, 'final-recheck.txt')} 2>&1`);
  console.log('  (2) the commit check, which looks only at the lines this run added or changed. It must be clean:');
  console.log('      npm run quality:check');
  console.log('Findings only (1) shows are on old text: report them as candidates for the separate restyle pass, and do not reword them.');
  console.log('Then: node scripts/doc-set/lint-all.mjs <run-dir> --check');
  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
