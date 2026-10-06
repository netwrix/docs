/**
 * Model judge for the 16 patterns in .claude/references/humanizer-rules.md.
 *
 * Verdicts are cached by sha256(page + rubric + model). The rewrite loop
 * stores the verdict for the version it ends on, so the PR check reads the
 * same answer instead of asking a model again and possibly disagreeing.
 * A finding only counts if its quote appears verbatim in the page.
 */
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { getClient, textOf } from './llm.mjs';

const config = JSON.parse(fs.readFileSync(new URL('../config.json', import.meta.url), 'utf8'));
// Phrases a maintainer has decided are fine. Matched against each finding's quote after the verdict is read, so editing the list needs no new model call.
const IGNORE = (config.judge?.ignoreQuotes ?? []).map(p => new RegExp(p, 'i'));
// Findings whose reason cites something the rubric does not contain (passive voice is Vale's job, not a pattern here).
const IGNORE_REASONS = (config.judge?.ignoreReasons ?? []).map(p => new RegExp(p, 'i'));
const applyIgnore = v => {
  const findings = v.findings.filter(f => !IGNORE.some(re => re.test(f.quote)) && !IGNORE_REASONS.some(re => re.test(f.reason)));
  return { ...v, findings, pass: findings.length === 0 };
};

const RUNS = config.judge?.runs ?? 1;
const AGREE = Math.min(config.judge?.agree ?? 1, RUNS);

const RUBRIC_PATH = '.claude/references/humanizer-rules.md';
const CACHE_DIR = () => process.env.QUALITY_CACHE_DIR || '.cache/quality';

const SCHEMA = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          pattern: { type: 'integer' },
          quote: { type: 'string' },
          reason: { type: 'string' },
        },
        required: ['pattern', 'quote', 'reason'],
        additionalProperties: false,
      },
    },
  },
  required: ['findings'],
  additionalProperties: false,
};

const norm = s => s.replace(/\s+/g, ' ').trim();
const sha = s => crypto.createHash('sha256').update(s).digest('hex');

const INSTRUCTIONS =
  `You judge Netwrix product documentation for signs of AI-generated writing, using only the rubric below.\n` +
  `Report an instance only when it clearly matches a numbered pattern and a technical writer would agree it should change. When unsure, do not report it. ` +
  `Ordinary technical usage is not a finding: "key" meaning important in a plain factual statement or a cryptographic, API, or registry key; hedged advice such as "it is generally recommended that" when the page is giving real guidance; and common words used literally. ` +
  `Patterns 1 and 14 apply to inflated or empty wording, such as promotional praise or a sentence that adds nothing, not to plain statements of importance or advice. ` +
  `For each finding, give the pattern number, the exact offending text copied verbatim from the page (one sentence at most), and a one-line reason. ` +
  `Report only what a numbered pattern in the rubric describes; passive voice and other style points are not patterns. Do not report anything the rubric assigns to the statistical gate. If the page has no instances, return an empty findings array.`;

export function verdictKey(markdown, rubric, model) {
  return sha(`${model}\n${RUNS}/${AGREE}\n${sha(INSTRUCTIONS)}\n${sha(rubric)}\n${sha(markdown)}`);
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

/** One judge run on a page, with its findings verified against the text. No voting, no cache. */
export async function judgeOnce(markdown, { model, client = getClient() }) {
  const rubric = fs.readFileSync(RUBRIC_PATH, 'utf8');
  const response = await client.messages.create({
    model,
    max_tokens: 4000,
    cache_control: { type: 'ephemeral' },
    system: `${INSTRUCTIONS}\n\n${rubric}`,
    messages: [{ role: 'user', content: markdown }],
    output_config: { format: { type: 'json_schema', schema: SCHEMA } },
  });
  return verifyFindings(markdown, JSON.parse(textOf(response)).findings);
}

/**
 * @param {string} markdown
 * @param {{ model: string, client?: any, useCache?: boolean }} opts
 * @returns {Promise<{ pass: boolean, findings: object[], cached: boolean, key: string }>}
 */
export async function judgePage(markdown, { model, client = getClient(), useCache = true }) {
  const rubric = fs.readFileSync(RUBRIC_PATH, 'utf8');
  const key = verdictKey(markdown, rubric, model);
  if (useCache) {
    const hit = readCachedVerdict(key);
    if (hit) return { ...applyIgnore(hit), cached: true, key };
  }

  const runs = await Promise.all(Array.from({ length: RUNS }, () => judgeOnce(markdown, { model, client })));
  const findings = consensus(runs, AGREE);
  const verdict = { pass: findings.length === 0, findings, model };
  if (useCache) writeVerdict(key, verdict);
  return { ...applyIgnore(verdict), cached: false, key };
}
