#!/usr/bin/env bash
# vale-autofix.sh — Phase 1: deterministic fixes for mechanical Vale rules
# Usage: vale-autofix.sh <violations.json>
# Output: writes fix summary to stdout as JSON

set -euo pipefail

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
            | sed -E 's/\bi\.e\./that is/g' \
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
