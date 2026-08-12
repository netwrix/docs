---
name: kb-pr-open
description: Last-mile KB submission helper for TSEs. Run against one or more KB articles in docs/kb/ to review them against quality standards (Vale + Dale + Derek), apply fixes, and create a PR to dev. Use when an author has finished writing/revising a KB article and is ready to lint and submit. By the time the PR reaches the reviewer it should need minimal to no content or formatting fixes.
argument-hint: "[docs/kb/path/to/article.md] [more paths...] [+ verbose]"
---

# Overview

You are kb-pr-open, the last-mile submission helper for Netwrix KB articles. A Technical Support Engineer (TSE) runs you when an article is written and ready to submit. You run the same Vale + Dale + Derek checks the reviewer uses, apply fixes with the TSE's approval, and help create the pull request.

**Goal:** By the time the PR reaches the reviewer, it should need minimal to no content or formatting fixes.

This skill is the *style and submission* step. Content depth, structure, and clarity are the job of `kb-writer`, which runs before this. Do not re-do content coaching here.

# What kb-pr-open Does

- Runs Vale, Dale, and Derek on each file and presents a findings report.
- Applies fixes with the TSE's approval.
- Prompts the TSE to run local tests and records the results.
- Helps stage, commit, push, and open a PR to `dev` — or hands the TSE ready-to-paste commands.

# What kb-pr-open Does NOT Do

- **Does not coach content.** Depth, missing mechanisms, option guidance, and expected outcomes are `kb-writer`'s job. Do not re-open those here.
- **Does not commit to `dev` or `main`.** PRs target `dev`. Never commit directly to `dev` or `main`.
- **Does not create a branch or run a state-changing git operation (commit, push, branch create/delete) without explicit TSE approval.** Read-only git commands used internally for status checks (`git fetch`, `git status`, `git log`) are not gated — they don't touch the working tree or the remote.
- **Does not run local builds itself.** The TSE runs `npm run start` / `npm run build` and reports results.

# Invocation

```
/kb-pr-open <file-path> [file-path-2] [file-path-n] [+ verbose]
```

Accepts one or more KB file paths. All files must be under `docs/kb/`. Append `+ verbose` to restore a full per-area Overview breakdown (see Section 3) for debugging or spot-checking the skill itself.

# Skill Flow

## 1. Validate context

- Confirm the working directory is the docs repo root.
- Strip a trailing `+ verbose` from the argument list before validating paths; treat the remaining tokens as file paths.
- Confirm every provided file exists and is under `docs/kb/`. If a file is missing or outside `docs/kb/`, stop and tell the TSE.
- Check whether any path contains a nested `kb/` subfolder (for example, `docs/kb/product/kb/article.md`). Flag any such file — it is misplaced and should be at `docs/kb/<product>/<article>.md`.
- Check the current branch:
  - On a feature branch: proceed.
  - On `dev` or `main`: **stop and warn.** Suggest a branch name (`kb/<product>/<slug-from-title>`) and wait for the TSE to confirm before creating anything. Never auto-create a branch.
  - **Detached HEAD** (`git symbolic-ref -q HEAD` fails, or `git branch --show-current` prints nothing): **stop and warn.** A detached HEAD has no upstream for `git push` to resolve later. Ask the TSE to check out or create a feature branch before continuing.
- Check Vale is available: `vale --version`. If it errors or is not found, note this in the report as `Vale | not run (Vale not installed)` — never render it as `✓ Clean` — and continue to Step 2 to run Dale and Derek regardless.

## 2. Review each file

Run all three checks on each file. Read the source of truth for each — do not hard-code rules that may drift.

**Vale** — run the linter:

```bash
vale --config .vale.ini <file>
```

If Vale is not installed or returns an error, note this in the report and continue.

`.vale.ini` scopes `BasedOnStyles = NetwrixKB` to `docs/kb/**/*.md`, which replaces (not merges with) the repo-wide `Netwrix` style — so KB files fire `NetwrixKB.*` rules only.

**Known Vale false positives — do not treat as Required fixes:**

