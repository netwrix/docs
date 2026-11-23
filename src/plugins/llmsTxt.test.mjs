import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildLlmsTxt, latestRoute } from './llmsTxt.js';

const products = [
  {
    id: 'zeta',
    name: 'Zeta',
    description: 'Single-version product',
    path: 'docs/zeta',
    versions: [{ version: 'current', isLatest: true }],
  },
  {
    id: 'alpha',
    name: 'Alpha',
    description: 'Multi-version product',
    path: 'docs/alpha',
    versions: [
      { version: '2.0', isLatest: false },
      { version: '3.1', isLatest: true },
    ],
  },
  { id: 'custom', name: 'Custom', path: 'docs/custom', versions: [{ version: 'current', isLatest: true, customRoutePath: 'docs/custom/current' }] },
  { id: 'old', name: 'Old', path: 'docs/old', hideFromNavbar: true, versions: [{ version: 'current', isLatest: true }] },
  { id: 'pinned', name: 'Pinned', path: 'docs/pinned', defaultVersion: '1.0', versions: [{ version: '1.0' }, { version: '2.0', isLatest: true }] },
  { id: 'broken', name: 'Broken', path: 'docs/broken', defaultVersion: '9.9', versions: [{ version: '1.0', isLatest: true }] },
  { id: 'beta', name: 'Beta', path: 'docs/beta', noIndex: true, versions: [{ version: 'current', isLatest: true }] },
];

test('latestRoute uses the latest version, converting dots to underscores', () => {
  assert.equal(latestRoute(products[1]), '/docs/alpha/3_1');
  assert.equal(latestRoute(products[0]), '/docs/zeta');
  assert.equal(latestRoute(products[2]), '/docs/custom/current');
});

test('defaultVersion wins over isLatest, and a bad defaultVersion is skipped, not thrown', () => {
  assert.equal(latestRoute(products.find((p) => p.id === 'pinned')), '/docs/pinned/1_0');
  assert.equal(latestRoute(products.find((p) => p.id === 'broken')), null);
});

test('llms.txt lists products alphabetically, omits noIndex, and links the KB', () => {
  const text = buildLlmsTxt('https://docs.netwrix.com', products);
  assert.ok(text.startsWith('# Netwrix Documentation\n\n> '));
  assert.ok(text.includes('- [Alpha](https://docs.netwrix.com/docs/alpha/3_1): Multi-version product\n'));
  assert.ok(text.includes('- [Custom](https://docs.netwrix.com/docs/custom/current)\n'));
  assert.ok(text.indexOf('[Alpha]') < text.indexOf('[Zeta]'));
  assert.ok(!text.includes('Beta'));
  assert.ok(!text.includes('[Old]'));
  assert.ok(!text.includes('[Broken]'));
  assert.ok(text.includes('## Optional\n\n- [Knowledge Base](https://docs.netwrix.com/docs/kb/)'));
});
