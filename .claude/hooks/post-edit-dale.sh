#!/bin/bash
# PostToolUse hook: After an Edit or Write to a docs/ markdown file,
# remind Claude to run the dale linter on the edited file.
#
# Input: JSON on stdin with tool_name and tool_input fields
# Output: JSON with context message for Claude (stdout on exit 0)

INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Only act on Edit or Write tools
if [ "$TOOL_NAME" != "Edit" ] && [ "$TOOL_NAME" != "Write" ]; then
  exit 0
fi

# Only act on markdown files in docs/
if [ -z "$FILE_PATH" ]; then
  exit 0
fi

if [[ "$FILE_PATH" != */docs/*.md ]] && [[ "$FILE_PATH" != docs/*.md ]]; then
  exit 0
fi

# Skip CLAUDE.md, SKILL.md, and style guide files
BASENAME=$(basename "$FILE_PATH")
if [ "$BASENAME" = "CLAUDE.md" ] || [ "$BASENAME" = "SKILL.md" ] || [ "$BASENAME" = "netwrix_style_guide.md" ]; then
  exit 0
fi

# Output a context message that Claude will see
jq -n --arg file "$FILE_PATH" '{
  hookSpecificOutput: {
    hookEventName: "PostToolUse",
    message: ("You just edited " + $file + ". Run /dale " + $file + " to check for dale linting issues.")
  }
}'
