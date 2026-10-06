#!/usr/bin/env node

/**
 * readability.mjs — deterministic prose readability gate (Phase 1).
 *
 * Phase 1 of the docdraft quality system: no model calls, no fact pack, no
 * extractor — this gate must run standalone against an arbitrary markdown
 * file, today. It scores the four metrics in .claude/references/
 * doc-draft-conventions.md §4.1 (Flesch Reading Ease, mean sentence word
 * count, share of sentences over 30 words, mean syllables per word)
 * against thresholds calibrated from the repo's own shipped writing.
 *
 * §4.2 note: Phase 1 has no page-type template yet, so every page is
 * scored against one shared threshold set below. A template-driven
 * per-page-type override (e.g. looser thresholds for reference/API pages,
 * tighter for concept pages) is future work, not built here.
 *
 * Scoring runs on extractProse() output, not the raw file — tables, code
 * fences, JSX, frontmatter, and link URLs are not prose and would otherwise
 * skew sentence/word statistics (see lib/prose.mjs).
 *
 * Usage:
 *   node scripts/doc-draft/readability.mjs <file.md> [--table]
 *
 * Default output is the shared JSON gate-result contract (lib/report.mjs).
 * --table prints the human-facing findings table instead.
 */

import fs from 'fs';
import path from 'path';
import { extractProse, splitSentences, splitWords } from './lib/prose.mjs';
import { buildResult, printResult, exitForResult } from './lib/report.mjs';

const GATE = 'readability';
const LONG_SENTENCE_WORDS = 30;

// ---------------------------------------------------------------------------
// §4.1 thresholds — calibrated against the 56-page docs/accessanalyzer/26.1
// corpus:
//   git -C <repo> ls-files docs/accessanalyzer/26.1 | grep '\.md$' | grep -v '/kb/'
// All 56 pages must pass. A gate that rejects the repo's own accepted,
// shipped writing is not shippable, so each floor/ceiling below is set at
// or past the worst value actually observed in that corpus, not a guess.
//
// Worst observed across the 56 pages (prose only, after extractProse()):
//   Flesch Reading Ease   worst = 43.69  (dashboards-reports/dashboards/active-directory.md)
//                          -> floor set to 40
//   mean sentence words   worst = 26.48  (dashboards-reports/reports/identity.md)
//                          -> ceiling set to 27
//   long-sentence share   worst = 24.00% (install/adcs-tls-certificates.md)
//                          -> ceiling set to 25%
//   mean syllables/word   worst = 1.704  (integrations/index.md)
//                          -> ceiling set to 1.71
//
// The plan's proposed defaults (Flesch min ~50, mean sentence words max
// ~22, long-sentence share max ~15%) do not survive contact with the real
// corpus — several shipped pages (dashboard/report descriptions and
// integration pages with long, technical, multi-clause sentences) run
// measurably harder than that. Trust the data: thresholds below are set to
// the observed worst case (with a little headroom) so the gate flags
// genuinely unusual pages, not the repo's own normal register.
// ---------------------------------------------------------------------------
const THRESHOLDS = {
  fleschMin: 40,
  meanSentenceWordsMax: 27,
  longSentenceShareMax: 25,
  meanSyllablesPerWordMax: 1.71,
};

/**
 * Count syllables in a single word using the standard vowel-group
 * heuristic plus a suffix-adjustment table — the common approach behind
 * most Flesch implementations, not a dictionary lookup.
 * @param {string} rawWord
 * @returns {number}
 */
function countSyllables(rawWord) {
  const word = rawWord.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length === 0) return 0;
  if (word.length <= 3) return 1;

  let w = word;
  // Suffix adjustments: a trailing silent "e" (e.g. "make") doesn't add a
  // syllable, but "-le" preceded by a consonant does (e.g. "table",
  // "little" — the [^laeiouy] class excludes 'l' itself so "-le" endings
  // survive this strip). A trailing "ed" that isn't preceded by "t"/"d"
  // (e.g. "walked") is usually silent; "es" behaves the same way.
  w = w.replace(/(?:[^laeiouy]es|[^td]ed|[^laeiouy]e)$/, '');
  // A leading "y" acts as a consonant, not a vowel.
  w = w.replace(/^y/, '');

  const vowelGroups = w.match(/[aeiouy]{1,2}/g);
  return vowelGroups ? Math.max(vowelGroups.length, 1) : 1;
}

/**
 * Score prose text against the four §4.1 metrics.
 * @param {string} text
 * @returns {{
 *   fleschReadingEase: number, meanSentenceWords: number,
 *   longSentenceSharePct: number, meanSyllablesPerWord: number,
 *   sentenceCount: number, wordCount: number
 * }}
 */
