#!/usr/bin/env node

/**
 * Print a short-lived container SAS token for azcopy, using the account key.
 *
 * Usage:
 *   node scripts/mint-container-sas.mjs [--container '$web'] [--hours 2] [--permissions dlrw]
 *
 * Reads STORAGE_ACCOUNT_NAME and STORAGE_ACCOUNT_KEY from the environment.
 * Replaces `az storage container generate-sas`, which was the only remaining
 * reason to install the Azure CLI on the deploy runner.
 */

import {
  ContainerSASPermissions,
  StorageSharedKeyCredential,
  generateBlobSASQueryParameters,
} from '@azure/storage-blob';

const args = { container: '$web', hours: '2', permissions: 'dlrw' };
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i += 2) {
  const field = argv[i].replace(/^--/, '');
  if (!(field in args) || i + 1 >= argv.length) {
    console.error(`usage: mint-container-sas.mjs [--container NAME] [--hours N] [--permissions dlrw]`);
    process.exit(1);
  }
  args[field] = argv[i + 1];
}

const account = process.env.STORAGE_ACCOUNT_NAME;
const key = process.env.STORAGE_ACCOUNT_KEY;
if (!account || !key) {
  console.error('error: STORAGE_ACCOUNT_NAME and STORAGE_ACCOUNT_KEY must be set');
  process.exit(1);
}

const now = new Date();
const sas = generateBlobSASQueryParameters(
  {
    containerName: args.container,
    permissions: ContainerSASPermissions.parse(args.permissions),
    // Five minutes of clock-skew allowance so a fast runner does not present a
    // token whose start time the storage service still considers in the future.
    startsOn: new Date(now.getTime() - 5 * 60 * 1000),
    expiresOn: new Date(now.getTime() + Number(args.hours) * 60 * 60 * 1000),
  },
  new StorageSharedKeyCredential(account, key),
);

process.stdout.write(sas.toString());
