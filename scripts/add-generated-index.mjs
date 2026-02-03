#!/usr/bin/env node

/**
 * Add generated-index to all KB category folders
 * This creates the icon grid view for category pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const KB_DIR = path.resolve(__dirname, '../docs/kb');

// Convert folder name to readable description
function folderToDescription(folderName, productName) {
  // Convert kebab-case to Title Case
  const title = folderName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return `Knowledge base articles related to ${title.toLowerCase()} in ${productName}.`;
}

// Convert folder name to product display name
function getProductDisplayName(productId) {
  const names = {
    '1secure': '1Secure',
    'accessanalyzer': 'Access Analyzer',
    'accessinformationcenter': 'Access Information Center',
    'activitymonitor': 'Activity Monitor',
    'auditor': 'Auditor',
    'changetracker': 'Change Tracker',
    'dataclassification': 'Data Classification',
    'directorymanager': 'Directory Manager',
    'endpointpolicymanager': 'Endpoint Policy Manager',
    'endpointprotector': 'Endpoint Protector',
    'passwordpolicyenforcer': 'Password Policy Enforcer',
    'passwordreset': 'Password Reset',
    'privilegesecure': 'Privilege Secure',
    'privilegesecurediscovery': 'Privilege Secure Discovery',
    'recoveryad': 'Identity Recovery',
    'threatmanager': 'Threat Manager',
    'threatprevention': 'Threat Prevention',
  };
  return names[productId] || productId;
}

function updateCategoryFile(filePath, productName, categoryName) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const category = JSON.parse(content);

    // Check if already has generated-index
    if (category.link && category.link.type === 'generated-index') {
      console.log(`  ✓ Already has generated-index: ${categoryName}`);
      return false;
    }

    // Add or update the link field
    category.link = {
      type: 'generated-index',
      description: folderToDescription(categoryName, productName)
    };

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(category, null, 2) + '\n', 'utf8');
    console.log(`  ✓ Updated: ${categoryName}`);
    return true;

  } catch (error) {
    console.error(`  ✗ Error updating ${filePath}:`, error.message);
    return false;
  }
}

function processProduct(productDir) {
  const productName = path.basename(productDir);
  const displayName = getProductDisplayName(productName);

  console.log(`\n📚 ${displayName} (${productName})`);
  console.log('─'.repeat(60));

  let updated = 0;

  // Find all subdirectories (exclude image folders)
  const entries = fs.readdirSync(productDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Skip image/asset folders
    if (entry.name.startsWith('0-') || ['images', 'assets', 'media'].includes(entry.name)) {
      continue;
    }

    const categoryPath = path.join(productDir, entry.name);
    const categoryFile = path.join(categoryPath, '_category_.json');

    if (fs.existsSync(categoryFile)) {
      if (updateCategoryFile(categoryFile, displayName, entry.name)) {
        updated++;
      }
    }
  }

  return updated;
}

function main() {
  console.log('Adding generated-index to all KB category folders...\n');

  let totalUpdated = 0;

  // Process each product
  const products = fs.readdirSync(KB_DIR, { withFileTypes: true });

  for (const product of products) {
    if (!product.isDirectory()) continue;

    const productPath = path.join(KB_DIR, product.name);
    totalUpdated += processProduct(productPath);
  }

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Complete! Updated ${totalUpdated} category files`);
  console.log('='.repeat(60));
}

main();
