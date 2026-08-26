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
 *   node .claude/skills/audit-fix/scripts/find-siblings.mjs docs/accessanalyzer/11.6/foo.md <<'JSONEOF'
 *   ["exact error text 1", "exact error text 2"]
 *   JSONEOF
 *
 * (Use a heredoc, not `echo '...' |` — quotes often contain apostrophes,
 * which terminate a single-quoted echo string early.)
 *
 * Quotes are optional — pipe `[]` to only resolve product/version/duplicates
 * without checking siblings for specific text. Always pipe *something* to
 * stdin (even `[]`); on a non-TTY stdin that's never written to and never
 * closed, reading stdin blocks indefinitely, so don't omit the pipe entirely.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS, generateDocPath } from '../../../../src/config/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../../..');

const PRODUCT_ALIASES = { recoveryforactivedirectory: 'identityrecovery' };

function readStdinQuotes() {
  if (process.stdin.isTTY) return [];
  const raw = fs.readFileSync(0, 'utf8').trim();
  if (!raw) return [];
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    console.error(`❌ Could not parse quotes from stdin as JSON: ${e.message}`);
    process.exit(1);
  }
  if (!Array.isArray(parsed) || !parsed.every((q) => typeof q === 'string')) {
    console.error('❌ Quotes from stdin must be a JSON array of strings.');
    process.exit(1);
  }
  return parsed;
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

function resolveCanonicalId(productId) {
  return PRODUCT_ALIASES[productId] || productId;
}

/**
 * recoveryforactivedirectory and identityrecovery are two product entries for
 * the same doc trees — each carries one real version (customDocPath-less,
 * no customLink) and one `customLink` stub that just redirects to the other
 * product's matching version. Siblings live across both product entries, not
 * just within entry.product.versions, so gather every real (non-customLink)
 * version from every product sharing the same canonical id.
 */
function getFamilyVersionEntries(product) {
  const canonicalId = resolveCanonicalId(product.id);
  const familyProducts = PRODUCTS.filter((p) => resolveCanonicalId(p.id) === canonicalId);
  const entries = [];
  for (const p of familyProducts) {
    for (const version of p.versions) {
      if (version.customLink) continue; // alias stub — the real tree is covered by the other product in the family
      const docPath = version.customDocPath || generateDocPath(p.path, version.version);
      entries.push({ product: p, version, docPath });
    }
  }
  return entries;
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

  const familyEntries = getFamilyVersionEntries(entry.product);
  for (const fam of familyEntries) {
    if (fam.docPath === entry.docPath) continue; // self
    const candidatePath = path.join(fam.docPath, relPath);
    const absCandidate = path.join(PROJECT_ROOT, candidatePath);
    const version = fam.version;

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
