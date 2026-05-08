#!/usr/bin/env bash
# vale-autofix.sh — Phase 1: deterministic fixes for mechanical Vale rules
# Usage: vale-autofix.sh <violations.json>
# Output: writes fix summary to stdout as JSON

set -euo pipefail

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

_get_product_version_folder() {
  local filepath="$1"
  local rest="${filepath#docs/}"
  local product="${rest%%/*}"
  rest="${rest#*/}"
  local version="${rest%%/*}"
  if [[ "$version" =~ ^[0-9][0-9._]*$ ]]; then
    echo "docs/${product}/${version}/"
  else
    echo "docs/${product}/"
  fi
}

_word_overlap_score() {
  local old_heading="$1" new_heading="$2"
  local old_slug new_slug
  old_slug=$(slugify "$old_heading")
  new_slug=$(slugify "$new_heading")
  [ "$old_slug" = "$new_slug" ] && echo 100 && return
  local -a ow nw
  IFS='-' read -ra ow <<< "$old_slug"
  IFS='-' read -ra nw <<< "$new_slug"
  local intersect=0 word nword
  for word in "${ow[@]}"; do
    [ -z "$word" ] && continue
    for nword in "${nw[@]}"; do
      [ -z "$nword" ] && continue
      if [ "$word" = "$nword" ]; then intersect=$((intersect + 1)); break; fi
    done
  done
  local maxlen=${#ow[@]}
  [ ${#nw[@]} -gt "$maxlen" ] && maxlen=${#nw[@]}
  [ "$maxlen" -eq 0 ] && echo 0 && return
  echo $(( (intersect * 100) / maxlen ))
}

update_heading_anchors() {
  local base_ref="${1:-HEAD}"
  local files_list="${2:-}"
  local -a files=()
  if [ -n "$files_list" ] && [ -f "$files_list" ]; then
    mapfile -t files < "$files_list"
  else
    mapfile -t files < <(git diff --name-only "${base_ref}" -- '*.md' 2>/dev/null || true)
  fi
  [ ${#files[@]} -eq 0 ] && return 0

  local anchor_updates=0
  local file
  for file in "${files[@]}"; do
    [ -f "$file" ] || continue
    local base_content
    base_content=$(git show "${base_ref}:${file}" 2>/dev/null || true)
    [ -z "$base_content" ] && continue

    local -a old_h=() new_h=()
    local line in_fence=0
    while IFS= read -r line; do
      if [[ "$line" =~ ^(\`{3,}|~{3,}) ]]; then
        in_fence=$(( 1 - in_fence )); continue
      fi
      [ "$in_fence" -eq 0 ] && [[ "$line" =~ ^#{1,6}[[:space:]] ]] && old_h+=("$line")
    done <<< "$base_content"
    in_fence=0
    while IFS= read -r line; do
      if [[ "$line" =~ ^(\`{3,}|~{3,}) ]]; then
        in_fence=$(( 1 - in_fence )); continue
      fi
      [ "$in_fence" -eq 0 ] && [[ "$line" =~ ^#{1,6}[[:space:]] ]] && new_h+=("$line")
    done < "$file"

    local -a removed=() added=()
    local h match n o
    for h in "${old_h[@]}"; do
      match=0
      for n in "${new_h[@]}"; do [ "$h" = "$n" ] && match=1 && break; done
      [ "$match" -eq 0 ] && removed+=("$h")
    done
    for h in "${new_h[@]}"; do
      match=0
      for o in "${old_h[@]}"; do [ "$h" = "$o" ] && match=1 && break; done
      [ "$match" -eq 0 ] && added+=("$h")
    done
    if [ ${#removed[@]} -eq 0 ] || [ ${#added[@]} -eq 0 ]; then continue; fi

    local folder
    folder=$(_get_product_version_folder "$file")
    [ -d "$folder" ] || continue

    local -a used_new_idx=()
    for h in "${removed[@]}"; do
      local best_score=0 best_idx=-1 best_new="" idx=0 cand
      for cand in "${added[@]}"; do
        local already=0 ui
        for ui in "${used_new_idx[@]}"; do [ "$ui" -eq "$idx" ] && already=1 && break; done
        if [ "$already" -eq 0 ]; then
          local score
          score=$(_word_overlap_score "$h" "$cand")
          if [ "$score" -gt "$best_score" ]; then
            best_score=$score; best_idx=$idx; best_new="$cand"
          fi
        fi
        idx=$((idx + 1))
      done
      [ "$best_score" -lt 50 ] && continue
      local old_slug new_slug
      old_slug=$(slugify "$h")
      new_slug=$(slugify "$best_new")
      if [ "$old_slug" != "$new_slug" ] && [ -n "$old_slug" ] && [ -n "$new_slug" ]; then
        find "$folder" -name '*.md' -exec \
          sed -i "s|#${old_slug}\([) ]\)|#${new_slug}\1|g" {} +
        anchor_updates=$((anchor_updates + 1))
        used_new_idx+=("$best_idx")
      fi
    done
  done

  [ "$anchor_updates" -gt 0 ] && echo "Updated $anchor_updates anchor link(s)"
  return 0
}

# Allow sourcing for tests or running anchor-update only
case "${1:-}" in
  --test)
    # Sourced for testing — define functions but skip main script logic
    return 0 2>/dev/null || exit 0
    ;;
  --anchors-only)
    update_heading_anchors "${2:-}" "${3:-}"
    exit 0
    ;;
esac

# --- Main autofix logic ---

VIOLATIONS_FILE="${1:?Usage: vale-autofix.sh <violations.json>}"

if [ ! -f "$VIOLATIONS_FILE" ]; then
  echo "[]"
  exit 0
fi

TOTAL_FIXES=0
declare -A FIX_COUNTS

# Get unique files from violations
mapfile -t FILES_ARRAY < <(jq -r '[.[].path] | unique | .[]' "$VIOLATIONS_FILE")

for FILE in "${FILES_ARRAY[@]}"; do
  unset CODE_BLOCK_LINES
  declare -A CODE_BLOCK_LINES
  if [ ! -f "$FILE" ]; then
    continue
  fi
  IN_FENCE=0
  LINENUM=0
  while IFS= read -r fline || [ -n "$fline" ]; do
    LINENUM=$((LINENUM + 1))
    if echo "$fline" | grep -qE '^\s*(```|~~~)'; then
      if [ "$IN_FENCE" -eq 0 ]; then
        IN_FENCE=1
      else
        IN_FENCE=0
      fi
      CODE_BLOCK_LINES[$LINENUM]=1
    elif [ "$IN_FENCE" -eq 1 ]; then
      CODE_BLOCK_LINES[$LINENUM]=1
    fi
  done < "$FILE"

  # Get violations for this file, grouped by rule
  RULES=$(jq -r --arg f "$FILE" '[.[] | select(.path == $f) | .check] | unique | .[]' "$VIOLATIONS_FILE")

  for RULE in $RULES; do
    # Get line numbers for this rule in this file
    LINES=$(jq -r --arg f "$FILE" --arg r "$RULE" '.[] | select(.path == $f and .check == $r) | .line' "$VIOLATIONS_FILE")

    FIXED=0
    for LINE_NUM in $LINES; do
      # Skip lines inside fenced code blocks
      if [ "${CODE_BLOCK_LINES[$LINE_NUM]:-0}" = "1" ]; then
        continue
      fi

      LINE_CONTENT=$(sed -n "${LINE_NUM}p" "$FILE")

      NEW_CONTENT="$LINE_CONTENT"

      case "$RULE" in
        Netwrix.Checkbox)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/\b[Cc]heck [Bb]ox\b/checkbox/g')
          ;;
        Netwrix.ClickOn)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/\b([Dd]ouble-[Cc]lick|[Rr]ight-[Cc]lick|[Ll]eft-[Cc]lick|[Ll]eft [Cc]lick|[Cc]lick) [Oo]n\b/\1/g')
          ;;
        Netwrix.Contractions)
          NEW_CONTENT=$(echo "$LINE_CONTENT" \
            | sed -E 's/\bDo [Nn]ot\b/Don'\''t/g' \
            | sed -E 's/\bdo [Nn]ot\b/don'\''t/g' \
            | sed -E 's/\bDoes [Nn]ot\b/Doesn'\''t/g' \
            | sed -E 's/\bdoes [Nn]ot\b/doesn'\''t/g' \
            | sed -E 's/\bDid [Nn]ot\b/Didn'\''t/g' \
            | sed -E 's/\bdid [Nn]ot\b/didn'\''t/g' \
            | sed -E 's/\bCannot\b/Can'\''t/g' \
            | sed -E 's/\bcannot\b/can'\''t/g' \
            | sed -E 's/\bCan [Nn]ot\b/Can'\''t/g' \
            | sed -E 's/\bcan [Nn]ot\b/can'\''t/g' \
            | sed -E 's/\bWould [Nn]ot\b/Wouldn'\''t/g' \
            | sed -E 's/\bwould [Nn]ot\b/wouldn'\''t/g' \
            | sed -E 's/\bShould [Nn]ot\b/Shouldn'\''t/g' \
            | sed -E 's/\bshould [Nn]ot\b/shouldn'\''t/g' \
            | sed -E 's/\bCould [Nn]ot\b/Couldn'\''t/g' \
            | sed -E 's/\bcould [Nn]ot\b/couldn'\''t/g' \
            | sed -E 's/\bIs [Nn]ot\b/Isn'\''t/g' \
            | sed -E 's/\bis [Nn]ot\b/isn'\''t/g' \
            | sed -E 's/\bAre [Nn]ot\b/Aren'\''t/g' \
            | sed -E 's/\bare [Nn]ot\b/aren'\''t/g' \
            | sed -E 's/\bWas [Nn]ot\b/Wasn'\''t/g' \
            | sed -E 's/\bwas [Nn]ot\b/wasn'\''t/g' \
            | sed -E 's/\bWere [Nn]ot\b/Weren'\''t/g' \
            | sed -E 's/\bwere [Nn]ot\b/weren'\''t/g')
          ;;
        Netwrix.Dropdown)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/[Dd]rop[- ][Dd]own/dropdown/g')
          ;;
        Netwrix.InOrderTo)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/[Ii]n [Oo]rder [Tt]o/to/g')
          ;;
        Netwrix.IsAbleTo)
          NEW_CONTENT=$(echo "$LINE_CONTENT" \
            | sed -E 's/\b[Ii]s [Aa]ble [Tt]o\b/can/g' \
            | sed -E 's/\b[Aa]re [Aa]ble [Tt]o\b/can/g' \
            | sed -E 's/\b[Ww]as [Aa]ble [Tt]o\b/could/g' \
            | sed -E 's/\b[Ww]ere [Aa]ble [Tt]o\b/could/g')
          ;;
        Netwrix.LoginVerb)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/\b[Ll]ogin [Tt]o\b/log in to/g')
          ;;
        Netwrix.MakeSure)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/\b[Mm]ake [Ss]ure\b/ensure/g')
          ;;
        Netwrix.ProvidesAbilityTo)
          NEW_CONTENT=$(echo "$LINE_CONTENT" \
            | sed -E 's/\b[Pp]rovides the ability to\b/lets you/g' \
            | sed -E 's/\b[Pp]rovide the ability to\b/let you/g' \
            | sed -E 's/\b[Pp]rovided the ability to\b/let you/g')
          ;;
        Netwrix.SetupUsage)
          NEW_CONTENT=$(echo "$LINE_CONTENT" \
            | sed -E 's/\b([Tt]o|[Ww]ill|[Cc]an|[Mm]ust|[Ss]hould|[Hh]ave|[Hh]as|[Hh]ad|[Gg]etting) [Ss]etup\b/\1 set up/g')
          ;;
        Netwrix.Utilize)
          NEW_CONTENT=$(echo "$LINE_CONTENT" \
            | sed -E 's/\b[Uu]tiliz(es|ed|ing|e)\b/us\1/g' \
            | sed -E 's/\b[Uu]tilis(es|ed|ing|e)\b/us\1/g')
          ;;
        Netwrix.WishTo)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/\b[Ww]ish [Tt]o\b/want to/g')
          ;;
        Netwrix.Aforementioned)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/\b[Aa]forementioned\b *//g' | sed -E 's/  +/ /g')
          ;;
        Netwrix.LatinAbbreviations)
          NEW_CONTENT=$(echo "$LINE_CONTENT" \
            | sed -E 's/\be\.g\./for example/g' \
            | sed -E 's/\betc\./and so on/g')
          ;;
        Netwrix.Please)
          # Skip lines containing "please note" (case-insensitive) — handled by NoteThat rule
          if ! echo "$LINE_CONTENT" | grep -qiE '\bplease\s+note\b'; then
            NEW_CONTENT=$(echo "$LINE_CONTENT" \
              | sed -E 's/\b[Pp]lease +//g' \
              | sed -E 's/  +/ /g')
          fi
          ;;
        Netwrix.Spacing)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/([.!?])  +/\1 /g')
          ;;
        Netwrix.TemporalHedges)
          NEW_CONTENT=$(echo "$LINE_CONTENT" \
            | sed -E 's/\b[Cc]urrently,? *//g' \
            | sed -E 's/\b[Pp]resently,? *//g' \
            | sed -E 's/\b[Aa]s of this writing,? *//g' \
            | sed -E 's/  +/ /g')
          ;;
        Netwrix.Plurals)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/(\w+)\(s\)/\1s/g')
          ;;
        *)
          continue
          ;;
      esac

      if [ "$NEW_CONTENT" != "$LINE_CONTENT" ]; then
        TMPNEW=$(mktemp)
        printf '%s' "$NEW_CONTENT" > "$TMPNEW"
        awk -v n="$LINE_NUM" -v newfile="$TMPNEW" \
          'NR==n{while((getline line < newfile)>0) print line; close(newfile); next}1' \
          "$FILE" > "$FILE.tmp" && mv "$FILE.tmp" "$FILE"
        rm -f "$TMPNEW"
        FIXED=$((FIXED + 1))
      fi
    done

    if [ "$FIXED" -gt 0 ]; then
      KEY="$RULE"
      FIX_COUNTS[$KEY]=$(( ${FIX_COUNTS[$KEY]:-0} + FIXED ))
      TOTAL_FIXES=$((TOTAL_FIXES + FIXED))
    fi
  done
