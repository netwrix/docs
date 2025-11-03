---
title: "Error: Invalid Local SPAA Storage Version. Expected 11603 but Found 0"
sidebar_label: "Error: Invalid Local SPAA Storage Version. Expected 11603 but Found 0"
description: "Resolves the 'Invalid local SPAA storage version' error that occurs when running a SPAC System Scan in Netwrix Access Analyzer by updating the SPAA database schema through the appropriate System Scan and Bulk Import jobs."
keywords:
  - SPAA
  - SPAC
  - System Scan
  - Bulk Import
  - InvalidStorageVersionException
  - SharePoint
  - schema update
  - Netwrix Access Analyzer
  - Netwrix Enterprise Auditor
  - database version
  - upgrade issue
  - SPSEEK
products:
  - enterprise_auditor
knowledge_article_id: kA0Qk0000001RUPKA2
---

# Error: Invalid Local SPAA Storage Version When Running SPAC System Scan

## Symptom

When attempting to run a **SPAC System Scan** in **Netwrix Access Analyzer** (formerly Enterprise Auditor) after upgrading, the following error occurs:

```text
Stealthbits.StealthAUDIT.DataCollectors.SPAA.Storage.InvalidStorageVersionException:
Invalid local SPAA storage version. Expected 11603 but found 0.
```

## Cause

The SPAA database schema is outdated and requires an update. This error occurs when a SPAC System Scan* is run *before* a SPAA System Scan or SPSEEK System Scan has been executed.

## Resolution

Perform the following steps to update the database schema:

1. **Run a System Scan job at level 0**
   - Run either the **1-SPSEEK_SystemScans** or **2-SPAA_SystemScans** job.
   - Refer to the following documentation for details:
     - [1-SPSEEK_SystemScans Job ⸱ Netwrix Docs 🡥](https://docs.netwrix.com/docs/accessanalyzer/12_0/solutions/sharepoint/collection/spseek_systemscans)
     - [2-SPAA_SystemScans Job ⸱ Netwrix Docs 🡥](https://docs.netwrix.com/docs/accessanalyzer/12_0/solutions/sharepoint/collection/spaa_systemscans)

2. **Run a Bulk Import job to update the schema**
   - Depending on the job used in step 1, run either the **4-SPSEEK_BulkImport** or **5-SPAA_BulkImport** job.

3. **Verify the issue is resolved**
   - Run the **3-SPAC_SystemScans** job to confirm that the error no longer appears.

## Related Links

- [1-SPSEEK_SystemScans Job](https://docs.netwrix.com/docs/accessanalyzer/12_0/solutions/sharepoint/collection/spseek_systemscans)
- [2-SPAA_SystemScans Job](https://docs.netwrix.com/docs/accessanalyzer/12_0/solutions/sharepoint/collection/spaa_systemscans)
