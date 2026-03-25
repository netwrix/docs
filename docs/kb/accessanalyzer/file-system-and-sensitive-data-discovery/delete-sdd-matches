---
description: >-
  Clear stored SDD match data in Netwrix Access Analyzer by disabling match storage and running a SQL update against the SA_FSDLP_MatchHits table.
keywords:
  - SDD matches
  - SA_FSDLP_MatchHits
  - clear match data
  - SEEK System Scan
  - sensitive data removal
  - FS_SDD_DELETE
  - Access Analyzer
products:
  - access-analyzer
sidebar_label: Clearing Stored File System SDD Match Data
title: 'Clearing Stored File System SDD Match Data'
---

# Clearing Stored File System SDD Match Data

## Related Queries

- "Delete SDD matches"
- "Clear sensitive data from SA_FSDLP_MatchHits"
- "Remove stored match data Access Analyzer"
- "SDD matches still showing after scan"

## Overview

This article explains how to clear stored File System SDD match data from the database. This approach removes the sensitive data captured in match results while keeping the scan results themselves, such as match counts and criteria.

## Instructions

### Excluding Sensitive Data from the Next Collection
1. Open the **SEEK System Scan** query configuration.
2. On the _Sensitive Data Settings_ tab, uncheck the option **Store discovered sensitive data** to prevent new match data from being stored.

![Disabling SDD match storage in SEEK System Scan configuration](./../0-images/fsaa-store-discovered-sdd.webp)

### Clearing Previously-Stored Match Hits

In the Netwrix Access Analyzer SQL database, run the following SQL statement:

```sql
UPDATE SA_FSDLP_MatchHits
SET MatchData = NULL,
    MatchPrefix = NULL,
    MatchSuffix = NULL
```

### Removing All SDD Matches

Use the `FS_SDD_DELETE` instant job to remove SDD matches entirely:
- **NAA v12.0:** [InstantJobs\FS_SDD_DELETE](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/jobs/instantjobs/fs_sdd_delete)
- **NAA v11.6:** [InstantJobs\FS_SDD_DELETE](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/jobs/instantjobs/fs_sdd_delete)

## Related Link
- [Configure the (SEEK) File System Scan Query](https://docs.netwrix.com/docs/accessanalyzer/12_0/solutions/filesystem/collection/seek_system_scans#configure-the-seek-file-system-scan-query)
