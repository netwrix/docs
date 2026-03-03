# Build Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce CI build times for PRs from 32 minutes to 2–6 minutes (selective builds) and eliminate the redundant 32-minute rebuild on the daily `dev`→`main` auto-sync.

**Architecture:** Three layered changes to `.github/workflows/build-and-deploy.yml`: (1) quick fixes removing dead code and improving caches, (2) a change-detection step that classifies each PR as full/selective/skip and drives conditional `DOCS_PRODUCT`-scoped builds, (3) a SHA-tagged artifact that lets `main` reuse the `dev` build when they share a commit.

**Tech Stack:** GitHub Actions, Bash, `gh` CLI (pre-installed on runners), `actions/cache@v4`, `actions/upload-artifact@v4`

---

## Context

All changes are in one file: `.github/workflows/build-and-deploy.yml`

The `build` job currently:
- Restores three caches (npm registry, `.docusaurus`, `node_modules/.cache`)
- Runs `npm ci` (16 s) then `npm run ci` (32 min) unconditionally
- Uploads the built artifact as `build-output`

`DOCS_PRODUCT` is already wired into `src/config/products.js` — setting it to a product ID (e.g. `auditor`) causes Docusaurus to load only that product's plugin, making a partial build work out of the box.

Product IDs map to `docs/<id>/` paths: `1secure`, `accessanalyzer`, `accessinformationcenter`, `activitymonitor`, `auditor`, `changetracker`, `customer`, `dataclassification`, `directorymanager`, `endpointpolicymanager`, `endpointprotector`, `identitymanager`, `identityrecovery`, `kb`, `partner`, `passwordpolicyenforcer`, `passwordreset`, `passwordsecure`, `pingcastle`, `platgovnetsuite`, `platgovnetsuiteflashlight`, `platgovsalesforce`, `platgovsalesforceflashlight`, `privilegesecure`, `privilegesecurediscovery`, `recoveryforactivedirectory`, `threatmanager`, `threatprevention`

---

## Task 1: Quick fixes — dead code, cache key, node_modules cache

**File:** `.github/workflows/build-and-deploy.yml`

This task makes three independent edits and commits them together.

### Step 1: Remove dead code

Delete lines 94–98 (the cache-hit check that prints a message but never skips anything):

```yaml
            if [[ "${{ steps.cache-build.outputs.cache-hit }}" == "true" ]]; then
              echo "Build cache found, checking if rebuild needed..."
            else
              echo "No build cache found, performing full build..."
            fi
```

The `Install dependencies and build site` step becomes simply:

```yaml
        - name: Install dependencies and build site
          run: |
            npm ci
            npm run ci
          env:
            NODE_OPTIONS: "--max-old-space-size=16384"
            NODE_ENV: ${{ needs.determine-environment.outputs.environment }}
```

### Step 2: Fix the `.docusaurus` cache key

The current key hashes ALL of `docs/**` — any doc change invalidates it, defeating its purpose. The `.docusaurus` directory is Docusaurus's internal route/metadata cache; it should only be invalidated when config or source code changes.

Replace the `Cache Docusaurus build` step's `key` (line 78):

Old:
```yaml
            key: v2-${{ runner.os }}-docusaurus-${{ hashFiles('src/**', 'docs/**', 'blog/**', 'docusaurus.config.js', 'sidebars.js') }}
```

New:
```yaml
            key: v3-${{ runner.os }}-docusaurus-${{ hashFiles('src/**', 'docusaurus.config.js', 'sidebars/**') }}
```

Note: bump the version prefix from `v2` to `v3` to force a cold start with the corrected key. Also update `restore-keys`:

```yaml
            restore-keys: |
              v3-${{ runner.os }}-docusaurus-
```

### Step 3: Add a `node_modules/` cache step

After the existing `Cache webpack` step, insert:

```yaml
        - name: Cache node_modules
          id: node-modules-cache
          uses: actions/cache@v4
          with:
            path: node_modules
            key: v1-${{ runner.os }}-node_modules-${{ hashFiles('package-lock.json') }}
```

