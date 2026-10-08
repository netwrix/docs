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

/** Returns the product, or throws with the list of valid ids. */
export async function validateProduct(id) {
  const products = await loadProducts();
  if (id === 'kb') {
    throw new Error('"kb" is not a build scope: a kb-only build contains no pages. KB articles are copied into product folders at build time, so build the product the article belongs to (docs/kb/<product>/...) or "all".');
  }
  const match = products.find((p) => p.id === id);
  if (!match) {
    throw new Error(`Unknown product "${id}". Valid ids: ${products.map((p) => p.id).join(', ')}`);
  }
  return match;
}

/** Map changed repo-relative paths to the product ids they touch. */
export async function productsFromPaths(paths) {
  const products = await loadProducts();
  const ids = new Set();
  for (const p of paths) {
    const file = p.replace(/\\/g, '/');
    for (const prod of products) {
      // docs/<product>/... or a KB article at docs/kb/<product>/..., which builds into that product
      if (file.startsWith(`${prod.path}/`) || file.startsWith(`docs/kb/${prod.id}/`)) ids.add(prod.id);
    }
  }
  return [...ids].sort();
}

/** Landing URL path for a product's default version, e.g. /docs/pingcastle/4_0/ */
export async function landingPath(id) {
  if (!id || id === 'all') return '/';
  const mod = await importConfig();
  const product = mod.PRODUCTS.find((p) => p.id === id);
  if (!product) return '/';
  const v = mod.getDefaultVersion(product);
  return `/${v.customRoutePath || mod.generateRouteBasePath(product.path, v.version)}/`;
}
