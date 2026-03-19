# Vale Auto-Fix Rework Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the report-only Vale linting flow with a two-phase auto-fix workflow that commits fixes directly to PR branches and posts a high-level summary.

**Architecture:** Phase 1 is a bash script that applies deterministic sed-based fixes for 18 mechanical Vale rules. Phase 2 invokes Claude Code GitHub Action for the 12 rules requiring AI judgment. A single GitHub Actions workflow orchestrates both phases, commits fixes, and posts a summary comment.

**Tech Stack:** Bash (sed/jq), GitHub Actions, Claude Code GitHub Action (`anthropics/claude-code-action@v1`), Vale 3.9.5

**Spec:** `docs/superpowers/specs/2026-03-19-vale-autofix-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `scripts/vale-autofix.sh` | Create | Phase 1: deterministic sed-based fixes for 18 mechanical Vale rules |
| `.github/workflows/vale-autofix.yml` | Create | Orchestrates both phases, commits, posts summary comment |
| `.github/workflows/vale-linter.yml` | Delete | Replaced by vale-autofix.yml |
| `.husky/pre-push` | Delete | No longer needed |
| `.claude/skills/doc-pr-fix/SKILL.md` | Modify | Remove Vale fix logic, keep Dale/editorial |
| `.claude/skills/doc-pr/SKILL.md` | Modify | Update Vale references, remove Vale-only commands |
| `.github/workflows/claude-doc-pr.yml` | Modify | Remove Vale references in editorial review prompt and followup cleanup |
| `CLAUDE.md` | Modify | Update CI/CD table and workflow descriptions |
| `docs/CLAUDE.md` | Modify | Update Vale sections to reflect auto-fix flow |
| `CONTRIBUTING.md` | Modify | Remove pre-push Vale references, update workflow description |
| `README.md` | Modify | Remove pre-push Vale references, update project structure |

---

### Task 1: Create the Phase 1 auto-fix script

**Files:**
- Create: `scripts/vale-autofix.sh`

This script reads Vale JSON output, applies deterministic fixes using sed, and outputs a JSON summary.

- [ ] **Step 1: Create `scripts/vale-autofix.sh` with argument parsing and main loop**

```bash
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
FILES=$(jq -r '[.[].path] | unique | .[]' "$VIOLATIONS_FILE")

for FILE in $FILES; do
  if [ ! -f "$FILE" ]; then
    continue
  fi

  # Build a set of line numbers inside fenced code blocks (``` or ~~~)
  declare -A CODE_BLOCK_LINES
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
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/[Cc]heck [Bb]ox/checkbox/g')
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
          # Remove "aforementioned" — replace with empty and clean up extra spaces
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/\b[Aa]forementioned\b *//g' | sed -E 's/  +/ /g')
          ;;
        Netwrix.LatinAbbreviations)
          # Case-sensitive replacements
          NEW_CONTENT=$(echo "$LINE_CONTENT" \
            | sed -E 's/\be\.g\./for example/g' \
            | sed -E 's/\bi\.e\./that is/g' \
            | sed -E 's/\betc\./and so on/g')
          ;;
        Netwrix.Please)
          # Remove "please" but not "please note" (handled by NoteThat rule)
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/\b[Pp]lease ([^n])/\1/g; s/\b[Pp]lease$//g' | sed -E 's/  +/ /g')
          ;;
        Netwrix.Spacing)
          # Replace multiple spaces after sentence-ending punctuation with single space
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/([.!?])  +/\1 /g')
          ;;
        Netwrix.TemporalHedges)
          # Remove temporal hedges and clean up
          NEW_CONTENT=$(echo "$LINE_CONTENT" \
            | sed -E 's/\b[Cc]urrently,? *//g' \
            | sed -E 's/\b[Pp]resently,? *//g' \
            | sed -E 's/\b[Aa]s of this writing,? *//g' \
            | sed -E 's/  +/ /g')
          ;;
        Netwrix.Plurals)
          # Remove parenthetical plurals: "item(s)" → "items"
          NEW_CONTENT=$(echo "$LINE_CONTENT" | sed -E 's/(\w+)\(s\)/\1s/g')
          ;;
        *)
          # Unknown rule — skip
          continue
          ;;
      esac

      if [ "$NEW_CONTENT" != "$LINE_CONTENT" ]; then
        # Use awk for safe line replacement (avoids sed delimiter issues with | in markdown tables)
        awk -v n="$LINE_NUM" -v new="$NEW_CONTENT" 'NR==n{print new;next}1' "$FILE" > "$FILE.tmp" && mv "$FILE.tmp" "$FILE"
        FIXED=$((FIXED + 1))
      fi
    done

    if [ "$FIXED" -gt 0 ]; then
      KEY="$RULE"
      FIX_COUNTS[$KEY]=$(( ${FIX_COUNTS[$KEY]:-0} + FIXED ))
      TOTAL_FIXES=$((TOTAL_FIXES + FIXED))
    fi
  done
  unset CODE_BLOCK_LINES
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
```

- [ ] **Step 2: Make the script executable**

Run: `chmod +x scripts/vale-autofix.sh`

- [ ] **Step 3: Test the script locally on a sample file**

Create a temporary test file with known violations and run:

```bash
# Create test file
cat > /tmp/test-vale.md << 'TESTEOF'
Make sure you check box the option in the drop-down menu.
You do not need to click on the button.
Please utilize the setup wizard in order to configure.
The aforementioned feature is currently available.
This is e.g. an example.  Extra spaces here.
The user(s) can login to the system.
The system provides the ability to export reports.
If you wish to proceed, the system is able to generate item(s).
TESTEOF

