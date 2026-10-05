// Product helpers for the Claude build/preview skills. Wraps src/config/products.js.
import { pathToFileURL } from 'node:url';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');

// products.js is ESM in a typeless package; silence Node's reparse warning while importing it.
async function importConfig() {
  const emit = process.emitWarning;
  process.emitWarning = () => {};
  try {
    return await import(pathToFileURL(resolve(REPO_ROOT, 'src/config/products.js')).href);
  } finally {
    process.emitWarning = emit;
  }
}

export async function loadProducts() {
  return (await importConfig()).PRODUCTS;
}

/** Returns the product, 'kb', or throws with the list of valid ids. */
export async function validateProduct(id) {
  const products = await loadProducts();
  if (id === 'kb') return 'kb';
  const match = products.find((p) => p.id === id);
  if (!match) {
    throw new Error(`Unknown product "${id}". Valid ids: kb, ${products.map((p) => p.id).join(', ')}`);
  }
  return match;
}

/** Map changed repo-relative paths to the product ids they touch. */
export async function productsFromPaths(paths) {
  const products = await loadProducts();
  const ids = new Set();
  for (const p of paths) {
    const file = p.replace(/\\/g, '/');
    if (file.startsWith('docs/kb/')) ids.add('kb');
    for (const prod of products) {
      if (file.startsWith(`${prod.path}/`)) ids.add(prod.id);
    }
  }
  return [...ids].sort();
}

/** Landing URL path for a product's default version, e.g. /docs/pingcastle/4_0/ */
export async function landingPath(id) {
  if (!id || id === 'all') return '/';
  if (id === 'kb') return '/docs/kb/';
  const mod = await importConfig();
  const product = mod.PRODUCTS.find((p) => p.id === id);
  if (!product) return '/';
  const v = mod.getDefaultVersion(product);
  return `/${mod.generateRouteBasePath(product.path, v.version)}/`;
}
