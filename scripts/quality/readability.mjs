#!/usr/bin/env node
/**
 * readability.mjs - optional readability report. Not a gate and not a rewrite
 * target: nothing in CI or the pre-commit hook runs it, and agents do not revise
 * a draft to meet it (that risks changing meaning). A writer who wants the
 * numbers runs it; the reference points are in config.json.
 *
 *   node scripts/quality/readability.mjs <file.md> [...]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { scoreProse } from '../doc-draft/readability.mjs';
import { extractProse } from '../doc-draft/lib/prose.mjs';

const config = JSON.parse(fs.readFileSync(new URL('./config.json', import.meta.url), 'utf8'));

const LIST_ITEM = /^\s*(?:[-*+]|\d+[.)])\s+/;

/**
 * Prose for scoring, with every paragraph, list item, and heading closed by
 * terminal punctuation. splitSentences() only breaks at ". Capital", so an
 * unpunctuated bullet or heading would otherwise run into the next block and
 * count as one very long sentence.
 */
export function sentenceBounded(text) {
  const raw = text.split('\n').map(l => l.replace(/\s+$/, ''));
  return raw
    .map((l, i) => {
      if (!l.trim()) return l;
      const stripped = l.replace(/^(\s*)(?:(?:[-*+]|\d+[.)])\s+)?(?:\*\*|__|\*|_)?(?=\S)/, '$1');
      const next = raw[i + 1];
      const endsBlock = next === undefined || !next.trim() || LIST_ITEM.test(next) || /^\s*(?:\*\*|__)/.test(next);
      if (!endsBlock || /[.!?]["')\]]*$/.test(stripped)) return stripped;
      return `${stripped.replace(/[:;,]$/, '')}.`;
    })
    .join('\n');
}


export function checkReadability(markdown) {
  const t = config.readability;
  const m = scoreProse(sentenceBounded(extractProse(markdown).text));
  const problems = [];
  if (m.fleschReadingEase < t.fleschMin) problems.push(`Flesch ${m.fleschReadingEase.toFixed(1)} is below ${t.fleschMin}`);
  if (m.meanSentenceWords > t.meanSentenceWordsMax) problems.push(`mean sentence ${m.meanSentenceWords.toFixed(1)} words exceeds ${t.meanSentenceWordsMax}`);
  if (m.longSentenceSharePct > t.longSentenceSharePctMax) problems.push(`${m.longSentenceSharePct.toFixed(1)}% of sentences run over 30 words; the limit is ${t.longSentenceSharePctMax}%`);
  return { metrics: m, problems };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  let bad = 0;
  for (const f of process.argv.slice(2)) {
    const { metrics: m, problems } = checkReadability(fs.readFileSync(f, 'utf8'));
    console.log(`${problems.length ? 'BELOW ' : 'OK    '} ${f}  Flesch ${m.fleschReadingEase.toFixed(1)}, mean ${m.meanSentenceWords} words, ${m.longSentenceSharePct}% long`);
    problems.forEach(p => console.log(`   ${p}`));
    bad += problems.length ? 1 : 0;
  }
  process.exit(0); // a report, not a gate
}
