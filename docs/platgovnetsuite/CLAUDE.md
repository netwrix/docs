# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product

**Platform Governance for NetSuite** (formerly Strongpoint) is a NetSuite SuiteApp that auto-documents customizations and enforces change management and compliance workflows. It is a single-version SaaS product (`version: "current"`), so all edits apply to the one live version.

The legacy product name "Strongpoint" still appears in some file names, internal NetSuite UI labels, and older content. When writing or editing docs, use "Platform Governance for NetSuite" — not "Strongpoint" — except when referring to a specific UI element that says "Strongpoint" (e.g., the Strongpoint tab in NetSuite's toolbar).

## Content Map

| Directory | What it covers |
|---|---|
| `installation/` | Bundle install, Spider setup, user/role/permission management, license types |
| `changemanagement/` | Change Requests, Process Issues, Deployment Records, Opportunistic Clearance, environment comparison, approval policies |
| `customization/` | Customization records, impact analysis, ERD, change logs |
| `cleanup/` | Archiving, restoring, and deleting unused fields and customizations |
| `scriptmgmt/` | Critical Script Analysis: performance, errors, debugging logs, scheduler |
| `sod/` | Advanced Segregation of Duties: rules, violations, approvals, reports, clean-up |
| `uar/` | User Access Review: role/permission/membership reviews, admin/owner/auditor/additional-reviewer roles |
| `agent/` | Automated IT/financial controls, control incidents, lookback, pre-approved changes |
| `ticketingintegrations/` | Jira (classic + Forge), ServiceNow, Zendesk integrations; REST API overview (Change Request API, Customizations API) |
| `tools/` | Spider, Standard Field Impact Analysis |
| `automatedsearchcleanup/` | Automated cleanup of unused saved searches |
| `bundleremoval/` | Uninstalling the bundle |
| `integrations/` | Integration mapping between NetSuite and external systems |
| `reportabug/` | Troubleshooting guides for known issues |
| `archive/` | Release notes for versions 7.0–7.3 |

## Key Terminology

- **Spider** — the scanning process that catalogs all NetSuite customizations; runs on a schedule or manually. Takes 4–5 days on first run.
- **Customization Record** — a Platform Governance record that documents a single NetSuite customization object (script, field, workflow, etc.)
- **Change Request** — the central record for planning, approving, and tracking a change. Links to Process Issues, Deployment Records, and customizations.
- **Process Issue** — optional pre-change record for triaging and initiating a Change Request; can link to external ticketing systems.
- **Deployment Record** — tracks deployment approvals after a Change Request is approved.
- **Agent** — the automated control engine; monitors financially relevant records and fields outside of configuration changes.
- **SoD (Segregation of Duties)** — role/permission conflict detection and enforcement.
- **UAR (User Access Review)** — periodic review process confirming users have appropriate roles and permissions.
- **Opportunistic Clearance** — a setting that auto-clears low-risk non-compliant changes without full approval.
- **Change Level** — the compliance tier required for a change, determined automatically by change/approval policies.

## Module Tiers

Content frequently references which license tier a feature requires. The three tiers are:

1. **Documentation** — Spider + Customization Records
2. **Intelligent Change Management** — adds Change Requests, Process Issues, environment comparison
3. **Enterprise Compliance** — adds Advanced SoD, UAR, Agent, blocking controls

When editing features gated behind a tier, check `installation/features_by_license_type.md` for the current mapping before making claims about availability.

## UAR Role Structure

UAR has four distinct reviewer roles, each with its own subdirectory under `uar/`:

- **Admin** (`adminoverview/`) — creates and manages reviews
- **Owner** (`owneroverview/`) — reviews roles they own
- **Auditor** (`auditoroverview/`) — read-only audit access
- **Additional Reviewer** (`addrevieweroverview/`) — assigned by Owners for membership reviews

When editing UAR content, verify which role perspective the file is written from — they have overlapping but distinct workflows.

## Ticketing Integrations

There are two separate Jira integrations:

- **Jira Integration** (`jiraintegration/`) — older REST-based integration
- **Jira Forge Integration** (`jiraforgeintegration/`) — newer Forge app-based integration

These are distinct products with different setup steps. Don't conflate them.

## Images

Images are stored at `/static/images/platgovnetsuite/` organized by section (e.g., `/images/platgovnetsuite/sod/`, `/images/platgovnetsuite/uar/`). Reference with absolute paths. Image format is `.webp`.
