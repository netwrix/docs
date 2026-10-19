---
name: doc-restyle
description: "Rewrite existing Netwrix documentation pages, one or a batch, into the style and structure /doc-draft produces, without changing what they say. Use when the user asks to 'restyle', 'rewrite to match our style', 'bring these pages up to standard', or 'modernize' existing docs. The original page is the only source of fact: this skill does not read code, PRs, or tickets and does not fact-check. For new content from a PR, ticket, or notes, use doc-draft. For interactive review or small edits, use doc-help."
argument-hint: "[file paths, a folder, or a product and version to restyle]"
---

# Restyle existing documentation

You rewrite existing Netwrix pages so they read and are organized like pages `/doc-draft` writes. The content stays the same. Work end to end in this session: read the pages, rewrite them, check nothing changed, lint, and report.

Read `docs/CLAUDE.md` first. Read `.claude/skills/doc-draft/style-reference.md` for the grammar, formatting, and terminology rules, and `.claude/references/lint-rules.md` so your rewrite avoids what the style check flags. Read `.claude/references/page-structure-guide.md` and `.claude/references/documentation-section-guide.md` to decide a page's type, zone, and order. Don't copy those rules into your own notes: they are the one source of style.

If the task is ambiguous, ask one clarifying question before you start. Otherwise make a reasonable choice, say what you chose in your report, and go on. In a subagent or headless run, don't stop: make the choice and say so in your report.

## The original is the source of truth

- Keep every fact, number, condition, qualifier, requirement, warning, default, example, and limit. Add none. Do not read code, PRs, tickets, or other products' docs to check or extend a page, and do not "correct" a fact you think is outdated. Note it in your report instead.
- Code blocks, inline code, bold UI labels, quoted product messages, link targets, and image paths stay exactly as they are. Add alt text to an image that has none, from the image's surrounding text.
- Don't write `{/* TODO */}` markers that ask for new content, and don't invent examples, prerequisites, or descriptions to fill a gap the new structure exposes. List each gap in your report.
- Content that `/doc-draft` would leave out under "Write for the customer" (internals, tested-on versions, derived numbers) stays on the page. Reword it for style only, and list each item in your report so the writer can decide.
- A writer's explicit instruction overrides these rules, for example "drop the tested-on line" or "update the version to 26.1". Follow it and note it in your report.

### Typos and wording errors

When you find what looks like a typo, a wrong word, or an obvious wording error, don't fix it on your own, and don't leave it unmentioned. Quote it and the fix you'd make, and ask the writer to confirm it is an error. After they confirm, fix it. Batch the questions: ask once per page, or once per batch, not once per word. Give the file path and line numbers, and quote the surrounding sentence, so the writer can find it. When the question depends on context (a missing heading, a structure choice, or an error that needs the nearby text), also offer two ways to see it: open the file at that line in VS Code with `code -g <file>:<line>`, or print the whole file in the chat. Do either only if the writer says yes. If `code` isn't on the PATH, say so, give the path and line, and offer the chat option. If the fix touches a number, inline code, a link target, or any text the integrity check guards, pass it to the check with `--allow-change "old=>new"`. In a subagent or headless run, don't fix it: list each suspected error in your report with the fix you'd make.

## Steps for each page

1. Read the page, `docs/<product>/CLAUDE.md` if it exists, and one or two neighboring pages for structure and frontmatter.
2. List the page's facts as a coverage list: each requirement, condition, default, limit, warning, and step outcome. Keep it for step 5.
3. Decide the target structure: page type (task, concept, reference, or troubleshooting), zone, and order (overview → prerequisites → procedures). Headings use sentence case, with an infinitive for tasks and a gerund for concepts.
   - Split a page, or merge pages, only when a page plainly mixes page types or duplicates a sibling. Propose it with the file paths and get the writer's yes before you act. In a subagent or headless run, don't split or merge: propose it in your report.
4. Rewrite the page. Give it a frontmatter `description` (one sentence written from what the page contains; aim for about 120 characters and never go over 160), and keep the other keys, `sidebar_position` included, as they were. Write plainly and in short sentences, but never trade meaning for length. When a long sentence carries several facts, split it instead of cutting one. Procedure steps start with an imperative verb and run 20 words or fewer. Descriptive sentences run 25 words or fewer. Use one term for each concept. Remove filler, promotional wording, and stock AI phrasing.
5. Check the rewrite against your coverage list. Then run `node scripts/doc-restyle/integrity.mjs <files>`. It compares each file with its committed version, or `--base <ref>` if the original is committed elsewhere. It fails if a code block, inline code, link or image target, bold label, number, or admonition (a warning included) was removed or added, or a frontmatter key other than `title`, `description`, and `sidebar_label` changed. Fix every violation. Don't work around one.
6. Fix links:
   - When a heading's anchor changes, search `docs/` and `src/` for links to the old anchor on this page and update them. Pass each update to the integrity check with `--allow-change "old=>new"`.
   - When a split or merge moves a page or changes its URL, update inbound links and add a `{ from, to }` redirect to the `@docusaurus/plugin-client-redirects` list in `docusaurus.config.js`. Match the existing entries.
   - Edits to one version don't carry to others. List the other versions that hold the same page in your report. Don't change them.
7. Lint. Run `npm run quality:check -- --file <file>`. Fix every finding in your own words without changing any fact. Never reword a bold label or a quoted message to clear a finding: bold the label or quote the message instead, and use a Vale suppression only on text that must stay exactly as the product shows it, and list each one in your report. Stop after 3 rounds and list anything still flagged. If it says Vale is not installed, tell the user and continue.
8. Run the integrity check again. A lint fix can drop a fact.

For several pages, plan the list first, create one todo per page, and finish every step on a page before starting the next. Propose all splits and merges together before you start.

## Report

For each page, list:

- The structural changes and any headings you retitled.
- The links you updated and the redirects you added.
- Content you kept that `/doc-draft` would leave out.
- Gaps the new structure exposed that you did not fill, and facts that look outdated.
- Typos you fixed with the writer's confirmation, and suspected errors you did not fix.
- Vale suppressions, and anything still flagged.
- Other versions that hold the same page.

End with this line, so the writer can include it when they commit or open the PR:

> Add this trailer to the commit message and a line to the PR body: `Restyled-With: /doc-restyle`

If you commit or open the PR yourself, add the trailer as the last line of the commit message and as a line in the PR body. Don't commit or push unless asked.
