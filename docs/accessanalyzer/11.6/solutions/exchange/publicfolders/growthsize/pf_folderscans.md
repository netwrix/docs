---
title: "Collection > PF_FolderScans Job"
description: "Collection > PF_FolderScans Job"
sidebar_position: 10
---

# Collection > PF_FolderScans Job

The PF_FolderScans job is comprised of data collection that focuses on collecting sizing information
for each public folder.

![Collection > PF_FolderScans Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/exchange/publicfolders/growthsize/collectionjobstree.webp)

The PF_FolderScans job is located in the Collection job group.

## Queries for the PF_FolderScans Job

The PF_FolderScans job uses the ExchangePS Data Collector.

![Queries for the PF_FolderScans Job](/images/accessanalyzer/11.6/solutions/exchange/publicfolders/growthsize/folderscansquery.webp)

The following query is included in the PF_FolderScans Job:

- PF Size & Msg Counts – Collects public folder size and message counts

    - By default set to search all public folders. It can be scoped.
    - See the
      [Scope the ExchangePS Data Collector](/docs/accessanalyzer/11.6/solutions/exchange/casmetrics/ex_aspolicies.md#scope-the-exchangeps-data-collector)
      topic for additional information

## Analysis Tasks for the PF_FolderScans Job

View the analysis task by navigating to the **Exchange** > **5. Public Folders** > **Growth and
Size** > **Collection** > **PF_FolderScans** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the PF_FolderScans Job](/images/accessanalyzer/11.6/solutions/exchange/publicfolders/growthsize/folderscansanalysis.webp)

The following analysis task is selected by default:

- Strip Replicas from Reports – Removes duplicates from reports
