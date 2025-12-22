---
title: "FS_HighRiskACLs Job"
description: "FS_HighRiskACLs Job"
sidebar_position: 20
---

# FS_HighRiskACLs Job

The FS_HighRiskACLs job is designed to report on high risk security principals that have been
granted direct permissions on resources from targeted file servers.

## Analysis Tasks for the FS_HighRiskACLs Job

View the analysis tasks by navigating to the **FileSystem** > **2.Direct Permissions** >
**FS_HighRiskACLs** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_HighRiskACLs Job](/images/accessanalyzer/12.0/solutions/filesystem/directpermissions/highriskaclsanalysis.webp)

The following analysis tasks are selected by default:

-   **1. High Risk ACL Details** – Creates the SA_FS_HighRiskACLs_Details table accessible under the
       job’s Results node
-   **2. High Risk Permissions Matrix** – Creates an interim processing table in the database for use by
       downstream analysis and report generation
-   **3. Open Manage Rights** – Creates an interim processing table in the database for use by
       downstream analysis and report generation

In addition to the tables and views created by the analysis task, the FS_HighRiskACLs job produces
the following pre-configured report:

| Report         | Description                                                                                                                                                                     | Default Tags                                          | Report Elements                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High Risk ACLs | This report shows permissions of Authenticated Users, Anonymous Login, Everyone, or Domain Users. Applying these trustees to permissions may inadvertently open security holes. | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: <ul><li>Stacked Bar Chart – Displays high risk permission assignments</li><li>Table – Provides details on resources by open manage rights</li></ul> |
