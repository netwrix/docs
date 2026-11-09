#!/usr/bin/env node
/**
 * triage-to-manifest.mjs — combine per-slice triage files into a draft manifest.json.
 *
 *   node scripts/doc-set/triage-to-manifest.mjs <run-dir> [--write]
 *
 * Reads <run-dir>/meta.json, facts.json, claims.json, and triage/*.json. Builds manifest.json
 * from the triage pages (adding `mechanical: true` to UPDATE pages that have no facts, such as a
 * version label bump) and writes unassigned.json: in-scope customer-visible facts that no page
 * claims, grouped by feature area, for the NEW-page planning step. NEW pages are added to
 * manifest.json by hand or by the planner; re-running this script keeps them (pages with action NEW).
 */
import fs from 'fs';
import { isMain } from './is-main.mjs';
import path from 'path';
import { readJson } from './manifest.mjs';

export function inScope(fact) {
  return !fact.internal && !fact.duplicateOf && !fact.outOfScope && fact.status !== 'removed';
}

export function combine(slices) {
  const pages = [];
  const seen = new Set();
  const problems = [];
  for (const s of slices) {
    // A slice may also propose pages that don't exist yet: `newPages` rows become NEW pages.
    for (const p of [...s.pages, ...(s.newPages || []).map(n => ({ ...n, action: 'NEW' }))]) {
      if (seen.has(p.path)) { problems.push(`Page ${p.path} appears in more than one slice`); continue; }
      seen.add(p.path);
      const page = {
        path: p.path, title: p.title, action: p.action, type: p.type, zone: p.zone,
        sidebar_position: p.sidebar_position ?? undefined,
        facts: p.facts || [], claims: p.claims || [], stale: p.stale || [], reason: p.reason || '', note: p.note || '',
      };
      if (page.action === 'UPDATE' && !page.facts.length) page.mechanical = true;
      pages.push(page);
    }
  }
  return { pages, problems };
}

export function unassigned(facts, pages) {
  const assigned = new Set(pages.flatMap(p => p.facts || []));
  const byArea = {};
  for (const f of facts.facts.filter(inScope)) {
    if (assigned.has(f.id)) continue;
    (byArea[f.area] ||= []).push({ id: f.id, status: f.status, statement: f.statement, cite: f.cite, tickets: f.tickets || [] });
  }
  return byArea;
}

export function run(argv) {
  const dir = argv.find(a => !a.startsWith('--'));
  if (!dir) {
    console.error('Usage: node scripts/doc-set/triage-to-manifest.mjs <run-dir> [--write]');
    return 2;
  }
  const meta = readJson(dir, 'meta.json');
  const facts = readJson(dir, 'facts.json');
  const slices = fs.readdirSync(path.join(dir, 'triage')).filter(f => f.endsWith('.json')).sort()
    .map(f => JSON.parse(fs.readFileSync(path.join(dir, 'triage', f), 'utf8')));
  const { pages, problems } = combine(slices);
  const prior = fs.existsSync(path.join(dir, 'manifest.json')) ? readJson(dir, 'manifest.json') : { pages: [] };
  const kept = prior.pages.filter(p => p.action === 'NEW' && !pages.some(q => q.path === p.path));
  const all = [...pages, ...kept];
  const un = unassigned(facts, all);
  const counts = {};
  for (const p of all) counts[p.action] = (counts[p.action] || 0) + 1;
  const unCount = Object.values(un).reduce((n, a) => n + a.length, 0);
  console.log(`${all.length} pages: ${Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(', ')}; ${unCount} in-scope facts unassigned in ${Object.keys(un).length} feature areas`);
  for (const p of problems) console.log(`  problem: ${p}`);
  if (argv.includes('--write')) {
    const manifest = { product: meta.product, version: meta.version, from: meta.from, pages: all, dropped: prior.dropped || [] };
    fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
    fs.writeFileSync(path.join(dir, 'unassigned.json'), JSON.stringify(un, null, 2) + '\n');
  }
  return problems.length ? 1 : 0;
}

if (isMain(import.meta.url)) process.exit(run(process.argv.slice(2)));
