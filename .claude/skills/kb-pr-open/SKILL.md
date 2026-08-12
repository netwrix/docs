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

**`WeakLinkText` fixes require a search, not just a rewrite.** Before proposing any fix for a Vale `WeakLinkText` finding, grep `docs/kb/**/*.md` and `docs/<product>/<version>/**/*.md` for a plausible real target based on the referenced topic (e.g., "Accounts and Required Permissions" → search for `accountreqs`, `account.*permission`). If a real target resolves, convert the prose into a proper link to it. Only rewrite the sentence to remove the implied reference if the search turns up nothing. Do not skip the search because the phrasing already implies no real link exists — the trigger already fired precisely because the phrasing looks like an implied reference, and the target often does exist on disk.

`BoilerplateCrossRef` is not part of `NetwrixKB` (it lives only in `.vale/styles/Netwrix/`), so it never fires on `docs/kb/` files under this skill's scope — do not treat a `BoilerplateCrossRef` finding as real if one somehow appears; verify the file's actual style scope first.

**Dale** — apply the Dale rules in `.claude/skills/dale/rules/*.yml` semantically (passive voice, minimizing-difficulty words, idioms, wordiness, undefined acronyms, and the rest). Do not re-implement them from memory — read the rule files.

**Derek** — read `kb_style_guide.md` from the repo root. Read the full article content and perform a holistic KB writing quality review across these areas:

