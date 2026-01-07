#!/usr/bin/env node

/**
 * Copy KB content into versioned product docs folders
 * Solution 2 - Approach C: Build Script
 *
 * Features:
 * - Copies KB articles from central location to versioned docs folders
 * - Rewrites absolute KB links to relative paths during copy
 * - Removes .md extensions from links (Docusaurus best practice)
 * - Generates _category_.json files for proper category labeling
 * - Preserves external links and images unchanged
 * - Lockfile management to prevent concurrent runs
 * - Comprehensive validation and error handling
 *
 * Usage:
 *   node scripts/copy-kb-to-versions.js          # Copy all configured products/versions
 *   node scripts/copy-kb-to-versions.js --dry    # Preview without copying
 *   node scripts/copy-kb-to-versions.js --clean  # Remove copied KB folders
 *
 * Environment variables:
 *   COPY_KB_PRODUCTS=accessanalyzer              # Filter by product
 *   COPY_KB_VERSIONS=12.0,11.6                   # Filter by versions
 */

const fs = require('fs');
const path = require('path');

// ============================================================================
// Global Constants
// ============================================================================

const PROJECT_ROOT = path.resolve(__dirname, '..');
const LOCKFILE = path.join(PROJECT_ROOT, '.kb-copy.lock');

const CONFIG = {
  accessanalyzer: {
    versions: ['12.0', '11.6'],
    source: 'docs/kb/accessanalyzer',
    destinationPattern: 'docs/accessanalyzer/{version}/kb'
  }
};

const CATEGORY_LABELS = {
  'active-directory-auditing': 'Active Directory Auditing',
  'connection-profiles-and-credentials': 'Connection Profiles and Credentials',
  'database-auditing-and-configuration': 'Database Auditing and Configuration',
  'entra-id-and-azure-integration': 'Entra ID and Azure Integration',
  'exchange-online-integration': 'Exchange Online Integration',
  'file-system-and-sensitive-data-discovery': 'File System and Sensitive Data Discovery',
  'installation-and-upgrades': 'Installation and Upgrades',
  'job-management-and-scheduling': 'Job Management and Scheduling',
  'reference-and-technical-specifications': 'Reference and Technical Specifications',
  'reports-and-web-console': 'Reports and Web Console',
  'sharepoint-online-integration': 'SharePoint Online Integration',
  'troubleshooting-and-errors': 'Troubleshooting and Errors'
};

// ============================================================================
// Lockfile Management
// ============================================================================

function acquireLock(isDryRun) {
  if (isDryRun) return; // Skip locking in dry-run mode

  // Check for stale locks (>10 minutes)
  if (fs.existsSync(LOCKFILE)) {
    const stats = fs.statSync(LOCKFILE);
    const lockAge = Date.now() - stats.mtimeMs;
    const tenMinutes = 10 * 60 * 1000;

    if (lockAge > tenMinutes) {
      console.log('⚠️  Removing stale lock file');
      try {
        fs.unlinkSync(LOCKFILE);
      } catch (err) {
        throw new Error(`Cannot remove stale lock file: ${err.message}`);
      }
    } else {
      throw new Error('KB copy script is already running. If this is incorrect, delete .kb-copy.lock');
    }
  }

  // Create lock file atomically (prevents TOCTOU race conditions)
  try {
    const fd = fs.openSync(
      LOCKFILE,
      fs.constants.O_CREAT | fs.constants.O_EXCL | fs.constants.O_WRONLY,
      0o600
    );

    try {
      fs.writeFileSync(fd, JSON.stringify({ timestamp: Date.now() }), 'utf8');
    } finally {
      fs.closeSync(fd);
    }
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('KB copy script is already running. If this is incorrect, delete .kb-copy.lock');
    }
    throw new Error(`Cannot create lock file: ${err.message}`);
  }
}

function releaseLock(isDryRun) {
  if (isDryRun) return;
  if (fs.existsSync(LOCKFILE)) {
    try {
      fs.unlinkSync(LOCKFILE);
    } catch (err) {
      console.warn(`⚠️  Warning: Could not remove lock file: ${err.message}`);
    }
  }
}

