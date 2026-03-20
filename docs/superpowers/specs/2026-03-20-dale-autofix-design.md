# Dale Auto-Fix Rework

**Date:** 2026-03-20
**Status:** Approved

## Problem

Dale (AI linter) currently detects violations and posts inline comments on PRs. Writers must manually fix them or ask `@claude`. This is the same report-and-explain flow that Vale used before we replaced it with auto-fix.

## Solution

Move Dale into the vale-autofix workflow as Phase 3. A single Claude Code action reads all Dale rules, reads changed files, fixes violations in-place (skipping uncertain fixes), and commits. The summary comment combines Vale and Dale fixes. The doc-pr workflow becomes editorial-review-only.

## Architecture

### Phase 3 — Dale auto-fix (added to vale-autofix.yml)

A single Claude Code action invocation that:
1. Reads all `.yml` rule files from `.claude/skills/dale/rules/`
2. Reads each changed markdown file (from `/tmp/changed-files.txt`)
3. Checks every line against each rule's "reason" field
4. Fixes violations in-place, preserving the author's meaning
5. Skips any fix it's not confident about
6. Writes a JSON summary to `/tmp/dale-summary.json`:
   ```json
   {
     "fixed": [
       {"path": "file.md", "line": 1, "rule": "passive-voice", "action": "brief description"}
     ],
     "skipped": [
       {"path": "file.md", "line": 1, "rule": "idioms", "reason": "why it was skipped"}
     ]
   }
   ```
7. Commits and pushes: `fix(dale): auto-fix documentation issues (AI-assisted)`

- Has `continue-on-error: true` (best-effort, same as Vale Phase 2)
- Runs after Vale Phase 2 re-run step, before the summary comment step
- Bot-check at the top of the workflow prevents re-triggering from the commit

### Updated summary comment

Renamed from "Vale Auto-Fix Summary" to "Auto-Fix Summary". Combines all phases:

```markdown
## Auto-Fix Summary

**28 issues fixed, 2 skipped across 3 files**

| Category | Fixes |
|----------|-------|
| Substitutions | 8 |
| Contractions | 4 |
| Removed filler | 3 |
| Rewrites (first person, weak link text, etc.) | 3 |
| Dale: passive-voice | 2 |
| Dale: misplaced-modifiers | 1 |
| Dale: wordiness | 1 |

| Skipped (needs manual review) | Reason |
|-------------------------------|--------|
| `docs/file.md:45` — Netwrix.WeakLinkText | Ambiguous link context |
| `docs/file.md:60` — Dale: idioms | Multiple possible rewrites |

Ask `@claude` on this PR if you'd like an explanation of any fix.
```

- Dale categories prefixed with `Dale:` to distinguish from Vale
- Skipped section includes both Vale and Dale skips
- Comment marker changes from "## Vale Auto-Fix Summary" to "## Auto-Fix Summary"

## Files to Modify

| File | Changes |
|------|---------|
| `.github/workflows/vale-autofix.yml` | Add Phase 3 (Dale auto-fix step). Update summary step to merge Dale results. Rename comment from "Vale Auto-Fix Summary" to "Auto-Fix Summary". Update comment deletion to match new marker. |
| `.github/workflows/claude-doc-pr.yml` | Remove "Run Dale linting" step. Remove "Post Dale inline comments" step. Remove Dale review dismissal from cleanup. Update editorial review prompt to remove Dale context/references/commands. Update followup cleanup to remove Dale thread resolution and review dismissal. |
| `.claude/skills/doc-pr/SKILL.md` | Remove Dale linting stage. Update description to editorial-only. Remove Dale from behavioral notes. Update summary line. Remove Dale-related `@claude` commands. |
| `.claude/skills/doc-pr-fix/SKILL.md` | Remove "Fix only Dale issues" pattern. Change "Fix all issues" to editorial-only. Remove Dale task examples. Remove Dale-specific bullet in Step 4. Update scope and behavioral notes. |
| `CLAUDE.md` | Update CI/CD table: vale-autofix.yml now covers Vale + Dale. claude-doc-pr.yml is editorial review only. |
| `docs/CLAUDE.md` | Update CI/CD Context: auto-fix covers Vale + Dale. Doc PR review is editorial only. |
| `CONTRIBUTING.md` | Update PR description paragraph to mention Dale auto-fix alongside Vale. |
