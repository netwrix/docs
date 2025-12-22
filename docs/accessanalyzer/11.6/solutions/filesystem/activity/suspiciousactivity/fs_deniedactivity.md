---
title: "FS_DeniedActivity Job"
description: "FS_DeniedActivity Job"
sidebar_position: 10
---

# FS_DeniedActivity Job

The FS_DeniedActivity job is designed to report on denied activity event information from targeted
file servers.

## Analysis Tasks for the FS_DeniedActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_DeniedActivity** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_DeniedActivity Job](/images/accessanalyzer/11.6/solutions/filesystem/activity/suspiciousactivity/deniedactivityanalysis.webp)

The following analysis tasks are selected by default:

- Denied Activity Hourly Summary – Creates the SA_FS_DeniedActivity_HourlySummary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_DeniedActivity job produces
the following pre-configured report:

| Report          | Description                                                                          | Default Tags | Report Elements                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Denied Activity | This report highlights high periods of denied user activity during the past 30 days. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top denied periods for the last 30 days</li><li>Table – Provides details on denied activity</li></ul> |
