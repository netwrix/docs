#!/bin/bash
# PostToolUse hook: After an Edit or Write to a docs/ markdown file,
# remind Claude to run the dale linter on the edited file.
#
# Input: JSON on stdin with tool_name and tool_input fields
# Output: JSON with context message for Claude (stdout on exit 0)

INPUT=$(cat)
# Read one field from the hook's JSON input. Uses node (always present in this repo); jq is not installed everywhere.
read_field() {
  echo "$INPUT" | node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{const v=process.argv[1].split(".").reduce((o,k)=>o?.[k],JSON.parse(d));process.stdout.write(v==null?"":String(v))}catch{}})' "$1"
}
TOOL_NAME=$(read_field tool_name)
FILE_PATH=$(read_field tool_input.file_path)

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
node -e 'const f=process.argv[1];console.log(JSON.stringify({hookSpecificOutput:{hookEventName:"PostToolUse",message:"You just edited "+f+". Run /dale "+f+" to check for dale linting issues."}}))' "$FILE_PATH"
