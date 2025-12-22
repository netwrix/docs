---
title: "2-FSAA Bulk Import Job"
description: "2-FSAA Bulk Import Job"
sidebar_position: 70
---

# 2-FSAA Bulk Import Job

The 2-FSAA Bulk Import job is designed to import collected access information from the targeted file
servers.

## Query for the 2-FSAA Bulk Import Job

The Bulk import query uses the FSAA Data Collector and has been preconfigured to use the File system
access/permission auditing Bulk import category.

![Query for the 2-FSAA Bulk Import Job](/images/accessanalyzer/12.0/solutions/filesystem/collection/fsaabulkimportquery.webp)

- Bulk import – Imports scan data into SQL Server

    - Typically, this query is not modified. See the
      [FileSystemAccess Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/overview.md) topic for
      information on when this query should be modified.

## Analysis Tasks for the 2-FSAA Bulk Import Job

View the analysis tasks by navigating to the **FileSystem** > **0.Collection** > **2-FSAA Bulk
Import** > **Configure** node and selecting **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the 2-FSAA Bulk Import Job](/images/accessanalyzer/12.0/solutions/filesystem/collection/fsaabulkimportanalysis.webp)

The following analysis tasks are selected by default:

- Update Statistics – Improves performance on the FSAA tables
- Resolve links – Resolves DFS links in standard tables

The following analysis task is deselected by default:

- Nasuni – Resolves links for Nasuni Hosts
