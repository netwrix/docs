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

**`WeakLinkText` / `BoilerplateCrossRef` fixes require a search, not just a rewrite.** Before proposing any fix for a Vale `WeakLinkText` or `BoilerplateCrossRef` finding, grep `docs/kb/**/*.md` and `docs/<product>/<version>/**/*.md` for a plausible real target based on the referenced topic (e.g., "Accounts and Required Permissions" → search for `accountreqs`, `account.*permission`). If a real target resolves, convert the prose into a proper link to it. Only rewrite the sentence to remove the implied reference if the search turns up nothing. Do not skip the search because the phrasing already implies no real link exists — the trigger already fired precisely because the phrasing looks like an implied reference, and the target often does exist on disk.

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
| **article-type** | **Article Types** | **Wrong-shape check:** verify the article's structure fits its content, not just that a recognized structure exists. Q&A form is for simple procedures with one procedure and minimal caveat content. An article using Q&A form that actually contains two or more distinct procedures, multi-step workflows, or substantial caveat/note content should be flagged as a Required structural fix — recommend restructuring to `## Overview` + `## Instructions` with H3 subheadings per procedure. |
| **title-format** | **Article Titles** and the title format rules within **Article Types** | Do NOT flag `> **NOTE:**` blockquote callouts — this is correct KB format, not a Docusaurus `:::note` admonition. If a product component name appears in the title (e.g., a client, agent, or add-on) and is essential to distinguishing the article from others about the same product, flag it as a judgment call rather than a required fix. **Raw log line / error dump titles** (rulebook §12): titles containing literal log-level tokens (FATAL, ERROR), stack noise, file paths, or truncation fragments are Required fixes — normalize to `<Component> Error - <core diagnostic phrase>`, keeping only the searchable message. Examples: `ConfigurationLoader Error - Hub Location Details Have Not Been Specified`; `TraceLogger Error - Address Already in Use`. Separate from the retired `Error:` prefix convention. |
| **product-names** | **Product Names** | Always cross-check product IDs against `src/config/products.js` — the style guide table may be outdated. The config file is authoritative. |
| **keywords-quality** | **Frontmatter > Required fields > keywords** | If a keyword does not appear in the article body but is a plausible legacy or alternate search term (e.g., an old product acronym), note it as a low-priority observation rather than a required fix. |
| **images** | **Screenshots** | KB image structure is not in the style guide — apply this rule: images must be stored as PNG files in `0-images/` at the **product level** (`docs/kb/<product>/0-images/`), not inside category subfolders. Articles in category subfolders reference them with `../0-images/filename.png`. Flag any images linked from external sources (e.g., GitHub CDN URLs) — they must be downloaded and committed to the repo. **Alt text must be descriptive, not just the filename.** Flag any image where the alt text is only the raw filename (e.g., `![index_files_location.png](path)`) — rewrite as a short description of what the image shows, per the Screenshots section. |
| **links** | (not in style guide) | Find every internal markdown link in the article body — `[text](/docs/...)` patterns to other KB articles and to versioned product docs. For each, resolve the actual target file on disk: check for a `slug` frontmatter override on the target first; if none, the URL segment must match the target's real path/filename (not its `sidebar_label` or `title`). Flag any link whose URL does not resolve to a real file on disk as a Required fix, and correct it to the real path. External links (non-`/docs` URLs) are out of scope. Backstop is `npm run build` (`onBrokenLinks: 'throw'` in `docusaurus.config.js`), but that runs late — this check catches broken links before submission. |
| **formatting** | **Markup Conventions** and **Lists** | The style guide's "single backticks for inline code" applies to error codes (e.g., `0x80070005`) — flag any error code in plain text. Sequential procedures must be numbered lists — this applies to Resolution sections and all sub-sections within them (e.g., verification steps), not just top-level procedures. |
| **prose-directness** | **Voice and Tone > Impersonal constructions** and **Words and phrases to avoid** | Flag sentences where an impersonal subject ("the operation", "the process", "the system") could be replaced with the actual actor for a cleaner, more direct sentence. Example: "the operation fails with an error" → "Clicking **X** fails with an error". Apply judgment — not every impersonal subject is wrong. |

