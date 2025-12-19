---
title: "FS_MissingFullControl Job"
description: "FS_MissingFullControl Job"
sidebar_position: 40
---

# FS_MissingFullControl Job

The FS_MissingFullControl job is designed to report on resources from targeted file servers that
have no Full Control rights granted to it.

## Analysis Tasks for the FS_MissingFullControl Job

View the analysis tasks by navigating to the **FileSystem** > **2.Direct Permissions** >
**FS_MissingFullControl** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_MissingFullControl Job](/images/accessanalyzer/12.0/solutions/filesystem/directpermissions/missingfullcontrolanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Determine folders which are missing full control** – Creates an interim processing table in the
       database for use by downstream analysis and report generation
-   **2. Summarize folders which are missing full control** – Creates an interim processing table in the
       database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis task, the FS_MissingFullControl job
produces the following pre-configured report:

| Report                      | Description                                                                                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                                   |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Missing Full Control Rights | This report identifies folders within the environment which currently do not have any trustee with Full Control rights, adding to administrative burden. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays shares with missing full control rights</li><li>Table – Provides details on folder</li><li>Table – Provides details on shares with missing full control rights</li></ul> |
