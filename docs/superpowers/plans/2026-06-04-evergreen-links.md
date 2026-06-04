# Evergreen Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add version-less redirect URLs that always point to the latest version of each product page, so external links like `/docs/auditor/overview/gettingstarted` redirect to `/docs/auditor/10_8/overview/gettingstarted`.

**Architecture:** A `getLatestVersionUrlMap()` helper in `products.js` builds a lookup from product ID to latest URL-version string. A `createRedirects` callback in the existing `plugin-client-redirects` config uses this map to generate version-less redirect aliases for every page in the latest version of multi-version products. Single-version `current` products are skipped (already version-less).

**Tech Stack:** Docusaurus 3.8.1, `@docusaurus/plugin-client-redirects` 3.10.1, Node.js ESM

**Spec:** `docs/superpowers/specs/2026-06-04-evergreen-links-design.md`

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/config/products.js` | Modify (add function after line 780) | New `getLatestVersionUrlMap()` helper |
| `docusaurus.config.js` | Modify (lines 10, 133-156) | Import new helper, add `createRedirects` callback to redirect plugin config |

---

### Task 1: Add `getLatestVersionUrlMap` helper to products.js

**Files:**
- Modify: `src/config/products.js:780` (insert after `getDefaultVersion` function)

- [ ] **Step 1: Add the `getLatestVersionUrlMap` function**

Open `src/config/products.js`. After the closing brace of `getDefaultVersion` (line 780), insert this function:

```js
/**
 * Build a map of product ID → latest URL-version string.
 * Used by the evergreen-links redirect config to generate version-less aliases.
 * Skips single-version 'current' products (their URLs are already version-less).
 */
export function getLatestVersionUrlMap() {
  const map = {};
  for (const product of PRODUCTS) {
    if (product.versions.length === 1 && product.versions[0].version === 'current') continue;
    const latest = getDefaultVersion(product);
    if (!latest) continue;
    const urlVersion = latest.customRoutePath
      ? latest.customRoutePath.split('/').pop()
      : versionToUrl(latest.version);
    map[product.id] = urlVersion;
  }
  return map;
}
```

This handles three cases:
- **Numbered versions** (e.g., auditor 10.8): `versionToUrl('10.8')` → `'10_8'`
- **`current` with customRoutePath** (e.g., identitymanager): extracts `'current'` from `'docs/identitymanager/current'`
- **Single-version `current` products** (e.g., 1secure): skipped by the early `continue`

- [ ] **Step 2: Verify the file parses correctly**

Run:
```bash
node -e "import { getLatestVersionUrlMap } from './src/config/products.js'; const m = getLatestVersionUrlMap(); console.log(JSON.stringify(m, null, 2));"
```

Expected output: A JSON object mapping product IDs to their latest URL-version strings. Verify these key entries:
- `"auditor": "10_8"` (numbered version, dots to underscores)
- `"identitymanager": "current"` (customRoutePath product)
- `"passwordsecure": "current"` (customRoutePath product)
- `"accessanalyzer": "2601"` (no dots, stays as-is)
- No entry for `1secure`, `policypak`, `endpointprotector`, or other single-version `current` products

- [ ] **Step 3: Commit**

```bash
git add src/config/products.js
git commit -m "feat: add getLatestVersionUrlMap helper for evergreen links"
```

---

### Task 2: Add `createRedirects` callback to docusaurus.config.js

**Files:**
- Modify: `docusaurus.config.js:10` (update import)
- Modify: `docusaurus.config.js:133-156` (add `createRedirects` to redirect plugin config)

- [ ] **Step 1: Update the import to include `getLatestVersionUrlMap`**

In `docusaurus.config.js`, line 10, change:

```js
import { generateDocusaurusPlugins, generateNavbarDropdowns, PRODUCTS, versionToUrl, getDefaultVersion } from './src/config/products.js';
```

to:

```js
import { generateDocusaurusPlugins, generateNavbarDropdowns, PRODUCTS, versionToUrl, getDefaultVersion, getLatestVersionUrlMap } from './src/config/products.js';
```

- [ ] **Step 2: Compute the latest version map at config load time**

After line 32 (the closing of the `apiSidebars` loop), add:

```js
const latestVersionMap = getLatestVersionUrlMap();
```

This runs once when `docusaurus.config.js` is loaded, not per-redirect.

- [ ] **Step 3: Add `createRedirects` to the plugin-client-redirects config**

In the `plugin-client-redirects` config block (lines 134-156), add the `createRedirects` function after the `redirects` array. The entire plugin block should become:

```js
    // Client-side redirects - redirect base product URLs to latest version
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: PRODUCTS.filter(product => {
          // Only create redirects for products with multiple versions (not just 'current')
          return !(product.versions.length === 1 && product.versions[0].version === 'current');
        }).map(product => {
          const latestVersion = getDefaultVersion(product);
          const latestVersionUrl = versionToUrl(latestVersion.version);

          // Use explicit customRoutePath if specified (e.g., for multi-versioned products with 'current')
          // Otherwise use standard path generation
          const targetPath = latestVersion.customRoutePath
            ? latestVersion.customRoutePath
            : `${product.path}/${latestVersionUrl}`;

          return {
            from: `/${product.path}`,
            to: `/${targetPath}`,
          };
        }),
        createRedirects(existingPath) {
          for (const [productId, latestUrlVersion] of Object.entries(latestVersionMap)) {
            const versionedPrefix = `/docs/${productId}/${latestUrlVersion}/`;
            if (existingPath.startsWith(versionedPrefix)) {
              const rest = existingPath.slice(versionedPrefix.length);
              return [`/docs/${productId}/${rest}`];
            }
          }
          return undefined;
        },
      },
    ],
