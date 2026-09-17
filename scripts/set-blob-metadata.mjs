#!/usr/bin/env node

/**
 * Stamp `public_url` metadata and content types onto the static-site container.
 *
 * Usage:
 *   node scripts/set-blob-metadata.mjs \
 *     --account NAME --key KEY --container '$web' --base-url https://docs.example.com
 *
 * Environment fallbacks: STORAGE_ACCOUNT_NAME, STORAGE_ACCOUNT_KEY, APP_EXTERNAL_URL
 * Pass --force to rewrite every blob regardless of its current state.
 * Pass --dry-run to list and plan without writing anything.
 *
 * Replaces two deploy steps that each walked the whole container: a per-blob
 * `az storage blob metadata update` loop (~0.6s of CLI cold start each, 20 at a
 * time, ~47 minutes for the site's ~86k blobs) and 19 `az storage blob
 * update-batch` calls, one per file extension. Both are folded into a single
 * listing pass here: `includeMetadata` returns each blob's metadata and
 * properties inline, so deciding what needs writing costs no extra round trips,
 * and only blobs that are actually missing or stale get a PUT.
 */

import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';
import { pathToFileURL } from 'url';

const METADATA_KEY = 'public_url';

// Mirrors the extension/content-type pairs the previous `az storage blob
// update-batch` steps applied. Extensions absent from this map keep whatever
// content type azcopy inferred at upload, which is what update-batch did too.
const CONTENT_TYPE_BY_EXTENSION = new Map(Object.entries({
  css: 'text/css',
  js: 'application/javascript',
  mjs: 'application/javascript',
  json: 'application/json',
  html: 'text/html',
  htm: 'text/html',
  xml: 'application/xml',
  txt: 'text/plain',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  webp: 'image/webp',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
  woff: 'font/woff',
  woff2: 'font/woff2',
  ttf: 'font/ttf',
  otf: 'font/otf',
}));

// Azure sends metadata as `x-ms-meta-*` headers, which are latin-1 on the wire,
// so a raw blob name is not safe to interpolate: the site ships names carrying
// a Cyrillic homoglyph and a curly quote, and both throw at socket-write time.
// Percent-encode each path segment and leave the separators intact.
export function publicUrlFor(baseUrl, blobName) {
  const encoded = blobName.split('/').map(encodeURIComponent).join('/');
  return `${baseUrl.replace(/\/+$/, '')}/${encoded}`;
}

export function contentTypeFor(blobName) {
  const base = blobName.slice(blobName.lastIndexOf('/') + 1);
  const dot = base.lastIndexOf('.');
  if (dot <= 0) return undefined;
  return CONTENT_TYPE_BY_EXTENSION.get(base.slice(dot + 1).toLowerCase());
}

/**
 * Decide what a single blob needs. Returns null when it is already correct,
 * so an unchanged deploy writes nothing.
 */
export function planFor(blob, baseUrl, force = false) {
  const wantUrl = publicUrlFor(baseUrl, blob.name);
  const wantType = contentTypeFor(blob.name);
  const properties = blob.properties ?? {};

  const needsMetadata = force || blob.metadata?.[METADATA_KEY] !== wantUrl;
  const needsContentType =
    wantType !== undefined && (force || properties.contentType !== wantType);

  if (!needsMetadata && !needsContentType) return null;
  return { name: blob.name, wantUrl, wantType, needsMetadata, needsContentType, properties };
}

/** Run `tasks` with at most `limit` in flight, collecting rejections per task. */
async function runPool(tasks, limit, onSettled) {
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, tasks.length) }, async () => {
    while (next < tasks.length) {
      const index = next++;
      try {
        await tasks[index]();
        onSettled(null);
      } catch (error) {
        onSettled(`${tasks[index].blobName}: ${error?.message ?? error}`);
      }
    }
  });
  await Promise.all(workers);
}

/** A bad invocation, reported as a one-line message rather than a stack trace. */
class UsageError extends Error {}

