#!/usr/bin/env node

/**
 * slop.mjs — deterministic AI-isms / AI-slop gate.
 *
 * Phase 1 of the docdraft quality system: no model calls, no fact pack, no
 * extractor — this gate must run standalone on any markdown file today.
 * See .claude/references/doc-draft-conventions.md §3 (gate scope), §3.1
 * (lexical catalog), §3.2 (structural signals), §3.3 (em-dash density).
 *
 * Scores a page two ways:
 *   1. Lexical AI-isms — catalog lives in ai-isms.yml (never hardcoded
 *      here; ai-isms.yml is the single source of truth for the word list).
 *   2. Structural signals — sentence-length variance, tricolon rate,
 *      repeated paragraph openers, bullet density, heading-to-prose
 *      ratio, em-dash rate — computed as real numbers and compared
 *      against the floors/ceilings in ai-isms.yml.
 *
 * Usage:
 *   node scripts/doc-draft/slop.mjs <file.md>            # JSON GateResult
 *   node scripts/doc-draft/slop.mjs <file.md> --table    # findings table
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import { extractProse, splitSentences, splitWords } from './lib/prose.mjs';
import { buildResult, printResult, exitForResult } from './lib/report.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CATALOG_PATH = path.join(__dirname, 'ai-isms.yml');

/**
 * Load and parse ai-isms.yml. Exported so other scripts can reuse the
 * exact same loader instead of re-implementing YAML parsing.
 * @returns {{ lexical: Record<string,string>, structural: Record<string,any> }}
 */
export function loadCatalog() {
  const raw = fs.readFileSync(CATALOG_PATH, 'utf8');
  return yaml.load(raw);
}

function compileLexicalRules(catalog) {
  return Object.entries(catalog.lexical).map(([term, pattern]) => ({
    term,
    re: new RegExp(pattern, 'gi'),
  }));
}

/**
 * Scan prose lines for lexical AI-isms hits, mapped back to original file
 * line numbers via prose.lineNumbers.
 */
function findLexicalHits(prose, lexicalRules) {
  const findings = [];
  const lines = prose.text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const lineNo = prose.lineNumbers[i];
    for (const { term, re } of lexicalRules) {
      re.lastIndex = 0;
      let match;
      while ((match = re.exec(line)) !== null) {
        findings.push({
          line: lineNo,
          rule: `slop-lexical:${term}`,
          message: `Avoid AI-ism '${term}'.`,
          text: line.trim(),
        });
        if (match[0].length === 0) re.lastIndex += 1;
      }
    }
  }
  return findings;
}

function mean(nums) {
  return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;
}

function stddev(nums) {
  if (nums.length === 0) return 0;
  const m = mean(nums);
  const variance = mean(nums.map(n => (n - m) ** 2));
  return Math.sqrt(variance);
}

/** Sentence-length variance: word count per sentence, stddev across the page. */
function computeSentenceLengthStats(proseText) {
  const sentences = splitSentences(proseText);
  const lengths = sentences.map(s => splitWords(s).length).filter(n => n > 0);
  return { sentenceCount: lengths.length, stddev: stddev(lengths) };
}

// Three-part parallel construction at the clause level: "X, Y, and Z" (or
// "or"), each part a short run of words — not just any 3-item list.
const TRICOLON_RE =
  /\b[A-Za-z0-9][\w'-]*(?:\s+[A-Za-z0-9][\w'-]*){0,4},\s+[A-Za-z0-9][\w'-]*(?:\s+[A-Za-z0-9][\w'-]*){0,4},\s+(?:and|or)\s+[A-Za-z0-9][\w'-]*(?:\s+[A-Za-z0-9][\w'-]*){0,4}/gi;

/** Tricolon frequency, per 100 sentences. */
function computeTricolonRate(proseText) {
  const sentences = splitSentences(proseText);
  let count = 0;
  for (const s of sentences) {
    const matches = s.match(TRICOLON_RE);
    if (matches) count += matches.length;
  }
  const rate = sentences.length ? (count / sentences.length) * 100 : 0;
  return { sentenceCount: sentences.length, count, rate };
}

