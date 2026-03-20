# Dale Auto-Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move Dale linting from report-only (inline PR comments) to auto-fix, integrated as Phase 3 of the existing vale-autofix workflow.

**Architecture:** A single Claude Code action invocation reads Dale rules, reads changed files, fixes violations in-place, skips uncertain fixes, writes a summary JSON, and commits. The doc-pr workflow becomes editorial-review-only.

**Tech Stack:** GitHub Actions, Claude Code GitHub Action (`anthropics/claude-code-action@v1`)

**Spec:** `docs/superpowers/specs/2026-03-20-dale-autofix-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `.github/workflows/vale-autofix.yml` | Modify | Add Phase 3 (Dale), update summary step, rename comment marker |
| `.github/workflows/claude-doc-pr.yml` | Modify | Remove Dale linting + inline comments, update to editorial-only |
| `.claude/skills/doc-pr/SKILL.md` | Modify | Remove Dale linting stage, update to editorial-only |
| `.claude/skills/doc-pr-fix/SKILL.md` | Modify | Remove Dale fix logic, update to editorial-only |
| `CLAUDE.md` | Modify | Update CI/CD table descriptions |
| `docs/CLAUDE.md` | Modify | Update CI/CD context and Dale section |
| `CONTRIBUTING.md` | Modify | Update PR description paragraph |

---

### Task 1: Add Phase 3 (Dale auto-fix) to vale-autofix.yml

**Files:**
- Modify: `.github/workflows/vale-autofix.yml`

- [ ] **Step 1: Add Phase 3 step after Phase 2**

Insert a new step between the Phase 2 step (line 195) and the "Build and post summary comment" step. The step should be:

```yaml
      - name: Phase 3 — Dale fixes
        id: phase3
        if: steps.bot-check.outputs.skip != 'true' && steps.changed-files.outputs.count > 0
        continue-on-error: true
        uses: anthropics/claude-code-action@v1
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          github_token: ${{ secrets.GITHUB_TOKEN }}
          show_full_output: true
          prompt: |
            You are Dale, a documentation fixer. Your job is to find and fix documentation style issues using Dale rules.

            Read docs/CLAUDE.md for Netwrix writing standards before making any changes.

            INSTRUCTIONS:

            Step 1: Read every .yml rule file in .claude/skills/dale/rules/

            Step 2: Read the list of changed files from /tmp/changed-files.txt (one file path per line).

            Step 3: Read each changed file. For each file, check every line against each rule's "reason" field.

            Step 4: Fix each violation in-place, preserving the author's meaning. If you are NOT confident in a fix (ambiguous context, multiple valid interpretations, fix would change meaning), SKIP it.

            Step 5: Write a JSON summary to /tmp/dale-summary.json with this structure:
            ```json
            {
              "fixed": [
                {"path": "file.md", "line": 1, "rule": "passive-voice", "action": "brief description of fix"}
              ],
              "skipped": [
                {"path": "file.md", "line": 1, "rule": "idioms", "reason": "why it was skipped"}
              ]
            }
            ```
            If no issues found, write: {"fixed": [], "skipped": []}

            Step 6: Stage and commit your changes:
            ```bash
            git add -A docs/
            git commit -m "fix(dale): auto-fix documentation issues (AI-assisted)"
            git push
            ```

            IMPORTANT: Write the summary JSON file BEFORE committing. Do not post any PR comments.
          claude_args: '--allowedTools "Bash(git:*),Read,Write,Edit,Glob,Grep"'