No `restore-keys` — partial restoration of `node_modules` is unsafe; only exact hits are usable.

Then modify the `Install dependencies and build site` step to skip `npm ci` on a hit:

```yaml
        - name: Install dependencies and build site
          run: |
            if [[ "${{ steps.node-modules-cache.outputs.cache-hit }}" != "true" ]]; then
              npm ci
            else
              echo "node_modules cache hit — skipping npm ci"
            fi
            npm run ci
          env:
            NODE_OPTIONS: "--max-old-space-size=16384"
            NODE_ENV: ${{ needs.determine-environment.outputs.environment }}
```

### Step 4: Validate and commit

Push the branch and confirm the next CI run shows "node_modules cache hit — skipping npm ci" for the second build on the same packages, and that the `.docusaurus` cache key is now shorter (no `docs/**` hash component).

```bash
git add .github/workflows/build-and-deploy.yml
git commit -m "ci: quick fixes — remove dead code, fix docusaurus cache key, add node_modules cache"
```

---

## Task 2: Add job permissions and GitHub API env

**File:** `.github/workflows/build-and-deploy.yml`

Tasks 3 and 5 need the `gh` CLI to call the GitHub API. This requires two additions to the `build` job.

### Step 1: Expand the permissions block

Current (line 47–48):
```yaml
      permissions:
        contents: read
```

Replace with:
```yaml
      permissions:
        contents: read
        actions: read       # needed to list/download artifacts via API
        pull-requests: read # needed to list PR changed files via API
```

### Step 2: Add GH_TOKEN to the job-level env

Current job-level env (lines 49–50):
```yaml
      env:
        APP_EXTERNAL_URL: ${{ secrets.APP_EXTERNAL_URL || vars.APP_EXTERNAL_URL }}
```

Replace with:
```yaml
      env:
        APP_EXTERNAL_URL: ${{ secrets.APP_EXTERNAL_URL || vars.APP_EXTERNAL_URL }}
        GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

`GH_TOKEN` is what the `gh` CLI reads automatically — no explicit `--auth` flag needed in any step.

### Step 3: Commit

```bash
git add .github/workflows/build-and-deploy.yml
git commit -m "ci: add actions/pull-requests read permissions and GH_TOKEN for API access"
```

---

## Task 3: Detect changed products (PR builds only)

**File:** `.github/workflows/build-and-deploy.yml`

Add a new step **immediately after** `Set up Node.js` and **before** all cache steps. It runs on every trigger but only does meaningful work on PRs.

### Step 1: Insert the detect-changes step

```yaml
        - name: Detect changed products
          id: detect-changes
          run: |
            # Non-PR events always need a full build
            if [[ "${{ github.event_name }}" != "pull_request" ]]; then
              echo "build_mode=full" >> $GITHUB_OUTPUT
              echo "changed_products=" >> $GITHUB_OUTPUT
              echo "Non-PR event: full build"
              exit 0
            fi

            echo "PR #${{ github.event.pull_request.number }}: analysing changed files..."

            # Use the GitHub API — more reliable than git diff on shallow clones
            CHANGED_FILES=$(gh api \
              "repos/${{ github.repository }}/pulls/${{ github.event.pull_request.number }}/files" \
              --paginate \
              --jq '.[].filename' 2>/dev/null) || CHANGED_FILES="API_FAILED"

            if [[ "$CHANGED_FILES" == "API_FAILED" || -z "$CHANGED_FILES" ]]; then
              echo "Could not determine changed files — falling back to full build"
              echo "build_mode=full" >> $GITHUB_OUTPUT
              echo "changed_products=" >> $GITHUB_OUTPUT
              exit 0
            fi

            echo "Changed files:"
            echo "$CHANGED_FILES"

            # Any of these patterns → full build required
            FULL_BUILD_TRIGGERS=(
              "^docs/kb/"
              "^docusaurus\.config\.js$"
              "^src/"
              "^sidebars/"
              "^scripts/"
              "^static/"
              "^package\.json$"
              "^package-lock\.json$"
            )

            for pattern in "${FULL_BUILD_TRIGGERS[@]}"; do
              if echo "$CHANGED_FILES" | grep -qE "$pattern"; then
                echo "Full-build trigger matched: $pattern"
                echo "build_mode=full" >> $GITHUB_OUTPUT
                echo "changed_products=" >> $GITHUB_OUTPUT
                exit 0
              fi
            done

            # Extract product IDs from docs/<product-id>/... paths
            CHANGED_PRODUCTS=$(echo "$CHANGED_FILES" \
              | grep -oE '^docs/([^/]+)/' \
              | sed 's|^docs/||; s|/$||' \
              | sort -u \
              | tr '\n' ',' \
              | sed 's/,$//')

            if [[ -z "$CHANGED_PRODUCTS" ]]; then
              echo "No docs or config changes — skipping build"
              echo "build_mode=skip" >> $GITHUB_OUTPUT
              echo "changed_products=" >> $GITHUB_OUTPUT
            else
              echo "Selective build for: $CHANGED_PRODUCTS"
              echo "build_mode=selective" >> $GITHUB_OUTPUT
              echo "changed_products=$CHANGED_PRODUCTS" >> $GITHUB_OUTPUT
            fi
