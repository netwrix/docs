# KB Editing Conventions

Comprehensive KB editing rulebook covering structure, step condensation, list types, sentence-level rules, callouts, bolding, overview quality, links, placeholders, and formatting.

Apply during the `kb-pr-open` preemptive scan and the `kb-pr-review` Derek review pass on every KB batch. This document is the canonical rulebook — both skills reference it rather than duplicating its content. Amend it via PR when a batch surfaces a new pattern.

## 1. Heading/step structure

- **`Step N — <Label>` format** for Instructions sections with 3+ sequential subheadings. Em dash, not colon — normalize any pre-existing `Step N:` to match. See also [[feedback_kb_step_subheadings]].
- **Merge tightly-related subheadings** into one step (e.g., "Create a Group" + "Add Your Device" → one step).
- **Nested if/then branches** get split into their own subsections instead of nested lettered/roman sub-lists.
- **Prerequisite repeated across steps/sections** gets hoisted into one NOTE near the top of Instructions instead of restated per step.
- **Numbered list broken by intervening paragraph** silently restarts at 1 in rendered output. Fix with a heading boundary or 4-space indent to attach the paragraph to the preceding step — not by fiddling with numbers.
- **Every subheading under Instructions must contain an actual action.** If a subsection is purely descriptive/observational ("the events appear in the event list," "opening a baseline event shows...") with no step for the reader to perform, it doesn't belong under Instructions. Restructure into its own labeled section (e.g., "Reviewing X") using prose or a bulleted list of facts, not fake numbered "steps."
- **Result descriptions inside numbered lists** — a step that's actually a result rather than an action ("All collections appear in the output" sitting between real actions) gets pulled out of the numbering. Either fold as a parenthetical on the preceding action or set as unnumbered prose beneath it.

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

## 4. Sentence-level rules

- **Full imperative sentences** ending in a command/path need a period; **bare file-path bullets** (fragments) do not.
- **Intro sentences before a list** end in a colon. Cut them if they just restate the heading directly above.
- **"The following"** is fine as a positional reference immediately before an adjacent code block/list/breadcrumb — don't strip reflexively. Only cut when vague/unanchored or duplicative.
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

- **Never let Overview restate the title** or read as a symptom/condition.
- **Pull concrete, sourced facts** from product docs, then state the goal: "This article describes how to..."
- **Link to product-doc background** where it exists (pathname://...) instead of just defining a term inline.

## 8. Links

- **`<!-- link removed -->` comments** deserve a real-target search before shipping. If a valid internal replacement exists in `docs/kb/**/*.md` or `docs/<product>/<version>/**/*.md`, restore the cross-link.
- **"Contact Netwrix Support"** → `[Netwrix Support](https://www.netwrix.com/support.html)`. Only link the first "contact" action per article.
- **Internal `pathname://` links** use the version-with-underscore format (`8_2` not `8.2`) and must resolve to a real file.

## 9. Placeholders & data hygiene

- **Angle-bracket placeholders** (`<password>`) instead of bare literal words.
- **Check example data** (IPs, usernames, connection strings) for whether it's actually sensitive before flagging. Private/RFC1918 IPs and self-referential example accounts (like `c##ntx` for Oracle) are not sensitive.
- **SME HTML comments are never removed** — they're intentional cues for the SME reviewer.
- **A restructuring pass** (reorganizing existing content) is safe even next to an open SME accuracy flag. Reorganizing what's already stated isn't the same as asserting new facts. Don't let an SME flag block a pure structure fix; just don't touch the substance.

## 10. Formatting

- **A flat list of data** becomes a monospace code-block grid, not comma-separated prose or a fake table.
- **Trailing image-removed comments** don't need their own anchoring sentence, but excess consecutive blank lines around them get trimmed to one.
- **KB headings are Title Case** (verified against `kb_style_guide.md`, not assumed) — override of the docs-wide sentence-case rule.
