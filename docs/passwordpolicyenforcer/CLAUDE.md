# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This file scopes guidance to the **Password Policy Enforcer (PPE)** product documentation. Parent files (`/CLAUDE.md`, `/docs/CLAUDE.md`) cover site-wide build commands, writing standards, Vale/Dale, and the branch workflow — don't duplicate those rules here.

## Product

- **Name:** Netwrix Password Policy Enforcer
- **Category:** Directory Management (see `src/config/products.js`)
- **Product ID / path:** `passwordpolicyenforcer` / `docs/passwordpolicyenforcer/`
- **Components documented:** PPE Server, PPE Client, Configuration Console, Mailer Service, HIBP Updater, Password Policy/Web, PowerShell cmdlets, PPE Tool

## Versions

| Version | Status | Notes |
|---|---|---|
| `11.1` | Latest (default) | Active version — most edits land here |
| `11.0` | Hidden | Kept for users on 11.0; don't surface in navigation |
| `10.2` | Hidden | Legacy; different section layout (see below) |

Edits to one version **do not** propagate. Apply changes to each version explicitly when they apply to more than one. When a change only applies to 11.1 (new feature, renamed control), note that clearly and skip the older versions.

## Section Layout Differences

The layout was reorganized between 10.2 and 11.x. When moving content between versions, map sections — don't assume paths match.

**11.x (`11.1/`, `11.0/`):**
- `admin/` — Administration overview, cmdlets, Configuration Console, Compromised Password Check, Password Policy Client, PPE Tool, system audit, troubleshooting, Windows Event Viewer, `manage-policies/` (policies, messages, passphrases, properties, test, users/groups, `rules/`)
- `installation/` — Server, Client, Configuration Console, Mailer, Web, GPM, HIBP Updater, domain vs. local policies, upgrade, uninstall, writeback
- `web-overview/` — Web component overview, configuration, securing, using, editing HTML templates
- `evaluation/` — Evaluation-mode walkthrough
- `gettingstarted.md`, `index.md` at the root
- `kb/` — product-specific KB categories

**10.2:**
- `administration/` — merges what 11.x splits across `admin/` + `installation/` (installation, management console, managing policies, rules, passwordpolicyclient, mailer, properties, etc.)
- `web/` — equivalent to 11.x `web-overview/`, plus `installation.md` (in 11.x this moved to `installation/installationweb.md`)
- `evaluation/`, `kb/`, `index.md`

When porting or comparing content, expect renames: `administration/managementconsole/` ↔ `admin/configconsole.md`, `administration/installation/` ↔ `installation/`, `web/installation.md` ↔ `installation/installationweb.md`.

## Knowledge Base

The in-version `kb/` folder is organized into categories the PPE KB actually uses:

- `authentication-and-integration/`
- `email-and-mailer-configuration/`
- `installation-and-configuration/`
- `policy-rules-and-configuration/`
- `troubleshooting-and-errors/`
- `ppe-supportability.md` (top-level)

KB articles are **canonically** in `/docs/kb/` and copied into each version's `kb/` folder by `scripts/copy-kb-to-versions.mjs` at build. Never hand-edit files inside `docs/passwordpolicyenforcer/<version>/kb/` — edit the source in `/docs/kb/` instead. KB images live in `0-images/` subdirectories and are managed by the same script.

## Images

- Path: `static/images/passwordpolicyenforcer/<version>/...` (`.webp`)
- Reference in markdown with absolute paths: `/images/passwordpolicyenforcer/<version>/<section>/<file>.webp`
- Some PPE pages reference images stored under `static/images/passwordreset/` because PPE and Password Reset share UI surfaces — don't "fix" these cross-product references without verifying the target doesn't exist under PPE.

## Cmdlets Convention

PowerShell cmdlet pages under `11.1/admin/cmdlets/` follow a fixed naming pattern: `cmd<verb><noun>.md` (e.g., `cmdgetppepolicies.md`, `cmdsetppeenabled.md`). New cmdlet pages should match that pattern and be added to both the cmdlets index (`cmdlets.md`) and the sidebar (auto-generated — verify after build).

## Rules Pages

Each password rule under `11.1/admin/manage-policies/rules/` is its own file (character, complexity, compromised, dictionary, history, length, min/max age, patterns, repetition, similarity, unique characters). When adding a new rule type, create a new file in this folder and link from `rules.md` — don't collapse into an existing file.
