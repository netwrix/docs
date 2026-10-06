/**
 * Dale: the model-checked style rules in .claude/skills/dale/rules/*.yml (passive voice, wordiness, idioms,
 * misplaced modifiers, undefined acronyms, ...). A model reads the page against all the rules in one call.
 * Like the AI-isms judge, it runs a few times and keeps findings that enough runs agree on; every finding
 * must quote the page verbatim and sit on a changed line. Verdicts are cached by page content and rules.
 */
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { getClient, textOf } from './llm.mjs';
import { verdictKey, readCachedVerdict, writeVerdict, verifyFindings, consensus } from './judge.mjs';
import { inRanges } from './scope.mjs';

const RULES_DIR = '.claude/skills/dale/rules';
const config = JSON.parse(fs.readFileSync(new URL('../config.json', import.meta.url), 'utf8'));
const RUNS = config.dale?.runs ?? 3;
const AGREE = Math.min(config.dale?.agree ?? 2, RUNS);
// Phrases a maintainer has decided are fine for Dale. Applied after the verdict is read, so editing the list needs no new model call.
const IGNORE = (config.dale?.ignoreQuotes ?? []).map(p => new RegExp(p, 'i'));

const SCHEMA = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: { rule: { type: 'string' }, quote: { type: 'string' }, reason: { type: 'string' } },
        required: ['rule', 'quote', 'reason'],
        additionalProperties: false,
      },
    },
  },
  required: ['findings'],
  additionalProperties: false,
};

export function loadRules() {
  return fs.readdirSync(RULES_DIR)
    .filter(f => f.endsWith('.yml'))
    .sort()
    .map(f => ({ name: path.basename(f, '.yml'), ...yaml.load(fs.readFileSync(path.join(RULES_DIR, f), 'utf8')) }));
}

const instructions = rules =>
  `You are Dale, a linter for Netwrix product documentation. Check the page against every rule below.\n` +
  `Report a violation only when it clearly breaks a rule's reason and a technical writer would agree it should change; when unsure, do not report it. ` +
  `For each violation give the rule name, the exact offending text copied verbatim from the page (one sentence at most), and a one-line reason. ` +
  `Ignore frontmatter, code blocks, inline code, link URLs, tables of commands, bold text (UI labels the writer must reproduce exactly), and text in double quotes (verbatim product messages). Do not report the same text twice for one rule.\n\n` +
  rules.map(r => `Rule "${r.name}": ${r.reason}\nMessage to the writer: ${r.message}`).join('\n\n');

/** One Dale run on a page, findings verified against the text and limited to known rules. No voting, no cache. */
export async function daleOnce(markdown, { model, client = getClient() }) {
  const rules = loadRules();
  const response = await client.messages.create({
    model,
    max_tokens: 4000,
    cache_control: { type: 'ephemeral' },
    system: instructions(rules),
    messages: [{ role: 'user', content: markdown }],
    output_config: { format: { type: 'json_schema', schema: SCHEMA } },
  });
  return verifyFindings(markdown, JSON.parse(textOf(response)).findings).filter(f => rules.some(r => r.name === f.rule));
}

/** @returns {Promise<{ pass: boolean, findings: object[], cached: boolean }>} */
export async function daleCheck(markdown, ranges = null, { model, client = getClient(), useCache = true } = {}) {
  const rules = loadRules();
  const system = instructions(rules);
  const key = verdictKey(markdown, `dale\n${RUNS}/${AGREE}\n${system}`, model);
  let verdict = useCache ? readCachedVerdict(key) : null;
  const cached = Boolean(verdict);
  if (!verdict) {
    const runs = await Promise.all(Array.from({ length: RUNS }, () => daleOnce(markdown, { model, client })));
    const findings = consensus(runs, AGREE);
    verdict = { pass: findings.length === 0, findings, model };
    if (useCache) writeVerdict(key, verdict);
  }
  const byRule = Object.fromEntries(rules.map(r => [r.name, r.message]));
  const findings = verdict.findings
    .filter(f => inRanges(f.line, ranges) && !IGNORE.some(re => re.test(f.quote)))
    .map(f => ({ line: f.line, rule: `dale:${f.rule}`, message: byRule[f.rule] || f.reason, text: f.quote }));
  return { pass: findings.length === 0, findings, cached };
}