// ============================================================================
// Validation Functions
// ============================================================================

function validateVersionFormat(version) {
  const versionRegex = /^\d+\.\d+(\.\d+)?$/; // X.Y or X.Y.Z
  if (!versionRegex.test(version)) {
    throw new Error(`Invalid version format: ${version}. Expected X.Y or X.Y.Z`);
  }
}

function validateDestinationPath(destPath) {
  // Destination must be relative
  if (path.isAbsolute(destPath)) {
    throw new Error(`Destination path must be relative: ${destPath}`);
  }

  // Resolve and check it stays under PROJECT_ROOT
  const abs = path.resolve(PROJECT_ROOT, destPath);
  const rel = path.relative(PROJECT_ROOT, abs);

  // Defensive: block destPath that resolves exactly to the repo root
  if (rel === '') {
    throw new Error(`Destination cannot be project root: ${destPath}`);
  }

  // Reject if escapes project root
  if (rel === '..' || rel.startsWith('..' + path.sep) || path.isAbsolute(rel)) {
    throw new Error(`Path traversal detected: ${destPath} resolves outside project root`);
  }
}

function validateEnvironment(filterProducts, filterVersions, CONFIG) {
  // Validate COPY_KB_PRODUCTS
  if (filterProducts) {
    const configKeys = Object.keys(CONFIG);
    for (const product of filterProducts) {
      if (!configKeys.includes(product)) {
        throw new Error(`Invalid product: ${product}. Available: ${configKeys.join(', ')}`);
      }
    }
  }

  // Validate COPY_KB_VERSIONS
  if (filterVersions) {
    for (const version of filterVersions) {
      validateVersionFormat(version);
    }

    // Check versions exist in selected products
    const selectedProducts = filterProducts || Object.keys(CONFIG);
    for (const product of selectedProducts) {
      const availableVersions = CONFIG[product].versions;
      for (const version of filterVersions) {
        if (!availableVersions.includes(version)) {
          throw new Error(`Version ${version} not found in ${product}. Available: ${availableVersions.join(', ')}`);
        }
      }
    }
  }
}

// ============================================================================
// Link Rewriting (Dynamic Product)
// ============================================================================

function rewriteKbLinks(content, sourceFilePath, kbSourceRoot, productName) {
  // Dynamic regex based on product name
  const kbLinkRegex = new RegExp(`\\[([^\\]]+)\\]\\(\\/docs\\/kb\\/${productName}\\/([^)]+\\.md)\\)`, 'g');

  return content.replace(kbLinkRegex, (match, linkText, targetPath) => {
    // Use absolute paths anchored to PROJECT_ROOT
    const absoluteSourcePath = path.isAbsolute(sourceFilePath)
      ? sourceFilePath
      : path.resolve(PROJECT_ROOT, sourceFilePath);

    const absoluteKbRoot = path.isAbsolute(kbSourceRoot)
      ? kbSourceRoot
      : path.resolve(PROJECT_ROOT, kbSourceRoot);

    const absoluteTargetPath = path.resolve(absoluteKbRoot, targetPath);

    const sourceDir = path.dirname(absoluteSourcePath);
    let relativePath = path.relative(sourceDir, absoluteTargetPath);

    // Remove .md extension
    relativePath = relativePath.replace(/\.md$/, '');

    // Normalize path separators
    relativePath = relativePath.replace(/\\/g, '/');

    // Add ./ prefix for same-directory links
    if (!relativePath.startsWith('../') && !relativePath.startsWith('./')) {
      relativePath = './' + relativePath;
    }

    return `[${linkText}](${relativePath})`;
  });
}

function rewriteAndCopyMarkdownFile(srcPath, destPath, kbSourceRoot, productName, errorCount) {
  try {
    const content = fs.readFileSync(srcPath, 'utf8');
    const transformedContent = rewriteKbLinks(content, srcPath, kbSourceRoot, productName);
    fs.writeFileSync(destPath, transformedContent, 'utf8');
    return true;
  } catch (err) {
    console.log(`     ⚠️  Failed to copy ${path.basename(srcPath)}: ${err.message}`);
    errorCount.count++;
    return false;
  }
}

