---
title: "FS_HourlyShareActivity Job"
description: "FS_HourlyShareActivity Job"
sidebar_position: 30
---

# FS_HourlyShareActivity Job

The FS_HourlyShareActivity job is designed to report on the highest hourly activity event
information from targeted file servers broken down by share.

## Analysis Tasks for the FS_HourlyShareActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_HourlyShareActivity** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_HourlyShareActivity Job](/images/accessanalyzer/12.0/solutions/filesystem/activity/suspiciousactivity/hourlyshareactivityanalysis.webp)

The following analysis task is selected by default:

- Summarize hourly norms and deviations – Creates the SA_FS_HourlyShareActivity_Deviations table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_HourlyShareActivity job
produces the following pre-configured report:

| Report                 | Description                                                                                       | Default Tags | Report Elements                                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unusual Share Activity | This report will show any outliers in hourly share activity, broken down by day of week and hour. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays abnormal share activity</li><li>Table – Provides details on share activity</li></ul> |
