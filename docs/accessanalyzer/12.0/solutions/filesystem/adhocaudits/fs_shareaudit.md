---
title: "FS_ShareAudit Job"
description: "FS_ShareAudit Job"
sidebar_position: 10
---

# FS_ShareAudit Job

The FS_ShareAudit Job is designed to report on shares from targeted file servers based on user
input.

## Analysis Tasks for the FS_ShareAudit Job

View the analysis tasks by navigating to the FileSystem > Ad Hoc Audits > FS_ShareAudit > Configure
node and select Analysis.

:::warning
Do not modify or deselect the last three selected analysis tasks. The analysis tasks
are preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/filesystem/adhocaudits/shareauditanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Identify Selected Shares** – Creates the SA_FS_ShareAudit_ShareSummary table accessible under
       the job’s Results node
    - Parameter is blank by default.
    - #UNC parameter must be configured by clicking Analysis Configuration with this task selected
      then selecting the #UNC table in the SQL Script Editor window and clicking **Edit Table**.
        - This brings up the Edit Table window where the user can manually enter UNC paths of each
          share to be audited or upload a CSV file containing one row for each share to be audited.
          See the [SQLscripting Analysis Module](/docs/accessanalyzer/12.0/admin/analysis/sqlscripting.md) section
          for additional information.
    - List one shared folder per row, using the format: \\HOST\SHARE.
-   **2. Direct Permissions** – Creates the SA_FS_ShareAudit_DirectPermissions table accessible under
       the job’s Results node
-   **3. Calculate Effective Access** – Creates the SA_FS_ShareAudit_ShareAccess table accessible under
       the job’s Results node
-   **4. Identify Broken Inheritance**
    - Creates a temporary table in the database for use by downstream analysis and report
      generation.
    - Creates the SA_FS_ShareAudit_UniqueTrustees table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the FS_ShareAudit Job produces
the following pre-configured report:

| Report      | Description                                                          | Default Tags | Report Elements                                                                                                                                                                                                                                                      |
| ----------- | -------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Share Audit | This report displays permission information for the selected shares. | None         | This report is comprised of four elements: <ul><li>Table – Provides details on selected shares</li><li>Table – Provides details on permissions</li><li>Table – Provides details on effective access</li><li>Table – Provides details on broken inheritance</li></ul> |
