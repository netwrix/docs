#!/usr/bin/env node

/**
 * Generate documentation-audit review lists, one CSV per product, for import
 * into a shared Google Sheets or Excel Online workbook.
 *
 * For each product, scans every version's tracked doc files, excludes KB
 * articles and pages heavily rewritten in the last 90 days, derives each
 * page's live URL (reproducing Docusaurus's own number-prefix-stripping and
 * category-index-collapse slug rules), detects pages that are identical
 * across versions (differing only in their own version string), and writes:
 *
 *   docs-audit/<product>/review-list.csv   - one row per unique page
 *
 * Review status (reviewer/audited/accurate/complete/notes) lives in the imported
 * spreadsheet, not in this repo, so regenerating never risks reviewer data —
 * every run produces a fresh, complete review-list.csv.
 *
 * Usage:
 *   node scripts/generate-audit-list.mjs                          # all products
 *   node scripts/generate-audit-list.mjs --product=accessanalyzer
 *   node scripts/generate-audit-list.mjs --product=a,b --dry
 *   node scripts/generate-audit-list.mjs --product=a --verify-against-build=build
 *
 * Environment variables:
 *   DOCS_PRODUCT=accessanalyzer   # fallback for --product, matches other scripts
 */

import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { PRODUCTS, versionToUrl, generateRouteBasePath, generateDocPath } from '../src/config/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

const SITE_BASE_URL = 'https://docs.netwrix.com';
const EXCLUDED_BASENAMES = new Set(['CLAUDE.md', 'SKILL.md']);
const EXCLUDED_SEGMENTS = new Set(['kb', '_partials', 'docs-staging']);

// Products excluded from the audit entirely — the Dashboard workbook removed
// these sheets outright (Privilege Secure for Discovery: only had one
// version, 2.22, and the whole sheet was dropped).
const AUDIT_EXCLUDED_PRODUCTS = new Set(['partner', 'customer', 'privilegesecurediscovery']);

// Specific product versions excluded from the audit — deprecated or
// already-unsupported releases the Dashboard has ruled out of scope, even
// though the version folder still exists in the repo for archival purposes.
// Update this map as versions are deprecated; it does not affect the docs
// site itself, only which pages the audit tooling generates rows for.
// Keyed by the *physical* product id (pre-PRODUCT_ALIASES) — e.g. Identity
// Recovery 2.6's files live under docs/recoveryforactivedirectory/2.6/, so
// the exclusion is keyed there, not under identityrecovery.
const AUDIT_EXCLUDED_VERSIONS = {
  activitymonitor: new Set(['7.1', '8.0']),
  auditor: new Set(['10.7']),
  identitymanager: new Set(['6.1']),
  recoveryforactivedirectory: new Set(['2.6']),
  privilegesecure: new Set(['4.2']),
  threatmanager: new Set(['3.0']),
};

// recoveryforactivedirectory is the old name for identityrecovery (it's
// hideFromNavbar in products.js, "superseded by Identity Recovery") — file its
// pages under identityrecovery instead of giving it its own tab. Note this
// means `--product=recoveryforactivedirectory` alone produces no output;
// use `--product=identityrecovery` to regenerate the merged tab.
const PRODUCT_ALIASES = { recoveryforactivedirectory: 'identityrecovery' };

// Path prefixes excluded per-product. PolicyPak's knowledge base articles are
// authored directly inside its own doc tree instead of the usual copied-in
// `kb/` folder (which EXCLUDED_SEGMENTS already catches), so they need their
// own exclusion.
const PRODUCT_EXCLUDED_PREFIXES = {
  policypak: ['docs/policypak/knowledgebase/'],
};

// ============================================================================
// CLI args
// ============================================================================

