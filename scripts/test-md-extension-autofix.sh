#!/usr/bin/env bash
# test-md-extension-autofix.sh — unit tests for md-extension-autofix.sh
set -euo pipefail

# Source just the functions (--test mode skips the main script logic)
source "$(dirname "$0")/md-extension-autofix.sh" --test

PASS=0
FAIL=0

assert_true() {
  local label="$1"
  local result="$2"
  if [ "$result" = "0" ]; then
    PASS=$((PASS + 1))
  else
    FAIL=$((FAIL + 1))
    echo "FAIL (expected true): $label"
  fi
}

assert_false() {
  local label="$1"
  local result="$2"
  if [ "$result" != "0" ]; then
    PASS=$((PASS + 1))
  else
    FAIL=$((FAIL + 1))
    echo "FAIL (expected false): $label"
  fi
}

# ---- has_extension ----

has_extension "docs/kb/some-article" && R=$? || R=$?
assert_false "no extension: docs/kb/some-article" "$R"

has_extension "docs/kb/some-article.md" && R=$? || R=$?
assert_true "has extension: .md" "$R"

has_extension "docs/kb/.DS_Store" && R=$? || R=$?
assert_true "has extension: .DS_Store (hidden file with ext)" "$R"

has_extension "docs/kb/script.ps1" && R=$? || R=$?
assert_true "has extension: .ps1" "$R"

# ---- is_ignored_extension ----

is_ignored_extension "docs/kb/article.ps1" && R=$? || R=$?
assert_true "ignored: .ps1" "$R"

is_ignored_extension "docs/kb/diagram.plantuml" && R=$? || R=$?
assert_true "ignored: .plantuml" "$R"

is_ignored_extension "docs/kb/advisory.html" && R=$? || R=$?
assert_true "ignored: .html" "$R"

is_ignored_extension "docs/kb/no-extension" && R=$? || R=$?
assert_false "not ignored: no extension" "$R"

is_ignored_extension "docs/kb/article.md" && R=$? || R=$?
assert_false "not ignored: .md" "$R"

# ---- is_markdown_content ----

TMPDIR_TEST=$(mktemp -d)

# File with both frontmatter and heading → markdown
cat > "$TMPDIR_TEST/good.md" <<'EOF'
---
title: Test
---

# My Heading

Some content here.
EOF
is_markdown_content "$TMPDIR_TEST/good.md" && R=$? || R=$?
assert_true "markdown: has frontmatter and heading" "$R"

# File with only heading, no frontmatter → not markdown
cat > "$TMPDIR_TEST/no-frontmatter" <<'EOF'
# My Heading

Some content here.
EOF
is_markdown_content "$TMPDIR_TEST/no-frontmatter" && R=$? || R=$?
assert_false "not markdown: heading only, no frontmatter" "$R"

# File with only frontmatter, no heading → not markdown
cat > "$TMPDIR_TEST/no-heading" <<'EOF'
---
title: Test
---

Some content here with no heading.
EOF
is_markdown_content "$TMPDIR_TEST/no-heading" && R=$? || R=$?
assert_false "not markdown: frontmatter only, no heading" "$R"

# Empty file → not markdown
touch "$TMPDIR_TEST/empty"
is_markdown_content "$TMPDIR_TEST/empty" && R=$? || R=$?
assert_false "not markdown: empty file" "$R"

# PowerShell script → not markdown
cat > "$TMPDIR_TEST/script.ps1" <<'EOF'
param([string]$AgentPath)
Write-Host "Installing agent..."
Start-Process $AgentPath
EOF
is_markdown_content "$TMPDIR_TEST/script.ps1" && R=$? || R=$?
assert_false "not markdown: powershell script" "$R"

rm -rf "$TMPDIR_TEST"

echo ""
echo "Results: $PASS passed, $FAIL failed"
if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