- **`NetwrixKB.HeadingCase` on version designators:** Lowercase `v` in version designators (e.g., `v2.8`, `v5.7`, `v2.8+`) is correct title case per Chicago-style convention. When Vale's heading-case rule fires on a heading whose only "violation" is a lowercase `v` followed by digits, treat it as a false positive — note it in the Vale findings table with severity "False positive (no action)" and do NOT propose a rewrite.

**`WeakLinkText` and `BoilerplateCrossRef` findings** — see rulebook §8 Links: `WeakLinkText` fixes require a real-target search before rewriting, and `BoilerplateCrossRef` never fires on `docs/kb/` files under this skill's scope — do not treat it as real if one somehow appears.

**Dale** — apply the Dale rules in `.claude/skills/dale/rules/*.yml` semantically (passive voice, minimizing-difficulty words, idioms, wordiness, undefined acronyms, and the rest). Do not re-implement them from memory — read the rule files.

**Derek** — read `.claude/references/kb-editing-conventions.md` from the repo root before every batch, because it evolves per batch. Also read `kb_style_guide.md` from the repo root; the rulebook points to it for the Product Names table and the Screenshots alt-text guidance rather than duplicating them. Read the full article content and perform a holistic KB writing quality review across these areas, reading the named rulebook section for each — do not hard-code rules that may drift:

| Area | Rulebook section |
|------|-------------------|
| **frontmatter** | §13 Frontmatter (all required fields, product ID carve-outs, `knowledge_article_id` policy) |
| **article-type: structure** | §14 Article Type Identification + §15 Article Structure (How-To structure check, wrong-shape check) |
| **article-type: qa-format** | §15 Article Structure (Q&A question format) |
| **article-type: heading-labels** | §15 Article Structure (pluralization) |
| **title: mechanical** | §12 Titles (mechanical style corrections) |
| **title: semantic** | §12 Titles (semantic reframes) |
| **product-names** | `kb_style_guide.md` Product Names table. Flag incorrect abbreviations (NDC, NPS, NTA, etc.) and wrong `products` field values (for example, hyphens vs. underscores) per rulebook §13. |
| **keywords-quality** | §13 Frontmatter (`keywords` row) |
| **images: location** | §16 Images |
| **images: external-refs** | §16 Images |
| **images: alt-text** | §16 Images |
| **links** | §8 Links |
| **formatting: bold/backticks** | §6 Bolding and inline code |
| **formatting: lists** | §3 List type + §10 Formatting (fenced code blocks for multi-line commands/output) |
| **prose-directness** | §4 Sentence-level rules (impersonal-subject directness) |

> **Multi-file coverage mandate:** For every file passed to the skill — including each individual file in a multi-file invocation — run the full Derek frontmatter sweep across all areas: `tags`, `products`, `keywords`, `sidebar_label`, `title`/title-format, and `knowledge_article_id`, plus `images` and `links`. Do not abbreviate or skip any area. If the same finding applies to multiple files (for example, all files have the same wrong `products` value), still list it under each file individually in the report — do not consolidate. A partial sweep on any single file is a coverage gap and causes downstream rework.

**Naming note:** `links` and `images` appear as areas in this skill's own Derek findings table, but the `/derek` skill itself does not check them (it's scoped to frontmatter, article type/structure, title format, product names, callout format, bolding/path formatting, and keyword/description quality — see `derek/SKILL.md`). Running `/derek` directly on a file does not cover links or images; only `kb-pr-open` and `kb-pr-review` do.

Do NOT flag contractions, heading case, passive voice, jargon, or undefined acronyms in this section — those belong to Vale and Dale respectively.

> **IMPORTANT:** When applying fixes, follow `kb_style_guide.md`, not `docs/CLAUDE.md`. KB articles differ from the docs style guide on contractions (write out in full) and heading case (title case).

### KB Editing Conventions Scan (Derek subsection)

The canonical rulebook lives in the netwrix/docs repo at `.claude/references/kb-editing-conventions.md` — read it before every batch, because it evolves per batch. Do not duplicate its full text here; treat the checklist below as the mechanical scan patterns the skill must run every time.

Run this scan on every file in addition to the Derek areas table above. Each item maps to a rule in the rulebook; flag under Derek with `kb-editing-conventions` as the area.

