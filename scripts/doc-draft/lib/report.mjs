/**
 * report.mjs — shared gate output contract.
 *
 * Every doc-draft gate (frontmatter.mjs, slop.mjs, readability.mjs,
 * leak-check.mjs, vale-gate.mjs) builds its result with buildResult() and
 * prints it with one of the print* functions below, so the JSON shape and
 * the human-facing table never drift between gates. See
 * .claude/references/doc-draft-conventions.md §7.2.
 */

/** @typedef {{ line: number, rule: string, message: string, text: string }} Finding */
/**
 * @typedef {{
 *   page: string,
 *   gate: string,
 *   pass: boolean,
 *   metrics: Record<string, unknown>,
 *   findings: Finding[]
 * }} GateResult
 */

/**
 * @param {{ page: string, gate: string, metrics?: Record<string, unknown>, findings?: Finding[] }} args
 * @returns {GateResult}
 */
export function buildResult({ page, gate, metrics = {}, findings = [] }) {
  return {
    page,
    gate,
    pass: findings.length === 0,
    metrics,
    findings,
  };
}

/**
 * Render findings as the repo's standard table, verbatim format used by
 * the `derek` and `dale` skills: `| Line | Rule | Message | Offending Text |`.
 * @param {Finding[]} findings
 * @returns {string}
 */
export function renderFindingsTable(findings) {
  if (findings.length === 0) {
    return 'No issues found.';
  }
  const rows = findings
    .slice()
    .sort((a, b) => a.line - b.line)
    .map(f => `| ${f.line} | ${escapeCell(f.rule)} | ${escapeCell(f.message)} | ${escapeCell(f.text)} |`);
  return ['| Line | Rule | Message | Offending Text |', '|------|------|---------|----------------|', ...rows].join('\n');
}

function escapeCell(value) {
  return String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

/**
 * Machine-facing summary in vale-autofix.sh's `{fixed:[…], skipped:[…]}`
 * shape (scripts/vale-autofix.sh). Gates never repair content (N5), so
 * `fixed` is always empty here — this exists only so downstream tooling
 * that already knows autofix's shape can consume gate output the same
 * way. `skipped` carries the findings a human or the drafter must still
 * act on.
 * @param {Finding[]} findings
 * @returns {{ fixed: [], skipped: Finding[] }}
 */
export function buildAutofixShapeSummary(findings) {
  return { fixed: [], skipped: findings };
}

/**
 * Print a gate result: JSON contract on stdout by default, or the human
 * table when `format` is 'table'.
 * @param {GateResult} result
 * @param {{ format?: 'json' | 'table' }} [opts]
 */
export function printResult(result, { format = 'json' } = {}) {
  if (format === 'table') {
    console.log(renderFindingsTable(result.findings));
    return;
  }
  console.log(JSON.stringify(result, null, 2));
}

/**
 * Standard CLI exit: gates exit non-zero when they fail, 0 when they pass.
 * @param {GateResult} result
 */
export function exitForResult(result) {
  process.exit(result.pass ? 0 : 1);
}