```

### Step 2: Verify the step outputs look right

Push a test PR that changes a single product's file. In the Actions log for the `Detect changed products` step you should see:

```
Selective build for: auditor
```

And `steps.detect-changes.outputs.build_mode` should equal `selective`.

For a PR that touches `docusaurus.config.js`, the log should show:

```
Full-build trigger matched: ^docusaurus\.config\.js$
```

### Step 3: Commit

```bash
git add .github/workflows/build-and-deploy.yml
git commit -m "ci: add detect-changes step for selective PR builds"
```

---

## Task 4: Implement conditional build execution

**File:** `.github/workflows/build-and-deploy.yml`

Now wire the `detect-changes` outputs into the build step.

### Step 1: Replace the `Install dependencies and build site` step

The full replacement for that step (after the Task 1 changes to `npm ci`):

```yaml
        - name: Install dependencies and build site
          id: build-site
          run: |
            BUILD_MODE="${{ steps.detect-changes.outputs.build_mode }}"
            CHANGED_PRODUCTS="${{ steps.detect-changes.outputs.changed_products }}"

            echo "Build mode:      $BUILD_MODE"
            echo "Changed products: $CHANGED_PRODUCTS"

            # Install node dependencies (skip if node_modules cache hit)
            if [[ "${{ steps.node-modules-cache.outputs.cache-hit }}" != "true" ]]; then
              npm ci
            else
              echo "node_modules cache hit — skipping npm ci"
            fi

            if [[ "$BUILD_MODE" == "skip" ]]; then
              echo "No docs or config changes detected. Skipping Docusaurus build."
              echo "built=false" >> $GITHUB_OUTPUT
              exit 0
            fi

            # Run the KB copy pre-build step manually (normally run by npm's preci hook,
            # but we call npx docusaurus directly for selective builds)
            node scripts/copy-kb-to-versions.mjs

            if [[ "$BUILD_MODE" == "full" ]]; then
              echo "Running full build..."
              NODE_OPTIONS="--max-old-space-size=16384" npx docusaurus build
            elif [[ "$BUILD_MODE" == "selective" ]]; then
              IFS=',' read -ra PRODUCTS <<< "$CHANGED_PRODUCTS"
              for PRODUCT in "${PRODUCTS[@]}"; do
                echo "Building product: $PRODUCT"
                DOCS_PRODUCT="$PRODUCT" NODE_OPTIONS="--max-old-space-size=16384" npx docusaurus build
              done
            fi

            echo "built=true" >> $GITHUB_OUTPUT
          env:
            NODE_ENV: ${{ needs.determine-environment.outputs.environment }}
