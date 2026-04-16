---
title: "Historical Audit Data"
description: "How historical audit records in the legacy SQL Server database are preserved and accessed alongside Access Analyzer 26"
keywords:
  - audit data migration
  - sql server audit records
  - historical data
  - fsactivity migration
  - adactivity migration
  - compliance continuity
  - stealthaudit database
products:
  - access-analyzer
sidebar_label: "Historical Audit Data"
tags:
  - migration
  - audit-data
---

# Historical Audit Data

## Overview

Access Analyzer 26 uses a separate database stack (ClickHouse and PostgreSQL) and does not connect to or read from the legacy SQL Server database. Historical audit records collected by the previous version remain in the original SQL Server database and are not affected by the migration.

The sections below cover what data remains in the SQL Server database, how to maintain access to it, and what data AA26 collects going forward.

---

## Historical data retention

Any data you need to maintain for audit and compliance purposes remains in the SQL Server database. This includes activity records from monitored sources and state-in-time collections such as sensitive data discovery findings.

:::note
State-in-time collections — such as sensitive data findings and permissions snapshots — are stale as soon as they are collected. The priority after migrating to AA26 is to get the equivalent scans running in AA26 so that current data is available there.
:::

## Maintaining access to historical records

No data is deleted or modified by the migration. The legacy SQL Server database remains intact and queryable at all times.

To maintain access to historical records:

1. **Retain the NAA SQL Server instance** and its database. Do not decommission or drop the database while historical records are needed for audit or compliance.

2. **Grant read-only SQL access** to security analysts, compliance officers, and legal teams who need to query historical records.

3. **Document the coverage start date for each source.** Record the date AA26 began collecting data for each migrated source. This date determines which system to query for audit requests that span the migration.

---

## What Access Analyzer 26 collects

For sources added to AA26, the product collects the following data:

| Data Type | Source | Stored In |
| --- | --- | --- |
| Permissions, group memberships, and access rights | Access scan | ClickHouse |
| Files and objects containing sensitive content | Sensitive data scan | ClickHouse |
| Active Directory and Entra ID users, groups, and memberships | IAM sync | ClickHouse |
| Real-time file system activity events | Netwrix Activity Monitor (NAM) integration | ClickHouse |

Real-time file system activity events require Netwrix Activity Monitor to be installed and monitoring the target hosts. See [Activity Monitor Integration](../configurations/activity-monitor-integration.md) for configuration steps.

---

## Compliance continuity

Historical audit records in the SQL Server database remain intact throughout and after the migration. There is no gap in the audit record for any period covered by the legacy system.

Notify your compliance and legal teams of the coverage start date for each migrated source so that audit requests spanning the migration can be directed to the correct system.

| Period / Source | System of Record |
| --- | --- |
| Data collected before migration | Legacy NAA SQL Server database |
| Data collected after migration | Access Analyzer 26 (ClickHouse) |
| Sources not yet migrated to AA26 | Legacy NAA SQL Server database |

---

## Related links

- [Migration Overview](./index.md)
- [Migration Checklist](./migration-checklist.md)
- [Migrating Target Servers and Host Lists](./migrate-target-servers.md)
