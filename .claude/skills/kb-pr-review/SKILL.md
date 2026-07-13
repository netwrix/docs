# KB PR Review Skill

## Purpose

Reviews a GitHub PR for KB article quality. For each changed KB file, runs Vale (NetwrixKB styles), applies Dale prose rules, and performs a Derek KB writing quality review. Presents findings to the reviewer, applies fixes with approval, then drafts a concise PR review comment for the reviewer to copy/paste into GitHub.

## Invocation

```
/kb-pr-review <PR number or URL>
```

Examples:
- `/kb-pr-review 812`
- `/kb-pr-review https://github.com/netwrix/docs/pull/812`

---

## Instructions

Follow every step in order. Do not skip steps or reorder them.

---

### Step 0 — Confirm context

Confirm you are at the docs repo root before proceeding:

```bash
git rev-parse --show-toplevel
```

If the returned path is not your local `netwrix/docs` clone root, `cd` to that root before continuing. All paths below are relative to this root.

---

### Step 1 — Parse the PR number

Extract the PR number from the invocation argument. Accept either a bare integer (`812`) or a full GitHub pull request URL. Store it as `PR`.

---

### Step 2 — Get PR metadata

```bash
gh pr view <PR> --json number,title,author,headRefName,baseRefName,body
```

Note the head branch name — you will need it in Step 4.

---

### Step 3 — Identify changed KB files

```bash
gh pr diff <PR> --name-only | grep "^docs/kb/.*\.md$"
```

- If this returns no files, output: `No KB files changed in PR #<PR>.` and stop.
- Store the list of files as `KB_FILES`.

---

### Step 4 — Prepare a clean working tree, refresh dev, and check out the PR

Reviews should start from a clean working tree so uncommitted work does not silently travel onto other branches. Check the working tree first:

```bash
git status
```

If there are uncommitted changes (tracked or untracked), pause and ask the reviewer:

> Your working tree has uncommitted changes. Stash them and continue? Answering yes will run `git stash push -u -m "pre-kb-pr-review"` so you have a clean tree for the review; you can restore the work with `git stash pop` after Step 13. Answering no will stop the skill so you can commit or handle the changes manually.

If yes, stash before continuing:

```bash
git stash push -u -m "pre-kb-pr-review"
```

Refresh local dev, then check out the PR branch:

```bash
git checkout dev
git pull
gh pr checkout <PR>
```

`gh pr checkout` fetches the branch from remote if not already local and sets up proper tracking automatically. If checkout fails, stop and report the error to the user. Do not proceed with stale or missing file content.

Stay on the PR branch for the rest of the session. All fixes and commits will be made here.

**Remember:** if you stashed work in this step, remind the reviewer at the very end of the review (after Step 13) to run `git stash pop` to restore it. The stash message is `pre-kb-pr-review`.

---

### Step 5 — Validate file list and check placement

First, drop any files from `KB_FILES` that don't exist on disk. `gh pr diff --name-only` (Step 3) includes files deleted in the PR — after checkout those paths are gone, so Vale/Dale/Derek would error on them:

```bash
for f in $KB_FILES; do [ -f "$f" ] && echo "$f"; done
```

If any files were dropped, note them in the report under `Files deleted in PR (not reviewed):` and list the paths. If `KB_FILES` is empty after filtering, output: `All KB files in PR #<PR> were deletions — nothing to review.` and stop.

Then, for each remaining file in `KB_FILES`, check whether the path contains a nested `kb/` subfolder pattern inside a non-KB parent — for example `docs/kb/product/kb/article.md`. A file placed at any depth below a second `kb/` segment is misplaced.

Flag any such files with:

> ⚠️ **File placement issue:** `<path>` — file appears to be in a nested `kb/` subfolder. Expected location: `docs/kb/<product>/<article>.md`

---

### Step 6 — Run Vale on each file

Run Vale against each file in `KB_FILES`:

```bash
vale --config .vale.ini <file>
```

Capture the full output per file. `.vale.ini` scopes `BasedOnStyles = NetwrixKB` to `docs/kb/**/*.md`, which replaces (not merges with) the repo-wide `Netwrix` style — so KB files fire `NetwrixKB.*` rules only. Any KB-relevant checks from `Netwrix` are re-implemented in `NetwrixKB`.