Do NOT flag contractions, heading case, passive voice, jargon, or undefined acronyms — those belong to Vale and Dale respectively.

**KB Editing Conventions Scan (Derek subsection).** In addition to the areas table above, run the checklist below on every file. These are mechanical scan patterns codified during batch reviews; they map to the canonical rulebook at `.claude/references/kb-editing-conventions.md`. Do not duplicate the rulebook's full text here — treat the checklist as the minimum sweep. If a batch surfaces a new pattern, amend the rulebook and add the corresponding scan row here in the next PR.

| # | Scan pattern | What to flag / fix |
|---|--------------|--------------------|
| 1 | `:::note`/`:::important`/`:::warning`/`:::tip` or `> **NOTE:**` / `> **IMPORTANT:**` / `> **WARNING:**` blockquote inside a numbered list item | The callout must be indented **4 spaces** to attach to the preceding step. Fewer than 4 spaces breaks the list at CommonMark render time — this is a build-breaker, not a style nit. |
| 2 | `## Overview` that opens with rationale/context rather than an explicit goal sentence, OR restates the title verbatim, OR reads as a bare symptom/condition | Rewrite so the first sentence states the goal: `This article describes how to <goal>` or equivalent (`explains...`, `shows how to...`). Rationale/context is fine as follow-on, but must not come first. |
| 3 | Literal string `<!-- link removed -->` in the article body | Search `docs/kb/**/*.md` and `docs/<product>/<version>/**/*.md` for a plausible target before shipping. If a real target exists, restore the cross-link; otherwise leave the comment and note it as unresolved. |
| 4 | Same UI element or app name bolded in some places and unbolded in others within the same file | Normalize to consistent bolding across all occurrences in that article. |
| 5 | Trailing periods inside markdown table cells | Strip them. Vale and Dale skip table content, so these slip through unless caught here. |
| 6 | Numbered step ending on a bare `Click **X**.` with no observable result | Add a closing sentence describing what happens (dialog appears, list updates, etc.) OR combine with the next click step using `..., then click **Y**`. |
| 7 | Any "contact Netwrix Support" phrasing without the standard link | Standard form is `[Netwrix Support](https://www.netwrix.com/support.html)`. Link only the first "contact" mention per article. |
| 8 | `## Instructions` section with 3+ sequential subheadings | **Two-gate rule (rulebook §1).** **Gate A — consolidate first:** identify any subheading containing ≤1 action step that reads as prep/cleanup for an adjacent group (Stop Services / Start Services around an install, "Save and Exit" trailing a config edit, a lone "Restart" after a settings change). Merge each into the neighboring substantive group before counting. **Gate B — normalize:** if ≥3 substantive subheadings remain and represent sequential steps of the same procedure, rename to `Step N — <Label>` (em dash, not colon; normalize any pre-existing `Step N:`). Exclude a `Troubleshooting`/exception-handling subheading (and anything nested beneath it) from both the count and the labeling — it's a categorically different kind of section even at matching heading depth. Does NOT apply to parallel-alternative subheadings (Windows/Linux). Apply companion condensation opportunities at the same time. **Repetition is a Gate A signal, not a NOTE-hoist signal:** if multiple subheadings share the same lead-in ("On the DM machine, navigate to…"; "Open IIS by typing `inetmgr`…"), the repetition itself means the subheadings should merge — the shared context then becomes one natural lead-in sentence at the top of the merged step, not a NOTE block. Only hoist to a NOTE when the shared content is a caveat/warning (timing, permissions, state that breaks the procedure if ignored), never for procedural framing. Combine consecutive UI actions with "X, then Y" phrasing where applicable. |
| 9 | 2+ consecutive numbered steps that each read `Enter the following command: X.` | Condense into a single step: `Enter the following commands in order:` followed by a bulleted list or a fenced multi-line code block. Applies even at 2-3 repetitions for within-file consistency. |
| 10 | A numbered "step" that describes a result rather than an action ("All collections appear in the output.") sitting between real action steps | Pull it out of the numbering — fold as a parenthetical on the preceding action, or set as unnumbered prose beneath it. |
| 11 | A subheading under `## Instructions` whose content is purely descriptive/observational (no action for the reader to perform) | Restructure it into its own labeled section (e.g., `Reviewing X`) using prose or a bulleted fact list — not fake numbered "steps." Every subheading under Instructions must contain an actual action. |
| 12 | A numbered step whose sub-list uses nested `1.` `2.` `3.` numbering | Convert the nested sub-list to `-` dashes. Numbered-inside-numbered renders ambiguously and reads as a restart; dashes make the parent/child relationship explicit. |
| 13 | A single `## Instructions` or `## Resolution` section holding two or more distinct activities with no subheadings (wall-of-text) | Split by distinct activity into H3 subheadings. Mirror of row 8's over-fragmentation. |
| 14 | An action that logically belongs in a numbered sequence but sits as trailing prose after the last numbered step (e.g., "Then start the services." as a paragraph) | Pull the action into the numbered sequence as its own step, matching the structure of parallel actions. Mirror of row 10 (result-as-step). |
| 15 | A subheading (`###` or `####`) that wraps a single trivial element — most commonly a lone code block labeled `### Example Error Message` | Remove the subheading and lead in with a short sentence ("Example error:") followed by the code block. A heading implies a navigable standalone unit; a lone error block is not one. |
| 16 | A numbered list containing exactly one item (`1. Do X.` with no step 2) | Convert to a plain imperative sentence. Numbered lists imply a sequence; a one-item sequence is a mislabeled sentence. Rulebook §3. |
| 17 | A single list item with 3+ comma- or semicolon-separated clauses reading as a run-on ("Full control of the application, including adding domains, forests, and tenants; configuring notifications; and managing other users…") | Break into a lead-in phrase followed by nested `-` sub-bullets. Route to `kb-writer` if the phrasing needs judgment; apply mechanically here when the split points are unambiguous. Rulebook §3. |
| 18 | Descriptive "what this account/component does" bullets sitting *after* a numbered configuration procedure | Reorder as short intro prose *before* the numbered steps. Distinct from row 10 (result-as-step); this is about background-fact placement relative to actions. Route content-heavy rewrites to `kb-writer`. Rulebook §1. |
| 19 | List items that mix complete sentences and fragments, or inconsistent end-punctuation across items | Rewrite for grammatical parallelism (all complete sentences or all fragments) and consistent end-punctuation (either every item ends with a period, or none does). Rulebook §3 / `kb_style_guide.md`. |
| 20 | A list that appears with no lead-in sentence, reading disjointed from surrounding prose | Add a short intro sentence ending in a colon. Route to `kb-writer` when the intro needs content judgment; apply here when the missing context is obvious from the surrounding prose. Rulebook §4. |
| 21 | A paragraph with 3+ inline cross-reference clauses ("see X, see Y, see Z") stacked in one sentence | Collapse into a single NOTE block with the links listed cleanly (compact enumeration or short bulleted list under the NOTE). Rulebook §8. |
| 22 | A positional reference ("above"/"below"/"the section on X") that points to a named section in the same file | Replace with `[Section Name](#section-slug)` rather than rewording the positional term away. This is the concrete execution of Dale's `positional-references` suggestion. Rulebook §4. |
<!-- Row 23 removed — the title-change link-text sweep is post-fix, not part of the pre-fix scan. It now lives under Step 10 (Apply fixes with reviewer approval). See "Post-fix sweeps" there. -->

