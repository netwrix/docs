import { writeFileSync } from 'fs';
import { join } from 'path';
import { isIndexableSite } from '../config/indexing.js';
import { PRODUCTS, generateRouteBasePath } from '../config/products.js';

/** Route prefixes of products flagged noIndex, for example /docs/1securebeta. */
export function noIndexRoutes(products = PRODUCTS) {
  return products
    .filter((product) => product.noIndex)
    .flatMap((product) =>
      product.versions.map((version) => `/${version.customRoutePath || generateRouteBasePath(product.path, version.version)}`),
    );
}

export function buildRobotsTxt(siteUrl, disallowRoutes = []) {
  if (!isIndexableSite(siteUrl)) {
    // docs-dev has dropped out of search, so crawling is closed too. The
    // site's noIndex meta tag stays on as a second layer.
    return 'User-agent: *\nDisallow: /\n';
  }
  const disallow = [...new Set(disallowRoutes)].map((route) => `Disallow: ${route}\n`).join('');
  return `User-agent: *\nAllow: /\n${disallow}\nSitemap: ${new URL(siteUrl).origin}/sitemap.xml\n`;
}

/** Writes build/robots.txt for the host this build is deployed to. */
export default function robotsTxtPlugin() {
  return {
    name: 'robots-txt',
    async postBuild({ siteConfig, outDir }) {
      writeFileSync(join(outDir, 'robots.txt'), buildRobotsTxt(siteConfig.url, noIndexRoutes()));
    },
  };
}