```

- [ ] **Step 2: Update the summary step condition**

Change the `if:` condition on the "Build and post summary comment" step from:
```
if: steps.bot-check.outputs.skip != 'true' && steps.vale-initial.outputs.total > 0
```
to:
```
if: steps.bot-check.outputs.skip != 'true' && steps.changed-files.outputs.count > 0
```

This ensures the summary posts when Dale found issues even if Vale found 0. The step already handles the case where all counts are 0 — it would post "0 issues fixed" which is harmless, and the `TOTAL_FIXED > 0` check inside the step controls whether the table is shown.

- [ ] **Step 3: Add Dale stats collection to the summary step**

In the "Build and post summary comment" step's `run:` block, after the Phase 2 stats collection (after the `fi` that closes the `if [ -f /tmp/phase2-summary.json ]` block), add:

```bash
          # Collect Phase 3 (Dale) stats
          DALE_FIXED=0
          DALE_SKIPPED=0
          DALE_BODY=""
          DALE_SKIPPED_BODY=""
          if [ -f /tmp/dale-summary.json ]; then
            DALE_FIXED=$(jq '.fixed | length' /tmp/dale-summary.json)
            DALE_SKIPPED=$(jq '.skipped | length' /tmp/dale-summary.json)

            if [ "$DALE_FIXED" -gt 0 ]; then
              DALE_BODY=$(jq -r '
                [.fixed[] | .rule] | group_by(.) | .[] |
                "| Dale: \(.[0]) | \(length) |"
              ' /tmp/dale-summary.json)
            fi

            if [ "$DALE_SKIPPED" -gt 0 ]; then
              DALE_SKIPPED_BODY=$(jq -r '
                .skipped[] |
                "| `\(.path):\(.line)` — Dale: \(.rule) | \(.reason) |"
              ' /tmp/dale-summary.json)
            fi
          fi
```

- [ ] **Step 4: Update the totals calculation**

Change:
```bash
          TOTAL_FIXED=$((PHASE1_TOTAL + PHASE2_FIXED))
          TOTAL_SKIPPED=$PHASE2_SKIPPED
```
to:
```bash
          TOTAL_FIXED=$((PHASE1_TOTAL + PHASE2_FIXED + DALE_FIXED))
          TOTAL_SKIPPED=$((PHASE2_SKIPPED + DALE_SKIPPED))
```

- [ ] **Step 5: Add Dale rows to the summary comment body**

In the summary comment building block, after the Phase 2 body insertion (`if [ -n "$PHASE2_BODY" ]`), add:
```bash
              if [ -n "$DALE_BODY" ]; then
                echo "$DALE_BODY"
              fi
```

And after the existing skipped body insertion, add:
```bash
              if [ -n "$DALE_SKIPPED_BODY" ]; then
                echo "$DALE_SKIPPED_BODY"
              fi
```

- [ ] **Step 6: Rename the comment marker**

Change the heading in the summary comment from:
```bash
            echo "## Vale Auto-Fix Summary"
```
to:
```bash
            echo "## Auto-Fix Summary"
```

And update the deletion query to match. Change:
```bash
            --jq '[.[] | select(.user.login == "github-actions[bot]" and (.body | contains("## Vale Auto-Fix Summary"))) | .id] | .[]' 2>/dev/null || true)
```
to:
```bash
            --jq '[.[] | select(.user.login == "github-actions[bot]" and (.body | contains("## Auto-Fix Summary"))) | .id] | .[]' 2>/dev/null || true)
```

- [ ] **Step 7: Commit**

```bash
git add .github/workflows/vale-autofix.yml
git commit -m "feat: add Dale auto-fix as Phase 3 in vale-autofix workflow

Dale violations are now auto-fixed alongside Vale issues.
Summary comment renamed to Auto-Fix Summary."
```

---

### Task 2: Remove Dale from claude-doc-pr.yml

**Files:**
- Modify: `.github/workflows/claude-doc-pr.yml`

- [ ] **Step 1: Remove Dale review dismissal from the doc-review job**

In the "Delete previous bot comments" step (lines 56-74), remove lines 68-74 (the Dale review dismissal block):
```yaml
          # Dismiss previous bot reviews (Dale) so they don't pile up
          REVIEW_IDS=$(gh api repos/${{ github.repository }}/pulls/${PR_NUMBER}/reviews \
            --jq '[.[] | select(.user.login == "github-actions[bot]" and .state == "COMMENTED" and (.body | contains("Dale found"))) | .id] | .[]' 2>/dev/null || true)
          for ID in $REVIEW_IDS; do
            gh api repos/${{ github.repository }}/pulls/${PR_NUMBER}/reviews/${ID}/dismissals \
              -f message="Superseded by new review" -f event="DISMISS" 2>/dev/null || true
          done
```

- [ ] **Step 2: Remove the "Run Dale linting" step**

Delete the entire step (lines 76-111):
```yaml
      - name: Run Dale linting
        id: dale
        ...
          claude_args: '--allowedTools "Read,Write,Glob"'
```

- [ ] **Step 3: Remove the "Post Dale inline comments" step**

Delete the entire step (lines 113-138):
```yaml
      - name: Post Dale inline comments
        id: dale-post
        ...
          fi
```

- [ ] **Step 4: Update the editorial review prompt**

In the "Run editorial review" step prompt:

Remove the Dale context line:
```
            - Dale issues: ${{ steps.dale-post.outputs.dale_count }} (already posted as inline comments)
