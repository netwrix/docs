---
name: doc-draft
description: "Draft new Netwrix documentation from source material and write it into the docs tree. Use whenever the user supplies material to document, even if they never say 'draft': (1) a pull request or commit ('look at PR 123 in netwrix/repo and document the feature'); (2) specs, requirements, or a design doc; (3) rough notes, a transcript, or a brain dump; (4) a prompt detailed enough to draft from ('write a page on X covering A, B, C'); (4a) a request to structure or organize a new docs directory for a product or version; (5) a work item to document: a GitHub issue, a Jira ticket, or an Azure DevOps item, as a URL, a key or number, or pasted text. For editing or reviewing existing docs, style or Vale questions, brainstorming, or merging a .docx into a page, use doc-help instead."
argument-hint: "[PR number and repo, work item key or URL, spec or notes, or what to document]"
---

# Draft new documentation

You write documentation for Netwrix, a cybersecurity company whose products serve IT professionals and security teams. Work end to end in this session: read the source, draft the pages, lint them, and report what you did.

Read `docs/CLAUDE.md` first. It holds the Netwrix conventions, Vale rules, file structure, and content patterns. Read `style-reference.md` in this skill's folder for the grammar, formatting, and terminology rules that linters don't catch.

If the task is ambiguous, ask one clarifying question before you start. Otherwise make a reasonable choice, say what you chose in your report, and go on. If you can't ask (you are running in a subagent or headless), don't stop: make the choice, and say what you chose in your report.

You lint your own drafts: run the style check in step 9 of "Draft new documentation" before you finish. It is the same check that blocks the commit, and nothing lints on the PR.

## Task Types

### Draft new documentation

1. Read `docs/CLAUDE.md` for conventions, and `.claude/references/lint-rules.md`, the list of rules the style check enforces, so your first draft avoids them
2. Read the specification or source material provided
3. Read 1–2 similar existing documents in the same product for structural reference. Decide which zone the page belongs in from `.claude/references/documentation-section-guide.md`, by the reader's question the page answers
4. Draft the content following Netwrix structure: overview → prerequisites → procedures
   Every page you write starts with frontmatter that includes a `description`. The description is one sentence, under 160 characters, that says what the reader can do or learn on the page; write it from what the page contains, not from the title. Match the neighboring pages for the other keys (`title`, `sidebar_position`, `sidebar_label`).
5. Give every procedure an example: sample values, a command with real arguments, or the result the reader should see. Do not add an example to a concept just because it is introduced. If a concept would be clearer with an example and the source does not support a real one, write `{/* TODO: add an example of <concept> */}` where it belongs and list it in your report. Never invent an example to fill the space.
6. Anticipate reader questions and answer them inline
7. Reread the drafted file. Confirm the frontmatter has a `description` on every page you wrote. Fix any passive voice, hedging, future tense describing software behavior, wordiness, or idioms.
8. Write plainly the first time, and never trade meaning for shorter sentences: keep every fact, condition, qualifier, and requirement. Do not rewrite a finished draft to hit readability numbers. If the writer asks how readable the page is, run `npm run quality:readability -- <file>` and report the numbers; it is a report, not a target. The AI-isms check runs later at commit, so avoid filler, promotional wording, and stock AI phrasing as you write.
9. Lint the page before you finish. Run `npm run quality:score -- --file <file>` for each page you wrote. It runs Vale, Dale, and the AI-isms check, the same checks that block the commit. Fix every finding in your own words without changing any fact, condition, qualifier, or requirement, then run it again. Write each UI label exactly as the product shows it, in bold, and quote product messages verbatim in double quotes. Vale and Dale ignore both, so never reword a bold label or a quoted message to clear a finding. If a finding lands on a UI label that is not bold, bold it; do not reword it. If it lands on other text that must stay exactly as the product shows it (a literal value or a product name, say), wrap only that line in a Vale suppression for that one rule, the way the docs already do, `<!-- vale Netwrix.<Rule> = NO -->` before it and `<!-- vale Netwrix.<Rule> = YES -->` after it, and list each suppression in your report. Never suppress a rule on your own prose, and a Dale finding on exact product text is cleared by bolding or quoting it, not by suppressing it. Stop after 3 rounds and list anything still flagged in your report. If it says Vale is not installed, tell the user and continue; do not skip the other checks.

### Draft from a pull request

When given a PR (a number and repo, or a URL):

1. **Load product context first.** Find the product from the repo name, then read its brief at `.claude/references/products/<product>.md` and `docs/<product>/CLAUDE.md` if they exist. The brief says what the product is, how the code is laid out, and what the code calls things versus what the UI and docs call them. If the code contradicts the brief, the code wins: note the mismatch in your report. If there is no brief, say so in your report and continue.
2. Read the PR with `gh pr view <n> --repo <owner/repo> --json title,body,files,commits` and `gh pr diff <n> --repo <owner/repo>`. Read linked issues the body references.
3. **Read beyond the diff.** Reading the full code answers what the diff cannot: menu paths, button labels, defaults, permissions, feature flags. Get a local copy of the PR's repo, in this order:
   1. The brief's `local_clone` path, if it exists and its `origin` remote matches the repo.
   2. A search for an existing clone: check `~/src`, `~/code`, `~/repos`, `~/git`, `~/projects`, `~/work`, and the parent of the current directory for a git repo whose `origin` remote matches `<owner>/<repo>` (`git -C <dir> remote get-url origin`). Most users already have one.
   3. No clone found: ask the user once for the path, or whether you may clone it. If they agree, run `gh repo clone <owner>/<repo> ~/src/<repo>` (a full clone, so later runs reuse it) and tell them where it landed. If they decline or there is no answer, read the changed files at the PR's head commit with `gh api` and say in your report that the draft lacks full-code context.

   Never check out in the user's working tree. Fetch the PR into a separate worktree in your scratchpad directory (`git -C <clone> fetch origin pull/<n>/head` then `git -C <clone> worktree add <scratchpad>/pr-<n> FETCH_HEAD`) and remove the worktree when you finish. In it, read the changed files in full, then their callers, config defaults, and UI strings or resources.
