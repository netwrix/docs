#!/usr/bin/env node
/**
 * integrity.mjs — check that a restyle did not change a page's content.
 *
 *   node scripts/doc-restyle/integrity.mjs [--base HEAD] [--allow-change "old=>new"]... [--json] <file...>
 *
 * Reads each file's original from git (`git show <base>:<path>`; a file missing at <base> counts
 * as new) and compares the whole set with checkContent. Pass --allow-change for each fix the
 * writer confirmed (a typo, a renamed link target); it applies to prose only, never to code blocks.
 * Exits 1 on violations, and also when every file is identical to its original, because there is
 * nothing to compare (use --base <ref> for the commit that holds the original). Exits 2 on bad input.
 */
import fs from 'fs';
import path from 'path';
import { execFileSync, spawnSync } from 'child_process';
import { pathToFileURL } from 'url';
import { checkContent } from '../quality/lib/preserve.mjs';

const USAGE = 'Usage: node scripts/doc-restyle/integrity.mjs [--base <ref>] [--allow-change "old=>new"] [--json] <file...>';

const git = (args, opts = {}) => spawnSync('git', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, ...opts });

function parseArgs(argv) {
  const opts = { base: 'HEAD', json: false, allow: [], files: [] };
  const value = i => {
    if (i + 1 >= argv.length || argv[i + 1].startsWith('--')) throw new Error(`${argv[i]} needs a value`);
    return argv[i + 1];
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--base') {
      opts.base = value(i++);
      if (opts.base.startsWith('-')) throw new Error('--base needs a commit, branch, or tag name, not an option');
    }
    else if (a === '--json') opts.json = true;
    else if (a === '--allow-change') {
      const [from, ...to] = value(i++).split('=>');
      if (!from || !to.length) throw new Error('--allow-change needs "old=>new" with a non-empty old text');
      opts.allow.push({ from, to: to.join('=>') });
    } else if (a.startsWith('--')) throw new Error(`unknown option ${a}`);
    else opts.files.push(a);
  }
  if (!opts.files.length) throw new Error('no files given');
  return opts;
}

// Resolve symlinks, including for a file a merge deleted (resolve its folder instead).
function realPath(file) {
  const abs = path.resolve(file);
  try {
    return fs.realpathSync(abs);
  } catch {
    try {
      return path.join(fs.realpathSync(path.dirname(abs)), path.basename(abs));
    } catch {
      return abs;
    }
  }
}

export function run(argv) {
  let opts;
  try {
    opts = parseArgs(argv);
  } catch (e) {
    console.error(`${e.message}\n${USAGE}`);
    return 2;
  }
  const top = git(['rev-parse', '--show-toplevel']);
  if (top.status !== 0) {
    console.error('Run this inside the git repository.');
    return 2;
  }
  const root = fs.realpathSync(top.stdout.trim());
  if (git(['rev-parse', '--verify', '--quiet', `${opts.base}^{commit}`], { cwd: root }).status !== 0) {
    console.error(`--base ${opts.base} is not a commit in this repository.`);
    return 2;
  }
  const originals = [];
  const rewrittens = [];
  const identical = [];
  for (const file of opts.files) {
    const abs = realPath(file);
    const rel = path.relative(root, abs).split(path.sep).join('/');
    if (rel.startsWith('../') || path.isAbsolute(rel)) {
      console.error(`${file} is outside the repository at ${root}.`);
      return 2;
    }
    const spec = `${opts.base}:${rel}`;
    const exists = git(['cat-file', '-e', spec], { cwd: root }).status === 0;
    const original = exists ? execFileSync('git', ['show', spec], { cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }) : '';
    const onDisk = fs.existsSync(abs);
    if (!exists && !onDisk) {
      console.error(`${file} does not exist at ${opts.base} or on disk. Check the path.`);
      return 2;
    }
    const rewritten = onDisk ? fs.readFileSync(abs, 'utf8') : '';
    originals.push({ path: rel, text: original });
    rewrittens.push({ path: rel, text: rewritten });
    if (exists && original === rewritten) identical.push(file);
  }
  let violations;
  try {
    violations = checkContent(originals, rewrittens, opts.allow);
  } catch (e) {
    console.error(e.message);
    return 2;
  }
  const vacuous = identical.length === opts.files.length;
  const notes = identical.map(f => `${f} is identical to ${opts.base}, so there is nothing to compare. Use --base <ref> for the commit that holds the original.`);
  if (opts.json) console.log(JSON.stringify({ ok: !violations.length && !vacuous, violations, notes }, null, 2));
  else {
    if (violations.length) {
      console.log(`FAIL  ${violations.length} integrity violation(s):`);
      for (const v of violations) console.log(`  - ${v}`);
    } else if (vacuous) console.log('FAIL  nothing to compare');
    else console.log(`PASS  ${opts.files.length} file(s) keep their content`);
    for (const n of notes) console.log(`  note: ${n}`);
  }
  return violations.length || vacuous ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) process.exit(run(process.argv.slice(2)));
