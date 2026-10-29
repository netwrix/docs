import { writeFileSync } from 'fs';
import { join } from 'path';
import { isIndexableSite } from '../config/indexing.js';

export function buildRobotsTxt(siteUrl) {
  if (!isIndexableSite(siteUrl)) {
    // Crawling stays allowed on purpose: the site's noIndex meta tag only
    // removes pages from search once a crawler can fetch them and see it.
    // Switch this to 'Disallow: /' once docs-dev has dropped out of the index.
    return 'User-agent: *\nAllow: /\n';
  }
  return `User-agent: *\nAllow: /\n\nSitemap: ${new URL(siteUrl).origin}/sitemap.xml\n`;
}

/** Writes build/robots.txt for the host this build is deployed to. */
export default function robotsTxtPlugin() {
  return {
    name: 'robots-txt',
    async postBuild({ siteConfig, outDir }) {
      writeFileSync(join(outDir, 'robots.txt'), buildRobotsTxt(siteConfig.url));
    },
  };
}
