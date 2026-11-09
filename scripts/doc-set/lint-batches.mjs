#!/usr/bin/env node
/**
 * lint-batches.mjs — split the KEEP pages into lint-pass batches, or summarize finished batches.
 *
 *   node scripts/doc-set/lint-batches.mjs <run-dir> [--size 15]     write <run-dir>/lintpass/batch-N.txt
 *   node scripts/doc-set/lint-batches.mjs <run-dir> --summary        totals from <run-dir>/lintpass/result-N.json
 *
 * A batch file lists one repo-relative page path per line. Result files follow the shape in
 * .claude/skills/doc-set/references/lint-pass.md.
 */
import fs from 'fs';
import { isMain } from './is-main.mjs';
import path from 'path';
import { readJson } from './manifest.mjs';

export function splitBatches(paths, size = 15) {
  const sorted = [...paths].sort();
  const n = Math.max(1, Math.ceil(sorted.length / size));
  const per = Math.ceil(sorted.length / n);
  const out = [];
  for (let i = 0; i < sorted.length; i += per) out.push(sorted.slice(i, i + per));
  return out;
}

export function summarize(results) {
  const s = { batches: results.length, pages: 0, clean: 0, changed: 0, before: 0, after: 0, integrityFails: [], typos: [], unfixed: [], suppressions: [] };
  for (const r of results) {
    for (const p of r.pages || []) {
      s.pages++;
      if (p.before === 0 && p.after === 0) s.clean++;
      else s.changed++;
      s.before += p.before || 0;
      s.after += p.after || 0;
      if (p.integrity === 'fail') s.integrityFails.push(p.path);
      for (const u of p.unfixed || []) s.unfixed.push({ path: p.path, text: u });
      for (const x of p.suppressions || []) s.suppressions.push({ path: p.path, text: x });
    }
    for (const t of r.typos || []) s.typos.push(t);
  }
  return s;
}

export function run(argv) {
  const si = argv.indexOf('--size');
  const size = si >= 0 ? Number(argv[si + 1]) : 15;
  const dir = argv.find((a, i) => !a.startsWith('--') && (si < 0 || i !== si + 1));
  if (!dir) {
    console.error('Usage: node scripts/doc-set/lint-batches.mjs <run-dir> [--size 15 | --summary]');
    return 2;
  }
  const lintDir = path.join(dir, 'lintpass');
  fs.mkdirSync(lintDir, { recursive: true });
  if (argv.includes('--summary')) {
    const files = fs.readdirSync(lintDir).filter(f => /^result-\d+\.json$/.test(f)).sort();
    const s = summarize(files.map(f => JSON.parse(fs.readFileSync(path.join(lintDir, f), 'utf8'))));
    console.log(`${s.batches} batch result(s): ${s.pages} pages (${s.clean} already clean, ${s.changed} needed edits); findings ${s.before} before, ${s.after} after (agent estimates; recheck for the real count)`);
    console.log(`${s.typos.length} suspected typos, ${s.unfixed.length} sentences left as written, ${s.suppressions.length} Vale suppression(s), ${s.integrityFails.length} integrity failure(s)`);
    return s.integrityFails.length ? 1 : 0;
  }
  const manifest = readJson(dir, 'manifest.json');
  const keep = manifest.pages.filter(p => p.action === 'KEEP').map(p => p.path);
  const batches = splitBatches(keep, size);
  batches.forEach((b, i) => fs.writeFileSync(path.join(lintDir, `batch-${i + 1}.txt`), b.join('\n') + '\n'));
  fs.writeFileSync(path.join(lintDir, 'all-keep.txt'), [...keep].sort().join('\n') + '\n');
  console.log(`${keep.length} KEEP pages in ${batches.length} batch(es) of up to ${Math.ceil(keep.length / batches.length)}; all-keep.txt lists every page for the final recheck`);
  return 0;
}

if (isMain(import.meta.url)) process.exit(run(process.argv.slice(2)));
