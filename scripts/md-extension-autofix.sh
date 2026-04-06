#!/usr/bin/env bash
# md-extension-autofix.sh — detect and fix missing .md extensions in docs/ files
# Usage: md-extension-autofix.sh <changed-files-list>
# Output: JSON summary to stdout
set -euo pipefail

# Extensions that are intentionally non-markdown — never rename these
IGNORE_EXTENSIONS=("html" "htm" "py" "ps1" "plantuml" "tmp" "DS_Store" "png" "jpg" "jpeg" "webp" "gif" "svg" "pdf" "zip" "json" "js" "mjs" "ts" "sh" "yml" "yaml" "css" "txt" "xml" "csv" "lock")

has_extension() {
  local file="$1"
  local basename
  basename=$(basename "$file")
  [[ "$basename" == *.* ]]
}

is_ignored_extension() {
  local file="$1"
  local basename ext
  basename=$(basename "$file")
  ext="${basename##*.}"
  if [ "$ext" = "$basename" ]; then
    return 1  # no extension
  fi
  for ignored in "${IGNORE_EXTENSIONS[@]}"; do
    if [ "$ext" = "$ignored" ]; then
      return 0
    fi
  done
  return 1
}

is_markdown_content() {
  local file="$1"
  local has_frontmatter=0
  local has_heading=0
  if head -10 "$file" | grep -qE '^---'; then
    has_frontmatter=1
  fi
  if grep -qE '^#{1,6} ' "$file"; then
    has_heading=1
  fi
  [ "$has_frontmatter" -eq 1 ] && [ "$has_heading" -eq 1 ]
}

# Allow sourcing for tests
case "${1:-}" in
  --test)
    return 0 2>/dev/null || exit 0
    ;;
esac

echo "Not yet implemented" >&2
exit 1