function parseArgs(argv) {
  const args = {
    products: null,
    includeHidden: false,
    since: '90 days ago',
    churnThreshold: 0.5,
    out: 'docs-audit',
    dry: false,
    verifyAgainstBuild: null,
  };

  for (const raw of argv) {
    if (raw === '--include-hidden') args.includeHidden = true;
    else if (raw === '--dry') args.dry = true;
    else if (raw.startsWith('--product=')) args.products = raw.slice('--product='.length).split(',').filter(Boolean);
    else if (raw.startsWith('--since=')) args.since = raw.slice('--since='.length);
    else if (raw.startsWith('--churn-threshold=')) {
      const value = parseFloat(raw.slice('--churn-threshold='.length));
      if (!Number.isFinite(value)) {
        console.error(`❌ --churn-threshold must be a number, got: ${raw.slice('--churn-threshold='.length)}`);
        process.exit(1);
      }
      args.churnThreshold = value;
    }
    else if (raw.startsWith('--out=')) args.out = raw.slice('--out='.length);
    else if (raw === '--verify-against-build') args.verifyAgainstBuild = 'build';
    else if (raw.startsWith('--verify-against-build=')) args.verifyAgainstBuild = raw.slice('--verify-against-build='.length);
    else {
      console.error(`❌ Unrecognized argument: ${raw}`);
      process.exit(1);
    }
  }

  if (!args.products && process.env.DOCS_PRODUCT) {
    args.products = [process.env.DOCS_PRODUCT];
  }

  return args;
}

// ============================================================================
// Git helpers
// ============================================================================

function git(gitArgs) {
  return execFileSync('git', gitArgs, {
    cwd: PROJECT_ROOT,
    encoding: 'utf8',
    maxBuffer: 1024 * 1024 * 512,
  });
}

/** List tracked files under docs/, NUL-delimited (required — some filenames are non-ASCII). */
function listTrackedDocFiles() {
  const out = git(['ls-files', '-z', '--', 'docs/']);
  return out.split('\0').filter(Boolean).filter((p) => /\.(md|mdx)$/i.test(p));
}

/**
 * Sum added+deleted lines per current file path from a single `git log --numstat -z`
 * pass. Handles the rename form (`added\tdeleted\t\0oldpath\0newpath\0`) by attributing
 * churn to newpath, and rolling forward any later (older-commit) entries still keyed
 * under oldpath, since git log walks newest-to-oldest.
 */
function computeChurnMap(since, pathScope) {
  const pathScopes = Array.isArray(pathScope) ? pathScope : [pathScope];
  const out = git(['log', `--since=${since}`, '--no-merges', '--find-renames', '--numstat', '-z', '--format=', '--', ...pathScopes]);
  const tokens = out.split('\0');
  const churn = new Map();
  const renamedFrom = new Map(); // oldPath -> current name it should be attributed to

  const resolve = (p) => {
    const seen = new Set();
    while (renamedFrom.has(p) && !seen.has(p)) {
      seen.add(p);
      p = renamedFrom.get(p);
    }
    return p;
  };

  const add = (p, added, deleted) => {
    if (added === '-' || deleted === '-') return; // binary file, no line count
    const resolved = resolve(p);
    const entry = churn.get(resolved) || { added: 0, deleted: 0 };
    entry.added += Number(added);
    entry.deleted += Number(deleted);
    churn.set(resolved, entry);
  };

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === '') continue;
    const m = /^(-|\d+)\t(-|\d+)\t([\s\S]*)$/.exec(token);
    if (!m) continue;
    const [, added, deleted, pathPart] = m;
    if (pathPart === '') {
      // Rename form: next two tokens are oldPath, newPath.
      const oldPath = tokens[++i];
      const newPath = tokens[++i];
      if (oldPath === undefined || newPath === undefined) break;
      add(newPath, added, deleted);
      renamedFrom.set(oldPath, newPath);
    } else {
      add(pathPart, added, deleted);
    }
  }

  return churn;
}

function currentLineCount(absPath) {
  const content = fs.readFileSync(absPath, 'utf8');
  if (content.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < content.length; i++) if (content[i] === '\n') count++;
  if (content[content.length - 1] !== '\n') count++; // wc -l semantics: count the final unterminated line too, for our ratio's purposes
  return count;
}

// ============================================================================
// Product/version index
// ============================================================================

function buildVersionIndex() {
  // Includes hidden-version entries too (flagged), so files under a hidden version's
  // docPath are recognized as deliberately excluded rather than misreported as orphans.
  const entries = [];
  for (const product of PRODUCTS) {
    for (const version of product.versions) {
      const docPath = version.customDocPath || generateDocPath(product.path, version.version);
      const routeBase = version.customRoutePath || generateRouteBasePath(product.path, version.version);
      entries.push({ product, version, docPath, routeBase, hidden: !!version.hidden });
    }
  }
  // Longest docPath first, so a nested path (e.g. .../current) wins over a shorter false prefix.
  entries.sort((a, b) => b.docPath.length - a.docPath.length);
  return entries;
}

