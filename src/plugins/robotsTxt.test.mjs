import assert from 'node:assert/strict';
import { test } from 'node:test';
import { isIndexableSite } from '../config/indexing.js';
import { buildRobotsTxt } from './robotsTxt.js';

test('docs.netwrix.com is crawlable and advertises its sitemap', () => {
  assert.equal(
    buildRobotsTxt('https://docs.netwrix.com'),
    'User-agent: *\nAllow: /\n\nSitemap: https://docs.netwrix.com/sitemap.xml\n',
  );
});

test('docs-dev and local builds stay crawlable so noindex can be seen, with no sitemap', () => {
  for (const url of ['https://docs-dev.netwrix.com', 'http://localhost:4500']) {
    assert.equal(buildRobotsTxt(url), 'User-agent: *\nAllow: /\n', url);
  }
});

test('only docs.netwrix.com is indexable', () => {
  assert.equal(isIndexableSite('https://docs.netwrix.com'), true);
  assert.equal(isIndexableSite('https://docs-dev.netwrix.com'), false);
  assert.equal(isIndexableSite('http://localhost:4500'), false);
});
