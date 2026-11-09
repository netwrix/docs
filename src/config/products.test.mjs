import assert from 'node:assert/strict';
import { test } from 'node:test';

// products.js reads APP_EXTERNAL_URL when it loads, so each case imports a fresh copy.
async function loadProducts(siteUrl, tag) {
  const previous = process.env.APP_EXTERNAL_URL;
  if (siteUrl === undefined) delete process.env.APP_EXTERNAL_URL;
  else process.env.APP_EXTERNAL_URL = siteUrl;
  try {
    return (await import(`./products.js?${tag}`)).PRODUCTS;
  } finally {
    if (previous === undefined) delete process.env.APP_EXTERNAL_URL;
    else process.env.APP_EXTERNAL_URL = previous;
  }
}

const ids = (products) => products.map((product) => product.id);

test('devOnly products are left out of the production build', async () => {
  const products = await loadProducts('https://docs.netwrix.com', 'production');
  assert.equal(ids(products).includes('1securebeta'), false);
  assert.equal(ids(products).includes('1secure'), true);
});

test('devOnly products are built on docs-dev and locally', async () => {
  for (const [url, tag] of [['https://docs-dev.netwrix.com', 'dev'], ['http://localhost:4500', 'local'], [undefined, 'unset']]) {
    const products = await loadProducts(url, tag);
    assert.equal(ids(products).includes('1securebeta'), true, String(url));
  }
});
