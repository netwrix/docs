#!/usr/bin/env node
/**
 * coverage.mjs — report how much of the code-derived fact pack the drafted pages cover.
 *
 *   node scripts/doc-set/coverage.mjs <run-dir> [--write]
 *
 * Joins facts.json, claims.json, manifest.json, and results/*.json. A fact is covered when
 * a page that was drafted (or kept) lists it. --write saves REPORT.md in <run-dir>.
 * Exits 1 when a non-internal fact is uncovered.
 */
import fs from 'fs';
import path from 'path';
import { readJson, readResults, statusSummary } from './manifest.mjs';

export function buildCoverage({ facts, claims, manifest, results }) {
  const coveredBy = new Map();
  const pageDone = new Map();
  for (const r of results) for (const p of r.pages || []) pageDone.set(p.path, p);
  for (const page of manifest.pages) {
    if (page.action === 'RETIRE') continue;
    const res = pageDone.get(page.path);
    const ok = page.action === 'KEEP' || res?.status === 'done';
    if (!ok) continue;
    const listed = page.action === 'KEEP' ? page.facts || [] : res.factsCovered || [];
    for (const id of listed) if (!coveredBy.has(id)) coveredBy.set(id, page.path);
  }
  const dropped = new Map((manifest.dropped || []).map(d => [d.id, d.reason]));
  const uncovered = facts.facts.filter(f => !f.internal && !f.duplicateOf && !f.outOfScope && f.status !== 'removed' && !coveredBy.has(f.id) && !dropped.has(f.id));
  const internals = facts.facts.filter(f => f.internal);
  const todos = [];
  const untraced = [];
  for (const p of pageDone.values()) {
    for (const t of p.todos || []) todos.push({ path: p.path, todo: t });
    for (const s of p.untraced || []) untraced.push({ path: p.path, sentence: s });
  }
  return {
    covered: coveredBy.size,
    total: facts.facts.filter(f => !f.internal && !f.duplicateOf && !f.outOfScope && f.status !== 'removed').length,
    uncovered,
    internals,
    outOfScope: facts.facts.filter(f => f.outOfScope && !f.duplicateOf),
    todos,
    untraced,
    contradicted: claims.claims.filter(c => c.status === 'contradicted'),
    jiraOnly: claims.claims.filter(c => c.status === 'jira-only'),
    differences: claims.claims.filter(c => (c.differences || []).length),
    dropped: [...dropped].map(([id, reason]) => ({ id, reason })),
    actions: statusSummary(manifest, results),
  };
}

export function renderReport(cov, manifest) {
  const L = [];
  L.push(`# doc-set report: ${manifest.product} ${manifest.version}`, '');
  L.push(`Coverage: ${cov.covered}/${cov.total} customer-visible facts mapped to a drafted or kept page.`, '');
  L.push('## Pages', '');
  for (const [a, r] of Object.entries(cov.actions)) L.push(`- ${a}: ${r.done}/${r.total}${r.failed ? ` (${r.failed} failed)` : ''}`);
  const section = (title, items, fmt) => {
    L.push('', `## ${title} (${items.length})`, '');
    if (!items.length) L.push('None.');
    for (const i of items) L.push(`- ${fmt(i)}`);
  };
  section('Uncovered facts', cov.uncovered, f => `${f.id}: ${f.statement} (${f.cite})`);
  section('Claims the code contradicts', cov.contradicted, c => `${c.key || c.id}: ${c.summary || ''} ${c.note || ''}`.trim());
  section('Ticket details the code contradicts', cov.differences, c => `${c.key || c.id}: ${c.differences.join('; ')}`);
  section('Jira-only claims (TODOs, not written as fact)', cov.jiraOnly, c => `${c.key || c.id}: ${c.summary || ''}`);
  section('TODOs left on pages', cov.todos, t => `${t.path}: ${t.todo}`);
  section('Sentences the verifier could not trace', cov.untraced, u => `${u.path}: ${u.sentence}`);
  section('Out of scope by writer decision', cov.outOfScope, f => `${f.id}: ${f.statement.slice(0, 110)} (${f.outOfScope})`);
  section('Internal facts left out', cov.internals, f => `${f.id}: ${f.statement}`);
  section('Dropped by the writer or triage', cov.dropped, d => `${d.id}: ${d.reason}`);
  return L.join('\n') + '\n';
}

export function run(argv) {
  const write = argv.includes('--write');
  const dir = argv.find(a => !a.startsWith('--'));
  if (!dir) {
    console.error('Usage: node scripts/doc-set/coverage.mjs <run-dir> [--write]');
    return 2;
  }
  const manifest = readJson(dir, 'manifest.json');
  const cov = buildCoverage({ facts: readJson(dir, 'facts.json'), claims: readJson(dir, 'claims.json', { claims: [] }), manifest, results: readResults(dir) });
  const report = renderReport(cov, manifest);
  if (write) fs.writeFileSync(path.join(dir, 'REPORT.md'), report);
  else process.stdout.write(report);
  return cov.uncovered.length ? 1 : 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
