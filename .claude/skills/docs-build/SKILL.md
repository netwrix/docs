---
name: docs-build
description: "Builds the Netwrix docs site locally with Docusaurus: one product or the entire site. Use when the user asks to build the docs, check the build, or find broken links or MDX errors before opening a PR. Asks for scope if none is given."
user-invocable: true
argument-hint: "[product|all] [--latest-only] [--clean]"
allowed-tools: Bash(node scripts/claude/build.mjs *), Bash(node scripts/claude/context.mjs), AskUserQuestion, Read
---

# Build the docs

Environment:

!`node scripts/claude/context.mjs`

## Steps

1. If the context shows `STOP`, tell the user the exact fix and stop.
2. If `UNTRACKED_IMPORTS` lists files, warn the user those must be committed or CI will fail. Continue.
3. Work out the scope from `$ARGUMENTS`. If no product or `all` was given, ask with AskUserQuestion:
   - **One product (Recommended):** default to the first entry in `CHANGED_PRODUCTS` when there is one; otherwise ask which product from `VALID_PRODUCTS`. Then ask: latest version only (fastest) or all versions.
   - **Entire site:** warn that it is slow and needs about 16 GB of RAM.
4. Run:
   `node scripts/claude/build.mjs <product|all> [--latest-only] [--clean]`
   Add `--clean` only if the user asked for it or the previous build reported a stale cache. A full build can take many minutes; set the Bash timeout to the maximum.
5. Do not read the full log. The helper prints a summary; use that.

## Report

- Result and duration.
- Each broken link, anchor or MDX error with its page and target, so the user can fix it.
- For an out-of-memory or stale-cache failure, the fix the helper printed.
- The log path, in case the user wants more detail.
- If the build passed, mention `/docs-preview` to look at the result.