If Vale is not installed or returns an error, note this in the report and continue to Step 7.

---

### Step 7 — Apply Dale rules to each file

Read all Dale rule files from `.claude/skills/dale/rules/*.yml`. Each rule has `name`, `description`, `severity`, `reason`, and `example` fields.

For each file in `KB_FILES`:
1. Read the full article content.
2. Apply every Dale rule semantically, the same way `/dale` would.
3. Record violations as: `rule-name | message | offending text (line reference if possible)`.

Dale handles: passive voice, vague language, business jargon, idioms, undefined acronyms, and similar prose-quality issues. Do not flag items already covered by Vale (contractions, heading case).

---

### Step 8 — Perform Derek KB quality review on each file

Read `kb_style_guide.md` from the repo root in full before beginning. Then, for each review area below, re-read the named section of the style guide and apply its rules to the article. The style guide is the source of truth — do not substitute your own rules.

For each file in `KB_FILES`:
1. Read the full article content.
2. Work through each area in the table below. For each area, read the named style guide section, then apply it to the article.

**Review areas:**

| Area | Read this section of `kb_style_guide.md` | Supplementary notes (not in the style guide) |
|------|------------------------------------------|-----------------------------------------------|
| **frontmatter** | **Frontmatter** (Required fields, The `tags: [kb]` requirement) | If `knowledge_article_id` is present but contains a placeholder value (e.g., `kA0Qk000000PLACEHOLDER`), flag it — the author must replace it with the real Salesforce ID or remove the field. Absence of the field is fine for natively written articles. `sidebar_label` must not be truncated vs. `title`. |
| **article-type** | **Article Types** | None. |
| **title-format** | **Article Titles** and the title format rules within **Article Types** | Do NOT flag `> **NOTE:**` blockquote callouts — this is correct KB format, not a Docusaurus `:::note` admonition. If a product component name appears in the title (e.g., a client, agent, or add-on) and is essential to distinguishing the article from others about the same product, flag it as a judgment call rather than a required fix. |
| **product-names** | **Product Names** | Always cross-check product IDs against `src/config/products.js` — the style guide table may be outdated. The config file is authoritative. |
| **keywords-quality** | **Frontmatter > Required fields > keywords** | If a keyword does not appear in the article body but is a plausible legacy or alternate search term (e.g., an old product acronym), note it as a low-priority observation rather than a required fix. |
| **images** | **Screenshots** | KB image structure is not in the style guide — apply this rule: images must be stored as PNG files in `0-images/` at the **product level** (`docs/kb/<product>/0-images/`), not inside category subfolders. Articles in category subfolders reference them with `../0-images/filename.png`. Flag any images linked from external sources (e.g., GitHub CDN URLs) — they must be downloaded and committed to the repo. |
| **links** | (not in style guide) | Find every internal markdown link in the article body — `[text](/docs/...)` patterns to other KB articles and to versioned product docs. For each, resolve the actual target file on disk: check for a `slug` frontmatter override on the target first; if none, the URL segment must match the target's real path/filename (not its `sidebar_label` or `title`). Flag any link whose URL does not resolve to a real file on disk as a Required fix, and correct it to the real path. External links (non-`/docs` URLs) are out of scope. Backstop is `npm run build` (`onBrokenLinks: 'throw'` in `docusaurus.config.js`), but that runs late — this check catches broken links before submission. |
| **formatting** | **Markup Conventions** and **Lists** | The style guide's "single backticks for inline code" applies to error codes (e.g., `0x80070005`) — flag any error code in plain text. Sequential procedures must be numbered lists — this applies to Resolution sections and all sub-sections within them (e.g., verification steps), not just top-level procedures. |
| **prose-directness** | **Voice and Tone > Impersonal constructions** and **Words and phrases to avoid** | Flag sentences where an impersonal subject ("the operation", "the process", "the system") could be replaced with the actual actor for a cleaner, more direct sentence. Example: "the operation fails with an error" → "Clicking **X** fails with an error". Apply judgment — not every impersonal subject is wrong. |

