#!/usr/bin/env bash
# check-anchors.sh — Validate that #anchor hrefs in markdown files resolve to real headings
# Usage:
#   check-anchors.sh --staged          check staged .md/.mdx docs/ files (pre-commit mode)
#   check-anchors.sh <file> [file...]  check specific files
# Exits 1 if any broken links are found

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
ERRORS=0
declare -A HEADING_CACHE

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
    | sed -E 's/ +/-/g' \
    | sed -E 's/-+/-/g' \
    | sed -E 's/^-+//;s/-+$//'
}

load_headings() {
  local file="$1"
  [[ -v HEADING_CACHE["$file"] ]] && return
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
  HEADING_CACHE["$file"]="$slugs"
}

anchor_exists() {
  local file="$1" anchor="$2"
  load_headings "$file"
  [[ "${HEADING_CACHE[$file]}" == *" $anchor "* ]]
}

list_anchors() {
  local file="$1"
  load_headings "$file"
  local slugs="${HEADING_CACHE[$file]:-}" result=""
  for slug in $slugs; do
    result="${result:+$result · }#$slug"
  done
  printf '%s' "$result"
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
    [[ "$line" == *"]("* ]] || continue

    while IFS= read -r href; do
      [[ -z "$href" ]] && continue

      # Strip optional link title: path#anchor "title" -> path#anchor
      href="$(sed -E "s/[[:space:]]+[\"'][^\"']*[\"']$//" <<< "$href")"

      # Skip external URLs and special schemes (http://, mailto:, etc.)
      [[ "$href" =~ ^[a-zA-Z][a-zA-Z0-9+.-]*: ]] && continue

      local path="${href%%#*}"
      local anchor=""
      [[ "$href" == *"#"* ]] && anchor="${href#*#}"

      # Nothing to check — empty href
      [[ -z "$path" && -z "$anchor" ]] && continue

      local target_file
      if [[ -z "$path" ]]; then
        target_file="$abs_source"
      elif [[ "$path" == /* ]]; then
        target_file="${REPO_ROOT}/${path#/}"
      else
        target_file="${source_dir}/${path}"
      fi
      target_file="$(realpath -m "$target_file" 2>/dev/null || printf '%s' "$target_file")"

      local trimmed_line="${line#"${line%%[![:space:]]*}"}"

      # Check if target file exists; report broken links to markdown files
      if [[ -n "$path" ]] && ! [[ -f "$target_file" ]]; then
        if [[ "$target_file" =~ \.(md|mdx)$ ]]; then
          local rel_source="${source_file#$REPO_ROOT/}"
          local msg="${target_file#$REPO_ROOT/} not found"
          [[ "${GITHUB_ACTIONS:-}" == "true" ]] && \
            printf '::error file=%s,line=%d::%s\n' "$rel_source" "$line_num" "$msg"
          printf '  %s:%d\n' "$rel_source" "$line_num"
          printf '    %s\n' "$trimmed_line"
          printf '    %s\n' "$msg"
          printf '\n'
          (( ERRORS++ )) || true
        fi
        continue
      fi

      # Check anchor if present
      if [[ -n "$anchor" ]] && ! anchor_exists "$target_file" "$anchor"; then
        local available
        available="$(list_anchors "$target_file")"
        local rel_source="${source_file#$REPO_ROOT/}"
        local msg="#${anchor} not found in ${target_file#$REPO_ROOT/}"
        [[ "${GITHUB_ACTIONS:-}" == "true" ]] && \
          printf '::error file=%s,line=%d::%s\n' "$rel_source" "$line_num" "$msg"
        printf '  %s:%d\n' "$rel_source" "$line_num"
        printf '    %s\n' "$trimmed_line"
        printf '    %s\n' "$msg"
        [[ -n "$available" ]] && printf '    Available: %s\n' "$available"
        printf '\n'
        (( ERRORS++ )) || true
      fi
    done < <(perl -ne 'while (/\]\(([^)]+)\)/g) { print "$1\n" }' <<< "$line" || true)
  done < "$abs_source"
}

# Collect files to check
FILES=()
if [[ "${1:-}" == "--staged" ]]; then
  while IFS= read -r f; do
    [[ -f "$REPO_ROOT/$f" ]] && FILES+=("$REPO_ROOT/$f")
  done < <(git -C "$REPO_ROOT" diff --cached --name-only --diff-filter=ACM \
    | grep -E '\.mdx?$' | grep '^docs/' || true)
else
  for f in "$@"; do
    [[ -f "$f" ]] && FILES+=("$f")
  done
fi

if [[ ${#FILES[@]} -eq 0 ]]; then
  exit 0
fi

printf 'Checking links in %d file(s)...\n' "${#FILES[@]}"
for file in "${FILES[@]}"; do
  check_file "$file"
done

if [[ "$ERRORS" -gt 0 ]]; then
  printf '\nFound %d broken link(s).\n' "$ERRORS"
  exit 1
fi

printf 'All anchor links valid.\n'
