# Build Optimization Design

**Date:** 2026-03-03
**Branch:** build-optimization
**Status:** Approved

## Problem

The CI build takes 35–40 minutes on every run, including small documentation-only PRs. The bottleneck is Docusaurus static site generation across 27+ products producing 76,952 HTML files (1.5 GB output). Caches are configured but do not reduce SSG time. The daily `dev` → `main` auto-sync also runs a full 32-minute rebuild of a site that was already built minutes earlier.

## Timing breakdown (observed)

| Step | Time |
|---|---|
| `npm ci` | ~16 seconds |
| KB copy script | ~1 second |
| Docusaurus build (SSG + bundling) | ~32 minutes |
| Artifact upload | ~90 seconds |

## Solution: Approach B — Selective PR builds + commit SHA build reuse

Two independent optimizations delivered together, plus quick fixes.

---

## Component 1: Selective PR builds

### Goal

On PRs, build only the products whose docs files changed. Fall back to a full build only when shared/config files change.

### Change detection logic

Run against the PR base ref:

```bash
git diff origin/${{ github.base_ref }}...HEAD --name-only
```

Classify each changed file:

| File pattern | Action |
|---|---|
| `docs/kb/**` | Full build (KB articles are distributed to all products) |
| `docusaurus.config.js` | Full build |
| `src/**` | Full build |
| `sidebars/**` | Full build |
| `scripts/**` | Full build |
| `static/**` | Full build |
| `package.json`, `package-lock.json` | Full build |
| `docs/<product-id>/**` | Selective build for that product only |
| Everything else (`.vale`, root markdown, etc.) | Skip build |

If a PR touches both `docs/auditor/` and `docs/threatmanager/`, two selective builds run sequentially.

Frontmatter changes (`title`, `description`, `sidebar_position`) in a product's markdown file are product-specific changes — they trigger a selective build for that product only, not a full build.

### Build execution (PRs only)

- **Full build required:** `npm run ci` (same as today)
- **Selective:** `DOCS_PRODUCT=<id> npm run ci` for each changed product, run sequentially
- **No docs/config changes:** skip the build step entirely

`DOCS_PRODUCT` already exists in `src/config/products.js` and filters which plugins Docusaurus loads.

### Fallback

If the base ref comparison fails (e.g., first commit on a new branch), fall back to a full build.

### Expected impact

| PR type | Before | After |
|---|---|---|
| Changes 1–2 products | 32 min | 2–6 min |
| Changes config/theme/KB | 32 min | 32 min |
| No docs/config changes | 32 min | ~1 min |

---

## Component 2: Commit SHA build reuse

### Goal

The daily `dev` → `main` auto-sync merges the exact same commit that was already built when it landed on `dev`. Avoid rebuilding it.

### Mechanism

**On every successful full build** (push to `dev` or `main`), upload the `build/` artifact under two names:
- `build-output` — existing, consumed by the `deploy` job
- `build-sha-<GITHUB_SHA>` — new, retained for reuse, expiry set to 3 days

**At the start of the build job** (push to `main` only):
1. Look up whether an artifact named `build-sha-<GITHUB_SHA>` already exists in the repository using the GitHub API
2. If found: download it, set `SKIP_BUILD=true`
3. If not found: proceed with full build as normal

The `install and build` step is skipped when `SKIP_BUILD=true`. The `deploy` job is unchanged — it always deploys whatever artifact is present.

### Expected impact

| Scenario | Before | After |
|---|---|---|
| Push to `dev` | 32 min | 32 min (builds normally) |
| `main` auto-sync (same commit as dev) | 32 min | ~2 min |
| `main` pushed directly (different commit) | 32 min | 32 min |

---

## Component 3: Quick fixes

### 3a. Remove dead cache-hit code

The current workflow contains:

```yaml
if [[ "${{ steps.cache-build.outputs.cache-hit }}" == "true" ]]; then
  echo "Build cache found, checking if rebuild needed..."
else
  echo "No build cache found, performing full build..."
fi
```

This prints a message but never skips the build. Remove it.

### 3b. Cache `node_modules/` directly

Currently only the npm registry cache (`~/.npm`) is cached. `npm ci` still re-installs to `node_modules/` on every run (~16 seconds). Add a cache for `node_modules/` keyed on `package-lock.json` hash, and skip `npm ci` on exact cache hits.

### 3c. Fix `.docusaurus` cache key

The current key hashes all `docs/**` files, causing a cache miss on every PR. The `.docusaurus` directory is Docusaurus's internal metadata cache; it should be keyed on `docusaurus.config.js` and `src/**` only.

---

## What is not in scope

- Parallel product matrix builds (Approach C) — retained as a future option if deploy build times remain a bottleneck after this work
- Changes to `docusaurus.config.js`, `src/`, or any doc content
- Algolia search index changes (Algolia crawls the deployed site independently)

## Files to change

- `.github/workflows/build-and-deploy.yml` — all changes live here
