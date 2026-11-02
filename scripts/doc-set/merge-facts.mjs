#!/usr/bin/env node
/**
 * merge-facts.mjs — merge per-area extractor files into one facts.json.
 *
 *   node scripts/doc-set/merge-facts.mjs <run-dir> [--write]
 *
 * Reads <run-dir>/meta.json and <run-dir>/facts/*.json, assigns ids (F001, F002, ...),
 * and flags suspected duplicates across areas (same cite, or very similar statements) in
 * a report. It never drops a fact: a reviewer decides, then edits the area files or the
 * `duplicateOf` list in <run-dir>/dedupe.json. --write saves facts.json and dedupe-report.md.
 * Pairs at similarity 0.5 or above are marked `duplicateOf` (canonical = longest statement); lower pairs are only listed.
 * Exits 1 when a non-internal fact has no cite or a field is missing.
 */
import fs from 'fs';
import path from 'path';

const STATUSES = ['new', 'changed', 'removed', 'unchanged'];
const STOP = new Set(['the', 'a', 'an', 'is', 'are', 'to', 'of', 'in', 'on', 'for', 'and', 'or', 'by', 'with', 'as', 'it', 'its', 'that', 'this', 'when', 'if', 'now', 'be', 'can', 'not']);

export function tokens(s) {
  return new Set(String(s).toLowerCase().replace(/[^a-z0-9$_.\-\s]/g, ' ').split(/\s+/).filter(w => w.length > 1 && !STOP.has(w)));
}

export function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const w of a) if (b.has(w)) inter++;
  return inter / (a.size + b.size - inter);
}

export function mergeAreas(areas) {
  const facts = [];
  for (const a of areas) for (const f of a.facts) facts.push({ ...f, source: a.area });
  facts.forEach((f, i) => { f.id = `F${String(i + 1).padStart(3, '0')}`; });
  return facts.map(({ id, statement, cite, area, status, internal, tickets, source, outOfScope }) => ({ id, statement, cite: cite || '', area, status, internal: !!internal, tickets: tickets || [], source, ...(outOfScope ? { outOfScope } : {}) }));
}

export function problems(facts) {
  const out = [];
  for (const f of facts) {
    if (!f.statement) out.push(`${f.id}: empty statement`);
    if (!STATUSES.includes(f.status)) out.push(`${f.id}: bad status "${f.status}"`);
    if (!f.area) out.push(`${f.id}: no feature area`);
    if (!f.internal && !f.cite) out.push(`${f.id}: non-internal fact has no cite`);
  }
  return out;
}

/** Pairs from different source areas that look like the same fact. */
export function suspectedDuplicates(facts, threshold = 0.5) {
  const tok = facts.map(f => tokens(f.statement));
  const pairs = [];
  for (let i = 0; i < facts.length; i++) {
    for (let j = i + 1; j < facts.length; j++) {
      if (facts[i].source === facts[j].source) continue;
      const sim = jaccard(tok[i], tok[j]);
      const sameCite = facts[i].cite && facts[i].cite === facts[j].cite;
      if (sim >= threshold || (sameCite && sim >= 0.25)) pairs.push({ a: facts[i].id, b: facts[j].id, sim: Math.round(sim * 100) / 100, sameCite: !!sameCite });
    }
  }
  return pairs.sort((x, y) => y.sim - x.sim);
}

/** Union pairs at or above `threshold` into clusters; the longest statement is canonical. Returns Map(dupId -> canonicalId). */
export function clusterDuplicates(facts, pairs, threshold = 0.5) {
  const parent = new Map(facts.map(f => [f.id, f.id]));
  const find = x => (parent.get(x) === x ? x : (parent.set(x, find(parent.get(x))), parent.get(x)));
  for (const p of pairs) if (p.sim >= threshold) parent.set(find(p.a), find(p.b));
  const groups = new Map();
  for (const f of facts) {
    const r = find(f.id);
    if (!groups.has(r)) groups.set(r, []);
    groups.get(r).push(f);
  }
  const dupOf = new Map();
  for (const g of groups.values()) {
    if (g.length < 2) continue;
    const canon = g.reduce((best, f) => (f.statement.length > best.statement.length ? f : best));
    for (const f of g) if (f.id !== canon.id) dupOf.set(f.id, canon.id);
  }
  return dupOf;
}

export function run(argv) {
  const dir = argv.find(a => !a.startsWith('--'));
  if (!dir) {
    console.error('Usage: node scripts/doc-set/merge-facts.mjs <run-dir> [--write]');
    return 2;
  }
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'meta.json'), 'utf8'));
  const files = fs.readdirSync(path.join(dir, 'facts')).filter(f => f.endsWith('.json')).sort();
  const areas = files.map(f => JSON.parse(fs.readFileSync(path.join(dir, 'facts', f), 'utf8')));
  const facts = mergeAreas(areas);
  const probs = problems(facts);
  const dups = suspectedDuplicates(facts);
  const dupOf = clusterDuplicates(facts, dups);
  for (const f of facts) if (dupOf.has(f.id)) f.duplicateOf = dupOf.get(f.id);
  const byId = new Map(facts.map(f => [f.id, f]));
  const counts = {};
  for (const f of facts) counts[f.status] = (counts[f.status] || 0) + 1;
  const lines = [`# Fact merge: ${meta.product} ${meta.version}`, '', `${facts.length} facts from ${files.length} areas (${Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(', ')}); ${facts.filter(f => f.internal).length} internal.`, '', `${facts.filter(f => f.outOfScope).length} facts are marked \`outOfScope\` by a writer decision and drop out of assignment and coverage; the coverage report lists them.`, '', `${dupOf.size} facts at similarity 0.5 or above are marked \`duplicateOf\` a canonical fact (the longest statement) and drop out of assignment and coverage. Pairs below 0.5 stay separate.`, '', `## Suspected duplicates (${dups.length})`, ''];
  for (const d of dups) {
    const a = byId.get(d.a), b = byId.get(d.b);
    lines.push(`- ${d.a} [${a.source}] vs ${d.b} [${b.source}] sim ${d.sim}${d.sameCite ? ' same cite' : ''}`, `  - ${a.statement}`, `  - ${b.statement}`);
  }
  if (probs.length) lines.push('', `## Problems (${probs.length})`, '', ...probs.map(p => `- ${p}`));
  if (argv.includes('--write')) {
    const out = { product: meta.product, version: meta.version, ref: meta.ref, refSha: meta.refSha, baseline: meta.baseline, baselineSha: meta.baselineSha, facts };
    fs.writeFileSync(path.join(dir, 'facts.json'), JSON.stringify(out, null, 2) + '\n');
    fs.writeFileSync(path.join(dir, 'dedupe-report.md'), lines.join('\n') + '\n');
    console.log(`Wrote ${facts.length} facts, ${dups.length} suspected duplicate pairs, ${probs.length} problem(s)`);
  } else console.log(lines.join('\n'));
  return probs.length ? 1 : 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
