---
name: doc-pr
description: "Orchestrate a full documentation review for pull requests targeting dev. Runs Vale linting, Dale linting, and editorial review on changed markdown files, then posts a structured comment to the PR. Use this skill whenever a PR involves markdown files in docs/ and targets the dev branch — triggered automatically by the doc-pr GitHub Actions workflow on PR open, sync, or when invoked manually via /doc-pr."
argument-hint: "[changed-files-csv] [pr-number]"
---

# Doc PR Review

You orchestrate a three-stage documentation review pipeline for pull requests. Your job is to run each stage, collect the results, and post a single comprehensive review comment to the PR.

Read `docs/CLAUDE.md` before starting — it contains the writing standards and Vale guidance you need for the editorial review stage.

## Input

Get the file list, PR number, and repo from environment variables:

```bash
echo "Files: $DOC_PR_FILES"
echo "PR: $DOC_PR_NUMBER"
echo "Repo: $DOC_PR_REPO"
```

If the environment variables are empty, check for positional arguments (`$1` = files CSV, `$2` = PR number). If those are also missing, use `gh pr view` and `gh pr diff` to determine the changed files and PR number from the current branch context.

Split the comma-separated file list into individual file paths for processing.

## Stage 1: Vale Linting

Run Vale on each changed file and capture the output.

```bash
vale --output=line <file>
```

Collect all Vale output. If Vale finds no issues for a file, note that file as clean. If Vale is not installed, report that Vale was unavailable and skip to Stage 2.

## Stage 2: Dale Linting

For each changed file, invoke the Dale linter skill:

```
/dale <file>
```

Dale returns a table of rule violations or a clean report. Collect all Dale output.

## Stage 3: Editorial Review

This stage applies the doc-help editing analysis to the PR changes — but non-interactively. You are producing a written review, not having a conversation.

1. Run `gh pr diff $DOC_PR_NUMBER` to get the diff
2. For each changed file, read the full file content
3. Analyze ONLY the added or modified lines (lines starting with `+` in the diff) against these four priorities:

   **Structure** — Is the order logical? Does the overview set up what follows? Are heading levels correct?

   **Clarity** — Are there sentences that are hard to parse? Concepts introduced without examples? Ambiguous references?

   **Voice** — Passive constructions, first person, impersonal phrases, condescending language? Does it follow Netwrix style (active voice, present tense, second person for procedures)?

   **Surface** — Word choice, wordiness, redundancy? Anything Vale or Dale might miss?

For each issue found, note:
- The file path and line number
- The priority category (Structure, Clarity, Voice, or Surface)
- A specific description of the problem
- A concrete suggested fix

Only report issues on lines that were added or modified in this PR. Do not flag preexisting issues.

## Output — MANDATORY: Post as PR Comment

After completing all three stages, you MUST write the review to a file and post it as a PR comment. This is the most important step — the review is useless if it is not posted.

**Step 1: Write the review to a temporary file.**

Write the full review body to `/tmp/doc-pr-review.md` using the Write tool. Follow this structure:

```markdown
## Documentation PR Review

### Vale Linting

**path/to/file.md**

| Line | Rule | Message | Offending Text |
|------|------|---------|----------------|
| N | `RuleName` | description of the issue | `offending text` |

(Repeat for each file. Write "No issues found." if clean.)

### Dale Linting

**path/to/file.md**

| Line | Rule | Message | Offending Text |
|------|------|---------|----------------|
| N | `rule-name` | description of the issue | `offending text` |

(Repeat for each file. Write "No issues found." if clean.)

### Editorial Review

**path/to/file.md**

- **Structure** — Line N: description. Suggested fix: "..."
- **Clarity** — Line N: description. Suggested fix: "..."
- **Voice** — Line N: description. Suggested fix: "..."

(Repeat for each file. Write "No issues found." if clean.)

### Summary

N Vale issues, N Dale issues, N editorial suggestions across N files.

---

**What to do next:**

Comment `@claude` on this PR followed by your instructions to get help:

- `@claude fix all issues` — fix all Vale, Dale, and editorial issues
- `@claude fix only the Vale issues` — fix just the linting problems
- `@claude help improve the flow of this document` — get writing assistance
- `@claude explain the voice issues` — understand why something was flagged

You can ask Claude anything about the review or about Netwrix writing standards.

> Automated fixes are only available for branches in this repository, not forks.
```

**Step 2: Post the comment.**

```bash
gh pr comment $DOC_PR_NUMBER --repo $DOC_PR_REPO --body-file /tmp/doc-pr-review.md
```

If the `gh pr comment` command fails, report the error. Do NOT end your turn without attempting to post.

## Behavioral Notes

- Be thorough but not pedantic — focus on issues that genuinely affect reader comprehension or violate Netwrix standards
- When Vale and your editorial review flag the same issue, include it only in the Vale section (Vale is more specific)
- If a file has zero issues across all three stages, still list it with "No issues found." so the reviewer knows it was checked
- Never modify the files — this is a read-only review
