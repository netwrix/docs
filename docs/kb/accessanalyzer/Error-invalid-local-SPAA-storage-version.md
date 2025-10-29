---
title: "Error: Invalid Local SPAA Storage Version. Expected 11603 but Found 0"
sidebar_label: "Error: Invalid Local SPAA Storage Version. Expected 11603 but Found 0"
description: "Resolve the 'Invalid Local SPAA Storage Version' error in Netwrix Access Analyzer by running the required SPAA or SPSEEK System Scans before executing a SPAC System Scan."
keywords: [SPAA, SPAC, SPSEEK, InvalidStorageVersionException, Netwrix, Access Analyzer, system scan, storage version, error 11603]
products: [access-analyzer, enterprise-auditor]
knowledge_article_id: ka0Qk000000GLq5IAG
---

## Related Queries

- "SPAC scan fails with storage version error."
- "Error: InvalidStorageVersionException Expected 11603."

## Symptom

When attempting to run a SPAC System Scan in Netwrix Access Analyzer (formerly Enterprise Auditor), the following error occurs:

```text
Stealthbits.StealthAUDIT.DataCollectors.SPAA.Storage.InvalidStorageVersionException: Invalid local spaa storage version. Expected 11603 but found 0.
```

## Cause

This error occurs when a SPAC System Scan is run *before* a SPAA System Scan or SPSEEK System Scan has been executed.
These scans are required to initialize and version the local SPAA storage.
If neither scan has been completed, the system reports an invalid version of `0`.

## Resolution

To resolve the issue:

1. Run a **SPAA System Scan** or a **SPSEEK System Scan**
2. After the scan completes successfully, run the **SPAC System Scan** again.

---