/** Repeated paragraph openers: same first word starting >= 2 paragraphs. */
function computeRepeatedOpenersRate(proseText) {
  const paragraphs = proseText
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean);
  const counts = {};
  for (const p of paragraphs) {
    const firstWord = (splitWords(p.split('\n')[0])[0] || '').toLowerCase();
    if (!firstWord) continue;
    counts[firstWord] = (counts[firstWord] || 0) + 1;
  }
  const maxRepeat = Object.values(counts).reduce((a, b) => Math.max(a, b), 0);
  const rate = paragraphs.length ? maxRepeat / paragraphs.length : 0;
  return { paragraphCount: paragraphs.length, maxRepeat, rate };
}

const HEADING_LINE_RE = /^\s{0,3}#{1,6}\s+/;
const BULLET_LINE_RE = /^\s*(?:[-*+]|\d+[.)])\s+/;

/** Bullet density and heading-to-prose ratio, both as a share of non-blank body lines. */
function computeLineShapeRatios(markdown, prose) {
  const rawLines = markdown.split('\n');
  const proseLines = prose.text.split('\n');
  let nonBlankCount = 0;
  let headingCount = 0;
  let bulletCount = 0;
  for (let i = 0; i < proseLines.length; i++) {
    if (!proseLines[i].trim()) continue;
    nonBlankCount++;
    const raw = rawLines[prose.lineNumbers[i] - 1] || '';
    if (HEADING_LINE_RE.test(raw)) headingCount++;
    else if (BULLET_LINE_RE.test(raw)) bulletCount++;
  }
  return {
    nonBlankCount,
    bulletDensity: nonBlankCount ? bulletCount / nonBlankCount : 0,
    headingToProseRatio: nonBlankCount ? headingCount / nonBlankCount : 0,
  };
}

/** Em-dash rate, per 100 words. House style prescribes em dashes — see §3.3 — so this only fires on abnormal density. */
function computeEmDashRate(proseText) {
  const emDashCount = (proseText.match(/—/g) || []).length;
  const wordCount = splitWords(proseText).length;
  return { emDashCount, wordCount, rate: wordCount ? (emDashCount / wordCount) * 100 : 0 };
}

/**
 * Compute every structural metric for a page, and evaluate each one
 * against ai-isms.yml's structural thresholds.
 * @returns {{ metrics: Record<string, unknown>, findings: import('./lib/report.mjs').Finding[] }}
 */
