# Netwrix Product Documentation — Agent Guide

This file is loaded automatically by Claude Code when working in the `docs/` directory. It provides the shared context that all agents and interactive sessions need when writing or editing Netwrix documentation.

## Project Overview

Netwrix builds security products that help IT professionals and security teams protect their organizations. This documentation site serves 27+ Netwrix products across 6 categories, built with Docusaurus v3.8.1 with multi-version support.

## Audience

Netwrix documentation is written for:
- **IT administrators** deploying and managing security products
- **Security analysts** monitoring and responding to threats
- **Newer users** who may not have deep security expertise yet

Write for the person who knows their job but may be new to this specific product. Never assume what the reader knows — always provide context. More advanced users will skim; newer users will need it.

## File & Directory Structure

- `docs/<product>/<version>/` — Versioned product documentation (e.g., `docs/accessanalyzer/12.0/`)
- Inside a product, every section follows the zone order and rules in `.claude/references/documentation-section-guide.md` (Getting Started, Requirements, Install and Update, Configuration, Administration, and so on). Read it when you add a page or create a directory.
- `docs/<product>/` — Single-version (SaaS) products using `version: "current"`
- `docs/kb/` — Knowledge base articles (canonical source; never manually copy into versioned folders)
- `static/images/<product>/` — Images (`.webp` format, organized by version/section, absolute paths: `/images/...`)
- `sidebars/<product>/<version>.js` — Sidebar configs (auto-generated; rarely need manual editing)

Edits to one version do not propagate to others. Update each version that needs the change explicitly.

KB articles store images in `0-images/` subdirectories alongside the article markdown. PNG, WebP, JPG, and JPEG are all in active use and all valid — file format doesn't matter, only location does. These are copied by the KB script — don't move or rename them.

## Writing Standards

The full style guide is in `netwrix_style_guide.md` at the project root. Read it when:
- A rule below is unclear or you need the reasoning behind it
- You encounter a formatting or grammar situation not covered here
- You're unsure whether something violates Netwrix standards

The four core qualities:

- **Accuracy** — Verify all technical information. Test procedures. Flag gaps.
- **Clarity** — Simple, direct language. Define every term and acronym on first use. Every procedure has an example. A concept gets one only when it helps; if one would help and the source doesn't support a real one, leave `{/* TODO: add an example */}` for the writer.
- **Consistency** — Same terminology, structure, and formatting throughout.
- **Professionalism** — Neutral, informative tone. No humor, no marketing language, no first person.

### Key rules

- Active voice and present tense throughout
- Second person ("you") for procedures; third person acceptable in overviews and conceptual descriptions
- Contractions encouraged: don't, can't, you'll
- No idioms, metaphors, or culturally specific references
- No "currently", "presently", or "as of this writing"
- Spell out acronyms on first use: "group Managed Service Account (gMSA)"
- Angle brackets for placeholders: `<report-name>`, not `[report-name]`
- Sentence case for feature names; capitalize Netwrix product names correctly
- Oxford comma required in all lists
- No first person (I, me, my, we, us, our) in documentation content

### Document structure

- Order: overview → prerequisites → procedures
- Task headings: imperative verbs — "Configure the monitoring plan"
- Concept/overview headings: noun phrase or gerund — "Configuring the monitoring plan"
- An example immediately follows the procedure or concept it illustrates
- Never skip heading levels

## Linting

### Vale

Vale enforces 43 Netwrix-specific rules in `.vale/styles/Netwrix/` covering word choice, punctuation, formatting, and common writing issues. Vale runs before the PR: the pre-commit hook blocks a commit while Vale flags a new page, or the lines you changed on an existing page. Nothing lints on the PR, so fix findings before you push. Vale must be installed. Vale and Dale skip bold text (UI labels) and double-quoted text (verbatim product messages), so write each label exactly as the product shows it, in bold, and never reword either to clear a finding. If a UI label is flagged because it isn't bold, bold it. For exact product text that is neither, wrap the line in `<!-- vale Netwrix.<Rule> = NO -->` and `<!-- vale Netwrix.<Rule> = YES -->` for that one rule. Preview issues with:

```bash
vale <file>
```

These rules require extra care:

- **`NoteThat`** — Replace "Note that..." or "Please note..." with an admonition block:
  ```md
  :::note
  Content here.
  :::
  ```
  Use `:::warning` for warnings, `:::tip` for tips.

- **`WeakLinkText`** — Read the surrounding context and the link destination before rewriting. The fix must reflect what the reader will actually find at the destination.

### Dale

Dale is an AI linter that catches issues regex-based Vale rules can't — passive voice, misplaced modifiers, idioms, wordiness, and other context-dependent patterns. Dale rules are in `.claude/skills/dale/rules/`. Dale runs before the PR too: the pre-commit hook has a model apply these rules to new pages and to the lines you changed, and blocks the commit on findings.

Run Dale locally with `/dale <file>`.

### Pre-PR style check (local, required)