Do NOT flag contractions, heading case, passive voice, jargon, or undefined acronyms — those belong to Vale and Dale respectively.

**KB Editing Conventions Scan (Derek subsection).** In addition to the areas table above, run the checklist below on every file. These are mechanical scan patterns codified during batch reviews; they map to the canonical rulebook at `.claude/references/kb-editing-conventions.md`. Do not duplicate the rulebook's full text here — treat the checklist as the minimum sweep. If a batch surfaces a new pattern, amend the rulebook and add the corresponding scan row here in the next PR.

| # | Scan pattern | What to flag / fix |
|---|--------------|--------------------|
| 1 | `:::note`/`:::important`/`:::warning`/`:::tip` or `> **NOTE:**` / `> **IMPORTANT:**` / `> **WARNING:**` blockquote inside a numbered list item | The callout must be indented **4 spaces** to attach to the preceding step. Fewer than 4 spaces breaks the list at CommonMark render time — this is a build-breaker, not a style nit. |
| 2 | `## Overview` that restates the title or reads as a bare symptom/condition | Rewrite to pull sourced facts from product docs and state the goal (`This article describes how to...`). |
| 3 | Literal string `<!-- link removed -->` in the article body | Search `docs/kb/**/*.md` and `docs/<product>/<version>/**/*.md` for a plausible target before shipping. If a real target exists, restore the cross-link; otherwise leave the comment and note it as unresolved. |
| 4 | Same UI element or app name bolded in some places and unbolded in others within the same file | Normalize to consistent bolding across all occurrences in that article. |
| 5 | Trailing periods inside markdown table cells | Strip them. Vale and Dale skip table content, so these slip through unless caught here. |
| 6 | Numbered step ending on a bare `Click **X**.` with no observable result | Add a closing sentence describing what happens (dialog appears, list updates, etc.) OR combine with the next click step using `..., then click **Y**`. |
| 7 | Any "contact Netwrix Support" phrasing without the standard link | Standard form is `[Netwrix Support](https://www.netwrix.com/support.html)`. Link only the first "contact" mention per article. |
| 8 | `## Instructions` section with 3+ sequential subheadings | Rename to `Step N — <Label>` (em dash, not colon). Normalize any pre-existing `Step N:` to em dash. Does NOT apply to parallel-alternative subheadings (Windows/Linux) — keep those descriptive. Apply companion condensation opportunities at the same time (hoist repeated prerequisites into one NOTE, combine consecutive UI actions with "X, then Y" phrasing). |
| 9 | 2+ consecutive numbered steps that each read `Enter the following command: X.` | Condense into a single step: `Enter the following commands in order:` followed by a bulleted list or a fenced multi-line code block. Applies even at 2-3 repetitions for within-file consistency. |
| 10 | A numbered "step" that describes a result rather than an action ("All collections appear in the output.") sitting between real action steps | Pull it out of the numbering — fold as a parenthetical on the preceding action, or set as unnumbered prose beneath it. |
| 11 | A subheading under `## Instructions` whose content is purely descriptive/observational (no action for the reader to perform) | Restructure it into its own labeled section (e.g., `Reviewing X`) using prose or a bulleted fact list — not fake numbered "steps." Every subheading under Instructions must contain an actual action. |
| 12 | A numbered step whose sub-list uses nested `1.` `2.` `3.` numbering | Convert the nested sub-list to `-` dashes. Numbered-inside-numbered renders ambiguously and reads as a restart; dashes make the parent/child relationship explicit. |

Record each finding as: `area | finding | recommendation`.

---

### Step 9 — Compile and present the report

Format the full report exactly as shown below and present it to the reviewer. Use the per-file sections in the same order as `KB_FILES`.

