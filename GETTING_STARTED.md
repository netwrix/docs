# Getting Started with Netwrix Documentation

This guide walks you through contributing to the [Netwrix documentation site](https://github.com/netwrix/docs)—from installing your first tool to opening your first pull request. It covers 27+ Netwrix security products, and no prior experience with Git, GitHub, or the command line is required.

> **Already comfortable with Git and GitHub?** Skip ahead to [CONTRIBUTING.md](CONTRIBUTING.md) for the streamlined workflow, style rules, and project conventions.

## Table of contents

1. [What Is Docs-as-Code?](#what-is-docs-as-code)
2. [Git, GitHub, and Why You Can't Break Anything](#git-github-and-why-you-cant-break-anything)
3. [Installing Your Tools](#installing-your-tools)
4. [Cloning the Repo and Starting the Dev Server](#cloning-the-repo-and-starting-the-dev-server)
5. [The Netwrix Workflow](#the-netwrix-workflow)
6. [Frontmatter, File Structure, and Images](#frontmatter-file-structure-and-images)
7. [Knowledge Base Articles](#knowledge-base-articles)
8. [Practice Exercise](#practice-exercise)
9. [Key Concepts](#key-concepts)
10. [Common Git Commands](#common-git-commands)
11. [Using GitHub Issues with Claude](#using-github-issues-with-claude)
12. [Getting Help](#getting-help)

---

## What Is Docs-as-Code?

Netwrix documentation follows a "docs-as-code" approach. Instead of editing pages in a web browser or a proprietary tool, you write plain text files in a format called Markdown, store them in a shared repository, and let a build tool ([Docusaurus](https://docusaurus.io/)) turn those files into the published website automatically.

Why does this matter to you?

- **Plain text** — No formatting fights, no proprietary file formats. You can open and edit documentation in any text editor.
- **Version history** — Every change is tracked. Nothing is ever lost. You can always see who changed what, when, and why.
- **Review process** — Changes go through a review before they reach the live site, so mistakes get caught early.
- **Automation** — Style checks, editorial reviews, and deployment all happen automatically when you submit your changes.

## Git, GitHub, and Why You Can't Break Anything

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

## Installing Your Tools

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

## Cloning the Repo and Starting the Dev Server

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

### 5. Install dependencies

```bash
npm install
```

This downloads the packages that the documentation site needs to build and run. The first time takes a few minutes—you'll see a progress indicator while it works. You only need to do this once (or again if dependencies change).

### 6. Start the dev server

```bash
npm run start
```

This builds the site and starts a local web server on your computer. The first build takes a couple of minutes because the project is large (27+ products worth of documentation). The npm scripts automatically handle the memory the build needs, so you don't need to configure anything extra.

When you see a message that says the site is ready, move on to the next step.

### 7. Open the site in your browser

Open your web browser and go to:

```
http://localhost:4500
```

You should see the full Netwrix documentation site—running entirely on your own computer. Any changes you make to the documentation files will show up here automatically, which makes it easy to preview your work as you go.

To stop the dev server when you're done, go back to your terminal and press Ctrl+C.
