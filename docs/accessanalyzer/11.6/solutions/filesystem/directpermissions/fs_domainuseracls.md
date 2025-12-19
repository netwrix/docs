---
title: "FS_DomainUserACLs Job"
description: "FS_DomainUserACLs Job"
sidebar_position: 10
---

# FS_DomainUserACLs Job

The FS_DomainUserACLs job is designed to report on domain users that have been granted direct
permissions on resources from targeted file servers.

## Analysis Tasks for the FS_DomainUserACLs Job

View the analysis tasks by navigating to the **FileSystem** > **2.Direct Permissions** >
**FS_DomainUserACLs** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_DomainUserACLs Job](/images/accessanalyzer/11.6/solutions/filesystem/directpermissions/domainuseraclsanalysis.webp)

The following analysis tasks are selected by default:

-   **0. Drop tables** – Drops tables from previous runs
-   **1. Direct User Resource Details** – Creates the SA_FS_DomainUserACLs_DirectUserResourceDetails
       table accessible under the job’s Results node
-   **2. Direct Users: Top 5 Servers** – Creates an interim processing table in the database for use by
       downstream analysis and report generation
-   **3. Direct Users** – Creates an interim processing table in the database for use by downstream
       analysis and report generation
-   **4. Direct Resources** – Creates an interim processing table in the database for use by downstream
       analysis and report generation

In addition to the tables and views created by the analysis tasks which displays all direct user
permissions, the FS_DomainUserACLs job produces the following pre-configured report:

| Report           | Description                                                                      | Default Tags | Report Elements                                                                                                                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain User ACLs | This report identifies all places where a domain user account has direct rights. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top 5 servers affected by folders</li><li>Table – Provides details on domain users</li><li>Table – Provides details on resources</li></ul> |
