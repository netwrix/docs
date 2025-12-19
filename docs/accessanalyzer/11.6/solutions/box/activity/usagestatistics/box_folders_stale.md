---
title: "Box_Folders_Stale Job"
description: "Box_Folders_Stale Job"
sidebar_position: 20
---

# Box_Folders_Stale Job

The Box_Folders_Stale Job identifies the last time activity occurred for each folder in the Box
environment, highlighting stale folders which have not had activity in the last 30 days. These
folders can be subject to cleanup or consolidation.

## Analysis Tasks for the Box_Folders_Stale Job

Navigate to **Box** > **1.Activity** > **Usage Statistics** > **Box_Folders_Stale** > **Configure**
node and select **Analysis** to view analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Box_Folders_Stale Job](/images/accessanalyzer/11.6/solutions/box/activity/usagestatistics/foldersstaleanalysis.webp)

The following analysis tasks are selected by default:

- Stale Folder Details – Creates the Box_Folders_Stale table accessible under the job’s Results node
- No Activity – Creates the Box_Folders_NoActivity table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box_Folders_Stale Job produces the
following pre-configured report:

| Report        | Description                                                                                | Default Tags | Report Elements                                                                                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Folders | This report highlights stale resources in the target Box environment over the last 30 days | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top 5 stale folders</li><li>Table – Provides summary of folders with no activity</li><li>Table – Provides details on stale folders</li></ul> |
