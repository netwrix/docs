#!/usr/bin/env node

/**
 * Integration test for scripts/set-blob-metadata.mjs and
 * scripts/mint-container-sas.mjs against the Azurite blob emulator.
 *
 * Usage:
 *   npx --package azurite azurite-blob --silent --location /tmp/azurite &
 *   node scripts/test-set-blob-metadata-integration.mjs
 *
 * Skips (exit 0) when nothing is listening on the emulator port, so it is
 * safe to include in a suite that runs without Azurite.
 */

import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { BlobServiceClient, ContainerClient, StorageSharedKeyCredential } from '@azure/storage-blob';

const ACCOUNT = 'devstoreaccount1';
const KEY = 'Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==';
const ENDPOINT = `http://127.0.0.1:10000/${ACCOUNT}`;
const BASE = 'https://docs.example.com';
const CONTAINER = '$web';
const probe = await fetch(`${ENDPOINT}/?comp=list`).catch(() => null);
if (!probe) {
  console.log(`Azurite not reachable at ${ENDPOINT}, skipping integration test`);
  process.exit(0);
}

const env = { ...process.env, STORAGE_ACCOUNT_NAME: ACCOUNT, STORAGE_ACCOUNT_KEY: KEY };

const cred = new StorageSharedKeyCredential(ACCOUNT, KEY);
const service = new BlobServiceClient(ENDPOINT, cred);
const container = service.getContainerClient(CONTAINER);
await container.deleteIfExists();
await container.create();

const cyrillic = 'docs/kb/how_to_trigger_a_workflow_when_a_user_сreates_a_group/index.html';
const seed = [
  ['index.html', 'text/plain', undefined],
  [cyrillic, 'text/html', undefined],
  ['assets/images/ADMX Template-480a6d.png', 'application/octet-stream', undefined],
  ['a.pdf', 'application/pdf', undefined],
  ['x.webp', 'image/webp', undefined],
  ['ok.css', 'text/css', `${BASE}/ok.css`],
  ['stale.js', 'application/javascript', 'https://old.example.com/stale.js'],
];
for (const [name, type, url] of seed) {
  await container.getBlockBlobClient(name).upload('x', 1, {
    blobHTTPHeaders: { blobContentType: type, blobCacheControl: 'max-age=600' },
    metadata: url ? { public_url: url } : undefined,
  });
}

const run = (...extra) =>
  execFileSync('node', ['scripts/set-blob-metadata.mjs', '--container', CONTAINER, '--base-url', BASE, '--endpoint', ENDPOINT, ...extra], { env, encoding: 'utf8' });

let out = run('--dry-run');
console.log(out);
assert.match(out, /7 blobs listed, 6 need writes \(6 metadata, 2 content type\)/);
assert.equal((await container.getBlobClient('index.html').getProperties()).contentType, 'text/plain', 'dry run must not write');

out = run();
console.log(out);
assert.match(out, /Updated 6 blobs in [\d.]+s \(0 failed\)/);

const expect = {
  'index.html': 'text/html',
  [cyrillic]: 'text/html',
  'assets/images/ADMX Template-480a6d.png': 'image/png',
  'a.pdf': 'application/pdf',
  'x.webp': 'image/webp',
  'ok.css': 'text/css',
  'stale.js': 'application/javascript',
};
for (const [name, type] of Object.entries(expect)) {
  const p = await container.getBlobClient(name).getProperties();
  assert.equal(p.contentType, type, `${name} content type`);
  assert.equal(p.cacheControl, 'max-age=600', `${name} cache-control preserved`);
  assert.equal(p.metadata.public_url, name.split('/').map(encodeURIComponent).join('/').replace(/^/, `${BASE}/`), `${name} public_url`);
}

out = run();
console.log(out);
assert.match(out, /7 blobs listed, 0 need writes/);
assert.match(out, /All blobs already carry/);

out = run('--force', '--dry-run');
assert.match(out, /7 need writes \(7 metadata, 6 content type\)/);

// SAS: mint with the script, then use it (no account key) to list and write.
const sas = execFileSync('node', ['scripts/mint-container-sas.mjs', '--container', CONTAINER, '--hours', '1', '--permissions', 'dlrw'], { env, encoding: 'utf8' });
assert.match(sas, /sp=rwdl/);
const viaSas = new ContainerClient(`${ENDPOINT}/${CONTAINER}?${sas}`);
let n = 0;
for await (const _ of viaSas.listBlobsFlat()) n++;
assert.equal(n, 7, 'SAS can list');
await viaSas.getBlockBlobClient('sas-written.txt').upload('y', 1);
await viaSas.deleteBlob('sas-written.txt');
const readOnly = execFileSync('node', ['scripts/mint-container-sas.mjs', '--container', CONTAINER, '--permissions', 'l'], { env, encoding: 'utf8' });
await assert.rejects(new ContainerClient(`${ENDPOINT}/${CONTAINER}?${readOnly}`).getBlockBlobClient('nope.txt').upload('y', 1), (e) => e.statusCode === 403);

console.log('INTEGRATION: all assertions passed');
