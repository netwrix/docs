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

Follow these steps instead. See also [configure settings](#configure-settings).

## Configure Settings

See the configuration guide. Do not use [the old method](#do-not-use-the-old-method).
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
sed -i "s/## Do Not Use the Old Method/## Don't Use the Old Method/" docs/testproduct/1.0/install/setup.md

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
check_contains "docs/testproduct/1.0/install/setup.md" "#dont-use-the-old-method" "same-file anchor link updated"
check_not_contains "docs/testproduct/1.0/install/setup.md" "#do-not-use-the-old-method" "old same-file anchor link removed"

echo ""
echo "Results: $PASS passed, $FAIL failed"
if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
