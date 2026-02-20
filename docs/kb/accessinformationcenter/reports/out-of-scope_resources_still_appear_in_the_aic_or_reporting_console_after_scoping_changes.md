---
description: >-
  Learn why out-of-scope File System resources may continue to appear in the Access Information Center (AIC) or reporting console after scoping changes, and how to remove the retained data from the database.
keywords:
  - File System resources
  - Access Information Center
  - AIC
  - scoping rules
  - FSAA scan
  - SEEK scan
  - Netwrix Access Analyzer
  - drop file system data
  - reporting console
products:
  - access-analyzer
  - access-information-center
sidebar_label: "Out-of-Scope Resources in AIC"
title: "Out-of-Scope Resources Still Appear in the AIC or Reporting Console After Scoping Changes"
knowledge_article_id: kA0Qk0000002mDRKAY
---

# Out-of-Scope Resources Still Appear in the AIC or Reporting Console After Scoping Changes

## Symptom

File System resources that were previously scanned and imported continue to appear in the database, even after scoping options have been updated to exclude them. These resources do not appear in new FSAA or SEEK scans but still exist in the backend database, causing them to remain visible in the Access Information Center (AIC) and reports.

## Cause

Scoping options are applied at the time of a scan and are used to determine which resources are included or excluded in that specific FSAA or SEEK scan. If a resource was imported before the scoping rules were put in place, it remains in the database, regardless of whether it is currently in scope.

## Resolution

If you no longer want to retain or see data for out-of-scope resources:

1. **Delete all File System data** for the specific host from the database.  
   See the following article for instructions to drop data for a specific file server:  
   [How to Drop File System Data from Netwrix Access Analyzer](../../accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data)

2. **Rescan the host** with the updated scoping rules in place.  
   This ensures that only resources matching the current scoping criteria are imported and retained going forward.

> **NOTE:** While out-of-scope resources remain in the database, they are not included in future scans or updated during bulk imports unless they are brought back into scope.

## Related Link

- [How to Drop File System Data from Netwrix Access Analyzer](../../accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data)