4. **Find what the docs already say.** Search `docs/<product>/` (latest version) with Grep for the feature's UI labels, setting names, and CLI switches. Decide: new page, new section in an existing page, or a change to existing text. Say which in your report, with paths.
5. Work out what a user can now see or do: new UI, settings, defaults, permissions, limits, and behavior changes. Document only what the code and description support. Where they are silent, write a `{/* TODO: ... */}` marker and list it in your report. Do not infer behavior.
6. Decide the version and target folder from the PR and `src/config/products.js`. If you can't tell, ask one question.
7. Continue with "Draft new documentation" from step 3.

### Draft from a work item (GitHub issue, Jira ticket, Azure DevOps item)

When given an issue, ticket, or work item (a URL, a key such as `PLAT-1234`, an issue number with a repo, or an Azure DevOps item id):

1. **Fetch it from its tracker.** Read the title, description, acceptance criteria, labels, status, fix or target version, comments, and linked items.
   - **GitHub issue:** `gh issue view <n> --repo <owner/repo> --comments --json title,body,labels,state,comments`. Find linked PRs from the body, the comments, and `gh pr list --repo <owner/repo> --state all --search "<n>"`.
   - **Jira ticket:** use an Atlassian or Jira tool if one is connected (load it with ToolSearch; names contain "Atlassian" or "Jira"), or a Jira CLI if one is installed. Include the issue's links, development panel, and fix version.
   - **Azure DevOps item:** use `az boards work-item show --id <n> --expand relations` if `az` and its `azure-devops` extension are installed, or an Azure DevOps tool if one is connected. Follow the related pull requests and linked items.
   - **No access.** If you cannot reach the tracker (no tool, not signed in, or the item is private), say what you tried and ask the user once to paste the title, description, acceptance criteria, and comments. Never reconstruct a ticket from its key or title alone.
2. **Treat the item as a claim, not as proof.** Work items describe intent, and they go stale. Prefer what linked code shows over what the description says, and note any conflict in your report.
3. **Follow the code.** If you find one or more linked or merged PRs, run "Draft from a pull request" for them (product context, reading the code, finding what the docs already say), and use the item's description for the user-facing purpose, audience, and wording. If there is no linked code, treat the item's text as the only source, as in "Draft from specs, notes, or a prompt."
4. **Check whether it shipped.** If the item is open, in progress, or not in a released version, write `{/* TODO: confirm this ships in <version> */}` and say so in your report. Take the version from the item's fix or target version. Do not guess one.
5. **Keep tracker details out of the page.** Never copy ticket keys, customer or tenant names, internal URLs, credentials, or personal names into the docs. If the item or its comments describe an unpatched vulnerability, do not document the vulnerability. Report it to the user and stop short of publishing details.
6. Continue with "Draft new documentation" from step 3. In your report, list the tracker and item id, every source you read (item, comments, linked PRs, code), what you could not read, and each gap you marked with a TODO.

### Draft from specs, notes, or a prompt

Treat the supplied text as the only source of fact. Restructure it into the Netwrix page type it fits (concept, procedure, reference). Mark gaps with `{/* TODO: ... */}` instead of filling them from memory, and list every gap in your report. If the prompt names no product or version, ask one question.

### Structure a new directory from scratch

When there is no docs directory yet for a product or version, or the user asks you to organize one, follow `.claude/references/documentation-section-guide.md`. Read it first and apply it exactly.

1. **Pick the zones.** Always include the required zones: Getting Started, Requirements, Install and Update, Configuration, and Administration (the core `admin` category is always present). Add a conditional zone (Release Notes, Migration, User Guide, Integrations & API, Troubleshooting) only when its "when it applies" condition is met and you have real content for it. Never create an empty section.
2. **Keep the order.** Release Notes first, then Getting Started, Requirements, Install and Update, Migration, Configuration, Administration, User Guide, Integrations & API, Troubleshooting. Knowledge Base stays at position 999.
3. **Place each page by the reader's question it answers.** Getting Started has no install steps, requirements, or settings. Requirements and Install hold only the base product; a module's own requirements and setup live with that module. A routine upgrade stays in Install and Update. Migration is for moves between major versions or from a competing product.
4. **Administration can be a band.** Keep `admin` for core operation. Give a substantial, distinct feature area its own sibling category. Don't flatten large features into `admin`, and don't invent categories for content that fits under it. A module with its own install, admin, and end-user surfaces repeats the zone logic one level down.
5. **Release notes page.** One page that links to the Netwrix Community, with the standard header and body text from the guide.
6. **Create the structure.** One folder per zone, each with a `_category_.json` (label, position, collapsed and collapsible, and a link to its overview page, as existing products do) and a landing page. Use positions in zone order with gaps, the Administration core at 400 with siblings at 440, 460, and so on, and the Knowledge Base at 999. If the product already has directories, match its existing numbers and folder-naming convention.
7. **Registration.** If the product or version is not in `src/config/products.js`, do not guess an entry or edit that file. Give the entry it needs in your report.
8. **Report the structure.** List each zone you created and its position, each zone you left out and why, and anything that did not fit a zone.

### Multi-file tasks

When the source needs several pages (for example a feature with a concept page, a procedure, and a reference table):

1. Plan the page list first: file path, page type, and the facts each page covers
2. Create one todo per page
3. Draft pages one at a time — complete all steps for each file before moving to the next
