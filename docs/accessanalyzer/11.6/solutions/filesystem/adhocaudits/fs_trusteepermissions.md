---
title: "FS_TrusteePermissions Job"
description: "FS_TrusteePermissions Job"
sidebar_position: 20
---

# FS_TrusteePermissions Job

The FS_TrusteePermissions Job is designed to report on trustees from targeted file servers based on
user input.

## Analysis Tasks for the FS_TrusteePermissions Job

View the analysis tasks by navigating to the FileSystem > Ad Hoc Audits > FS_TrusteePermissions >
Configure node and select Analysis.

:::warning
Do not modify or deselect the second selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/filesystem/adhocaudits/trusteepermissionsanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Find Trustee Information** – Creates the SA_FS_TrusteePermissions_TrusteeSummary table
       accessible under the job’s Results node.
    - Parameter is blank by default.
    - `#Trustees` parameter must be configured using the Edit Table option.
    - List one trustee per row, using the format: DOMAIN\Name.
    - See the Customize Analysis Parameters topic for additional information.
-   **2. Find Permission Source** – Creates the SA_FS_ShareAudit_TrusteePermissions table accessible
       under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the FS_TrusteePermissions Job
produces the following pre-configured report:

| Report                    | Description                                                                                             | Default Tags | Report Elements                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Trustee Permissions Audit | This report provides an overview of the access sprawl across the environment for the select trustee(s). | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays summary of trustees</li><li>Table – Provides details on trustee permissions</li></ul> |
