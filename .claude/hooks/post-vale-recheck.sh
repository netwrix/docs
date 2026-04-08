#!/bin/bash
# PostToolUse hook (scoped to doc-pr skill): After a Bash command that looks
# like a vale fix, remind to re-check. This keeps the vale-fix-recheck loop
# automated within the doc-pr skill.
#
# Input: JSON on stdin with tool_name and tool_input fields

INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Only act on Bash tool
if [ "$TOOL_NAME" != "Bash" ]; then
  exit 0
fi

# Only act when the command ran vale
if ! echo "$COMMAND" | grep -q "^vale "; then
  exit 0
fi

# Remind to check if issues remain
jq -n '{
  hookSpecificOutput: {
    hookEventName: "PostToolUse",
    message: "Vale run complete. If issues were found, fix them and re-run vale until zero errors remain."
  }
}'
