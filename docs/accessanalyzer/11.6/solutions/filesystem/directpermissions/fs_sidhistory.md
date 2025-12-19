---
title: "FS_SIDHistory Job"
description: "FS_SIDHistory Job"
sidebar_position: 60
---

# FS_SIDHistory Job

The **2.Direct Permissions** > **FS_SIDHistory** job is designed to report on trustees that have a
historical SID that has been granted direct permissions on resources from targeted file servers.

## Analysis Tasks for the FS_SIDHistory Job

View the analysis tasks by navigating to the **FileSystem** > **2.Direct Permissions** >
**FS_SIDHistory** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_SIDHistory Job](/images/accessanalyzer/11.6/solutions/filesystem/directpermissions/sidhistoryanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Find ACEs Through SID History**

    - Creates the SA_FS_SIDHistory_Details table accessible under the job’s Results node
    - Creates the SA_FS_SIDHistory_TrusteeDetails table accessible under the job’s Results node

-   **2. Host Rollups** – Creates the SA_FS_SIDHistory_HostSummary table accessible under the job’s
       Results node
-   **3. Expose SID Details View** – Makes the SA_FS_SIDHistory_TrusteeDetails table visible under the
       job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_SIDHistory job produces
the following pre-configured report:

| Report               | Description                                                                    | Default Tags | Report Elements                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SID History Overview | This report identifies any applied ACE which utilizes a trustee's SID history. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays the top 5 hosts by affected folders</li><li>Table – Provides details on permissions</li><li>Table – Provides details on trustees</li></ul> |
