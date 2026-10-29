import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildRobotsTxt } from './robotsTxt.js';

test('docs.netwrix.com is crawlable and advertises its sitemap', () => {
  assert.equal(
    buildRobotsTxt('https://docs.netwrix.com'),
    'User-agent: *\nAllow: /\n\nSitemap: https://docs.netwrix.com/sitemap.xml\n',
  );
});

test('docs-dev and local builds are closed to crawlers', () => {
  for (const url of ['https://docs-dev.netwrix.com', 'http://localhost:4500']) {
    assert.equal(buildRobotsTxt(url), 'User-agent: *\nDisallow: /\n', url);
  }
});
