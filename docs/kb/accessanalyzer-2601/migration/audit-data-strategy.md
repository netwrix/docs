---
title: "Historical Audit Data and Parallel Operation"
description: "How to maintain access to historical audit records in the legacy SQL Server database while running Access Analyzer 26 alongside your existing environment"
keywords:
  - audit data migration
  - sql server audit records
  - historical data
  - fsactivity migration
  - adactivity migration
  - compliance continuity
  - stealthaudit database
  - parallel operation
products:
  - access-analyzer
sidebar_label: "Historical Audit Data Strategy"
tags:
  - migration
  - audit-data
---

# Historical Audit Data and Parallel Operation

## Overview

Access Analyzer 26 uses a separate database stack (ClickHouse and PostgreSQL) and does not connect to or read from the legacy SQL Server database. Historical audit records collected by the legacy system remain where they are — in the original SQL Server database — and are not affected by deploying AA26.

This means the two products operate independently. The legacy system continues collecting data for any sources still under its management. AA26 collects data for the sources you have added to it. Neither system interferes with the other.

This article explains what data lives in the legacy database, how to keep it accessible, and what AA26 collects for sources under its management.

---

## What remains in the SQL Server database

The following categories of collected data live in the legacy NAA SQL Server database and are not transferred to AA26:

| Data Category | Description | Example Tables |
| --- | --- | --- |
| **File system activity** | User access events on file shares and NAS devices | `SA_*_FSActivity` |
| **Active Directory changes** | Object creation, deletion, and modification events | `SA_*_ADActivity` |
| **Exchange mailbox activity** | Email access, send, and receive events | `SA_*_MailboxActivity` |
| **Sensitive data findings** | Files containing detected sensitive content | `SA_*_SensitiveData` |
| **Permissions snapshots** | Point-in-time access rights inventories | `SA_*_Permissions` |
| **Group membership history** | Historical group membership records | `SA_*_GroupMembership` |

Table names in the legacy database use the format `SA_[JobName]_[TableName]`. The exact names vary by your configuration and which jobs were running.

---

## Maintaining access to historical records

The legacy SQL Server database and the NAA application continue to operate normally after you deploy AA26. No data is deleted or modified by AA26's deployment.

### Recommended access approach

1. **Retain the NAA SQL Server instance** and its database. Do not decommission or drop the database while any historical records it contains might be needed for audit or compliance purposes.

2. **Avoid duplicate collection for shared sources.** If a source is added to AA26, the legacy job targeting the same host can be stopped to avoid collecting the same data twice. Sources and jobs that have not yet moved to AA26 continue running without interruption.

3. **Grant read-only access to authorized users** — security analysts, compliance officers, and legal teams — who might need to query historical records for audit or investigation purposes.

4. **Document the coverage boundary per source.** For any source that moves to AA26, note the date AA26 began collecting data for it. This lets you query the correct system when responding to audit requests that span the transition.

### Querying historical data

Use SQL Server Management Studio (SSMS), a reporting tool, or the legacy NAA Web Console to query historical records. The legacy REST API also supports read-only access to job output tables.

Example: retrieve all file access events for a specific user in a specific date range:

```sql
SELECT
    EventTime,
    UserName,
    HostName,
    SharePath,
    ObjectPath,
    AccessType,
    AccessMask
FROM
    SA_FileSystem_FSActivity   -- Adjust table name to match your job name
WHERE
    UserName    = 'DOMAIN\jsmith'
    AND EventTime BETWEEN '2024-01-01' AND '2024-12-31'
ORDER BY
    EventTime DESC;
```

The exact table and column names depend on your NAA job configuration. Use `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME LIKE '%Activity%'` to enumerate activity tables in your database.

---

## What Access Analyzer 26 collects

For sources added to AA26, the product collects the following data through its configured scans:

| Scan Type | Data Collected | Stored In |
| --- | --- | --- |
| **Access Scan** | Permissions, group memberships, and access rights | ClickHouse (intelligence tables) |
| **Sensitive Data Scan** | Files and objects containing sensitive content | ClickHouse (intelligence tables) |
| **IAM Sync** | Active Directory and Entra ID users, groups, and memberships | ClickHouse (intelligence tables) |

AA26 does not collect real-time file system activity events (file open, read, write, delete) in this release. Permissions and access rights are collected on the schedule configured for each source group.

---

## Compliance continuity

Historical audit records in the SQL Server database remain intact and queryable regardless of what you do in AA26. There is no gap in the audit record for the period covered by the legacy system.

For any source that moves to AA26, document the date AA26 began collecting data for it and communicate that boundary to your compliance and legal teams. This ensures that audit requests spanning the transition can be answered by querying the correct system.

| Data | Source of Record |
| --- | --- |
| Records collected before a source moved to AA26 | Legacy NAA SQL Server database |
| Records collected after a source moved to AA26 | Access Analyzer 26 (ClickHouse) |
| Records for sources still managed by the legacy product | Legacy NAA SQL Server database |

Where both systems are actively collecting — during a period of incremental adoption — each system is the source of record for the sources it manages.

---

## Related links

- [Migration Overview](./index.md)
- [Migration Checklist](./migration-checklist.md)
- [Migrating Target Servers and Host Lists](./migrate-target-servers.md)
