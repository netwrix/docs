---
title: "FS_HighestHourlyActivity Job"
description: "FS_HighestHourlyActivity Job"
sidebar_position: 20
---

# FS_HighestHourlyActivity Job

The FS_HighestHourlyActivity job is designed to report on the highest hourly activity event
information from targeted file servers broken down by user.

## Analysis Tasks for the FS_HighestHourlyActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_HighestHourlyActivity** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_HighestHourlyActivity Job](/images/accessanalyzer/12.0/solutions/filesystem/activity/suspiciousactivity/highesthourlyactivityanalysis.webp)

The following analysis task is selected by default:

- Users Ranked – Creates the SA_FS_HighestHourlyActivity_UsersRanked table accessible under the
  job’s Results node

The following analysis task is deselected by default:

- Create notifications view – Restores the SA_FS_HighestHourlyActivity_Last24Hours_NOTIFICATION view
  to be visible under the job’s Results node

The Notification analysis task is an optional analysis task which requires configuration before
enabling it. The following analysis task is deselected by default:

- Hour Activity Notification – Alerts when large amounts of activity for a user have occurred within
  an hour

    - Add recipients, notification subject, and email content
    - See the
      [Configure the Notification Analysis Task](/docs/accessanalyzer/12.0/solutions/filesystem/activity/forensics/fs_deletions.md#configure-the-notification-analysis-task)
      topic for additional information

In addition to the tables and views created by the analysis tasks, the FS_HighestHourlyActivity job
produces the following pre-configured report:

| Report                | Description                                                                                                                            | Default Tags | Report Elements                                                                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unusual User Activity | This report identifies user accounts and time ranges where there was the largest and widest amount of activity across the file system. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays abnormal user activity</li><li>Table – Provides details on hourly user activity</li></ul> |
