# Vale Auto-Fix Rework

**Date:** 2026-03-19
**Status:** Approved

## Problem

The current Vale linting flow reports violations but doesn't fix them:
- Pre-push hook warns about Vale issues (non-blocking)
- PR workflow posts up to 25 inline review comments + a summary table
- Authors must manually fix issues or ask `@claude`

This creates friction. Writers don't need explanations for each error — they need the errors fixed.

## Solution

Replace the report-and-explain flow with an auto-fix flow:
1. Remove the pre-push hook entirely
2. Replace the PR workflow with a two-phase auto-fix workflow
3. Post a high-level summary comment listing fixes by category
4. No inline comments

## Architecture

### Two-Phase Auto-Fix

**Phase 1 — Script fixes (deterministic):**
A bash script (`scripts/vale-autofix.sh`) handles 18 mechanical rules (~60% of all rules):

Substitutions (12 rules):
- `drop-down` / `drop down` → `dropdown`
- `check box` → `checkbox`
- `click on` → `click`
- `in order to` → `to`
- `make sure` → `ensure`
- `utilize` → `use`
- Contractions (`do not` → `don't`, etc.)
- `is able to` → `can`, `was able to` → `could`
- `login to` → `log in to`
- `to setup` → `to set up`
- `provides the ability to` → `lets you`
- `wish to` → `want to`

Removals (6 rules):
- `please` (in instruction context)
- Double spaces
- Temporal hedges (`currently`, `presently`, etc.)
- Latin abbreviations (`e.g.` → `for example`, etc.)
- Parenthetical plurals (`item(s)`)
- `aforementioned`

The script:
- Takes a list of files as arguments
- Runs Vale in JSON mode to get violations with rule names and line numbers
- Only fixes violations Vale actually reported (not blind global sed)
- Outputs a JSON summary of fixes (rule name + count)

**Phase 2 — Claude fixes (AI judgment):**
Claude Code GitHub Action handles 12 rules requiring context:
- First person rewrites (singular and plural)
- Weak link text
- Oxford comma insertion
- Idiom replacement
- Heading punctuation
- `allows you to` rewrites
- Boilerplate cross-references
- `note that` → admonition blocks
- `once` temporal usage → `After`/`When`
- `follow the steps to` rewrites
- Repeated words

Claude:
- Receives remaining Vale violations (file, line, rule, message)
- Fixes each one in-place
- Skips any fix it's not confident about
- Outputs structured JSON of fixes and skips (rule + count + reason for skips)

### Scope

The workflow fixes **all Vale issues in every touched file**, not just issues on changed lines. This is simpler (no diff parsing) and improves files over time.

### Workflow Structure

New file: `.github/workflows/vale-autofix.yml`

```
Trigger: PR opened/synchronized targeting dev
         paths: docs/**/*.md (excluding CLAUDE.md, SKILL.md, docs/kb/**)

Permissions: contents write, pull-requests write

Jobs:
  vale-autofix:
    steps:
      1. Checkout PR branch (with token that allows pushing)
      2. Get changed .md files (gh pr diff, same filtering as today)
      3. Exit early if no matching files
      4. Install Vale binary
      5. Run Vale JSON on changed files → violations.json
      6. Exit early if no violations
      7. Phase 1: Run scripts/vale-autofix.sh on violations.json
      8. Commit Phase 1 fixes (if any changes)
      9. Re-run Vale JSON on same files → remaining-violations.json
     10. Phase 2: Claude Code action with remaining violations as prompt
     11. Commit Phase 2 fixes (if any changes)
     12. Post/update summary comment
```

- Uses a PAT or GitHub App token (not `GITHUB_TOKEN`) so pushes trigger other workflows
- Bot identity commits with messages like `fix(vale): auto-fix substitutions` and `fix(vale): auto-fix rewrites`
- Replaces any previous Vale Auto-Fix comment on the same PR

### Summary Comment Format

```markdown
## Vale Auto-Fix Summary

**22 issues fixed, 2 skipped across 3 files**

| Category | Fixes |
|----------|-------|
| Substitutions (dropdown, checkbox, etc.) | 8 |
| Contractions (do not → don't, etc.) | 4 |
| Removed filler (please, currently, etc.) | 3 |
| Latin abbreviations (e.g. → for example, etc.) | 2 |
| Spacing | 1 |
| Rewrites (first person, weak link text, etc.) | 4 |

| Skipped (needs manual review) | Reason |
|-------------------------------|--------|
| `docs/accessanalyzer/12.0/install.md:45` — Netwrix.WeakLinkText | Ambiguous link context |
| `docs/accessanalyzer/12.0/install.md:120` — Netwrix.Idioms | Multiple possible replacements |

Ask `@claude` on this PR if you'd like an explanation of any fix.
```

## Files to Remove

| File | Reason |
|------|--------|
| `.husky/pre-push` | Vale pre-push hook no longer needed |
| `.github/workflows/vale-linter.yml` | Replaced by `vale-autofix.yml` |

## Files to Add

| File | Purpose |
|------|---------|
| `scripts/vale-autofix.sh` | Deterministic Phase 1 script for mechanical Vale fixes |
| `.github/workflows/vale-autofix.yml` | Two-phase auto-fix workflow |

## Files to Update

| File | Changes |
|------|---------|
| `.claude/skills/doc-pr-fix/SKILL.md` | Remove all Vale fix logic (finding Vale comments, Vale fix tasks, Step 4b). Keep Dale and editorial fix logic. Remove "fix only the Vale issues" command. |
| `.claude/skills/doc-pr/SKILL.md` | Update Vale references: auto-fixed by `vale-autofix` workflow, not inline comments. Remove `@claude fix only the Vale issues` command. Update `@claude fix all issues` to cover Dale + editorial only. |
| `CLAUDE.md` | Update CI/CD workflows table: remove `vale-linter.yml`, add `vale-autofix.yml` |
| `CONTRIBUTING.md` | Remove Vale pre-push warning references, mention auto-fix on PRs |
| `README.md` | Remove Vale pre-push warning references if present |
| `docs/CLAUDE.md` | Update if it references Vale PR workflow |
