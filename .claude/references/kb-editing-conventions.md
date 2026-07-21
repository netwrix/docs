# KB Editing Conventions

Comprehensive KB editing rulebook covering structure, step condensation, list types, sentence-level rules, callouts, bolding, overview quality, links, placeholders, formatting, cross-section consistency, and titles.

Apply during the `kb-pr-open` preemptive scan and the `kb-pr-review` Derek review pass on every KB batch. This document is the canonical rulebook — both skills reference it rather than duplicating its content. Amend it via PR when a batch surfaces a new pattern.

## 1. Heading/step structure

**Right-size step groups before applying `Step N —` normalization.** This is a two-gate rule.

- **Gate A — Consolidate first.** Before applying any `Step N — <Label>` normalization, evaluate each candidate subheading against a substance test. A subheading is a merge candidate when it contains ≤1 action step *and* that action reads as prep/cleanup for an adjacent group — e.g., "Stop Services" or "Start Services" bracketing an install step, "Save and Exit" trailing a config edit, a lone "Restart the Agent" after a settings change. Fold merge candidates into the neighboring subheading. Only substantive subheadings count toward Gate B.
- **Gate B — Normalize.** If ≥3 substantive subheadings remain after Gate A **and represent sequential steps of the same procedure**, apply `Step N — <Label>` (em dash, not colon) to that set. The count excludes subheadings that are a categorically different kind of section — most commonly a `Troubleshooting`/exception-handling subheading — even when it sits at the exact same heading depth as the procedural subheadings it follows. Troubleshooting content isn't a step in the sequence; it doesn't count toward the Gate B threshold, and it doesn't receive a `Step N —` label itself (nor does anything nested beneath it). Normalize any pre-existing `Step N:` to match. Does NOT apply to parallel-alternative subheadings (Windows/Linux) — keep those descriptive. See also [[feedback_kb_step_subheadings]].
- **Under-fragmentation — the mirror problem.** A single `## Instructions` or `## Resolution` section holding two or more distinct activities (locate a log, then look up an error code; edit a config, then verify the login flow) with no subheadings is as broken as over-fragmentation. Split by distinct activity; use subheadings once there are two or more real activities.
- **Action described as trailing prose** — an action that logically belongs in the numbered sequence but sits as a trailing paragraph (e.g., a "start the services" instruction written as prose after the last numbered step) gets pulled into the sequence as its own numbered step, matching the structure of parallel actions in the article.
- **Subheading wrapping a single trivial element** — a subheading like `### Example Error Message` that exists only to label a single code block adds structure without content. Remove the subheading and lead in with a short sentence ("Example error:") followed by the code block. A heading implies a navigable, standalone unit; a lone error block is not one.
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

- **Numbered lists** for sequential actions performed in order.
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

## 5. Callout severity

- **NOTE vs IMPORTANT is a judgment call, not interchangeable by default.** Supplementary/contextual info stays NOTE. Information that affects correctness or causes a real problem if skipped (e.g., a config-change timing caveat that could cause a false test result) should be IMPORTANT. Revisit per file rather than assuming the original author chose correctly.
- **Blank line required before any NOTE/IMPORTANT/WARNING blockquote.**

## 6. Bolding

- **Bold named apps/tools** the reader opens (Command Prompt, Mongo shell) — matches site-wide precedent. Don't extend to every noun.
- **Don't bold generic/non-UI nouns** (MongoDB service, MongoDB authentication).
- **Don't bold the product name after "Log in to."**
- **Verify UI tab/option names against the actual product docs** before bolding or renaming.

## 7. Overview quality