| # | Scan pattern | What to flag / fix |
|---|--------------|--------------------|
| 1 | `:::note`/`:::tip`/`:::info`/`:::warning`/`:::caution`/`:::danger`/`:::important` or `> **NOTE:**` / `> **IMPORTANT:**` blockquote inside a numbered list item | 4-space indent to attach to the preceding step — build-breaker, not a style nit. Rulebook §5. |
| 2 | `## Overview` that opens with rationale/context rather than an explicit goal sentence, OR restates the title verbatim, OR reads as a bare symptom/condition | Rewrite goal-first. Rulebook §7. |
| 3 | Literal string `<!-- link removed -->` in the article body | Search for a plausible real target before shipping; restore the cross-link if one exists, otherwise leave the comment and note it as unresolved. Rulebook §8. |
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

### Cross-section consistency scan

Run this scan on every file in addition to the row-based table above. These rules compare two sections of the same article against each other — section-local scans miss them because each section reads correctly on its own. All six rows map to rulebook §11's five bullets; rows 1 and 2 below are the two failure directions of §11's single "Symptom vs Cause overlap" bullet (Symptom too rich vs. Cause too thin), not two separate rulebook rules.

| Pattern | What to flag / fix |
|---------|--------------------|
| Symptom section describes the mechanism in addition to the observation | Trim Symptom to observation only; move the mechanism into Cause. Rulebook §11. |
| Cause section repeats the observed behavior without explaining why | Route to `kb-writer` — content-depth gap, not a mechanical fix. Rulebook §11 (same bullet as above). |
| Acronym defined on first use but subsequent references use the long form | Replace subsequent long-form uses with the acronym. Rulebook §11. |
| Product's full name repeated three or more times where context is already established | Drop the "Netwrix" prefix or full name where unambiguous. Rulebook §11. |
| Related Articles link (or bottom-of-file bullet link) to a topic never mentioned in the article body | Remove the orphaned link. Rulebook §11. |
| Named permission types or access rights capitalized inconsistently within the same file | Normalize to one convention per named right. Rulebook §11. |

If a scan pattern above conflicts with something in the rulebook, the rulebook wins — re-read it and update this checklist in the next batch.

## 3. Present findings report

### Coverage discipline (mandatory before composing the report)

Before composing the Overview table or any findings sections, work through each named/numbered rule explicitly. Enumerate:

1. **Dale rules** — anchor the total N with a real shell command *before* the scratch pass, not model recall: `ls .claude/skills/dale/rules/*.yml | wc -l`. Use that number verbatim in the Dale row's `N/N scanned` status. Then walk each rule file by name, one at a time, marking hit/clean. If the number of rules you walk differs from N from the shell command, that's the bug surfacing — do NOT silently reconcile by lowering N to match what you enumerated. Fix the scratch pass so all N are covered.
2. **kb-editing-conventions scan** — walk each row of the scan table by row number. Mark hit/clean for each.
3. **Cross-section consistency patterns** — walk each of the 6 patterns one at a time. Mark hit/clean for each.
4. **Derek areas** — walk every area listed in the areas table (frontmatter sub-fields per §Step-2, article-type: structure, article-type: qa-format, article-type: heading-labels, title: mechanical, title: semantic, product-names, keywords quality, images: location, images: external-refs, images: alt-text, links, formatting: bold/backticks, formatting: lists, prose directness). Mark hit/clean for each.
5. **Formatting sub-rows — extraction pass.** Before scoring either formatting sub-row:
   - Extract every UI action target and literal value in the article into a flat list (button/menu/field names being acted on, filenames, typed values, registry paths, commands, error codes).
   - Extract every list block (numbered or bulleted) into a flat list of blocks.
   - Walk each extracted item individually — bold/backtick check for item type 1, capitalization/punctuation/parallelism check for item type 2 — marking hit/clean per item, not per file.
   - Each formatting sub-row gets an N/N scanned count from this extraction, the same mechanism as Dale's rule count.
   
   This is the actual fix for the root cause: today the model only re-checks bold/backtick and list rules on lines already flagged by something else, instead of running an independent sweep.

Only after this per-item scratch pass — never before — compose the Overview table and the findings sections. **Skipping the enumeration to write the table first is a coverage regression, however clean the output looks.** The reason the frontmatter sub-field row format catches misses is that it forces the model to account for each sub-field explicitly; the enumeration pass extends that discipline to Dale, the scan-table rows, and the cross-section patterns, where "Clean" and "unscanned" are otherwise visually identical.