```

Change the NOTE line from:
```
            NOTE: Vale issues are auto-fixed separately by the vale-autofix workflow. Do not run Vale or include Vale issues in this review.
```
to:
```
            NOTE: Vale and Dale issues are auto-fixed separately by the vale-autofix workflow. Do not run Vale, Dale, or include their issues in this review.
```

Remove the instruction:
```
            Do NOT duplicate issues already caught by Dale — focus on what linters miss.
```
Replace with:
```
            Do NOT duplicate issues already caught by Vale or Dale (both auto-fixed separately) — focus on what linters miss.
```

Update the summary line in the output template from:
```
            N Dale issues (see inline comments), N editorial suggestions across N files.
```
to:
```
            N editorial suggestions across N files. Vale and Dale issues are auto-fixed separately.
```

Replace the "What to do next" command examples with:
```
            - `@claude fix all issues` — fix all editorial issues
            - `@claude reorganize the prerequisites section`
            - `@claude help improve the flow of this document`
```

- [ ] **Step 5: Remove Dale from the doc-followup cleanup step**

Delete the entire "Resolve inline comments and dismiss old reviews" step (lines 283-318) since it only handled Dale threads and reviews. There are no more Dale inline comments to clean up.

- [ ] **Step 6: Remove `Skill(dale)` from the doc-followup Claude args**

In the "Handle @claude request" step, change:
```
          claude_args: '--max-turns 50 --allowedTools "Bash(gh:*),Bash(git:*),Read,Write,Edit,Glob,Grep,Skill(doc-pr-fix),Skill(dale),Skill(doc-help)"'
```
to:
```
          claude_args: '--max-turns 50 --allowedTools "Bash(gh:*),Bash(git:*),Read,Write,Edit,Glob,Grep,Skill(doc-pr-fix),Skill(doc-help)"'
```

- [ ] **Step 7: Commit**

```bash
git add .github/workflows/claude-doc-pr.yml
git commit -m "update: remove Dale linting from doc-pr workflow

Dale issues are now auto-fixed by the vale-autofix workflow.
Doc-pr workflow is now editorial review only."
```

---

### Task 3: Update the doc-pr skill

**Files:**
- Modify: `.claude/skills/doc-pr/SKILL.md`

- [ ] **Step 1: Update the frontmatter description**

Change from:
```
description: "Orchestrate a documentation review for pull requests targeting dev. Runs Dale linting and editorial review on changed markdown files, then posts a structured comment to the PR. Vale issues are auto-fixed separately by the vale-autofix workflow. Use this skill whenever a PR involves markdown files in docs/ and targets the dev branch — triggered automatically by the doc-pr GitHub Actions workflow on PR open, sync, or when invoked manually via /doc-pr."
```
to:
```
description: "Orchestrate an editorial review for pull requests targeting dev. Reviews changed markdown files and posts a structured comment to the PR. Vale and Dale issues are auto-fixed separately by the vale-autofix workflow. Use this skill whenever a PR involves markdown files in docs/ and targets the dev branch — triggered automatically by the doc-pr GitHub Actions workflow on PR open, sync, or when invoked manually via /doc-pr."
```

- [ ] **Step 2: Update the intro paragraphs**

Change line 9 from:
```
You orchestrate a two-stage documentation review pipeline for pull requests. Your job is to run each stage, collect the results, and post a single comprehensive review comment to the PR.
```
to:
```
You orchestrate an editorial review for pull requests. Your job is to review changed files and post a comprehensive review comment to the PR.
```

Change line 11 from:
```
Vale issues are auto-fixed separately by the vale-autofix workflow. Do not run Vale or include Vale results in your review.
```
to:
```
Vale and Dale issues are auto-fixed separately by the vale-autofix workflow. Do not run Vale, Dale, or include their results in your review.
```

- [ ] **Step 3: Remove the entire "Stage 1: Dale Linting" section**

Delete the entire section from `## Stage 1: Dale Linting` through the end of the Dale content (lines 31-39).

- [ ] **Step 4: Rename "Stage 2: Editorial Review" to just "Editorial Review"**

Change `## Stage 2: Editorial Review` to `## Editorial Review`.

- [ ] **Step 5: Update the Surface analysis line**

Change:
```
   **Surface** — Word choice, wordiness, redundancy? Anything Vale or Dale might miss?
```
to:
```
   **Surface** — Word choice, wordiness, redundancy? Anything the auto-fix linters might miss?
```

- [ ] **Step 6: Update the KB exclusion note**

