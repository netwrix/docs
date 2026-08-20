#!/usr/bin/env node
/**
 * Given a doc-audit source_path and the exact "Error" quotes from one or more
 * corrections, reports:
 *   - the product/version, and the review-list.csv row's `duplicates` column
 *     (exact byte-identical siblings, already safe to auto-fix)
 *   - every OTHER version of the product that has a file at the same
 *     relative path, and whether each quote appears verbatim in it
 *
 * This lets the skill ask "also fix this in version X?" only when the exact
 * problem text is actually present there — not a fuzzy similarity guess.
 *
 * Usage:
 *   echo '["exact error text 1", "exact error text 2"]' \
 *     | node .claude/skills/audit-fix/scripts/find-siblings.mjs docs/accessanalyzer/11.6/foo.md
 *
 * Quotes are optional — omit stdin (or pass `[]`) to only resolve
 * product/version/duplicates without checking siblings for specific text.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS, versionToUrl, generateDocPath } from '../../../../src/config/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../../..');

const PRODUCT_ALIASES = { recoveryforactivedirectory: 'identityrecovery' };

function readStdinQuotes() {
  if (process.stdin.isTTY) return [];
  try {
    const raw = fs.readFileSync(0, 'utf8').trim();
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new Error('quotes must be a JSON array of strings');
    return parsed;
  } catch (e) {
    console.error(`⚠️  Could not parse quotes from stdin as a JSON array: ${e.message}`);
    return [];
  }
}

function buildVersionIndex() {
  const entries = [];
  for (const product of PRODUCTS) {
    for (const version of product.versions) {
      const docPath = version.customDocPath || generateDocPath(product.path, version.version);
      entries.push({ product, version, docPath, hidden: !!version.hidden });
    }
  }
  entries.sort((a, b) => b.docPath.length - a.docPath.length);
  return entries;
}

function assignToVersion(filePath, versionIndex) {
  for (const entry of versionIndex) {
    if (filePath === entry.docPath || filePath.startsWith(entry.docPath + '/')) return entry;
  }
  return null;
}

function parseCsvLine(line) {
  // Minimal CSV parser matching generate-audit-list.mjs's csvEscape (quotes doubled, fields may contain commas/newlines inside quotes).
  const fields = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++; } else { inQuotes = false; }
      } else cur += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { fields.push(cur); cur = ''; }
    else cur += c;
  }
  fields.push(cur);
  return fields;
}

function readReviewListRow(productId, sourcePath) {
  const csvPath = path.join(PROJECT_ROOT, 'docs-audit', productId, 'review-list.csv');
  if (!fs.existsSync(csvPath)) return { error: `No docs-audit/${productId}/review-list.csv found` };
  const lines = fs.readFileSync(csvPath, 'utf8').split('\n').filter(Boolean);
  const header = parseCsvLine(lines[0]);
  const sourcePathIdx = header.indexOf('source_path');
  const versionIdx = header.indexOf('version');
  const duplicatesIdx = header.indexOf('duplicates');
  for (let i = 1; i < lines.length; i++) {
    const fields = parseCsvLine(lines[i]);
    if (fields[sourcePathIdx] === sourcePath) {
      const duplicates = fields[duplicatesIdx]
        ? fields[duplicatesIdx].split(',').map((s) => s.trim()).filter(Boolean)
        : [];
      return { version: fields[versionIdx], duplicates };
    }
  }
  return { error: `source_path not found in docs-audit/${productId}/review-list.csv — it may have no row (excluded by churn/draft), or the path is wrong` };
}

function main() {
  const sourcePath = process.argv[2];
  if (!sourcePath) {
    console.error('Usage: find-siblings.mjs <source_path>   (quotes as a JSON array on stdin, optional)');
    process.exit(1);
  }
  const quotes = readStdinQuotes();

  const versionIndex = buildVersionIndex();
  const entry = assignToVersion(sourcePath, versionIndex);
  if (!entry) {
    console.log(JSON.stringify({ error: `${sourcePath} doesn't match any registered product version in src/config/products.js` }, null, 2));
    process.exit(1);
  }

  const rawProductId = entry.product.id;
  const productId = PRODUCT_ALIASES[rawProductId] || rawProductId;
  const relPath = sourcePath.slice(entry.docPath.length + 1);

  const row = readReviewListRow(productId, sourcePath);
  if (row.error) {
    console.log(JSON.stringify({ product: productId, version: entry.version.version, relPath, error: row.error }, null, 2));
    process.exit(1);
  }

  const duplicateVersions = new Set(row.duplicates);
  const siblings = [];

  for (const version of entry.product.versions) {
    if (version.version === entry.version.version) continue; // self
    const docPath = version.customDocPath || generateDocPath(entry.product.path, version.version);
    const candidatePath = path.join(docPath, relPath);
    const absCandidate = path.join(PROJECT_ROOT, candidatePath);

    if (!fs.existsSync(absCandidate)) {
      siblings.push({ version: version.version, path: candidatePath, status: 'file-missing' });
      continue;
    }

    if (duplicateVersions.has(version.version)) {
      siblings.push({ version: version.version, path: candidatePath, status: 'exact-duplicate', note: 'listed in review-list.csv duplicates column — safe to apply the same fix verbatim' });
      continue;
    }

    if (quotes.length === 0) {
      siblings.push({ version: version.version, path: candidatePath, status: 'not-a-duplicate-unchecked' });
      continue;
    }

    const content = fs.readFileSync(absCandidate, 'utf8');
    const foundQuotes = quotes.filter((q) => content.includes(q));
    if (foundQuotes.length > 0) {
      siblings.push({
        version: version.version,
        path: candidatePath,
        status: 'quote-found',
        matchedQuotes: foundQuotes,
        note: 'not an exact duplicate, but this exact text is present — ask before fixing here too',
      });
    } else {
      siblings.push({ version: version.version, path: candidatePath, status: 'quote-not-found', note: 'exact text absent — likely genuinely different content here, do not touch without separate review' });
    }
  }

  console.log(JSON.stringify({ product: productId, version: entry.version.version, relPath, duplicates: row.duplicates, siblings }, null, 2));
}

main();
