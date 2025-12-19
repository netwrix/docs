---
title: "FS_StaleFileActivity Job"
description: "FS_StaleFileActivity Job"
sidebar_position: 80
---

# FS_StaleFileActivity Job

The FS_StaleFileActivity job is designed to report on user activity event information involving
stale files from targeted file servers.

## Analysis Tasks for the FS_StaleFileActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_StaleFileActivity** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_StaleFileActivity Job](/images/accessanalyzer/12.0/solutions/filesystem/activity/suspiciousactivity/stalefileactivityanalysis.webp)

- Summarize Hourly Norms and Deviations – Creates the SA_FS_StaleFileActivity_Details table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_StaleFileActivity job
produces the following pre-configured report:

| Report                   | Description                                                                                  | Default Tags | Report Elements                                                                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| User Stale File Activity | This report highlights periods of abnormally high activity involving stale shared resources. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays abnormal stale file activity</li><li>Table – Provides details on abnormal stale file activity</li></ul> |
