import { writeFileSync } from 'fs';
import { join } from 'path';

// Only this host is crawlable. docs-dev.netwrix.com is built from the same
// sources on its own deploy (dev branch, development environment), so it gets
// a different robots.txt, and any host not listed here, including local
// builds, is closed to crawlers by default.
const CRAWLABLE_HOSTNAMES = ['docs.netwrix.com'];

export function buildRobotsTxt(siteUrl) {
  const { hostname, origin } = new URL(siteUrl);
  if (!CRAWLABLE_HOSTNAMES.includes(hostname)) {
    return 'User-agent: *\nDisallow: /\n';
  }
  return `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
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