export function scoreProse(text) {
  const sentences = splitSentences(text);
  const sentenceCount = sentences.length;

  let wordCount = 0;
  let syllableCount = 0;
  let longSentences = 0;

  for (const sentence of sentences) {
    const words = splitWords(sentence);
    wordCount += words.length;
    if (words.length > LONG_SENTENCE_WORDS) longSentences++;
    for (const word of words) {
      syllableCount += countSyllables(word);
    }
  }

  if (sentenceCount === 0 || wordCount === 0) {
    return {
      fleschReadingEase: 100,
      meanSentenceWords: 0,
      longSentenceSharePct: 0,
      meanSyllablesPerWord: 0,
      sentenceCount,
      wordCount,
    };
  }

  const meanSentenceWords = wordCount / sentenceCount;
  const meanSyllablesPerWord = syllableCount / wordCount;
  const fleschReadingEase =
    206.835 - 1.015 * meanSentenceWords - 84.6 * meanSyllablesPerWord;
  const longSentenceSharePct = (longSentences / sentenceCount) * 100;

  return {
    fleschReadingEase,
    meanSentenceWords,
    longSentenceSharePct,
    meanSyllablesPerWord,
    sentenceCount,
    wordCount,
  };
}

/**
 * Build findings for any metric that breaches its threshold. Metrics are
 * whole-document, not line-specific, so `line: 0` is used (top of the
 * document is the reasonable attribution point if one is needed).
 * @param {ReturnType<typeof scoreProse>} metrics
 * @returns {import('./lib/report.mjs').Finding[]}
 */
function buildFindings(metrics) {
  const findings = [];

  if (metrics.fleschReadingEase < THRESHOLDS.fleschMin) {
    findings.push({
      line: 0,
      rule: 'readability:flesch-reading-ease',
      message: `Flesch Reading Ease is ${metrics.fleschReadingEase.toFixed(1)}, threshold is ${THRESHOLDS.fleschMin}.`,
      text: '',
    });
  }
  if (metrics.meanSentenceWords > THRESHOLDS.meanSentenceWordsMax) {
    findings.push({
      line: 0,
      rule: 'readability:mean-sentence-words',
      message: `Mean sentence word count is ${metrics.meanSentenceWords.toFixed(1)}, threshold is ${THRESHOLDS.meanSentenceWordsMax}.`,
      text: '',
    });
  }
  if (metrics.longSentenceSharePct > THRESHOLDS.longSentenceShareMax) {
    findings.push({
      line: 0,
      rule: 'readability:long-sentence-share',
      message: `Share of sentences over ${LONG_SENTENCE_WORDS} words is ${metrics.longSentenceSharePct.toFixed(1)}%, threshold is ${THRESHOLDS.longSentenceShareMax}%.`,
      text: '',
    });
  }
  if (metrics.meanSyllablesPerWord > THRESHOLDS.meanSyllablesPerWordMax) {
    findings.push({
      line: 0,
      rule: 'readability:mean-syllables-per-word',
      message: `Mean syllables per word is ${metrics.meanSyllablesPerWord.toFixed(2)}, threshold is ${THRESHOLDS.meanSyllablesPerWordMax}.`,
      text: '',
    });
  }

  return findings;
}

/**
 * Run the gate against a single markdown file.
 * @param {string} filePath
 * @returns {import('./lib/report.mjs').GateResult}
 */
export function runGate(filePath) {
  const markdown = fs.readFileSync(filePath, 'utf8');
  const { text } = extractProse(markdown);
  const metrics = scoreProse(text);
  const findings = buildFindings(metrics);

  return buildResult({
    page: filePath,
    gate: GATE,
    metrics: {
      fleschReadingEase: round(metrics.fleschReadingEase, 2),
      meanSentenceWords: round(metrics.meanSentenceWords, 2),
      longSentenceSharePct: round(metrics.longSentenceSharePct, 2),
      meanSyllablesPerWord: round(metrics.meanSyllablesPerWord, 3),
      sentenceCount: metrics.sentenceCount,
      wordCount: metrics.wordCount,
    },
    findings,
  });
}

function round(value, digits) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function main() {
  const args = process.argv.slice(2);
  const useTable = args.includes('--table');
  const filePath = args.find(a => !a.startsWith('--'));

  if (!filePath) {
    console.error('Usage: node scripts/doc-draft/readability.mjs <file.md> [--table]');
    process.exit(2);
  }

  const resolved = path.resolve(filePath);
  const result = runGate(resolved);
  printResult(result, { format: useTable ? 'table' : 'json' });
  exitForResult(result);
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname);
if (isMain) {
  main();
}