- **Overview must open with the goal.** The first sentence states what the article does — canonical form is `This article describes how to <goal>` or an equivalent explicit-goal opener (`This article explains...`, `This article shows how to...`). Stating rationale (why the reader might want to do the thing) or context (background on the feature) without a leading goal sentence is NOT sufficient — flag as a Required rewrite. Goal-first framing is what tells the reader "yes, this is the article for what I need to do"; rationale-first buries that signal.
- **Never let Overview restate the title** verbatim, or read as a symptom/condition.
- **Pull concrete, sourced facts** from product docs to expand beyond the goal sentence when there's substance to add.
- **Link to product-doc background** where it exists (pathname://...) instead of just defining a term inline.

## 8. Links

- **`<!-- link removed -->` comments** deserve a real-target search before shipping. If a valid internal replacement exists in `docs/kb/**/*.md` or `docs/<product>/<version>/**/*.md`, restore the cross-link.
- **"Contact Netwrix Support"** → `[Netwrix Support](https://www.netwrix.com/support.html)`. Only link the first "contact" action per article.
- **Internal `pathname://` links** use the version-with-underscore format (`8_2` not `8.2`) and must resolve to a real file.
- **Dense multi-link "see X, see Y, see Z" prose → single NOTE.** When a paragraph contains 3+ inline cross-reference clauses stacked in one sentence, collapse them into a single NOTE block with the links listed cleanly (compact enumeration or short bulleted list under the NOTE). Multiple inline "see also" clauses in one sentence read as noise; a NOTE with clean bullets is scannable.
- **Title change → link-text sweep across the repo.** When a KB article's title changes, do a repo-wide search for internal links whose visible text uses the *old* title, and update the link text to the new title. URL resolution alone is not sufficient — the visible link text must describe the current target, per the style guide's link-text rule. The existing links-review check (URL resolves on disk) does not catch stale link text.

## 9. Placeholders & data hygiene

- **Angle-bracket placeholders** (`<password>`) instead of bare literal words.
- **Check example data** (IPs, usernames, connection strings) for whether it's actually sensitive before flagging. Private/RFC1918 IPs and self-referential example accounts (like `c##ntx` for Oracle) are not sensitive.
- **SME HTML comments are never removed** — they're intentional cues for the SME reviewer.
- **A restructuring pass** (reorganizing existing content) is safe even next to an open SME accuracy flag. Reorganizing what's already stated isn't the same as asserting new facts. Don't let an SME flag block a pure structure fix; just don't touch the substance.

## 10. Formatting

- **A flat list of data** becomes a monospace code-block grid, not comma-separated prose or a fake table.
- **Trailing image-removed comments** don't need their own anchoring sentence, but excess consecutive blank lines around them get trimmed to one.
- **KB headings are Title Case** (verified against `kb_style_guide.md`, not assumed) — override of the docs-wide sentence-case rule.

## 11. Cross-section consistency

Rules that compare two sections of the same article against each other. Section-local scans miss these because each individual section reads correctly on its own.

- **Symptom vs Cause overlap.** Symptom describes what the user *observes* — error text, UI behavior, timing. Cause describes the *mechanism* — why the observed behavior occurs. When Symptom restates the mechanism ("the operation fails because X"), trim it to observation only and move the mechanism into Cause. When Cause repeats the observed behavior instead of explaining why, treat as thin and route to `kb-writer`.
- **Acronym defined but long form reused.** If the article defines an acronym on first use — e.g., "two-factor authentication (2FA)" — subsequent references in body/headings/notes should use the acronym, not the long form. Dale only catches *undefined* acronyms; this is the opposite half of consistent-use.
- **Product name over-repetition after first use.** After the product's full name has established context (typically in Overview or the first Symptom sentence), later mentions can drop the "Netwrix" prefix or the full name entirely where context makes it unambiguous. Flag runs of "Netwrix Change Tracker … Netwrix Change Tracker … Netwrix Change Tracker" that read as boilerplate.
- **Related Articles link with no topical anchor in body.** Every link in a Related Articles section (or bullet at the bottom) should have some topical mention in the article body — the linked topic came up, was compared, was ruled out, etc. Links to unrelated topics that were never mentioned are orphaned defaults; remove them.
- **Capitalization consistency for named permission types and access rights.** Named permission types (Domain Admin, Read, Write, Read/Write, Full Control, Modify, and similar) must be capitalized consistently within a single article. Flag runs like "Write permission" (capitalized) alongside "read and write access" (lowercase) referring to the same named right within the same file. Pick one convention and apply throughout.

## 12. Titles

Content-of-title rules (surface style — gerund form, title case — lives in the kb-pr-open SKILL title-format rules).

- **Raw log line or error dump as title.** Titles like `ConfigurationLoader FATAL Hub Location Details Have Not Been Specified in HubDetails.xml at ...` — literal log lines with level tokens (FATAL, ERROR), stack noise, file paths, or truncation fragments — are unreadable and unsearchable. Normalize to the pattern `<Component> Error - <core diagnostic phrase>`, keeping only the searchable message.
  - Examples of the fix:
    - `ConfigurationLoader FATAL Hub Location Details Have Not Been Specified` → `ConfigurationLoader Error - Hub Location Details Have Not Been Specified`
    - `TraceLogger ERROR System.Net.Sockets.SocketException Address already in use` → `TraceLogger Error - Address Already in Use`
    - `RemotePlatformDiscovery Could not get credentials from ...` → `Remote Platform Discovery Error - Could Not Get Credentials`
  - This is separate from the retired `Error:` *prefix* convention. That rule was about not prepending `Error:` to every troubleshooting title. This rule is about the title itself being a log dump — a different anti-pattern. The pattern `<Component> Error - <phrase>` uses an inline `Error` word for disambiguation, not a leading prefix.
