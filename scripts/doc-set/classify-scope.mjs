#!/usr/bin/env node
/**
 * classify-scope.mjs — the model-assisted half of review priority. Each changed page gets a scope and a consequence.
 *
 *   node scripts/doc-set/classify-scope.mjs prepare <run-dir>           writes <run-dir>/classify/prompt.md and rows.json
 *   node scripts/doc-set/classify-scope.mjs merge <run-dir> <answer.json>   validates the answer and updates priority-input.json
 *
 * prepare skips pages whose text hash matches the cached answer in priority-input.json, so a rerun only asks about changed pages.
 * The answer is { "<short path>": { "scope": "...", "consequence": "...", "rationale": "..." } }.
 */
import fs from 'fs';
import { isMain } from './is-main.mjs';
import path from 'path';
import { readJson } from './manifest.mjs';
import { loadEntries } from './review-html.mjs';

export const SCOPES = ['product', 'feature', 'sub-feature', 'edge'];
export const CONSEQUENCES = ['high', 'medium', 'low'];

export const RUBRIC = `Classify each documentation page on two scales.

scope: how many readers depend on the page.
- product: every customer needs it (requirements, install, upgrade, first launch, security hardening, licensing, the landing page).
- feature: setting up or using a core feature of the product.
- sub-feature: one option, setting or subtype inside a feature.
- edge: a rare configuration, a narrow integration or a single error.

consequence: what happens if the page is wrong.
- high: the install or an upgrade can break, data can be lost, security weakens (credentials, permissions, keys, ports), or the license is breached.
- medium: a feature is misconfigured or does not work.
- low: the reader is confused or looks up a wrong value and can recover.

Judge by the page's job for the reader, not its folder. Return one JSON object keyed by the page's "short" path, each value
{ "scope": ..., "consequence": ..., "rationale": "six words or fewer" }. Return only the JSON.`;

const hashOf = e => e.hash;

export function prepare(dir) {
  const { entries } = loadEntries(dir);
  const cached = readJson(dir, 'priority-input.json', { pages: {} }).pages || {};
  const rows = entries.filter(e => e.action !== 'RESTYLED' && !(cached[e.short] && cached[e.short].hash === hashOf(e)))
    .map(e => ({ short: e.short, title: e.title, action: e.action, headings: (e.newText.match(/^#{1,3} .+$/gm) || []).slice(0, 12), intro: e.newText.replace(/^---[\s\S]*?\n---\n/, '').trim().slice(0, 600) }));
  const out = path.join(dir, 'classify');
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, 'rows.json'), JSON.stringify(rows, null, 2) + '\n');
  fs.writeFileSync(path.join(out, 'prompt.md'), `${RUBRIC}\n\nPages:\n\n${JSON.stringify(rows, null, 2)}\n`);
  return rows.length;
}

export function merge(dir, answerFile) {
  const answer = JSON.parse(fs.readFileSync(answerFile, 'utf8'));
  const { entries } = loadEntries(dir);
  const hashes = Object.fromEntries(entries.map(e => [e.short, hashOf(e)]));
  const file = path.join(dir, 'priority-input.json');
  const cur = readJson(dir, 'priority-input.json', { pages: {} });
  const bad = [];
  for (const [short, v] of Object.entries(answer)) {
    if (!hashes[short]) bad.push(`${short}: not a changed page`);
    else if (!SCOPES.includes(v.scope) || !CONSEQUENCES.includes(v.consequence)) bad.push(`${short}: scope "${v.scope}" or consequence "${v.consequence}" is not allowed`);
    else cur.pages[short] = { scope: v.scope, consequence: v.consequence, rationale: String(v.rationale || '').slice(0, 60), hash: hashes[short] };
  }
  fs.writeFileSync(file, JSON.stringify(cur, null, 2) + '\n');
  const missing = entries.filter(e => e.action !== 'RESTYLED' && !cur.pages[e.short]).map(e => e.short);
  return { bad, missing };
}

export function run(argv) {
  const [cmd, dir, answer] = argv;
  if (cmd === 'prepare' && dir) { console.log(`${prepare(dir)} pages to classify. Prompt: ${path.join(dir, 'classify', 'prompt.md')}`); return 0; }
  if (cmd === 'merge' && dir && answer) {
    const { bad, missing } = merge(dir, answer);
    bad.forEach(b => console.error(b));
    if (missing.length) console.error(`Still unclassified: ${missing.join(', ')}`);
    console.log(bad.length || missing.length ? 'Merged with problems.' : 'Merged. Run priority.mjs next.');
    return bad.length || missing.length ? 1 : 0;
  }
  console.error('Usage: classify-scope.mjs prepare <run-dir> | merge <run-dir> <answer.json>');
  return 2;
}

if (isMain(import.meta.url)) process.exit(run(process.argv.slice(2)));