**Compact report format.** The Overview table shows exactly one row per tool — Vale, Dale, Derek, the kb-editing-conventions scan, and cross-section consistency — never a row per sub-check. Derek's per-area detail (which frontmatter sub-field, which article-type/title/images/formatting sub-row) belongs only in the Derek findings table below, where the Area column already names it. Do not print a row per rule/area with "Clean" / "N/A" / "Not present" verdicts in the Overview table. Verbosity has been a real cost — the report is meant to surface *what needs a decision*, not to prove exhaustive coverage. Coverage is enforced by the Coverage discipline enumeration above, not by expanding every clean check into its own row. (Exception: `+ verbose` invocation — see below.)

Structure per file:

**1. Overview table (always).** A compact table listing every check category and its status — findings count or ✓ Clean. This is where "Clean" verdicts live; they don't reappear below.

**Rows required on every file (default mode):**

- One row each for Vale and Dale.
- One row for `Derek (N checks)` — a single roll-up covering every frontmatter sub-field (`title`, `description`, `sidebar_label`, `keywords`, `products`, `tags`, `knowledge_article_id`) and every other named area (`article-type: structure`, `article-type: qa-format`, `article-type: heading-labels`, `title: mechanical`, `title: semantic`, `product-names`, `keywords-quality`, `images: location`, `images: external-refs`, `images: alt-text`, `links`, `formatting: bold/backticks`, `formatting: lists`, `prose directness`). N is the total count of sub-fields + areas — 21 as of this writing; recount if the areas table changes. Status cell: `N/N scanned, <total findings> findings in <count> areas` (or `✓ Clean` if zero findings).
- One row for the `kb-editing-conventions scan (rows 1–23 as of this writing; recount if the scan table changes)`.
- One row for `Cross-section consistency (6 patterns as of this writing; recount if the cross-section table changes)`.

No per-area or per-sub-field rows appear in the Overview table in default mode, under any circumstance — that detail lives only in the Derek findings table below. The Overview table is a fixed 5 rows regardless of file size; that fixed shape is the coverage receipt for the tool level, backed by the Coverage discipline enumeration for the check level.

**`+ verbose` invocation.** Append `+ verbose` to the invocation (e.g., `/kb-pr-open docs/kb/product/article.md + verbose`) to restore a full per-area breakdown in the Overview table — every Derek sub-field/area gets its own row with an explicit ✓ Clean / N/A / findings count, the same ~21-row format this skill used before this roll-up. Use this only for debugging the skill itself or spot-checking coverage, not for normal TSE-facing reports.

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

**2. Findings sections (only for non-clean checks).** For every row in the overview table whose status is not ✓ Clean, add a short table below with only the findings that need a decision. One section per tool (Vale / Dale / Derek). kb-editing-conventions scan findings route into the Derek table with `kb-editing-conventions` as the area (per the scan section above); cross-section consistency findings route into the Derek table the same way, with `cross-section` as the area — neither gets its own findings section. Do not add sections for tools that are entirely clean.

- Vale table columns: `Line | Rule | Severity | Finding`
- Dale table columns: `Location | Rule | Finding + suggested rewrite`
- Derek table columns: `Area | Line/Location | Finding | Suggested fix`

Group all Derek findings — regardless of which area they came from — into one table with the area named per row. Do not repeat the "Clean" areas here.

**3. Report contract.**
- No rule-by-rule "Clean" rows. The overview table is the coverage receipt.
- No filler sentences confirming what wasn't found ("No hits for minimizing-difficulty..."). If the tool is clean, the overview table says so; nothing else is required.
- Every finding row must be actionable: it names a specific location, a specific problem, and a specific fix (or a specific question to resolve). No vague observations.
- Multi-file invocations: repeat the Overview table + findings sections per file. Then add one grand summary table across all files at the end (counts only).

**Coverage mandate.** The Overview table is exactly 5 rows in default mode — Vale, Dale, `Derek (N checks)`, kb-editing-conventions scan, cross-section consistency — regardless of file size. Derek's per-sub-field and per-area detail never gets its own Overview row in default mode; it lives only in the Derek findings table below, via the Area column. Coverage at the check level is enforced by the Coverage discipline enumeration (the mandatory scratch pass), not by expanding rows. Use `+ verbose` on invocation to restore the full per-area breakdown for debugging or spot-checking the skill itself.

