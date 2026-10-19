import React from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import { createProductMap, PRODUCTS } from '@site/src/config/products.js';

const productMap = createProductMap();

export default function ProductMetaTags() {
  const location = useLocation();
  const pathname = location.pathname;

  // Find the matching product
  let productName = '';
  let productVersion = '';
  let matchedPath = '';

  for (const [path, name] of Object.entries(productMap)) {
    if (pathname.startsWith(path) && path.length > matchedPath.length) {
      matchedPath = path;
      productName = name;
    }
  }

  if (productName) {
    // Extract version from URL
    const pathParts = pathname.split('/').filter((part) => part);
    const productPart = matchedPath
      .split('/')
      .filter((part) => part)
      .pop();
    const productIndex = pathParts.indexOf(productPart);

    if (productIndex !== -1 && pathParts[productIndex + 1]) {
      let versionFromUrl = pathParts[productIndex + 1];
      // Check if it looks like a version (e.g., "13_5", "2_0", "v2", "saas", etc.)
      // Regex now accepts underscores in version numbers
      if (/^(v?\d+(_\d+)*|saas|current)$/i.test(versionFromUrl)) {
        versionFromUrl = versionFromUrl.replace(/^v/i, ''); // Remove 'v' prefix if present
        if (versionFromUrl.toLowerCase() === 'saas') {
          productVersion = 'saas';
        } else if (versionFromUrl.toLowerCase() === 'current') {
          productVersion = 'current';
        } else {
          // Convert underscores back to periods for the meta tag content
          productVersion = versionFromUrl.replace(/_/g, '.');
        }
      }
    }

    // Fallback for single-version "current" products with no version segment in the URL
    if (!productVersion) {
      const product = PRODUCTS.find(p => productName === p.name);
      if (product && product.versions.length === 1 && product.versions[0].version === 'current') {
        productVersion = 'current';
      }
    }
  }

  // Only render meta tags if we have a product name
  if (!productName) {
    return null;
  }

  return (
    <Head>
      <meta name="product-name" content={productName} />
      {/* Ensure productVersion is an empty string if not determined, rather than undefined */}
      <meta name="product-version" content={productVersion || ''} />
    </Head>
  );
}
