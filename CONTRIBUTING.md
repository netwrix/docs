# Contributing to Netwrix Documentation

Thank you for contributing to Netwrix product documentation. This guide covers everything you need to get started.

## Prerequisites

- **Node.js 22+**
- **npm**
- **Git**
- **Vale** (style linter — required for pushing documentation changes)

### Install Vale

[Vale](https://vale.sh/) is a command-line linter for prose. It checks your writing against a set of style rules — like a spell checker, but for grammar, word choice, and tone. Vale is required to push changes to documentation files. The pre-push hook runs Vale automatically and blocks pushes that have linting errors.

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

# Install dependencies (also sets up the pre-push hook via Husky)
npm install

# Start development server
npm run start
```

The dev server runs on port 4500 with hot reload — changes you make to documentation files appear immediately in the browser.

## Workflow

1. Create a branch from `dev` (never commit directly to `dev` or `main`).
2. Make your changes to documentation files in `docs/`.
3. Run Vale on your changed files to catch linting errors.
4. Test the build with `npm run build`.
5. Push your branch (the pre-push hook runs Vale automatically and warns about any errors).
6. Create a pull request (PR) targeting `dev`.

After you open a PR, an automated review runs Vale linting, Dale linting (AI-powered), and an editorial review, then posts the results as PR comments. If you want help applying the suggested fixes, comment `@claude` on the PR followed by your request and Claude will apply fixes and push a commit. If Claude needs clarification, it will ask in the PR comments.

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

Vale enforces 30 Netwrix-specific rules covering word choice, punctuation, formatting, and common writing issues. The pre-push hook runs Vale automatically and warns about errors in changed `docs/*.md` files.

Run Vale on a file before pushing to catch issues early:

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

## Using Claude Code

If you have [Claude Code](https://claude.ai/code) installed, this repository includes skills and agents that can help with documentation work. These are entirely optional — you don't need Claude Code to contribute.

### Linting with Dale

Dale is an AI linter that runs automatically during PR review. It catches context-dependent issues that regex-based Vale can't — passive voice, misplaced modifiers, idioms, wordiness, and other patterns. Dale results are posted as PR comments alongside the editorial review.

Run Dale locally on any markdown file to catch context-dependent writing issues before pushing:

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
- Don't ignore Vale warnings before pushing — fix errors to keep documentation clean.
- Don't commit directly to `dev` or `main` — create a branch from `dev` first.
- Don't target `main` in PRs — always use `dev`.
- Don't use first person anywhere in documentation content.
- Don't omit examples — every concept introduced needs one.
