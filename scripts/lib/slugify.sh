# slugify.sh — shared heading-to-anchor slug logic
# Sourced by scripts/check-anchors.sh and scripts/vale-autofix.sh so the two
# scripts can't drift out of sync (see the PR history of both files for what
# happens when they do).

slugify() {
  local heading="$1"
  # Respect explicit anchor IDs: ## Heading {#custom-id}
  if [[ "$heading" =~ \{#([a-zA-Z0-9_-]+)\} ]]; then
    printf '%s' "${BASH_REMATCH[1]}"
    return
  fi
  # Mirrors github-slugger's behavior (used by Docusaurus): each removed
  # character leaves its surrounding whitespace intact, so runs of hyphens
  # are NOT collapsed and leading/trailing hyphens are NOT trimmed. A
  # heading like "Step 4 — Configure" (em dash stripped, two spaces
  # remain) slugs to "step-4--configure", not "step-4-configure".
  # Underscores are preserved — github-slugger only strips punctuation/
  # symbols, not word characters like `_` (e.g. "Box_FileMetrics" stays
  # "box_filemetrics", not "boxfilemetrics").
  printf '%s' "$heading" \
    | sed -E 's/^#+ +//' \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E "s/[^a-z0-9 _-]//g" \
    | sed -E 's/ /-/g'
}
