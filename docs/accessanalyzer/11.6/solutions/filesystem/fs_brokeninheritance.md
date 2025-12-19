---
title: "3.Broken Inheritance > FS_BrokenInheritance Job"
description: "3.Broken Inheritance > FS_BrokenInheritance Job"
sidebar_position: 50
---

# 3.Broken Inheritance > FS_BrokenInheritance Job

The FS_BrokenInheritance job is designed to report on resources with Broken Inheritance from
targeted file servers.

![3.Broken Inheritance > FS_BrokenInheritance Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/filesystem/brokeninheritancejobstree.webp)

The FS_BrokenInheritance job is located in the 3.Broken Inheritance job group.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/admin/jobs/job/overview.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The FS_BrokenInheritance job has the following configurable parameter:

- Only analyze folders with changed permissions – Set a value of `1` or `2` to select if only
  folders with modified permissions are analyzed:

    - 1 – Only analyze resources with changed permissions from parent
    - 2 – Analyze all resources regardless of permission changes between parent and child

See the
[Analysis Tasks for the FS_BrokenInheritance Job](#analysis-tasks-for-the-fs_brokeninheritance-job)
topic for additional information.

## Analysis Tasks for the FS_BrokenInheritance Job

View the analysis tasks by navigating to the **FileSystem** > **3.Broken Inheritance** >
**FS_BrokenInheritance** > **Configure** node and select **Analysis**.

:::warning
Most of these analysis tasks are preconfigured and should not be modified and or
deselected. There are some that are deselected by default, as they are for troubleshooting purposes.
:::


![Analysis Tasks for the FS_BrokenInheritance Job](/images/accessanalyzer/11.6/solutions/filesystem/brokeninheritanceanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Analyze Broken Inheritance**

    - Creates an interim processing table in the database for use by downstream analysis and report
      generation
    - Creates the SA_FS_BrokenInheritance_UniqueTrustees table accessible under the job's Results
      node
    - Creates the SA_FS_BrokenInheritance_UniqueTrusteesPivot table accessible under the job's
      Results node

-   **2. Choose to analyze only folders with modified permissions** – Creates an interim processing
       table in the database for use by downstream analysis and report generation

    - By default set to only analyze resources with changed permissions from parent
    - Can be modified to analyze all resources regardless of permission changes between parent and
      child. See the [Parameter Configuration](#parameter-configuration) topic for additional
      information.
    - Alternatively, this can be set by modifying the `@FILTER_TO_CHANGED_RESOURCES` parameter. See
      the
      [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
      topic for additional information.

-   **3. Determine Permission Changes** – Creates an interim processing table in the database for use by
       downstream analysis and report generation
-   **4. Analyze Trustee Differences** – Creates an interim processing table in the database for use by
       downstream analysis and report generation
-   **5. Inheritance Types. Categorizes Permission Changes** – Creates an interim processing table in
       the database for use by downstream analysis and report generation
-   **6. Summarize by Share** – Creates an interim processing table in the database for use by
       downstream analysis and report generation

The following analysis tasks are deselected by default:

-   **7. Bring Table to Console - Unique trustees** – Restores the
       SA_FS_BrokenInheritance_UniqueTrustees table to be visible under the job's Results node
-   **8. Bring Table to Console - Trustees pivot** – Restores the
       SA_FS_BrokenInheritance_UniqueTrusteesPivot table to be visible under the job's Results node

In addition to the tables and views created by the analysis tasks, the FS_BrokenInheritance job
produces the following pre-configured reports:

| Report                                                   | Description                                                                                                                                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                                                 |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Broken Inheritance by Share (Broken Inheritance Details) | Broken inheritance between resources can lead to incorrect access for users, either overprovisioning them, or locking them out of critical data. This report identifies the shares and folders with the most permission changes from the parent resource. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top five shares by permission changes</li><li>Table – Provides details on folders</li><li>Table – Provides details on shares</li></ul> |
| Unique Trustees                                          | This report identifies permission changes between folders. These trustees have been either removed, added, or had their rights adjusted.                                                                                                                  | None         | This report is comprised of one element: <ul><li>Table – Provides details on unique trustees</li></ul>                                                                                                          |
