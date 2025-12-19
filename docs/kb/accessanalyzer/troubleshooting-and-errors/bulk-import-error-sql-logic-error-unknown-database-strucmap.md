---
description: >-
  When the 2-FSAA Bulk Import job returns "SQL logic error unknown database
  strucmap.", the database structure map is likely corrupted. This article
  describes causes and provides two resolutions: resetting the hosts and
  repairing the SQL database.
keywords:
  - bulk import
  - SQL logic error
  - strucmap
  - 2-FSAA
  - FileSystem
  - reset hosts
  - repair database
  - Netwrix Access Analyzer
  - NEA
products:
  - access-analyzer
sidebar_label: 'Bulk Import Error: SQL Logic Error Unknown Databas'
tags:
  - troubleshooting-and-errors
title: 'Bulk Import Error: SQL Logic Error Unknown Database Strucmap'
knowledge_article_id: kA0Qk0000001msDKAQ
---

# Bulk Import Error: SQL Logic Error Unknown Database Strucmap

## Symptom

The 2-FSAA Bulk Import job is returning the following error message:

```text
SQL logic error unknown database strucmap.
```

## Cause

This error message is the result of a discrepancy or corruption in the database's structure map. It can be caused by configuration changes or other interruptions during a scan or database import.

## Resolutions

Please try both of the following resolutions. Start with resetting the hosts, and if the error persists, try repairing the database. For both approaches, run the **Bulk Import Maintenance**, targeting the host(s) having the problem.

### Reset the Host(s)

1. Navigate to and select the **2-FSAA Bulk Import** job in the Netwrix Access Analyzer (NEA) Job tree.
   - The exact location in the Job tree can vary based on your deployment.
   - The default location is **Netwrix Access Analyzer (NEA) > Jobs > FileSystem > 0.Collection > 2-FSAA Bulk Import**.
2. Click **Configure > Query > Query properties > Configure**.
   - This opens the File System Access Audit Data Collector Wizard.
3. At the bottom of the wizard, click **Maintenance**.
4. Select the Maintenance type: **_Reset Hosts_**, then click **Next**.
5. Select the hosts that are throwing the error.
6. Click **_Reset Hosts_**.
   - The maintenance should run immediately.
7. After the maintenance run completes, click through the following dialogs: **Continue > Finish > Next**.
8. Ensure that **Import incomplete scan data** is enabled, then click **Finish**.
9. Try running the **FileSystem** collection again.

<a id="repair"></a>
### Repair the SQL Database

1. Navigate to and select the **2-FSAA Bulk Import** job in the Netwrix Access Analyzer (NEA) Job tree.
   - The exact location in the Job tree can vary based on your deployment.
   - The default location is **Netwrix Access Analyzer (NEA) > Jobs > FileSystem > 0.Collection > 2-FSAA Bulk Import**.
2. Click **Configure > Query > Query properties > Configure**.
   - This opens the **File System Access Audit Data Collector Wizard**.
3. At the bottom of the wizard, click **Maintenance**.
4. Select the Maintenance type: **_Repair_**, then click **Next**.
5. Select the hosts that are throwing the error.
6. Click **_Run_**.
   - The maintenance should run immediately.
7. After the maintenance finishes, click through the following dialogs: **Continue > Finish > Next**.
8. Ensure that **Import incomplete scan data** is enabled, then click **Finish**.
9. Try running the **FileSystem** collection again.