**Cross-section consistency scan.** Run these checks in addition to the row-based table. These compare two sections of the same article against each other — section-local scans miss them. Rulebook §11.

| Pattern | What to flag / fix |
|---------|--------------------|
| Symptom section describes the mechanism ("the service fails to start because …") in addition to observation | Trim Symptom to observation only. Move mechanism content into Cause. |
| Cause section repeats observed behavior without explaining why | Route as content-depth gap (kb-writer territory); do not attempt to auto-write mechanism content. |
| Acronym defined on first use but subsequent references use the long form | Replace subsequent long-form uses with the acronym. Dale only catches undefined acronyms; this is the other half of consistent use. |
| Product's full name repeated three or more times where context is already established | After Overview/first Symptom sentence establishes the product, later mentions can drop the "Netwrix" prefix or full name when unambiguous. Do not strip mechanically. |
| Related Articles link (or bottom-of-file bullet link) to a topic never mentioned in the article body | Remove the orphaned link. Every Related Articles entry must have a topical anchor in the body. |
| Named permission types or access rights capitalized inconsistently within the same file (e.g., "Write permission" alongside "read and write access" referring to the same right) | Normalize capitalization across the article. Common named rights: Domain Admin, Read, Write, Read/Write, Full Control, Modify. Pick one convention per named right and apply throughout. Rulebook §11. |

