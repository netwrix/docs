---
title: "FS_LocalUsersAndGroups Job"
description: "FS_LocalUsersAndGroups Job"
sidebar_position: 30
---

# FS_LocalUsersAndGroups Job

The FS_LocalUsersAndGroups job is designed to report on local users and groups that have been
granted direct permissions on resources from targeted file servers.

## Analysis Tasks for the FS_LocalUsersAndGroups Job

View the analysis tasks by navigating to the **FileSystem** > **2.Direct Permissions** >
**FS_LocalUsersAndGroups** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_LocalUsersAndGroups Job](/images/accessanalyzer/12.0/solutions/filesystem/directpermissions/localusersandgroupsanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Local Groups Resource Details** – Creates the
       SA_FS_LocalUsersAndGroups_LocalGroupResourceDetails table accessible under the job’s Results
       node
-   **2. Local Groups** – Creates an interim processing table in the database for use by downstream
       analysis and report generation
-   **3. Local Group Details** – Creates an interim processing table in the database for use by
       downstream analysis and report generation

In addition to the tables and views created by the analysis task, the FS_LocalUsersAndGroups job
produces the following pre-configured report:

| Report                 | Description                                                                                                                           | Default Tags | Report Elements                                                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Local Users And Groups | This report identifies at the server level, how many local users and groups have direct ACLs, followed by details at the share level. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top five servers with local users and groups by affected folders</li><li>Table – Provides details on local users and groups</li></ul> |
