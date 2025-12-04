---
description: >-
  Lists the steps to prepare the Netwrix Access Analyzer database for console
  migration, including an SQL script to update host names when restoring the
  console to a new server.
keywords:
  - Netwrix Access Analyzer
  - console migration
  - database preparation
  - host management
  - SQL script
  - HostMaster_SANodeFilter
  - HostListsTbl
  - QueryTbl
  - Access Analyzer migration
products:
  - access-analyzer
  - access_info_center
sidebar_label: 'Console Migration Workflow: Step 2—Prepare the Dat'
tags:
  - installation-and-upgrades
title: 'Console Migration Workflow: Step 2—Prepare the Database'
knowledge_article_id: kA0Qk0000002OpRKAU
---

# Console Migration Workflow: Step 2—Prepare the Database

> **NOTE:** Return to the main workflow page via this link: [Console Migration Workflow](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow.md).
>
> Return to the previous section via this link: [Console Migration Workflow: Step 1—Staging the Backup](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow-step-1-staging-the-backup.md).
>
> Proceed to the next section via this link: [Console Migration Workflow: Step 3—Rebuild the Console](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow-step-3-rebuild-the-console.md).

## Overview

This article lists the steps to prepare the Netwrix Access Analyzer database for the Access Analyzer Migration.

## New Access Analyzer Console Server Host Name

For Host Management and Host List Replication, follow these steps to restore the backup of the Access Analyzer console to a new server.

> **IMPORTANT:** This only applies if the new server name differs from the old server name; otherwise, skip to [Access Analyzer Console Migration Workflow: Step 3 - Rebuild the Console](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow-step-3-rebuild-the-console.md).

On the Access Analyzer Database, copy the script below and configure the `OldServer` and `NewServer` values (lines 5 & 6, below), then run:

1. Copy the SQL script shown below.
2. Edit the `Set @OHost = 'OldServer'` and `Set @NHost = 'NewServer'` lines to match your old and new server host names. Leave the apostrophes.
3. Run the script against the Access Analyzer database.

```sql
Declare @OHost varchar (128)
Declare @NHost varchar (128)

-- Configure the correct server names below. Leave the apostrophes!
Set @OHost = 'OldServer'
Set @NHost = 'NewServer'

Update [HostMaster_SANodeFilter]
SET SA_Node = @NHost
Where SA_Node = @OHost;

Update [HostListsTbl]
SET SA_Node = @NHost
Where SA_Node = @OHost
and ListID not in (Select ListID from [HostListsTbl] where SA_Node = @NHost);

Update [QueryTbl]
SET SA_Node = @NHost
Where SA_Node = @OHost;
```

## Related Links

- [Console Migration Workflow](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow.md)
- [Console Migration Workflow: Step 1—Staging the Backup](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow-step-1-staging-the-backup.md)
- [Console Migration Workflow: Step 3—Rebuild the Console](/docs/kb/accessanalyzer/installation-and-upgrades/console-migration-workflow-step-3-rebuild-the-console.md)
