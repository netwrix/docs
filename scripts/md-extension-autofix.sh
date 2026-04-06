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

rewrite_links_in_docs() {
  local old_basename="$1"
  local new_basename="$2"
  local expr1="s|](\([^)]*\)${old_basename})|](\1${new_basename})|g"
  local expr2="s|](\([^)#]*\)${old_basename}#|](\1${new_basename}#|g"
  # macOS BSD sed requires `sed -i ''`; GNU sed (Linux/CI) uses `sed -i`
  if [[ "$(uname -s)" == "Darwin" ]]; then
    find docs/ -name '*.md' -exec sed -i '' -e "$expr1" -e "$expr2" {} +
  else
    find docs/ -name '*.md' -exec sed -i -e "$expr1" -e "$expr2" {} +
  fi
}

# Allow sourcing for tests
case "${1:-}" in
  --test)
    return 0 2>/dev/null || exit 0
    ;;
esac

CHANGED_FILES_LIST="${1:?Usage: md-extension-autofix.sh <changed-files-list>}"

if [ ! -f "$CHANGED_FILES_LIST" ]; then
  echo '{"renamed": [], "skipped": []}'
  exit 0
fi

RENAMED_FROM=()
RENAMED_TO=()
SKIPPED_FILES=()
SKIP_REASONS=()

while IFS= read -r file; do
  # Only process files inside docs/
  [[ "$file" == docs/* ]] || continue

  # Skip deleted files
  [ -f "$file" ] || continue

  # Skip files that already have an extension
  has_extension "$file" && continue

  # Skip files with a known non-markdown extension
  is_ignored_extension "$file" && continue

  new_file="${file}.md"

  # Skip if destination already exists
  if [ -f "$new_file" ]; then
    SKIPPED_FILES+=("$file")
    SKIP_REASONS+=("$(basename "$new_file") already exists in the same folder")
    continue
  fi

  # Skip if content doesn't look like markdown
  if ! is_markdown_content "$file"; then
    SKIPPED_FILES+=("$file")
    SKIP_REASONS+=("Content doesn't look like markdown — please check and rename manually if needed")
    continue
  fi

  # Rename and rewrite links
  # Use mv + git add instead of git mv so it works for both tracked and untracked files
  mv "$file" "$new_file"
  git add "$new_file"
  git rm --cached "$file" 2>/dev/null || true
  rewrite_links_in_docs "$(basename "$file")" "$(basename "$new_file")"

  RENAMED_FROM+=("$file")
  RENAMED_TO+=("$new_file")

done < "$CHANGED_FILES_LIST"

# Output JSON summary
RENAMED_JSON="["
for i in "${!RENAMED_FROM[@]}"; do
  [ "$i" -gt 0 ] && RENAMED_JSON+=","
  RENAMED_JSON+="{\"from\": \"${RENAMED_FROM[$i]}\", \"to\": \"${RENAMED_TO[$i]}\"}"
done
RENAMED_JSON+="]"

SKIPPED_JSON="["
for i in "${!SKIPPED_FILES[@]}"; do
  [ "$i" -gt 0 ] && SKIPPED_JSON+=","
  SKIPPED_JSON+="{\"file\": \"${SKIPPED_FILES[$i]}\", \"reason\": \"${SKIP_REASONS[$i]}\"}"
done
SKIPPED_JSON+="]"

echo "{\"renamed\": ${RENAMED_JSON}, \"skipped\": ${SKIPPED_JSON}}"
