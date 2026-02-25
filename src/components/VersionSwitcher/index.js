import React from 'react';
import { useLocation } from '@docusaurus/router';
import { PRODUCTS, generateRouteBasePath, urlToVersion } from '@site/src/config/products.js';
import styles from './styles.module.css';

export default function VersionSwitcher() {
  const location = useLocation();
  const pathname = location.pathname;

  // Parse URL to extract product and version
  const pathParts = pathname.split('/').filter((part) => part);

  // Find the matching product by checking if pathname starts with product path
  let matchedProduct = null;
  let currentVersion = null;

  for (const product of PRODUCTS) {
    // Extract the product path segment (e.g., 'passwordsecure' from 'docs/passwordsecure')
    const productPathSegment = product.path.split('/').pop();

    // Check if this product's path segment is in the URL
    const productIndex = pathParts.indexOf(productPathSegment);

    if (productIndex !== -1) {
      matchedProduct = product;

      // Check if there's a version segment after the product
      if (pathParts[productIndex + 1]) {
        const versionFromUrl = pathParts[productIndex + 1];
        // Check if it looks like a version (e.g., "9_3", "saas", "current")
        if (/^(v?\d+(_\d+)*|saas|current)$/i.test(versionFromUrl)) {
          currentVersion = urlToVersion(versionFromUrl);
        }
      }
      break;
    }
  }

  // Don't render anything if:
  // - No product matched
  // - Product only has one version
  if (!matchedProduct || matchedProduct.versions.length <= 1) {
    return null;
  }

  // Sort versions so latest is always first (on the left)
  const sortedVersions = [...matchedProduct.versions].sort((a, b) => {
    if (a.isLatest) return -1;
    if (b.isLatest) return 1;
    return 0;
  });

  return (
    <div className={styles.versionSwitcherContainer}>
      <div className={styles.versionBadges}>
        {sortedVersions.map((version) => {
          // Use customLink or customRoutePath override if provided, otherwise generate the link
          const versionLink = version.customLink || (version.customRoutePath ? `/${version.customRoutePath}` : `/${generateRouteBasePath(matchedProduct.path, version.version)}`);
          const isActive = currentVersion === version.version;
          const badgeClass = version.isLatest
            ? `${styles.versionBadge} ${styles.latestBadge}`
            : styles.versionBadge;
          const activeClass = isActive ? styles.activeBadge : '';

          return (
            <a
              key={version.version}
              href={versionLink}
              className={`${badgeClass} ${activeClass}`}
              aria-label={`Switch to version ${version.label}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {version.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