| Area | What to check |
|------|--------------|
| **frontmatter** | All required fields present and valid: `title`, `description`, `sidebar_label`, `keywords` (8–12 items), `products` (must use the canonical product ID from `src/config/products.js` — no hyphens or underscores as word separators; `dataclassification`, `directorymanager`, `threatmanager` are correct; `data-classification`, `data_classification`, `directory-manager`, `threat-manager` are not), `tags` (must include `kb`), `knowledge_article_id` (see knowledge_article_id rules in Step 4 — its state is informational only; never propose adding, removing, or rewriting it). `sidebar_label` must not be truncated vs. `title`. |
| **article-type: structure** | Identify the article type (How-To Q&A, How-To Instructions, Resolution Error, Resolution Symptom). Verify the structure matches the type. **How-To structure:** How-To articles must use either Instructions form (`## Overview` + `## Instructions`) or Q&A form (`## Question` + `## Answer`). Articles with H1 + body prose but no recognized section structure are a Required structural fix — suggest Instructions form for procedural content or Q&A form for single-answer content; if the prose is missing procedural steps, flag that gap as a TSE-content-decision (kb-writer territory) rather than auto-generating steps. **Wrong-shape check (kb-writer feedback surfaced late):** even when the article DOES have a recognized structure, verify the shape fits the content. Q&A form is for simple procedures with one procedure and minimal caveat content. An article using Q&A form that actually contains two or more distinct procedures, multi-step workflows, or substantial caveat/note content should be flagged as a Required structural fix — restructure to `## Overview` + `## Instructions` with H3 subheadings per procedure. Ideally this decision is caught by `kb-writer` before reaching this skill; if it arrives here unresolved, apply it. |
| **article-type: qa-format** | **Q&A question format:** In Q&A articles, content under `## Question` (and interrogative sub-headings in FAQ-style articles) must be a complete interrogative sentence — starts with an interrogative word (How do you / How can you / How should you / How will you / Can you / Should you / What / When / Where / Why / Which / Who / Does / Is / Are) and ends with `?`. Use **second person ("you"), not first person ("I")**, per the kb_style_guide.md ("Use second person ('you') when addressing the reader"). "How to..." patterns (e.g., "How to export X?") are Required fixes — rewrite as "How do you export X?" or "Can you X?" as appropriate. Mark N/A if the article isn't Q&A form. |
| **article-type: heading-labels** | **Resolution section heading pluralization:** Section headings in Symptom Resolution articles are always singular: `## Symptom`, `## Cause`, `## Resolution` — even when the section contains multiple items. Flag `## Symptoms`, `## Causes`, `## Resolutions` as Required fixes. |
| **title: mechanical** | See "Title-format rules — two categories" below. Required fixes, apply on TSE approval, low ambiguity: gerund-form titles for How-To Instructions articles, title case correction, raw log-line/error-dump title normalization (rulebook §12), and the H1/`sidebar_label`-consistency check (`sidebar_label` must not be truncated vs. `title`). |
| **title: semantic** | See "Title-format rules — two categories" below. Soft reminders / judgment calls — surface with suggested alternatives and reasoning, never auto-apply: product-name-in-title and article-type/title mismatch. |
| **product-names** | Check that product names and IDs match the Product Long and Short Names table in the style guide. Flag incorrect abbreviations (NDC, NPS, NTA, etc.) and wrong `products` field values (for example, hyphens vs. underscores). |
| **keywords-quality** | Keywords should be specific and drawn from the article content — error codes, feature names, product names, common customer search terms. Flag if fewer than 8, if they are generic, or if important terms from the article are missing. If a keyword does not appear in the article body but could be a reasonable customer search term for the topic, note it as a low-priority observation rather than a required fix. |
| **images: location** | Check how images are referenced. KB images must be stored as PNG or WebP files in a `0-images/` folder at the **product level** (`docs/kb/<product>/0-images/`), not inside category subfolders. Articles in category subfolders reference them with `../0-images/filename.png` (or `.webp`). Flag any `0-images/` folders created inside category subfolders rather than at the product level. |
| **images: external-refs** | Flag any images linked from external sources (for example, GitHub CDN `https://github.com/user-attachments/assets/...`) — these must be downloaded and committed to the repo. |
| **images: alt-text** | Alt text must be descriptive, not just the filename. Flag any image where the alt text is only the raw filename (e.g., `![index_files_location.png](path)`) — rewrite as a short description of what the image shows, per `kb_style_guide.md` Screenshots section. |
| **links** | Find every internal markdown link in the article body — `[text](/docs/...)` and `[text](pathname:///docs/...)` patterns to other KB articles and to versioned product docs (rulebook §8 mandates the `pathname://` form for internal cross-doc links), **and** relative `.md` links (`[text](../other-article.md)`, `[text](./other-article.md)`) — `kb_style_guide.md`'s own "Do" example for internal links uses the relative-`.md` form, and it's in active use (roughly a dozen KB files). For each, resolve the actual target file on disk: check for a `slug` frontmatter override on the target first; if none, the URL segment (or relative path) must match the target's real path/filename (not its `sidebar_label` or `title`). Version segments must use underscores (`8_2`, not `8.2`) per rulebook §8 — flag a dotted version segment as a Required fix even if the rest of the path resolves. Flag any link whose URL does not resolve to a real file on disk as a Required fix, and correct it to the real path. Only genuinely external links (`http://`, `https://`, `mailto:`, etc.) are out of scope for this check. Backstop is `npm run build` — but `onBrokenLinks`/`onBrokenMarkdownLinks`/`onBrokenAnchors` in `docusaurus.config.js` only throw on a full build; a single-product build (`DOCS_PRODUCT=...`, the faster path `CLAUDE.md` recommends) relaxes all three to `warn`, so a broken link there won't fail the build. Either way, this check catches broken links before submission rather than relying on the backstop. |
| **formatting: bold/backticks** | Registry paths, registry value names, registry data, error codes (e.g., `0x80070005`, `0x80004005`), commands, and executable names use inline code (backticks). UI element names (button labels, menu items, field names) use **bold** only when they are action targets in the current step (buttons being clicked, fields being filled, dropdowns being selected, menu items being chosen) — a UI element mentioned as context only (not acted on in this step) does not get bold. Flag bolded UI elements that are not action targets as Required fixes. ✓ "Click **Save**." ✓ "Select **PDF** from the **Save as type** dropdown." ✗ "The file appears under the Save as type column." — no bold on contextual reference. |
| **formatting: lists** | Sequential procedures must be numbered lists, not prose — this applies to Resolution sections and any sub-sections within them (e.g., verification steps), not just top-level procedures. Multi-line commands and command output should use fenced code blocks. |
| **prose-directness** | Flag sentences where an impersonal subject ("the operation", "the process", "the system") performs an action that the actual actor or action could express more directly. Example: "the operation fails with an error" → "Clicking X fails with an error". Apply judgment — not every impersonal subject is wrong, but flag cases where a direct rewrite is clearly cleaner. |