```

Note: `NODE_OPTIONS` moves inline (as an env var prefix on the command) rather than a step-level env, because the `skip` path exits early and we don't want to waste 16 GB heap allocation on a no-op.

### Step 2: Make the artifact upload conditional

The `Upload artifact for deployment` step must not run when the build was skipped:

```yaml
        - name: Upload artifact for deployment
          if: steps.build-site.outputs.built == 'true'
          uses: actions/upload-artifact@v4
          with:
            name: build-output
            path: build/
```

### Step 3: Test a selective PR build

Push a PR that modifies a single file in `docs/auditor/`. Expected:
- `Detect changed products` → `build_mode=selective`, `changed_products=auditor`
- `Install dependencies and build site` → runs `DOCS_PRODUCT=auditor npx docusaurus build`
- Total build time: 2–6 minutes instead of 32

### Step 4: Test a skip-build PR

Push a PR that only changes a `.vale` rule file. Expected:
- `Detect changed products` → `build_mode=skip`
- `Install dependencies and build site` → exits early after "Skipping Docusaurus build"
- `Upload artifact for deployment` → skipped (condition is false)

### Step 5: Commit

```bash
git add .github/workflows/build-and-deploy.yml
git commit -m "ci: implement selective and skip build modes based on changed products"
```

---

## Task 5: SHA artifact reuse — save the artifact

**File:** `.github/workflows/build-and-deploy.yml`

After each successful **full** build on `dev` or `main`, upload a second artifact tagged with the commit SHA so the next workflow run for that SHA (i.e. the `main` auto-sync) can skip rebuilding.

### Step 1: Add the SHA artifact upload step

Insert immediately after the existing `Upload artifact for deployment` step:

```yaml
        - name: Upload SHA-tagged build artifact for reuse
          if: github.event_name != 'pull_request' && steps.build-site.outputs.built == 'true' && steps.detect-changes.outputs.build_mode == 'full'
          uses: actions/upload-artifact@v4
          with:
            name: build-sha-${{ github.sha }}
            path: build/
            retention-days: 3
```

Three conditions must all be true:
- Not a PR (PRs never deploy — no point caching their builds)
- The build actually ran (not skipped)
- It was a full build (partial selective builds are not suitable for reuse as the complete site)

`retention-days: 3` keeps artifact storage tidy — the auto-sync always runs within hours.

### Step 2: Verify on a dev push

After pushing to `dev`, confirm two artifacts appear in the workflow run: `build-output` and `build-sha-<commit-sha>`. Both should contain the same 76,952 files.

### Step 3: Commit

```bash
git add .github/workflows/build-and-deploy.yml
git commit -m "ci: upload SHA-tagged build artifact after full builds for cross-run reuse"
```

---

## Task 6: SHA artifact reuse — skip rebuild on main

**File:** `.github/workflows/build-and-deploy.yml`

Add a step **before** the cache restoration steps that checks for an existing SHA artifact. If one is found, the `build/` directory is populated from it and the entire Docusaurus build is skipped.

### Step 1: Insert the check-sha-artifact step

Place this as the first step inside the `build` job, immediately after `Check out source code`:

```yaml
        - name: Check for reusable SHA build artifact
          id: check-sha-artifact
          if: github.ref == 'refs/heads/main' && github.event_name == 'push'
          run: |
            echo "Looking for build-sha-${{ github.sha }}..."

            ARTIFACT_ID=$(gh api \
              "repos/${{ github.repository }}/actions/artifacts?name=build-sha-${{ github.sha }}&per_page=1" \
              --jq '.artifacts[0] | select(.expired == false) | .id' 2>/dev/null || true)

            if [[ -z "$ARTIFACT_ID" || "$ARTIFACT_ID" == "null" ]]; then
              echo "No reusable artifact found — will run full build"
              echo "skip_build=false" >> $GITHUB_OUTPUT
              exit 0
            fi

            echo "Found artifact ID $ARTIFACT_ID — downloading to skip rebuild"

            # Get the signed download URL from the redirect
            DOWNLOAD_URL=$(curl -sI \
              -H "Authorization: Bearer ${{ secrets.GITHUB_TOKEN }}" \
              "https://api.github.com/repos/${{ github.repository }}/actions/artifacts/$ARTIFACT_ID/zip" \
              | grep -i "^location:" | tr -d '\r' | cut -d' ' -f2)

            if [[ -z "$DOWNLOAD_URL" ]]; then
              echo "Could not get download URL — falling back to full build"
              echo "skip_build=false" >> $GITHUB_OUTPUT
              exit 0
            fi

            curl -fsSL "$DOWNLOAD_URL" -o /tmp/build-sha.zip
            mkdir -p build
            unzip -q /tmp/build-sha.zip -d build/
            echo "Reused build artifact from dev run — skipping rebuild"
            echo "skip_build=true" >> $GITHUB_OUTPUT
