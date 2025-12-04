---
description: >-
  The temporary SSRS database (TempDB) can grow continuously when you run
  reports or investigations. This article explains the cause and shows how to
  grant the required permissions to the SQL Server service account to allow
  TempDB cleanup.
keywords:
  - SSRS
  - TempDB
  - SQL Server
  - permissions
  - db_owner
  - Netwrix Auditor
  - audit database
  - disk space
products:
  - auditor
sidebar_label: SSRS TempDB Permanently Grows Large and Occupies D
tags: []
title: "SSRS TempDB Permanently Grows Large and Occupies Disk Space"
knowledge_article_id: kA0Qk0000000PhZKAU
---

# SSRS TempDB Permanently Grows Large and Occupies Disk Space

## Symptom

The temporary SSRS database (TempDB) in your environment permanently grows large when you run reports or investigations.

## Cause

The SQL Server service account has insufficient permissions to clear the TempDB.

## Resolution

> **NOTE:** To establish the SQL Server service account, click **Settings** in the main **Netwrix Auditor** menu > **Audit Database** > **User name**.

Grant the `db_owner` role to the SQL Server service account.

1. Run Microsoft SQL Server Management Studio and connect to the SQL instance.
2. In **Object Explorer**, proceed to **Security** > **Logins** > right-click the affected SQL Server service account > **Properties**.
3. In the **User Mapping** tab, locate the TempDB, highlight it and review the roles assigned to the affected account in the **Database role membership** window.
4. Check the `db_owner` checkbox and click **OK** to save changes.

## Related articles

- Requirements − Requirements for SQL Server to Store Audit Data · v10.6