export function computeStructuralSignals(markdown, prose, structuralConfig) {
  const findings = [];
  const metrics = {};

  const sentenceStats = computeSentenceLengthStats(prose.text);
  metrics.sentenceLengthStddev = round(sentenceStats.stddev);
  metrics.sentenceCount = sentenceStats.sentenceCount;
  const slCfg = structuralConfig.sentence_length_stddev;
  if (sentenceStats.sentenceCount >= slCfg.min_sentences && sentenceStats.stddev < slCfg.floor) {
    findings.push({
      line: 1,
      rule: 'slop-structural:sentence-length-stddev',
      message: `Sentence-length stddev is ${round(sentenceStats.stddev)} words (floor ${slCfg.floor}) — uniform sentence rhythm is a strong AI tell.`,
      text: `stddev=${round(sentenceStats.stddev)} over ${sentenceStats.sentenceCount} sentences`,
    });
  }

  const tricolon = computeTricolonRate(prose.text);
  metrics.tricolonRatePer100Sentences = round(tricolon.rate);
  const triCfg = structuralConfig.tricolon_rate_per_100_sentences;
  if (tricolon.sentenceCount >= triCfg.min_sentences && tricolon.rate > triCfg.ceiling) {
    findings.push({
      line: 1,
      rule: 'slop-structural:tricolon-rate',
      message: `Tricolon rate is ${round(tricolon.rate)} per 100 sentences (ceiling ${triCfg.ceiling}) — overuse of "X, Y, and Z" parallelism is a strong AI tell.`,
      text: `${tricolon.count} tricolons over ${tricolon.sentenceCount} sentences`,
    });
  }

  const openers = computeRepeatedOpenersRate(prose.text);
  metrics.repeatedParagraphOpenersRate = round(openers.rate);
  const openCfg = structuralConfig.repeated_paragraph_openers_rate;
  if (openers.paragraphCount >= openCfg.min_paragraphs && openers.rate > openCfg.ceiling) {
    findings.push({
      line: 1,
      rule: 'slop-structural:repeated-paragraph-openers',
      message: `Repeated paragraph-opener rate is ${round(openers.rate)} (ceiling ${openCfg.ceiling}) — ${openers.maxRepeat} of ${openers.paragraphCount} paragraphs share the same opening word.`,
      text: `maxRepeat=${openers.maxRepeat} paragraphs=${openers.paragraphCount}`,
    });
  }

  const shapes = computeLineShapeRatios(markdown, prose);
  metrics.bulletDensity = round(shapes.bulletDensity);
  metrics.headingToProseRatio = round(shapes.headingToProseRatio);
  const bulletCfg = structuralConfig.bullet_density;
  if (shapes.bulletDensity > bulletCfg.ceiling) {
    findings.push({
      line: 1,
      rule: 'slop-structural:bullet-density',
      message: `Bullet density is ${round(shapes.bulletDensity)} of body lines (ceiling ${bulletCfg.ceiling}) — the page is almost entirely fragmented bullets.`,
      text: `bulletDensity=${round(shapes.bulletDensity)}`,
    });
  }
  const headingCfg = structuralConfig.heading_to_prose_ratio;
  if (shapes.headingToProseRatio > headingCfg.ceiling) {
    findings.push({
      line: 1,
      rule: 'slop-structural:heading-to-prose-ratio',
      message: `Heading-to-prose ratio is ${round(shapes.headingToProseRatio)} (ceiling ${headingCfg.ceiling}) — too many headings relative to body content.`,
      text: `headingToProseRatio=${round(shapes.headingToProseRatio)}`,
    });
  }

  const emDash = computeEmDashRate(prose.text);
  metrics.emDashRatePer100Words = round(emDash.rate);
  const emDashCfg = structuralConfig.em_dash_rate_per_100_words;
  if (emDash.rate > emDashCfg.ceiling) {
    findings.push({
      line: 1,
      rule: 'slop-structural:em-dash-rate',
      message: `Em-dash rate is ${round(emDash.rate)} per 100 words (ceiling ${emDashCfg.ceiling}) — abnormally dense even accounting for house style's prescribed em-dash use.`,
      text: `emDashCount=${emDash.emDashCount} words=${emDash.wordCount}`,
    });
  }

  return { metrics, findings };
}

function round(n) {
  return Math.round(n * 100) / 100;
}

/**
 * Run the full gate against a markdown string. Exported for calibration
 * tooling and tests; the CLI below is a thin wrapper around this.
 * @param {string} page - file path, used only for the GateResult's `page` field.
 * @param {string} markdown - raw file contents.
 * @returns {import('./lib/report.mjs').GateResult}
 */
export function runSlopGate(page, markdown) {
  const catalog = loadCatalog();
  const prose = extractProse(markdown);
  const lexicalRules = compileLexicalRules(catalog);

  const lexicalFindings = findLexicalHits(prose, lexicalRules);
  const { metrics, findings: structuralFindings } = computeStructuralSignals(
    markdown,
    prose,
    catalog.structural
  );

  const findings = [...lexicalFindings, ...structuralFindings];
  return buildResult({ page, gate: 'slop', metrics, findings });
}

function main() {
  const args = process.argv.slice(2);
  const tableFlag = args.includes('--table');
  const file = args.find(a => !a.startsWith('--'));

  if (!file) {
    console.error('Usage: node scripts/doc-draft/slop.mjs <file> [--table]');
    process.exit(2);
  }

  const filePath = path.resolve(file);
  const markdown = fs.readFileSync(filePath, 'utf8');
  const result = runSlopGate(file, markdown);

  printResult(result, { format: tableFlag ? 'table' : 'json' });
  exitForResult(result);
}

const isDirectRun = path.resolve(process.argv[1] || '') === path.resolve(__filename);
if (isDirectRun) {
  main();
}
