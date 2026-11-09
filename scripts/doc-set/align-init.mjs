#!/usr/bin/env node
/**
 * align-init.mjs — set up an align run: bring a versionless product's docs in line with its deployed code.
 *
 *   node scripts/doc-set/align-init.mjs <product> [--root <repo>] [--worktree <dir>] [--apply]
 *
 * An align run has no new version and no seed: pages are edited in place. This script checks that the product is
 * versionless (a single `current` version in src/config/products.js), then plans a worktree from origin/dev and a run
 * folder at .doc-set/<product>-align/ whose meta.json records versionless, docsPrefix, docsWorktree, and oldRef
 * (the origin/dev commit the "before" text is read from). Without --apply it only prints the plan.
 * A versioned product is refused: use seed-version.mjs for those.
 */
import fs from 'fs';
import { isMain } from './is-main.mjs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { findProductBlock, parseVersions, productPath } from './seed-version.mjs';

const DEFAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

/** True when the product block lists only a `current` version. */
export function isVersionless(block) {
  const v = parseVersions(block);
  return v.length === 1 && v[0].version === 'current';
}

/** Returns { docsPath } for a versionless product, or throws with the reason it can't be aligned. */
export function planAlign(productsText, id) {
  const { block } = findProductBlock(productsText, id);
  if (!isVersionless(block)) throw new Error(`"${id}" has numbered versions. Use seed-version.mjs for a new release; align mode is for versionless products.`);
  return { docsPath: productPath(block) };
}

export function run(argv) {
  const arg = n => (argv.includes(n) ? argv[argv.indexOf(n) + 1] : undefined);
  const id = argv.find(a => !a.startsWith('--') && a !== arg('--root') && a !== arg('--worktree'));
  if (!id) { console.error('Usage: node scripts/doc-set/align-init.mjs <product> [--root <repo>] [--worktree <dir>] [--apply]'); return 2; }
  const ROOT = arg('--root') ? path.resolve(arg('--root')) : DEFAULT_ROOT;
  let docsPath;
  try {
    ({ docsPath } = planAlign(fs.readFileSync(path.join(ROOT, 'src/config/products.js'), 'utf8'), id));
  } catch (e) {
    console.error(e.message);
    return 1;
  }
  if (!fs.existsSync(path.join(ROOT, docsPath))) { console.error(`Docs folder ${docsPath} does not exist`); return 1; }
  const git = (args, cwd = ROOT) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
  let oldRef;
  try { oldRef = git(['rev-parse', 'origin/dev^{commit}']); } catch { console.error('origin/dev not found. Run git fetch origin dev first.'); return 1; }
  const worktree = path.resolve(arg('--worktree') || path.join(ROOT, '..', `docs-${id}-align`));
  const branch = `docs/${id}-align`;
  const runDir = path.join(ROOT, '.doc-set', `${id}-align`);
  console.log(`Align ${id} (versionless, ${docsPath}/)`);
  console.log(`  worktree  ${worktree} on new branch ${branch} from origin/dev (${oldRef.slice(0, 9)})`);
  console.log(`  run state ${path.relative(ROOT, runDir)}/meta.json (versionless, oldRef, docsWorktree)`);
  console.log('  no seed copy, no sidebar file, and no products.js change: pages are edited in place');
  if (!argv.includes('--apply')) { console.log('Dry run. Pass --apply to create them.'); return 0; }
  if (fs.existsSync(worktree)) { console.error(`${worktree} already exists; refusing to overwrite`); return 1; }
  git(['worktree', 'add', '-b', branch, worktree, oldRef]);
  const nm = path.join(ROOT, 'node_modules');
  if (fs.existsSync(nm) && !fs.existsSync(path.join(worktree, 'node_modules'))) fs.symlinkSync(nm, path.join(worktree, 'node_modules'), 'dir');
  fs.mkdirSync(path.join(runDir, 'facts'), { recursive: true });
  const metaFile = path.join(runDir, 'meta.json');
  let prev = {};
  try { prev = JSON.parse(fs.readFileSync(metaFile, 'utf8')); } catch (e) { if (e.code !== 'ENOENT') throw e; }
  const meta = { ...prev, product: id, version: 'current', versionless: true, docsPrefix: `docs/${id}/`, docsWorktree: worktree, oldRef };
  const stage = fs.mkdtempSync(path.join(runDir, '.meta-'));
  const staged = path.join(stage, 'meta.json');
  fs.writeFileSync(staged, JSON.stringify(meta, null, 2) + '\n', { flag: 'wx', mode: 0o600 });
  fs.renameSync(staged, metaFile);
  fs.rmdirSync(stage);
  console.log(`Created. Next: pin the deployed code ref in ${path.relative(ROOT, metaFile)} (ref, refSha) and run the fact pack.`);
  return 0;
}

if (isMain(import.meta.url)) process.exit(run(process.argv.slice(2)));
