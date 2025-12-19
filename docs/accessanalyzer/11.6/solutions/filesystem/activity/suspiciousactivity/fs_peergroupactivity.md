---
title: "FS_PeerGroupActivity Job"
description: "FS_PeerGroupActivity Job"
sidebar_position: 50
---

# FS_PeerGroupActivity Job

The FS_PeerGroupActivity job is designed to report on abnormal activity event information based on
peer group analysis from targeted file servers.

## Analysis Tasks for the FS_PeerGroupActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_PeerGroupActivity** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_PeerGroupActivity Job](/images/accessanalyzer/11.6/solutions/filesystem/activity/suspiciousactivity/peergroupactivityanalysis.webp)

- Summarize Hourly Norms and Deviations – Creates the SA_FS_PeerGroupActivity_Details table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_PeerGroupActivity job
produces the following pre-configured report:

| Report                      | Description                                                                                                                                                                                                                                | Default Tags | Report Elements                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| Unusual Peer Group Activity | This report highlights unusual periods of activity based on peer group analysis. When a user accesses an abnormal amount of data from outside of their own department, the failure of separation of duties can indicate a security threat. | None         | This report is comprised of one element: <ul><li>Table – Provides details on abnormal peer group activity</li></ul> |
