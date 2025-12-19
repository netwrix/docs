---
title: "AD_UserPermissions Job"
description: "AD_UserPermissions Job"
sidebar_position: 20
---

# AD_UserPermissions Job

The AD_UserPermissions Job is comprised of analysis tasks and reports which use the data collected
by the 0.Collection Job Group to provide information on permissions applied to user objects in
Active Directory.

## Analysis Tasks for the AD_UserPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **1.Users** > **AD_UserPermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_UserPermissions Job](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/users/userpermissionsanalysis.webp)

The default analysis tasks are:

- List user object permissions – Creates the SA_AD_UserPermissions_Details table accessible under
  the job’s Results node
- Summarize user object permissions – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_UserPermissions Job
produces the following pre-configured report.

| Report           | Description                                                                                                                                                          | Default Tags | Report Elements                                                                                                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User permissions | This report highlights instances where permissions are applied to Active Directory user objects. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays user permissions by domain</li><li>Pie Chart – Provides details on user permission types</li><li>Table – Provides details on user permissions</li></ul> |
