/**
 * Helpers for the model checks (Dale): a cache keyed by page + rules + model,
 * verbatim-quote verification, and voting across runs.
 * A finding only counts if its quote appears verbatim in the page.
 */
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const CACHE_DIR = () => process.env.QUALITY_CACHE_DIR || '.cache/quality';

const norm = s => s.replace(/\s+/g, ' ').trim();
const sha = s => crypto.createHash('sha256').update(s).digest('hex');

export function verdictKey(markdown, rubric, model) {
  return sha(`${model}\n${sha(rubric)}\n${sha(markdown)}`);
}

export function readCachedVerdict(key) {
  try {
    return JSON.parse(fs.readFileSync(path.join(CACHE_DIR(), `${key}.json`), 'utf8'));
  } catch {
    return null;
  }
}

export function writeVerdict(key, verdict) {
  fs.mkdirSync(CACHE_DIR(), { recursive: true });
  fs.writeFileSync(path.join(CACHE_DIR(), `${key}.json`), JSON.stringify(verdict));
}

/** Drop findings whose quote is not in the page, and attach a line number. */
export function verifyFindings(markdown, findings) {
  const lines = markdown.split('\n');
  const flat = norm(markdown);
  return findings
    .filter(f => f.quote && flat.includes(norm(f.quote)))
    .map(f => {
      const needle = norm(f.quote).slice(0, 40);
      const idx = lines.findIndex(l => norm(l).includes(needle));
      return { ...f, line: idx === -1 ? 0 : idx + 1 };
    });
}

const words = q => new Set(norm(q).toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, '').split(' ').filter(Boolean));

/** Two quotes point at the same text when one contains most of the other's words, whatever pattern number each run gave it. */
export function sameSpot(a, b) {
  const x = words(a.quote);
  const y = words(b.quote);
  const shared = [...x].filter(w => y.has(w)).length;
  return shared >= 0.6 * Math.min(x.size, y.size);
}

/** Keep findings that at least `agree` of the runs reported at the same spot. The first run's wording is used. */
export function consensus(runs, agree) {
  if (agree <= 1) return runs.flat().filter((f, i, all) => all.findIndex(g => sameSpot(f, g)) === i);
  const kept = [];
  for (const f of runs.flat()) {
    if (kept.some(k => sameSpot(k, f))) continue;
    const votes = runs.filter(r => r.some(g => sameSpot(f, g))).length;
    if (votes >= agree) kept.push(f);
  }
  return kept;
}
