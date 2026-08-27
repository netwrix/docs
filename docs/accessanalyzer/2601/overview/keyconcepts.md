---
title: "Key Concepts"
description: "Sources, scans, patterns, identities, and entitlements"
sidebar_position: 20
---

# Key Concepts

This page defines the core terminology used throughout Access Analyzer.

## Source Groups

A **source group** is a named collection of related sources that share a common service account and configuration. Sources are the individual hosts or targets within a source group — for example, the specific file servers or domain controllers that Access Analyzer connects to and scans. You create source groups through the **Connect Source** wizard, which handles source creation, scan configuration, and scheduling in a single workflow.

- **File Server** source groups can contain multiple servers (for example, all file servers in a department)
- **Active Directory** source groups can contain multiple domain controllers
- **Entra ID** source groups contain a single source (one Azure AD tenant)
- **SharePoint Online** source groups contain a single source (one Microsoft 365 tenant)

Source groups simplify management by letting you configure shared settings (service account, domain, scan options) once and apply them to all sources in the group.

## Service Accounts

A **service account** stores credentials used to authenticate with data sources and identity providers. Supported credential types include:

- **Username / Password** — Active Directory, CIFS/SMB file shares, and local groups
- **Client ID + Secret** — Entra ID and SharePoint Online (access scans)
- **Client ID + Certificate** — SharePoint Online state-in-time scans. Access Analyzer generates the certificate; you upload the public key to your Azure app registration.
- **SSH Username / Key** — Edge scanners

Manage service accounts in **Configuration** > **Service Accounts**. You can share a service account across multiple sources.

## User Roles

Access Analyzer has three roles:

| Role | Responsibilities |
| --- | --- |
| **Administrator** | Full access: manages system configuration (sources, scans, connectors, service accounts, application settings) and user management (create accounts, assign roles, manage users). |
| **User Admin** | User and role management only — creates accounts, assigns roles, and pre-provisions federated users. Can't change system configuration. |
| **Viewer** | Read-only access to data, reports, and dashboards. Can't make changes. |

For a full walkthrough of role assignment, see the [Quick Install — Roles](/docs/accessanalyzer/2601/install/quickinstall#roles) section.

## Connectors

A **connector** is the component that communicates with a source. Each source type has a corresponding connector that handles:

- **Test connection** — Validates that credentials and network connectivity are correct
- **Access scan / sync** — Enumerates files, folders, permissions, or identities

Connectors run as Kubernetes Jobs, and the Connector API manages them.

## Edge Scanners

An **edge scanner** is a lightweight, containerized agent that Access Analyzer deploys on demand to perform distributed scanning of remote environments. Edge scanners remove the need for a traditional proxy server — they run as short-lived Kubernetes Jobs, execute their scan, and terminate. There is no persistent agent process and no manual deployment required.

**Active Directory** and **File Server** sources use edge scanners. Entra ID and SharePoint Online connect directly from the Access Analyzer service and don't use edge scanners.

Register edge scanners in **Configuration** > **Source Groups** > **Scanners** and associate each one with a service account that uses **SSH Username / Key** credentials. Use scanner labels to route specific scan executions to dedicated scanner pools — for example, to isolate production scanning traffic from non-production environments.

For configuration details and best practices, see [Overview of Scanners](/docs/accessanalyzer/2601/configurations/source-groups/scanners/overview).

## Scans

A **scan** defines what to analyze and how. Access Analyzer supports several scan types:

- **Access scans** — Enumerate files, folders, and permissions on data sources to identify who has access to what
- **Sensitive data scans** — Classify file contents against detection patterns to find PII, credentials, PHI, and financial records
- **Identity sync scans** — Synchronize users, groups, and roles from IAM sources (Active Directory Inventory, Entra ID Users/Groups/Roles)
- **Local Users and Groups scans** — Collect local account data from file servers (auto-created when you enable an access scan)

You can run scans on demand or schedule them with a cron expression.

## Scan Executions

A **scan execution** is a single run of a scan — the record produced each time a scan runs. It is distinct from the scan configuration itself, which defines what to scan and on what schedule.

Each scan execution captures a status (such as running, completed, or failed), start and end times, duration, and result details. Execution history is visible in **Configuration** > **Source Groups** > **Scan Executions**.

For a full list of execution statuses and how they affect other operations, see [Scan Executions](/docs/accessanalyzer/2601/configurations/source-groups/scan-executions).

## Identities and Entitlements

- **Identity** — A user or group account from an IAM source (Active Directory, Entra ID, or local groups)
- **Entitlement** — A permission or access right granted to an identity on a data source (for example, read access to a file share)

Access Analyzer maps identities to entitlements to show effective permissions and identify overly permissive access.

:::note
Effective permission calculations that depend on a trust relationship between Active Directory domains or forests aren't always fully accurate. Access Analyzer can't guarantee the same accuracy for group membership and effective access across a trust relationship as it can within a single domain.
:::

## Sensitive Data Patterns

A **pattern** is a detection rule used during sensitive data scans. Patterns match file content against regular expressions or classification models. Built-in patterns cover:

- **PII** — Personally identifiable information (names, addresses, SSNs, etc.)
- **Credentials** — Passwords, API keys, tokens, and connection strings
- **PHI** — Protected health information
- **Financial Records** — Credit card numbers, bank accounts, financial data

Access Analyzer organizes patterns into **taxonomies** — hierarchical groups of classification rules mapped to compliance frameworks (GDPR, CCPA, HIPAA, PCI DSS, GLBA, CMMC).

## MIP Labels

**MIP labels** are Microsoft Information Protection sensitivity labels that Access Analyzer reads from scanned files and surfaces alongside sensitive data findings. They are distinct from Sensitive Data Patterns — patterns detect content through classification rules, while MIP labels are labels that Microsoft 365 users or automated policies have already applied to files.

- **File Server sources** — Access Analyzer reads MIP labels from scanned files and can apply labels to files based on scan findings.
- **SharePoint Online sources** — Access Analyzer reads MIP labels from native SharePoint metadata. Label application isn't supported for SharePoint Online.

Access Analyzer syncs labels from your Entra ID tenant. To make labels available, an Entra ID source group must exist and its **Users, Groups, and Roles** scan must have run at least once. After the sync completes, map labels to sensitive data types in **Configuration** > **Sensitive Data**.

## Dashboards and Reports

Access Analyzer includes pre-built dashboards and reports that surface findings from your scans. They update automatically after each scan run and are accessible directly from the web interface.

### Dashboards

The Access Analyzer interface includes two summary dashboards:

| Dashboard | What it shows |
| --- | --- |
| **Data Security** | Posture overview across all connected sources — sensitive data exposure, access permissions, open access, and file activity |
| **Active Directory** | AD scan results — user, group, and membership inventory counts; risk breakdowns by type and severity; filterable by domain |

### Pre-built Reports

Access Analyzer organizes reports by source type and category:

| Source | Categories |
| --- | --- |
| **File Server** | Access (8 reports), Content (4 reports), Activity (1 report), Sensitive Data (4 reports) |
| **SharePoint Online** | Access (Shared Links, High-Risk ACLs, Open Access), Content (ROT Analysis, Scan Overview, Stale Files), Activity, Sensitive Data |
| **Active Directory** | AD scan summary |

### My Reports

**My Reports** is a personal workspace for saving filtered report views. Apply filters to any report, save the configuration by name, and reload it later without reapplying filters manually. Saved reports are private to each user.

For the full list of available reports and descriptions, see [Dashboards and Reports](/docs/accessanalyzer/2601/dashboards-reports/reports).
