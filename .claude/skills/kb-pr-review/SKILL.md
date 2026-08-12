---
name: kb-pr-review
description: Reviews a KB PR (Vale + Dale + Derek) and drafts a review comment. Use when reviewing a submitted KB pull request.
argument-hint: "[PR number or URL] [+ verbose]"
---

# KB PR Review Skill

## Purpose

Reviews a GitHub PR for KB article quality. For each changed KB file, runs Vale (NetwrixKB styles), applies Dale prose rules, and performs a Derek KB writing quality review. Presents findings to the reviewer, applies fixes with approval, then drafts a concise PR review comment for the reviewer to copy/paste into GitHub.

## Invocation

```
/kb-pr-review <PR number or URL> [+ verbose]
```

Examples:
- `/kb-pr-review 812`
- `/kb-pr-review https://github.com/netwrix/docs/pull/812`
- `/kb-pr-review 812 + verbose` — restores a full per-area Overview breakdown (see Step 9) for debugging or spot-checking the skill itself.

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

**Known Vale false positive — `NetwrixKB.HeadingCase` on version designators.** Lowercase `v` in version designators (e.g., `v2.8`, `v5.7`, `v2.8+`) is correct title case per Chicago-style convention. When Vale's heading-case rule fires on a heading whose only "violation" is a lowercase `v` followed by digits, treat it as a false positive — note it in the Vale findings table with severity "False positive (no action)" and do NOT propose a rewrite.

**`WeakLinkText` and `BoilerplateCrossRef` findings** — see rulebook (`.claude/references/kb-editing-conventions.md`) §8 Links: `WeakLinkText` fixes require a real-target search before rewriting, and `BoilerplateCrossRef` never fires on `docs/kb/` files under this skill's scope — do not treat it as real if one somehow appears.

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

Read `.claude/references/kb-editing-conventions.md` from the repo root in full before beginning — this is the canonical rulebook. Also read `kb_style_guide.md` from the repo root; the rulebook points to it for the Product Names table and the Screenshots alt-text guidance rather than duplicating them. Then, for each review area below, re-read the named rulebook section and apply its rules to the article. The rulebook is the source of truth — do not substitute your own rules.

For each file in `KB_FILES`:
1. Read the full article content.
2. Work through each area in the table below. For each area, read the named rulebook section, then apply it to the article.

**Review areas:**

| Area | Rulebook section |
|------|-------------------|
| **frontmatter** | §13 Frontmatter (all required fields, product ID carve-outs, `knowledge_article_id` policy) |
| **article-type: structure** | §14 Article Type Identification + §15 Article Structure (How-To structure check, wrong-shape check) |
| **article-type: qa-format** | §15 Article Structure (Q&A question format) |
| **article-type: heading-labels** | §15 Article Structure (pluralization) |
| **title: mechanical** | §12 Titles (mechanical style corrections) |
| **title: semantic** | §12 Titles (semantic reframes). Do NOT flag `> **NOTE:**` blockquote callouts — this is correct KB format, not a Docusaurus `:::note` admonition. |
| **product-names** | `kb_style_guide.md` Product Names table, cross-checked against `src/config/products.js` (authoritative if the two disagree) — plus §13 Frontmatter for the product ID carve-outs (`onesecure`/`general`/`recoveryad`). |
| **keywords-quality** | §13 Frontmatter (`keywords` row) |
| **images: location** | §16 Images |
| **images: external-refs** | §16 Images |
| **images: alt-text** | §16 Images |
| **links** | §8 Links |
| **formatting: bold/backticks** | §6 Bolding and inline code |
| **formatting: lists** | §3 List type + §10 Formatting (fenced code blocks for multi-line commands/output) |
| **prose-directness** | §4 Sentence-level rules (impersonal-subject directness) |

Do NOT flag contractions, heading case, passive voice, jargon, or undefined acronyms — those belong to Vale and Dale respectively.

**KB Editing Conventions Scan (Derek subsection).** In addition to the areas table above, run the checklist below on every file. These are mechanical scan patterns codified during batch reviews; they map to the canonical rulebook at `.claude/references/kb-editing-conventions.md`. Do not duplicate the rulebook's full text here — treat the checklist as the minimum sweep. If a batch surfaces a new pattern, amend the rulebook and add the corresponding scan row here in the next PR.

