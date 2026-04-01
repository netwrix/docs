# Heading Anchor Link Updates — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Automatically update anchor links when the vale-autofix workflow changes heading text, preventing broken builds from `onBrokenAnchors: 'throw'`.

**Architecture:** Add a `slugify()` and `update_heading_anchors()` function to `scripts/vale-autofix.sh`, called from a new workflow step after Phase 1 commits. Update Phase 2 and Phase 3 Claude prompts with detailed anchor-update instructions.

**Tech Stack:** Bash (sed, tr, awk, git diff), GitHub Actions YAML

**Spec:** `docs/superpowers/specs/2026-04-01-heading-anchor-link-updates-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `scripts/vale-autofix.sh` | Modify | Add `slugify()` and `update_heading_anchors()` functions at top of script; add `--anchors-only` entry point |
| `.github/workflows/vale-autofix.yml` | Modify | Add anchor-update step after Phase 1 commit; append anchor instructions to Phase 2 and Phase 3 prompts |
| `scripts/test-slugify.sh` | Create | Test script for `slugify()` function |
| `scripts/test-anchor-update.sh` | Create | Integration test for `update_heading_anchors()` using a temp git repo |

---

### Task 1: Add `slugify()` function to `vale-autofix.sh`

**Files:**
- Modify: `scripts/vale-autofix.sh:1-6` (add function before existing code)
- Create: `scripts/test-slugify.sh`

- [ ] **Step 1: Write the test script for `slugify()`**

Create `scripts/test-slugify.sh`:

```bash
#!/usr/bin/env bash
# test-slugify.sh — unit tests for the slugify function in vale-autofix.sh
set -euo pipefail

# Source just the functions (--test mode skips the main script logic)
source "$(dirname "$0")/vale-autofix.sh" --test

PASS=0
FAIL=0

assert_slug() {
  local input="$1"
  local expected="$2"
  local actual
  actual=$(slugify "$input")
  if [ "$actual" = "$expected" ]; then
    PASS=$((PASS + 1))
  else
    FAIL=$((FAIL + 1))
    echo "FAIL: slugify '$input'"
    echo "  expected: '$expected'"
    echo "  actual:   '$actual'"
  fi
}

# Basic headings
assert_slug "## Hello World" "hello-world"
assert_slug "### Step 1: Install the Agent" "step-1-install-the-agent"
assert_slug "# Overview" "overview"

# Contractions (apostrophes stripped)
assert_slug "## Don't Click Here" "dont-click-here"
assert_slug "## Can't Stop Won't Stop" "cant-stop-wont-stop"

# Punctuation stripped
assert_slug "## What is This?" "what-is-this"
assert_slug "## Install (Optional)" "install-optional"
assert_slug "## Step 1. Configure" "step-1-configure"

# Custom anchor IDs
assert_slug '## Setup the Application {#setup}' "setup"
assert_slug '### Advanced Options {#advanced-opts}' "advanced-opts"

# Extra whitespace and hyphens
assert_slug "##   Lots   of   Spaces" "lots-of-spaces"
assert_slug "## Already-Hyphenated--Word" "already-hyphenated--word"

# Edge cases
assert_slug "## 123 Numbers First" "123-numbers-first"
assert_slug "## ALL CAPS HEADING" "all-caps-heading"
assert_slug '## Quotes "and" Stuff' "quotes-and-stuff"

