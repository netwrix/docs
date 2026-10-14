#!/bin/bash
# PostToolUse hook (Edit|Write): remember which docs this session edited, so the Stop hook
# checks only those and never pushes Claude to rewrite someone else's draft on the branch.
# Appends the repo-relative path to "$TMPDIR/nwx-quality-files-<session>". Never blocks.

INPUT=$(cat)
node -e '
  let d = "";
  process.stdin.on("data", c => (d += c)).on("end", () => {
    try {
      const j = JSON.parse(d);
      const file = j.tool_input && j.tool_input.file_path;
      if (!["Edit", "Write"].includes(j.tool_name) || !file) return;
      const path = require("path"), fs = require("fs"), os = require("os");
      const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();
      const rel = path.relative(root, path.resolve(root, file)).split(path.sep).join("/");
      if (!/^docs\/.*\.mdx?$/.test(rel) || /(^|\/)(CLAUDE|SKILL)\.md$/.test(rel)) return;
      const session = String(j.session_id || "default");
      const list = path.join(process.env.TMPDIR || os.tmpdir(), "nwx-quality-files-" + session);
      const seen = fs.existsSync(list) ? fs.readFileSync(list, "utf8").split("\n") : [];
      if (!seen.includes(rel)) fs.appendFileSync(list, rel + "\n");
    } catch {}
  });
' <<< "$INPUT" 2>/dev/null
exit 0
