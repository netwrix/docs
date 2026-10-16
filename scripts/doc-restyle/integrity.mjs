#!/usr/bin/env node
/**
 * integrity.mjs — check that a restyle did not change a page's content.
 *
 *   node scripts/doc-restyle/integrity.mjs [--base HEAD] [--allow-change "old=>new"]... [--json] <file...>
 *
 * Reads each file's original from git (`git show <base>:<path>`; a new file has no
 * original) and compares the whole set with checkContent. Pass --allow-change for
 * each fix the writer confirmed (a typo, a renamed link target). Exits 1 on violations.
 */
import fs from 'fs';
import { execFileSync } from 'child_process';
import { checkContent } from '../quality/lib/preserve.mjs';

function readBase(base, path) {
  try {
    return execFileSync('git', ['show', `${base}:${path}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024 });
  } catch {
    return '';
  }
}

export function run(argv) {
  let base = 'HEAD';
  let json = false;
  const allow = [];
  const files = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--base') base = argv[++i];
    else if (argv[i] === '--json') json = true;
    else if (argv[i] === '--allow-change') {
      const [from, ...to] = argv[++i].split('=>');
      allow.push({ from, to: to.join('=>') });
    } else files.push(argv[i]);
  }
  if (!files.length) {
    console.error('Usage: node scripts/doc-restyle/integrity.mjs [--base HEAD] [--allow-change "old=>new"] [--json] <file...>');
    return 2;
  }
  const originals = files.map(path => ({ path, text: readBase(base, path) }));
  const rewrittens = files.map(path => ({ path, text: fs.existsSync(path) ? fs.readFileSync(path, 'utf8') : '' }));
  const violations = checkContent(originals, rewrittens, allow);
  if (json) console.log(JSON.stringify({ ok: !violations.length, violations }, null, 2));
  else if (violations.length) {
    console.log(`FAIL  ${violations.length} integrity violation(s):`);
    for (const v of violations) console.log(`  - ${v}`);
  } else console.log(`PASS  ${files.length} file(s) keep their content`);
  return violations.length ? 1 : 0;
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(run(process.argv.slice(2)));
