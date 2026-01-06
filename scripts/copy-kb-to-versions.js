#!/usr/bin/env node

/**
 * Copy KB content into versioned product docs folders
 * Solution 2 - Approach C: Build Script
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
// Configuration
// ============================================================================

const CONFIG = {
  accessanalyzer: {
    versions: ['12.0', '11.6'],
    source: 'docs/kb/accessanalyzer',
    destinationPattern: 'docs/accessanalyzer/{version}/kb'
  }
};

// ============================================================================
// Utilities
// ============================================================================

/**
 * Convert version string to URL-safe format (12.0 → 12_0)
 */
function versionToUrl(version) {
  return version.replace(/\./g, '_');
}

/**
 * Recursively copy directory
 */
function copyDirectorySync(src, dest) {
  // Create destination directory
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read all files/folders in source
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectory
      copyDirectorySync(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Recursively remove directory
 */
function removeDirectorySync(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      removeDirectorySync(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  }

  fs.rmdirSync(dir);
}

// ============================================================================
// Main Logic
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry');
  const isClean = args.includes('--clean');

  // Read environment filters
  const filterProducts = process.env.COPY_KB_PRODUCTS
    ? process.env.COPY_KB_PRODUCTS.split(',').map(p => p.trim())
    : null;

  const filterVersions = process.env.COPY_KB_VERSIONS
    ? process.env.COPY_KB_VERSIONS.split(',').map(v => v.trim())
    : null;

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
      continue;
    }

    // Process each version
    for (const version of config.versions) {
      // Skip if filtered out
      if (filterVersions && !filterVersions.includes(version)) {
        continue;
      }

      const versionUrl = versionToUrl(version);
      // Use the actual version (with dots) for file system path, not the URL version
      const destination = config.destinationPattern.replace('{version}', version);

      console.log(`\n  📖 Version: ${version} (URL: ${versionUrl})`);
      console.log(`     Source: ${config.source}`);
      console.log(`     Dest:   ${destination}`);

      if (isClean) {
        // Remove copied KB folder
        if (fs.existsSync(destination)) {
          if (!isDryRun) {
            removeDirectorySync(destination);
            console.log(`     ✅ Removed`);
          } else {
            console.log(`     🔍 Would remove`);
          }
        } else {
          console.log(`     ℹ️  Does not exist (nothing to remove)`);
        }
      } else {
        // Copy KB content

        // Remove existing destination first (avoid stale files)
        if (fs.existsSync(destination)) {
          if (!isDryRun) {
            removeDirectorySync(destination);
            console.log(`     🗑️  Removed old KB folder`);
          } else {
            console.log(`     🔍 Would remove old KB folder`);
          }
        }

        // Copy source to destination
        if (!isDryRun) {
          copyDirectorySync(config.source, destination);

          // Count copied files
          const countFiles = (dir) => {
            let count = 0;
            const entries = fs.readdirSync(dir, { withFileTypes: true });
            for (const entry of entries) {
              if (entry.isDirectory()) {
                count += countFiles(path.join(dir, entry.name));
              } else {
                count++;
              }
            }
            return count;
          };

          const fileCount = countFiles(destination);
          console.log(`     ✅ Copied ${fileCount} files`);
        } else {
          console.log(`     🔍 Would copy KB content`);
        }
      }
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(isClean ? '🧹 Clean complete' : '✅ Copy complete');
  console.log('='.repeat(60));
}

// Run
main();
