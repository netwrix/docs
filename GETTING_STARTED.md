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
