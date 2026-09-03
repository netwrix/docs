#!/usr/bin/env bash
# test-heading-skip.sh — verifies Phase 1 never rewrites heading text,
# since other files link to headings by anchor and a rename breaks those links
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

FILE="$TMPDIR/doc.md"
cat > "$FILE" << 'MDEOF'
# Install the Product

## Do Not Use the Old Method

Do not use this approach in production.
MDEOF

VIOLATIONS="$TMPDIR/violations.json"
cat > "$VIOLATIONS" << JSONEOF
[
  {"path": "$FILE", "line": 3, "check": "Netwrix.Contractions", "message": "heading"},
  {"path": "$FILE", "line": 5, "check": "Netwrix.Contractions", "message": "body"}
]
JSONEOF

bash "$SCRIPT_DIR/vale-autofix.sh" "$VIOLATIONS" > /dev/null

PASS=0
FAIL=0

if grep -qF "## Do Not Use the Old Method" "$FILE"; then
  PASS=$((PASS + 1))
else
  FAIL=$((FAIL + 1))
  echo "FAIL: heading text was modified"
  cat "$FILE"
fi

if grep -qF "Do not use this approach" "$FILE"; then
  FAIL=$((FAIL + 1))
  echo "FAIL: body line was not fixed"
elif grep -qF "Don't use this approach" "$FILE"; then
  PASS=$((PASS + 1))
else
  FAIL=$((FAIL + 1))
  echo "FAIL: body line has unexpected content"
  cat "$FILE"
fi

echo ""
echo "Results: $PASS passed, $FAIL failed"
if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
