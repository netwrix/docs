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
assert_slug "## Already-Hyphenated--Word" "already-hyphenated-word"

# Edge cases
assert_slug "## 123 Numbers First" "123-numbers-first"
assert_slug "## ALL CAPS HEADING" "all-caps-heading"
assert_slug '## Quotes "and" Stuff' "quotes-and-stuff"

echo ""
echo "Results: $PASS passed, $FAIL failed"
if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