Every docs contribution is linted before it reaches a PR: Vale, Dale, and a check for signs of AI writing. There is no CI job for this; it runs on your machine. Run it on a page with `npm run quality:score -- --file <path>`. The hook is installed by `npm install`. Skipping it on purpose (`git commit --no-verify`) is allowed.

- **Scope:** a new page is checked whole. An existing page is checked only on the lines the change adds or rewrites; text it already had is never flagged. A page git detects as a copy or rename (50% or more similar) counts as existing, so cloning a version directory only checks what differs. `docs/kb/` is out of scope.
- **Vale:** the repo's Vale rules, from the page text (so the staged version is checked). Vale must be installed, or the commit is blocked with install steps. The Stop hook runs without that requirement.
- **Dale:** a model applies the 10 rules in `.claude/skills/dale/rules/` in one call per page. Like the judge, it runs 3 times, keeps findings that 2 runs report at the same spot, and counts only findings whose quote appears verbatim on a changed line. Verdicts are cached.
- **Deterministic AI-isms:** `scripts/doc-draft/slop.mjs` (catalog in `scripts/doc-draft/ai-isms.yml`). Structural signals such as sentence-length variance apply only to new pages.
- **Judged:** a Haiku 4.5 judge applies the 16 patterns in `.claude/references/humanizer-rules.md`. It runs 3 times per page and keeps findings that at least 2 runs report at the same spot. A finding counts only if its quote appears verbatim on a changed line. Verdicts are cached by content hash in `.cache/quality`.
- **Draft markers:** write unresolved gaps as `{/* TODO: ... */}` so they never render. `scripts/quality/todo-check.mjs` warns (never blocks) about leftovers at commit and in the Stop hook.
- **Approved phrases:** `judge.ignoreQuotes`, `judge.ignoreReasons`, `dale.ignoreQuotes`, and `vale.ignore` (a Vale rule name) in `scripts/quality/config.json`.

Where it runs:

- **Pre-commit (husky):** `scripts/quality/score.mjs --staged` blocks the commit while anything is flagged. The judge uses `ANTHROPIC_API_KEY` if set, and otherwise your Claude Code login (`claude -p`). With neither, it runs the deterministic checks only and says so.
- **Claude Code Stop hook:** `.claude/hooks/stop-quality-check.sh` runs the same check when Claude finishes, but only on the docs that session edited (`post-edit-record.sh` records each file written with Edit or Write, so a file changed through a shell command is not recorded). It hands the findings back to Claude to rewrite, up to 3 rounds, and never touches other drafts on the branch. Pre-commit is the hard gate and checks everything staged.

Run it by hand with `npm run quality:score` (`-- --staged` for the index). `npm run quality:fix -- --staged` is an optional helper (same model access as the judge) that drops flagged filler, swaps plain words, and rewords flagged sentences. Each edit is validated, drops and rewords get a meaning check, and a reword may not lose a number, negation, or requirement word. A reword the meaning check doubts is still applied but printed as `review`; read those in `git diff`. A drop the check doubts goes to a patch instead.

### Readability (optional report)

Readability is not a gate and not a rewrite target. Write plainly the first time, and never trade a fact, condition, or qualifier for a shorter sentence. `npm run quality:readability -- <file>` reports Flesch reading ease, mean sentence length, and the share of sentences over 30 words, for a writer who wants to see them (reference points: Flesch 45 or higher, mean sentence 16 words or fewer, 10% or fewer over 30 words). Agents report the numbers if asked and do not revise to meet them.

## Content Patterns

### Admonitions

```md
:::note
Supplementary information the reader should be aware of.
:::

:::tip
Helpful suggestions that improve the experience.
:::

:::warning
Information that could cause data loss or security issues if ignored.
:::

:::danger
Critical information that could cause serious harm.
:::
```

### Procedures

Each step is a single action. Lead with the UI element or command:
- Do: "Click **Save**."
- Do: "Run `vale <file>`."
- Don't: "You should now click the Save button."

### Headings

- Task topics: imperative verb — "Install the agent"
- Concept topics: noun phrase or gerund — "Agent installation"

## CI/CD Context

**No lint on the PR** — Vale, Dale, and the AI-isms check run before the PR, in the pre-commit hook. The `Script Tests` workflow runs only when a PR changes `scripts/` or `package.json`.

**Doc PR review** — Runs on PRs to `dev` with docs changes. Posts an editorial review summary. Does not block merges.

**Doc fixer** — Triggered by an `@claude` comment on a PR. Applies fixes and pushes. Fork PRs cannot be pushed to.

**Auto-sync** — `dev` merges to `main` automatically at 8 AM PST if the build passes. Production deployment follows.

**Branch workflow** — PRs target `dev`. Never commit directly to `dev` or `main`.

## Common Mistakes

- Don't manually copy KB content into versioned product folders — it's managed by the KB script
- Don't commit directly to `dev` or `main` — create a branch from `dev` first
- Don't target `main` in PRs — use `dev`
- Don't use first person anywhere in documentation content
- Don't omit the example from a procedure. Don't pad a concept with an example it doesn't need; if one would help and you can't confirm it, leave `{/* TODO: add an example */}`
