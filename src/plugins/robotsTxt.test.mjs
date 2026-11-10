import assert from 'node:assert/strict';
import { test } from 'node:test';
import { isIndexableSite } from '../config/indexing.js';
import { buildRobotsTxt, noIndexRoutes } from './robotsTxt.js';

test('docs.netwrix.com is crawlable and advertises its sitemap', () => {
  assert.equal(
    buildRobotsTxt('https://docs.netwrix.com'),
    'User-agent: *\nAllow: /\n\nSitemap: https://docs.netwrix.com/sitemap.xml\n',
  );
});

test('docs-dev and local builds are closed to crawlers, with no sitemap', () => {
  for (const url of ['https://docs-dev.netwrix.com', 'http://localhost:4500']) {
    assert.equal(buildRobotsTxt(url), 'User-agent: *\nDisallow: /\n', url);
  }
});

test('only docs.netwrix.com is indexable', () => {
  assert.equal(isIndexableSite('https://docs.netwrix.com'), true);
  assert.equal(isIndexableSite('https://docs-dev.netwrix.com'), false);
  assert.equal(isIndexableSite('http://localhost:4500'), false);
});

test('docs.netwrix.com disallows the routes of noIndex products', () => {
  const products = [
    { id: 'listed', path: 'docs/listed', versions: [{ version: 'current' }] },
    { id: 'beta', path: 'docs/beta', noIndex: true, versions: [{ version: 'current' }, { version: '2.0' }] },
  ];
  const routes = noIndexRoutes(products);
  assert.deepEqual(routes, ['/docs/beta', '/docs/beta/2_0']);
  assert.equal(
    buildRobotsTxt('https://docs.netwrix.com', routes),
    'User-agent: *\nAllow: /\nDisallow: /docs/beta\nDisallow: /docs/beta/2_0\n\nSitemap: https://docs.netwrix.com/sitemap.xml\n',
  );
});
