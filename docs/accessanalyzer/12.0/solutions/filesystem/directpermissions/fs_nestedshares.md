---
title: "FS_NestedShares Job"
description: "FS_NestedShares Job"
sidebar_position: 50
---

# FS_NestedShares Job

The FS_NestedShares job is is designed to report on nested shares that have been granted direct
permissions from targeted file servers.

## Analysis Tasks for the FS_NestedShares Job

View the analysis tasks by navigating to the **FileSystem** > **2.Direct Permissions** >
**FS_NestedShares** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_NestedShares Job](/images/accessanalyzer/12.0/solutions/filesystem/directpermissions/nestedsharesanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Identify Nested Shares**

    - Creates an interim processing table in the database for use by downstream analysis and report
      generation
    - Creates the SA_FS_NestedShares_ShareDetails table accessible under the job’s Results node

-   **2. Create function to compare permissions**
-   **3. Analyze Permission Details**

    - Creates the SA_FS_NestedShares_SharePermissions table accessible under the job’s Results node
    - Updates the SA_FS_NestedShares_ShareDetails table accessible under the job’s Results node

-   **4. Host Summary** – Creates the SA_FS_NestedShares_HostSummary table accessible under the job’s
       Results node

In addition to the tables and views created by the analysis tasks, the FS_NestedShares job produces
the following pre-configured report:

| Report        | Description                                                                                                           | Default Tags | Report Elements                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nested Shares | This report identifies where folders are exposed through multiple shares. This may cause issues with unwanted access. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays hosts by folder count</li><li>Table – Provides details on shares</li></ul> |
