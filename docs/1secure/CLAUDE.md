# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product

**Netwrix 1Secure** is a multi-tenant SaaS application (Azure-hosted) that helps Managed Service Providers (MSPs) audit on-premises and cloud environments across multiple client organizations. The primary audience is MSP IT staff and security analysts managing multiple client tenants.

Always write "Netwrix 1Secure" on first mention; "1Secure" is acceptable thereafter.

## Key Concepts

| Term | Meaning |
|---|---|
| MSP | Managed Service Provider — the main user persona; manages multiple client orgs |
| Organization | A client tenant managed by the MSP within 1Secure |
| Site | A logical grouping of data sources within an organization |
| Source | A monitored environment (AD, Computer, Exchange Online, Entra ID, SharePoint Online, SQL Server) |
| Connector | The configuration that connects 1Secure to a specific source instance |
| Netwrix Cloud Agent | The on-premises agent that collects data and sends it to the 1Secure cloud |
| Risk Profile | A named set of risk metrics with thresholds; assigned to an organization |
| Risk Metric | A measurable security parameter (e.g., inactive accounts, stale permissions) |
| State-in-Time | A point-in-time snapshot report used for risk assessment |

## Directory Structure

1Secure is a **single-version** SaaS product — no version subdirectories.

```
docs/1secure/
├── index.md                    # Product landing page
├── admin/                      # Core product features and UI reference
│   ├── dashboard/              # Dashboard and alerts timeline
│   ├── organizations/          # Org management, users, roles, sources & connectors
│   │   ├── addingusers/
│   │   └── sourcesandconnectors/   # Per-source connector setup steps
│   ├── datacollection/         # Data collection configuration (per source type)
│   │   ├── activedirectoryauditing/
│   │   ├── computer/
│   │   └── logonactivity/
│   ├── riskprofiles/           # Risk profiles, metrics, dashboard
│   ├── searchandreports/       # Reports, filters, subscriptions, compliance
│   ├── alerts/
│   └── login/
├── configuration/              # Manual IT infrastructure configuration
│   ├── admanual/               # Manual AD audit configuration
│   ├── computer/               # Computer source config
│   ├── windowsserver/          # Windows Server config
│   ├── logonactivity/          # Logon Activity config
│   ├── sqlserver/              # SQL Server config
│   ├── gpmanual/               # Group Policy config
│   └── registerconfig/         # Classifier setup (registerconfig)
├── install/                    # Agent installation
├── integration/                # Third-party integrations (ConnectWise, ServiceNow, SharePoint)
├── requirements/               # System requirements and data source prerequisites
├── security/                   # Security, compliance, and data privacy topics
├── setup-and-configuration/    # Combined entry point linking setup topics
└── kb/                         # Knowledge base / troubleshooting articles
```

## Frontmatter Pattern

Every file uses this frontmatter:

```yaml
---
title: "Title here"
description: "Title here"
sidebar_position: <integer>
---
```

`title` and `description` are always identical. Index/overview pages that use `DocCardList` to auto-list children don't need body content beyond a brief intro.

## Content Patterns

- **Index pages** (`overview.md`, `index.md`): Brief intro + `<DocCardList />` to render child links. Import: `` `import DocCardList from '@theme/DocCardList';` `` inside a `` `mdx-code-block` `` fence.
- **Configuration sections** often have two paths: automatic (recommended, done through the UI when adding a source) and manual (step-by-step for environments requiring it). Always present both and lead with the automatic method.
- **`admin/datacollection/`** covers permissions and audit settings the agent needs on the monitored systems — distinct from **`configuration/`**, which covers manual OS/policy configuration steps the admin performs on the target environment.
- **`admin/organizations/sourcesandconnectors/`** covers UI steps to add sources and connectors in the 1Secure console — distinct from `configuration/`, which is infrastructure-side.
- Risk metric content lives in `admin/riskprofiles/metrics_list.md`; do not duplicate metric descriptions elsewhere.
