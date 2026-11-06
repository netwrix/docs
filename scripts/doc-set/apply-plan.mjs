#!/usr/bin/env node
/**
 * apply-plan.mjs — fold a NEW-page plan into manifest.json.
 *
 *   node scripts/doc-set/apply-plan.mjs <run-dir> [--write]
 *
 * Reads <run-dir>/manifest.json and plan.json. `attach` entries add facts and claims to an existing
 * page (a KEEP page that receives facts becomes UPDATE). `newPages` are appended with action NEW,
 * and `dropped` ids are appended to manifest.dropped. `proposals` are never applied: they need the
 * writer's approval. Re-running is safe: facts already on a page and pages already in the manifest
 * are skipped. Exits 1 if a plan path is missing from the manifest or a NEW path already exists.
 */
import fs from 'fs';
import path from 'path';
import { readJson } from './manifest.mjs';

export function applyPlan(manifest, plan) {
  const out = JSON.parse(JSON.stringify(manifest));
  const problems = [];
  const byPath = new Map(out.pages.map(p => [p.path, p]));
  const merge = (list, add) => [...new Set([...(list || []), ...(add || [])])];
  for (const a of plan.attach || []) {
    const page = byPath.get(a.page);
    if (!page) { problems.push(`attach: ${a.page} is not in the manifest`); continue; }
    page.facts = merge(page.facts, a.facts);
    page.claims = merge(page.claims, a.claims);
    if (page.action === 'KEEP') { page.action = 'UPDATE'; page.note = [page.note, 'Became UPDATE: received unassigned facts.'].filter(Boolean).join(' '); }
    if (page.mechanical && page.facts.length) delete page.mechanical;
  }
  for (const n of plan.newPages || []) {
    const existing = byPath.get(n.path);
    if (existing) {
      if (existing.action === 'NEW') { existing.facts = merge(existing.facts, n.facts); existing.claims = merge(existing.claims, n.claims); continue; }
      problems.push(`newPages: ${n.path} already exists in the manifest as ${existing.action}`);
      continue;
    }
    const page = { path: n.path, title: n.title, action: 'NEW', type: n.type, zone: n.zone, sidebar_position: n.sidebar_position, facts: n.facts || [], claims: n.claims || [], stale: [], reason: n.reason || '', note: '' };
    out.pages.push(page);
    byPath.set(page.path, page);
  }
  const dropped = new Map((out.dropped || []).map(d => [d.id, d]));
  for (const d of plan.dropped || []) if (!dropped.has(d.id)) dropped.set(d.id, { id: d.id, reason: d.reason });
  out.dropped = [...dropped.values()];
  return { manifest: out, problems };
}

export function run(argv) {
  const dir = argv.find(a => !a.startsWith('--'));
  if (!dir) {
    console.error('Usage: node scripts/doc-set/apply-plan.mjs <run-dir> [--write]');
    return 2;
  }
  const meta = readJson(dir, 'meta.json');
  const { manifest, problems } = applyPlan(readJson(dir, 'manifest.json'), readJson(dir, 'plan.json'));
  for (const n of manifest.pages.filter(p => p.action === 'NEW')) {
    const file = path.join(meta.docsWorktree, n.path);
    if (fs.existsSync(file)) problems.push(`newPages: ${n.path} already exists on disk`);
  }
  const counts = {};
  for (const p of manifest.pages) counts[p.action] = (counts[p.action] || 0) + 1;
  console.log(`${manifest.pages.length} pages: ${Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(', ')}; ${manifest.dropped.length} dropped`);
  for (const p of problems) console.log(`  problem: ${p}`);
  if (argv.includes('--write') && !problems.length) fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  return problems.length ? 1 : 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
