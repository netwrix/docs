---
description: >-
  Shows how to remove a server backup session stuck in Queued status in Netwrix
  Recovery for Active Directory by deleting the corresponding record from the
  ServerBackupHistory table in the NetwrixRecovery database.
keywords:
  - server backup
  - queued
  - ServerBackupHistory
  - Netwrix Recovery for Active Directory
  - NetwrixRecovery
  - SQL Server Management Studio
  - DELETE query
  - EndTime
products:
  - recovery-active-directory
sidebar_label: Remove Server Backup Stuck in Queued Status
tags: []
title: "Remove Server Backup Stuck in Queued Status"
knowledge_article_id: kA0Qk0000001MT7KAM
---

# Remove Server Backup Stuck in Queued Status

> **IMPORTANT:** This article applies exclusively to Netwrix Recovery for Active Directory v2.5. and later.

## Symptom

In the **Forest** page in Netwrix Recovery for Active Directory, the **Server Backup History** table lists a queued session that does not start.

## Causes

Review the list of possible causes:

- A service connection point is not published.
- The Recovery Server Backup Agent failed to install.
- Netwrix Recovery for Active Directory encountered an issue during the backup process.
- The Recovery Server port (`9001` by default) is closed for inbound communication.
- Your Netwrix Recovery for Active Directory license has expired.

## Resolution

Refer to the following steps to remove the queued session from the list:

1. In your SQL Server Management Studio instance, locate the Netwrix Recovery for Active Directory database. The default name is `NetwrixRecovery`.
2. Right-click the `NetwrixRecovery` database and run a new query to output all records of the **Server Backup History** table:

```sql
SELECT * FROM ServerBackupHistory
```

3. Locate the entry with `NULL` in the **EndTime** column. Record the corresponding `ID` value.
4. Run a new query to remove the queued entry:

```sql
DELETE FROM ServerBackupHistory WHERE ID = '%targetID%'
```

5. Refresh the **Forest** page in Netwrix Recovery for Active Directory to confirm the query is deleted.