| # | Scan pattern | What to flag / fix |
|---|--------------|--------------------|
| 1 | `:::note`/`:::tip`/`:::info`/`:::warning`/`:::caution`/`:::danger`/`:::important` or `> **NOTE:**` / `> **IMPORTANT:**` blockquote inside a numbered list item | 4-space indent to attach to the preceding step — build-breaker, not a style nit. Rulebook §5. |
| 2 | `## Overview` that opens with rationale/context rather than an explicit goal sentence, OR restates the title verbatim, OR reads as a bare symptom/condition | Rewrite goal-first. Rulebook §7. |
| 3 | Literal string `<!-- link removed -->` in the article body | Search for a plausible real target before shipping; restore the cross-link if one exists. Rulebook §8. |
| 4 | Same UI element or app name bolded in some places and unbolded in others within the same file | Normalize bolding across the article. Rulebook §6. |
| 5 | Trailing periods inside markdown table cells | Strip them — Vale and Dale skip table content. Rulebook §10. |
| 6 | Numbered step ending on a bare `Click **X**.` with no observable result | Add a closing result sentence, or combine with the next click. Rulebook §4. |
| 7 | Any "contact Netwrix Support" phrasing without the standard link | Use the standard linked form; link only the first mention per article. Rulebook §8. |
| 8 | `## Instructions` section with 3+ sequential subheadings | Apply the two-gate consolidate-then-normalize rule (Gate A merges prep/cleanup subheadings and repetition-signaled clusters first; Gate B renames the substantive remainder to `Step N —`, excluding Troubleshooting). Rulebook §1 has the full mechanics and the `add-ssl-certificate-on-linux.md` worked example. |
| 9 | 2+ consecutive numbered steps that each read `Enter the following command: X.` | Condense into one step with a list or fenced multi-line code block. Rulebook §2. |
| 10 | A numbered "step" that describes a result rather than an action, sitting between real action steps | Pull it out of the numbering. Rulebook §1. |
| 11 | A subheading under `## Instructions` with no action for the reader to perform | Restructure into a labeled prose/fact section, not fake numbered steps. Rulebook §1. |
| 12 | A numbered step whose sub-list uses nested `1.` `2.` `3.` numbering | Convert to `-` dashes. Rulebook §3. |
| 13 | A single `## Instructions` or `## Resolution` section holding two or more distinct activities with no subheadings (wall-of-text) | Split into H3 subheadings by activity. Rulebook §1. Route to `kb-writer` first if the split requires content judgment; apply here if the activity boundaries are unambiguous from the existing prose. |
| 14 | An action that belongs in a numbered sequence but sits as trailing prose after the last numbered step | Pull it into the numbered sequence as its own step. Rulebook §1. |
| 15 | A subheading (`###` or `####`) that wraps a single trivial element — most commonly a lone code block | Remove the subheading; lead in with a short sentence instead. Rulebook §1. |
| 16 | A numbered list containing exactly one item | Convert to a plain imperative sentence. Rulebook §3. |
| 17 | A single list item with 3+ comma- or semicolon-separated clauses reading as a run-on | Break into a lead-in phrase plus nested `-` sub-bullets. Rulebook §3. Route to `kb-writer` if the phrasing needs judgment; apply mechanically when the split points are unambiguous. |
| 18 | Descriptive "what this account/component does" bullets sitting *after* a numbered configuration procedure | Reorder as intro prose *before* the numbered steps. Rulebook §1. Route content-heavy rewrites to `kb-writer`. |
| 19 | List items that mix complete sentences and fragments, or inconsistent end-punctuation | Rewrite for parallelism and consistent end-punctuation. Rulebook §3. |
| 20 | A list that appears with no lead-in sentence | Add a short intro sentence ending in a colon. Rulebook §4. Route to `kb-writer` when the intro needs content judgment; apply here when the missing context is obvious from the surrounding prose. |
| 21 | A paragraph with 3+ inline cross-reference clauses ("see X, see Y, see Z") stacked in one sentence | Collapse into a single NOTE block with the links listed cleanly. Rulebook §8. |
| 22 | A positional reference ("above"/"below"/"the section on X") that points to a named section in the same file | Replace with `[Section Name](#section-slug)`. Rulebook §4. |
| 23 | `:::` admonition syntax anywhere in the article body, or a `> **<SEVERITY>:**` blockquote whose severity is not `NOTE` or `IMPORTANT` | Convert/relabel per the two-severity mapping (both `:::` and blockquote spellings). Rulebook §5 — apply row 1's 4-space indentation rule if the callout is inside a numbered list item. |

