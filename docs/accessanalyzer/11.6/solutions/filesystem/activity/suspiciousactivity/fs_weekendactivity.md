---
title: "FS_WeekendActivity Job"
description: "FS_WeekendActivity Job"
sidebar_position: 100
---

# FS_WeekendActivity Job

The FS_WeekendActivity job is comprised of analysis and reports which use the data collected by the
**0.Collection** job group to provide information on weekend file server activity and the user
accounts which perform the most weekend activity. Best practices often dictate monitoring of weekend
activity for potential security concerns.

## Analysis Tasks for the FS_WeekendActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_WeekendActivity** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_WeekendActivity Job](/images/accessanalyzer/11.6/solutions/filesystem/activity/suspiciousactivity/weekendactivityanalysis.webp)

The following analysis tasks are selected by default:

- Weekend Activity – Creates the SA_FS_WeekendActivity_Details table accessible under the job’s
  Results node
- User Summary – Creates the SA_FS_WeekendActivity_UserSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the FS_WeekendActivity job
produces the following pre-configured report:

| Report                                          | Description                                                               | Default Tags | Report Elements                                                                                                                                                                                |
| ----------------------------------------------- | ------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weekend Activity (Most Active Users on Weekend) | This report shows users who are active on the weekend inside file shares. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays weekend share activity</li><li>top 5 users</li><li>Table – Provides details on weekend share activity by user</li></ul> |
