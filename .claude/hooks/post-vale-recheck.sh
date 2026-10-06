#!/bin/bash
# PostToolUse hook (scoped to doc-pr skill): After a Bash command that looks
# like a vale fix, remind to re-check. This keeps the vale-fix-recheck loop
# automated within the doc-pr skill.
#
# Input: JSON on stdin with tool_name and tool_input fields

INPUT=$(cat)
# Read one field from the hook's JSON input. Uses node (always present in this repo); jq is not installed everywhere.
read_field() {
  echo "$INPUT" | node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{const v=process.argv[1].split(".").reduce((o,k)=>o?.[k],JSON.parse(d));process.stdout.write(v==null?"":String(v))}catch{}})' "$1"
}
TOOL_NAME=$(read_field tool_name)
COMMAND=$(read_field tool_input.command)

# Only act on Bash tool
if [ "$TOOL_NAME" != "Bash" ]; then
  exit 0
fi

# Only act when the command ran vale
if ! echo "$COMMAND" | grep -q "^vale "; then
  exit 0
fi

# Remind to check if issues remain
node -e 'console.log(JSON.stringify({hookSpecificOutput:{hookEventName:"PostToolUse",message:"Vale run complete. If issues were found, fix them and re-run vale until zero errors remain."}}))'
