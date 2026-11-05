#!/usr/bin/env node
/**
 * priority.mjs — rank the changed pages of a doc-set run so reviewers approve the important ones first.
 *
 *   node scripts/doc-set/priority.mjs <run-dir> [--json]
 *
 * Writes <run-dir>/priority.json ({ pages: { <short path>: { score, band, scope, consequence, C, R, Q, U, reasons } } })
 * and prints how many pages fall in each band. The review page reads that file; without it, the page falls
 * back to grouping by change type.
 *
 * Inputs: manifest.json, facts.json, claims.json, the drafted pages (through loadEntries), and
 * <run-dir>/priority-input.json ({ pages: { <short path>: { scope, consequence, rationale } } }), written by the
 * classify-scope step. Optional: <run-dir>/held-back.json ({ <short path>: count }) for held-back items the tools can't see.
 * A page missing from priority-input.json gets a path-based guess and is marked "unclassified".
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { readJson } from './manifest.mjs';
import { loadEntries } from './review-html.mjs';
import { docsPrefix } from './docs-paths.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const core = createRequire(import.meta.url)(path.join(here, 'review-core.js'));
const { scorePage, boostScope, floorConsequence, BAND_ORDER, PRIORITY } = core;

const PRODUCT_WIDE = /(^|\/)(requirements|install|upgrade|firstlaunch|overview)(\/|\.md|$)|^index\.md$/;
const UNVERIFIED_CLAIM = new Set(['jira-only', 'contradicted', 'not-shipped', 'cancelled']);

/** Path-only guess used when the classify step has no answer for a page. */
export function guessScope(short) {
  return PRODUCT_WIDE.test(short) ? 'product' : 'feature';
}

/** Count of reasons a page needs an expert's eye: unverified claims, held-back items, code-only facts, removed facts. */
export function uncertaintyOf(page, { factById, claimById, typoSet, heldBack, short }) {
  let n = 0;
  const parts = [];
  const claims = (page.claims || []).filter(id => claimById[id] && UNVERIFIED_CLAIM.has(claimById[id].status)).length;
  const codeOnly = (page.facts || []).filter(id => { const f = factById[id]; return f && !(f.tickets || []).length && (f.status === 'new' || f.status === 'changed'); }).length;
  const removed = (page.facts || []).filter(id => factById[id] && factById[id].status === 'removed').length;
  const held = (heldBack[short] || 0) + (typoSet.has(short) ? 1 : 0);
  n = claims + codeOnly + removed + held;
  if (claims) parts.push(`${claims} unverified claim${claims === 1 ? '' : 's'}`);
  if (codeOnly) parts.push(`${codeOnly} code-only fact${codeOnly === 1 ? '' : 's'}`);
  if (removed) parts.push(`${removed} removed`);
  if (held) parts.push(`${held} held back`);
  return { count: n, parts };
}

/** Rank every changed page. Returns { pages, counts }. */
export function rank(dir) {
  const manifest = readJson(dir, 'manifest.json');
  const factById = Object.fromEntries((readJson(dir, 'facts.json', { facts: [] }).facts).map(f => [f.id, f]));
  const claimById = Object.fromEntries((readJson(dir, 'claims.json', { claims: [] }).claims).map(c => [c.id, c]));
  const input = (readJson(dir, 'priority-input.json', { pages: {} }).pages) || {};
  const heldBack = readJson(dir, 'held-back.json', {});
  const typoSet = new Set(readJson(path.join(dir, 'review'), 'typo-files.json', []));
  const byPath = Object.fromEntries(manifest.pages.map(p => [p.path, p]));
  const { meta, entries } = loadEntries(dir);

  // Inbound links from other pages in the set: the top 10% by count are hubs.
  const inbound = {};
  for (const e of entries) {
    for (const m of e.newText.matchAll(/\]\(([^)#\s]+?)(?:\.md)?(?:#[^)]*)?\)/g)) {
      const base = path.posix.basename(m[1]);
      if (base && !/^https?:/.test(m[1])) inbound[base] = (inbound[base] || 0) + 1;
    }
  }
  const counts = entries.map(e => inbound[path.posix.basename(e.short, '.md')] || 0).sort((a, b) => b - a);
  const hubMin = Math.max(2, counts[Math.max(0, Math.ceil(entries.length * 0.1) - 1)] || 0);

  const pages = {};
  for (const e of entries) {
    const p = byPath[`${docsPrefix(meta)}${e.short}`] || {};
    const given = input[e.short];
    let scope = given && given.scope ? given.scope : guessScope(e.short);
    let consequence = given && given.consequence ? given.consequence : 'medium';
    const reasons = [];
    if (!given && e.action !== 'RESTYLED') reasons.push('unclassified');
    const links = inbound[path.posix.basename(e.short, '.md')] || 0;
    if (links >= hubMin && scope !== 'product') { scope = boostScope(scope); reasons.push(`hub (${links} links in)`); }
    const floored = floorConsequence(consequence, e.newText, p.type);
    if (floored !== consequence) reasons.push('risky wording or code');
    consequence = floored;
    const u = uncertaintyOf(p, { factById, claimById, typoSet, heldBack, short: e.short });
    const lines = Math.max(e.newLines, e.oldLines || 0, 1);
    const r = scorePage({ action: e.action, changedShare: (e.add + e.del) / (2 * lines), scope, consequence, uncertain: u.count });
    pages[e.short] = {
      score: r.score, band: r.band, scope, consequence, C: r.C, R: r.R, Q: r.Q, U: r.U,
      reasons: [scope, `${consequence} consequence`, e.action === 'RESTYLED' ? 'restyled only' : `${e.action.toLowerCase()}, ${e.add}+/${e.del}- lines`, ...u.parts, ...reasons, ...(given && given.rationale ? [given.rationale] : [])]
    };
  }
  const tally = Object.fromEntries(BAND_ORDER.map(b => [b, 0]));
  for (const v of Object.values(pages)) tally[v.band]++;
  return { pages, counts: tally };
}

export function run(argv) {
  const [dir] = argv.filter(a => !a.startsWith('--'));
  if (!dir) { console.error('Usage: node scripts/doc-set/priority.mjs <run-dir> [--json]'); return 2; }
  const { pages, counts } = rank(dir);
  fs.writeFileSync(path.join(dir, 'priority.json'), JSON.stringify({ thresholds: PRIORITY.bands, counts, pages }, null, 2) + '\n');
  const total = Object.keys(pages).length;
  console.log(`Ranked ${total} pages: ${BAND_ORDER.map(b => `${counts[b]} ${b}`).join(', ')}`);
  const nonRestyled = total - counts.P4;
  if (nonRestyled && counts.P1 / nonRestyled > 0.2) console.log(`Warning: P1 holds ${Math.round(100 * counts.P1 / nonRestyled)}% of the changed pages. Consider raising the P1 threshold.`);
  const unclassified = Object.values(pages).filter(v => v.reasons.includes('unclassified')).length;
  if (unclassified) console.log(`${unclassified} page${unclassified === 1 ? ' has' : 's have'} no scope or consequence from the classify step (path-based guess used).`);
  if (argv.includes('--json')) console.log(JSON.stringify(pages, null, 2));
  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