Record each finding as: `area | finding | recommendation`.

---

### Step 9 — Compile and present the report

#### Coverage discipline (mandatory before composing the report)

Before composing the Overview table or any findings sections, work through each named/numbered rule explicitly. Enumerate:

1. **Dale rules** — anchor the total N with a real shell command *before* the scratch pass, not model recall: `ls .claude/skills/dale/rules/*.yml | wc -l`. Use that number verbatim in the Dale row's `N/N scanned` status. Then walk each rule file by name, one at a time, marking hit/clean. If the number of rules you walk differs from N from the shell command, that's the bug surfacing — do NOT silently reconcile by lowering N to match what you enumerated. Fix the scratch pass so all N are covered.
2. **kb-editing-conventions scan** — walk each row of the scan table by row number. Mark hit/clean for each.
3. **Cross-section consistency patterns** — walk each of the 6 patterns one at a time. Mark hit/clean for each.
4. **Derek areas** — walk every area listed in Step 8's areas table (frontmatter sub-fields, article-type, title/H1/sidebar_label, product-names, keywords quality, images, links, formatting, prose-directness). Mark hit/clean for each.

Only after this per-item scratch pass — never before — compose the Overview table and the findings sections. **Skipping the enumeration to write the table first is a coverage regression, however clean the output looks.** The reason the frontmatter sub-field row format catches misses is that it forces the model to account for each sub-field explicitly; the enumeration pass extends that discipline to Dale, the scan-table rows, and the cross-section patterns, where "Clean" and "unscanned" are otherwise visually identical.

**Compact report format.** Do not print a row per rule with "Clean" / "N/A" / "Not present" verdicts. Verbosity has been a real cost — the report surfaces *what needs a decision*, not exhaustive proof of coverage. Coverage is enforced by the discipline above and by the row inventory of the Overview table, not by expanding every clean rule into a full sub-table.

Per-file structure:

**1. Overview table (always).** A compact table listing every check category and its status — findings count or ✓ Clean. Clean verdicts live only here; they do not reappear in the sections below.

**Rows required on every file:**

- One row per Vale, Dale.
- **Frontmatter sub-fields — one row each:** `title`, `description`, `sidebar_label`, `keywords`, `products`, `tags`, `knowledge_article_id`. Every sub-field must appear as its own row on every file, with an explicit ✓ Clean or a findings count. A single "Derek — frontmatter | 2 required fixes" row hides sub-field misses (e.g., a missing `kb` tag going unflagged because two other sub-fields already filled the count). Sub-field rows make coverage visually auditable at a glance.
- One row per other Derek area: `article-type / structure`, `title / H1 / sidebar_label`, `product-names`, `images`, `links`, `formatting`, `prose directness`.
- One row for the `kb-editing-conventions scan (rows 1–22)`.
- One row for `Cross-section consistency (all patterns)`.

