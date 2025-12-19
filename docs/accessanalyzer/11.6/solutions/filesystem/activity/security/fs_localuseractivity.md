---
title: "FS_LocalUserActivity Job"
description: "FS_LocalUserActivity Job"
sidebar_position: 30
---

# FS_LocalUserActivity Job

The FS_LocalUserActivity job is designed to report on local user activity event information from
targeted file servers.

## Analysis Tasks for the LocalUserActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Security** >
**FS_LocalUserActivity** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the LocalUserActivity Job](/images/accessanalyzer/11.6/solutions/filesystem/activity/security/localuseractivityanalysis.webp)

-   **1. Local User Activity Details** – Creates the SA_FS_LocalUserActivity_Details table accessible
       under the job’s Results node
-   **2. Top Local User Accounts** – Creates the SA_FS_LocalUserActivity_TopUsers table accessible under
       the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_LocalUserActivity job
produces the following pre-configured report:

| Report              | Description                                                      | Default Tags | Report Elements                                                                                                                                                                         |
| ------------------- | ---------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local User Activity | This report identifies local accounts with file system activity. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top local user account activity (last 30 days)</li><li>Table – Provides details on local user activity</li></ul> |
