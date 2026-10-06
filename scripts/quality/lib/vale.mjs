/**
 * Vale findings for a page, from the text itself (so a staged version can be checked), restricted to
 * the changed lines of an existing page. Uses the repo's .vale.ini, so a writer sees the same rules in
 * their editor. Never fixes anything.
 */
import { spawnSync } from 'child_process';
import { inRanges } from './scope.mjs';

export const VALE_INSTALL = 'Vale is not installed. Install it (macOS: brew install vale; Linux: sudo snap install vale; Windows: choco install vale; or download from https://github.com/errata-ai/vale/releases), then commit again.';

let available;
export function valeAvailable() {
  available ??= spawnSync('vale', ['--version'], { stdio: 'ignore' }).status === 0;
  return available;
}

/**
 * @param {string} markdown
 * @param {[number, number][] | null} ranges  null = whole page
 * @param {{ ignore?: string[] }} opts  Vale check names to skip, e.g. "Netwrix.FirstPerson"
 * @returns {{ status: 'ok' | 'missing' | 'error', findings: object[], error?: string }}
 */
export function runVale(markdown, ranges = null, { ignore = [] } = {}) {
  if (!valeAvailable()) return { status: 'missing', findings: [] };
  const res = spawnSync('vale', ['--output=JSON', '--ext=.md'], { input: markdown, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  let parsed;
  try {
    parsed = JSON.parse(res.stdout || '{}');
  } catch {
    return { status: 'error', findings: [], error: (res.stderr || res.stdout || 'vale failed').slice(0, 300) };
  }
  const findings = Object.values(parsed)
    .flat()
    .filter(a => a && a.Check && !ignore.includes(a.Check) && inRanges(a.Line, ranges))
    .map(a => ({ line: a.Line, rule: `vale:${a.Check}`, message: a.Message, text: a.Match || '' }))
    .sort((a, b) => a.line - b.line);
  return { status: 'ok', findings };
}
