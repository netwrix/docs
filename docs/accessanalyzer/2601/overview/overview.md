---
title: "Overview"
description: "Product overview and architecture of Netwrix Access Analyzer"
sidebar_position: 10
---

# Overview

:::note Using an older version?
This documentation covers **Access Analyzer 2601**, the latest release — a containerized, Linux-based deployment. If you are running a previous Windows-based installation, select your version below:

- [Access Analyzer 12.0 documentation](https://docs.netwrix.com/docs/accessanalyzer/12_0)
- [Access Analyzer 11.6 documentation](https://docs.netwrix.com/docs/accessanalyzer/11_6)
:::

## Product Overview

Netwrix Access Analyzer is an on-premises Data Security Posture Management (DSPM) platform that helps security and compliance teams discover where sensitive data lives, who has access to it, and where access risks exist across their environment.

Organizations face a persistent challenge: sensitive data accumulates across file servers, cloud platforms, and identity systems faster than security teams can track it. Permissions expand over time, inheritance gets broken, and stale data sits untouched for years — all without anyone knowing. Access Analyzer addresses this by scanning your data sources and identity providers continuously, classifying what it finds, and surfacing the results in dashboards and reports your team can act on.

Access Analyzer connects to the following source types:

- **File servers** — Scans SMB/CIFS file shares for permissions, folder-level ACLs, file ownership, and sensitive data content
- **SharePoint Online** — Scans SharePoint sites for permissions, sharing links, and sensitive data across document libraries
- **Active Directory** — Syncs users, groups, group memberships, and security risks from on-premises AD domains
- **Entra ID** — Syncs users, groups, and roles from your Microsoft 365 tenant, and collects Microsoft Information Protection (MIP) sensitivity labels applied across the tenant

After each scan, results are stored in a high-performance analytics database and made available through embedded Metabase dashboards and reports. Security teams can filter by domain, file server, site, or classification type, and drill into specific findings without writing queries.

:::note
Scans are **read-only**. Access Analyzer does not modify files, permissions, or directory objects on any scanned source. No persistent agents are installed on file servers or domain controllers — edge scanners run as short-lived jobs and terminate after each scan.
:::

## Key Capabilities

| Capability | Description |
| --- | --- |
| **Sensitive Data Discovery** | Classifies file content across file servers and SharePoint Online against built-in detection patterns for PII, PHI, credentials, and financial data. Findings are mapped to compliance frameworks including GDPR, HIPAA, PCI DSS, and CCPA. |
| **Access Risk Analysis** | Identifies open access, overly permissive ACLs, broken permission inheritance, and stale entitlements across file shares and SharePoint sites. Shows effective permissions for any user or group. |
| **Identity Inventory** | Continuously syncs users, groups, memberships, and roles from Active Directory and Entra ID. Tracks group nesting, stale accounts, and role assignments across your identity providers. |
| **File Activity Monitoring** | Ingests real-time file system and SharePoint activity events from Netwrix Activity Monitor. Powers activity reports and enables anomaly detection and sensitive data activity tracking. Requires a separate Netwrix Activity Monitor deployment. |

## Architecture Overview

This section describes how Access Analyzer components are deployed and how data flows through the system. It is primarily intended for IT administrators and architects planning or troubleshooting a deployment.

Access Analyzer runs entirely within your Kubernetes cluster. All components — the web application, API server, analytics database, and connector jobs — deploy to a single `access-analyzer` namespace. No data leaves your infrastructure.

The platform uses a scan-as-job model: when a scan is triggered, the Connector API creates an ephemeral Kubernetes Job for the connector type (CIFS, SharePoint, Active Directory, or Entra ID). The job runs, connects to the external source, collects data, and streams results to the data ingestion service, which bulk-inserts them into ClickHouse. When the job completes, it posts a webhook back to the Core API to finalize the scan execution record.

```mermaid
graph TB
    Browser(["Browser"])

    subgraph K8s["Kubernetes — access-analyzer namespace"]
        Webapp["Web App\n(React)"]
        CoreAPI["Core API\n(Rails + Sidekiq)"]
        ConnAPI["Connector API\n(Go)"]
        DI["Data Ingestion\n(Python)"]
        MB["Metabase\n(Embedded Analytics)"]

        Redis[("Redis\nJob queue")]
        PG[("PostgreSQL\nApp data")]
        CH[("ClickHouse\nScan results")]

        subgraph Jobs["Connector Jobs — ephemeral Kubernetes Jobs"]
            J1["CIFS Connector"]
            J2["SharePoint Connector"]
            J3["Active Directory Connector"]
            J4["Entra ID Connector"]
        end
    end

    subgraph Ext["External Sources"]
        FS["File Servers\nSMB · port 445"]
        SP["SharePoint Online\nHTTPS · port 443"]
        AD["Active Directory\nLDAP · port 389"]
        EID["Entra ID\nHTTPS · port 443"]
    end

    Browser -->|HTTPS| Webapp
    Webapp -->|REST API| CoreAPI
    Webapp -->|Embedded SDK + JWT SSO| MB
    CoreAPI --> PG
    CoreAPI --> Redis
    CoreAPI -->|HTTP| ConnAPI
    ConnAPI -->|Kubernetes Job API| Jobs
    J1 -->|SMB| FS
    J2 -->|Graph API| SP
    J3 -->|LDAP| AD
    J4 -->|Graph API| EID
    J1 --> DI
    J2 --> DI
    J3 --> DI
    J4 --> DI
    DI -->|Bulk insert| CH
    MB -->|JDBC| PG
    MB -->|JDBC| CH
```

### Components

**Web App** — React single-page application served from the cluster. Handles scan management, source configuration, results browsing, and embeds Metabase dashboards via the Metabase SDK using JWT-based single sign-on.

**Core API** — Rails 8 application that exposes the REST API used by the web app. Manages application state in PostgreSQL, queues background jobs through Sidekiq and Redis, and coordinates scan execution by delegating to the Connector API.

**Connector API** — Go service that translates scan requests from the Core API into Kubernetes Job definitions. It creates connector Jobs, monitors their completion, and posts results back to the Core API via webhook.

**Connector Jobs** — Ephemeral Kubernetes Jobs that run the actual scan work. Each connector type (CIFS, SharePoint, Active Directory, Entra ID) is a containerized Python handler. Jobs connect directly to their target source, collect data, and stream rows to the Data Ingestion service in batches. Jobs are created on demand and cleaned up after completion.

**Data Ingestion** — Python service that receives batched rows from connector jobs and bulk-inserts them into ClickHouse. Provides write isolation — connectors never write to ClickHouse directly.

**Metabase** — Embedded analytics platform pre-configured with Access Analyzer dashboards and reports. Connects to both PostgreSQL and ClickHouse via JDBC. Users access Metabase through the web app with no separate login required.

### Data Stores

| Store | Purpose |
|-------|---------|
| **PostgreSQL** | Application data: users, sources, scans, scan executions, service accounts, configuration |
| **ClickHouse** | Scan results: file objects, permissions, ACLs, group memberships, sensitive data findings |
| **Redis** | Sidekiq job queue and session cache for the Core API |

## Next Steps

| | |
| --- | --- |
| **New to Access Analyzer?** | Read [Key Concepts](/docs/accessanalyzer/2601/overview/keyconcepts) to learn the terminology used throughout the product and documentation. |
| **Ready to install?** | Follow the [Quick Install](/docs/accessanalyzer/2601/install/quickinstall) guide for an end-to-end deployment walkthrough. |
| **Planning your deployment?** | Review [Hardware and System Requirements](/docs/accessanalyzer/2601/install/system/requirements) and [Network and Port Requirements](/docs/accessanalyzer/2601/install/system/network) before provisioning your server. |
| **Connecting your first source?** | Go to **Configuration** > **Source Groups** in the application and use the Connect Source wizard. |
