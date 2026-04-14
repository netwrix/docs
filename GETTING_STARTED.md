# Getting Started with Netwrix Documentation

This guide walks you through contributing to the [Netwrix documentation site](https://github.com/netwrix/docs)—from installing your first tool to opening your first pull request. It covers 27+ Netwrix security products, and no prior experience with Git, GitHub, or the command line is required.

> **Already comfortable with Git and GitHub?** Skip ahead to [CONTRIBUTING.md](CONTRIBUTING.md) for the streamlined workflow, style rules, and project conventions.

## Table of contents

1. [What is docs-as-code?](#what-is-docs-as-code)
2. [Git, GitHub, and why you can't break anything](#git-github-and-why-you-cant-break-anything)
3. [Key terms](#key-terms)
4. [Installing your tools](#installing-your-tools)
5. [Setting up GitHub authentication](#setting-up-github-authentication)
6. [Cloning the repo and starting the dev server](#cloning-the-repo-and-starting-the-dev-server)
7. [The Netwrix workflow](#the-netwrix-workflow)
8. [Frontmatter, file structure, and images](#frontmatter-file-structure-and-images)
9. [Knowledge Base articles](#knowledge-base-articles)
10. [Using GitHub Issues with Claude](#using-github-issues-with-claude)
11. [Common commands](#common-commands)
12. [Next steps](#next-steps)
13. [Getting help](#getting-help)

---

## What is docs-as-code?

Netwrix documentation follows a "docs-as-code" approach. Instead of editing pages in a web browser or a proprietary tool, you write plain text files in a format called Markdown, store them in a shared repository, and let a build tool ([Docusaurus](https://docusaurus.io/)) turn those files into the published website automatically.

Why does this matter to you?

- **Plain text** — No formatting fights, no proprietary file formats. You can open and edit documentation in any text editor.
- **Version history** — Every change is tracked. Nothing is ever lost. You can always see who changed what, when, and why.
- **Review process** — Changes go through a review before they reach the live site, so mistakes get caught early.
- **Automation** — Style checks, editorial reviews, and deployment all happen automatically when you submit your changes.

## Git, GitHub, and why you can't break anything

Two tools make docs-as-code work:

- **Git** is software that runs on your computer and tracks changes to files. Think of it as an unlimited undo history for an entire project.
- **GitHub** is the website ([github.com/netwrix/docs](https://github.com/netwrix/docs)) where the repository lives and where reviews happen. It's the shared home for all Netwrix documentation.

### You can't break the live site

This is the most common worry new contributors have, and the answer is: the workflow won't let you. Here's why:

1. **You always work on your own copy.** When you create a branch, you get a separate workspace. Nothing you do there touches the live site or anyone else's work.
2. **Your changes go through a pull request.** A reviewer looks at your work before it merges. There's no way to accidentally push something live.
3. **Even `dev` isn't the live site.** A daily automated process checks the build and only publishes to `main` (the live branch) if everything passes.
4. **Git keeps the full history.** Any change can be undone. Every version of every file is preserved forever.

The worst thing that can happen is a reviewer asks you to adjust something—and that's just normal collaboration. So go ahead: experiment, make mistakes, and learn as you go. You can't break anything.

## Key terms

- **Branch** — Your own copy of the code where you make changes without affecting anyone else.
- **Clone** — Downloading a copy of the repository to your computer.
- **Commit** — Saving a snapshot of your changes with a description.
- **Dev server** — A local version of the website running on your computer for testing.
- **Frontmatter** — Metadata at the top of a markdown file (title, description, etc.) in YAML format.
- **localhost** — Your own computer acting as a web server (e.g., `localhost:4500`).
- **Markdown** — A simple formatting language for writing documentation (headings, bold, links, lists, etc.).
- **Merge** — Incorporating your changes into the main codebase after review.
- **Node.js / npm** — Tools that build the documentation site from markdown files.
- **Pull** — Downloading the latest changes from GitHub to your computer.
- **Pull request (PR)** — A request for someone to review and merge your changes.
- **Push** — Uploading your committed changes to GitHub.
- **Repository (repo)** — The project folder containing all documentation files and configuration.

## Installing your tools

You need three tools to work with Netwrix documentation: Git, Node.js, and a text editor. This section walks you through installing each one on Windows or macOS.

### Git

Git tracks every change you make to documentation files.

**Windows:**

1. Download the installer from [git-scm.com](https://git-scm.com).
2. Run the installer and accept the defaults.

**macOS:**

1. Open Terminal (search for "Terminal" in Spotlight).
2. Run `xcode-select --install` and follow the prompts.

**Verify the installation:**

Open your terminal and run:

```bash
git --version
```

You should see a version number like `git version 2.44.0`. The exact number doesn't matter—any recent version works.

### Node.js (v22 or later)

Node.js powers the Docusaurus build system that turns your Markdown files into the published documentation site. You need version 22 or later.

**Windows and macOS:**

1. Go to [nodejs.org](https://nodejs.org) and download the **LTS** installer.
2. Run the installer and accept the defaults.

**Verify the installation:**

Open your terminal and run both commands:

```bash
node --version
```

You should see `v22.x.x` or later.

```bash
npm --version
```

You should see a version number. `npm` (Node Package Manager) comes bundled with Node.js—it installs the project's dependencies.

### Visual Studio Code (recommended)

VS Code is a free text editor with a built-in terminal and good Markdown preview, which makes it ideal for documentation work. Any text editor works, but this guide assumes VS Code.

**Windows and macOS:**

1. Download VS Code from [code.visualstudio.com](https://code.visualstudio.com).
2. Run the installer.

That's it—no verification command needed. Just open VS Code to confirm it launches.

## Setting up GitHub authentication

GitHub requires authentication before you can push changes or clone private repositories. The simplest method is a Personal Access Token (PAT)—a generated password that grants Git access to your GitHub account. You only need to set this up once.

### Create a Personal Access Token

1. Sign in to [github.com](https://github.com).
2. Click your profile picture in the top-right corner and select **Settings**.
3. Scroll down in the left sidebar and click **Developer settings**.
4. Click **Personal access tokens**, then **Tokens (classic)**.
5. Click **Generate new token**, then **Generate new token (classic)**.
6. Give the token a descriptive name (for example, "Netwrix docs").
7. Under **Select scopes**, check the **repo** box. This grants access to repositories.
8. Click **Generate token**.
9. Copy the token immediately—GitHub only shows it once. Store it somewhere safe (a password manager works well).

### Use the token with Git

When Git prompts you for a password during `git push` or `git clone`, enter your PAT—not your GitHub account password. Your username is your GitHub username as usual.

### Cache your credentials

To avoid re-entering your token every time, configure Git to remember it:

**Windows (Git for Windows includes Git Credential Manager):**

```bash
git config --global credential.helper manager
```

**macOS:**

```bash
git config --global credential.helper osxkeychain
```

After running one of these commands, Git stores your credentials securely the next time you enter them. From that point on, authentication happens automatically.

## Cloning the repo and starting the dev server

Everything so far has been setup. Now you'll use the **command line**—a text-based way to give your computer instructions by typing commands instead of clicking buttons. On Windows, the command line app you'll use is called **PowerShell**. On macOS, it's called **Terminal**. Both work the same way for the commands in this guide.

### 1. Open your terminal

**Windows:** Click the Start menu and search for **PowerShell**. Open it.

**macOS:** Open **Terminal** from Applications > Utilities, or press Cmd+Space and search for "Terminal."

You'll see a window with a blinking cursor. This is where you type commands.

### 2. Navigate to where you want the project

Before you download the project, you need to tell your computer where to put it. The `cd` command (short for "change directory") moves you into a folder. For example, to move into your Documents folder, type:

```bash
cd Documents
```

This is where the project folder will be created in the next step. You can choose any location you like—Documents is just a common choice.

### 3. Clone the repository

Now download the project by running:

```bash
git clone https://github.com/netwrix/docs.git
```

This tells Git to download the entire documentation project from GitHub to your computer. When it finishes, you'll have a new folder called `docs` containing all of the documentation files.

### 4. Move into the project folder

```bash
cd docs
```

You're now inside the project. All the remaining commands should be run from here.

### 5. Open the project in VS Code

```bash
code .
```

This opens the current folder in VS Code, giving you a file explorer on the left and an integrated terminal at the bottom. If the `code` command doesn't work, open VS Code manually and go to **File** > **Open Folder**, then select the `docs` folder.

### 6. Install dependencies

```bash
npm install
```

This downloads the packages that the documentation site needs to build and run. The first time takes a few minutes—you'll see a progress indicator while it works. You only need to do this once (or again if dependencies change).

### 7. Start the dev server

```bash
npm run start
```

This builds the site and starts a local web server on your computer. The first build takes a couple of minutes because the project is large (27+ products worth of documentation). The npm scripts automatically handle the memory the build needs, so you don't need to configure anything extra.

When you see a message that says the site is ready, move on to the next step.

### 8. Open the site in your browser

Open your web browser and go to:

```
http://localhost:4500
```

You should see the full Netwrix documentation site—running entirely on your own computer. Any changes you make to the documentation files show up here automatically, which makes it easy to preview your work as you go.

To stop the dev server when you're done, go back to your terminal and press Ctrl+C.

## The Netwrix workflow

Every documentation change follows the same cycle: pull the latest code, create a branch, make your edits, and open a pull request. Here's each step.

### 1. Pull the latest changes

```bash
git checkout dev
git pull
```

You always want to start from the most up-to-date version of the documentation. The `dev` branch is where all new work goes—pulling it first makes sure you're building on top of the latest changes, not an outdated version.

### 2. Create a branch

```bash
git checkout -b <your-branch-name>
```

This creates a new branch and switches to it. A branch is your own workspace where you can make changes without affecting anyone else's work.

Use a descriptive name that says what you're changing. Start with a prefix like `update/` or `fix/`, followed by a short summary:

- `update/accessanalyzer-install-steps` — updating an existing procedure
- `fix/typo-auditor-config` — fixing a small error

### 3. Edit your files

Open the project in VS Code (or your preferred editor). Navigate to the file you want to change and edit it. Documentation files live in `docs/<product>/` for single-version products or `docs/<product>/<version>/` for versioned products. A later section covers the file structure in more detail.

### 4. Test locally

Check your changes in your browser at `http://localhost:4500`. The dev server auto-refreshes when you save a file, so you can see your updates right away. If the server isn't running, start it with:

```bash
npm run start
```

### 5. Stage and commit your changes

First, check which files you've changed:

```bash
git status
```

This shows a list of files that have been modified, added, or deleted. Modified files appear under "Changes not staged for commit," and new files appear under "Untracked files." This is a good way to confirm you're committing exactly what you intend.

Next, stage the files you want to include. Staging tells Git which files to include in the next snapshot:

```bash
git add <filename>
```

Replace `<filename>` with the actual file path (for example, `git add docs/accessanalyzer/12.0/install.md`). To stage all changed files at once, run `git add .` instead.

Then commit—saving that snapshot with a short message describing what you changed:

```bash
git commit -m "Brief description of what you changed"
```

For example: `git commit -m "Update install steps for Access Analyzer 12.0"`.

### 6. Push your branch

```bash
git push -u origin <your-branch-name>
```

This uploads your branch to GitHub so others can see it. Replace `<your-branch-name>` with the name you chose in step 2.

### 7. Create a pull request

Go to [github.com/netwrix/docs](https://github.com/netwrix/docs). GitHub shows a prompt to create a pull request for your recently pushed branch—click it. Set the target branch to **dev**. Write a short description of what you changed and why, then click **Create pull request**.

If you don't see the prompt, click the **Pull requests** tab, then **New pull request**, select your branch, and set the base branch to **dev**.

### What happens next

After you open a pull request, automated checks run on your changes—style checks, an editorial review, and a build verification. A team member then reviews your work. Once approved and merged into `dev`, your changes go live the next morning through the automated daily sync from `dev` to `main`.

## Frontmatter, file structure, and images

Now that you know the workflow, here's a quick tour of how the documentation files themselves are organized.

### Frontmatter

Every documentation page starts with a YAML block at the top of the file called "frontmatter." It looks like this:

```yaml
---
title: "Page Title"
description: "Brief description for search engines"
sidebar_position: 1
---
```

Here's what each field does:

- `title` — Sets the page title and the browser tab text.
- `description` — A short summary used by search engines. Keep it under a sentence or two.
- `sidebar_position` — Controls where the page appears in the sidebar navigation. Lower numbers appear first.

You'll see this block at the top of every `.md` file in the project. When you create a new page, add frontmatter before any other content.

### File structure

Documentation files live in `docs/` and follow one of two patterns depending on the product:

- **Multi-version products** have a version folder: `docs/<product>/<version>/` (e.g., `docs/accessanalyzer/12.0/`)
- **Single-version (SaaS) products** have no version folder: `docs/<product>/` (e.g., `docs/1secure/`)

One important thing to know: edits to one version don't carry over to other versions. If a fix applies to multiple versions of a product, you need to make the same edit in each version folder separately.

### Images

Images are stored in `static/images/<product>/` as `.webp` files, organized by version and section. For example:

```
static/images/accessanalyzer/12.0/install/setup-wizard.webp
```

When you reference an image in a markdown file, use an absolute path starting from `/images/`—not `/static/images/`. Docusaurus serves the `static/` folder at the site root, so you drop the `static` prefix:

```markdown
![Description of the image](/images/accessanalyzer/12.0/install/setup-wizard.webp)
```

Always include alt text (the part in square brackets) that describes what the image shows. This helps with accessibility and gives readers context if the image doesn't load.

## Knowledge Base articles

Knowledge Base (KB) articles live in `docs/kb/<product>/`—that's the only place you should edit them. A build script automatically copies KB content into versioned product folders at build time, so you never need to manually create or copy KB files into those folders. If you do, the script overwrites them on the next build.

KB articles store their images as PNG files in `0-images/` subdirectories alongside the article markdown (e.g., `docs/kb/accessanalyzer/0-images/`). This is different from regular product docs, which use `.webp` images in `static/images/`.

## Using GitHub Issues with Claude

If you spot a documentation problem but don't want to fix it yourself, you can file a GitHub issue and let automation handle it:

1. Go to the repo's [Issues](https://github.com/netwrix/docs/issues) tab.
2. Click **New issue**.
3. Select the **Fix content** template.
4. Describe the problem and paste the URL of the page where you found it.
5. Submit the issue.

The template automatically applies the right labels. Once submitted, Claude, an AI assistant integrated into this repository, picks up the issue, identifies the affected files, applies the fix, and opens a pull request.

## Common commands

These are the npm commands you'll use most often. Run them from the project's root folder (`docs/`).

| Command | What it does |
|---------|-------------|
| `npm install` | Install project dependencies (first-time setup, or after dependencies change) |
| `npm run start` | Start the dev server on localhost:4500 |
| `npm run start-chok` | Start the dev server with polling (for network drives) |
| `npm run build` | Run a full production build |
| `npm run serve` | Serve the production build on port 8080 |
| `npm run clear` | Clear the Docusaurus cache (fixes stale build issues) |
| `npm run kb:clean` | Remove copied KB files from versioned folders |
| `npm run kb:dry` | Preview what the KB copy script would do without running it |

## Next steps

Ready to try the workflow? Head to [Practice Exercises](PRACTICE_EXERCISES.md) for a hands-on walkthrough that takes you from your first edit to your first pull request.

## Getting help

- **[CONTRIBUTING.md](CONTRIBUTING.md)** — The full workflow and writing standards reference.
- **[netwrix_style_guide.md](netwrix_style_guide.md)** — Detailed writing standards for Netwrix documentation.
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** — Solutions to common setup and Git issues.
- **[PRACTICE_EXERCISES.md](PRACTICE_EXERCISES.md)** — Hands-on exercises to practice the workflow.
- **Ask the docs team** — If you're stuck, reach out. No question is too basic.
- **Don't worry about getting everything perfect.** Automated checks catch most style issues when you open a pull request, so focus on the content and let the tooling handle the rest.