> **Multi-file coverage mandate:** For every file passed to the skill — including each individual file in a multi-file invocation — run the full Derek frontmatter sweep across all areas: `tags`, `products`, `keywords`, `sidebar_label`, `title`/title-format, and `knowledge_article_id`, plus `images` and `links`. Do not abbreviate or skip any area. If the same finding applies to multiple files (for example, all files have the same wrong `products` value), still list it under each file individually in the report — do not consolidate. A partial sweep on any single file is a coverage gap and causes downstream rework.

Do NOT flag contractions, heading case, passive voice, jargon, or undefined acronyms in this section — those belong to Vale and Dale respectively.

> **IMPORTANT:** When applying fixes, follow `kb_style_guide.md`, not `docs/CLAUDE.md`. KB articles differ from the docs style guide on contractions (write out in full) and heading case (title case).

### KB Editing Conventions Scan (Derek subsection)

The canonical rulebook lives in the netwrix/docs repo at `.claude/references/kb-editing-conventions.md` — read it before every batch, because it evolves per batch. Do not duplicate its full text here; treat the checklist below as the mechanical scan patterns the skill must run every time.

Run this scan on every file in addition to the Derek areas table above. Each item maps to a rule in the rulebook; flag under Derek with `kb-editing-conventions` as the area.

