---
title: "AD_ResetPasswordPermissions Job"
description: "AD_ResetPasswordPermissions Job"
sidebar_position: 10
---

# AD_ResetPasswordPermissions Job

The AD_ResetPasswordPermissions Job highlights all Active Directory users that are capable of
resetting another user's password within the targeted domains. It uses the data collected by the
0.Collection Job Group to provide information on permissions applied to user objects in Active
Directory.

## Analysis Tasks for the AD_ResetPasswordPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **1.Users** >
**AD_ResetPasswordPermissions** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_ResetPasswordPermissions Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/users/resetpasswordpermissionsanalysis.webp)

The default analysis tasks are:

- List user password reset permissions – Creates the SA_AD_ResetPasswordPermissions_Details table
  accessible under the job’s Results node
- Summarize password reset permissions – Creates an interim processing table in the database for use
  by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_ResetPasswordPermissions
Job produces the following pre-configured report.

| Report         | Description                                                                                                                                                                                                                                                                                                         | Default Tags | Report Elements                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reset Password | This report highlights instances where "Reset Password" permissions are applied to Active Directory user objects. This information is summarized at the domain and enterprise levels. By default, this report excludes members of administrator groups such as Domain Admins, Schema Admins, and Enterprise Admins. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays affected accounts by domain</li><li>Table – Provides details on reset password permissions</li><li>Table – Provides details on top users with reset password permissions</li></ul> |
