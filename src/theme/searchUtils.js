import {PRODUCTS, versionToUrl} from '../config/products';

// product name -> (version -> rank). Rank 0 = newest: every product's versions[]
// is ordered newest-first (verified: versions[0] is the unique isLatest for all
// 27 products). Config order is authoritative — digit parsing is wrong here
// (passwordreset's latest 3.3 predates legacy 3.23 numerically).
const VERSION_RANKS = new Map(PRODUCTS.map(p => [
    p.name,
    new Map((p.versions || []).map((v, i) => [v.version, i])),
]));

// Unknown product/version (stale index entries, redirect stubs) ranks oldest.
function versionRank({product_name, product_version}) {
    return VERSION_RANKS.get(product_name)?.get(product_version) ?? Infinity;
}

// Versions only make sense scoped to specific products; empty/'__all__' selection → [].
// Insertion order = config order = newest-first per product.
export function getVersionsForProducts(selectedProducts) {
    const real = (selectedProducts || []).filter(p => p !== '__all__' && p !== '__none__');
    const versions = new Set();
    real.forEach(name => {
        PRODUCTS.find(p => p.name === name)?.versions?.forEach(v => versions.add(v.version));
    });
    return [...versions];
}

// A version-pinned KB source (kbSource override) publishes under its directory
// basename instead of the product id — both as the standalone route segment and as
// the copied landing page's slug (docs/kb/accessanalyzer-2601/index.md pins
// slug: accessanalyzer-2601 while the default source pins slug: accessanalyzer).
// basename -> product id, so every shape of one article normalizes to one key.
const PINNED_KB_SOURCES = new Map();
PRODUCTS.forEach(p => (p.versions || []).forEach(v => {
    if (v.kbSource) PINNED_KB_SOURCES.set(v.kbSource.split('/').pop(), p.id);
}));

// Same article across versions = same URL minus #fragment minus its version segment.
// Trailing slashes are normalized (the index holds both forms of one route), and
// standalone KB pages are rewritten to their versioned-copy shape so both merge.
// Pinned-source segments (path and landing slug) normalize to the product id.
function articleKey({url = '', product_version: v}) {
    const path = url.split('#')[0].replace(/\/+$/, '')
        .replace(/\/docs\/kb\/([^/]+)\//, (m, src) => `/docs/${PINNED_KB_SOURCES.get(src) || src}/kb/`)
        .replace(/\/kb\/([^/]+)$/, (m, slug) => `/kb/${PINNED_KB_SOURCES.get(slug) || slug}`);
    if (!v) return path;               // KB-plugin pages ('') / redirect stubs (absent)
    const seg = `/${versionToUrl(v)}`;
    if (path.endsWith(seg)) return path.slice(0, -seg.length); // version landing page
    return path.replace(`${seg}/`, '/');
}

// Per-page de-dupe: keep only the newest version of each article, in its original
// ranking position. Hits must carry {url, product_name, product_version}. Colliding
// keys always share a product (the key still contains the product path segment).
// A rank tie (two unknowns) keeps the first — i.e. the more relevant — hit.
export function dedupeToLatestVersion(hits) {
    const latest = new Map();
    for (const hit of hits) {
        const key = articleKey(hit);
        const prev = latest.get(key);
        if (!prev || versionRank(hit) < versionRank(prev)) latest.set(key, hit);
    }
    return hits.filter(hit => latest.get(articleKey(hit)) === hit);
}