# Run vale on test file to get violations JSON
vale --output JSON /tmp/test-vale.md 2>/dev/null | jq '[to_entries[] | .value[] | {path: "/tmp/test-vale.md", line: .Line, check: .Check, message: .Message}]' > /tmp/test-violations.json

# Run the script
./scripts/vale-autofix.sh /tmp/test-violations.json

# Verify the fixes
cat /tmp/test-vale.md
```

Expected: All mechanical violations fixed. Script outputs JSON with fix counts.

- [ ] **Step 4: Commit**

```bash
git add scripts/vale-autofix.sh
git commit -m "feat: add Phase 1 Vale auto-fix script

Deterministic sed-based fixes for 18 mechanical Vale rules:
12 substitution rules and 6 removal rules."
```

---

### Task 2: Create the vale-autofix GitHub Actions workflow

**Files:**
- Create: `.github/workflows/vale-autofix.yml`

- [ ] **Step 1: Create the workflow file**

```yaml
name: Vale Auto-Fix

on:
  pull_request:
    types: [opened, synchronize]
    branches:
      - dev
    paths:
      - 'docs/**/*.md'
      - '!docs/**/CLAUDE.md'
      - '!docs/**/SKILL.md'
      - '!docs/kb/**'

concurrency:
  group: vale-autofix-${{ github.event.pull_request.number }}
  cancel-in-progress: true

