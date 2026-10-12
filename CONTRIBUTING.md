# Contributing to Netwrix Documentation

Thank you for contributing to Netwrix product documentation. This guide covers everything you need to get started.

## Prerequisites

- **Node.js 22+**
- **npm**
- **Git**
- **mise** (installs Vale and the git hooks that run it before you push)

### Install mise

[mise](https://mise.jdx.dev/) installs the tools this repository pins, including [Vale](https://vale.sh/), a command-line linter for prose, and [hk](https://hk.jdx.dev/), which runs Vale as a git hook.

**macOS:**
```bash
brew install mise
```

**Windows (PowerShell):**
```powershell
winget install jdx.mise
```

On Windows, the hooks also need [Git for Windows](https://gitforwindows.org/), which provides the `bash` the anchor check uses.

**Linux:** see [Installing mise](https://mise.jdx.dev/installing-mise.html).

## Getting started

```bash
# Clone the repository
git clone https://github.com/netwrix/docs.git
cd docs

# Install dependencies and the git hooks
npm install
mise install   # answer yes when mise asks to trust .config/mise.toml

# Start development server
npm run start
```

The dev server runs on port 4500 with hot reload — changes you make to documentation files appear immediately in the browser.

## Workflow

1. Create a branch from `dev` (never commit directly to `dev` or `main`).
2. Make your changes to documentation files in `docs/`.
3. Commit your changes. The pre-commit hook fixes mechanical Vale issues in the files you commit and stages the fixes.
4. Test the build with `npm run build`.
5. Push your branch. The pre-push hook blocks the push while any Vale warning remains on a line you changed.
6. Create a pull request (PR) targeting `dev`.

After you open a PR, Vale and Dale issues are auto-fixed and a summary is posted. An editorial review also runs and posts results as a PR comment. To get help with editorial suggestions, comment `@claude` on the PR followed by your request.

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

Vale enforces the Netwrix style rules covering word choice, punctuation, formatting, and common writing issues. Git hooks run it on the `docs/` markdown files you change (KB articles excluded):

- **On commit:** mechanical issues such as contractions, "click on", and "check box" are fixed and staged automatically.
- **On push:** a Vale warning on any line your branch added or changed blocks the push. The output lists each issue with its file and line. Older warnings elsewhere in the file are counted but don't block.

Locally, the hooks also check three Dale rules that a pattern can catch: exclamatory sentences, positional references such as "below", and words that minimize difficulty such as "simply". The full Dale review still runs on the PR.

To run the same checks by hand:

```bash
mise x -- hk check --pr   # check the files changed on your branch
mise x -- hk fix --pr     # apply the mechanical fixes to them
```

To check every line of one file:

```bash
mise x -- node scripts/vale-local.mjs --check docs/path/to/file.md
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

Dale is an AI linter that catches context-dependent issues that regex-based Vale can't — passive voice, misplaced modifiers, idioms, wordiness, and other patterns. Dale issues are auto-fixed on PRs alongside Vale.

Run Dale locally on any markdown file to preview context-dependent issues:

```
/dale docs/path/to/file.md
```

### Get interactive writing help

Ask Claude Code for help with your writing — brainstorming document structure, drafting a section, editing existing content, or understanding a style rule. Claude automatically uses the `doc-help` skill when you ask for writing assistance. You can also invoke it directly with `/doc-help`, followed by your request.

### Run autonomous documentation tasks

For well-defined tasks where the work is clear and doesn't need back-and-forth, Claude automatically uses the `tech-writer` agent to handle the work end-to-end.

Examples:
- "Fix all the Vale errors in `docs/accessanalyzer/12.0/install.md`".
- "Edit this procedure for clarity and Netwrix style".
- "Draft the installation steps based on this outline: [outline]"

For tasks that need design decisions first — like writing a new guide from scratch — Claude uses doc-help to brainstorm the structure with you, then hands the drafting off to the tech-writer agent.

### Quick reference

| Task | Tool |
|---|---|
| Quick lint check on a file | `/dale docs/path/to/file.md` |
| Plan structure for a new document | `doc-help` then `tech-writer` agent |
| Review or improve existing content | `doc-help` |
| Fix Vale errors across a file | `tech-writer` agent |
| Edit a file for style and clarity | `tech-writer` agent |
| Understand a style rule or convention | `doc-help` |

## Common Mistakes

- Don't manually copy KB content into versioned product folders — it's managed by the KB script.
- If `git push` reports that Vale or the hooks aren't installed, run `mise install` in the repository root.
- Don't commit directly to `dev` or `main` — create a branch from `dev` first.
- Don't target `main` in PRs — always use `dev`.
- Don't use first person anywhere in documentation content.
- Don't omit examples — every concept introduced needs one.
