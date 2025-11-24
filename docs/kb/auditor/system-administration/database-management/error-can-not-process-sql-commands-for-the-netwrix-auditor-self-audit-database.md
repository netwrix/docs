---
description: >-
  Explains how to resolve the "can not process SQL commands" error by turning
  off Recovery mode for the Netwrix Auditor Self Audit database and reattaching
  it.
keywords:
  - Netwrix Auditor
  - Self Audit
  - SQL Server
  - Recovery mode
  - EMERGENCY
  - detach
  - reattach
  - System Health
products:
  - auditor
sidebar_label: 'Error: Can Not Process SQL Commands for the Netwri'
tags: []
title: "Error: Can Not Process SQL Commands for the Netwrix Auditor Self Audit Database"
knowledge_article_id: kA0Qk0000000LhBKAU
---

# Error: Can Not Process SQL Commands for the Netwrix Auditor Self Audit Database

## Symptom

You see the following error in the Netwrix Auditor System Health log:

```text

            Error: can not process SQL commands for the Netwrix Auditor Self Audit database.
```

## Cause

The **Netwrix Auditor Self Audit** database is in the **Recovery** mode.

## Resolution

Follow the steps below to turn off the **Recovery** mode for the database:

1. On the computer that hosts your **Netwrix Auditor** Server, stop all services with the **Netwrix** prefix.
2. Connect to your SQL instance as an administrator.
3. Locate the **Netwrix Auditor Self Audit** database and set it to the **Emergency** mode by running this query on the database:

   ```sql
   ALTER DATABASE Netwrix_Auditor_Self_Audit SET EMERGENCY
   ```

4. Once completed, detach the database.
5. Reattach the database.
6. Start all **Netwrix** services you stopped on the step 1.

### Related Article:

- [Recovery Mode Changes in SQL Databases](/docs/kb/auditor/system-administration/database-management/recovery-mode-changes-in-sql-databases)
