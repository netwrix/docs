---
description: >-
  An Activity Auditing (SPAC) scan fails after upgrading Netwrix Access Analyzer
  with an Invalid local SPAA storage version error; follow the steps to update
  the SPAA database schema.
keywords:
  - SPAA
  - SPAC
  - Invalid local storage version
  - SPSEEK
  - SPAA_BulkImport
  - Netwrix Access Analyzer
  - database schema
  - SystemScans
products:
  - access-analyzer
sidebar_label: "Error: Invalid Local Storage Version"
tags: []
title: 'Error: Invalid Local Storage Version'
knowledge_article_id: kA0Qk0000001RUPKA2
---

# Error: Invalid Local Storage Version

## Symptom

After the recent Netwrix Access Analyzer upgrade (`11.6.0.69`), an Activity Auditing (SPAC) scan populates the following error:

```text
Stealthbits.StealthAUDIT.DataCollectors.SPAA.Storage.InvalidStorageVersionException:
Invalid local SPAA storage version. Expected %x& but found %y%.
```

## Cause

The SPAA database schema is outdated and requires an update.

## Resolution

Perform the following steps to update the database schema:

1. Run either the **1-SPSEEK_SystemScans** or **2-SPAA_SystemScans** job at `level 0`. Refer to the following articles for additional information:
   - https://docs.netwrix.com/docs/auditor/10_8
   - https://docs.netwrix.com/docs/auditor/10_8
2. Depending on the previously selected job, run either the **4-SPSEEK_BulkImport** or **5-SPAA_BulkImport** job to update the schema.
3. Run the **3-SPAC_SystemScans** job to verify that the issue is resolved.

## Related Articles

- 0.Collection Job Group — 1-SPSEEK_SystemScans Job · v11.6  
  https://docs.netwrix.com/docs/auditor/10_8

- 0.Collection Job Group — 2-SPAA_SystemScans Job · v11.6  
  https://docs.netwrix.com/docs/auditor/10_8