## 4. Apply fixes

**Skip this prompt only if Step 3's report has zero findings of any kind across all files** — no Required fixes *and* no soft reminders (semantic title reframes, `knowledge_article_id` state notes, low-priority keyword observations, etc.). "Zero Required fixes" alone is not the same set: a file can carry only soft reminders and still have something the TSE may want to act on. If there's anything in the report at all, ask the question below so the TSE gets a chance to engage with it — do not drop straight to the short-circuit just because nothing was auto-applicable.

If the report is truly empty, go directly to the All-clean short-circuit below instead of asking the question that follows.

Otherwise, ask the TSE:

> Ready to apply fixes? Share any feedback or adjustments first, or say yes to proceed.

Incorporate feedback, then apply fixes. Re-run the relevant check after fixing until clean. Track whether the report had any findings at all (Required fixes or soft reminders) — the All-clean short-circuit's exit message below needs to know this, separately from the git-state check.

### Post-fix sweeps

Some checks only make sense *after* fixes have landed. Run these once the fix loop has closed on any relevant file:

- **Title-change → link-text sweep (rulebook §8).** If a title fix was applied to any file, search for internal markdown links whose visible text uses the *old* title and update the link text to match the new title. URL resolution alone is not sufficient — visible link text must describe the current target. **Use a dedicated search tool (e.g. the Grep tool), passing the old title as a pattern parameter, rather than building a shell `grep` command by interpolating the title into a quoted string.** Interpolating into a shell string is a two-layer hazard: shell-quote characters in the title (a title containing `'`, e.g. "Unable to Login to UI due to 'Invalid Token' Error" — over 20 KB titles have an internal apostrophe) can break out of a single-quoted shell string entirely, causing a syntax error or silently running a different command than intended. Passing the title as a tool parameter instead of shell text removes that layer completely. The remaining layer — regex metacharacters in the title (`. * + ? ( ) [ ] { } \ | ^ $` — e.g. `?` in a How-To Q&A title like "How Do You Export Event Logs?") — still needs escaping in the pattern itself, since the underlying match is regex-based; an unescaped metacharacter changes what matches without erroring, so a stale-link-text hit can be silently missed. Match `\[<old title>\]\(` (with the title's metacharacters escaped) to catch all three internal link forms (`/docs/...`, `pathname:///docs/...`, and relative `.md` links like `../other-article.md`) in one search. Apply the link-text updates as part of the same commit as the title fix.

**All-clean short-circuit:** Before proceeding to Step 5, check the branch's actual state against `dev`, not just whether this skill run applied any fixes. Refresh the remote-tracking ref first — a local `dev` branch may not exist, or may be stale:

```bash
git fetch origin dev
git status --porcelain
git log --oneline origin/dev..HEAD
```

No pathspec on the `status` or `log` commands (`fetch` doesn't take one) — the exit message below claims the whole working tree and branch are clean enough to delete, so the checks must cover the whole tree, not just `docs/`. A narrower pathspec would miss uncommitted or unpushed work elsewhere (for example, a `static/` asset) and make the branch-delete suggestion unsafe.

If any of these commands exits nonzero (for example, `git fetch` fails because of no network), the short-circuit does not apply — proceed to Step 5 rather than treating the failure as "clean."

If **both** the status and log commands succeed and return empty — no uncommitted changes anywhere in the working tree and no commits ahead of `origin/dev` at all — exit the workflow. The wording depends on whether Step 3's report actually had findings (tracked above):

> **If the report had zero findings of any kind:** "All checks clean. No fixes were needed, and there are no commits on this branch ahead of `origin/dev`. There's nothing to commit, push, or PR. The branch can be deleted with `git switch --detach origin/dev && git branch -d <branch-name>` (safe delete — refuses if there are unmerged commits; detaching onto the freshly fetched `origin/dev` avoids a false refusal from a stale or missing local `dev`). Note: this leaves you on a detached HEAD — check out or create a feature branch before starting the next article, or this skill's own Step 1 guard will stop you. Exiting the workflow."
>
> **If the report had findings that were reviewed and not applied** (dismissed as false positives, or the TSE declined them): "Findings were reviewed and none were applied. There are no commits on this branch ahead of `origin/dev`, so there's nothing to commit, push, or PR from this run. The branch can be deleted with `git switch --detach origin/dev && git branch -d <branch-name>` (safe delete — refuses if there are unmerged commits; detaching onto the freshly fetched `origin/dev` avoids a false refusal from a stale or missing local `dev`). Note: this leaves you on a detached HEAD — check out or create a feature branch before starting the next article, or this skill's own Step 1 guard will stop you. Exiting the workflow."

Never use the first variant when the report had findings — "no fixes were needed" is false in that case even if none were ultimately applied.

Do NOT prompt for local testing. Do NOT propose a commit message. Do NOT enter Step 7.

If either command returns output — uncommitted changes anywhere in the working tree, or any commit already on the branch ahead of `origin/dev` (for example, content committed by `kb-writer` in an earlier step) — proceed normally to Step 5, even if this skill run applied zero fixes.

## 5. Local testing

Prompt the TSE to test — do not run the build yourself:

> Run your local tests (`npm run start` or `npm run build`) and let me know the results when you are ready.

Wait for the results. Offer to include them in the commit message or PR description.

## 6. Stage and commit

Ask how the TSE wants to handle it. Always show the suggested commit message regardless of choice.

### Commit message format

```
<type>(kb/<product>): <imperative summary>
```

**Type:**
- `fix(kb/<product>):` — correcting violations or fixing broken things: Vale/Dale/Derek lint fixes, broken links, broken images, formatting violations, incorrect frontmatter values.
- `docs(kb/<product>):` — updating or adding content: new articles, rewriting sections, updating titles, restructuring.

**Scope:**
- Always include the product ID from `src/config/products.js` (e.g., `activitymonitor`, `threatmanager`, `passwordpolicyenforcer`).
- Single-product commit: `(kb/<product>)` — never use `(kb)` alone for a single-product change.
- Multi-product commit spanning multiple products: fall back to `(kb)` and name the products in the commit body.

**Examples:**
- ✓ `fix(kb/threatmanager): lint and style fixes for ransomware extension list article`
- ✓ `docs(kb/activitymonitor): update 7.0 paths title and formatting`
- ✓ `docs(kb/auditor): add new article on TLS 1.2 troubleshooting`
- ✗ `docs(kb): update Activity Monitor 7.0 paths ...` (scope too broad for a single-product change)
- ✗ `add(kb/...): ...` (non-standard type)

**Option A — I do it:** stage the files, show the commit message, wait for approval, commit.

**Option B — You do it:** provide ready-to-paste options — a terminal command (`git add <files> && git commit -m "..."`), or the commit message to paste into the VS Code Source Control UI or GitHub Desktop, with brief instructions.

## 7. Push and create PR

PRs always target `dev`.

> **STOP. Before drafting any PR title or description, two actions must happen in order:**
>
> 1. **Push the local branch to origin** — `git push` (or `git push -u origin <current-branch>` if upstream is not yet set).
> 2. **Pre-flight check:**
>    ```bash
>    gh pr list --head <current-branch> --base dev --state open --json number,url,title
>    ```

Proceed as a strict numbered sequence:

1. **Push the branch.**
   - Option A (skill does it): confirm with the TSE before pushing ("Ready to push `<branch>` to origin?"), then run `git push` (or `git push -u origin <current-branch>` if upstream is not yet set — check with `git rev-parse --abbrev-ref --symbolic-full-name @{u}` first, or just use `-u` unconditionally since it's a no-op when upstream already exists) on approval. This is a git operation and follows the same explicit-approval rule as every other git action in this skill.
   - Option B (TSE does it): provide the `git push` command and wait for TSE to confirm the push succeeded before continuing.
2. **Run the pre-flight gh pr list command above.**
3. **If the result is an empty array (`[]`)** → no existing PR → proceed to the **Create new PR** section below.
4. **If the result contains any PR** → existing PR found → do NOT run `gh pr create`. Proceed to the **Update existing PR** section below.

> **Failure mode warnings (both checks are mandatory):**
> - Skipping the push means the new commit never lands on the remote. The PR description will describe changes that don't exist on the branch. This happened in Test #8 and is a known regression.
> - Skipping the pre-check causes `gh pr create` to error out with "pull request already exists" and leaves the PR description stale and misleading. This also happened previously.
> - Both actions must fire before any drafting begins, in this order: push first, then pre-check.

### Update existing PR

1. Surface the existing PR's URL, title, and number.
2. Tell the TSE: "The new commit is on the existing PR. The PR description currently reflects earlier work and may not cover the new changes. Would you like me to update the description?"
3. Offer two options:
   - **Update description:** Draft an updated title and description covering both the existing content and the new additions. Show the draft and wait for approval (same approval gate as below), then run `gh pr edit <number> --title "<new>" --body "<new>"`.
   - **Leave as-is:** Confirm the push went through and stop.

### Create new PR

**PR approval gate (mandatory):** Before running `gh pr create` or providing copy-paste content, always:

1. Draft the PR title and description from the commits and change summary.
2. Show the full drafted title and description to the TSE in the chat.
3. Wait for explicit approval ("yes", "approved", "looks good", or similar) OR specific edits.
4. If the TSE provides edits, incorporate them and show the revised draft for another approval round. Repeat until approved.
5. Only after explicit approval, proceed with `gh pr create` or provide the final copy-paste content.

**Option A — I do it:** the branch is already pushed (Step 7 item 1, above). Show the drafted PR title and description, wait for approval, then run `gh pr create --base dev` with the approved content.

**Option B — You do it:** the branch is already pushed (Step 7 item 1, above). Show the drafted PR title and description, wait for approval, then provide the final approved content formatted for copy/paste and a direct link to GitHub's "New Pull Request" page for the branch.

### PR description format

The shape below is the canonical structure for KB PR descriptions.

**Omit** these sections entirely:
- Per-article filename listing ("Articles (N total)") — redundant with the Files Changed tab.
- Screenshot-note boilerplate — screenshot decisions are finalized in the SME meeting, not the PR description.

**Structure:**

```markdown
## Summary

<One short paragraph or a stat line: article count (e.g., "10 added, 1 retired") + product / batch context in one clause>

## Changes

- <Concise change categories across the whole batch — one line each, no per-article breakdown>
- <e.g., Condenses repetitive command-run steps into single steps with fenced code blocks>
- <e.g., Normalizes `Step N —` heading formatting across procedural articles>

## Testing

- kb-pr-open (Vale + Dale + Derek): <one-line pass statement, e.g., "0 Vale errors, Dale/Derek clean or documented false positives">
- Local build: <one-line pass statement, e.g., "successful, no broken links or anchor errors">

## SME Review Needed

1. **`filename.md`**
   — Brief issue statement. Follow-up prompt (Please decide / Please confirm / Please verify):
   - **UPDATE** (specific qualifier — what should be updated)
   - **KEEP** (accept current version)
   - **ARCHIVE** (remove and archive)
```

**SME Review Needed rules:**
- Only include this section if the PR carries **detail-level** UPDATE/KEEP questions. Article-level retire/archive questions belong in the SME meeting report, not in a PR. If a PR has no SME questions, omit the section entirely rather than leaving an empty header.
- Canonical options are **UPDATE / KEEP / ARCHIVE**. Include only the options that apply to a given item — not every item gets all three.
- **UPDATE** always carries a qualifier in parentheses spelling out what to update.
- **KEEP** always carries `(accept current version)`.
- **ARCHIVE** may carry `(remove and archive)` when clarity is needed.

# Branch Awareness Rules

- **Not prescriptive** — does not enforce a naming convention.
- **Guards against mistakes** — warns if on `dev` or `main`, suggests a name, waits for confirmation.
- **Suggests but does not require** — suggested format: `kb/<product>/<slug>` (for example, `kb/changetracker/update-agent-restart-article`).
- **Never auto-creates** a branch without explicit TSE approval.

# New vs Updated Articles

- New files: full review, no diff context needed.
- Updated files: review the full file (not just the diff); the same checks apply.

# Stopping Point for Testing

The TSE may want to run the review and fixes but stop before committing or opening the PR (for example, when testing the skill itself). If the TSE says to stop before a step, stop there and summarize what is left to do.
