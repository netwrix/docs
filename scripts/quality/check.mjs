#!/usr/bin/env node
/**
 * check.mjs - the pre-PR check for documentation a change adds or edits: AI-isms, Vale, and Dale.
 *
 *   node scripts/quality/check.mjs [--staged | --base origin/dev] [--files list.txt]
 *                                  [--file <path> ...] [--no-model | --require-model]
 *                                  [--no-lint] [--vale-optional] [--only list.txt] [--table]
 *
 * A new page is checked whole. An existing page is checked only on the lines
 * the change adds or rewrites; text it already had is left alone. slop.mjs
 * and Vale run first; Dale (a model) runs only on a page that passes them, and its
 * verdict is cached by page content. Exit 0 = pass, 1 = fail.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import { discoverChanges, onlyListed } from './lib/scope.mjs';
import { checkDeterministic } from './lib/gates.mjs';
import { daleCheck } from './lib/dale.mjs';
import { runVale, VALE_INSTALL } from './lib/vale.mjs';
import { hasApiKey } from './lib/llm.mjs';
import { mapPool } from './lib/pool.mjs';

const config = JSON.parse(fs.readFileSync(new URL('./config.json', import.meta.url), 'utf8'));

export async function checkPage(file, { ranges = null, model = true, requireModel = false, daleFn, lint = false, valeOptional = false, markdown = fs.readFileSync(file, 'utf8') } = {}) {
  const det = checkDeterministic(file, config, markdown, ranges);
  const result = {
    path: file,
    deterministic: det,
    vale: { status: 'skipped', findings: [] },
    dale: { status: 'skipped', findings: [] },
  };
  let pass = det.pass;

  // Style lint (Vale is instant, so it runs with the other code checks before any model is called).
  if (lint) {
    const v = runVale(markdown, ranges, { ignore: config.vale?.ignore });
    if (v.status === 'missing' && !valeOptional) {
      result.vale = { status: 'missing', findings: [{ line: 0, rule: 'vale:missing', message: VALE_INSTALL }] };
      pass = false;
    } else if (v.status === 'missing') {
      result.vale = { status: 'skipped: not installed', findings: [] };
    } else if (v.status === 'error') {
      result.vale = { status: 'error', findings: [{ line: 0, rule: 'vale:error', message: v.error }] };
      pass = false;
    } else {
      result.vale = { status: v.findings.length ? 'fail' : 'pass', findings: v.findings };
      if (v.findings.length) pass = false;
    }
  }
  if (!pass) return { ...result, pass: false };

  if (!model || !lint) return { ...result, pass: true };
  if (!hasApiKey()) {
    result.dale.status = requireModel ? 'unavailable' : 'skipped';
    return { ...result, pass: !requireModel };
  }
  const d = await (daleFn || daleCheck)(markdown, ranges, { model: config.models.dale });
  result.dale = { status: d.findings.length === 0 ? (d.cached ? 'cached-pass' : 'pass') : 'fail', findings: d.findings };
  return { ...result, pass: d.findings.length === 0 };
}

/** The version of a file in the index. */
function stagedText(file) {
  return execFileSync('git', ['show', `:${file}`], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
}

async function main() {
  const args = process.argv.slice(2);
  const flag = n => args.includes(n);
  const val = n => (args.includes(n) ? args[args.indexOf(n) + 1] : undefined);
  const base = val('--base') || 'origin/dev';
  // --staged checks what the commit will contain, not the working tree, so `git add -p` and later edits cannot slip past it.
  const fileArgs = args.flatMap((a, i) => (a === '--file' ? [args[i + 1]] : []));
  const staged = flag('--staged') && !val('--files') && !fileArgs.length;

  let files = fileArgs.length
    ? fileArgs.map(file => ({ file, ranges: null }))
    : val('--files')
    ? fs.readFileSync(val('--files'), 'utf8').split('\n').map(s => s.trim()).filter(Boolean).map(file => ({ file, ranges: null }))
    : discoverChanges({ mode: flag('--staged') ? 'staged' : 'base', base, scope: config.scope });
  // --only <list>: keep just the files on the list (the Stop hook passes the files this session edited).
  if (val('--only')) {
    const list = fs.existsSync(val('--only')) ? fs.readFileSync(val('--only'), 'utf8') : '';
    files = onlyListed(files, list);
  }

  // Every file is checked. The word-list check is instant; Dale, which is slow, runs a few pages at a time.
  let done = 0;
  const results = await mapPool(files, config.scope.concurrency ?? 3, async ({ file: f, ranges }) => {
    const r = await checkPage(f, { ranges, model: !flag('--no-model'), requireModel: flag('--require-model'), lint: !flag('--no-lint'), valeOptional: flag('--vale-optional'), ...(staged ? { markdown: stagedText(f) } : {}) });
    if (files.length > 3 && process.stderr.isTTY) console.error(`quality: checked ${++done}/${files.length}  ${f}`);
    return r;
  });
  const pass = results.every(r => r.pass);
  const out = { pass, results };

  if (flag('--table')) {
    for (const r of results) {
      console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.path}  (vale: ${r.vale.status}, dale: ${r.dale.status})`);
      for (const f of [...r.deterministic.findings, ...r.vale.findings, ...r.dale.findings].slice(0, 20))
        console.log(`   ${f.line || '-'}  ${f.rule}  ${f.message}`);
    }
    if (results.length === 0) console.log('No documentation changes to check.');
  } else {
    console.log(JSON.stringify(out, null, 2));
  }
  process.exit(pass ? 0 : 1);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
