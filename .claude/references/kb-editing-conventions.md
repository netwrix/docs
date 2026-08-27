# KB Editing Conventions

Comprehensive KB editing rulebook covering frontmatter, article type identification, article structure, structure/step condensation, list types, sentence-level rules, callouts, bolding, overview quality, links, placeholders, formatting, cross-section consistency, titles, and images.

Apply during the `kb-pr-open` preemptive scan, the `kb-pr-review` review pass, and the `derek` review on every KB batch. This document is the canonical rulebook for these three skills — `derek`, `kb-pr-open`, and `kb-pr-review` all read it rather than duplicating its content, and it takes precedence over anything a skill might otherwise infer on its own. `derek` applies §5, §6, §12, §13, §14, §15, and §16's external-references and alt-text rows only (not §16's location row) — see `derek/SKILL.md`'s Review Areas table. Every other section (step structure, condensation, list type, sentence-level rules, overview quality, links, placeholders, general formatting, cross-section consistency, and §16's image-location row) belongs to `kb-pr-open` and `kb-pr-review`, not to a standalone `/derek` run. It is a derived, machine-oriented elaboration of `kb_style_guide.md` (the published, human-facing standard), not a replacement for it — where the two disagree, that is a bug in this rulebook, not a case for the rulebook to override the published standard. Amend it via PR when a batch surfaces a new pattern, and reconcile back to `kb_style_guide.md` in the same PR if the change affects a rule stated there.

Six current rules read as disagreements with the style guide's literal wording but are deliberate elaborations, not bugs — do not "fix" them back to the absolute reading without a real decision, the same way the exceptions in §13 and elsewhere are deliberate:

