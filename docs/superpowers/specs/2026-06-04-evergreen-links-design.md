# Evergreen Links Design

## Problem

External links to Netwrix documentation break whenever a product version is updated. A link like `/docs/auditor/10_7/overview/gettingstarted` stops being the "current" page once version 10.8 ships. There is no stable, version-less URL that always points to the latest version of a given page.

The existing `plugin-client-redirects` config handles product root URLs (`/docs/auditor` -> `/docs/auditor/10_8`) but not deep page links.

## Solution

Add a `createRedirects` callback to the existing `@docusaurus/plugin-client-redirects` configuration. For every page in the latest version of a multi-version product, this generates a version-less redirect alias.

**Example:** `/docs/auditor/overview/gettingstarted` redirects to `/docs/auditor/10_8/overview/gettingstarted`

## Scope

| Product type | Action |
|---|---|
| Multi-version, numbered latest (auditor 10.8, activitymonitor 10.0, etc.) | Generate evergreen redirects for all latest-version pages |
| Multi-version, `current` latest (identitymanager, passwordsecure) | Generate evergreen redirects (`/docs/identitymanager/X` -> `/docs/identitymanager/current/X`) |
| Single-version `current` (1secure, policypak, endpointprotector, etc.) | Skip - URLs are already version-less |
| Products with `hideFromNavbar` (recoveryforactivedirectory) | Still generate redirects - docs exist and should be linkable |

## Behavior

- **Redirect type:** Visible redirect via HTML `<meta http-equiv="refresh">` + JS `window.location.href`. The browser URL changes to the versioned path.
- **SEO:** Each redirect page includes a `<link rel="canonical">` pointing to the versioned URL. Search engines will index the versioned URL, not the redirect.
- **Search/hash forwarding:** The redirect plugin preserves query strings and hash fragments during redirect.

## Architecture

### Data flow

1. Docusaurus generates all route paths during build (e.g., `/docs/auditor/10_8/overview/gettingstarted`)
2. Docusaurus invokes the `createRedirects` callback for each path
3. The callback parses the path, identifies the product and version segment
4. It checks whether this version is the product's latest
5. If yes, it returns a version-less path as the redirect source (e.g., `/docs/auditor/overview/gettingstarted`)
6. The plugin writes a tiny HTML file at the version-less path that redirects to the versioned path

### Code changes

**`src/config/products.js`** - Add a new helper function:

```js
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

**`docusaurus.config.js`** - Add `createRedirects` to the existing `plugin-client-redirects` config:

```js
createRedirects(existingPath) {
  // For each versioned page in a latest-version product,
  // create a version-less alias that redirects to it.
  for (const [productId, latestUrlVersion] of Object.entries(latestVersionMap)) {
    const versionedPrefix = `/docs/${productId}/${latestUrlVersion}/`;
    if (existingPath.startsWith(versionedPrefix)) {
      const rest = existingPath.slice(versionedPrefix.length);
      return [`/docs/${productId}/${rest}`];
    }
  }
  return undefined;
},
```

The new helper computes `latestVersionMap` once at config load time.

### Conflict avoidance

- The existing `redirects` array handles product root paths (`/docs/auditor` -> `/docs/auditor/10_8`).
- The `createRedirects` callback handles deep pages (`/docs/auditor/overview/X` -> `/docs/auditor/10_8/overview/X`).
- These don't conflict: `createRedirects` only fires for paths that contain a version segment, and the explicit `redirects` entries already cover root paths.

## Build impact

- **Extra files:** ~4,768 HTML redirect files (one per latest-version page across all multi-version products)
- **Size:** ~1.6 MB total (each file is ~350 bytes)
- **Build time:** Negligible - the redirect plugin writes files as a post-build step, taking 1-3 seconds
- **Deploy:** Negligible additional upload to Azure Blob Storage

## Testing

1. Run `npm run build` and verify it completes without errors
2. Check that redirect HTML files exist in the build output at version-less paths (e.g., `build/docs/auditor/overview/gettingstarted/index.html`)
3. Verify the redirect target in the generated HTML points to the correct versioned URL
4. Run `npm run serve` and test in a browser:
   - `/docs/auditor/overview/gettingstarted` redirects to `/docs/auditor/10_8/overview/gettingstarted`
   - `/docs/auditor/10_7/overview/gettingstarted` still works (no redirect, serves the 10.7 page directly)
   - `/docs/1secure/overview` works as before (no redirect, single-version product)
   - `/docs/identitymanager/overview` redirects to `/docs/identitymanager/current/overview`
5. Verify no broken links in the build output (the build throws on broken links)