// ============================================================================
// Category File Generation (Whitelist)
// ============================================================================

function generateCategoryFile(destPath, folderName) {
  const label = CATEGORY_LABELS[folderName];

  if (!label) {
    return null; // Not in whitelist
  }

  try {
    const categoryConfig = {
      label: label,
      collapsed: true,
      collapsible: true
    };

    const categoryFilePath = path.join(destPath, '_category_.json');
    fs.writeFileSync(categoryFilePath, JSON.stringify(categoryConfig, null, 2) + '\n', 'utf8');
    return true; // Created successfully
  } catch (err) {
    console.log(`     ⚠️  Failed to generate category file for ${folderName}: ${err.message}`);
    return false; // Failed
  }
}

// ============================================================================
// Copy Logic with Success Tracking
// ============================================================================

function copyDirectorySync(src, dest, kbSourceRoot, productName, errorCount) {
  let filesCount = 0;
  let categoriesCount = 0;

  // Create destination directory (fatal if fails)
  try {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
  } catch (err) {
    throw new Error(`Fatal: Cannot create directory ${dest}: ${err.message}`);
  }

  // Read source directory (fatal if fails)
  let entries;
  try {
    entries = fs.readdirSync(src, { withFileTypes: true });
  } catch (err) {
    throw new Error(`Fatal: Cannot read directory ${src}: ${err.message}`);
  }

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectory (fatal errors throw up to per-version handler)
      const subCounts = copyDirectorySync(srcPath, destPath, kbSourceRoot, productName, errorCount);
      filesCount += subCounts.filesCount;
      categoriesCount += subCounts.categoriesCount;

      // Generate category file (always call, whitelist inside)
      const categoryResult = generateCategoryFile(destPath, entry.name);
      if (categoryResult === true) {
        categoriesCount++;
      } else if (categoryResult === false) {
        errorCount.count++;
      }
      // null = not whitelisted, ignore
    } else {
      // Copy files (non-fatal failures, log and continue)
      if (entry.name.endsWith('.md')) {
        if (rewriteAndCopyMarkdownFile(srcPath, destPath, kbSourceRoot, productName, errorCount)) {
          filesCount++;
        }
      } else {
        try {
          fs.copyFileSync(srcPath, destPath);
          filesCount++;
        } catch (err) {
          console.log(`     ⚠️  Failed to copy ${entry.name}: ${err.message}`);
          errorCount.count++;
        }
      }
    }
  }

  return { filesCount, categoriesCount };
}

// ============================================================================
// Remove Directory
// ============================================================================

function removeDirectorySync(dir) {
  if (!fs.existsSync(dir)) {
    return true; // Nothing to remove, success
  }

  try {
    // Prefer fs.rmSync if available (Node 14.14+)
    if (fs.rmSync) {
      fs.rmSync(dir, { recursive: true, force: true });
      return true;
    }

    // Fallback: manual recursive removal
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const success = removeDirectorySync(fullPath);
        if (!success) return false;
      } else {
        fs.unlinkSync(fullPath);
      }
    }

    fs.rmdirSync(dir);
    return true;
  } catch (err) {
    console.log(`     ⚠️  Failed to remove directory ${dir}: ${err.message}`);
    return false;
  }
}

