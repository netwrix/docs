# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product

**Netwrix Threat Manager** detects and responds to abnormal behavior and advanced attacks against Active Directory, Microsoft Entra ID, and file systems. It ingests event data from Netwrix Activity Monitor and Netwrix Threat Prevention, applies built-in threat analytics, and provides automated response via playbooks.

The product was formerly named **StealthDEFEND** (the legacy install path is `C:\Program Files\STEALTHbits\StealthDEFEND\`). Don't introduce this name into documentation — use "Netwrix Threat Manager" on first reference, "Threat Manager" thereafter.

## Versions

Two versions are documented here: **3.0** and **3.1**. The structures are nearly identical; 3.1 adds:

- `administration/serviceaccounts.md` — new Service Accounts dashboard (machine-learning-based service account discovery)
- `install/upgrade/upgrade3.1.md` — upgrade guide from 3.0 to 3.1 (PostgreSQL 14.13 → 14.20, then Threat Manager installer)

Edits to one version do **not** propagate to the other. Update each version that needs the change.

## Content Structure

Each version follows this layout:

| Folder | Purpose |
|---|---|
| `install/` | Installation, first launch, upgrade, product integrations |
| `requirements/` | Server, database, client, Action Service requirements; ports; AD/Entra ID sync permissions |
| `administration/` | UI reference: threats dashboard, investigations, playbooks, configuration, troubleshooting |
| `threats/` | Threat catalog reference (Active Directory, Entra ID, file system, general, custom) |
| `kb/` | Knowledge base articles (six topic categories) |

`index.md` and `gettingstarted.md` sit at the version root.

### Administration sub-sections

- `configuration/` — Configuration menu: integrations, policies (honeytoken), system health, system settings, threat detection, threat response
- `threats/` — Threats dashboard: AD objects, Entra ID objects, threat details (including abnormal behavior)
- `investigations/` — Investigation UI: new, predefined, favorites, reports, subscriptions/exports, filter options
- `playbooks/` — Playbook builder: trigger, steps (edit, import), export/import, action types (AD, Entra ID, file server, Windows server, localhost, third-party, tag)
- `troubleshooting/` — Log viewer, update passwords

### Integration partners

Threat Manager receives event data from:
- **Netwrix Activity Monitor** — file system, AD, and Entra ID events
- **Netwrix Threat Prevention** — AD events via the Threat Manager Event Sink feature
- **Netwrix Access Analyzer** (formerly Enterprise Auditor) — sensitive data for file system context

## KB Articles

KB articles live under `kb/` in six category subdirectories:

- `configuration-and-administration/`
- `installation-and-upgrade/`
- `integration-and-event-collection/`
- `troubleshooting-and-diagnostics/`
- `licensing-and-system-issues/`
- `threat-management-and-operations/`

KB article frontmatter must include `knowledge_article_id` (Salesforce ID), `products`, `keywords`, `description`, and `title`. Example:

```yaml
---
title: 'Article Title'
description: 'One-sentence summary'
keywords: [keyword1, keyword2, Netwrix Threat Manager]
products:
- threat-manager
knowledge_article_id: kA0Qk0000001XXXXX
---
```

KB images live in `kb/0-images/` and are referenced with a relative path. Do not place KB images in `static/images/`.

## Images

Product images are in `static/images/threatmanager/<version>/` as `.webp` files. Reference them with absolute paths, e.g.:

```
/images/threatmanager/3.1/administration/serviceaccounts/dashboard.webp
```

## Threat Catalog Style

Each threat entry in `threats/*.md` follows this pattern:

1. H2 heading = threat name
2. One-paragraph definition — what the technique is and why it's dangerous
3. Optionally: a "Trigger" line for custom/behavioral threats
4. Admonitions (`:::note`) for configuration prerequisites where needed

Keep threat descriptions factual and concise. Don't editorialize.
