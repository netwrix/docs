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
- `docs/<product>/` — Single-version (SaaS) products using `version: "current"`
- `docs/kb/` — Knowledge base articles (canonical source; never manually copy into versioned folders)
- `static/img/product_docs/<product>/` — Images (`.webp` format, absolute paths: `/img/product_docs/...`)
- `sidebars/<product>/<version>.js` — Sidebar configs (auto-generated; rarely need manual editing)

Edits to one version do not propagate to others. Update each version that needs the change explicitly.

## Writing Standards

The full style guide is in `netwrix_style_guide.md` at the project root. Read it when:
- A rule below is unclear or you need the reasoning behind it
- You encounter a formatting or grammar situation not covered here
- You're unsure whether something violates Netwrix standards

The four core qualities:

- **Accuracy** — Verify all technical information. Test procedures. Flag gaps.
- **Clarity** — Simple, direct language. Define every term and acronym on first use. Always provide examples.
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
- Examples immediately follow the concept they illustrate
- Never skip heading levels

## Linting

### Vale

Vale enforces 30 Netwrix-specific rules in `.vale/styles/Netwrix/` covering word choice, punctuation, formatting, and common writing issues. Vale issues are auto-fixed on PRs by the `vale-autofix` workflow — you don't need to fix them manually before pushing. You can still run Vale locally to preview issues:

```bash
vale <file>
```

Two rules require extra care:

- **`NoteThat`** — Replace "Note that..." or "Please note..." with an admonition block:
  ```md
  :::note
  Content here.
  :::
  ```
  Use `:::warning` for warnings, `:::tip` for tips.

- **`BoilerplateCrossRef`** and **`WeakLinkText`** — Read the surrounding context and the link destination before rewriting. The fix must reflect what the reader will actually find at the destination.

### Dale

Dale is an AI linter that catches issues regex-based Vale rules can't — passive voice, misplaced modifiers, idioms, wordiness, and other context-dependent patterns. Dale rules are in `.claude/skills/dale/rules/`. Dale issues are auto-fixed on PRs alongside Vale by the `vale-autofix` workflow.

Run Dale locally with `/dale <file>`.

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

**Auto-fix (Vale + Dale)** — Runs on PRs to `dev` with docs changes. Automatically fixes Vale issues (script for mechanical rules, Claude for judgment-based rules) and Dale issues (Claude), then posts a summary comment. No inline comments.

**Doc PR review** — Runs on PRs to `dev` with docs changes. Posts an editorial review summary. Does not block merges.

**Doc fixer** — Triggered by an `@claude` comment on a PR. Applies fixes and pushes. Fork PRs cannot be pushed to.

**Auto-sync** — `dev` merges to `main` automatically at 8 AM PST if the build passes. Production deployment follows.

**Branch workflow** — PRs target `dev`. Never commit directly to `dev` or `main`.

## Common Mistakes

- Don't manually copy KB content into versioned product folders — it's managed by the KB script
- Don't commit directly to `dev` or `main` — create a branch from `dev` first
- Don't target `main` in PRs — use `dev`
- Don't use first person anywhere in documentation content
- Don't omit examples — every concept introduced needs one
