#!/usr/bin/env node
/**
 * manifest.mjs — validate a /doc-set manifest or report its progress.
 *
 *   node scripts/doc-set/manifest.mjs validate <run-dir>
 *   node scripts/doc-set/manifest.mjs status <run-dir>
 *
 * <run-dir> is .doc-set/<product>-<version>/ and holds facts.json, claims.json,
 * manifest.json, and results/*.json (schemas: .claude/skills/doc-set/references/fact-pack.md).
 * validate exits 1 on any problem.
 */
import fs from 'fs';
import path from 'path';

export const ACTIONS = ['KEEP', 'RESTYLE', 'UPDATE', 'REWRITE', 'RETIRE', 'NEW'];
const NEEDS_FACTS = ['UPDATE', 'REWRITE', 'NEW'];

export function readJson(dir, name, fallback) {
  const file = path.join(dir, name);
  if (!fs.existsSync(file)) {
    if (fallback !== undefined) return fallback;
    throw new Error(`Missing ${file}`);
  }
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function readResults(dir) {
  const resDir = path.join(dir, 'results');
  if (!fs.existsSync(resDir)) return [];
  return fs.readdirSync(resDir).filter(f => f.endsWith('.json')).sort()
    .map(f => JSON.parse(fs.readFileSync(path.join(resDir, f), 'utf8')));
}

/** Returns a list of problem strings; empty means the manifest is valid. */
export function validateManifest({ facts, claims, manifest }) {
  const problems = [];
  const factIds = new Set(facts.facts.map(f => f.id));
  const claimIds = new Set(claims.claims.map(c => c.id));
  const assignedFacts = new Set();
  const assignedClaims = new Set();
  const paths = new Set();
  const positions = new Map();

  for (const f of facts.facts) {
    if (!f.cite && !f.internal) problems.push(`Fact ${f.id} has no citation`);
  }

  for (const page of manifest.pages) {
    const where = page.path || '(no path)';
    if (!page.path) problems.push('A page has no path');
    else if (/(^|\/)kb\//.test(page.path)) problems.push(`${page.path}: KB articles are out of scope for a doc set`);
    else if (paths.has(page.path)) problems.push(`Duplicate page path ${page.path}`);
    paths.add(page.path);
    if (!ACTIONS.includes(page.action)) problems.push(`${where}: unknown action "${page.action}"`);
    if (page.action !== 'RETIRE' && page.action !== 'KEEP' && !page.type) problems.push(`${where}: missing page type`);
    if (NEEDS_FACTS.includes(page.action) && !page.mechanical && !(page.facts || []).length) problems.push(`${where}: ${page.action} page has no assigned facts`);
    for (const id of page.facts || []) {
      if (!factIds.has(id)) problems.push(`${where}: unknown fact ${id}`);
      assignedFacts.add(id);
    }
    for (const id of page.claims || []) {
      if (!claimIds.has(id)) problems.push(`${where}: unknown claim ${id}`);
      assignedClaims.add(id);
    }
    if (page.action !== 'RETIRE' && page.sidebar_position !== undefined) {
      const dir = path.dirname(page.path);
      const key = `${dir}#${page.sidebar_position}`;
      const prev = positions.get(key);
      // Collisions between pages the 3.3 docs already had are not this run's doing; report only those a NEW page causes.
      if (prev && (page.action === 'NEW' || prev.action === 'NEW')) problems.push(`${where}: sidebar_position ${page.sidebar_position} collides with ${prev.path}`);
      else if (!prev) positions.set(key, { path: page.path, action: page.action });
    }
  }

  const dropped = new Set((manifest.dropped || []).map(d => d.id));
  for (const id of dropped) if (!factIds.has(id) && !claimIds.has(id)) problems.push(`Dropped id ${id} matches no fact or claim`);
  for (const f of facts.facts) {
    if (f.duplicateOf || f.outOfScope) continue;
    if (!f.internal && f.status !== 'removed' && !assignedFacts.has(f.id) && !dropped.has(f.id)) problems.push(`Fact ${f.id} is neither assigned to a page nor dropped`);
  }
  for (const c of claims.claims) {
    if (['contradicted', 'not-shipped', 'internal', 'cancelled'].includes(c.status)) continue;
    if (!assignedClaims.has(c.id) && !dropped.has(c.id)) problems.push(`Claim ${c.id} is neither assigned to a page nor dropped`);
  }
  return problems;
}

export function statusSummary(manifest, results) {
  const done = new Map();
  for (const r of results) for (const p of r.pages || []) done.set(p.path, p.status);
  const rows = {};
  for (const page of manifest.pages) {
    const row = rows[page.action] ||= { total: 0, done: 0, failed: 0 };
    row.total++;
    if (page.action === 'KEEP' || page.action === 'RETIRE') row.done++;
    else if (done.get(page.path) === 'done') row.done++;
    else if (done.get(page.path) === 'failed') row.failed++;
  }
  return rows;
}

export function run(argv) {
  const [cmd, dir] = argv;
  if (!['validate', 'status'].includes(cmd) || !dir) {
    console.error('Usage: node scripts/doc-set/manifest.mjs validate|status <run-dir>');
    return 2;
  }
  const manifest = readJson(dir, 'manifest.json');
  if (cmd === 'status') {
    for (const [action, r] of Object.entries(statusSummary(manifest, readResults(dir)))) {
      console.log(`${action.padEnd(8)} ${r.done}/${r.total} done${r.failed ? `, ${r.failed} failed` : ''}`);
    }
    return 0;
  }
  const problems = validateManifest({ facts: readJson(dir, 'facts.json'), claims: readJson(dir, 'claims.json', { claims: [] }), manifest });
  if (problems.length) {
    console.log(`FAIL  ${problems.length} manifest problem(s):`);
    for (const p of problems) console.log(`  - ${p}`);
    return 1;
  }
  console.log(`PASS  ${manifest.pages.length} page(s) in the manifest`);
  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