- **§12's product-name-in-title** sharpens the style guide's absolute "do not include product names in titles" into a general rule with a stated soft-reminder carve-out for genuinely distinguishing component names.
- **§13's title/H1 row** clarifies that a body with no H1 is a valid state (Docusaurus renders the frontmatter `title` as the H1 when the body has none), not a violation of the style guide's "the article title is always H1" line, which is about heading level, not literal presence.
- **§13's `sidebar_label` "must not be truncated vs. `title`"** (referenced from §12's mechanical-fixes list) is a stricter, mechanically checkable reading of the style guide's "may be shortened if the title is very long" — the style guide doesn't forbid shortening, but doesn't define "very long" either; this rulebook resolves the ambiguity in favor of flagging any truncation as a Required fix rather than guessing at a length threshold.
- **§13's `knowledge_article_id` presence/absence-is-informational policy** treats the field's absence as valid for natively authored articles, where the style guide lists it under Required fields with no optionality note. This is the reconciled policy this PR adopted (`kb-pr-open`'s pre-existing design) over the contradictory alternative `kb-pr-review` previously stated — a deliberate call, not an oversight.
- **§6's "bold UI elements only when they're action targets in the current step"** narrows the style guide's unconditional "**bold** for UI elements, buttons, menu items, tabs, checkboxes, dropdown options, navigation steps, and form field names" to exclude contextual (non-acted-on) mentions. This is deliberate, pre-existing text both PR skills already flagged as a Required fix before this PR — not a new rulebook invention — and it survives the merge into the shared rulebook as-is.
- **§13's `products.js`-is-authoritative-over-the-style-guide-table policy**, including the exact-match, no-hyphen/underscore format rule. The style guide's own example frontmatter block (`kb_style_guide.md` around line 211) uses `products: - enterprise_auditor`, an underscored, non-canonical value that this rule would flag — a known, pre-existing gap in the style guide's example, not a rulebook bug. `src/config/products.js` is the real authoritative source per `CLAUDE.md`'s own Architecture section; the style guide's table can lag it.

## 1. Heading/step structure

**Right-size step groups before applying `Step N —` normalization.** This is a two-gate rule.

- **Gate A — Consolidate first.** Before applying any `Step N — <Label>` normalization, evaluate each candidate subheading against a substance test. A subheading is a merge candidate under either of two criteria: (1) it contains ≤1 action step *and* that action reads as prep/cleanup for an adjacent group — e.g., "Stop Services" or "Start Services" bracketing an install step, "Save and Exit" trailing a config edit, a lone "Restart the Agent" after a settings change; or (2) it's one of a cluster of thin "Remove X"-style subheadings that are really line-items off a single logical task, rather than distinct procedures. Fold merge candidates into the neighboring subheading. Only substantive subheadings count toward Gate B.
- **Gate B — Normalize.** If ≥3 substantive subheadings remain after Gate A **and represent sequential steps of the same procedure**, apply `Step N — <Label>` (em dash, not colon) to that set. The count excludes subheadings that are a categorically different kind of section — most commonly a `Troubleshooting`/exception-handling subheading — even when it sits at the exact same heading depth as the procedural subheadings it follows. Troubleshooting content isn't a step in the sequence; it doesn't count toward the Gate B threshold, and it doesn't receive a `Step N —` label itself (nor does anything nested beneath it). Normalize any pre-existing `Step N:` to match. Does NOT apply to parallel-alternative subheadings (Windows/Linux) — keep those descriptive. See also [[feedback_kb_step_subheadings]].
- **Under-fragmentation — the mirror problem.** A single `## Instructions` or `## Resolution` section holding two or more distinct activities (locate a log, then look up an error code; edit a config, then verify the login flow) with no subheadings is as broken as over-fragmentation. Split by distinct activity; use subheadings once there are two or more real activities.
- **Action described as trailing prose** — an action that logically belongs in the numbered sequence but sits as a trailing paragraph (e.g., a "start the services" instruction written as prose after the last numbered step) gets pulled into the sequence as its own numbered step, matching the structure of parallel actions in the article.
- **Subheading wrapping a single trivial element** — a subheading like `### Example Error Message` that exists only to label a single code block adds structure without content. Remove the subheading and lead in with a short sentence ("Example error:") followed by the code block. A heading implies a navigable, standalone unit; a lone error block is not one. Scope is not restricted to Instructions.
- **Nested if/then branches** get split into their own subsections instead of nested lettered/roman sub-lists.
- **Prerequisite repeated across steps/sections.** First check whether the repetition is a symptom of over-fragmentation (thin subheadings that should merge under Gate A). Merging the subheadings usually resolves the repetition — the shared context becomes a natural single lead-in sentence at the top of the merged step. Only if Gate A does not apply, hoist the shared content — and choose the target format by content type: **caveat/warning-flavored prerequisites** (a condition that breaks the procedure if ignored — timing, permissions, state) go into a NOTE block near the top of Instructions; **procedural framing** (where to run the steps, what tool to open, which machine to be on) becomes a plain lead-in sentence, not a NOTE. NOTE is for caveats, not for procedural context.
- **Numbered list broken by intervening paragraph** silently restarts at 1 in rendered output. Fix with a heading boundary or 4-space indent to attach the paragraph to the preceding step — not by fiddling with numbers.
- **Every subheading under Instructions must contain an actual action.** If a subsection is purely descriptive/observational ("the events appear in the event list," "opening a baseline event shows...") with no step for the reader to perform, it doesn't belong under Instructions. Restructure into its own labeled section (e.g., "Reviewing X") using prose or a bulleted list of facts, not fake numbered "steps."
- **Result descriptions inside numbered lists** — a step that's actually a result rather than an action ("All collections appear in the output" sitting between real actions) gets pulled out of the numbering. Either fold as a parenthetical on the preceding action or set as unnumbered prose beneath it.
- **Descriptive facts belong as intro prose, not trailing bullets.** When a numbered configuration procedure is preceded or followed by descriptive "what this account/service/component does" bullets, those facts belong as short intro prose *before* the numbered steps — framing the reader on what they're configuring — not as trailing bullets after the actions. Distinct from the result-in-numbered-list rule above: that pulls result-steps out of numbering; this rule places background facts in the correct relative position to the action steps.

### Worked example — Gate A over-fragmentation

`add-ssl-certificate-on-linux.md` (Change Tracker batch 3a) originally used four subheadings under Instructions: Stop Services / Copy .crt and .key / Change Nginx Config / Start Services. Stop-Services and Start-Services are single-action prep/cleanup for the install and configure groups. The right structure is two substantive groups plus troubleshooting:

- `### Install the Custom SSL Certificate` (stopping services + copying files as numbered steps within)
- `### Configure Nginx to Use the Certificate` (editing config + starting services as numbered steps within)
- `### Troubleshooting` → `#### Resolve Agent Certificate Thumbprint Mismatches` (thumbprint mismatch)

All three are `###` siblings under `## Instructions`, but `Troubleshooting` is a different kind of section — exception-handling, not a sequential setup step — so only `Install` and `Configure` count toward the Gate B threshold. Two substantive subheadings → Gate B does not fire — no `Step N —` labels on `Install`/`Configure`, and `Troubleshooting` (plus its nested `####` subheading) is exempt from the count and from labeling in the first place, regardless of matching heading depth. Applying `Step N —` to the four thin original subheadings would have preserved the fragmentation instead of fixing it.

## 2. Condensing repetitive steps

- **Repetitive single-command runs** ("Enter the following command: x." repeated 2+ times in a row) compile into one step: "Enter the following commands in order:" followed by a bulleted list or a fenced multi-line code block. Applies even when repetition is only 2-3 instances, for within-file consistency.
- **Prompt-response for a specific command** ("Enter Y when prompted") folds as a parenthetical on that command's bullet rather than as its own separate step.
- **UI navigation + multi-field form**: give "In the pop-up window, enter the following:" its own number in the step sequence; the field list itself stays bulleted (see rule 3).
- **Genuine duplicate content**: prose sentence describing an action followed by a numbered step repeating the same action as a "command" is a real bug, not just a style nit — collapse it.
- **Consecutive breadcrumb navigation** ("Go to Settings." + "Go to Groups.") combines into "Go to **Settings > Groups**."
- **Two related clicks** combine with "..., then click Z."

## 3. List type

- **Numbered lists** for sequential actions performed in order. **Applies broadly** — this rule covers Resolution sections and any sub-sections within them (e.g., verification steps), not just top-level Instructions procedures.
- **Bulleted lists** for alternatives/options and for field-value pairs — per KB style guide ("use unordered lists for unordered recommendations or options"). Numbered lists wrongly imply order for things that are alternatives.
- **Minimize nesting** — one either/or choice can nest under its step; multi-step branches get their own subsection.
- **Nested sub-lists under a numbered step use `-` dashes**, never nested `1.` `2.` `3.` numbering. Numbered-inside-numbered renders ambiguously and reads as a restart; dashes make the parent/child relationship explicit.
- **Single-action numbered lists are a code smell.** A numbered list must contain 2+ steps. A single action is written as a plain imperative sentence, not as `1. Do X.` with no step 2. Numbered lists imply a sequence; a one-item sequence is a mislabeled sentence.
- **Semicolon-run list items get broken into nested sub-bullets.** When a single list item contains 3+ comma- or semicolon-separated clauses (e.g., "Full control of the application, including adding domains, forests, and tenants; configuring notifications; and managing other users..."), break it into a lead-in phrase plus nested `-` sub-bullets. Long run-on list items are unscannable.
- **List-item grammatical parallelism and end-punctuation consistency.** All items in a list must be grammatically parallel — all complete sentences, or all fragments, not a mix. End punctuation is consistent: either every item ends with a period, or none does. Per `kb_style_guide.md`.

## 4. Sentence-level rules

- **Full imperative sentences** ending in a command/path need a period; **bare file-path bullets** (fragments) do not.
- **Intro sentences before a list** end in a colon. Cut them if they just restate the heading directly above.
- **Missing intro sentence before a list.** The opposite failure — a list that appears with no lead-in at all, reading disjointed from the surrounding prose. Add a short intro sentence ending in a colon. Companion to the "cut redundant intros" rule above: cut when the intro restates the heading; add when there's no context anchoring the list.
- **"The following"** is fine as a positional reference immediately before an adjacent code block/list/breadcrumb — don't strip reflexively. Only cut when vague/unanchored or duplicative.
- **Positional references to same-file sections become anchor links, not just reworded.** When a positional reference ("above"/"below"/"the section on X") points to a named section in the same file, replace it with `[Section Name](#section-slug)` rather than rewording to eliminate the positional word. This is the concrete execution of Dale's `positional-references` suggestion — reviewers otherwise have to add the anchors by hand.
- **Redundant/duplicate sentences** saying the same thing twice get merged — often into a final numbered step plus a NOTE.
- **Abrupt UI-click endings** — steps ending on a bare "Click X." get a closing sentence describing the observable result, or get combined with the next click.
- **Passive/conditional phrasing** reworded into direct imperative form where it changes nothing factually (e.g., "You can adjust this level of privilege..." → "Adjust the level of privilege...").
- **Impersonal-subject directness.** Flag sentences where an impersonal subject ("the operation", "the process", "the system") performs an action that the actual actor or action could express more directly. Example: "the operation fails with an error" → "Clicking **X** fails with an error". Apply judgment — not every impersonal subject is wrong, but flag cases where a direct rewrite is clearly cleaner.

## 5. Callout severity

- **A `> **NOTE:**` blockquote is correct KB format, not a finding.** Do not flag it as a Docusaurus `:::note` admonition that needs converting — it's already in the target blockquote form.
- **NOTE vs IMPORTANT is a judgment call, not interchangeable by default.** Supplementary/contextual info stays NOTE. Information that affects correctness or causes a real problem if skipped (e.g., a config-change timing caveat that could cause a false test result) should be IMPORTANT. Revisit per file rather than assuming the original author chose correctly.
- **Blank line required before any NOTE/IMPORTANT blockquote.**
- **Only two blockquote severities exist: `NOTE` and `IMPORTANT`.** This applies whether the callout is currently Docusaurus `:::` admonition syntax or already a blockquote with the wrong severity label — flag both:
  - Any `:::note`, `:::tip`, `:::info`, `:::warning`, `:::caution`, `:::danger`, or `:::important` block (Docusaurus syntax, not yet a blockquote).
  - Any `> **<SEVERITY>:**` blockquote whose severity is not `NOTE` or `IMPORTANT` — for example `> **TIP:**`, `> **WARNING:**`, `> **CAUTION:**`, `> **DANGER:**`, `> **INFO:**`. It's already a blockquote; only the severity label is wrong.

  Convert/relabel per this mapping (covers both the `:::` and blockquote spellings of each severity):

  - `:::note` / `> **NOTE:**`, `:::tip` / `> **TIP:**`, `:::info` / `> **INFO:**` → `> **NOTE:**` — for supplementary information
  - `:::warning` / `> **WARNING:**`, `:::caution` / `> **CAUTION:**`, `:::danger` / `> **DANGER:**`, `:::important` → `> **IMPORTANT:**` — for critical information that could cause issues if ignored

  If the callout sits inside a numbered list item, apply the 4-space indentation rule in the next bullet to the converted/relabeled blockquote.
- **Callout inside a numbered list item must be indented 4 spaces** to attach to the preceding step. Fewer than 4 spaces breaks the list at CommonMark render time — this is a build-breaker, not a style nit.
- **Migration debt:** ~16 files currently use `> **TIP:**` or `> **WARNING:**` blockquotes (already-blockquoted, not Docusaurus syntax) and are now non-compliant under the two-severity rule above.

## 6. Bolding and inline code

- **Bold named apps/tools** the reader opens (Command Prompt, Mongo shell) — matches site-wide precedent. Don't extend to every noun.
- **Don't bold generic/non-UI nouns** (MongoDB service, MongoDB authentication).
- **Don't bold the product name after "Log in to."**
- **Verify UI tab/option names against the actual product docs** before bolding or renaming.
- **Bold UI element names only when they're action targets in the current step** — buttons being clicked, fields being filled, dropdowns being selected, menu items being chosen. A UI element mentioned as context only (not acted on in this step) does not get bold. ✓ "Click **Save**." ✓ "Select **PDF** from the **Save as type** dropdown." ✗ "The file appears under the Save as type column." — no bold on contextual reference.
- **Use inline code (backticks), not bold, for:** registry paths, registry value names, registry data, error codes (e.g., `0x80070005`, `0x80004005`), commands, and executable names.
- **Registry, file, and directory paths in the article body must be wrapped in backticks or a fenced code block.** Patterns to look for: registry paths starting with `HKEY_`, `Computer\`, or `HKLM\`; Windows paths containing `C:\`, `\\`, or multiple backslash segments; Unix/Linux paths with multiple forward-slash segments (e.g., `/etc/netwrix/...`).
- **Same UI element or app name must be bolded consistently within a single article** — bold every occurrence or none. A name bolded on first mention and left plain later (or vice versa) is a within-file inconsistency, not a per-mention judgment call.

## 7. Overview quality

- **Overview must open with the goal.** The first sentence states what the article does — canonical form is `This article describes how to <goal>` or an equivalent explicit-goal opener (`This article explains...`, `This article shows how to...`). Stating rationale (why the reader might want to do the thing) or context (background on the feature) without a leading goal sentence is NOT sufficient — flag as a Required rewrite. Goal-first framing is what tells the reader "yes, this is the article for what I need to do"; rationale-first buries that signal.
- **Never let Overview restate the title** verbatim, or read as a symptom/condition.
- **Pull concrete, sourced facts** from product docs to expand beyond the goal sentence when there's substance to add.
- **Link to product-doc background** where it exists (pathname://...) instead of just defining a term inline.

## 8. Links

- **Three internal link forms are all valid** — `[text](/docs/...)` (the dominant form, ~218 KB files), `[text](pathname:///docs/...)`, and relative `.md` links (`[text](../other-article.md)`, `[text](./other-article.md)` — `kb_style_guide.md`'s own "Do" example for internal links uses this form, and it's in active use across roughly a dozen KB files). Do not propose converting one form to another. For each, resolve the actual target file on disk: check for a `slug` frontmatter override on the target first; if none, the URL segment (or relative path) must match the target's real path/filename (not its `sidebar_label` or `title`). Flag any link whose URL does not resolve to a real file on disk as a Required fix, and correct it to the real path. Only genuinely external links (`http://`, `https://`, `mailto:`, etc.) are out of scope for this check.
- **`pathname://` links specifically** use the version-with-underscore format (`8_2` not `8.2`) and must resolve to a real file — flag a dotted version segment as a Required fix even if the rest of the path resolves. This is a constraint on `pathname://` links where they're used, not a mandate to prefer that form over the bare `/docs/...` form.
- **Backstop is `npm run build` — for the `/docs/...` and relative-`.md` forms only.** A single-product build (`DOCS_PRODUCT=...`, the faster path `CLAUDE.md` recommends) only relaxes `onBrokenLinks` to `warn` (`docusaurus.config.js`: `onBrokenLinks: targetProduct ? 'warn' : 'throw'`); `onBrokenMarkdownLinks` and `onBrokenAnchors` still throw unconditionally, single-product build or not. So a broken `/docs/...` link can still slip through a single-product build without failing it — catch it before submission rather than relying on the backstop. **`pathname://` links have no backstop at all, full build or single-product:** `pathname://` is Docusaurus's documented escape hatch that bypasses the broken-link checker entirely, so neither `onBrokenLinks` nor `onBrokenMarkdownLinks` ever validates one. The dotted-vs-underscore-version-segment check above is the only thing that catches a broken `pathname://` link — there is no build backstop to fall back on for it.
- **`WeakLinkText` Vale findings require a search, not just a rewrite.** Before proposing any fix for a Vale `WeakLinkText` finding, grep `docs/kb/**/*.md` and `docs/<product>/<version>/**/*.md` for a plausible real target based on the referenced topic (e.g., "Accounts and Required Permissions" → search for `accountreqs`, `account.*permission`). If a real target resolves, convert the prose into a proper link to it. Only rewrite the sentence to remove the implied reference if the search turns up nothing. Do not skip the search because the phrasing already implies no real link exists — the trigger already fired precisely because the phrasing looks like an implied reference, and the target often does exist on disk.
- **`<!-- link removed -->` comments** deserve a real-target search before shipping. If a valid internal replacement exists in `docs/kb/**/*.md` or `docs/<product>/<version>/**/*.md`, restore the cross-link. If the search turns up nothing, leave the comment in place and note it as unresolved — do not delete the comment or invent a target.
- **"Contact Netwrix Support"** → `[Netwrix Support](https://www.netwrix.com/support.html)`. Only link the first "contact" action per article.
- **Dense multi-link "see X, see Y, see Z" prose → single NOTE.** When a paragraph contains 3+ inline cross-reference clauses stacked in one sentence, collapse them into a single NOTE block with the links listed cleanly (compact enumeration or short bulleted list under the NOTE). Multiple inline "see also" clauses in one sentence read as noise; a NOTE with clean bullets is scannable.
- **Title change → link-text sweep across the repo.** When a KB article's title changes, do a repo-wide search for internal links whose visible text uses the *old* title, and update the link text to the new title. URL resolution alone is not sufficient — the visible link text must describe the current target, per the style guide's link-text rule. The existing links-review check (URL resolves on disk) does not catch stale link text. Use a dedicated search tool, passing the old title as a pattern parameter, rather than interpolating the title into a shell command string — shell-quote characters (some titles contain `'`) and unescaped regex metacharacters (`. * + ? ( ) [ ] { } \ | ^ $`) in the title can each cause a missed or broken match. Match `\[<old title>\]\(` (with the title's metacharacters escaped) to catch all three internal link forms in one search.

## 9. Placeholders & data hygiene

- **Angle-bracket placeholders** (`<password>`) instead of bare literal words.
- **Check example data** (IPs, usernames, connection strings) for whether it's actually sensitive before flagging. Private/RFC1918 IPs and self-referential example accounts (like `c##ntx` for Oracle) are not sensitive.
- **SME HTML comments are never removed** — they're intentional cues for the SME reviewer.
- **A restructuring pass** (reorganizing existing content) is safe even next to an open SME accuracy flag. Reorganizing what's already stated isn't the same as asserting new facts. Don't let an SME flag block a pure structure fix; just don't touch the substance.

## 10. Formatting

- **A flat list of data** becomes a monospace code-block grid, not comma-separated prose or a fake table.
- **Trailing image-removed comments** don't need their own anchoring sentence, but excess consecutive blank lines around them get trimmed to one.
- **KB headings are Title Case** (verified against `kb_style_guide.md`, not assumed) — override of the docs-wide sentence-case rule.
- **Trailing periods inside markdown table cells** get stripped. Vale and Dale skip table content, so these slip through unless caught here.
- **Multi-line commands and command output use fenced code blocks**, not prose or plain indented text. A command spanning multiple lines, or output pasted from a terminal, gets a triple-backtick fenced block — flag any multi-line command or output that isn't fenced.

## 11. Cross-section consistency

Rules that compare two sections of the same article against each other. Section-local scans miss these because each individual section reads correctly on its own.

- **Symptom vs Cause overlap.** Symptom describes what the user *observes* — error text, UI behavior, timing. Cause describes the *mechanism* — why the observed behavior occurs. When Symptom restates the mechanism ("the operation fails because X"), trim it to observation only and move the mechanism into Cause. When Cause repeats the observed behavior instead of explaining why, treat as thin and route to `kb-writer`.
- **Acronym defined but long form reused.** If the article defines an acronym on first use — e.g., "two-factor authentication (2FA)" — subsequent references in body/headings/notes should use the acronym, not the long form. Dale only catches *undefined* acronyms; this is the opposite half of consistent-use.
- **Product name over-repetition after first use.** After the product's full name has established context (typically in Overview or the first Symptom sentence), later mentions can drop the "Netwrix" prefix or the full name entirely where context makes it unambiguous. Flag runs of "Netwrix Change Tracker … Netwrix Change Tracker … Netwrix Change Tracker" that read as boilerplate.
- **Related Articles link with no topical anchor in body.** Every link in a Related Articles section (or bullet at the bottom) should have some topical mention in the article body — the linked topic came up, was compared, was ruled out, etc. Links to unrelated topics that were never mentioned are orphaned defaults; remove them.
- **Capitalization consistency for named permission types and access rights.** Named permission types (Domain Admin, Read, Write, Read/Write, Full Control, Modify, and similar) must be capitalized consistently within a single article. Flag runs like "Write permission" (capitalized) alongside "read and write access" (lowercase) referring to the same named right within the same file. Pick one convention and apply throughout.

## 12. Titles

### Base title format by article type

Per `kb_style_guide.md`'s Article Types and Article Titles sections:

- **Resolution (Error):** starts with `Error:` followed by the unique error code or message. Include only the most unique part of the error message. Good: `Error: Event Collection Failed 0x80004005`. Bad: `Error: Can't Process Request` (too generic).
  - **`Error:` prefix exemptions — two, not one.** A Resolution (Error) title is exempt from the `Error:` prefix requirement when EITHER: (a) **the error message itself already contains the word "error"** (e.g. `Agents Have Become Unresponsive Error`, `Directory Name Is Invalid Error`) — the broader, more common case; or (b) it's normalized to the `<Component> Error - <phrase>` log-dump form (see the "Raw log line or error dump as title" bullet under Mechanical style corrections). (b) is actually a special case of (a) — the normalized form always contains the word "Error" too — but it's named separately because it's the specific, recognizable output pattern this rulebook's own log-dump normalization rule produces; the inline `Error` word already disambiguates the title, so don't also prepend `Error:`. Only flag a Resolution (Error) title for missing the prefix when it has none of: the prefix, the word "error" anywhere in it, or the normalized log-dump form.
- **Resolution (Symptom):** `[Feature or Component] [Symptom or Issue] [Optional: Condition or Context]` — descriptive, not vague. Good: `Active Directory Users Missing from Search Results`. Bad: `AD not working` (too vague).
- **How-To (Instructions):** `[Action Gerund] [Specific Task]` — starts with a gerund, no "How to" prefix, no question mark.
- **How-To (Q&A):** not required to use gerund/action form. A topic-descriptive title, a "How to..." title, or a question-form title are all valid — none is a gerund violation. The interrogative form doesn't have to live in the title; it can appear in `## Question` instead.

All titles use title case. As a general rule, titles should not contain a product name — product names belong in the `products` frontmatter field — but this is not absolute: see "Semantic reframes" below, where product-name-in-title is a judgment call surfaced as a soft reminder, never auto-applied as a Required fix.

Title findings split into two categories based on whether the change is mechanical or semantic.

### Mechanical style corrections — Required fixes (apply on approval, low ambiguity)

- **gerund-for-How-To-Instructions:** "How to..." prefix → gerund form (e.g., "How to Export Event Logs" → "Exporting Event Logs"). Applies only to How-To Instructions form articles (`## Overview` + `## Instructions` structure). Does NOT apply to How-To Q&A articles — a topic-descriptive title, a "How to..." title, or a question-form title are all valid for Q&A; none is a gerund violation, and the interrogative form doesn't have to live in the title (it can appear in `## Question` instead).
- **Title case correction** (e.g., "configure stopwords" → "Configuring Stopwords"). Applies to all article types. This bullet governs `kb-pr-open` and `kb-pr-review`, which run Vale in the same report — it does not change `/derek`'s scope; `derek/SKILL.md`'s own "what Vale already handles" list is authoritative for what standalone `/derek` checks. **For `kb-pr-open`/`kb-pr-review`: when the body has an H1 *and* Vale actually ran and reported for this file (not just "the skill is the kind that runs Vale") — defer to Vale, do not duplicate the finding.** `NetwrixKB.HeadingCase` (`scope: heading`) already fires on the H1 in that case, so it's Vale's finding, not a second row for the same title; do not flag the same H1 twice. **If Vale did not run or errored** (`kb-pr-open`'s `Vale | not run (Vale not installed)` row, or `kb-pr-review`'s `Vale | ⚠️ Not available — skipped` row) **— there is no deferral to make: check the H1's case directly and flag it as a Required fix if it's wrong.** Deferring unconditionally to a tool that didn't actually run silently drops the check; only the case where Vale's findings are genuinely present in the same report should be treated as already covered. **When the body has no H1 at all (§13's title row), the deferral does not apply regardless of whether Vale ran — check the frontmatter `title` value's case directly,** since Vale's heading-scoped rule never evaluates a frontmatter field and nothing else will catch a badly-cased title on those articles. This no-H1 case is the one place `/derek` also checks title case directly, per its own Vale-handles list.
- **Raw log line or error dump as title.** Titles like `ConfigurationLoader FATAL Hub Location Details Have Not Been Specified in HubDetails.xml at ...` — literal log lines with level tokens (FATAL, ERROR, WARN), stack noise, file paths, or truncation fragments — are unreadable and unsearchable. Normalize to the pattern `<Component> Error - <core diagnostic phrase>`, keeping only the searchable message.
  - Examples of the fix:
    - `ConfigurationLoader FATAL Hub Location Details Have Not Been Specified` → `ConfigurationLoader Error - Hub Location Details Have Not Been Specified`
    - `TraceLogger ERROR System.Net.Sockets.SocketException Address already in use` → `TraceLogger Error - Address Already in Use`
    - `RemotePlatformDiscovery Could not get credentials from ...` → `Remote Platform Discovery Error - Could Not Get Credentials`
  - This normalized form is exemption (b) of the two `Error:` prefix exemptions stated under "Base title format by article type" above — the inline `Error` word already disambiguates the title, so don't also prepend `Error:`.
- **H1 / `sidebar_label` consistency:** see §13's `sidebar_label` row for the truncation rule.

These changes are low-ambiguity and preserve reader recognition — the article is still "the one about X," just with corrected surface form. Apply them per the normal fix loop.

**Fix all three together, not just the one that was flagged.** Frontmatter `title`, the body H1, and `sidebar_label` must stay in sync (per §13's `title` and `sidebar_label` rows). Any mechanical fix above that changes one of them — including a Vale `NetwrixKB.HeadingCase` fix that rewrites only the H1 line — must update the other two in the same edit. Fixing the H1 and leaving the frontmatter `title` (or `sidebar_label`) stale creates a fresh §13 violation that nothing in a single fix pass re-checks.

### Semantic reframes — soft reminders / judgment calls (author/reviewer decides, never auto-apply)

- **Product name in title** (e.g., "Antivirus Exclusions for Netwrix Data Classification" → drop "for Netwrix Data Classification"). If a product component name (client, agent, add-on) is essential to distinguishing the article from others about the same product, flag it as a judgment call rather than a required fix.
- **Article-type / title mismatch** (e.g., Symptom Resolution structured article with a procedural-sounding title).

These changes alter what the article appears to be *about* from the reader's perspective. They can break recognition for users searching by remembered title. The file path doesn't change so bookmarks survive, but readers don't navigate by URL — they navigate by name. For every semantic reframe finding: flag the specific issue, suggest one or more alternative titles with reasoning (multiple options are welcome), and defer to the author/reviewer — don't auto-apply, and don't argue if they leave the title alone. Established titles often carry recognition weight that style purity doesn't outweigh. This applies equally to new article drafts and updates to existing articles.

## 13. Frontmatter

All KB articles must begin with a frontmatter block. Check that all required fields are present and valid:

| Field | What to check |
|---|---|
| `title` | Present; quoted if it contains colons or special characters; must match the H1 heading exactly *when the body has an H1*. A body with no H1 at all is valid — Docusaurus renders the frontmatter `title` as the page's H1 in that case, so there's nothing to mismatch. |
| `description` | Present, non-empty, 1–2 sentences; SEO-friendly; accurately summarizes what the article covers. Flag if empty, too vague, or a verbatim copy of the title. |
| `sidebar_label` | Present, non-empty; must not be truncated vs. `title` |
| `keywords` | Present, contains 8–12 items — specific and searchable (error codes, product names, technical terms, phrases a customer would type into a search bar), not generic or a verbatim repeat of the title. Flag if a term prominent in the article body (an error code, a distinctive feature/component name) is missing from keywords — this drives search discoverability and is a Required fix, not a soft one. The inverse direction is softer: if a keyword doesn't appear in the article body but is a plausible customer search term, note it as a low-priority observation rather than a required fix. |
| `products` | Present, contains at least one product ID from the `products` array (not the `categories` array — whose `id`s do use hyphens, e.g. `directory-management`) in `src/config/products.js` — no hyphens or underscores as word separators (`dataclassification`, `directorymanager`, `threatmanager` are correct; `data-classification`, `directory-manager`, `threat-manager` are not). `src/config/products.js`'s `products` array is authoritative if it and `kb_style_guide.md`'s Product Names table disagree — the style guide table can lag a `products.js` update. |
| `tags` | Present and includes `kb` |
| `knowledge_article_id` | See policy below |

**Product ID exceptions.** Three non-canonical values need special handling — only two of them are carve-outs (never flag); the third is always a Required fix, not an exception to flagging:

- **Always flag — `onesecure` (5 files) has a real target.** Correct to `1secure`, the actual `products.js` ID. This is a normal typo/legacy-value correction like any other wrong `products` value, not a carve-out.
- **Never flag — `general` (44 files under `docs/kb/general/`) has no valid `products.js` target.** Cross-product content with no corresponding product.
- **Never flag — `recoveryad` (1 file) has no single valid target.** `scripts/copy-kb-to-versions.mjs` maps both `recoveryforactivedirectory` and `identityrecovery` to this KB folder, so there are two equally defensible IDs and no way to pick one mechanically. Ask which product the article is actually about instead of guessing.

Product ID hyphenation is otherwise real migration debt: ~300 files across `directory-manager`/`access-analyzer`/`data-classification` still use the non-canonical hyphenated form. The strict `products.js`-exact rule stands; this is tracked as debt, not a reason to loosen the rule.

**`knowledge_article_id` policy — presence/absence is informational, format is corrective.** The field's presence or absence is never a finding — never propose adding or removing the field. Its format, when present and non-empty, is corrective: it must start with `kA` followed by alphanumeric characters.

| State | Finding | Action |
|-------|---------|--------|
| Real ID (e.g., `kA04u0000000HuTCAU`) | None | Clean — no finding. |
| Placeholder (contains `XXXX`, `TODO`, `TBD`, or obvious template markers) | Soft reminder | "Placeholder detected — populate with the real `knowledge_article_id` if applicable, or leave as-is if no ID applies." |
| Empty string (`knowledge_article_id: ""`) | Soft reminder | "Field is empty — populate if applicable, or leave as-is if no ID applies." |
| Field missing entirely | Soft reminder | "Field is not present. This is a valid state for a natively authored article — no action needed unless the article originated from an external ticket." |
| Present, non-empty, not a recognized placeholder, but does not start with `kA` + alphanumeric characters (e.g., `knowledge_article_id: "12345"`) | **Required fix** | "`knowledge_article_id` doesn't match the expected Salesforce/Zendesk ID format (`kA` + alphanumeric). Correct it to the real ID, or clear it to an empty string — this value can't be a valid ID as written." |

**Never propose removing the field when it exists** — its presence preserves the provenance signal (this article expects an external ID). Correcting a malformed value to an empty string is not removing the field — it stays present, just empty, which is itself a valid no-action state. **Never propose adding the field when missing** — the article may be natively authored and may not need one.

Whether the field exists at all is the author's call; the skill only surfaces that. Whether an existing, non-empty value is a well-formed ID is not a judgment call — a value that can't be a real Salesforce/Zendesk ID gets flagged like any other format violation.

## 14. Article Type Identification

Determine the article type from its structure first — this is authoritative and doesn't depend on title phrasing, which Q&A articles are explicitly allowed to leave non-interrogative (see §12). **Partial matches still count** — an article missing one of a type's required headings is that type with a missing heading, not a different type. Requiring *all* headings before classifying would send a Q&A article that's simply missing `## Answer` down the title-fallback path instead, misclassifying it and demanding an unrelated Symptom/Cause/Resolution structure it was never meant to have.

**Check Resolution first, before Q&A or Instructions.** Resolution articles routinely carry an `## Overview` heading alongside Symptom/Cause/Resolution, but How-To articles never carry `## Symptom` — so checking Q&A/Instructions first would let that incidental `## Overview` hijack the classification of a real Resolution article (confirmed against real KB files: an Overview+Symptom+Cause+Resolution article would otherwise misclassify as How-To (Instructions) and get told to add an unnecessary `## Instructions` section). Check in this order (first match wins). **This ordering is load-bearing, not arbitrary — do not reorder it.**

- Contains a Symptom heading (`## Symptom` or `## Symptoms`), a Cause heading (`## Cause` or `## Causes`), or a Resolution heading (`## Resolution` or `## Resolutions`) — any one is enough → **Resolution**. §15 flags whichever of the three is missing. Flag any plural spelling as a rename per §15 — the plural form still counts as a structural match here; it just also gets a §15 finding.
  - **Error vs. Symptom is decided by content, not title** — this is what breaks the circularity of checking the title against a classification that was itself derived from the title. If the Symptom section names a specific, identifiable error code, exception, or literal error message (commonly introduced by phrasing like "you receive the following error:" and often shown in a code block) → **Resolution (Error)**. Otherwise → **Resolution (Symptom)**.
  - Having classified by content, *then* check the title against §12 — flag a Required fix only when the title has none of: the `Error:` prefix, the word "error" anywhere in it, or the normalized log-dump form. This is the check that a title-based classifier can never make, because it would always find the classification and the check in agreement by construction.
- Contains `## Overview` or `## Instructions` (or both) → **How-To (Instructions)**. Same partial-match tolerance.
- Contains `## Question` or `## Answer` (or both) → **How-To (Q&A)**. If only one is present, §15 flags the other as missing — don't fall through to a different classification.

**Known edge case (not worth reordering for):** checking Instructions before Q&A means a Q&A article that happens to carry an `## Overview` heading — with no Symptom/Cause/Resolution heading, which would otherwise claim it first under the Resolution-first rule above — classifies as How-To (Instructions) instead, and gets told to add `## Instructions`. This is the mirror risk of the Resolution-first ordering, but in the opposite direction. It hits zero files in the current corpus (checked: every `## Question`+`## Overview` file also has a Symptom/Cause/Resolution heading and classifies as Resolution instead, per the Resolution-first rule — including `docs/kb/accessanalyzer-2601/kb-article-template.md`, a multi-template reference file containing all three article-type templates concatenated, which is a Resolution match, not an instance of this edge case). Documented here so a future maintainer doesn't mistake it for a new bug when a file eventually does hit it.

If none of these section structures are present, fall back to the title:

- Title starts with `Error:` → **Resolution (Error)**
- Title starts with a gerund (verb ending in -ing, e.g., "Configuring...", "Modifying...") → **How-To (Instructions)**
- Title is a question or starts with "How to" → **How-To (Q&A)**
- Everything else → **Resolution (Symptom)**

## 15. Article Structure

Check that the required H2 headings are present for the identified article type (§14):

| Type | Required headings |
|---|---|
| Resolution (Error or Symptom) | `## Symptom`, `## Cause`, `## Resolution` — always singular, even when the section describes multiple items |
| How-To (Instructions) | `## Overview`, `## Instructions` |
| How-To (Q&A) | `## Question`, `## Answer` |

When a required heading is missing, include the full expected heading template so the writer can copy it in.

**Pluralized form present (`## Symptoms`, `## Causes`, or `## Resolutions`)** is a distinct case from missing — the section exists, it just uses the wrong label. Flag it as "rename `## Symptoms` to `## Symptom`" (singular; even when the section describes multiple items), not as a missing heading — do not tell the writer to add a section that already exists under the plural name. Applies to both Resolution formats (Error and Symptom). ~171 files currently use a plural form (105 `## Causes`, 97 `## Resolutions`, 96 `## Symptoms`); this is accepted migration debt, not a reason to loosen the rule.

**How-To structure check.** How-To articles must use either Instructions form (`## Overview` + `## Instructions`) or Q&A form (`## Question` + `## Answer`). Articles with H1 + body prose but no recognized section structure are a Required structural fix — suggest Instructions form for procedural content or Q&A form for single-answer content. If the prose is missing procedural steps, flag that gap as a content decision (kb-writer territory) rather than auto-generating steps.

**Wrong-shape check.** Even when the article DOES have a recognized structure, verify the shape fits the content. Q&A form is for simple procedures with one procedure and minimal caveat content. An article using Q&A form that actually contains two or more distinct procedures, multi-step workflows, or substantial caveat/note content is a Required structural fix — restructure to `## Overview` + `## Instructions` with H3 subheadings per procedure. Ideally this decision is caught by `kb-writer` before reaching a review skill; apply it here if it arrives unresolved.

**Q&A question format.** In Q&A articles, content under `## Question` (and interrogative sub-headings in FAQ-style articles) must be a complete interrogative sentence — starts with an interrogative word (How do you / How can you / How should you / How will you / Can you / Should you / What / When / Where / Why / Which / Who / Does / Is / Are) and ends with `?`. Use second person ("you"), not first person ("I"), per `kb_style_guide.md`. "How to..." patterns (e.g., "How to export X?") are Required fixes — rewrite as "How do you export X?" or "Can you X?" as appropriate. Mark N/A if the article isn't Q&A form.

**Resolution Option Structure.** When the `## Resolution` section contains multiple options labeled as inline text — e.g., `Option 1:`, `Option 2:` — flag it and tell the writer to convert them to `### Option 1` and `### Option 2` H3 subheadings for scannability.

## 16. Images

**PNG, WebP, JPG, and JPEG are all in active use and all valid — do not flag file format under any of the three rows below.**

- **Location.** KB images must be stored in a `0-images/` folder at the **product level** (`docs/kb/<product>/0-images/`), not inside category subfolders. Articles in category subfolders reference them with `../0-images/filename.<ext>`. Flag any `0-images/` folder created inside a category subfolder rather than at the product level.
- **External references.** Flag any images linked from external sources (for example, GitHub CDN `https://github.com/user-attachments/assets/...`) — these must be downloaded and committed to the repo.
- **Alt text.** Must be descriptive, not just the filename. Flag any image where the alt text is only the raw filename (e.g., `![index_files_location.png](path)`) — rewrite as a short description of what the image shows, per `kb_style_guide.md`'s Screenshots section.
