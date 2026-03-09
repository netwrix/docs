# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Netwrix product documentation site — 27+ security products, built with Docusaurus v3.8.1. Hosted on Azure, deployed from `main`. Writing standards and doc-specific guidance are in `docs/CLAUDE.md` (loaded automatically when working in `docs/`).

## Commands

```bash
# Development (requires Node >=22)
npm install              # Install dependencies
npm run start            # Dev server on port 4500 (auto-copies KB first)
npm run start-chok       # Dev server with polling (for network drives)
npm run build            # Production build (auto-copies KB first)
npm run serve            # Serve production build on port 8080
npm run clear            # Clear Docusaurus cache (fixes stale build issues)

# Linting
vale <file>              # Run Vale style checker on a markdown file
/dale <file>             # Run Dale linter (Claude skill) on a markdown file

# KB management
npm run kb:clean         # Remove copied KB files from versioned folders
npm run kb:dry           # Dry run of KB copy script
```

The build requires 16GB heap (`NODE_OPTIONS=--max-old-space-size=16384`, set automatically by npm scripts). Broken links, markdown links, and anchors all throw build errors (`onBrokenLinks: 'throw'`).

## Architecture

### Central configuration

`src/config/products.js` is the single source of truth. It defines every product's ID, name, versions, categories, and paths. Docusaurus plugins, routes, navbar dropdowns, and sidebars are all auto-generated from this file. To add a product or version, edit this file — don't manually create plugin entries in `docusaurus.config.js`.

### Versioning

- Multi-version products: `docs/<product>/<version>/` (e.g., `docs/accessanalyzer/12.0/`)
- Single-version (SaaS) products: `docs/<product>/` with `version: "current"`
- URLs convert dots to underscores: `12.0` becomes `/docs/accessanalyzer/12_0/`
- Sidebars: `sidebars/<product>/<version>.js` — auto-generated, rarely need manual editing
- Edits to one version do not propagate to others

### Knowledge base

`docs/kb/` is the canonical source for KB articles. The `scripts/copy-kb-to-versions.mjs` script copies KB content into versioned product folders at build time (runs as `prestart`/`prebuild`). Never manually copy KB files — they're gitignored in versioned folders. Use `kb_allowlist.json` to control which products get KB content.

### Static assets

Images go in `static/img/product_docs/<product>/` as `.webp` files. Reference with absolute paths: `/img/product_docs/<product>/image.webp`.

## Branch Workflow

PRs target `dev`. Never commit directly to `dev` or `main`. The `sync-dev-to-main` workflow merges `dev` to `main` daily at 8 AM PST if the build passes. Production deploys from `main` to Azure Blob Storage.

## CI/CD Workflows

| Workflow | Trigger | Purpose |
|---|---|---|
| `build-and-deploy.yml` | Push to main/dev, PRs to dev | Build and deploy to Azure |
| `vale-linter.yml` | PRs with `.md` changes | Vale style checks as PR review comments |
| `claude-doc-pr.yml` | PRs to dev with `docs/` changes | Vale + Dale + editorial review; `@claude` follow-up |
| `claude-documentation-reviewer.yml` | PRs with `.md` changes | AI review with inline suggestions |
| `claude-documentation-fixer.yml` | `@claude` comment on PR | Apply fixes and push |
| `claude-issue-labeler.yml` | Issues opened/edited | Security screening, CoC check, auto-labeling |
| `sync-dev-to-main.yml` | Daily 8 AM PST | Auto-merge dev to main |
| `reindex-algolia.yml` | After main deploy | Refresh search index |

## Skills and Agents

Skills (`.claude/skills/`) are invoked with `/skill-name`. Agents (`.claude/agents/`) are autonomous workers launched via the Agent tool.

| Component | Type | Purpose |
|---|---|---|
| `/dale` | Skill | Custom linter for Netwrix-specific writing patterns |
| `/doc-help` | Skill | Interactive writing assistant (terminal sessions) |
| `/doc-pr` | Skill | Automated PR review (Vale + Dale + editorial) |
| `/doc-pr-fix` | Skill | Autonomous PR fixer triggered by `@claude` |
| `tech-writer` | Agent | Autonomous end-to-end doc writing/editing |
| `vale-rule-writer` | Agent | Creates new Vale rules |
| `vale-auditor` | Agent | Audits Vale rule set for conflicts |
| `github-issue-manager` | Agent | Issue intake pipeline orchestrator |

## Hooks

Project hooks are in `.claude/settings.json`:
- **PostToolUse (Edit|Write)**: After editing a `docs/*.md` file, reminds to run `/dale`
- **PostToolUse (Bash)**: After running `vale`, reminds to fix and re-run until clean

Hook scripts live in `.claude/hooks/`.