echo ""
echo "Results: $PASS passed, $FAIL failed"
if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `bash scripts/test-slugify.sh`
Expected: FAIL — `slugify` function not defined (source will fail or function won't exist)

- [ ] **Step 3: Add `slugify()` function and `--test`/`--anchors-only` entry point to `vale-autofix.sh`**

Add the following at the **top** of `scripts/vale-autofix.sh`, right after the `set -euo pipefail` line (line 6) and before the `VIOLATIONS_FILE=` line (line 8):

```bash
# --- Shared functions ---

slugify() {
  local heading="$1"

  # Check for custom anchor ID: {#custom-id}
  if [[ "$heading" =~ \{#([a-zA-Z0-9_-]+)\} ]]; then
    echo "${BASH_REMATCH[1]}"
    return
  fi

  echo "$heading" \
    | sed -E 's/^#+ +//' \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E "s/[^a-z0-9 -]//g" \
    | sed -E 's/ +/-/g' \
    | sed -E 's/-+/-/g' \
    | sed -E 's/^-+//;s/-+$//'
}

# Allow sourcing for tests or running anchor-update only
case "${1:-}" in
  --test)
    # Sourced for testing — define functions but skip main script logic
    return 0 2>/dev/null || exit 0
    ;;
  --anchors-only)
    # Will be handled after update_heading_anchors is defined (Task 2)
    ;;
esac

# --- Main autofix logic ---
```

**Important:** The `slugify()` function (and later `update_heading_anchors()` in Task 2) must be defined **before** the `case` block so they're available in all modes. The `--test` early return skips only the main autofix logic below.

Then move the existing `VIOLATIONS_FILE=` line to after the `# --- Main autofix logic ---` comment.

- [ ] **Step 4: Run the test to verify it passes**

Run: `bash scripts/test-slugify.sh`
Expected: All assertions PASS

- [ ] **Step 5: Commit**

```bash
git add scripts/vale-autofix.sh scripts/test-slugify.sh
git commit -m "feat: add slugify function to vale-autofix.sh with tests"
```

---

### Task 2: Add `update_heading_anchors()` function to `vale-autofix.sh`

**Files:**
- Modify: `scripts/vale-autofix.sh` (add function after `slugify()`, before entry point `case`)
- Create: `scripts/test-anchor-update.sh`

- [ ] **Step 1: Write the integration test**

Create `scripts/test-anchor-update.sh`:

```bash
#!/usr/bin/env bash
# test-anchor-update.sh — integration test for update_heading_anchors()
# Creates a temp git repo, makes a heading change, and verifies anchor links update
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

echo "Setting up test repo in $TMPDIR..."

cd "$TMPDIR"
git init -q
git config user.name "test"
git config user.email "test@test.com"

# Create a product/version folder structure
mkdir -p docs/testproduct/1.0/install
mkdir -p docs/testproduct/1.0/admin

# File with a heading that will change
cat > docs/testproduct/1.0/install/setup.md << 'MDEOF'
# Install the Product

## Do Not Use the Old Method

Follow these steps instead.

## Configure Settings

See the configuration guide.
MDEOF

# File with links to the heading above
cat > docs/testproduct/1.0/admin/guide.md << 'MDEOF'
# Admin Guide

See [old method](../install/setup.md#do-not-use-the-old-method) for details.

Also check [configure](../install/setup.md#configure-settings).
MDEOF

# Same-page link in the same file
cat > docs/testproduct/1.0/install/overview.md << 'MDEOF'
# Overview

For setup, see [setup instructions](setup.md#do-not-use-the-old-method).
MDEOF

git add -A
git commit -q -m "initial"

# Now simulate Phase 1 changing the heading (contractions fix)
sed -i 's/## Do Not Use the Old Method/## Don'\''t Use the Old Method/' docs/testproduct/1.0/install/setup.md

git add -A
git commit -q -m "fix(vale): auto-fix substitutions and removals"

# Run the anchor update function
source "$SCRIPT_DIR/vale-autofix.sh" --test
update_heading_anchors

# Verify: guide.md should have updated anchor
PASS=0
FAIL=0

check_contains() {
  local file="$1"
  local expected="$2"
  local label="$3"
  if grep -qF "$expected" "$file"; then
    PASS=$((PASS + 1))
  else
    FAIL=$((FAIL + 1))
    echo "FAIL: $label"
    echo "  expected '$expected' in $file"
    echo "  actual content:"
    cat "$file"
  fi
}

check_not_contains() {
  local file="$1"
  local unexpected="$2"
  local label="$3"
  if grep -qF "$unexpected" "$file"; then
    FAIL=$((FAIL + 1))
    echo "FAIL: $label"
    echo "  did not expect '$unexpected' in $file"
  else
    PASS=$((PASS + 1))
  fi
}

check_contains "docs/testproduct/1.0/admin/guide.md" "#dont-use-the-old-method" "cross-file link updated"
check_not_contains "docs/testproduct/1.0/admin/guide.md" "#do-not-use-the-old-method" "old cross-file link removed"
check_contains "docs/testproduct/1.0/install/overview.md" "#dont-use-the-old-method" "relative link updated"
check_not_contains "docs/testproduct/1.0/install/overview.md" "#do-not-use-the-old-method" "old relative link removed"
check_contains "docs/testproduct/1.0/admin/guide.md" "#configure-settings" "unrelated link unchanged"

echo ""
echo "Results: $PASS passed, $FAIL failed"
if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `bash scripts/test-anchor-update.sh`
Expected: FAIL — `update_heading_anchors` function not defined

- [ ] **Step 3: Add `update_heading_anchors()` to `vale-autofix.sh`**

Add this function after `slugify()` and before the `case "${1:-}"` block:

```bash
update_heading_anchors() {
  # Detect heading changes in the most recent commit and update anchor links
  # across the product/version folder.

  local diff_output
  diff_output=$(git diff HEAD~1 HEAD -- '*.md' 2>/dev/null || true)

  if [ -z "$diff_output" ]; then
    return 0
  fi

  local current_file=""
  local old_headings=()
  local new_headings=()
  local in_hunk=0
  local anchor_updates=0

  while IFS= read -r line; do
    # Track which file we're in
    if [[ "$line" =~ ^diff\ --git\ a/(.*\.md)\ b/ ]]; then
      # Process any pending heading pairs from previous file
      _process_heading_pairs "$current_file" old_headings new_headings
      anchor_updates=$((anchor_updates + $?))
      current_file="${BASH_REMATCH[1]}"
      old_headings=()
      new_headings=()
      in_hunk=0
      continue
    fi

    # Track hunk boundaries to pair headings
    if [[ "$line" =~ ^@@ ]]; then
      _process_heading_pairs "$current_file" old_headings new_headings
      anchor_updates=$((anchor_updates + $?))
      old_headings=()
      new_headings=()
      in_hunk=1
      continue
    fi

    if [ "$in_hunk" -eq 0 ]; then
      continue
    fi

    # Collect removed headings (lines starting with - then #)
    if [[ "$line" =~ ^-#{1,6}\ + ]]; then
      old_headings+=("${line:1}")
    fi

    # Collect added headings (lines starting with + then #)
    if [[ "$line" =~ ^\+#{1,6}\ + ]]; then
      new_headings+=("${line:1}")
    fi
  done <<< "$diff_output"

  # Process final file
  _process_heading_pairs "$current_file" old_headings new_headings
  anchor_updates=$((anchor_updates + $?))

  if [ "$anchor_updates" -gt 0 ]; then
    echo "Updated $anchor_updates anchor link(s)"
  fi

  return 0
}

_get_product_version_folder() {
  # Given a file path like docs/product/1.0/install/setup.md,
  # return docs/product/1.0/ or docs/product/
  local filepath="$1"

  # Strip docs/ prefix
  local rest="${filepath#docs/}"
  # Get product name (first segment)
  local product="${rest%%/*}"
  rest="${rest#*/}"
  # Get potential version (second segment)
  local version="${rest%%/*}"

  # Check if version segment looks like a version (digits, dots, underscores)
  if [[ "$version" =~ ^[0-9][0-9._]*$ ]]; then
    echo "docs/${product}/${version}/"
  else
    echo "docs/${product}/"
  fi
}

_process_heading_pairs() {
  local file="$1"
  local -n _old="$2"
  local -n _new="$3"
  local updates=0

  if [ -z "$file" ] || [ ${#_old[@]} -eq 0 ] || [ ${#_new[@]} -eq 0 ]; then
    return 0
  fi

  # Pair old and new headings positionally
  local count=${#_old[@]}
  if [ ${#_new[@]} -lt "$count" ]; then
    count=${#_new[@]}
  fi

  local folder
  folder=$(_get_product_version_folder "$file")

  if [ ! -d "$folder" ]; then
    return 0
  fi

  for ((i = 0; i < count; i++)); do
    local old_slug new_slug
    old_slug=$(slugify "${_old[$i]}")
    new_slug=$(slugify "${_new[$i]}")

    if [ "$old_slug" = "$new_slug" ] || [ -z "$old_slug" ] || [ -z "$new_slug" ]; then
      continue
    fi

    # Replace #old-slug with #new-slug in all .md files in the folder
    # Match patterns: ](#old-slug), (filename#old-slug), (path/filename#old-slug)
    find "$folder" -name '*.md' -exec \
      sed -i "s|#${old_slug})|#${new_slug})|g" {} +

    updates=$((updates + 1))
  done

  return "$updates"
}
```

Also update the `--anchors-only` case in the entry point block:

```bash
  --anchors-only)
    update_heading_anchors
    exit 0
    ;;
```

- [ ] **Step 4: Run the integration test to verify it passes**

Run: `bash scripts/test-anchor-update.sh`
Expected: All assertions PASS

- [ ] **Step 5: Run the slugify tests to make sure nothing broke**

Run: `bash scripts/test-slugify.sh`
Expected: All assertions PASS

- [ ] **Step 6: Commit**

```bash
git add scripts/vale-autofix.sh scripts/test-anchor-update.sh
git commit -m "feat: add update_heading_anchors function with integration tests"
```

---

### Task 3: Add anchor-update workflow step after Phase 1 commit

**Files:**
- Modify: `.github/workflows/vale-autofix.yml:112-123` (insert new step after "Commit Phase 1 fixes")

- [ ] **Step 1: Add the new workflow step**

In `.github/workflows/vale-autofix.yml`, insert the following new step immediately after the "Commit Phase 1 fixes" step (after line 122) and before the "Re-run Vale for remaining violations" step:

```yaml
      - name: Update heading anchors (Phase 1)
        if: steps.phase1-commit.outputs.committed == 'true'
        run: |
          RESULT=$(bash scripts/vale-autofix.sh --anchors-only 2>&1 || true)
          echo "$RESULT"
          if ! git diff --quiet; then
            git add -A docs/
            git commit -m "fix(vale): update anchor links for changed headings"
          fi
```

- [ ] **Step 2: Verify YAML syntax**

Run: `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/vale-autofix.yml'))"`
Expected: No output (valid YAML)

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/vale-autofix.yml
git commit -m "ci: add heading anchor update step after Phase 1 fixes"
```

---

### Task 4: Update Phase 2 prompt with anchor-update instructions

**Files:**
- Modify: `.github/workflows/vale-autofix.yml:158-193` (Phase 2 prompt block)

- [ ] **Step 1: Append anchor-update instructions to Phase 2 prompt**

In `.github/workflows/vale-autofix.yml`, find the Phase 2 prompt section. Insert the following text after the existing instruction #3 ("If you are NOT confident...SKIP it") and before the "After fixing, write a JSON summary" paragraph:

```
            HEADING ANCHOR UPDATES:
            When you modify a heading line (any line starting with #), you MUST update all anchor links that reference the old heading.

            1. Before editing a heading, record the original heading text
            2. Compute the old anchor slug:
               - If the heading has a {#custom-id} suffix, use custom-id as the slug
               - Otherwise: strip the # prefix and whitespace, lowercase, remove everything except [a-z0-9 -], replace spaces with hyphens, collapse consecutive hyphens, trim leading/trailing hyphens
               - Examples: "## Do Not Click" → do-not-click, "## Step 1: Install" → step-1-install, "## Setup {#setup}" → setup
            3. After editing, compute the new anchor slug the same way
            4. If the slug changed, determine the product/version folder from the file path:
               - Multi-version: docs/<product>/<version>/ (e.g., docs/accessanalyzer/12.0/)
               - Single-version: docs/<product>/ (e.g., docs/threatprevention/)
               - The folder is the first 2 or 3 segments of the path after docs/. If the second segment is a version number (digits/dots), include it.
            5. Search ALL .md files in that folder (not just PR-changed files) for link patterns containing #old-slug:
               - ](#old-slug) — same-page links
               - ](filename#old-slug) — relative links
               - ](path/to/filename#old-slug) — deeper relative links
            6. Replace #old-slug with #new-slug in every match
            7. Include each anchor update in the fixed array of your summary JSON, using the same check value as the heading fix that caused it, with action like "updated anchor link from #old-slug to #new-slug"
```

- [ ] **Step 2: Verify YAML syntax**

Run: `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/vale-autofix.yml'))"`
Expected: No output (valid YAML)

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/vale-autofix.yml
git commit -m "ci: add anchor-update instructions to Phase 2 Claude prompt"
```

---

### Task 5: Update Phase 3 prompt with anchor-update instructions

**Files:**
- Modify: `.github/workflows/vale-autofix.yml:206-241` (Phase 3 prompt block)

- [ ] **Step 1: Append anchor-update instructions to Phase 3 prompt**

In `.github/workflows/vale-autofix.yml`, find the Phase 3 (Dale) prompt section. Insert the following text after Step 4 ("Fix each violation...SKIP it.") and before Step 5 ("Write a JSON summary"):

```
            HEADING ANCHOR UPDATES:
            When you modify a heading line (any line starting with #), you MUST update all anchor links that reference the old heading.

            1. Before editing a heading, record the original heading text
            2. Compute the old anchor slug:
               - If the heading has a {#custom-id} suffix, use custom-id as the slug
               - Otherwise: strip the # prefix and whitespace, lowercase, remove everything except [a-z0-9 -], replace spaces with hyphens, collapse consecutive hyphens, trim leading/trailing hyphens
               - Examples: "## Do Not Click" → do-not-click, "## Step 1: Install" → step-1-install, "## Setup {#setup}" → setup
            3. After editing, compute the new anchor slug the same way
            4. If the slug changed, determine the product/version folder from the file path:
               - Multi-version: docs/<product>/<version>/ (e.g., docs/accessanalyzer/12.0/)
               - Single-version: docs/<product>/ (e.g., docs/threatprevention/)
               - The folder is the first 2 or 3 segments of the path after docs/. If the second segment is a version number (digits/dots), include it.
            5. Search ALL .md files in that folder (not just PR-changed files) for link patterns containing #old-slug:
               - ](#old-slug) — same-page links
               - ](filename#old-slug) — relative links
               - ](path/to/filename#old-slug) — deeper relative links
            6. Replace #old-slug with #new-slug in every match
            7. Include each anchor update in the fixed array of your summary JSON, using the same rule value as the heading fix that caused it, with action like "updated anchor link from #old-slug to #new-slug"
```

Note: This is identical to Phase 2 except step 7 uses `rule` instead of `check`.

- [ ] **Step 2: Verify YAML syntax**

Run: `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/vale-autofix.yml'))"`
Expected: No output (valid YAML)

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/vale-autofix.yml
git commit -m "ci: add anchor-update instructions to Phase 3 Dale prompt"
```

---

### Task 6: End-to-end manual verification

**Files:**
- All modified files from Tasks 1-5

- [ ] **Step 1: Run all tests**

```bash
bash scripts/test-slugify.sh && bash scripts/test-anchor-update.sh
```

Expected: Both scripts report all tests passing.

- [ ] **Step 2: Validate workflow YAML**

```bash
python3 -c "import yaml; yaml.safe_load(open('.github/workflows/vale-autofix.yml'))"
```

Expected: No output (valid YAML)

- [ ] **Step 3: Verify the autofix script still works in normal mode**

```bash
echo '[]' > /tmp/test-violations.json
bash scripts/vale-autofix.sh /tmp/test-violations.json
```

Expected: Outputs `{"total": 0, "by_category": {}}` — the `--test` and `--anchors-only` modes don't interfere with normal operation.

- [ ] **Step 4: Review the full diff**

```bash
git diff dev...HEAD --stat
git diff dev...HEAD
```

Review the changes to ensure everything looks correct and no unintended modifications were made.
