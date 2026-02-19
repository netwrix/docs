---
description: >-
  This article explains how out-of-scope File System resources continue to appear in the Access Information Center (AIC) and reporting console after scoping changes, along with the steps to resolve this issue.
keywords:
  - File System resources
  - Access Information Center
  - scoping changes
sidebar_label: Out-of-Scope Resources in AIC
tags:
  - reports-and-web-console
title: "Out-of-Scope Resources Still Appear in the AIC or Reporting Console After Scoping Changes"
knowledge_article_id: kA0Qk0000002mDRKAY
products:
  - access-analyzer
  - access-information-center
---

# Out-of-Scope Resources Still Appear in the AIC or Reporting Console After Scoping Changes

## Symptom

File System resources that were previously scanned and imported continue to appear in the database, even after scoping options have been updated to exclude them. These resources do not show up in new FSAA/SEEK scans but still exist in the backend database, causing them to still show in the Access Information Center (AIC) and reports.

## Cause

Scoping options are applied at the time of a scan and are used to determine which resources are included/excluded in that specific FSAA/SEEK scan. If a resource was imported before the scoping rules were put in place, it remains in the database, regardless of whether it is currently in scope.

## Resolution

If you no longer want to retain or see data for out-of-scope resources:

1. **Delete all File System data** for the specific host from the database.
   - See the following article for instructions to drop data for a specific file server: [How to Drop File System Data from Netwrix Access Analyzer](/docs/kb/accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data.md).

2. **Rescan the host** with the updated scoping rules in place.
   - This will ensure that only resources matching the current scoping criteria are imported and retained going forward.

> **NOTE:** While out-of-scope resources remain in the database, they will not be included in future scans or updated during bulk imports unless brought back into scope.

## Related Link

- [How to Drop File System Data from Netwrix Access Analyzer](/docs/kb/accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data.md)