# Getting Started Guide — Design Spec

**Date:** 2026-04-10
**Output:** Single file at repo root: `GETTING_STARTED.md`
**Replaces:** `getting-started-guide-cli.md` and `getting-started-guide-essentials.md` (both untracked)
**Audience:** New Netwrix documentation contributors with no prior experience with Git, GitHub, CLI tools, or docs-as-code workflows
**Tone:** Friendly, encouraging, conversational — uses "you," reassures frequently, explains *why* before *how*
**Platforms:** Windows and macOS only (no Linux)
**Estimated length:** ~2,500–3,500 words

---

## Structure

The guide follows a progressive narrative: concepts first, then installation, then hands-on workflow. Each section builds on the previous one. A table of contents at the top lets experienced readers skip ahead.

The opening paragraph welcomes new contributors and links to `CONTRIBUTING.md` for anyone who already knows Git and GitHub and just needs the workflow reference.

---

## Sections

### 1. Welcome and Introduction

- Brief welcome: this guide walks you through everything you need to contribute to Netwrix documentation
- Introduces the Netwrix documentation site: 27+ products, built from markdown files in a GitHub repository
- Links to `CONTRIBUTING.md` for experienced users who just need the workflow reference
- Sets expectations: by the end of this guide, you'll have the tools installed, understand the workflow, and be ready to make your first contribution

### 2. What Is Docs-as-Code?

Concise explanation — a few sentences, not an essay. Key points:

- Documentation is written as plain text (Markdown) files stored in a code repository
- A build tool (Docusaurus) turns those files into the website automatically
- Benefits for the audience:
  - **Plain text** — no formatting fights, no proprietary file formats
  - **Version history** — every change is tracked, nothing is ever lost
  - **Review process** — changes are reviewed before going live
  - **Automation** — style checks, editorial reviews, and deployment happen automatically

### 3. Git, GitHub, and Why You Can't Break Anything

Brief definitions of Git (tracks changes to files) and GitHub (website where the repository lives and reviews happen).

**Safety reassurance — the core message of this section:**

1. You always work on your own copy (branch) — the live site is untouched
2. Your changes go through a pull request — someone reviews before merging
3. Even `dev` isn't the live site — a daily automated process checks the build before publishing to `main`
4. Git keeps the full history — any change can be undone

Tone: "Don't be afraid to experiment."

### 4. Installing Your Tools

Three tools, with Windows and macOS instructions side by side. Each ends with a verification command.

**Git:**
- Windows: Download from git-scm.com, run installer with defaults
- macOS: `xcode-select --install`
- Verify: `git --version`

**Node.js (v22 or later):**
- Both platforms: Download LTS from nodejs.org, run installer
- Verify: `node --version` and `npm --version`

**VS Code (recommended, not required):**
- Both platforms: Download from code.visualstudio.com
- Mention: optional but recommended for built-in terminal and markdown preview
- Any text editor works

### 5. Cloning the Repo and Starting the Dev Server

Starts with a brief explanation of what a CLI (command-line interface) is. Recommends PowerShell for Windows, Terminal for macOS.

Step-by-step:

1. **Open your terminal** — instructions for finding PowerShell (Windows) and Terminal (macOS)
2. **Navigate to where you want the project** — explain `cd` with examples for both platforms
3. **Clone the repository** — `git clone <repo-url>` with the actual Netwrix docs repo URL
4. **Navigate into the folder** — `cd docs`
5. **Install dependencies** — `npm install` (explain: downloads what the site needs to build)
6. **Start the dev server** — `npm run start` (explain: builds the site locally)
7. **Open the browser** — go to `http://localhost:4500` to see the site

Include a callout: first build takes a while and the project needs 16GB of memory allocated (handled automatically by the npm scripts).

### 6. The Netwrix Workflow

Brief intro: every change follows the same cycle. Then walk through each step:

1. **Pull the latest changes** — `git checkout dev` then `git pull` — start from the most current version
2. **Create a branch** — `git checkout -b your-branch-name` — naming conventions: `update/accessanalyzer-install-steps`, `fix/typo-auditor-config`
3. **Edit files** — open the project in VS Code, find and edit the markdown file
4. **Test locally** — check localhost:4500, confirm the page renders correctly
5. **Stage and commit** — `git add <file>` then `git commit -m "description of change"` — explain staging and committing as separate concepts
6. **Push** — `git push -u origin your-branch-name`
7. **Create a pull request** — go to GitHub, click the prompt, set target to `dev`, write a brief description

End with: after you open the PR, automated checks run (style checks, editorial review, build verification). A team member reviews and merges. Changes go live the next morning via the automated sync.

### 7. Frontmatter, File Structure, and Images

**Frontmatter:** Show the required fields with a short example:

```yaml
---
title: "Page Title"
description: "Brief description for search engines"
sidebar_position: 1
---
```

Explain: these fields control how the page appears in navigation and search results.

**File structure:** Two patterns:

- Multi-version products: `docs/<product>/<version>/` (e.g., `docs/accessanalyzer/12.0/`)
- Single-version (SaaS) products: `docs/<product>/` (e.g., `docs/1secure/`)

Note: edits to one version don't carry over to others. If a change applies to multiple versions, you need to edit each one.

**Images:**

- Stored in `static/images/<product>/` as `.webp` files
- Organized by version and section (e.g., `static/images/accessanalyzer/12.0/install/`)
- Referenced with absolute paths in markdown: `![Alt text](/images/product/version/image.webp)`

### 8. Knowledge Base Articles

Short and direct:

- KB articles live in `docs/kb/<product>/` — this is the only place you should edit them
- A build script automatically copies KB content into the correct product version folders
- Never manually copy or create KB files in versioned product directories — they'll be overwritten at build time
- Images for KB articles are stored in `0-images/` subdirectories alongside the markdown files

### 9. Practice Exercise

A guided walkthrough of the full workflow using a real (minor) change:

1. Pull latest from dev
2. Create a branch (e.g., `practice/your-name-first-edit`)
3. Pick any doc page you're familiar with
4. Make a small improvement (fix a typo, clarify a sentence, improve a description)
5. Check it at localhost:4500
6. Commit, push, open a PR targeting `dev`

Frame it as low-stakes: "This is just practice. If you're not sure what to change, try updating a description or fixing a small wording issue."

### 10. Key Concepts Glossary

Short definitions, alphabetical or grouped logically:

- **Branch** — your own copy of the code where you make changes without affecting anyone else
- **Clone** — downloading a copy of the repository to your computer
- **Commit** — saving a snapshot of your changes with a description
- **Dev server** — a local version of the website running on your computer for testing
- **Frontmatter** — metadata at the top of a markdown file (title, description, etc.)
- **localhost** — your own computer acting as a web server (e.g., `localhost:4500`)
- **Markdown** — a simple formatting language for writing documentation (headings, bold, links, etc.)
- **Merge** — incorporating your changes into the main codebase after review
- **Node.js / npm** — tools that build the documentation site from markdown files
- **Pull** — downloading the latest changes from GitHub to your computer
- **Pull Request (PR)** — a request for someone to review and merge your changes
- **Push** — uploading your committed changes to GitHub
- **Repository (repo)** — the project folder containing all documentation files and configuration

### 11. Common Git Commands

Quick-reference table:

| Command | What it does |
|---------|-------------|
| `git status` | See what files you've changed |
| `git checkout dev` | Switch to the dev branch |
| `git pull` | Get the latest changes from GitHub |
| `git checkout -b branch-name` | Create a new branch |
| `git add <file>` | Stage a specific file for commit |
| `git add .` | Stage all changed files |
| `git commit -m "message"` | Commit staged changes with a description |
| `git commit -am "message"` | Stage and commit tracked files in one step (won't add new files) |
| `git push -u origin branch-name` | Push your branch to GitHub |
| `git log --oneline` | See recent commit history |
| `git diff` | See what you've changed since last commit |

### 12. Using GitHub Issues with Claude

Short section:

- If you spot a problem but don't want to fix it yourself, create a GitHub issue
- Add the `documentation` and `fix` labels, describe what's wrong and where
- Claude will automatically create a PR with the fix
- You can also comment `@claude` on any open PR to request changes

### 13. Getting Help

- Link to `CONTRIBUTING.md` for the full workflow and writing standards reference
- Link to `netwrix_style_guide.md` for detailed writing standards
- Note that automated Vale and editorial checks catch most style issues — don't worry about perfection on the first try
- Contact information / team channel for questions

---

## Design Decisions

1. **Single file, not multiple** — beginners shouldn't have to figure out which guide to read
2. **Concepts before tools** — understanding *why* reduces anxiety before the *how*
3. **Windows and macOS only** — no Linux coverage per audience analysis
4. **`git add` and `git commit` as separate steps in the walkthrough** — clearer for beginners to understand staging vs. committing; `git commit -am` included only in the reference table
5. **Links to CONTRIBUTING.md rather than duplicating** — the guide is for onboarding; CONTRIBUTING.md is the ongoing reference
6. **Practice exercise uses a real change** — more motivating than a synthetic example, and gets them a real PR under their belt
7. **KB section is deliberately short** — new users mainly need to know "don't manually copy KB files"; the build script handles the rest
8. **Claude/GitHub Issues section kept simple** — just the `documentation` + `fix` label workflow and `@claude` on PRs; full automation details are for advanced users
9. **Glossary and command reference at the end** — serves as appendix, doesn't interrupt narrative flow
10. **Replaces both existing untracked guides** — consolidates into one authoritative document

---

## Out of Scope

- Docusaurus configuration or plugin development
- Adding new products or versions (covered in README.md)
- Vale rule writing or Dale usage
- CI/CD workflow internals
- Advanced Git operations (rebasing, cherry-picking, resolving conflicts)
- Linux installation instructions