| # | Scan pattern | What to flag / fix |
|---|--------------|--------------------|
| 1 | `:::note`/`:::tip`/`:::info`/`:::warning`/`:::danger`/`:::important` or `> **NOTE:**` / `> **IMPORTANT:**` blockquote inside a numbered list item | The callout must be indented **4 spaces** to attach to the preceding step. Fewer than 4 spaces breaks the list at CommonMark render time — this is a build-breaker, not a style nit. |
| 2 | `## Overview` that opens with rationale/context rather than an explicit goal sentence, OR restates the title verbatim, OR reads as a bare symptom/condition | Rewrite so the first sentence states the goal: `This article describes how to <goal>` or equivalent (`explains...`, `shows how to...`). Rationale/context is fine as follow-on, but must not come first. See rulebook §7. |
| 3 | Literal string `<!-- link removed -->` in the article body | Search `docs/kb/**/*.md` and `docs/<product>/<version>/**/*.md` for a plausible target before shipping. If a real target exists, restore the cross-link; otherwise leave the comment and note it as unresolved. |
| 4 | Same UI element or app name bolded in some places and unbolded in others within the same file | Normalize to consistent bolding across all occurrences in that article (see rulebook §6 for which nouns qualify). |
| 5 | Trailing periods inside markdown table cells | Strip them. Vale and Dale skip table content, so these slip through unless caught here. |
| 6 | Numbered step ending on a bare `Click **X**.` with no observable result | Add a closing sentence describing what happens (dialog appears, list updates, etc.) OR combine with the next click step using `..., then click **Y**`. |
| 7 | Any "contact Netwrix Support" phrasing without the standard link | Standard form is `[Netwrix Support](https://www.netwrix.com/support.html)`. Link only the first "contact" mention per article. |
| 8 | `## Instructions` section with 3+ sequential subheadings | **Two-gate rule (rulebook §1).** **Gate A — consolidate first:** identify any subheading containing ≤1 action step that reads as prep/cleanup for an adjacent group (Stop Services / Start Services around an install, "Save and Exit" trailing a config edit, a lone "Restart" after a settings change), AND any cluster of thin "Remove X"-style subheadings that are really line-items off a single logical task. Merge each into the neighboring substantive group before counting. **Repetition is a signal for Gate A, not for NOTE-hoisting.** If multiple subheadings share the same lead-in ("On the Directory Manager machine, navigate to…"; "Open IIS by typing `inetmgr`…"), the repetition itself signals that the subheadings should merge — after merging, the shared context becomes one natural lead-in sentence at the top of the merged step. Do not reach for NOTE hoisting first; NOTE is for caveats, not procedural framing (see rulebook §1). **Gate B — normalize:** if ≥3 substantive subheadings remain after Gate A and represent sequential steps of the same procedure, rename to `Step N — <Label>` (em dash, not colon; normalize any pre-existing `Step N:`). Exclude a Troubleshooting/exception-handling subheading (and anything nested beneath it) from both the count and the labeling — it's a categorically different kind of section even at matching heading depth. Does NOT apply to parallel-alternative subheadings (Windows/Linux). Apply companion condensation rules (rulebook §2) at the same time. **Worked example:** `add-ssl-certificate-on-linux.md` originally had four subheadings (Stop Services / Copy Files / Change Nginx Config / Start Services). After Gate A, only two substantive groups remain (Install / Configure Nginx) — Gate B does not fire and no `Step N —` labels are applied. |
| 9 | 2+ consecutive numbered steps that each read `Enter the following command: X.` | Condense into a single step: `Enter the following commands in order:` followed by a bulleted list or a fenced multi-line code block. Applies even at 2-3 repetitions for within-file consistency. |
| 10 | A numbered "step" that describes a result rather than an action ("All collections appear in the output.") sitting between real action steps | Pull it out of the numbering — fold as a parenthetical on the preceding action, or set as unnumbered prose beneath it. |
| 11 | A subheading under `## Instructions` whose content is purely descriptive/observational (no action for the reader to perform) | Restructure it into its own labeled section (e.g., `Reviewing X`) using prose or a bulleted fact list — not fake numbered "steps." Every subheading under Instructions must contain an actual action. |
| 12 | A numbered step whose sub-list uses nested `1.` `2.` `3.` numbering | Convert the nested sub-list to `-` dashes. Numbered-inside-numbered renders ambiguously and reads as a restart; dashes make the parent/child relationship explicit. |
| 13 | A single `## Instructions` or `## Resolution` section holding two or more distinct activities with no subheadings (wall-of-text) | Split by distinct activity into H3 subheadings. Mirror of row 8's over-fragmentation — under-fragmentation is equally broken. Route to `kb-writer` first if the split requires content judgment; apply here if the activity boundaries are unambiguous from the existing prose. |
| 14 | An action that logically belongs in a numbered sequence but sits as trailing prose after the last numbered step (e.g., "Then start the services." as a paragraph following step N) | Pull the action into the numbered sequence as its own step, matching the structure of parallel actions in the article. Mirror of row 10 (result-as-step) — this is action-as-prose. |
| 15 | A subheading (`###` or `####`) that wraps a single trivial element — most commonly a lone code block labeled `### Example Error Message` or similar | Remove the subheading and lead in with a short sentence ("Example error:") followed by the code block. A heading implies a navigable standalone unit; a lone error block is not one. Scope is not restricted to Instructions. |
| 16 | A numbered list containing exactly one item (`1. Do X.` with no step 2) | Convert to a plain imperative sentence. Numbered lists imply a sequence; a one-item sequence is a mislabeled sentence. Rulebook §3. |
| 17 | A single list item with 3+ comma- or semicolon-separated clauses reading as a run-on ("Full control of the application, including adding domains, forests, and tenants; configuring notifications; and managing other users…") | Break into a lead-in phrase followed by nested `-` sub-bullets. Route to `kb-writer` if the phrasing needs judgment; apply mechanically here when the split points are unambiguous. Rulebook §3. |
| 18 | Descriptive "what this account/component does" bullets sitting *after* a numbered configuration procedure | Reorder as short intro prose *before* the numbered steps. Distinct from row 10 (result-as-step); this is about background-fact placement relative to actions. Route content-heavy rewrites to `kb-writer`. Rulebook §1. |
| 19 | List items that mix complete sentences and fragments, or inconsistent end-punctuation across items | Rewrite for grammatical parallelism (all complete sentences or all fragments) and consistent end-punctuation (either every item ends with a period, or none does). Rulebook §3 / `kb_style_guide.md`. |
| 20 | A list that appears with no lead-in sentence, reading disjointed from surrounding prose | Add a short intro sentence ending in a colon. Route to `kb-writer` when the intro needs content judgment; apply here when the missing context is obvious from the surrounding prose. Rulebook §4. |
| 21 | A paragraph with 3+ inline cross-reference clauses ("see X, see Y, see Z") stacked in one sentence | Collapse into a single NOTE block with the links listed cleanly (compact enumeration or short bulleted list under the NOTE). Rulebook §8. |
| 22 | A positional reference ("above"/"below"/"the section on X") that points to a named section in the same file | Replace with `[Section Name](#section-slug)` rather than rewording the positional term away. This is the concrete execution of Dale's `positional-references` suggestion. Rulebook §4. |
| 23 | Either (a) `:::note` / `:::tip` / `:::info` / `:::warning` / `:::danger` / `:::important` Docusaurus admonition syntax anywhere in the article body, **or** (b) a `> **<SEVERITY>:**` blockquote whose severity is not `NOTE` or `IMPORTANT` (e.g. `> **TIP:**`, `> **WARNING:**`, `> **CAUTION:**`, `> **DANGER:**`, `> **INFO:**`) — a callout can already be in blockquote form and still have the wrong severity label | KB articles use the blockquote callout format — only two severities exist, `NOTE` and `IMPORTANT` — not Docusaurus `:::` admonitions, and not any other blockquote severity label, per `.claude/skills/derek/SKILL.md` §7 (Admonition Format). Map `:::note`/`> **TIP:**`/`> **INFO:**`/etc. → `> **NOTE:**` and `:::warning`/`> **DANGER:**`/`> **CAUTION:**`/etc. → `> **IMPORTANT:**`. If the callout sits inside a numbered list item, apply row 1's 4-space indentation rule to the converted/relabeled blockquote. |

