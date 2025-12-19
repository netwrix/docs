---
title: "Box_FirstTimeFolderAccess Job"
description: "Box_FirstTimeFolderAccess Job"
sidebar_position: 20
---

# Box_FirstTimeFolderAccess Job

The Box_FirstTimeFolderAccess Job identifies the first time a user performs any activity on a folder
or a file over the past 30 days.

## Analysis Tasks for the Box_FirstTimeFolderAccess Job

View the analysis tasks by navigating to the **Box** > **1.Activity** > **Suspicious Activity** >
**Box_FirstTimeFolderAccess** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Box_FirstTimeFolderAccess Job](/images/accessanalyzer/11.6/solutions/box/activity/suspiciousactivity/firsttimefolderaccessanalysis.webp)

The following analysis tasks are selected by default:

- First Time Folder Access – Creates the Box_FirstTimeFolderAccess_Details table accessible under
  the job’s Results node
- First Time Folder Access Last 30 Days – Creates an interim processing table in the database for
  use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box_FirstTimeFolderAccess Job produces
the following pre-configured report:

| Report                   | Description                                                           | Default Tags | Report Elements                                                                                                                                                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| First Time Folder Access | This report highlights details for first time folder access per user. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays last 30 days of first time folder access</li><li>Table – Provides summary of last 30 days of first time folder access</li><li>Table – Provides details on first time folder access</li></ul> |