function assignToVersion(filePath, versionIndex) {
  for (const entry of versionIndex) {
    if (filePath === entry.docPath || filePath.startsWith(entry.docPath + '/')) return entry;
  }
  return null;
}

// ============================================================================
// Title + URL derivation
// ============================================================================

function frontmatterBlock(content) {
  const fmMatch = /^---\r?\n([\s\S]*?)\r?\n---/.exec(content);
  return fmMatch ? fmMatch[1] : null;
}

/** Docusaurus excludes `draft: true` pages from the production build — no live URL exists to review. */
function isDraft(content) {
  const fm = frontmatterBlock(content);
  return fm ? /^draft:\s*true\s*$/m.test(fm) : false;
}

function deriveTitle(content, basename) {
  const fm = frontmatterBlock(content);
  if (fm) {
    const titleLine = /^title:\s*(.+)\s*$/m.exec(fm);
    if (titleLine) {
      let title = titleLine[1].trim();
      if ((title.startsWith('"') && title.endsWith('"')) || (title.startsWith("'") && title.endsWith("'"))) {
        title = title.slice(1, -1);
      }
      return title.replace(/\\"/g, '"');
    }
  }
  const heading = /^#\s+(.+)$/m.exec(content);
  if (heading) return heading[1].trim();
  return basename.replace(/\.(md|mdx)$/i, '');
}

// Mirrors @docusaurus/plugin-content-docs numberPrefix.js: strip a leading
// numeric prefix per path segment, unless the segment looks like a version
// number (e.g. "12.0"), in which case leave it alone.
const VERSION_LIKE = /^\d+[-_.]\d+/;
const NUMBER_PREFIX = /^(\d+)\s*[-_.]+\s*([^-_.\s].*)$/;

function stripNumberPrefix(segment) {
  if (VERSION_LIKE.test(segment)) return segment;
  const m = NUMBER_PREFIX.exec(segment);
  return m ? m[2] : segment;
}

function deriveUrl(relPath, routeBase) {
  const noExt = relPath.replace(/\.(md|mdx)$/i, '');
  const segments = noExt.split('/');
  const rawFileName = segments[segments.length - 1];
  const rawDirSegments = segments.slice(0, -1);
  const rawParentDir = rawDirSegments[rawDirSegments.length - 1];

  const lowerFile = rawFileName.toLowerCase();
  const isCategoryIndex =
    lowerFile === 'index' || lowerFile === 'readme' || (rawParentDir !== undefined && lowerFile === rawParentDir.toLowerCase());

  const strippedDirSegments = rawDirSegments.map(stripNumberPrefix);
  const slugSegments = isCategoryIndex ? strippedDirSegments : [...strippedDirSegments, stripNumberPrefix(rawFileName)];
  const slugPath = slugSegments.map((s) => encodeURIComponent(s)).join('/');

  return `${SITE_BASE_URL}/${routeBase}${slugPath ? '/' + slugPath : ''}`;
}

// ============================================================================
// Cross-version dedup
// ============================================================================

function normalizeVersionTokens(content, version) {
  if (version === 'current' || version === 'saas') return content;
  let normalized = content.split(version).join('__VERSION__');
  const underscored = versionToUrl(version);
  if (underscored !== version) normalized = normalized.split(underscored).join('__VERSION__');
  return normalized;
}

function hashNormalized(content, version) {
  return createHash('sha256').update(normalizeVersionTokens(content, version)).digest('hex');
}

/**
 * Group same-relative-path files across a product's versions into duplicate
 * clusters when their version-normalized content hashes match. Returns a map
 * of repoPath -> { isPrimary, primaryRepoPath, primaryVersion, duplicateVersions }
 * for every file that participates in a cluster of size > 1. Only the primary
 * (newest) member gets a non-empty duplicateVersions list — non-primary
 * members are dropped from the review list entirely, since the primary's row
 * covers them.
 */
function detectDuplicates(productFiles, versionRank) {
  const byRelPath = new Map(); // relPath -> [{ repoPath, version, hash }]
  for (const f of productFiles) {
    const list = byRelPath.get(f.relPath) || [];
    list.push(f);
    byRelPath.set(f.relPath, list);
  }

  const result = new Map();
  for (const list of byRelPath.values()) {
    if (list.length < 2) continue;
    const byHash = new Map();
    for (const f of list) {
      const arr = byHash.get(f.hash) || [];
      arr.push(f);
      byHash.set(f.hash, arr);
    }
    for (const cluster of byHash.values()) {
      if (cluster.length < 2) continue;
      const primary = cluster.reduce((best, cur) => (versionRank.get(cur.version) < versionRank.get(best.version) ? cur : best));
      const duplicateVersions = cluster.filter((m) => m !== primary).map((m) => m.version);
      for (const member of cluster) {
        result.set(member.repoPath, {
          isPrimary: member === primary,
          primaryRepoPath: primary.repoPath,
          primaryVersion: primary.version,
          duplicateVersions: member === primary ? duplicateVersions : [],
        });
      }
    }
  }
  return result;
}

// ============================================================================
// CSV writing
// ============================================================================

function csvEscape(value) {
  const s = value === null || value === undefined ? '' : String(value);
  if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

function writeCsv(absPath, header, rows) {
  const lines = [header.map(csvEscape).join(','), ...rows.map((row) => row.map(csvEscape).join(','))];
  fs.writeFileSync(absPath, lines.join('\n') + '\n', 'utf8');
}

// ============================================================================
// Main
// ============================================================================

function main() {
  const args = parseArgs(process.argv.slice(2));
  const outDir = path.join(PROJECT_ROOT, args.out);
  if (args.dry) console.log(`🧪 --dry: no files will be written`);
  if (!args.dry) fs.mkdirSync(outDir, { recursive: true });

  const versionIndex = buildVersionIndex();
  const targetProducts = args.products
    ? PRODUCTS.filter((p) => args.products.includes(p.id))
    : PRODUCTS;
  const requestedIds = new Set(targetProducts.map((p) => p.id));

  if (args.products) {
    const known = new Set(PRODUCTS.map((p) => p.id));
    for (const id of args.products) {
      if (!known.has(id)) console.warn(`⚠️  Unknown product id: ${id}`);
    }
  }

  console.log(`🔍 Enumerating tracked doc files...`);
  const allFiles = listTrackedDocFiles();
  console.log(`   ${allFiles.length} tracked .md/.mdx files under docs/`);

  const perProductFiles = new Map(); // productId -> [{ repoPath, relPath, version, versionLabel, entry }]

  for (const filePath of allFiles) {
    if (filePath.startsWith('docs/kb/')) continue; // canonical KB source, excluded entirely

    const segments = filePath.split('/');
    const basename = segments[segments.length - 1];
    if (EXCLUDED_BASENAMES.has(basename)) continue;
    if (segments.some((s) => EXCLUDED_SEGMENTS.has(s))) continue;

    const entry = assignToVersion(filePath, versionIndex);
    if (!entry) continue; // not part of any registered product version

    if (entry.hidden && !args.includeHidden) continue; // deliberately excluded, not an orphan

    if (AUDIT_EXCLUDED_PRODUCTS.has(entry.product.id)) continue;

    const excludedVersions = AUDIT_EXCLUDED_VERSIONS[entry.product.id];
    if (excludedVersions && excludedVersions.has(entry.version.version)) continue;

    const excludedPrefixes = PRODUCT_EXCLUDED_PREFIXES[entry.product.id];
    if (excludedPrefixes && excludedPrefixes.some((prefix) => filePath.startsWith(prefix))) continue;

    const effectiveProductId = PRODUCT_ALIASES[entry.product.id] || entry.product.id;
    if (!requestedIds.has(entry.product.id) && !requestedIds.has(effectiveProductId)) continue;

    const relPath = filePath.slice(entry.docPath.length + 1);
    const list = perProductFiles.get(effectiveProductId) || [];
    list.push({ repoPath: filePath, relPath, entry });
    perProductFiles.set(effectiveProductId, list);
  }

  console.log(`📊 Computing 90-day churn ratio (single git log pass)...`);
  const churnMap = computeChurnMap(args.since, 'docs/');

  const dirty = git(['status', '--porcelain', '--', 'docs/']).trim();
  if (dirty) {
    console.warn(`⚠️  docs/ has uncommitted changes — churn ratios use the working tree, not HEAD:\n${dirty}`);
  }

  let totalIncluded = 0;
  let totalExcludedByChurn = 0;
  let processedProducts = 0;
  const includedByProduct = new Map(); // productId -> included files (post churn/draft filtering) — what verifyAgainstBuild checks

  for (const product of targetProducts) {
    if (PRODUCT_ALIASES[product.id]) continue; // folded into another product's tab, see PRODUCT_ALIASES
    if (AUDIT_EXCLUDED_PRODUCTS.has(product.id)) continue;
    processedProducts += 1;

    const files = perProductFiles.get(product.id) || [];
    const productOutDir = path.join(outDir, product.id);
    if (!args.dry) fs.mkdirSync(productOutDir, { recursive: true });

    const versionRank = new Map(product.versions.map((v, i) => [v.version, i]));

    const included = [];
    let excludedByChurn = 0;
    let excludedByDraft = 0;

    for (const f of files) {
      const absPath = path.join(PROJECT_ROOT, f.repoPath);
      if (!fs.existsSync(absPath)) continue; // tracked in git but deleted in the working tree (see the dirty-tree warning above)
      const currentLines = currentLineCount(absPath);
      if (currentLines === 0) continue;

      const content = fs.readFileSync(absPath, 'utf8');
      if (isDraft(content)) {
        excludedByDraft++;
        continue; // no live URL — Docusaurus excludes drafts from the production build
      }

      const churn = churnMap.get(f.repoPath);
      const churnRatio = churn ? (churn.added + churn.deleted) / currentLines : 0;
      if (churnRatio > args.churnThreshold) {
        excludedByChurn++;
        continue;
      }

      included.push({
        ...f,
        title: deriveTitle(content, path.basename(f.repoPath)),
        url: deriveUrl(f.relPath, f.entry.routeBase),
        churnRatio,
        hash: hashNormalized(content, f.entry.version.version),
      });
    }

    const dupInfo = detectDuplicates(
      included.map((f) => ({ repoPath: f.repoPath, relPath: f.relPath, version: f.entry.version.version, hash: f.hash })),
      versionRank
    );

    included.sort((a, b) => a.repoPath.localeCompare(b.repoPath));

    const rows = included
      .filter((f) => {
        const dup = dupInfo.get(f.repoPath);
        return !dup || dup.isPrimary;
      })
      .map((f) => {
        const dup = dupInfo.get(f.repoPath);
        const duplicates = dup && dup.duplicateVersions.length ? dup.duplicateVersions.join(', ') : '';
        return [
          f.title,
          f.entry.version.version,
          f.url,
          f.repoPath,
          duplicates,
          '', // reviewer
          '', // audited
          '', // accurate
          '', // complete
          '', // notes
        ];
      });

    if (!args.dry) {
      writeCsv(
        path.join(productOutDir, 'review-list.csv'),
        ['document_title', 'version', 'live_page_url', 'source_path', 'duplicates', 'reviewer', 'audited', 'accurate', 'complete', 'notes'],
        rows
      );
    }

    includedByProduct.set(product.id, included);
    totalIncluded += included.length;
    totalExcludedByChurn += excludedByChurn;

    console.log(`✅ ${product.id}: ${included.length} pages included, ${excludedByChurn} excluded (recent churn), ${excludedByDraft} excluded (draft), ${[...dupInfo.values()].filter((d) => !d.isPrimary).length} marked as duplicates`);
  }

  console.log(`\n📦 Done: ${totalIncluded} pages across ${processedProducts} product(s), ${totalExcludedByChurn} excluded for recent churn.`);

  if (args.verifyAgainstBuild) {
    verifyAgainstBuild(targetProducts, includedByProduct, args);
  }
}

function verifyAgainstBuild(targetProducts, includedByProduct, args) {
  console.log(`\n🔗 Verifying derived URLs against build output in ${args.verifyAgainstBuild}/...`);
  let checked = 0;
  let mismatches = 0;
  for (const product of targetProducts) {
    const files = includedByProduct.get(product.id) || [];
    for (const f of files) {
      const url = deriveUrl(f.relPath, f.entry.routeBase);
      const urlPath = decodeURIComponent(url.slice(SITE_BASE_URL.length));
      const buildFile = path.join(PROJECT_ROOT, args.verifyAgainstBuild, urlPath, 'index.html');
      checked++;
      if (!fs.existsSync(buildFile)) {
        mismatches++;
        console.error(`❌ ${f.repoPath} → ${url} (missing ${path.relative(PROJECT_ROOT, buildFile)})`);
      }
    }
  }
  console.log(`   ${checked} URLs checked, ${mismatches} mismatches`);
  if (mismatches > 0) process.exitCode = 1;
}

main();
