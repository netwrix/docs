---
title: "FS_MostActiveUsers Job"
description: "FS_MostActiveUsers Job"
sidebar_position: 30
---

# FS_MostActiveUsers Job

The FS_MostActiveUsers job is designed to report on the most active users within an environment.

## Analysis Tasks for the FS_MostActiveUsers Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Usage
Statistics** > **FS_MostActiveUsers** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_MostActiveUsers Job](/images/accessanalyzer/12.0/solutions/filesystem/activity/usagestatistics/mostactiveusersanalysis.webp)

The following analysis task is selected by default:

- Last 30 Days – Creates the SA_FS_MostActiveUsers_Last30Days table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis task, the FS_MostActiveUsers job
produces the following pre-configured report:

| Report                           | Description                                                                                                                                                                                                                                                                                                                                 | Default Tags | Report Elements                                                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Users – Last 30 Days | This report identifies the top users for the past 30 days. [Read], [Add], [Update], [Delete], [Permission Change], [Rename] fields reflect the number of unique operations of each type that was performed by the user for this time frame. Unique Folders are the number of distinct folders that have had activity during the time frame. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top users by operation count</li><li>Table – Provides details on the most active users</li></ul> |
