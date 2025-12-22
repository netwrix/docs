---
description: >-
  After migration, some Netwrix Auditor reports may fail with the error: "Unable
  to cast object of type 'System.Guid' to type 'System.String'". This article
  explains the cause and provides step-by-step resolution to recreate the
  reports folder and restore report generation.
keywords:
  - Netwrix Auditor
  - reports
  - migration
  - SSRS
  - Report Manager
  - System.Guid
  - System.String
  - Netwrix Auditor Management Service
products:
  - auditor
sidebar_label: Unable to Generate Reports After Migration
tags: []
title: "Unable to Generate Reports After Migration"
knowledge_article_id: kA0Qk0000000WsjKAE
---

# Unable to Generate Reports After Migration

## Symptom

After migration, some Netwrix Auditor reports are generating the following error:

```text
Unable to cast object of type 'System.Guid' to type 'System.String'
```

## Cause

Some files were corrupted in the **Reports** folder after migration.

## Resolution

1. In Netwrix Auditor, navigate to **Settings** > **Audit Database**.
2. Open the **Report Manager URL** to access the SQL Server Reporting Services (SSRS) site.
3. Remove the **Netwrix Auditor** root folder in SSRS.
4. On the computer that hosts the Auditor Server, open the **Services** snap-in. You can do this by searching for *Services*.
5. Restart the **Netwrix Auditor Management Service**. This will recreate the reports folder and resolve the error. The reports will take 5-10 minutes to re-upload.