done

# Map rules to human-readable categories for the summary comment
declare -A CATEGORY_MAP=(
  ["Netwrix.Checkbox"]="Substitutions"
  ["Netwrix.ClickOn"]="Substitutions"
  ["Netwrix.Dropdown"]="Substitutions"
  ["Netwrix.InOrderTo"]="Substitutions"
  ["Netwrix.IsAbleTo"]="Substitutions"
  ["Netwrix.LoginVerb"]="Substitutions"
  ["Netwrix.MakeSure"]="Substitutions"
  ["Netwrix.ProvidesAbilityTo"]="Substitutions"
  ["Netwrix.SetupUsage"]="Substitutions"
  ["Netwrix.Utilize"]="Substitutions"
  ["Netwrix.WishTo"]="Substitutions"
  ["Netwrix.Contractions"]="Contractions"
  ["Netwrix.Please"]="Removed filler"
  ["Netwrix.TemporalHedges"]="Removed filler"
  ["Netwrix.Aforementioned"]="Removed filler"
  ["Netwrix.LatinAbbreviations"]="Latin abbreviations"
  ["Netwrix.Spacing"]="Spacing"
  ["Netwrix.Plurals"]="Plurals"
)

# Aggregate by category
declare -A CATEGORY_COUNTS
for KEY in "${!FIX_COUNTS[@]}"; do
  CAT="${CATEGORY_MAP[$KEY]:-Other}"
  CATEGORY_COUNTS[$CAT]=$(( ${CATEGORY_COUNTS[$CAT]:-0} + FIX_COUNTS[$KEY] ))
done

# Output JSON summary grouped by category
echo "{"
echo "  \"total\": $TOTAL_FIXES,"
echo "  \"by_category\": {"
FIRST=true
for CAT in "${!CATEGORY_COUNTS[@]}"; do
  if [ "$FIRST" = true ]; then
    FIRST=false
  else
    echo ","
  fi
  printf '    "%s": %d' "$CAT" "${CATEGORY_COUNTS[$CAT]}"
done
echo ""
echo "  }"
echo "}"
