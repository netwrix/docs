#!/usr/bin/env node

/**
 * Local Vale runner for the hk git hooks (.config/hk.pkl).
 *
 * Usage:
 *   node scripts/vale-local.mjs --fix   <file...>                  apply the mechanical fixes; never fails on leftovers
 *   node scripts/vale-local.mjs --check [--changed-only] <file...>  exit 1 if any warning- or error-level alert remains
 *
 * --changed-only blocks only on alerts on lines changed since the branch left
 * origin's default branch; older alerts in the same files are counted, not
 * blocked. Run it through `mise x --` so the pinned Vale is on PATH.
 *
 * Uses .vale-local.ini (the CI rules plus the local-only DaleLocal style).
 */

import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { applyFixes } from './lib/vale-autofix-rules.mjs';

const REPO_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const CONFIG = join(REPO_ROOT, '.vale-local.ini');
const BLOCKING = new Set(['warning', 'error']);
const BASE_REFS = ['origin/HEAD', 'origin/dev'];

export function toViolations(valeJson) {
  return Object.entries(valeJson).flatMap(([path, alerts]) =>
    alerts.map((a) => ({
      path,
      line: a.Line,
      column: a.Span?.[0] ?? 1,
      check: a.Check,
      message: a.Message,
      severity: a.Severity,
    })),
  );
}

export const blockingAlerts = (violations) => violations.filter((v) => BLOCKING.has(v.severity));

const normalizePath = (p) => p.replaceAll('\\', '/').replace(/^\.\//, '');

/** Maps each file in a `git diff -U0` to the [start, end] line ranges it adds. */
export function parseChangedLines(diff) {
  const changed = new Map();
  let current = null;
  let inHunk = false;
  for (const line of diff.split('\n')) {
    if (line.startsWith('diff --git ')) {
      current = null;
      inHunk = false;
    } else if (!inHunk && line.startsWith('+++ ')) {
      current = line.startsWith('+++ b/') ? line.slice('+++ b/'.length) : null;
    } else if (line.startsWith('@@ ')) {
      inHunk = true;
      const m = line.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/);
      const count = m?.[2] === undefined ? 1 : Number(m[2]);
      if (current && m && count > 0) {
        const start = Number(m[1]);
        if (!changed.has(current)) changed.set(current, []);
        changed.get(current).push([start, start + count - 1]);
      }
    }
  }
  return changed;
}

/** `changed` null means there was no base to diff against: everything blocks. */
export function splitByChangedLines(alerts, changed) {
  if (changed === null) return { blocking: alerts, existing: [] };
  const blocking = [];
  const existing = [];
  for (const a of alerts) {
    const ranges = changed.get(normalizePath(a.path)) ?? [];
    (ranges.some(([start, end]) => a.line >= start && a.line <= end) ? blocking : existing).push(a);
  }
  return { blocking, existing };
}

const git = (...args) => spawnSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });

// Diffs the working tree (what Vale reads) against the point where the branch
// left the default branch, so dev changes merged into the branch don't count.
function changedLinesSinceBranchPoint() {
  const base = BASE_REFS.find((ref) => git('rev-parse', '--verify', '--quiet', `${ref}^{commit}`).status === 0);
  const mergeBase = base && git('merge-base', base, 'HEAD').stdout.trim();
  if (!mergeBase) {
    console.log('vale-local: no origin/dev to compare against, so every alert in these files blocks.');
    return null;
  }
  const diff = git(
    '-c', 'core.quotePath=false', 'diff', '--no-color', '--no-ext-diff', '-U0', '-M',
    '--src-prefix=a/', '--dst-prefix=b/', mergeBase,
  );
  return diff.status === 0 ? parseChangedLines(diff.stdout) : null;
}

function runVale(files) {
  const run = spawnSync('vale', ['--config', CONFIG, '--output', 'JSON', ...files], {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  if (run.error) {
    console.error(
      `vale-local: could not run vale (${run.error.message}). Run this through mise: \`mise x -- node scripts/vale-local.mjs ...\`.`,
    );
    process.exit(2);
  }
  // Vale exits 1 when it finds error-level alerts and 2 on a runtime failure.
  if (run.status > 1 || !run.stdout.trim().startsWith('{')) {
    console.error(`vale-local: vale failed (exit ${run.status}):\n${run.stderr || run.stdout}`);
    process.exit(2);
  }
  return toViolations(JSON.parse(run.stdout));
}

function report(alerts) {
  for (const a of alerts) {
    console.log(`  ${a.path}:${a.line}:${a.column}  ${a.check}  ${a.message}`);
  }
}

function reportExisting(existing) {
  if (existing.length > 0) {
    console.log(`vale-local: ${existing.length} older issue(s) on lines you didn't change don't block the push.`);
  }
}

function fix(files) {
  const byFile = Map.groupBy(runVale(files), (v) => v.path);
  let total = 0;
  for (const [path, violations] of byFile) {
    const original = readFileSync(path, 'utf8');
    const { content, fixes } = applyFixes(original, violations);
    if (fixes.length > 0) {
      writeFileSync(path, content);
      total += fixes.length;
      console.log(`vale-local: fixed ${fixes.length} issue(s) in ${path}`);
    }
  }

  const remaining = blockingAlerts(total > 0 ? runVale(files) : [...byFile.values()].flat());
  const { blocking, existing } = splitByChangedLines(remaining, changedLinesSinceBranchPoint());
  if (blocking.length > 0) {
    console.log(`vale-local: ${blocking.length} issue(s) need a manual fix before you can push:`);
    report(blocking);
  }
  reportExisting(existing);
}

function check(files, changedOnly) {
  const alerts = blockingAlerts(runVale(files));
  const { blocking, existing } = changedOnly
    ? splitByChangedLines(alerts, changedLinesSinceBranchPoint())
    : { blocking: alerts, existing: [] };
  reportExisting(existing);
  if (blocking.length === 0) return;
  console.log(`vale-local: ${blocking.length} style issue(s) must be fixed before pushing:`);
  report(blocking);
  console.log('\nFix them by hand, or in Claude Code run /dale <file> or /doc-help.');
  process.exit(1);
}

function main(argv) {
  const [mode, ...rest] = argv;
  const changedOnly = rest[0] === '--changed-only';
  const files = changedOnly ? rest.slice(1) : rest;
  if (!['--fix', '--check'].includes(mode)) {
    console.error('Usage: node scripts/vale-local.mjs --fix|--check [--changed-only] <file...>');
    process.exit(2);
  }
  if (files.length === 0) return;
  if (mode === '--fix') fix(files);
  else check(files, changedOnly);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2));
}