Change:
```
KB articles have their own style conventions and are not subject to Dale linting or editorial review.
```
to:
```
KB articles have their own style conventions and are not subject to editorial review.
```

- [ ] **Step 7: Update the output template**

Remove the entire "### Dale Linting" section from the output template (lines 80-88).

Change the `## Documentation PR Review` heading to be followed directly by `### Editorial Review`.

Update the summary line from:
```
N Dale issues, N editorial suggestions across N files. Vale issues are auto-fixed separately.
```
to:
```
N editorial suggestions across N files. Vale and Dale issues are auto-fixed separately.
```

Remove `@claude fix all issues` line (or change it to reference editorial issues only):
```
- `@claude fix all issues` — fix all editorial issues
```

- [ ] **Step 8: Update the behavioral notes**

Change:
```
- Do not flag issues that Vale or Dale already catch — focus on what linters miss
```
to:
```
- Do not flag issues that Vale or Dale already catch (both auto-fixed separately) — focus on what linters miss
```

Change:
```
- If a file has zero issues across both stages, still list it with "No issues found." so the reviewer knows it was checked
```
to:
```
- If a file has zero editorial issues, still list it with "No issues found." so the reviewer knows it was checked
```

- [ ] **Step 9: Commit**

```bash
git add .claude/skills/doc-pr/SKILL.md
git commit -m "update: remove Dale linting from doc-pr skill

Dale issues are now auto-fixed. Skill is now editorial review only."
```

---

### Task 4: Update the doc-pr-fix skill

**Files:**
- Modify: `.claude/skills/doc-pr-fix/SKILL.md`

- [ ] **Step 1: Update Step 1 (Understand the request)**

Remove:
```
- **Fix only Dale issues** — apply only Dale linting fixes
```

Change:
```
- **Fix all issues** — apply every fix from the doc-pr review comment (Dale + editorial)
```
to:
```
- **Fix all issues** — apply every fix from the doc-pr review comment (editorial)
```

- [ ] **Step 2: Update Step 2 (Gather context)**

Change line 38:
```
   This tells you what Dale and the editorial review flagged.
```
to:
```
   This tells you what the editorial review flagged.
```

- [ ] **Step 3: Update Step 3 (Plan your work)**

Remove Dale task examples. Change:
```
- Fix Dale issues in `path/to/file.md` (N issues)
- Apply editorial suggestions
```
to:
```
- Apply editorial suggestions in `path/to/file.md`
```

Do the same in the progress comment example (lines 55-62) and the final summary example in Step 7 (lines 113-126).

Change the scope note from:
```
Only include tasks for what the writer actually asked for. If they said "fix only the Dale issues," your task list should contain Dale fixes, verify, and commit — no editorial tasks. The task list must reflect the writer's request exactly.
```
to:
```
Only include tasks for what the writer actually asked for. The task list must reflect the writer's request exactly.
```

- [ ] **Step 4: Update Step 4 (Apply fixes)**

Remove the Dale-specific bullet:
```
- For **Dale fixes**: fix each flagged issue in order, file by file
```

Change the scope note:
```
- Only change what was requested; don't fix other categories of issues even if they're on the same line (e.g., if asked to fix Dale issues, don't also fix editorial issues)
```
to:
```
- Only change what was requested; don't fix unrelated issues even if they're on the same line
```

- [ ] **Step 5: Update the Behavioral Notes**

Change:
```
- **Never fix issues the writer didn't ask about.** If they said "fix the Dale issues," only fix Dale issues — don't also fix editorial issues or rewrite sentences for clarity, even if the fix is on the same line.
```
to:
```
- **Never fix issues the writer didn't ask about.** Only fix what was requested — don't rewrite sentences for clarity or fix unrelated issues, even if they're on the same line.
```

- [ ] **Step 6: Commit**

```bash
git add .claude/skills/doc-pr-fix/SKILL.md
git commit -m "update: remove Dale fix logic from doc-pr-fix skill

Dale issues are now auto-fixed. Skill handles editorial fixes only."
```

---

### Task 5: Update project documentation

**Files:**
- Modify: `CLAUDE.md`
- Modify: `docs/CLAUDE.md`
- Modify: `CONTRIBUTING.md`

- [ ] **Step 1: Update `CLAUDE.md` CI/CD table**

Change the `vale-autofix.yml` row from:
```
| `vale-autofix.yml` | PRs with `.md` changes | Auto-fix Vale issues (script + AI), post summary comment |
```
to:
```
| `vale-autofix.yml` | PRs with `.md` changes | Auto-fix Vale + Dale issues (script + AI), post summary comment |
```

