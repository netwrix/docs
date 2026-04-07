---
name: doc-pr
description: "Orchestrate an editorial review for pull requests targeting dev. Reviews changed markdown files and posts a structured comment to the PR. Vale and Dale issues are auto-fixed separately by the vale-autofix workflow. Use this skill whenever a PR involves markdown files in docs/ and targets the dev branch — triggered automatically by the doc-pr GitHub Actions workflow on PR open, sync, or when invoked manually via /doc-pr."
argument-hint: "[changed-files-csv] [pr-number]"
---

# Doc PR Review

You orchestrate an editorial review for pull requests. Your job is to review changed files and post a comprehensive review comment to the PR.

Vale and Dale issues are auto-fixed separately by the vale-autofix workflow. Do not run Vale, Dale, or include their results in your review.

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

**Exclude KB files:** Skip any file under `docs/kb/`. KB articles have their own style conventions and are not subject to editorial review. If the file list contains only KB files, post a comment noting that no reviewable files were found and exit.

## Editorial Review

This stage applies the doc-help editing analysis to the PR changes — but non-interactively. You are producing a written review, not having a conversation.

1. Run `gh pr diff $DOC_PR_NUMBER` to get the diff
2. For each changed file, read the full file content
3. Analyze ONLY the added or modified lines (lines starting with `+` in the diff) against these priorities:

   **Structure** — Is the document organized so readers can find what they need? Can a reader scanning the page quickly find the section they need? For procedures, can someone follow it step by step? For explanatory content, does it build from simple to complex?

   **Clarity** — Is the content easy to understand? Can the reader follow the explanation without having to reread, guess at meaning, or fill in gaps?

   **Completeness** — After reading, can the reader do what they came to do? Are there gaps that would force them to search elsewhere or open a support ticket?

For each issue found, note:
- The file path and line number
- The priority category (Structure, Clarity, or Completeness)
- A specific description of the problem
- A concrete suggested fix

Only report issues on lines that were added or modified in this PR. Do not flag preexisting issues.

**Idiom tagging:** When the editorial review catches an idiom or figurative expression, tag it with `[idiom]` at the start of the bullet so the fixer can identify it and add it to the Vale `Idioms.yml` rule. Example:

- **Surface** — [idiom] Line 42: "get the ball rolling" is an idiom. Suggested fix: "begin the process"

## Output — MANDATORY: Post as PR Comment

After completing the review, you MUST write the results to a file and post it as a PR comment. This is the most important step — the review is useless if it is not posted.

**Step 1: Write the review to a temporary file.**

Write the full review body to `/tmp/doc-pr-review.md` using the Write tool. Follow this structure exactly — the footer with `@claude` instructions MUST be included in every review:

```markdown
## Documentation PR Review

### Editorial Review

**path/to/file.md**

- **Structure** — Line N: description. Suggested fix: "..."
- **Clarity** — Line N: description. Suggested fix: "..."
- **Completeness** — Line N: description. Suggested fix: "..."

(Repeat for each file. Write "No issues found." if clean.)

### Summary

N editorial suggestions across N files. Vale and Dale issues are auto-fixed separately.

---

**What to do next:**

Comment `@claude` on this PR followed by your instructions to get help:

- `@claude fix all issues` — fix all editorial issues
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
- Do not flag issues that Vale or Dale already catch (both auto-fixed separately) — focus on what linters miss
- If a file has zero editorial issues, still list it with "No issues found." so the reviewer knows it was checked
- Never modify the files — this is a read-only review
