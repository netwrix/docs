# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product

**Platform Governance for Salesforce** (formerly Strongpoint) is a Salesforce managed package that auto-documents customizations and enforces change management and compliance workflows. It is a single-version SaaS product (`version: "current"`), so all edits apply to the one live version.

The legacy product name "Strongpoint" still appears in some directory names (`installingstrongpoint/`), internal Salesforce UI labels (e.g., "Strongpoint DLU Parameter", "Strongpoint Home Page"), and older content. When writing or editing docs, use "Platform Governance for Salesforce" — not "Strongpoint" — except when referring to a specific UI element that literally says "Strongpoint."

The app is accessed in Salesforce via **App Launcher > Netwrix Lightning**.

## Content Map

| Directory | What it covers |
|---|---|
| `installingstrongpoint/` | Package install, authentication (Named Credentials / Session ID), Getting Started Wizard, scanner setup, permission sets, sandbox setup, license types |
| `changemanagement/` | Change Requests, change/approval policies, change logs, data tracking, documented metadata types, resolving non-compliant changes |
| `cleanup/` | Cleanup overview, unused customization tools, Date Last Used (DLU) |
| `customizations/` | Customization records (Lightning and legacy), folder customizations |
| `releasemanagement/` | Deployments, deployment logs, multiple environments, rollback |
| `integrations/` | Jira (classic and Forge), Zendesk integrations |
| `reports/` | Deployment log report pages |
| `scanner/` | Scanner overview, running, scheduling, FastScan, field-level scanner, DLU scanner, troubleshooting |
| `settings/` | Settings overview, credentials |
| `techdebt/` | Tech debt workflows: auto-documentation, change monitoring, org clean-up, org-specific approaches |
| `tools/` | Access review, DRD, environment comparison, field tracking, package usage, profile/permission comparison, system permission tracking, user activity, export tools |
| `release_7_0/` | Release notes for the current release |

## Key Terminology

- **Scanner** — the process that catalogs all Salesforce metadata customizations; replaces the term "Spider" used in Platform Governance for NetSuite. Takes 4–5 days on first run.
- **Customization Record** — a Platform Governance record documenting a single Salesforce metadata object (field, class, flow, etc.).
- **Change Request** — the central record for planning, approving, and tracking a change.
- **Change Log** — audit trail of changes to customizations; generated automatically by the scanner.
- **DRD (Dependency Relationship Diagram)** — graphical view of a customization and its relationships with other objects.
- **DLU (Date Last Used)** — tracks when a customization was last actively used; used to identify candidates for cleanup.
- **Platform Governor** — monitors Salesforce Governor Limit usage.
- **FastScan** — a targeted quick scan for specific metadata types.
- **Change/Approval Policy** — rules that define what level of approval a change to a given customization requires.
- **Data Tracking** — optional feature that logs or blocks changes to data records (not just metadata).

## License Tiers

Content frequently references which license tier a feature requires. The three tiers are:

1. **Automated Documentation** — Scanner, Customization Records, DRD, Cleanup, Profile/Permission Comparison
2. **Intelligent Change Enablement** — adds Change Requests, deployments, environment comparison, user activity
3. **Enterprise Compliance** — adds Financial Controls, audit reports

When editing features gated behind a tier, check `installingstrongpoint/features_by_license_type.md` for the current mapping.

## Authentication Methods

There are two authentication methods. Understanding both matters for the install and credentials docs:

- **Named Credentials (OAuth)** — recommended for all orgs; required when Salesforce user profiles have High Assurance enabled. Configured via External Client App. Does not break on session expiry.
- **Session ID (legacy)** — uses a dedicated Integration User's username, password, and security token. Does not work with High Assurance. Documented inside a `<details>` block in `installingstrongpoint/installing_strongpoint.md`.

## Ticketing Integrations

There are two separate Jira integrations:

- **Jira Integration** (`integrations/jiraintegration/`) — older REST-based integration
- **Jira Forge Integration** (`integrations/jiraintegrationForge/`) — newer Forge app-based integration

These are distinct products with different setup steps. Don't conflate them.

## Images

Images are stored at `/static/images/platgovsalesforce/` organized by section (e.g., `/images/platgovsalesforce/installingstrongpoint/`, `/images/platgovsalesforce/customizations/`). Reference with absolute paths. Image format is `.webp`.