That row inventory is the coverage receipt.

Example shape:

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
| Derek — article-type / structure | ✓ Clean |
| Derek — title / H1 / sidebar_label | 1 required fix |
| Derek — product-names | ✓ Clean |
| Derek — images | 1 required fix |
| Derek — links | 1 required fix |
| Derek — formatting | ✓ Clean |
| Derek — prose directness | ✓ Clean |
| kb-editing-conventions scan (22 rows) | 22/22 scanned, 2 findings (rows §7, §8) |
| Cross-section consistency (6 patterns) | 6/6 scanned, 1 finding (product-name repetition) |
```

**N/N scanned discipline.** The Dale row, the kb-editing-conventions scan row, and the cross-section consistency row must include an `N/N scanned` count in the status cell. The count comes from the enumeration pass above — it's a self-verifying receipt (the model can't write "22/22" without having walked all 22 rows in the scratch pass). Replace `N` in the Dale row with the actual count of loaded `.yml` files.

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
| Derek — frontmatter | 2 required fixes |
| ... | ... |

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

After presenting the report, ask the reviewer:

> Ready to apply fixes? You can share any feedback or adjustments first, or say yes to proceed.

Wait for the reviewer's response. Incorporate any feedback, then apply all fixes to the affected files.

#### Post-fix sweeps

Some checks only make sense *after* fixes have landed. Run these once the fix loop has closed:

- **Title-change → link-text sweep (rulebook §8).** If a title fix was applied to any file, run a repo-wide search for internal markdown links whose visible text uses the *old* title and update the link text to match the new title. URL resolution alone is not sufficient — visible link text must describe the current target. Concrete: `grep -rE '\[<old title>\]\(/docs/' docs/` (adjust for slashes/special chars). Apply the link-text updates as part of the same commit as the title fix.

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

- **Overview table is the coverage receipt.** Every frontmatter sub-field (`title`, `description`, `sidebar_label`, `keywords`, `products`, `tags`, `knowledge_article_id`), every other Derek area, and the two scan groups must appear as their own row on every file — with either a findings count or ✓ Clean. A single collapsed "frontmatter" row is NOT sufficient; it hides sub-field misses. This is where coverage is enforced, not by expanding "Clean" verdicts into full sub-tables.
- **Findings sections omit clean checks entirely.** For a tool that fired no findings, no findings section appears — the Overview row is sufficient. Do NOT include "✅ No X violations" placeholder sections in the findings area.
- **No rule-by-rule "Clean" / "N/A" / "Not present" rows** in findings sections. Do not print a per-rule table showing which rules found nothing. If more granular coverage is needed for debugging, use `+ verbose` on invocation (future).
- **No filler sentences confirming what wasn't found** (e.g., "No hits for minimizing-difficulty, idioms, ..."). If the Overview row says ✓ Clean, that's the whole statement.
- Column names: Vale `Line | Rule | Severity | Finding`; Dale `Location | Rule | Finding + suggested rewrite`; Derek `Area | Location | Finding | Suggested fix`.
- Keep findings specific and actionable. Vague observations don't belong in the report.
- Do not merge Vale, Dale, and Derek findings into a single table — each tool gets its own.
- The multi-file Summary table appears at the end, after all per-file sections.
- If Vale is unavailable, note it in the Vale Overview row: `Vale | ⚠️ Not available — skipped`.
- Do not run this skill on files outside `docs/kb/`. If non-KB `.md` files appear in the diff, ignore them silently.
- The final PR review comment (Step 13) must use markdown only with no emojis.
