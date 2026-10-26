#!/usr/bin/env node

/**
 * Tests for scripts/resolve-path-labels.mjs
 *
 * Usage:
 *   node --test scripts/test-resolve-path-labels.mjs
 */

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { resolveLabels } from './resolve-path-labels.mjs';

const map = JSON.parse(readFileSync(new URL('../.github/label-paths.json', import.meta.url), 'utf8'));
const resolve = (...files) => resolveLabels(files, map);

test('docs, sidebar, image, and file paths map to the product label', () => {
  assert.deepEqual(resolve('docs/auditor/10.7/a.md'), ['auditor']);
  assert.deepEqual(resolve('sidebars/1secure.js'), ['1secure']);
  assert.deepEqual(resolve('sidebars/auditor/10.7.js'), ['auditor']);
  assert.deepEqual(resolve('static/images/pingcastle/x.webp'), ['pingcastle']);
  assert.deepEqual(resolve('static/files/threatmanager/x.zip'), ['threat-manager']);
});

test('accessanalyzer splits by version', () => {
  assert.deepEqual(resolve('docs/accessanalyzer/12.0/a.md'), ['dspm-access-analyzer']);
  assert.deepEqual(resolve('sidebars/accessanalyzer/11.6.js'), ['dspm-access-analyzer']);
  assert.deepEqual(resolve('docs/accessanalyzer/26.1/a.md'), ['access-analyzer']);
});

test('multiple products dedupe and similar slugs do not collide', () => {
  assert.deepEqual(
    resolve('docs/identityrecovery/a.md', 'docs/recoveryforactivedirectory/b.md', 'docs/kb/c.md'),
    ['identity-recovery', 'kb'],
  );
  assert.deepEqual(resolve('docs/privilegesecurediscovery/a.md'), ['privilege-secure-discovery']);
  assert.deepEqual(resolve('docs/passwordsecure/a.md'), ['password-secure']);
});

test('unrelated paths match nothing', () => {
  assert.deepEqual(resolve('src/config/products.js', 'docs/CLAUDE.md', 'docs/customer/a.md'), []);
});