**Cross-section consistency scan.** Run this scan on every file in addition to the row-based table above. These rules compare two sections of the same article against each other — section-local scans miss them because each section reads correctly on its own. All six rows map to rulebook §11's five bullets; rows 1 and 2 below are the two failure directions of §11's single "Symptom vs Cause overlap" bullet (Symptom too rich vs. Cause too thin), not two separate rulebook rules.

| Pattern | What to flag / fix |
|---------|--------------------|
| Symptom section describes the mechanism in addition to the observation | Trim Symptom to observation only; move the mechanism into Cause. Rulebook §11. |
| Cause section repeats the observed behavior without explaining why | Route to `kb-writer` — content-depth gap, not a mechanical fix. Rulebook §11 (same bullet as above). |
| Acronym defined on first use but subsequent references use the long form | Replace subsequent long-form uses with the acronym. Rulebook §11. |
| Product's full name repeated three or more times where context is already established | Drop the "Netwrix" prefix or full name where unambiguous. Rulebook §11. |
| Related Articles link (or bottom-of-file bullet link) to a topic never mentioned in the article body | Remove the orphaned link. Rulebook §11. |
| Named permission types or access rights capitalized inconsistently within the same file | Normalize to one convention per named right. Rulebook §11. |

Record each finding as: `area | finding | recommendation`.

---

### Step 9 — Compile and present the report

#### Coverage discipline (mandatory before composing the report)

Before composing the Overview table or any findings sections, work through each named/numbered rule explicitly. Enumerate:

1. **Dale rules** — anchor the total N with a real shell command *before* the scratch pass, not model recall: `ls .claude/skills/dale/rules/*.yml | wc -l`. Use that number verbatim in the Dale row's `N/N scanned` status. Then walk each rule file by name, one at a time, marking hit/clean. If the number of rules you walk differs from N from the shell command, that's the bug surfacing — do NOT silently reconcile by lowering N to match what you enumerated. Fix the scratch pass so all N are covered.
2. **kb-editing-conventions scan** — walk each row of the scan table by row number. Mark hit/clean for each.
3. **Cross-section consistency patterns** — walk each of the 6 patterns one at a time. Mark hit/clean for each.
4. **Derek areas** — walk every area listed in Step 8's areas table (frontmatter sub-fields, article-type: structure, article-type: qa-format, article-type: heading-labels, title: mechanical, title: semantic, product-names, keywords quality, images: location, images: external-refs, images: alt-text, links, formatting: bold/backticks, formatting: lists, prose-directness). Mark hit/clean for each.
5. **Formatting sub-rows — extraction pass.** Before scoring either formatting sub-row:
   - Extract every UI action target and literal value in the article into a flat list (button/menu/field names being acted on, filenames, typed values, registry paths, commands, error codes).
   - Extract every list block (numbered or bulleted) into a flat list of blocks.
   - Walk each extracted item individually — bold/backtick check for item type 1, capitalization/punctuation/parallelism check for item type 2 — marking hit/clean per item, not per file.
   - Each formatting sub-row gets an N/N scanned count from this extraction, the same mechanism as Dale's rule count.
   
   This is the actual fix for the root cause: today the model only re-checks bold/backtick and list rules on lines already flagged by something else, instead of running an independent sweep.

Only after this per-item scratch pass — never before — compose the Overview table and the findings sections. **Skipping the enumeration to write the table first is a coverage regression, however clean the output looks.** The reason the frontmatter sub-field row format catches misses is that it forces the model to account for each sub-field explicitly; the enumeration pass extends that discipline to Dale, the scan-table rows, and the cross-section patterns, where "Clean" and "unscanned" are otherwise visually identical.