### Cross-section consistency scan

Run this scan on every file in addition to the row-based table above. These rules compare two sections of the same article against each other — section-local scans miss them because each section reads correctly on its own. Rulebook §11.

| Pattern | What to flag / fix |
|---------|--------------------|
| Symptom section describes the mechanism ("the service fails to start because …") in addition to the observation | Trim Symptom to observation only. Move mechanism content into Cause. |
| Cause section repeats the observed behavior without explaining why | Route to `kb-writer` — this is a content-depth gap, not a mechanical fix. |
| Acronym defined on first use (e.g., "two-factor authentication (2FA)") but subsequent references in body/headings/notes use the long form | Replace subsequent long-form uses with the acronym. Dale only catches undefined acronyms; this is the other half of consistent use. |
| Product's full name (e.g., "Netwrix Change Tracker") repeated three or more times in close proximity where context is already established | After the product's full name has been established (typically Overview or first Symptom sentence), later mentions can drop the "Netwrix" prefix or the full name entirely when unambiguous. Do not strip mechanically — apply where the reader would not lose context. |
| Related Articles link (or bottom-of-file bullet link) to a topic never mentioned anywhere in the article body | Remove the orphaned link. Every Related Articles entry must have a topical anchor in the body (mentioned, compared, ruled out, etc.). |
| Named permission types or access rights capitalized inconsistently within the same file (e.g., "Write permission" alongside "read and write access" referring to the same right) | Normalize capitalization across the article. Common named rights: Domain Admin, Read, Write, Read/Write, Full Control, Modify. Pick one convention per named right and apply throughout. Rulebook §11. |

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

- **Title-change → link-text sweep (rulebook §8).** If a title fix was applied to any file, run a repo-wide search for internal markdown links whose visible text uses the *old* title and update the link text to match the new title. URL resolution alone is not sufficient — visible link text must describe the current target. Concrete: `grep -rE '\[<old title>\]\((pathname://)?/docs/|\[<old title>\]\(\.{1,2}/' docs/` — this covers all three internal link forms (`/docs/...`, `pathname:///docs/...`, and relative `.md` links like `../other-article.md`). Before interpolating the old title into this pattern, escape *every* ERE metacharacter in it (`.  * + ? ( ) [ ] { } | ^ $`), not just the common ones — titles can contain any of these (e.g. `?` in a How-To Q&A title like `How Do You Export Event Logs?`), and an unescaped metacharacter changes what the pattern matches without erroring, so a stale-link-text hit can be silently missed. If escaping the full set feels error-prone to do inline, use `grep -rF` on the literal `[<old title>](` substring instead and filter for the internal-link forms afterward — fixed-string matching sidesteps metacharacter escaping entirely. Apply the link-text updates as part of the same commit as the title fix.

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

### knowledge_article_id rules (flag state, never force change)

The `knowledge_article_id` field's *presence or absence* is informational, not corrective — the skill must never propose adding or removing the field. Its *format*, when present and non-empty, is corrective: it must start with `kA` followed by alphanumeric characters (per `derek/SKILL.md` §1). The four states below are valid, no-action-needed states; the fifth (malformed) is the one exception that gets a Required fix.

