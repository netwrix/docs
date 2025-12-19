---
description: >-
  Explains why the warning 'DLPEX database does not exist' appears during SEEK Bulk Import and how to resolve it by verifying SEEK Scan completion and DLPEX database availability.
title: "SEEK Bulk Import Warning: DLPEX Database Does Not Exist"
sidebar_label: "SEEK Bulk Import Warning: DLPEX Database Does Not Exist"
keywords:
  - SEEK
  - DLPEX
  - bulk import
  - T2 database
  - data classification
  - sensitive data
  - SEEK Scan
  - import warning
  - Netwrix Access Analyzer
  - Netwrix Enterprise Auditor
  - scan failure
  - missing database
products: [enterprise_auditor, access_analyzer]
knowledge_article_id: kA0Qk0000003BdFKAU
---

## Related Queries

- "SEEK Bulk Import error DLPEX database does not exist."
- "No sensitive data to import SEEK."
- "SEEK import warning T2 not found."
- "SEEK or SDD scan ran, but import fails."

## Symptom

When running a SEEK Bulk Import, the following warning is displayed:

```text
WARNING | DLPEX database does not exist, there is no data to import.
```

Despite the warning, the import process completes without any imported data.

## Cause

This warning indicates that the system attempted to import sensitive data (T2) from a host that does not have the required DLPEX database.
This can occur due to one of the following reasons:

- **Unscanned hosts in the import list:** One or more hosts included in the bulk import were not scanned using SEEK Scan, and therefore, no DLPEX (T2) database was created.
- **Scan failures:** The host experienced a catastrophic error during the SEEK Scan, which prevented the creation of the sensitive data (T2) database.

> **NOTE:**
> If the import runs and simply finds no new data (but the database exists), no warning is shown and the import completes successfully.
> The warning only appears if the expected DLPEX database is missing entirely.

## Resolution

To resolve this warning, follow these steps:

1. **Review the host list**
   - Confirm that all hosts listed in the SEEK Bulk Import are being scanned via SEEK Scan.
   - Remove any hosts from the list that are not currently scanned.

2. **Check scan results**
   - Investigate SEEK Scan logs for any failed scans.
   - Look for errors indicating that the DLPEX or T2 database could not be created.

3. **Rerun the scan**
   - Rerun the SEEK Scan on the affected hosts to generate the T2 database.

4. **Retry the bulk import**
   - Once scans have completed successfully and the DLPEX databases exist, rerun the SEEK Bulk Import.
