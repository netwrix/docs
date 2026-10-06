import fs from 'fs';
import path from 'path';
import { runSlopGate } from '../../doc-draft/slop.mjs';
import { inRanges } from './scope.mjs';

/**
 * A new page needs a `description` in its frontmatter. Existing pages are not
 * checked, so a legacy page without one doesn't block an unrelated edit.
 * Partials (a leading underscore) are never rendered as pages.
 */
export function missingDescription(file, markdown) {
  if (path.basename(file).startsWith('_')) return [];
  const fm = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const desc = fm?.[1].match(/^description:[ \t]*(.*)$/m)?.[1].trim().replace(/^(['"])(.*)\1$/, '$2').trim();
  if (desc) return [];
  return [{
    line: 1,
    rule: 'frontmatter:description',
    message: 'Add a `description:` to the frontmatter: one sentence saying what the reader can do or learn on this page.',
  }];
}

/**
 * Deterministic AI-isms gate for one page (slop.mjs). `ranges` limits an
 * existing page to its changed lines: only lexical hits inside them count,
 * and page-wide structural signals are skipped because they describe text
 * the author didn't write. A new page (`ranges` null) gets everything.
 */
export function scoreDeterministic(file, _config, markdown = fs.readFileSync(file, 'utf8'), ranges = null) {
  const slop = runSlopGate(file, markdown);
  const findings = ranges === null
    ? [...missingDescription(file, markdown), ...slop.findings]
    : slop.findings.filter(f => f.rule?.startsWith('slop-lexical:') && inRanges(f.line, ranges));
  return { pass: findings.length === 0, metrics: { slop: slop.metrics }, findings };
}
