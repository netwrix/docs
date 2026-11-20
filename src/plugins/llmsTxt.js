import { writeFileSync } from 'fs';
import { join } from 'path';
import { isIndexableSite } from '../config/indexing.js';
import { PRODUCTS, getDefaultVersion, generateRouteBasePath } from '../config/products.js';

const SITE_NAME = 'Netwrix Documentation';
const SITE_SUMMARY =
  'Product documentation for Netwrix security products. Each link below goes to the latest version of a product. Other versions are listed in the version selector on each product page.';

/** Route of a product's latest version, for example /docs/accessanalyzer/12_0. */
export function latestRoute(product) {
  const latest = getDefaultVersion(product);
  if (!latest) return null;
  return `/${latest.customRoutePath || generateRouteBasePath(product.path, latest.version)}`;
}

/**
 * Builds the llms.txt body (llmstxt.org format): one link per product to its latest
 * version, plus the Knowledge Base. Unlisted products (noIndex or hideFromNavbar) are left out.
 * Uses the full product list, not the DOCS_PRODUCT-scoped one, like robots.txt.
 */
export function buildLlmsTxt(siteUrl, products = PRODUCTS) {
  const origin = new URL(siteUrl).origin;
  const lines = products
    .filter((product) => !product.noIndex && !product.hideFromNavbar && latestRoute(product))
    .sort((a, b) => a.name.localeCompare(b.name, 'en'))
    .map((product) => {
      const description = product.description ? `: ${product.description}` : '';
      return `- [${product.name}](${origin}${latestRoute(product)})${description}`;
    });

  return [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_SUMMARY}`,
    '',
    '## Products',
    '',
    ...lines,
    '',
    '## Optional',
    '',
    `- [Knowledge Base](${origin}/docs/kb/): Troubleshooting and how-to articles across products`,
    '',
  ].join('\n');
}

/** Writes build/llms.txt on docs.netwrix.com only, the same host robots.txt leaves open. */
export default function llmsTxtPlugin() {
  return {
    name: 'llms-txt',
    async postBuild({ siteConfig, outDir }) {
      if (!isIndexableSite(siteConfig.url)) return;
      writeFileSync(join(outDir, 'llms.txt'), buildLlmsTxt(siteConfig.url));
    },
  };
}
