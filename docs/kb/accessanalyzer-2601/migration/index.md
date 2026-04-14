---
title: "Migrating to Access Analyzer 26"
description: "Concept mapping and step-by-step procedures for migrating credentials, target servers, and schedules from Netwrix Access Analyzer 12.0 and earlier to Access Analyzer 26"
keywords:
  - access analyzer migration
  - stealthaudit migration
  - migrate to AA26
  - host list migration
  - connection profile migration
  - schedule migration
  - sql server audit data
  - migration guide
products:
  - access-analyzer
sidebar_label: "Migration Overview"
tags:
  - migration
---

# Migrating to Access Analyzer 26

This section covers migrating credentials, target servers, and job schedules from Netwrix Access Analyzer 12.0 and earlier (formerly StealthAUDIT) to Access Analyzer 26 (AA26). These procedures apply whether you are replacing the previous version or running both products in parallel. Historical audit data collected by the previous version remains in the SQL Server database and is not affected.

---

## In this section

| Article | Use this article to... |
| --- | --- |
| [Migrating Connection Profiles to Service Accounts](./migrate-credentials.md) | Inventory legacy connection profiles and recreate them as service accounts in AA26. |
| [Migrating Proxy Servers to Scanners](./migrate-proxy-servers.md) | Replace legacy Windows proxy servers with Linux-based AA26 scanner nodes for File Server and Active Directory scanning. |
| [Migrating Target Servers and Host Lists to Source Groups](./migrate-target-servers.md) | Inventory legacy host lists and recreate them as source groups and sources in AA26. |
| [Migrating Job Configurations to Scan Parameters](./migrate-job-configurations.md) | Map legacy data collector settings to AA26 scan parameters by connector type. |
| [Migrating Job Schedules to Scan Schedules](./migrate-schedules.md) | Translate Windows Task Scheduler triggers to cron expressions and configure scan schedules in AA26. |
| [Historical Audit Data](./audit-data-strategy.md) | Understand what audit data stays in the SQL Server database and how to maintain access to it. |
| [Migration Checklist](./migration-checklist.md) | Track and validate progress through each migration phase. |

---

## Concept mapping

Each legacy concept maps directly to an AA26 equivalent. Use this table as a reference throughout the migration.

| Legacy Concept | AA26 Equivalent | Key Difference |
| --- | --- | --- |
| **Host** | **Source** | A single target system in both products. In AA26, sources belong to a source group. |
| **Host List** | **Source Group** | A source group contains sources of a single connector type. Legacy host lists can contain mixed types and must be split before migrating. |
| **Connection Profile** | **Service Account** | Passwords cannot be exported from the legacy system and must be re-entered when creating service accounts in AA26. |
| **Job / Data Collector** | **Scan** | Scans replace the job/query model. Each source has one scan per scan type (access scan or sensitive data scan). |
| **Schedule / Trigger** | **Scan Schedule (cron)** | AA26 uses standard five-field cron expressions. Windows Task Scheduler triggers must be translated to cron format. |
| **Proxy Server / Applet** | **Scanner** | AA26 scanners are Linux-based K3s nodes deployed via SSH from the AA26 UI. No manual Windows service installation is required. Only File Server and Active Directory connectors use scanners — Entra ID and SharePoint Online connect directly. |
| **Storage Profile (SQL Server)** | **ClickHouse + PostgreSQL** | AA26 uses a different database stack. Historical data collected by the legacy product remains in the SQL Server database and is not migrated. |
| **FSActivity / ADActivity tables** | **Activity Monitor integration** | Real-time file system and AD activity events are surfaced in AA26 through Netwrix Activity Monitor (NAM). Customers running NAM can add an AA26 output to route events directly into AA26. |

---

## Migration sequence

Complete the steps in this order. Each step is a prerequisite for the next.

1. **[Migrate credentials](./migrate-credentials.md)** — Create service accounts in AA26. The source group creation wizard requires a service account before you can create a group.
2. **[Migrate proxy servers](./migrate-proxy-servers.md)** — Deploy Linux scanner nodes for File Server and Active Directory source groups. Skip this step if you plan to use the Default Scanner (local scanning only).
3. **[Migrate target servers and host lists](./migrate-target-servers.md)** — Create source groups and add sources. Assign scanner labels to connect each source group to the scanner nodes you deployed.
4. **[Migrate job configurations](./migrate-job-configurations.md)** — Configure scan parameters for each source: scan type, scope, workers, differential scanning, and data classification settings.
5. **[Migrate schedules](./migrate-schedules.md)** — Configure scan schedules on each source.
6. **Validate** — Run an initial scan on each source group and compare results against legacy job output.

---

## Related links

- [Migration Checklist](./migration-checklist.md)
- [Historical Audit Data](./audit-data-strategy.md)
