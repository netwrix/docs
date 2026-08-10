# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This file scopes guidance to the **Password Policy Enforcer (PPE)** product documentation. Parent files (`/CLAUDE.md`, `/docs/CLAUDE.md`) cover site-wide build commands, writing standards, Vale/Dale, and the branch workflow — don't duplicate those rules here.

## Product

- **Name:** Netwrix Password Policy Enforcer
- **Category:** Directory Management (see `src/config/products.js`)
- **Product ID / path:** `passwordpolicyenforcer` / `docs/passwordpolicyenforcer/`
- **Components documented:** PPE Server, PPE Client, Configuration Console, Mailer Service, HIBP Updater, Password Policy/Web, PowerShell cmdlets, PPE Tool

## Versions

PPE is a **single-version (SaaS-style)** product using `version: "current"` — there is no version selector. All content lives directly under `docs/passwordpolicyenforcer/` with no version subfolder.

## Section Layout

- `admin/` — Administration overview, cmdlets, Configuration Console, Compromised Password Check, Password Policy Client, PPE Tool, system audit, troubleshooting, Windows Event Viewer, `manage-policies/` (policies, messages, passphrases, properties, test, users/groups, `rules/`)
- `installation/` — Server, Client, Configuration Console, Mailer, Web, GPM, HIBP Updater, domain vs. local policies, upgrade, uninstall, writeback
- `web-overview/` — Web component overview, configuration, securing, using, editing HTML templates
- `evaluation/` — Evaluation-mode walkthrough
- `index.md` at the root
- `kb/` — product-specific KB categories

## Knowledge Base

The in-product `kb/` folder is organized into categories the PPE KB actually uses:

- `authentication-and-integration/`
- `email-and-mailer-configuration/`
- `installation-and-configuration/`
- `policy-rules-and-configuration/`
- `troubleshooting-and-errors/`
- `ppe-supportability.md` (top-level)

KB articles are **canonically** in `/docs/kb/` and copied into `docs/passwordpolicyenforcer/kb/` by `scripts/copy-kb-to-versions.mjs` at build. Never hand-edit files inside `docs/passwordpolicyenforcer/kb/` — edit the source in `/docs/kb/` instead. KB images live in `0-images/` subdirectories and are managed by the same script.

## Images

- Path: `static/images/passwordpolicyenforcer/...` (`.webp`)
- Reference in markdown with absolute paths: `/images/passwordpolicyenforcer/<section>/<file>.webp`
- Some PPE pages reference images stored under `static/images/passwordreset/`, and Password Reset pages reference images under `static/images/passwordpolicyenforcer/passwordreset/` and `static/images/passwordpolicyenforcer/password_reset/` — PPE and Password Reset share UI surfaces. Don't "fix" these cross-product references without verifying the target doesn't exist under PPE.

## Cmdlets Convention

PowerShell cmdlet pages under `admin/cmdlets/` follow a fixed naming pattern: `cmd<verb><noun>.md` (e.g., `cmdgetppepolicies.md`, `cmdsetppeenabled.md`). New cmdlet pages should match that pattern and be added to both the cmdlets index (`cmdlets.md`) and the sidebar (auto-generated — verify after build).

## Rules Pages

Each password rule under `admin/manage-policies/rules/` is its own file (character, complexity, compromised, dictionary, history, length, min/max age, patterns, repetition, similarity, unique characters). When adding a new rule type, create a new file in this folder and link from `rules.md` — don't collapse into an existing file.
