const fs = require('fs');
const path = require('path');
const { getProducts } = require('../../src/config/products');

/**
 * Docusaurus plugin to generate llms.txt files for the main site and each product
 * Based on https://llmstxt.org/ initiative
 */
module.exports = function llmsTxtGeneratorPlugin(context, options) {
  return {
    name: 'llms-txt-generator',

    async postBuild({ siteConfig, routesPaths, outDir, plugins }) {
      console.log('[llms-txt-generator] Generating llms.txt files...');

      const products = getProducts();
      const baseUrl = siteConfig.url || 'https://docs.netwrix.com';

      // Generate main site llms.txt
      await generateMainSiteLlmsTxt(outDir, baseUrl, products, routesPaths);

      // Generate llms.txt for each product
      for (const product of products) {
        await generateProductLlmsTxt(outDir, baseUrl, product, routesPaths);
      }

      console.log('[llms-txt-generator] Successfully generated llms.txt files');
    },
  };
};

/**
 * Generate the main site llms.txt file
 */
async function generateMainSiteLlmsTxt(outDir, baseUrl, products, routesPaths) {
  const lines = [];

  // Header
  lines.push('# Netwrix Product Documentation');
  lines.push('');
  lines.push('> Documentation for Netwrix security and compliance products');
  lines.push('');

  // Main site information
  lines.push('## Main Site');
  lines.push('');
  lines.push(`- Homepage: ${baseUrl}/`);
  lines.push('');

  // Product index
  lines.push('## Products');
  lines.push('');

  for (const product of products) {
    const versions = product.versions || [{ version: 'current' }];
    const latestVersion = versions[0];
    const versionPath = latestVersion.version === 'current'
      ? ''
      : `/${latestVersion.version.replace(/\./g, '_')}`;

    const productUrl = `${baseUrl}/docs/${product.path}${versionPath}`;
    lines.push(`- ${product.name}: ${productUrl}`);

    // Add llms.txt link for this product
    lines.push(`  - llms.txt: ${productUrl}/llms.txt`);
  }

  lines.push('');

  // Optional: Add all routes as additional resources
  lines.push('## Additional Resources');
  lines.push('');

  // Filter and organize routes
  const docRoutes = routesPaths
    .filter(route => route.startsWith('/docs/'))
    .filter(route => !route.includes('/llms.txt'))
    .sort();

  // Group routes by product
  const routesByProduct = new Map();

  for (const route of docRoutes) {
    const parts = route.split('/');
    if (parts.length >= 3) {
      const productPath = parts[2];
      if (!routesByProduct.has(productPath)) {
        routesByProduct.set(productPath, []);
      }
      routesByProduct.get(productPath).push(route);
    }
  }

  // Add top-level pages for each product (limit to avoid huge files)
  for (const [productPath, routes] of routesByProduct.entries()) {
    const product = products.find(p => p.path === productPath);
    if (product) {
      lines.push(`### ${product.name}`);
      lines.push('');

      // Only include top-level and overview pages to keep file manageable
      const topRoutes = routes
        .filter(route => {
          const depth = route.split('/').length;
          return depth <= 5 || route.includes('/overview') || route.endsWith(productPath);
        })
        .slice(0, 20); // Limit to 20 routes per product

      for (const route of topRoutes) {
        lines.push(`- ${baseUrl}${route}`);
      }
      lines.push('');
    }
  }

  const content = lines.join('\n');
  const outputPath = path.join(outDir, 'llms.txt');

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`[llms-txt-generator] Generated main llms.txt at ${outputPath}`);
}

/**
 * Generate llms.txt for a specific product
 */
async function generateProductLlmsTxt(outDir, baseUrl, product, routesPaths) {
  const versions = product.versions || [{ version: 'current' }];

  for (const versionObj of versions) {
    const version = versionObj.version;
    const versionPath = version === 'current'
      ? ''
      : `/${version.replace(/\./g, '_')}`;

    const productBaseUrl = `${baseUrl}/docs/${product.path}${versionPath}`;
    const productPath = `/docs/${product.path}${versionPath}`;

    const lines = [];

    // Header
    lines.push(`# ${product.name}`);
    if (version !== 'current') {
      lines.push(`## Version ${version}`);
    }
    lines.push('');

    if (product.description) {
      lines.push(`> ${product.description}`);
      lines.push('');
    }

    // Product information
    lines.push('## Product Information');
    lines.push('');
    lines.push(`- Product: ${product.name}`);
    if (version !== 'current') {
      lines.push(`- Version: ${version}`);
    }
    lines.push(`- Documentation: ${productBaseUrl}`);
    if (product.category) {
      lines.push(`- Category: ${product.category}`);
    }
    lines.push('');

    // Available versions
    if (versions.length > 1) {
      lines.push('## Available Versions');
      lines.push('');
      for (const v of versions) {
        const vPath = v.version === 'current'
          ? ''
          : `/${v.version.replace(/\./g, '_')}`;
        lines.push(`- ${v.version}: ${baseUrl}/docs/${product.path}${vPath}`);
      }
      lines.push('');
    }

    // Pages
    lines.push('## Documentation Pages');
    lines.push('');

    // Filter routes for this specific product version
    const productRoutes = routesPaths
      .filter(route => route.startsWith(productPath))
      .filter(route => route === productPath || route.startsWith(`${productPath}/`))
      .filter(route => !route.includes('/llms.txt'))
      .sort();

    if (productRoutes.length > 0) {
      for (const route of productRoutes) {
        // Create a readable name from the route
        const pageName = route
          .replace(productPath, '')
          .replace(/^\//, '')
          .replace(/\/$/, '')
          .split('/')
          .map(segment => segment.replace(/_/g, ' '))
          .filter(segment => segment.length > 0)
          .join(' > ');

        if (pageName) {
          lines.push(`- ${pageName}: ${baseUrl}${route}`);
        } else {
          lines.push(`- Home: ${baseUrl}${route}`);
        }
      }
    } else {
      lines.push('- No pages found (may be generated during build)');
    }

    lines.push('');

    const content = lines.join('\n');

    // Create output directory path
    const productOutDir = version === 'current'
      ? path.join(outDir, 'docs', product.path)
      : path.join(outDir, 'docs', product.path, version.replace(/\./g, '_'));

    // Ensure directory exists
    if (!fs.existsSync(productOutDir)) {
      fs.mkdirSync(productOutDir, { recursive: true });
    }

    const outputPath = path.join(productOutDir, 'llms.txt');
    fs.writeFileSync(outputPath, content, 'utf-8');
    console.log(`[llms-txt-generator] Generated llms.txt for ${product.name} ${version} at ${outputPath}`);
  }
}