| State | Finding | Action |
|-------|---------|--------|
| Real ID (e.g., `kA04u0000000HuTCAU`) | None | Clean — no finding. |
| Placeholder (contains `XXXX`, `TODO`, `TBD`, or obvious template markers) | Soft reminder | "Placeholder detected — populate with the real `knowledge_article_id` if applicable, or leave as-is if no ID applies." |
| Empty string (`knowledge_article_id: ""`) | Soft reminder | "Field is empty — populate if applicable, or leave as-is if no ID applies." |
| Field missing entirely | Soft reminder | "Field is not present. This is a valid state for a natively authored article — no action needed unless the article originated from an external ticket." |
| Present, non-empty, and not a recognized placeholder, but does not start with `kA` followed by alphanumeric characters (e.g., `knowledge_article_id: "12345"`) | **Required fix** | "`knowledge_article_id` doesn't match the expected Salesforce/Zendesk ID format (`kA` + alphanumeric). Correct it to the real ID or clear it — this value can't be a valid ID as written." |

**Never propose removing the field when it exists** — its presence preserves the provenance signal (this article expects an external ID).

**Never propose adding the field when missing** — the article may be natively authored and may not need one.

Reasoning: whether the field exists at all is the TSE's call, and the skill only surfaces that. Whether an existing, non-empty value is a well-formed ID is not a judgment call — a value that can't be a real Salesforce/Zendesk ID gets flagged like any other format violation.

### Title-format rules — two categories

Title findings split into two categories based on whether the change is mechanical or semantic.

**Mechanical style corrections — Required fixes (surface, apply on TSE approval):**

- **gerund-for-How-To-Instructions:** "How to..." prefix → gerund form (e.g., "How to Export Event Logs" → "Exporting Event Logs"). Applies only to How-To Instructions form articles (`## Overview` + `## Instructions` structure). Does NOT apply to How-To Q&A articles — Q&A titles describe the topic, not the action, and the interrogative form lives in the `## Question` section.
- **Title case correction** (e.g., "configure stopwords" → "Configuring Stopwords"). Applies to all article types.
- **Raw log line / error dump titles** (rulebook §12): titles containing literal log-level tokens (FATAL, ERROR, WARN), stack noise, file paths, or truncation fragments (e.g., `ConfigurationLoader FATAL Hub Location Details Have Not Been Specified in HubDetails.xml at ...`) → normalize to `<Component> Error - <core diagnostic phrase>`, keeping only the searchable message. Examples: `ConfigurationLoader Error - Hub Location Details Have Not Been Specified`; `TraceLogger Error - Address Already in Use`; `Remote Platform Discovery Error - Could Not Get Credentials`. This form **wins over and is exempt from** the `Error:` *prefix* convention required for Resolution (Error) titles generally (`Error: [Unique Error Code/Message]`, per `kb_style_guide.md` and `derek/SKILL.md` §3) — the inline `Error` word already disambiguates the title, so don't also prepend `Error:`. A Resolution (Error) title only needs the `Error:` prefix when it isn't already in this normalized log-dump form.
- **H1 / `sidebar_label` consistency:** `sidebar_label` must not be truncated vs. `title`.

These changes are low-ambiguity and preserve reader recognition — the article is still "the one about X," just with corrected surface form. Apply them per the normal fix-loop.

**Semantic reframes — soft reminders / judgment calls (TSE decides, never auto-apply):**

- Product name in title (e.g., "Antivirus Exclusions for Netwrix Data Classification" → drop "for Netwrix Data Classification").
- Article-type / title mismatch (e.g., Symptom Resolution structured article with a procedural-sounding title).

These changes alter what the article appears to be *about* from the reader's perspective. They can break recognition for users searching by remembered title. The file path doesn't change so bookmarks survive, but readers don't navigate by URL — they navigate by name. For every semantic reframe finding:

1. **Flag the specific issue.**
2. **Suggest one or more alternative titles** with reasoning. Multiple options are welcome.
3. **Defer to the TSE.** Don't auto-apply. Don't argue if the TSE leaves the title alone — established titles often carry recognition weight that style purity doesn't outweigh.

This applies equally to new article drafts and updates to existing articles. The TSE owns semantic title decisions.

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