function parseArgs(argv) {
  const args = {
    account: process.env.STORAGE_ACCOUNT_NAME,
    key: process.env.STORAGE_ACCOUNT_KEY,
    container: '$web',
    baseUrl: process.env.APP_EXTERNAL_URL ?? '',
    force: false,
    dryRun: false,
    concurrency: 64,
  };
  const flags = new Map([
    ['--account', 'account'],
    ['--key', 'key'],
    ['--container', 'container'],
    ['--base-url', 'baseUrl'],
    ['--concurrency', 'concurrency'],
  ]);

  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--force') {
      args.force = true;
      continue;
    }
    if (argv[i] === '--dry-run') {
      args.dryRun = true;
      continue;
    }
    const field = flags.get(argv[i]);
    if (!field) throw new UsageError(`unknown argument: ${argv[i]}`);
    if (i + 1 >= argv.length) throw new UsageError(`${argv[i]} requires a value`);
    args[field] = argv[++i];
  }

  args.concurrency = Number(args.concurrency);
  const missing = ['account', 'key', 'baseUrl'].filter((field) => !args[field]);
  if (missing.length) throw new UsageError(`missing required argument(s): ${missing.join(', ')}`);
  if (!Number.isInteger(args.concurrency) || args.concurrency < 1) {
    throw new UsageError('--concurrency must be a positive integer');
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  const client = new BlobServiceClient(
    `https://${args.account}.blob.core.windows.net`,
    new StorageSharedKeyCredential(args.account, args.key),
    // The SDK's storage retry policy handles throttling (503) and transient
    // resets with Azure-aware backoff, so the pool below does not retry itself.
    { retryOptions: { maxTries: 5 } },
  );
  const container = client.getContainerClient(args.container);

  console.log(`Listing blobs in '${args.container}'...`);
  let listed = 0;
  const plans = [];
  for await (const blob of container.listBlobsFlat({ includeMetadata: true })) {
    listed++;
    const plan = planFor(blob, args.baseUrl, args.force);
    if (plan) plans.push(plan);
  }

  const metadataWrites = plans.filter((plan) => plan.needsMetadata).length;
  const contentTypeWrites = plans.filter((plan) => plan.needsContentType).length;
  console.log(
    `  ${listed} blobs listed, ${plans.length} need writes ` +
      `(${metadataWrites} metadata, ${contentTypeWrites} content type)`,
  );

  if (!plans.length) {
    console.log('All blobs already carry the correct metadata and content types.');
    return 0;
  }

  if (args.dryRun) {
    console.log('Dry run: sample of blobs that would be written:');
    for (const plan of plans.slice(0, 20)) {
      const what = [plan.needsMetadata && 'metadata', plan.needsContentType && `type=${plan.wantType}`]
        .filter(Boolean)
        .join(', ');
      console.log(`  ${plan.name} (${what})`);
    }
    return 0;
  }

  const tasks = plans.map((plan) => {
    const task = async () => {
      const blobClient = container.getBlobClient(plan.name);
      if (plan.needsMetadata) {
        // setMetadata replaces the whole metadata dict, matching the semantics
        // of `az storage blob metadata update --metadata public_url=...`.
        await blobClient.setMetadata({ [METADATA_KEY]: plan.wantUrl });
      }
      if (plan.needsContentType) {
        // setHTTPHeaders replaces every header it accepts, so carry the other
        // content settings through rather than blanking them.
        await blobClient.setHTTPHeaders({
          blobContentType: plan.wantType,
          blobCacheControl: plan.properties.cacheControl,
          blobContentEncoding: plan.properties.contentEncoding,
          blobContentLanguage: plan.properties.contentLanguage,
          blobContentDisposition: plan.properties.contentDisposition,
        });
      }
    };
    task.blobName = plan.name;
    return task;
  });

  const started = Date.now();
  const errors = [];
  let done = 0;
  let failed = 0;

  await runPool(tasks, args.concurrency, (error) => {
    if (error) {
      failed++;
      if (errors.length < 20) errors.push(error);
    } else {
      done++;
    }
    const processed = done + failed;
    if (processed % 5000 === 0) {
      const rate = processed / Math.max((Date.now() - started) / 1000, 1e-9);
      console.log(`  ${processed}/${tasks.length} (${rate.toFixed(0)}/s)`);
    }
  });

  const elapsed = ((Date.now() - started) / 1000).toFixed(1);
  console.log(`Updated ${done} blobs in ${elapsed}s (${failed} failed)`);

  if (errors.length) {
    console.error('First failures:');
    for (const error of errors) console.error(`  ${error}`);
  }
  return failed ? 1 : 0;
}

// Only run when invoked directly, so the helpers above stay importable by tests.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
    .then((code) => process.exit(code))
    .catch((error) => {
      if (error instanceof UsageError) {
        console.error(`error: ${error.message}`);
        console.error(
          'usage: node scripts/set-blob-metadata.mjs --account NAME --key KEY ' +
            "[--container '$web'] --base-url URL [--force] [--dry-run] [--concurrency N]",
        );
      } else {
        console.error(error);
      }
      process.exit(1);
    });
}