**Compact report format.** The Overview table shows exactly one row per tool — Vale, Dale, Derek, the kb-editing-conventions scan, and cross-section consistency — never a row per sub-check. Derek's per-area detail (which frontmatter sub-field, which article-type/title/images/formatting sub-row) belongs only in the Derek findings table below, where the Area column already names it. Do not print a row per rule/area with "Clean" / "N/A" / "Not present" verdicts in the Overview table. Verbosity has been a real cost — the report surfaces *what needs a decision*, not exhaustive proof of coverage. Coverage is enforced by the Coverage discipline enumeration above, not by expanding every clean check into its own row. (Exception: `+ verbose` invocation — see below.)

Per-file structure:

**1. Overview table (always).** A compact table listing every check category and its status — findings count or ✓ Clean. Clean verdicts live only here; they do not reappear in the sections below.

**Rows required on every file (default mode):**

- One row each for Vale and Dale.
- One row for `Derek (N checks)` — a single roll-up covering every frontmatter sub-field (`title`, `description`, `sidebar_label`, `keywords`, `products`, `tags`, `knowledge_article_id`) and every other named area (`article-type: structure`, `article-type: qa-format`, `article-type: heading-labels`, `title: mechanical`, `title: semantic`, `product-names`, `keywords-quality`, `images: location`, `images: external-refs`, `images: alt-text`, `links`, `formatting: bold/backticks`, `formatting: lists`, `prose directness`). N is the total count of sub-fields + areas — 21 as of this writing; recount if the areas table changes. Status cell: `N/N scanned, <total findings> findings in <count> areas` (or `✓ Clean` if zero findings).
- One row for the `kb-editing-conventions scan (rows 1–23)`.
- One row for `Cross-section consistency (6 patterns as of this writing; recount if the cross-section table changes)`.

No per-area or per-sub-field rows appear in the Overview table in default mode, under any circumstance — that detail lives only in the Derek findings table below. The Overview table is a fixed 5 rows regardless of file size; that fixed shape is the coverage receipt for the tool level, backed by the Coverage discipline enumeration for the check level.

**`+ verbose` invocation.** Append `+ verbose` to the invocation (e.g., `/kb-pr-review 812 + verbose`) to restore a full per-area breakdown in the Overview table — every Derek sub-field/area gets its own row with an explicit ✓ Clean / N/A / findings count, the same ~21-row format this skill used before this roll-up. Use this only for debugging the skill itself or spot-checking coverage, not for normal reviewer-facing reports.

Example shape (default mode):

```markdown
| Check | Status |
|---|---|
| Vale | 2 findings |
| Dale (N rules) | N/N scanned, 3 findings |
| Derek (21 checks) | 21/21 scanned, 4 findings in 3 areas |
| kb-editing-conventions scan (23 rows) | 23/23 scanned, 2 findings (rows #7, #8) |
| Cross-section consistency (6 patterns) | 6/6 scanned, 1 finding (product-name repetition) |
```

Example shape (`+ verbose`):

```markdown
| Check | Status |
|---|---|
| Vale | 2 findings |
| Dale (N rules) | N/N scanned, 3 findings |
| Derek — frontmatter: title | see title row below |
| Derek — frontmatter: description | ✓ Clean |
| Derek — frontmatter: sidebar_label | 1 required fix |
| Derek — frontmatter: keywords | ✓ Clean |
| Derek — frontmatter: products | 1 required fix |
| Derek — frontmatter: tags | 1 required fix (missing `kb`) |
| Derek — frontmatter: knowledge_article_id | ✓ Clean |
| Derek — article-type: structure | ✓ Clean |
| Derek — article-type: qa-format | N/A |
| Derek — article-type: heading-labels | ✓ Clean |
| Derek — title: mechanical | 1 required fix |
| Derek — title: semantic | ✓ Clean |
| Derek — product-names | ✓ Clean |
| Derek — keywords-quality | ✓ Clean |
| Derek — images: location | 1 required fix |
| Derek — images: external-refs | ✓ Clean |
| Derek — images: alt-text | ✓ Clean |
| Derek — links | 1 required fix |
| Derek — formatting: bold/backticks | 8/8 scanned, ✓ Clean |
| Derek — formatting: lists | 8/8 scanned, ✓ Clean |
| Derek — prose directness | ✓ Clean |
| kb-editing-conventions scan (23 rows) | 23/23 scanned, 2 findings (rows #7, #8) |
| Cross-section consistency (6 patterns) | 6/6 scanned, 1 finding (product-name repetition) |
```

