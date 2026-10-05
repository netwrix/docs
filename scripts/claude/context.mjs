#!/usr/bin/env node
// Pre-flight context injected at the top of the docs-build / docs-preview skills.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { REPO_ROOT, productsFromPaths, loadProducts } from './lib/products.mjs';

const git = (...args) => {
  try {
    return execFileSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
};

const nodeMajor = Number(process.versions.node.split('.')[0]);
console.log(`REPO_ROOT: ${REPO_ROOT}`);
console.log(`BRANCH: ${git('branch', '--show-current')}`);
console.log(`GIT_DIRTY: ${git('status', '--porcelain').split('\n').filter(Boolean).length}`);
console.log(`NODE: ${process.versions.node}${nodeMajor < 22 ? ' (STOP: Node >=22 required, install from https://nodejs.org)' : ''}`);
console.log(`NODE_MODULES: ${existsSync(join(REPO_ROOT, 'node_modules')) ? 'present' : 'MISSING (STOP: run `npm install`)'}`);

const base = git('rev-parse', '--verify', '--quiet', 'origin/dev') ? 'origin/dev' : '';
const changed = [
  ...git('diff', '--name-only', base ? `${base}...HEAD` : 'HEAD').split('\n'),
  ...git('status', '--porcelain').split('\n').map((l) => l.slice(3)),
].filter(Boolean);
console.log(`CHANGED_PRODUCTS: ${(await productsFromPaths(changed)).join(', ') || 'none'}`);
console.log(`VALID_PRODUCTS: kb, ${(await loadProducts()).map((p) => p.id).join(', ')}`);

// Untracked src/ files that tracked code references: CI would fail on these.
const untracked = git('ls-files', '--others', '--exclude-standard', 'src').split('\n').filter(Boolean);
const orphaned = untracked.filter((f) => {
  const stem = f.replace(/\.[^.]+$/, '');
  return git('grep', '-lF', stem, '--', 'docusaurus.config.js', 'src', 'sidebars') !== '';
});
console.log(`UNTRACKED_IMPORTS: ${orphaned.join(', ') || 'none'}${orphaned.length ? ' (WARN: referenced by tracked code but not committed; CI build will fail)' : ''}`);