```

### Step 2: Make the build step respect skip_build

In the `Install dependencies and build site` step, add an early-exit check at the top of the script (before the `BUILD_MODE` check):

```bash
            # If a reusable SHA artifact was found and extracted, skip the build entirely
            if [[ "${{ steps.check-sha-artifact.outputs.skip_build }}" == "true" ]]; then
              echo "Build skipped — reusing artifact from SHA ${{ github.sha }}"
              echo "built=true" >> $GITHUB_OUTPUT
              exit 0
            fi
```

This outputs `built=true` so the existing `Upload artifact for deployment` and subsequent deploy steps run normally with the already-populated `build/` directory.

### Step 3: Suppress unnecessary SHA artifact upload on main reuse

The SHA artifact upload step (from Task 5) should not re-upload when the build was skipped. Update its condition:

```yaml
          if: github.event_name != 'pull_request' && steps.build-site.outputs.built == 'true' && steps.detect-changes.outputs.build_mode == 'full' && steps.check-sha-artifact.outputs.skip_build != 'true'
```

### Step 4: Test the full auto-sync scenario

1. Push a commit to `dev` — confirm two artifacts upload: `build-output` and `build-sha-<sha>`
2. Trigger a `main` push with the same commit SHA (or wait for the auto-sync)
3. In the `main` run, the `Check for reusable SHA build artifact` step should log:

   ```
   Found artifact ID 12345678 — downloading to skip rebuild
   Reused build artifact from dev run — skipping rebuild
   ```

4. Total `main` build time should drop from ~32 minutes to ~2–3 minutes (download + deploy only)

### Step 5: Commit

```bash
git add .github/workflows/build-and-deploy.yml
git commit -m "ci: reuse SHA-tagged artifact on main to skip redundant rebuild after dev sync"
```

---

## Final step: open PR

```bash
git push -u origin build-optimization
gh pr create \
  --title "ci: selective PR builds and SHA artifact reuse" \
  --base dev \
  --body "Implements build optimization plan from docs/plans/2026-03-03-build-optimization-design.md.

## Changes
- Remove dead cache-hit check code
- Fix .docusaurus cache key (no longer invalidated by doc content changes)
- Cache node_modules directly to skip npm ci on exact hits
- Detect changed products on PRs via GitHub API
- Run selective DOCS_PRODUCT builds for doc-only PRs (2–6 min vs 32 min)
- Skip build entirely for PRs with no docs/config changes
- Upload SHA-tagged artifact after full builds (3-day retention)
- Reuse SHA artifact on main push to skip redundant rebuild after dev sync

## Expected impact
| Scenario | Before | After |
|---|---|---|
| PR touching 1–2 products | 32 min | 2–6 min |
| PR with no docs/config changes | 32 min | ~1 min |
| Push to dev | 32 min | 32 min |
| main auto-sync from dev | 32 min | ~2–3 min |"
```