**N/N scanned discipline.** The Dale row, the `Derek (N checks)` row, the kb-editing-conventions scan row, and the cross-section consistency row must include an `N/N scanned` count in the status cell. The count comes from the enumeration pass above — it's a self-verifying receipt (the model can't write "23/23" without having walked all 23 rows in the scratch pass). Replace `N` in the Dale row with the actual count of loaded `.yml` files. For Derek, N is the total across all sub-fields and areas from the enumeration (item 4), including the formatting sub-rows' own extraction-pass counts (item 5) — those individual N/N counts still get computed during the scratch pass every time; in default mode they fold into the single `Derek (N checks)` row's total, and reappear as their own rows only under `+ verbose`.

**Count-consistency discipline (arithmetic check).** Whenever a status cell shows a total finding count *and* a parenthetical breakdown (e.g., `10/10 scanned, 5 findings (passive-voice ×2, undefined-acronyms ×3)`), the top-line total must equal the sum of the breakdown counts. `2 findings (passive-voice ×2, undefined-acronyms ×3)` is a bug — that's 5, not 2. Same rule applies to every row that shows a breakdown: Vale, Dale, Derek, the scan-table row, cross-section row. Additionally, the number of rows in each findings section table below must equal the count claimed by the corresponding Overview row. Do the arithmetic before writing the row; do not paper over a mismatch by picking one number and hoping the reader doesn't add.

**2. Findings sections (only for non-clean checks).** For every row in the Overview table whose status is not ✓ Clean, add one short table below listing only the findings that need a decision. One section per tool (Vale / Dale / Derek). Do not add sections for tools that are entirely clean.

- Vale columns: `Line | Rule | Severity | Finding`
- Dale columns: `Location | Rule | Finding + suggested rewrite`
- Derek columns: `Area | Line/Location | Finding | Suggested fix`

Group all Derek findings — regardless of area — into one table with the area named per row. Do not repeat "Clean" areas.

**3. Report contract.**
- No rule-by-rule "Clean" / "N/A" rows in the findings sections. The Overview table is the coverage receipt.
- No filler sentences confirming what wasn't found. If a check is clean, the Overview table says so; nothing else is required.
- Every finding row must be actionable — specific location, specific problem, specific fix or specific question.
- For multi-file PR reviews: repeat the Overview table + findings sections per file. Then close with one grand summary table across all files (counts only).

**Skeleton (single file):**

```markdown
## KB PR Review — PR #<PR>

**<PR title>** · `<headBranch>` → `<baseBranch>` · submitted by @<author>

_<N> KB file(s) reviewed. Ran Vale + Dale + Derek._

---

### `<file path>`

#### Overview

| Check | Status |
|---|---|
| Vale | 2 findings |
| Dale | 1 finding |
| Derek (21 checks) | 21/21 scanned, 2 findings in 1 area |
| kb-editing-conventions scan (23 rows) | 23/23 scanned, 0 findings |
| Cross-section consistency (6 patterns) | 6/6 scanned, 0 findings |

#### Vale

| Line | Rule | Severity | Finding |
|---|---|---|---|
| 14 | NetwrixKB.Contractions | Required | Use "do not" instead of "don't" |

#### Dale

| Location | Rule | Finding + suggested rewrite |
|---|---|---|
| Step 2 | passive-voice | "…is looked up in `X`" → "Look up … in `X`" |

#### Derek

| Area | Location | Finding | Suggested fix |
|---|---|---|---|
| frontmatter | `tags:` | Missing required `kb` value | Add `kb` to tags |
| title-format | H1 | "How to Configure Granular Permissions..." → gerund form | Rewrite to "Configuring Granular Permissions..." |

---

<!-- Repeat Overview + findings sections per file -->

---

### Summary (multi-file PRs)

| File | Vale | Dale | Derek | Total |
|---|---|---|---|---|
| `article.md` | 2 | 1 | 3 | 6 |
| **Total** | **2** | **1** | **3** | **6** |

<!-- File placement issues, if any -->
### ⚠️ File Placement Issues
- `docs/kb/product/kb/article.md` — nested `kb/` subfolder detected. Move to `docs/kb/product/article.md`.
```

