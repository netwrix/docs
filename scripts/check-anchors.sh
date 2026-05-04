#!/usr/bin/env bash
# check-anchors.sh — Validate that #anchor hrefs in markdown files resolve to real headings
# Usage:
#   check-anchors.sh --staged          check staged .md docs/ files (pre-commit mode)
#   check-anchors.sh <file> [file...]  check specific files
# Exits 1 if any broken anchors are found

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
ERRORS=0
CACHE_DIR="$(mktemp -d)"
trap 'rm -rf "$CACHE_DIR"' EXIT

# Produce a filesystem-safe cache key from a file path
cache_key() {
  printf '%s' "$1" | tr -dc 'a-zA-Z0-9._-' | tr '/' '_'
}

slugify() {
  local heading="$1"
  # Respect explicit anchor IDs: ## Heading {#custom-id}
  if [[ "$heading" =~ \{#([a-zA-Z0-9_-]+)\} ]]; then
    printf '%s' "${BASH_REMATCH[1]}"
    return
  fi
  printf '%s' "$heading" \
    | sed -E 's/^#+ +//' \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E "s/[^a-z0-9 -]//g" \
    | sed -E 's/ /-/g' \
    | sed -E 's/^-+//;s/-+$//'
}

load_headings() {
  local file="$1"
  local key="$CACHE_DIR/$(cache_key "$file")"
  [[ -f "$key" ]] && return
  local slugs=" "
  local in_fence=false
  while IFS= read -r line; do
    if [[ "$line" =~ ^\`\`\`|^~~~ ]]; then
      if $in_fence; then in_fence=false; else in_fence=true; fi
      continue
    fi
    $in_fence && continue
    if [[ "$line" =~ ^#{1,6}[[:space:]] ]]; then
      slugs+="$(slugify "$line") "
    fi
  done < "$file"
  printf '%s' "$slugs" > "$key"
}

anchor_exists() {
  local file="$1" anchor="$2"
  load_headings "$file"
  local key="$CACHE_DIR/$(cache_key "$file")"
  grep -qF " $anchor " "$key"
}

check_file() {
  local source_file="$1"
  local abs_source source_dir
  abs_source="$(realpath "$source_file")"
  source_dir="$(dirname "$abs_source")"

  # Stored in variable so bash doesn't misparse ) in character class
  local link_re='\]\(([^)]+)\)'

  local in_fence=false
  local line_num=0

  while IFS= read -r line; do
    (( line_num++ )) || true
    if [[ "$line" =~ ^\`\`\`|^~~~ ]]; then
      if $in_fence; then in_fence=false; else in_fence=true; fi
      continue
    fi
    $in_fence && continue
    [[ "$line" == *"#"* ]] || continue

    local rest="$line"
    while [[ "$rest" =~ $link_re ]]; do
      local href="${BASH_REMATCH[1]}"
      rest="${rest#*]($href)}"
      [[ "$href" == *"#"* ]] || continue

      # Strip optional link title: path#anchor "title" -> path#anchor
      href="$(sed -E "s/[[:space:]]+[\"'][^\"']*[\"']$//" <<< "$href")"

      local path="${href%%#*}"
      local anchor="${href#*#}"
      [[ -n "$anchor" ]] || continue

      local target_file
      if [[ -z "$path" ]]; then
        target_file="$abs_source"
      elif [[ "$path" == /* ]]; then
        target_file="${REPO_ROOT}/${path#/}"
      else
        target_file="${source_dir}/${path}"
      fi
      target_file="$(realpath -m "$target_file" 2>/dev/null || printf '%s' "$target_file")"

      # Skip if target doesn't exist — broken links are Docusaurus's job
      [[ -f "$target_file" ]] || continue

      if ! anchor_exists "$target_file" "$anchor"; then
        printf '  %s:%d -> #%s not found in %s\n' \
          "${source_file#$REPO_ROOT/}" "$line_num" "$anchor" "${target_file#$REPO_ROOT/}"
        (( ERRORS++ )) || true
      fi
    done
  done < "$abs_source"
}

# Collect files to check
FILES=()
if [[ "${1:-}" == "--staged" ]]; then
  while IFS= read -r f; do
    [[ -f "$REPO_ROOT/$f" ]] && FILES+=("$REPO_ROOT/$f")
  done < <(git -C "$REPO_ROOT" diff --cached --name-only --diff-filter=ACM \
    | grep -E '\.md$' | grep '^docs/' || true)
else
  for f in "$@"; do
    [[ -f "$f" ]] && FILES+=("$f")
  done
fi

if [[ ${#FILES[@]} -eq 0 ]]; then
  exit 0
fi

printf 'Checking anchor links in %d file(s)...\n' "${#FILES[@]}"
for file in "${FILES[@]}"; do
  check_file "$file"
done

if [[ "$ERRORS" -gt 0 ]]; then
  printf '\nFound %d broken anchor link(s).\n' "$ERRORS"
  exit 1
fi

printf 'All anchor links valid.\n'
