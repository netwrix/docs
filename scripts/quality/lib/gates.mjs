import fs from 'fs';
import { runSlopGate } from '../../doc-draft/slop.mjs';
import { inRanges } from './scope.mjs';

/**
 * Deterministic AI-isms gate for one page (slop.mjs). `ranges` limits an
 * existing page to its changed lines: only lexical hits inside them count,
 * and page-wide structural signals are skipped because they describe text
 * the author didn't write. A new page (`ranges` null) gets everything.
 */
export function scoreDeterministic(file, _config, markdown = fs.readFileSync(file, 'utf8'), ranges = null) {
  const slop = runSlopGate(file, markdown);
  const findings = ranges === null
    ? slop.findings
    : slop.findings.filter(f => f.rule?.startsWith('slop-lexical:') && inRanges(f.line, ranges));
  return { pass: findings.length === 0, metrics: { slop: slop.metrics }, findings };
}