// ============================================================================
// Main Logic
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry');
  const isClean = args.includes('--clean');

  let totalFileErrors = 0;
  let totalVersionErrors = 0;
  let totalSuccess = 0;

  try {
    // Acquire lock
    acquireLock(isDryRun);

    // Read environment filters
    const filterProducts = process.env.COPY_KB_PRODUCTS
      ? process.env.COPY_KB_PRODUCTS.split(',').map(p => p.trim())
      : null;

    const filterVersions = process.env.COPY_KB_VERSIONS
      ? process.env.COPY_KB_VERSIONS.split(',').map(v => v.trim())
      : null;

    // Validate environment
    validateEnvironment(filterProducts, filterVersions, CONFIG);

    console.log('='.repeat(60));
    console.log('KB Copy Script - Solution 2 (Approach C)');
    console.log('='.repeat(60));

    if (isDryRun) {
      console.log('🔍 DRY RUN MODE - No files will be modified');
    }

    if (isClean) {
      console.log('🧹 CLEAN MODE - Removing copied KB folders');
    }

    if (filterProducts) {
      console.log(`📦 Filtering products: ${filterProducts.join(', ')}`);
    }

    if (filterVersions) {
      console.log(`📌 Filtering versions: ${filterVersions.join(', ')}`);
    }

    console.log('');

    // Process each product
    for (const [product, config] of Object.entries(CONFIG)) {
      // Skip if filtered out
      if (filterProducts && !filterProducts.includes(product)) {
        continue;
      }

      console.log(`\n📚 Product: ${product}`);
      console.log('-'.repeat(60));

      // Check if source exists
      if (!fs.existsSync(config.source)) {
        console.log(`⚠️  Source not found: ${config.source}`);
        totalVersionErrors++;
        continue;
      }

      // Process each version (isolated)
      for (const version of config.versions) {
        // Skip if filtered out
        if (filterVersions && !filterVersions.includes(version)) {
          continue;
        }

        try {
          // Validate version format
          validateVersionFormat(version);

          const destination = config.destinationPattern.replace('{version}', version);

          // Validate destination path
          validateDestinationPath(destination);

          console.log(`\n  📖 Version: ${version}`);
          console.log(`     Source: ${config.source}`);
          console.log(`     Dest:   ${destination}`);

          if (isClean) {
            // Remove copied KB folder
            if (fs.existsSync(destination)) {
              if (!isDryRun) {
                const success = removeDirectorySync(destination);
                if (success) {
                  console.log(`     ✅ Removed`);
                  totalSuccess++;
                } else {
                  totalVersionErrors++;
                }
              } else {
                console.log(`     🔍 Would remove`);
                totalSuccess++;
              }
            } else {
              console.log(`     ℹ️  Does not exist (nothing to remove)`);
              totalSuccess++;
            }
          } else {
            // Copy KB content

            // Remove existing destination first
            if (fs.existsSync(destination)) {
              if (!isDryRun) {
                const removeSuccess = removeDirectorySync(destination);
                if (removeSuccess) {
                  console.log(`     🗑️  Removed old KB folder`);
                } else {
                  throw new Error('Failed to remove old KB folder');
                }
              } else {
                console.log(`     🔍 Would remove old KB folder`);
              }
            }

            // Copy source to destination
            if (!isDryRun) {
              const errorCount = { count: 0 };
              const result = copyDirectorySync(config.source, destination, config.source, product, errorCount);

              if (errorCount.count > 0) {
                console.log(`     ⚠️  Copied with ${errorCount.count} file errors`);
                totalFileErrors += errorCount.count;
                totalSuccess++; // Version partially succeeded
              } else {
                console.log(`     ✅ Copied ${result.filesCount} files, ${result.categoriesCount} categories`);
                totalSuccess++;
              }
            } else {
              console.log(`     🔍 Would copy KB content`);
              totalSuccess++;
            }
          }
        } catch (err) {
          // Per-version error isolation
          console.log(`     ❌ Error: ${err.message}`);
          totalVersionErrors++;
          // Continue to next version
        }
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log(isClean ? '🧹 Clean complete' : '✅ Copy complete');
    console.log(`Total: ${totalSuccess} successful, ${totalFileErrors} file errors, ${totalVersionErrors} version errors`);
    console.log('='.repeat(60));

  } catch (err) {
    console.error(`\n❌ Fatal error: ${err.message}`);
    totalVersionErrors++;
  } finally {
    // Always release lock
    releaseLock(isDryRun);
  }

  // Single exit point
  const totalErrors = totalFileErrors + totalVersionErrors;
  process.exit(totalErrors > 0 ? 1 : 0);
}

// Run
main();