```

- [ ] **Step 4: Verify the config loads without errors**

Run:
```bash
node -e "import('./docusaurus.config.js').then(m => console.log('Config loaded OK. Redirect plugin found:', m.default.plugins.some(p => Array.isArray(p) && p[0] === '@docusaurus/plugin-client-redirects')))"
```

Expected: `Config loaded OK. Redirect plugin found: true`

- [ ] **Step 5: Commit**

```bash
git add docusaurus.config.js
git commit -m "feat: add createRedirects for evergreen version-less URLs"
```

---

### Task 3: Build and validate redirect output

**Files:**
- None modified — validation only

- [ ] **Step 1: Run a single-product build to validate quickly**

A full build takes a long time. Use the `DOCS_PRODUCT` env var to build only auditor (the largest multi-version product):

```bash
DOCS_PRODUCT=auditor npm run build 2>&1 | tail -20
```

Expected: Build completes without errors. Look for the plugin-client-redirects output in the log — it should mention creating redirect files.

- [ ] **Step 2: Verify redirect HTML files were generated**

Check that a version-less redirect file exists for a known auditor page:

```bash
cat build/docs/auditor/overview/gettingstarted/index.html
```

Expected: A small HTML file containing:
- `<meta http-equiv="refresh" content="0; url=/docs/auditor/10_8/overview/gettingstarted">`
- `window.location.href = '/docs/auditor/10_8/overview/gettingstarted'`

- [ ] **Step 3: Verify old versions do NOT get redirect files**

```bash
ls build/docs/auditor/10_7/overview/gettingstarted/index.html 2>/dev/null && echo "EXISTS (expected - this is the real page)"
ls build/docs/auditor/10_6/overview/gettingstarted/index.html 2>/dev/null && echo "EXISTS (expected - this is the real page)"
```

These should exist as real doc pages, NOT redirect pages. Verify by checking their content is a full HTML page (not a redirect stub):

```bash
head -5 build/docs/auditor/10_7/overview/gettingstarted/index.html
```

Expected: A full `<!DOCTYPE html>` page with Docusaurus layout, not a redirect.

- [ ] **Step 4: Count the redirect files generated for auditor**

```bash
find build/docs/auditor -name "index.html" -exec grep -l 'http-equiv="refresh"' {} \; | wc -l
```

Expected: Approximately 1,160 files (matching the latest version page count).

- [ ] **Step 5: Run a full build**

```bash
npm run build 2>&1 | tail -30
```

Expected: Build completes without errors. This validates that no redirect conflicts with an existing page and that the `onBrokenLinks: 'throw'` check passes.

- [ ] **Step 6: Spot-check redirect files for other products**

```bash
# identitymanager (customRoutePath product with 'current' as latest)
cat build/docs/identitymanager/overview/index.html 2>/dev/null | head -5

# accessanalyzer (version '2601', no dots)
find build/docs/accessanalyzer -maxdepth 2 -name "index.html" -path "*/accessanalyzer/*/index.html" -exec grep -l 'http-equiv="refresh"' {} \; | head -3

# Verify 1secure has NO redirect files (single-version current product)
find build/docs/1secure -name "index.html" -exec grep -l 'http-equiv="refresh"' {} \; | wc -l
```

Expected:
- identitymanager: redirect page pointing to `/docs/identitymanager/current/overview`
- accessanalyzer: redirect files exist under `/docs/accessanalyzer/` pointing to `/docs/accessanalyzer/2601/...`
- 1secure: 0 redirect files

- [ ] **Step 7: Commit (no code changes, but clean build confirms correctness)**

No commit needed for this task — it's validation only. If the build passes, the implementation is complete.
