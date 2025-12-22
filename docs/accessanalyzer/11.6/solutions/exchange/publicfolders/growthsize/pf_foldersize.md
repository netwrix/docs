---
title: "PF_FolderSize Job"
description: "PF_FolderSize Job"
sidebar_position: 30
---

# PF_FolderSize Job

The PF_FolderSize job provides details related to public folder sizing and growth.

## Analysis Tasks for the PF_FolderSize Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** > **Growth and
Size** > **PF_FolderSize** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the PF_FolderSize Job](/images/accessanalyzer/11.6/solutions/exchange/publicfolders/growthsize/foldersizeanalysis.webp)

The following analysis tasks are selected by default:

- 01.Create History Table – Creates the SA_PF_FolderSize_History table, accessible under the job’s
  Results node
- 02.SET HISTORY RETENTION – Sets retention period in months

    - The default is 3 months. It can be modified.
    - See the
      [Exchange History Retention](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#exchange-history-retention)
      topic for additional information

- 03.Latest Run Per Folder – Creates the SA_PF_FolderSize_Latest table, accessible under the job’s
  Results node
- 04.30 Day Growth – Creates the SA_PF_FolderSize_Growth table, accessible under the job’s Results
  node

The following analysis task clears table data from data collection and analysis jobs. This analysis
task should remain cleared unless specifically needed:

:::warning
Do not select the **00. Delete all Historical Data** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.
:::


- 00.Delete all Historical Data
    - See the
      [Troubleshooting Data Collection](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#troubleshooting-data-collection)
      topic for additional information

In addition to the tables and views created by the analysis tasks, the PF_FolderSize job produces
the following pre-configured report:

| Report                        | Description                                                                   | Default Tags | Report Elements                                                                                                                                                    |
| ----------------------------- | ----------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Public Folder Size and Growth | This report shows the largest public folders and percent change over 30 days. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays largest public folders</li><li>Table – Provides details on largest public folders</li></ul> |