```markdown
## KB PR Review — PR #<PR>

**<PR title>** · `<headBranch>` → `<baseBranch>` · submitted by @<author>

_<N> KB file(s) reviewed. Ran Vale + Dale + Derek._

---

### `<file path>`

#### Vale (NetwrixKB)

<!-- If no violations: -->
✅ No Vale violations.

<!-- If violations: -->
| Line | Rule | Message |
|------|------|---------|
| 14 | NetwrixKB.Contractions | Use "do not" instead of "don't" |

#### Dale

<!-- If no violations: -->
✅ No Dale violations.

<!-- If violations: -->
| Rule | Message | Offending Text |
|------|---------|----------------|
| undefined-acronyms | "NEA" used without definition on first use | NEA |

#### Derek (KB Writing Quality)

<!-- If no issues: -->
✅ No Derek issues.

<!-- If issues: -->
| Area | Finding | Recommendation |
|------|---------|----------------|
| frontmatter | `tags: []` — missing required `kb` value | Change to `tags: [kb]` |
| title-format | Title includes product name "Auditor" | Remove product name; it is already in metadata |
| product-names | `products: auditor-cloud` — not a valid product ID | Use `auditor` per the Product Names table |

---

<!-- Repeat the above block for each additional file -->

---

### Summary

| File | Vale | Dale | Derek | Total |
|------|------|------|-------|-------|
| `article.md` | 2 | 1 | 3 | 6 |
| **Total** | **2** | **1** | **3** | **6** |

<!-- If any file placement issues were found: -->
### ⚠️ File Placement Issues
- `docs/kb/product/kb/article.md` — nested `kb/` subfolder detected. Move to `docs/kb/product/article.md`.
```

---

### Step 10 — Apply fixes with reviewer approval

After presenting the report, ask the reviewer:

> Ready to apply fixes? You can share any feedback or adjustments first, or say yes to proceed.

Wait for the reviewer's response. Incorporate any feedback, then apply all fixes to the affected files.

Once fixes are applied, draft a commit message and present it to the reviewer for approval before committing. The commit message should summarize what was fixed and which tools identified the issues (Vale, Dale, Derek). Do not commit until the reviewer approves the message.

After approval:

```bash
git add <affected files>
git commit -m "<approved commit message>"
```

---

### Step 11 — Local testing

After the commit, prompt the reviewer to run local dev or production build tests:

> Please run your local tests (dev server or full build) and let me know the results when you're ready.

Wait for the reviewer to report back with test results before proceeding.

---

### Step 12 — Push the branch

After the reviewer confirms tests pass, push the branch to the remote:

```bash
git push
```

If the push fails (e.g., no upstream set), use `git push -u origin <branch>`. Do not proceed to the review comment until the push succeeds — the fixes must be on the remote before approving.

---

### Step 13 — Draft and post the PR review comment

Using the findings from Steps 6–8 and the test results from Step 11, draft a PR review comment.

**Format requirements:**
- Markdown only — no emojis
- Concise — do not reproduce the full findings table; summarize what was found and fixed
- Structure:

```markdown
## KB Review

**Files reviewed:** <N>

### Changes applied

<Brief bullet list of fixes made, grouped by tool (Vale, Dale, Derek) if helpful. One line per logical change or group of related changes.>

### Local testing

<Brief bullet list of tests run (dev server, full build, etc.) and the result of each.>
```

Present the draft to the reviewer. Once approved, post it as an approving review:

```bash
gh pr review <PR> --approve --body "<approved comment>"
```

This posts the review comment and approves the PR in a single action.

Note: this approval counts toward branch protection requirements in `netwrix/docs`. The person running the skill must have KB codeowner status for the approval to be meaningful.

---

## Output rules

- Every section must appear for every file in the report, even if it contains only a ✅ pass line. Do not omit sections.
- Use the exact column names shown: `Line | Rule | Message` for Vale; `Rule | Message | Offending Text` for Dale; `Area | Finding | Recommendation` for Derek.
- Keep findings specific and actionable. Do not write vague observations.
- Do not merge Vale, Dale, and Derek findings into a single table.
- The Summary table must appear at the end of the report, after all per-file sections.
- If Vale is unavailable, note it in the Vale section: `⚠️ Vale not available — skipped.`
- Do not run this skill on files outside `docs/kb/`. If non-KB `.md` files appear in the diff, ignore them silently.
- The final PR review comment (Step 13) must use markdown only with no emojis.
