#!/usr/bin/env node

/**
 * Tests for scripts/set-blob-metadata.mjs
 *
 * Usage:
 *   node --test scripts/test-set-blob-metadata.mjs
 *
 * Covers the pure decision logic only: URL construction, content-type lookup,
 * and the skip/write plan. The Azure calls themselves are exercised on deploy.
 */

import assert from 'node:assert/strict';
import test from 'node:test';

import { contentTypeFor, planFor, publicUrlFor } from './set-blob-metadata.mjs';

const BASE = 'https://docs.example.com';

test('publicUrlFor keeps path separators and joins to the base', () => {
  assert.equal(
    publicUrlFor(BASE, 'docs/pingcastle/index.html'),
    'https://docs.example.com/docs/pingcastle/index.html',
  );
});

test('publicUrlFor strips trailing slashes from the base', () => {
  assert.equal(publicUrlFor(`${BASE}/`, 'a.html'), 'https://docs.example.com/a.html');
  assert.equal(publicUrlFor(`${BASE}///`, 'a.html'), 'https://docs.example.com/a.html');
});

// These two names are real files in the built site and are exactly what broke
// the previous implementation: it interpolated them raw into an x-ms-meta-*
// header, which throws UnicodeEncodeError at socket-write time.
test('publicUrlFor encodes non-ASCII blob names to pure ASCII', () => {
  const cyrillic = 'docs/kb/how_to_trigger_a_workflow_when_a_user_сreates_a_group/index.html';
  const curlyQuote = 'docs/kb/error_“collect_information/index.html';

  for (const name of [cyrillic, curlyQuote]) {
    const url = publicUrlFor(BASE, name);
    assert.doesNotThrow(() => Buffer.from(url, 'latin1'));
    // eslint-disable-next-line no-control-regex
    assert.match(url, /^[\x00-\x7F]*$/, `expected ASCII-only output, got ${url}`);
  }

  assert.equal(
    publicUrlFor(BASE, cyrillic),
    'https://docs.example.com/docs/kb/how_to_trigger_a_workflow_when_a_user_%D1%81reates_a_group/index.html',
  );
});

test('publicUrlFor encodes spaces and URL-significant characters', () => {
  assert.equal(
    publicUrlFor(BASE, 'assets/images/ADMX Template-480a6d.png'),
    'https://docs.example.com/assets/images/ADMX%20Template-480a6d.png',
  );
  // A literal '?' or '#' in a name would otherwise truncate the URL.
  assert.equal(publicUrlFor(BASE, 'a/b?c#d.html'), 'https://docs.example.com/a/b%3Fc%23d.html');
});

test('contentTypeFor maps the extensions the az update-batch steps covered', () => {
  const expected = {
    'a.css': 'text/css',
    'a.js': 'application/javascript',
    'a.mjs': 'application/javascript',
    'a.json': 'application/json',
    'a.html': 'text/html',
    'a.htm': 'text/html',
    'a.xml': 'application/xml',
    'a.txt': 'text/plain',
    'a.png': 'image/png',
    'a.jpg': 'image/jpeg',
    'a.jpeg': 'image/jpeg',
    'a.gif': 'image/gif',
    'a.webp': 'image/webp',
    'a.svg': 'image/svg+xml',
    'a.ico': 'image/x-icon',
    'a.woff': 'font/woff',
    'a.woff2': 'font/woff2',
    'a.ttf': 'font/ttf',
    'a.otf': 'font/otf',
  };
  for (const [name, type] of Object.entries(expected)) {
    assert.equal(contentTypeFor(name), type, `${name} should map to ${type}`);
  }
  assert.equal(Object.keys(expected).length, 19, 'should cover all 19 original patterns');
});

test('contentTypeFor is case-insensitive and ignores unknown or absent extensions', () => {
  assert.equal(contentTypeFor('a/B.WEBP'), 'image/webp');
  assert.equal(contentTypeFor('a/README'), undefined);
  assert.equal(contentTypeFor('a/archive.tar.gz'), undefined);
  // A dotfile is a name, not an extension.
  assert.equal(contentTypeFor('a/.nojekyll'), undefined);
  // A dot in a directory must not be read as the file's extension.
  assert.equal(contentTypeFor('docs/accessanalyzer/12.0/index'), undefined);
});

test('planFor returns null when metadata and content type are both current', () => {
  const blob = {
    name: 'a.html',
    metadata: { public_url: `${BASE}/a.html` },
    properties: { contentType: 'text/html' },
  };
  assert.equal(planFor(blob, BASE), null);
});

test('planFor flags a missing or stale public_url', () => {
  const properties = { contentType: 'text/html' };

  const missing = planFor({ name: 'a.html', metadata: {}, properties }, BASE);
  assert.equal(missing.needsMetadata, true);
  assert.equal(missing.needsContentType, false);

  const stale = planFor(
    { name: 'a.html', metadata: { public_url: 'https://old.example.com/a.html' }, properties },
    BASE,
  );
  assert.equal(stale.needsMetadata, true);
  assert.equal(stale.wantUrl, `${BASE}/a.html`);
});

test('planFor flags a wrong content type independently of metadata', () => {
  const plan = planFor(
    {
      name: 'a.webp',
      metadata: { public_url: `${BASE}/a.webp` },
      properties: { contentType: 'application/octet-stream' },
    },
    BASE,
  );
  assert.equal(plan.needsMetadata, false);
  assert.equal(plan.needsContentType, true);
  assert.equal(plan.wantType, 'image/webp');
});

test('planFor leaves unmapped extensions alone rather than blanking them', () => {
  const plan = planFor(
    {
      name: 'a.pdf',
      metadata: { public_url: `${BASE}/a.pdf` },
      properties: { contentType: 'application/pdf' },
    },
    BASE,
  );
  assert.equal(plan, null);
});

test('planFor with --force rewrites even a fully current blob', () => {
  const blob = {
    name: 'a.html',
    metadata: { public_url: `${BASE}/a.html` },
    properties: { contentType: 'text/html' },
  };
  const plan = planFor(blob, BASE, true);
  assert.equal(plan.needsMetadata, true);
  assert.equal(plan.needsContentType, true);
});

test('planFor carries other content settings through for setHTTPHeaders', () => {
  const plan = planFor(
    {
      name: 'a.html',
      metadata: {},
      properties: { contentType: 'text/plain', cacheControl: 'max-age=600' },
    },
    BASE,
  );
  assert.equal(plan.properties.cacheControl, 'max-age=600');
});

test('planFor tolerates a blob listed without metadata', () => {
  const plan = planFor({ name: 'a.html', properties: { contentType: 'text/html' } }, BASE);
  assert.equal(plan.needsMetadata, true);
});
