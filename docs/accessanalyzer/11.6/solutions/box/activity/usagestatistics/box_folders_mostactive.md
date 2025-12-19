---
title: "Box_Folders_MostActive Job"
description: "Box_Folders_MostActive Job"
sidebar_position: 10
---

# Box_Folders_MostActive Job

The Box_Folders_MostActive Job identifies long-term trends of activity and usage statistics across
your Box environment, highlighting conditions such as most active or stale folders.

## Analysis Tasks for the Box_Folders_MostActive Job

Navigate to **Box** > **1.Activity** > **Usage Statistics** > **Box_Folders_MostActive** >
**Configure** node and select **Analysis** to view analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Box_Folders_MostActive Job](/images/accessanalyzer/11.6/solutions/box/activity/usagestatistics/foldersmostactiveanalysis.webp)

The following analysis task is selected by default:

- Most Active Folders – Creates the Box_Folders_MostActive table accessible under the job’s Results
  node

In addition to the tables created by the analysis tasks, the Box_Folders_MostActive Job produces the
following pre-configured report:

| Report              | Description                                                                                       | Default Tags | Report Elements                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Folders | This report highlights the most active folder in the target Box environment over the last 30 days | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays last 30 days of most active folders</li><li>Table – Provides summary of most active folders</li></ul> |