---

### Step 10 — Apply fixes with reviewer approval

**All-clean fast path.** Before asking about fixes, check whether every row in every file's Overview table is ✓ Clean. If so, skip the apply-fixes / local-testing / push steps entirely — nothing to fix, nothing to test, nothing new to push — and go straight to Step 13 (draft and post the PR review comment), noting the PR is clean as submitted. Otherwise proceed normally.

After presenting the report, ask the reviewer:

> Ready to apply fixes? You can share any feedback or adjustments first, or say yes to proceed.

Wait for the reviewer's response. Incorporate any feedback, then apply all fixes to the affected files.

#### Post-fix sweeps

Some checks only make sense *after* fixes have landed. Run these once the fix loop has closed:

- **Title-change → link-text sweep (rulebook §8).** If a title fix was applied to any file, search for internal markdown links whose visible text uses the *old* title and update the link text to match the new title. URL resolution alone is not sufficient — visible link text must describe the current target. **Use a dedicated search tool (e.g. the Grep tool), passing the old title as a pattern parameter, rather than building a shell `grep` command by interpolating the title into a quoted string.** Interpolating into a shell string is a two-layer hazard: shell-quote characters in the title (a title containing `'`, e.g. "Unable to Login to UI due to 'Invalid Token' Error" — over 20 KB titles have an internal apostrophe) can break out of a single-quoted shell string entirely, causing a syntax error or silently running a different command than intended. Passing the title as a tool parameter instead of shell text removes that layer completely. The remaining layer — regex metacharacters in the title (`. * + ? ( ) [ ] { } \ | ^ $` — e.g. `?` in a How-To Q&A title like "How Do You Export Event Logs?") — still needs escaping in the pattern itself, since the underlying match is regex-based; an unescaped metacharacter changes what matches without erroring, so a stale-link-text hit can be silently missed. Match `\[<old title>\]\(` (with the title's metacharacters escaped) to catch all three internal link forms in use in this repo (`/docs/...`, `pathname:///docs/...`, and relative `.md` links like `../other-article.md`) in one search. Apply the link-text updates as part of the same commit as the title fix.

Once fixes and post-fix sweeps are applied, draft a commit message and present it to the reviewer for approval before committing. The commit message should summarize what was fixed and which tools identified the issues (Vale, Dale, Derek). Do not commit until the reviewer approves the message.

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

- **Overview table is exactly 5 rows in default mode** — Vale, Dale, `Derek (N checks)`, kb-editing-conventions scan, cross-section consistency — regardless of file size. Derek's per-sub-field and per-area detail never gets its own Overview row in default mode; it lives only in the Derek findings table below, via the Area column. Coverage at the check level is enforced by the Coverage discipline enumeration (the mandatory scratch pass), not by expanding rows. Use `+ verbose` on invocation to restore the full per-area breakdown for debugging or spot-checking the skill itself.
- **Findings sections omit clean checks entirely.** For a tool that fired no findings, no findings section appears — the Overview row is sufficient. Do NOT include "✅ No X violations" placeholder sections in the findings area.
- **No rule-by-rule "Clean" / "N/A" / "Not present" rows** in findings sections. Do not print a per-rule table showing which rules found nothing.
- **No filler sentences confirming what wasn't found** (e.g., "No hits for minimizing-difficulty, idioms, ..."). If the Overview row says ✓ Clean, that's the whole statement.
- Column names: Vale `Line | Rule | Severity | Finding`; Dale `Location | Rule | Finding + suggested rewrite`; Derek `Area | Location | Finding | Suggested fix`.
- Keep findings specific and actionable. Vague observations don't belong in the report.
- Do not merge Vale, Dale, and Derek findings into a single table — each tool gets its own.
- The multi-file Summary table appears at the end, after all per-file sections.
- If Vale is unavailable, note it in the Vale Overview row: `Vale | ⚠️ Not available — skipped`.
- Do not run this skill on files outside `docs/kb/`. If non-KB `.md` files appear in the diff, ignore them silently.
- The final PR review comment (Step 13) must use markdown only with no emojis.
