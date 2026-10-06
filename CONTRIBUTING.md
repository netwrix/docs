# Contributing to Netwrix Documentation

Thank you for contributing to Netwrix product documentation. This guide covers everything you need to get started.

## Prerequisites

- **Node.js 22+**
- **npm**
- **Git**
- **Vale** (style linter — required: the pre-commit check runs it, and a commit is blocked if it isn't installed)

### Install Vale

[Vale](https://vale.sh/) is a command-line linter for prose. It checks your writing against a set of style rules — like a spell checker, but for grammar, word choice, and tone. The pre-commit hook runs it before each commit, so it needs to be installed.

**macOS:**
```bash
brew install vale
```

**Linux:**
```bash
sudo snap install vale
```

**Windows:**
```bash
choco install vale
```

**Manual install for any platform:**

Download the latest release from [github.com/errata-ai/vale/releases](https://github.com/errata-ai/vale/releases), extract the binary, and add it to your PATH.

Verify the installation:
```bash
vale --version
```

## Getting started

```bash
# Clone the repository
git clone https://github.com/netwrix/docs.git
cd docs

# Install dependencies (this also installs the pre-commit check)
npm install

# Start development server
npm run start
```

`npm install` also installs a git pre-commit hook that lints your docs before each commit, so run it even if you only edit markdown.

The dev server runs on port 4500 with hot reload — changes you make to documentation files appear immediately in the browser.

## Workflow

1. Create a branch from `dev` (never commit directly to `dev` or `main`).
2. Make your changes to documentation files in `docs/`.
3. Commit. The pre-commit hook checks your docs with Vale, Dale, and a check for signs of AI writing, and blocks the commit if it finds anything. Fix what it flags, `git add`, and commit again. You can preview it any time with `npm run quality:score`.
4. Test the build with `npm run build`.
5. Push your branch.
6. Create a pull request (PR) targeting `dev`.

Nothing lints on the PR: that happens at commit. After you open a PR, an editorial review runs and posts results as a PR comment. To get help with editorial suggestions, comment `@claude` on the PR followed by your request.

## Writing standards

See `netwrix_style_guide.md` in the project root for the full style guide covering voice, tone, formatting, and terminology.

### Images

- **Location**: `static/img/product_docs/<product>/`
- **Format**: `.webp`
- **Paths**: Always absolute from project root

```markdown
![Description](/img/product_docs/productname/image.webp)
```

### Frontmatter

Every documentation page needs frontmatter:

```yaml
---
title: 'Page Title'
sidebar_label: 'Sidebar Label'
description: 'SEO description'
---
```

## Linting with Vale

Vale enforces 43 Netwrix-specific rules covering word choice, punctuation, formatting, and common writing issues. The pre-commit hook runs it on new pages and on the lines you changed, so fix findings before you commit. Preview them with:

```bash
vale docs/path/to/file.md
```

Run Vale on all changed files compared to dev:

```bash
git diff --name-only dev | grep '^docs/.*\.md$' | xargs vale
```

## File structure

- `docs/<product>/<version>/` — Versioned product documentation (e.g., `docs/accessanalyzer/12.0/`)
- `docs/<product>/` — Single-version (SaaS) products
- `docs/kb/` — Knowledge base articles (canonical source; never manually copy into versioned folders)
- `static/img/product_docs/<product>/` — Product images
- `sidebars/<product>/<version>.js` — Sidebar configs (auto-generated; rarely need manual editing)

Edits to one version don't propagate to others. Update each version that needs the change explicitly.

## Available commands

```bash
npm run start            # Dev server on port 4500
npm run start-chok       # Dev server with polling (for network drives)
npm run build            # Full production build
npm run clear            # Clear Docusaurus cache (fixes stale build issues)
npm run serve            # Serve production build
```

### Building a single product

You can build or run documentation for a single product using the `DOCS_PRODUCT` environment variable, which speeds up development:

**Windows (PowerShell):**
```powershell
$ENV:DOCS_PRODUCT="pingcastle"
npm run start
```

**Unix/Linux/macOS:**
```bash
export DOCS_PRODUCT="pingcastle"
npm run start
```

Available product IDs are in `src/config/products.js`.

Add `DOCS_PRODUCT_LATEST_ONLY=true` to also restrict the build to that product's latest version only (default `false` builds all versions).

In Claude Code, `/docs-build` builds one product or the whole site and summarizes broken links and errors. `/docs-preview` starts, stops, or checks a local dev server or production preview. Both ask which product and scope to use.

## Using Claude Code

If you have [Claude Code](https://claude.ai/code) installed, this repository includes skills and agents that can help with documentation work. These are entirely optional — you don't need Claude Code to contribute.

### Linting with Dale

Dale is an AI linter that catches context-dependent issues that regex-based Vale can't — passive voice, misplaced modifiers, idioms, wordiness, and other patterns. The pre-commit hook also runs Dale (a model applies the rules) on new pages and on the lines you changed.

Run Dale locally on any markdown file to preview context-dependent issues:

```
/dale docs/path/to/file.md
```

### Get interactive writing help

Ask Claude Code for help with your writing — brainstorming document structure, drafting a section, editing existing content, or understanding a style rule. Claude automatically uses the `doc-help` skill when you ask for writing assistance. You can also invoke it directly with `/doc-help`, followed by your request.

### Run autonomous documentation tasks

For well-defined drafting tasks that don't need back-and-forth, Claude automatically uses the `tech-writer` agent. It drafts new pages from a pull request, a GitHub issue, a Jira ticket or Azure DevOps item, specs, notes, or a detailed prompt, and it can structure a new docs directory following the section guide (`.claude/references/documentation-section-guide.md`). It doesn't edit existing pages; use `doc-help` for that. Before it finishes, it lints its own draft (Vale, Dale, and the AI-writing check) and fixes what is flagged.

Examples:
- "Look at PR 1040 in itdr-pingcastle-core and document it".
- "Look at Jira ticket PLAT-1234 and write the doc".
- "Draft the installation steps based on this outline: [outline]"
- "Create the docs directory for this new product from these specs: [specs]"

For tasks that need design decisions first — like planning a new guide from scratch — Claude uses doc-help to brainstorm the structure with you, then hands the drafting off to the tech-writer agent.

### Quick reference

| Task | Tool |
|---|---|
| Quick lint check on a file | `/dale docs/path/to/file.md` |
| Check your changes before committing | `npm run quality:score` |
| Plan structure for a new document | `doc-help` then `tech-writer` agent |
| Draft a new page from a PR, issue, ticket, or specs | `tech-writer` agent |
| Review or improve existing content | `doc-help` |
| Fix Vale errors in a file | `doc-help`, or fix by hand and run `npm run quality:score` |
| Edit a file for style and clarity | `doc-help` |
| Understand a style rule or convention | `doc-help` |

## Common Mistakes

- Don't manually copy KB content into versioned product folders — it's managed by the KB script.
- Don't skip `npm install`: it installs the pre-commit check, and nothing lints your docs on the PR. If you skipped it, run it now.
- Don't commit directly to `dev` or `main` — create a branch from `dev` first.
- Don't target `main` in PRs — always use `dev`.
- Don't use first person anywhere in documentation content.
- Don't omit the example from a procedure. Don't pad a concept with an example it doesn't need; if one would help and you can't confirm it, leave a `{/* TODO: add an example */}`.