Change the `claude-doc-pr.yml` row from:
```
| `claude-doc-pr.yml` | PRs to dev with `docs/` changes | Dale + editorial review; `@claude` follow-up |
```
to:
```
| `claude-doc-pr.yml` | PRs to dev with `docs/` changes | Editorial review; `@claude` follow-up |
```

Also update the Skills table: change the `/doc-pr` description from:
```
| `/doc-pr` | Skill | Automated PR review (Dale + editorial) |
```
to:
```
| `/doc-pr` | Skill | Automated PR editorial review |
```

- [ ] **Step 2: Update `docs/CLAUDE.md`**

Change the Dale section heading and content. Replace:
```
### Dale (PR review)

Dale is an AI linter that runs during PR review. It catches issues that regex-based Vale rules can't — passive voice, misplaced modifiers, idioms, wordiness, and other context-dependent patterns. Dale rules are in `.claude/skills/dale/rules/`.

Run Dale locally with `/dale <file>`.
```
with:
```
### Dale

Dale is an AI linter that catches issues regex-based Vale rules can't — passive voice, misplaced modifiers, idioms, wordiness, and other context-dependent patterns. Dale rules are in `.claude/skills/dale/rules/`. Dale issues are auto-fixed on PRs alongside Vale by the `vale-autofix` workflow.

Run Dale locally with `/dale <file>`.
```

Update the CI/CD Context section. Change:
```
**Vale (auto-fix)** — Runs on PRs to `dev` with docs changes. Automatically fixes Vale issues in two phases (script for mechanical rules, Claude for judgment-based rules) and posts a summary comment. No inline comments.

**Doc PR review** — Runs on PRs to `dev` with docs changes. Posts Dale inline comments and an editorial review summary. Does not block merges.
```
to:
```
**Auto-fix (Vale + Dale)** — Runs on PRs to `dev` with docs changes. Automatically fixes Vale issues (script for mechanical rules, Claude for judgment-based rules) and Dale issues (Claude), then posts a summary comment. No inline comments.

**Doc PR review** — Runs on PRs to `dev` with docs changes. Posts an editorial review summary. Does not block merges.
```

- [ ] **Step 3: Update `CONTRIBUTING.md`**

Change line 65:
```
After you open a PR, Vale issues are auto-fixed and a summary is posted. Dale linting (AI-powered) and an editorial review also run and post results as PR comments. To get help with Dale or editorial suggestions, comment `@claude` on the PR followed by your request.
```
to:
```
After you open a PR, Vale and Dale issues are auto-fixed and a summary is posted. An editorial review also runs and posts results as a PR comment. To get help with editorial suggestions, comment `@claude` on the PR followed by your request.
```

Update the "Linting with Dale" section (lines 149-156). Change:
```
Dale is an AI linter that runs automatically during PR review. It catches context-dependent issues that regex-based Vale can't — passive voice, misplaced modifiers, idioms, wordiness, and other patterns. Dale results are posted as PR comments alongside the editorial review.

Run Dale locally on any markdown file to catch context-dependent writing issues before pushing:
```
to:
```
Dale is an AI linter that catches context-dependent issues that regex-based Vale can't — passive voice, misplaced modifiers, idioms, wordiness, and other patterns. Dale issues are auto-fixed on PRs alongside Vale.

Run Dale locally on any markdown file to preview context-dependent issues:
```

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md docs/CLAUDE.md CONTRIBUTING.md
git commit -m "docs: update all references to reflect Dale auto-fix flow

Dale issues are now auto-fixed alongside Vale. Doc-pr workflow
is editorial review only."
```

---

### Task 6: End-to-end verification

- [ ] **Step 1: Verify no stale Dale inline comment references remain**

```bash
grep -r "Dale inline" --include="*.md" --include="*.yml" .
grep -r "Dale.*inline comment" --include="*.md" --include="*.yml" .
grep -r "dale-post\|dale_count\|dale-results" --include="*.yml" .
grep -r "Dale found" --include="*.yml" .
grep -r "fix only the Dale" --include="*.md" .
```

Expected: No results (or only spec/plan files).

- [ ] **Step 2: Verify the workflow files are valid**

Check that `vale-autofix.yml` has the Phase 3 step and `claude-doc-pr.yml` no longer has Dale steps.

- [ ] **Step 3: Spot-check updated skills and docs for consistency**

Read through each updated file to verify all Dale references are updated appropriately and no stale references remain.
