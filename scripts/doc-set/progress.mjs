#!/usr/bin/env node
/**
 * progress.mjs — where a doc-set run stands, derived from the files in the run directory.
 *
 *   node scripts/doc-set/progress.mjs <run-dir> [--json]
 *
 * Prints one line per phase and a "You are here" line. With --json it also writes <run-dir>/progress.json.
 * Nothing has to record progress as it goes: every phase leaves a file, and this reads them.
 */
import fs from 'fs';
import path from 'path';
import { readJson, readResults, statusSummary } from './manifest.mjs';

export const PHASES = ['Intake', 'Fact pack', 'Claims', 'Seed and triage', 'Manifest', 'Draft', 'Review package', 'Collect review feedback', 'Assemble and report'];

const count = (dir, sub, ext) => {
  const d = path.join(dir, sub);
  return fs.existsSync(d) ? fs.readdirSync(d).filter(f => f.endsWith(ext)).length : 0;
};

/** Returns [{ n, name, status: 'done'|'current'|'pending', detail }] for the run. */
export function phaseStatus(dir) {
  const has = f => fs.existsSync(path.join(dir, f));
  const meta = readJson(dir, 'meta.json', null);
  const facts = readJson(dir, 'facts.json', null);
  const claims = readJson(dir, 'claims.json', null);
  const manifest = readJson(dir, 'manifest.json', null);
  const out = [];
  const add = (done, detail) => out.push({ done, detail });

  add(!!(meta && meta.refSha), meta && meta.refSha ? `code pinned at ${meta.refSha.slice(0, 9)}` : 'no pinned code refs yet');
  add(!!facts, facts ? `${facts.facts.length} facts` : 'not started');
  add(!!claims, claims ? `${claims.claims.length} Jira claims` : 'not started');
  const triaged = count(dir, 'triage', '.json');
  const based = meta && (meta.seedBaseline || meta.oldRef);
  add(!!(manifest && based), based ? `${meta.versionless ? 'set up' : 'seeded'}, ${triaged} zone${triaged === 1 ? '' : 's'} triaged` : (meta && meta.versionless ? 'not set up' : 'not seeded'));
  const tally = {};
  if (manifest) for (const p of manifest.pages) tally[p.action] = (tally[p.action] || 0) + 1;
  add(!!manifest, manifest ? `${manifest.pages.length} pages (${Object.entries(tally).map(([k, v]) => `${v} ${k}`).join(', ')})` : 'not written');
  if (manifest) {
    const rows = statusSummary(manifest, readResults(dir));
    let total = 0, done = 0, failed = 0;
    for (const [action, r] of Object.entries(rows)) if (action !== 'KEEP' && action !== 'RETIRE') { total += r.total; done += r.done; failed += r.failed; }
    add(total > 0 && done === total, `${done} of ${total} pages drafted${failed ? `, ${failed} failed` : ''}`);
  } else add(false, 'waiting for the manifest');
  add(has('review/review-package.html'), has('review/review-package.html') ? 'package built' : 'not built');
  add(false, 'runs in rounds, when the writer asks');
  add(false, 'not started');

  let current = false;
  return out.map((p, i) => {
    let status = p.done ? 'done' : 'pending';
    if (!p.done && !current) { status = 'current'; current = true; }
    return { n: i + 1, name: PHASES[i], status, detail: p.detail };
  });
}

export function render(phases) {
  const mark = { done: 'done   ', current: 'NOW    ', pending: 'pending' };
  const lines = phases.map(p => `${mark[p.status]}  ${p.n}. ${p.name}: ${p.detail}`);
  const cur = phases.find(p => p.status === 'current');
  lines.push(cur ? `You are here: phase ${cur.n} of ${phases.length}, ${cur.name} (${cur.detail}).` : 'All phases are done.');
  return lines.join('\n');
}

export function run(argv) {
  const dir = argv.find(a => !a.startsWith('--'));
  if (!dir) { console.error('Usage: node scripts/doc-set/progress.mjs <run-dir> [--json]'); return 2; }
  const phases = phaseStatus(dir);
  console.log(render(phases));
  if (argv.includes('--json')) fs.writeFileSync(path.join(dir, 'progress.json'), JSON.stringify({ updatedAt: new Date().toISOString(), phases }, null, 2) + '\n');
  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
