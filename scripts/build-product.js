#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// Import the ALL_PRODUCTS to validate product IDs
// We need to read the file directly since it's not exported
const fs = require('fs');
const productsFile = fs.readFileSync(path.join(__dirname, '..', 'src', 'config', 'products.js'), 'utf8');

// Extract product IDs from the file (simple regex approach)
const productIds = [];
const productMatches = productsFile.matchAll(/id:\s*'([^']+)'/g);
for (const match of productMatches) {
  productIds.push(match[1]);
}

function showUsage() {
  console.log('Usage:');
  console.log('  npm run start:product <product-ids>');
  console.log('  npm run build:product <product-ids>');
  console.log('');
  console.log('Examples:');
  console.log('  npm run start:product pingcastle');
  console.log('  npm run start:product pingcastle,auditor');
  console.log('  npm run build:product 1secure');
  console.log('');
  console.log('Available products:');
  productIds.forEach(id => console.log(`  - ${id}`));
}

function main() {
  const command = process.argv[2]; // 'start' or 'build'
  const products = process.argv[3]; // product IDs

  if (!command || !['start', 'build'].includes(command)) {
    console.error('Error: Invalid command. Must be "start" or "build".');
    showUsage();
    process.exit(1);
  }

  if (!products) {
    console.error('Error: No products specified.');
    showUsage();
    process.exit(1);
  }

  // Validate product IDs
  const requestedProducts = products.split(',').map(p => p.trim());
  const invalidProducts = requestedProducts.filter(p => !productIds.includes(p));
  
  if (invalidProducts.length > 0) {
    console.error(`Error: Invalid product IDs: ${invalidProducts.join(', ')}`);
    console.log('');
    console.log('Available products:');
    productIds.forEach(id => console.log(`  - ${id}`));
    process.exit(1);
  }

  // Set environment variable and run command
  const env = { ...process.env, BUILD_PRODUCTS: products };
  const npmCommand = command === 'start' ? 'npm start' : 'npm run build';

  console.log(`Building documentation for: ${requestedProducts.join(', ')}`);
  console.log(`Running: ${npmCommand}`);
  console.log('');

  try {
    execSync(npmCommand, { 
      stdio: 'inherit', 
      env: env,
      cwd: path.join(__dirname, '..')
    });
  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, showUsage };