jobs:
  vale-autofix:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - name: Checkout PR branch
        uses: actions/checkout@v4
        with:
          ref: ${{ github.event.pull_request.head.ref }}
          token: ${{ secrets.PAT_TOKEN }}
          fetch-depth: 0

      - name: Configure git identity
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"

      - name: Get changed markdown files
        id: changed-files
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          PR_NUMBER=${{ github.event.pull_request.number }}
          CHANGED_MD_FILES=$(gh pr diff "$PR_NUMBER" --name-only | grep -E '^docs/.*\.md$' | grep -v '/CLAUDE\.md$' | grep -v '/SKILL\.md$' | grep -v '^docs/kb/' || true)
          if [ -z "$CHANGED_MD_FILES" ]; then
            echo "No docs markdown files changed"
            echo "count=0" >> "$GITHUB_OUTPUT"
          else
            echo "Changed markdown files:"
            echo "$CHANGED_MD_FILES"
            echo "count=$(echo "$CHANGED_MD_FILES" | wc -l | tr -d ' ')" >> "$GITHUB_OUTPUT"
            echo "$CHANGED_MD_FILES" > /tmp/changed-files.txt
          fi

      - name: Install Vale
        if: steps.changed-files.outputs.count > 0
        run: |
          wget -q https://github.com/errata-ai/vale/releases/download/v3.9.5/vale_3.9.5_Linux_64-bit.tar.gz -O /tmp/vale.tar.gz
          tar -xzf /tmp/vale.tar.gz -C /tmp
          chmod +x /tmp/vale
          /tmp/vale --version

      - name: Run Vale on changed files
        id: vale-initial
        if: steps.changed-files.outputs.count > 0
        run: |
          jq -n '[]' > /tmp/violations.json

          while IFS= read -r file; do
            if [ -f "$file" ]; then
              RESULT=$(/tmp/vale --output JSON "$file" 2>/dev/null || true)
              if [ -n "$RESULT" ] && [ "$RESULT" != "{}" ]; then
                echo "$RESULT" | jq --arg f "$file" '
                  [to_entries[] | .value[] | {path: $f, line: .Line, check: .Check, message: .Message}]
                ' > /tmp/vale-file.json
                jq -s '.[0] + .[1]' /tmp/violations.json /tmp/vale-file.json > /tmp/vale-tmp.json
                mv /tmp/vale-tmp.json /tmp/violations.json
              fi
            fi
          done < /tmp/changed-files.txt

          TOTAL=$(jq 'length' /tmp/violations.json)
          echo "total=$TOTAL" >> "$GITHUB_OUTPUT"
          echo "Vale found $TOTAL issue(s)"

      - name: Phase 1 — Script fixes
        id: phase1
        if: steps.vale-initial.outputs.total > 0
        run: |
          chmod +x scripts/vale-autofix.sh
          SUMMARY=$(./scripts/vale-autofix.sh /tmp/violations.json)
          echo "$SUMMARY" > /tmp/phase1-summary.json
          PHASE1_TOTAL=$(echo "$SUMMARY" | jq '.total')
          echo "fixed=$PHASE1_TOTAL" >> "$GITHUB_OUTPUT"
          echo "Phase 1 fixed $PHASE1_TOTAL issue(s)"

      - name: Commit Phase 1 fixes
        id: phase1-commit
        if: steps.phase1.outputs.fixed > 0
        run: |
          if git diff --quiet; then
            echo "committed=false" >> "$GITHUB_OUTPUT"
          else
            git add -A docs/
            git commit -m "fix(vale): auto-fix substitutions and removals"
            git push
            echo "committed=true" >> "$GITHUB_OUTPUT"
          fi

      - name: Re-run Vale for remaining violations
        id: vale-remaining
        if: steps.vale-initial.outputs.total > 0
        run: |
          jq -n '[]' > /tmp/remaining-violations.json

          while IFS= read -r file; do
            if [ -f "$file" ]; then
              RESULT=$(/tmp/vale --output JSON "$file" 2>/dev/null || true)
              if [ -n "$RESULT" ] && [ "$RESULT" != "{}" ]; then
                echo "$RESULT" | jq --arg f "$file" '
                  [to_entries[] | .value[] | {path: $f, line: .Line, check: .Check, message: .Message}]
                ' > /tmp/vale-file.json
                jq -s '.[0] + .[1]' /tmp/remaining-violations.json /tmp/vale-file.json > /tmp/vale-tmp.json
                mv /tmp/vale-tmp.json /tmp/remaining-violations.json
              fi
            fi
          done < /tmp/changed-files.txt

          REMAINING=$(jq 'length' /tmp/remaining-violations.json)
          echo "remaining=$REMAINING" >> "$GITHUB_OUTPUT"
          echo "$REMAINING remaining violation(s) for Phase 2"

      - name: Phase 2 — Claude fixes
        id: phase2
        if: steps.vale-remaining.outputs.remaining > 0
        continue-on-error: true
        uses: anthropics/claude-code-action@v1
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          github_token: ${{ secrets.GITHUB_TOKEN }}
          show_full_output: true
          prompt: |
            You are a documentation fixer. Your job is to fix Vale linting violations in markdown files.

            Read docs/CLAUDE.md for Netwrix writing standards before making any changes.

            Here are the remaining Vale violations after mechanical fixes were applied:

            ```json
            $(cat /tmp/remaining-violations.json)
            ```

            For each violation:
            1. Read the file and understand the context around the flagged line
            2. Apply a fix that resolves the Vale rule while preserving the author's meaning
            3. If you are NOT confident in a fix (ambiguous context, multiple valid interpretations, fix would change meaning), SKIP it

            After fixing, write a JSON summary to /tmp/phase2-summary.json with this structure:
            ```json
            {
              "fixed": [
                {"path": "file.md", "line": 1, "check": "Netwrix.RuleName", "action": "brief description of fix"}
              ],
              "skipped": [
                {"path": "file.md", "line": 1, "check": "Netwrix.RuleName", "reason": "why it was skipped"}
              ]
            }
            ```

            After writing the summary, stage and commit your changes:
            ```bash
            git add -A docs/
            git commit -m "fix(vale): auto-fix rewrites (AI-assisted)"
            git push
            ```

            IMPORTANT: Write the summary JSON file BEFORE committing. Do not post any PR comments.
          claude_args: '--allowedTools "Bash(git:*),Read,Write,Edit,Glob,Grep"'

      - name: Build and post summary comment
        if: steps.vale-initial.outputs.total > 0
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          PR_NUMBER=${{ github.event.pull_request.number }}
          REPO=${{ github.repository }}

          # Collect Phase 1 stats
          PHASE1_TOTAL=0
          PHASE1_BODY=""
          if [ -f /tmp/phase1-summary.json ]; then
            PHASE1_TOTAL=$(jq '.total' /tmp/phase1-summary.json)
            # Build category rows from Phase 1
            PHASE1_BODY=$(jq -r '
              .by_category | to_entries | sort_by(.key) | .[] |
              "| \(.key) | \(.value) |"
            ' /tmp/phase1-summary.json)
          fi

          # Collect Phase 2 stats
          PHASE2_FIXED=0
          PHASE2_SKIPPED=0
          PHASE2_BODY=""
          SKIPPED_BODY=""
          if [ -f /tmp/phase2-summary.json ]; then
            PHASE2_FIXED=$(jq '.fixed | length' /tmp/phase2-summary.json)
            PHASE2_SKIPPED=$(jq '.skipped | length' /tmp/phase2-summary.json)

            if [ "$PHASE2_FIXED" -gt 0 ]; then
              PHASE2_BODY=$(jq -r '
                [.fixed[] | .check] | group_by(.) | .[] |
                "| \(.[0] | sub("Netwrix\\."; "")) (rewrite) | \(length) |"
              ' /tmp/phase2-summary.json)
            fi

            if [ "$PHASE2_SKIPPED" -gt 0 ]; then
              SKIPPED_BODY=$(jq -r '
                .skipped[] |
                "| `\(.path):\(.line)` — \(.check) | \(.reason) |"
              ' /tmp/phase2-summary.json)
            fi
          fi

          TOTAL_FIXED=$((PHASE1_TOTAL + PHASE2_FIXED))
          TOTAL_SKIPPED=$PHASE2_SKIPPED

          # Count affected files
          FILE_COUNT=$(wc -l < /tmp/changed-files.txt | tr -d ' ')

          # Build the summary comment
          {
            echo "## Vale Auto-Fix Summary"
            echo ""
            echo "**${TOTAL_FIXED} issues fixed, ${TOTAL_SKIPPED} skipped across ${FILE_COUNT} files**"
            echo ""

            if [ "$TOTAL_FIXED" -gt 0 ]; then
              echo "| Category | Fixes |"
              echo "|----------|-------|"
              if [ -n "$PHASE1_BODY" ]; then
                echo "$PHASE1_BODY"
              fi
              if [ -n "$PHASE2_BODY" ]; then
                echo "$PHASE2_BODY"
              fi
              echo ""
            fi

            if [ "$TOTAL_SKIPPED" -gt 0 ]; then
              echo "| Skipped (needs manual review) | Reason |"
              echo "|-------------------------------|--------|"
              echo "$SKIPPED_BODY"
              echo ""
            fi

            echo 'Ask `@claude` on this PR if you'\''d like an explanation of any fix.'
          } > /tmp/vale-summary.md

          # Delete previous Vale Auto-Fix comments
          COMMENT_IDS=$(gh api "repos/${REPO}/issues/${PR_NUMBER}/comments" \
            --jq '[.[] | select(.user.login == "github-actions[bot]" and (.body | contains("## Vale Auto-Fix Summary"))) | .id] | .[]' 2>/dev/null || true)
          for ID in $COMMENT_IDS; do
            gh api "repos/${REPO}/issues/comments/${ID}" -X DELETE 2>/dev/null || true
          done

          # Post new summary
          gh pr comment "$PR_NUMBER" --repo "$REPO" --body-file /tmp/vale-summary.md
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/vale-autofix.yml
git commit -m "feat: add Vale auto-fix workflow

Two-phase auto-fix: script fixes for mechanical rules, then
Claude for AI-judgment rules. Posts summary comment on PR."
```

---

### Task 3: Remove the old Vale linting infrastructure

**Files:**
- Delete: `.github/workflows/vale-linter.yml`
- Delete: `.husky/pre-push`

- [ ] **Step 1: Delete the old workflow file**

```bash
rm .github/workflows/vale-linter.yml
```

- [ ] **Step 2: Delete the pre-push hook**

```bash
rm .husky/pre-push
```

- [ ] **Step 3: Commit**

```bash
git add -A .github/workflows/vale-linter.yml .husky/pre-push
git commit -m "remove: delete old Vale linter workflow and pre-push hook

Replaced by vale-autofix.yml which auto-fixes issues instead of
reporting them."
```

---

### Task 4: Update the doc-pr-fix skill

**Files:**
- Modify: `.claude/skills/doc-pr-fix/SKILL.md`

Remove all Vale-specific logic. Vale issues are now auto-fixed by the workflow, so this skill only handles Dale and editorial fixes.

- [ ] **Step 1: Update the skill description**

In `.claude/skills/doc-pr-fix/SKILL.md`, change the frontmatter description from:

```
description: "Autonomous fixer for documentation PRs. Triggered by @claude comments on PRs targeting dev. Reads the writer's request, the doc-pr review comment, and the Vale linting comment, then applies fixes and commits. Use this skill whenever a writer tags @claude on a documentation PR — not for interactive help (use doc-help for that), but for autonomous, single-shot fixes in CI."
```

to:

```
description: "Autonomous fixer for documentation PRs. Triggered by @claude comments on PRs targeting dev. Reads the writer's request and the doc-pr review comment, then applies fixes and commits. Use this skill whenever a writer tags @claude on a documentation PR — not for interactive help (use doc-help for that), but for autonomous, single-shot fixes in CI."
```

- [ ] **Step 2: Update Step 1 (Understand the request)**

Remove these two patterns from the list:
- `- **Fix all issues** — apply every fix from the doc-pr review comment and the Vale linting comment`
- `- **Fix only Vale issues** — apply only fixes from the Vale linting comment`

Replace the "Fix all issues" line with:
- `- **Fix all issues** — apply every fix from the doc-pr review comment (Dale + editorial)`

- [ ] **Step 3: Update Step 2 (Gather context)**

Remove step 4 entirely (the one that finds the Vale linting comment via `gh api`):
```
4. If the writer asks to fix Vale issues (or "all issues"), also find the Vale linting comment:
   ```bash
   gh api repos/{owner}/{repo}/issues/$PR_NUMBER/comments --jq '.[] | select(.user.login == "github-actions[bot]" and (.body | contains("## Vale Linting"))) | .body' | tail -1
   ```
   This gives you the Vale results table with file paths, line numbers, and rule violations.
```

- [ ] **Step 4: Update Step 3 (Plan your work)**

Remove Vale task examples from the task list:
- Remove `- Fix Vale issues in \`path/to/file.md\` (N issues)`
- Remove `- Fix Vale issues in \`path/to/other.md\` (N issues)`

Do the same in the progress comment example and the final summary example in Step 7.

Also update the scope note: change `If they said "fix only the Dale issues," your task list should contain Dale fixes, verify, and commit — no Vale tasks, no editorial tasks.` to `If they said "fix only the Dale issues," your task list should contain Dale fixes, verify, and commit — no editorial tasks.`

- [ ] **Step 5: Update Step 4 (Apply fixes)**

Remove the Vale-specific bullet:
- `- For **Vale fixes**: read \`docs/CLAUDE.md\` for Vale guidance (especially the two rules requiring extra care), then fix each flagged issue in order, file by file`

Update the scope note at the bottom: change `Only change what was requested; don't fix other categories of issues even if they're on the same line (e.g., if asked to fix Vale issues, don't also fix Dale or editorial issues)` to `Only change what was requested; don't fix other categories of issues even if they're on the same line (e.g., if asked to fix Dale issues, don't also fix editorial issues)`

- [ ] **Step 6: Remove Step 4b entirely**

Delete the entire "Step 4b: Update the Vale Idioms rule" section (lines 98-109 of the current file). The idiom rule still gets updated, but only through Dale's `[idiom]` tagging — it doesn't need a Vale-specific step anymore since Vale issues are auto-fixed.

- [ ] **Step 7: Update the Behavioral Notes**

Change the last bullet: `"fix the Vale issues," only fix Vale issues — don't also fix Dale issues, editorial issues` to `"fix the Dale issues," only fix Dale issues — don't also fix editorial issues`

- [ ] **Step 8: Commit**

```bash
git add .claude/skills/doc-pr-fix/SKILL.md
git commit -m "update: remove Vale fix logic from doc-pr-fix skill

Vale issues are now auto-fixed by the vale-autofix workflow.
This skill now handles only Dale and editorial fixes."
```

---

### Task 5: Update the doc-pr skill

**Files:**
- Modify: `.claude/skills/doc-pr/SKILL.md`

- [ ] **Step 1: Update the skill description**

Change the frontmatter description. Remove references to Vale inline comments and the vale-linter workflow. Update to mention that Vale issues are auto-fixed separately.

- [ ] **Step 2: Update the Vale reference paragraph**

Change line 11:
```
Vale linting runs separately (via the vale-linter workflow) and posts inline review comments plus a summary PR comment. Do not run Vale or include Vale results in your review.
```
to:
```
Vale issues are auto-fixed separately by the vale-autofix workflow. Do not run Vale or include Vale results in your review.
```

- [ ] **Step 3: Update the "What to do next" section in the output template**

Remove these two lines from the `@claude` command examples:
- `- \`@claude fix all issues\` — fix all Vale, Dale, and editorial issues`
- `- \`@claude fix only the Vale issues\` — fix just the Vale issues`

Replace with:
- `- \`@claude fix all issues\` — fix all Dale and editorial issues`

- [ ] **Step 4: Update the summary line**

Change:
```
N Dale issues, N editorial suggestions across N files. Vale issues are posted in a separate comment by the vale-linter workflow.
```
to:
```
N Dale issues, N editorial suggestions across N files. Vale issues are auto-fixed separately.
```

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/doc-pr/SKILL.md
git commit -m "update: remove Vale inline comment references from doc-pr skill

Vale issues are now auto-fixed by the vale-autofix workflow."
```

---

### Task 6: Update the claude-doc-pr workflow

**Files:**
- Modify: `.github/workflows/claude-doc-pr.yml`

- [ ] **Step 1: Update the editorial review prompt**

In the editorial review step prompt, change:
```
NOTE: Vale linting runs separately (vale-linter workflow) and posts inline review comments plus a summary PR comment. Do not run Vale or include Vale issues in this review.
```
to:
```
NOTE: Vale issues are auto-fixed separately by the vale-autofix workflow. Do not run Vale or include Vale issues in this review.
```

- [ ] **Step 2: Verify the "What to do next" section**

The editorial review prompt's output template already only references Dale and editorial issues (no Vale commands). Verify this is the case — no changes needed if confirmed. The `@claude fix all issues` command in this workflow context already means Dale + editorial only.

- [ ] **Step 3: Update the followup cleanup step**

In the "Resolve inline comments and dismiss old reviews" step, remove Vale-related cleanup. The `select` filter currently checks for both `**Dale**` and `**Vale**` — remove the Vale part:

Change:
```
select(.isResolved == false and ((.comments.nodes[0].body | contains("**Dale**")) or (.comments.nodes[0].body | contains("**Vale**"))))
```
to:
```
select(.isResolved == false and (.comments.nodes[0].body | contains("**Dale**")))
```

Similarly for review dismissals, remove the Vale check:
Change:
```
select(.user.login == "github-actions[bot]" and ((.body | contains("Dale found")) or (.body | contains("Vale found"))))
```
to:
```
select(.user.login == "github-actions[bot]" and (.body | contains("Dale found")))
```

- [ ] **Step 4: Commit**

```bash
git add .github/workflows/claude-doc-pr.yml
git commit -m "update: remove Vale references from doc-pr workflow

Vale is now handled by vale-autofix workflow."
```

---

### Task 7: Update project documentation

**Files:**
- Modify: `CLAUDE.md`
- Modify: `docs/CLAUDE.md`
- Modify: `CONTRIBUTING.md`
- Modify: `README.md`

- [ ] **Step 1: Update `CLAUDE.md` CI/CD table**

In the CI/CD Workflows table, replace the `vale-linter.yml` row:
```
| `vale-linter.yml` | PRs with `.md` changes | Vale inline review comments (up to 25) + summary PR comment |
```
with:
```
| `vale-autofix.yml` | PRs with `.md` changes | Auto-fix Vale issues (script + AI), post summary comment |
```

- [ ] **Step 2: Update `docs/CLAUDE.md` Vale sections**

Replace the "Vale (pre-push)" section under "Linting":
```
### Vale (pre-push)

Vale runs via a pre-push hook that checks changed `docs/*.md` files and reports errors. The hook currently runs in warning mode — it shows errors but does not block the push. Always run Vale locally and fix all errors before pushing.
```
with:
```
### Vale

Vale enforces 30 Netwrix-specific rules in `.vale/styles/Netwrix/` covering word choice, punctuation, formatting, and common writing issues. Vale issues are auto-fixed on PRs by the `vale-autofix` workflow — you don't need to fix them manually before pushing. You can still run Vale locally to preview issues:
```

Update the "CI/CD Context" section. Replace:
```
**Vale (pre-push hook)** — Runs automatically before every push. Currently in warning mode — shows errors but does not block the push. Writers should fix all Vale errors locally before pushing.

**Vale (PR review)** — Runs on PRs to `dev` with docs changes. Posts up to 25 inline review comments on changed lines plus a summary PR comment.
```
with:
```
**Vale (auto-fix)** — Runs on PRs to `dev` with docs changes. Automatically fixes Vale issues in two phases (script for mechanical rules, Claude for judgment-based rules) and posts a summary comment. No inline comments.
```

Update the "Common Mistakes" section. Remove:
```
- Don't ignore Vale warnings before pushing — fix errors to keep documentation clean
```

- [ ] **Step 3: Update `CONTRIBUTING.md`**

Change the Vale prerequisite description (line 10):
```
- **Vale** (style linter — required for pushing documentation changes)
```
to:
```
- **Vale** (style linter — optional for local use; issues are auto-fixed on PRs)
```

Update the Install Vale intro paragraph (line 14):
```
[Vale](https://vale.sh/) is a command-line linter for prose. It checks your writing against a set of style rules — like a spell checker, but for grammar, word choice, and tone. Vale is required to push changes to documentation files. The pre-push hook runs Vale automatically and blocks pushes that have linting errors.
```
to:
```
[Vale](https://vale.sh/) is a command-line linter for prose. It checks your writing against a set of style rules — like a spell checker, but for grammar, word choice, and tone. Vale issues are auto-fixed on PRs, but you can install it locally to preview issues before pushing.
```

Update the workflow steps (lines 57-65). Change step 3 from:
```
3. Run Vale on your changed files to catch linting errors.
```
to:
```
3. Optionally run Vale on your changed files to preview issues (they'll be auto-fixed on the PR).
```

Change step 5 from:
```
5. Push your branch (the pre-push hook runs Vale automatically and warns about any errors).
```
to:
```
5. Push your branch.
```

Update the PR description paragraph (line 65):
```
After you open a PR, an automated review runs Vale linting, Dale linting (AI-powered), and an editorial review, then posts the results as PR comments. If you want help applying the suggested fixes, comment `@claude` on the PR followed by your request and Claude will apply fixes and push a commit. If Claude needs clarification, it will ask in the PR comments.
```
to:
```
After you open a PR, Vale issues are auto-fixed and a summary is posted. Dale linting (AI-powered) and an editorial review also run and post results as PR comments. To get help with Dale or editorial suggestions, comment `@claude` on the PR followed by your request.
```

Update the "Linting with Vale" section (lines 93-107). Change the intro:
```
Vale enforces 30 Netwrix-specific rules covering word choice, punctuation, formatting, and common writing issues. The pre-push hook runs Vale automatically and warns about errors in changed `docs/*.md` files.

Run Vale on a file before pushing to catch issues early:
```
to:
```
Vale enforces 30 Netwrix-specific rules covering word choice, punctuation, formatting, and common writing issues. Vale issues are auto-fixed on PRs, but you can run it locally to preview:
```

Update the "Common Mistakes" section. Change:
```
- Don't ignore Vale warnings before pushing — fix errors to keep documentation clean.
```
to:
```
- Vale issues are auto-fixed on PRs, but running Vale locally helps catch issues early.
```

- [ ] **Step 4: Update `README.md`**

Change the Vale prerequisite (line 31):
```
- **Vale** (style linter — required for pushing documentation changes)
```
to:
```
- **Vale** (style linter — optional for local use; issues are auto-fixed on PRs)
```

Update the Install Vale intro (line 35):
```
[Vale](https://vale.sh/) is a command-line linter for prose. A linter checks your writing against a set of style rules — like a spell checker, but for grammar, word choice, and tone. Vale is required to push changes to documentation files. The pre-push hook runs Vale automatically and blocks pushes that have linting errors.
```
to:
```
[Vale](https://vale.sh/) is a command-line linter for prose. A linter checks your writing against a set of style rules — like a spell checker, but for grammar, word choice, and tone. Vale issues are auto-fixed on PRs, but you can install it locally to preview issues before pushing.
```

Update the project structure tree. Change:
```
├── .husky/
│   └── pre-push                 # Vale pre-push hook (blocks on lint errors)
```
to:
```
├── .husky/                        # Git hooks (managed by Husky)
```

Update the "Run Vale Locally" section intro (lines 75-87). Change:
```
### Run Vale Locally

Run Vale on a file before pushing to catch issues early:
```
to:
```
### Run Vale Locally

Vale issues are auto-fixed on PRs, but you can run Vale locally to preview:
```

- [ ] **Step 5: Commit**

```bash
git add CLAUDE.md docs/CLAUDE.md CONTRIBUTING.md README.md
git commit -m "docs: update all references to reflect Vale auto-fix flow

Vale issues are now auto-fixed on PRs. Pre-push hook removed.
Inline comments removed. Updated CLAUDE.md, docs/CLAUDE.md,
CONTRIBUTING.md, and README.md."
```

---

### Task 8: End-to-end verification

- [ ] **Step 1: Verify all old Vale references are cleaned up**

```bash
# Search for stale references to vale-linter or pre-push Vale
grep -r "vale-linter" --include="*.yml" --include="*.md" --include="*.json" .
grep -r "pre-push" --include="*.md" .
grep -r "Vale inline" --include="*.md" .
grep -r "Vale.*inline comment" --include="*.md" .
```

Expected: No results (or only the spec/plan files).

- [ ] **Step 2: Verify deleted files don't exist**

```bash
ls .github/workflows/vale-linter.yml 2>&1  # Should say "No such file"
ls .husky/pre-push 2>&1                     # Should say "No such file"
```

- [ ] **Step 3: Verify new files exist and are valid**

```bash
ls scripts/vale-autofix.sh                  # Should exist
ls .github/workflows/vale-autofix.yml       # Should exist
bash -n scripts/vale-autofix.sh             # Syntax check
```

- [ ] **Step 4: Verify the auto-fix script runs without errors on a clean repo**

```bash
echo '[]' > /tmp/empty-violations.json
./scripts/vale-autofix.sh /tmp/empty-violations.json
# Should output: {"total": 0, "by_category": {}}
```

- [ ] **Step 5: Spot-check updated files for consistency**

Read through each updated file to verify no stale Vale references remain and all new text is consistent.
