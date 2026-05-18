# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product Overview

PingCastle documentation covers three product tiers for Active Directory security assessment:

- **PingCastle Enterprise** — Full platform with web UI, agents, scheduler, API
- **PingCastle Pro** — Mid-tier with web UI and API features
- **PingCastle Standard/Basic** — Command-line assessment tool (no web server)

The current version is **3.5** (only one version exists).

## File Structure

Each tier has a consistent set of docs under `3.5/`:

| File | Purpose | sidebar_position |
|---|---|---|
| `enterpriseinstall.md` | Enterprise installation and configuration | 1 |
| `enterpriseupgrade.md` | Enterprise upgrade guide | 2 |
| `enterpriseuser.md` | Enterprise user manual | 3 |
| `index.md` | Standard and Basic user guide | 4 |
| `proinstall.md` | Pro installation and configuration | 5 |
| `proupgrade.md` | Pro upgrade guide | 6 |
| `prouser.md` | Pro user manual | 7 |
| `kb/` | Knowledge Base articles (position 999, collapsed) | — |

KB article images are PNGs stored in `3.5/kb/0-images/`. Reference them with relative paths from the article file.

## Naming Conventions

- Prefix Enterprise docs with `enterprise`, Pro docs with `pro`
- Standard/Basic content lives in `index.md` (no prefix)
- KB article filenames are lowercase kebab-case describing the exact symptom

## Terminology

Use these exact product names — don't abbreviate or invent variants:

- PingCastle Enterprise
- PingCastle Pro
- PingCastle Standard
- PingCastle Basic
- PingCastle for Service Providers

"Active Directory" and "Entra ID" are always capitalized. Never use "AD" alone without spelling it out first.
