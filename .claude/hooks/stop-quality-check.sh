#!/bin/bash
# Stop hook: before Claude finishes, run the pre-PR style check (Vale, Dale, AI-isms) on the
# docs THIS SESSION edited (recorded by post-edit-record.sh): new pages whole, existing pages on
# their changed lines. Other drafts on the branch are not this session's to rewrite, so they are
# left alone. If anything is flagged, exit 2 hands the findings back to Claude to fix. After 3
# rounds it lets go; the pre-commit hook is the hard gate and checks everything that is staged.

[ -n "$NWX_QUALITY_CHILD" ] && exit 0
INPUT=$(cat)
# Parse with node, which the repo already requires; jq is not installed everywhere.
SESSION=$(echo "$INPUT" | node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{process.stdout.write(String(JSON.parse(d).session_id||""))}catch{}})' 2>/dev/null)
SESSION=${SESSION:-default}
COUNTER="${TMPDIR:-/tmp}/nwx-quality-$SESSION"
ROUNDS=$(cat "$COUNTER" 2>/dev/null || echo 0)

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
[ -f scripts/quality/score.mjs ] || exit 0

# Only the files this session edited. None edited, nothing to check.
LIST="${TMPDIR:-/tmp}/nwx-quality-files-$SESSION"
if [ ! -s "$LIST" ]; then
  rm -f "$COUNTER"
  exit 0
fi

# Unresolved draft markers in those files: tell the user, never block.
node scripts/quality/todo-check.mjs --files $(cat "$LIST") >&2 || true

if OUTPUT=$(node scripts/quality/score.mjs --base origin/dev --only "$LIST" --vale-optional --table 2>&1); then
  rm -f "$COUNTER"
  exit 0
fi

if [ "$ROUNDS" -ge 3 ]; then
  rm -f "$COUNTER"
  exit 0
fi
echo $((ROUNDS + 1)) > "$COUNTER"

{
  echo "The AI-isms check flagged documentation you wrote or edited (round $((ROUNDS + 1)) of 3):"
  echo "$OUTPUT"
  echo ""
  echo "Rewrite the flagged lines in plain, specific wording without changing what they say. Do not add new filler. Then finish."
} >&2
exit 2
