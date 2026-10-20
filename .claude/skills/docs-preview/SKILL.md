---
name: docs-preview
description: "Starts, stops, or checks a local preview of the Netwrix docs: a hot-reload dev server or a production build served locally. Use when the user wants to see, preview, or view their doc changes in a browser. Asks for scope and server type if none is given."
user-invocable: true
argument-hint: "[start|stop|status] [product|all] [--dev|--prod] [--latest-only] [--poll]"
allowed-tools: Bash(node scripts/claude/preview.mjs *), Bash(node scripts/claude/context.mjs), AskUserQuestion, Read
---

# Preview the docs

Environment:

!`node scripts/claude/context.mjs`

## Steps

1. For `stop` or `status`, run `node scripts/claude/preview.mjs stop|status` and report. Skip the rest.
2. If the context shows `STOP`, tell the user the exact fix and stop.
3. If `UNTRACKED_IMPORTS` lists files, warn the user those must be committed or CI will fail. Continue.
4. For `start`, fill in anything missing from `$ARGUMENTS` with AskUserQuestion:
   - **Server type:** Dev server (Recommended): port 4500, hot reload, fast start, may not surface every build error. Production server: runs the full build then serves it on port 8080; this is what ships, and it is slower.
   - **Scope:** One product (Recommended; default to the first `CHANGED_PRODUCTS` entry, else ask from `VALID_PRODUCTS`, then latest version only or all versions) or the entire site (warn: slow, about 16 GB of RAM).
5. Run:
   `node scripts/claude/preview.mjs start <product|all> --dev|--prod [--latest-only] [--poll]`
   Use `--poll` only on network drives. Set the Bash timeout to the maximum; a production start can outlast it, in which case tell the user to run `status` later.
6. If the port is in use, relay the PID the helper printed. Do not kill unrelated processes.

## Report

- The URL, or why the server is not ready, with the last log lines the helper printed.
- Remind the user to run `/docs-preview stop` when finished.
