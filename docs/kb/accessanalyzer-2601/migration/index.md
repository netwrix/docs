---
title: "Deploying Access Analyzer 26 Alongside Netwrix Access Analyzer"
description: "Concept mapping, adoption guidance, and step-by-step procedures for deploying Access Analyzer 26 in environments running Netwrix Access Analyzer (formerly StealthAUDIT)"
keywords:
  - access analyzer migration
  - stealthaudit migration
  - migrate to AA26
  - host list migration
  - connection profile migration
  - schedule migration
  - sql server audit data
  - migration guide
  - AA26 adoption
products:
  - access-analyzer
sidebar_label: "Migration Overview"
tags:
  - migration
---

# Deploying Access Analyzer 26 Alongside Netwrix Access Analyzer

This guide covers deploying Access Analyzer 26 (AA26) in environments where Netwrix Access Analyzer 11.6 or 12.0 (formerly StealthAUDIT) is already running. It is written for Netwrix Professional Services engineers and partners.

**AA26 and the legacy product run independently and can coexist in the same environment.** Most customers adopt AA26 incrementally — starting with a specific connector type, a set of hosts, a business unit, or a single data center — while the legacy product continues operating normally everywhere else. There is no requirement to move everything at once, and no requirement to decommission the legacy system on any particular timeline.

These articles provide step-by-step procedures and PowerShell scripts for each adoption phase. Apply them to whatever scope is right for your customer.

---

## What this guide covers

| Topic | Article |
| --- | --- |
| Migrating target servers and host lists to source groups | [Migrating Target Servers and Host Lists](./migrate-target-servers.md) |
| Migrating connection profiles to service accounts | [Migrating Connection Profiles](./migrate-credentials.md) |
| Migrating job schedules to scan schedules | [Migrating Job Schedules](./migrate-schedules.md) |
| Handling historical audit data during and after migration | [Historical Audit Data Strategy](./audit-data-strategy.md) |
| Pre-migration and post-migration validation checklist | [Migration Checklist](./migration-checklist.md) |

---

## Concept mapping

Use this table as a quick reference throughout the migration. Each legacy concept maps to its AA26 equivalent.

| Legacy Concept | AA26 Equivalent | Key Difference |
| --- | --- | --- |
| **Host** | **Source** | A single target system in both products. In AA26, sources belong to a source group. |
| **Host List** | **Source Group** | A source group contains sources of a single connector type. Legacy host lists often contain mixed types and must be split. |
| **Connection Profile** | **Service Account** | AA26 never stores plaintext credentials. Passwords must be re-entered — they can't be exported from the legacy system. |
| **Job / Data Collector** | **Scan** | Scans replace the job/query model. Each source has one scan per scan type (access or sensitive data). |
| **Schedule / Trigger** | **Scan Schedule (cron)** | AA26 uses standard five-field cron expressions. Windows Task Scheduler triggers must be translated to cron. |
| **Proxy Server / Applet** | **Scanner** | AA26 scanners deploy on demand as Kubernetes containers. No manual applet deployment is required. |
| **Storage Profile (SQL Server)** | **ClickHouse + PostgreSQL** | AA26 uses a different database stack. Historical audit data collected by the legacy product remains in the SQL Server database. |
| **FSActivity / ADActivity tables** | *(no current equivalent)* | Historical activity records stay in SQL Server. AA26 collects new activity going forward. |

---

## Scoping your AA26 deployment

AA26 is designed to address specific gaps or pain points — whether that's better visibility into a particular data source type, coverage for a new cloud environment, or improved sensitive data discovery in a specific region. Common adoption patterns:

- **By connector type** — Deploy AA26 for Active Directory or Entra ID sources first, while continuing to collect file system data in the legacy product.
- **By site or data center** — Bring one site into AA26 at a time. Other sites continue running under legacy jobs until you're ready to expand.
- **By business unit** — Start with a subset of the environment owned by one team. Validate results, build confidence, then expand to additional groups.
- **Full scope** — Some customers move everything at once, particularly when the legacy system has reached end of support or is being decommissioned.

The procedures in these articles work the same regardless of scope. Work through the steps for the portion of the environment you're adding to AA26, and repeat them as you expand coverage.

---

## Important constraint: host lists and source types

In the legacy product, a single host list can contain any mix of target types — Active Directory domain controllers, file servers, and SQL servers can all exist in the same list.

**AA26 source groups are single-type.** Each source group is created for exactly one connector type, and that type can't be changed after creation. When migrating host lists, you must group targets by connector type and create a separate source group for each type.

For example, a legacy host list named "Remote Sites" containing Windows file servers and Active Directory domain controllers becomes two AA26 source groups:

- **Remote Sites — File Servers** (File Server source group)
- **Remote Sites — Active Directory** (Active Directory source group)

Plan your source group structure before beginning the migration.

---

## What stays in the SQL Server database

Historical audit records collected by the legacy product — file system activity, Active Directory changes, mailbox activity, sensitive data findings, and all other job output — remain in the SQL Server database. No migration of this data to AA26 is performed as part of this procedure.

Access Analyzer 26 collects new activity going forward from its cutover date. Historical records in SQL Server remain accessible for audit and compliance purposes by querying the database directly.

See [Historical Audit Data Strategy](./audit-data-strategy.md) for guidance on maintaining access to these records.

---

## Deployment sequence

For each scope of the environment you're adding to AA26, work through these steps in order. Each step builds on the previous one. Repeat the sequence for each additional scope you bring into AA26.

1. **Plan** — Complete the planning section of the [Migration Checklist](./migration-checklist.md). Document the legacy host lists, connection profiles, and schedules that correspond to the scope you're working on.
2. **Set up credentials** — Create service accounts in AA26 for the connector types in scope. The source group wizard requires a service account before you can create a group.
3. **Set up sources** — Create source groups and add sources for each connector type in scope.
4. **Set up schedules** — Configure scan schedules on each source group.
5. **Validate** — Run test connections and an initial scan on each source group. Compare scan results against legacy job output for the same hosts.
6. **Parallel operation** — Both products collect data for their respective scopes. Decide when — or whether — to stop the corresponding legacy jobs for the hosts now covered by AA26.
