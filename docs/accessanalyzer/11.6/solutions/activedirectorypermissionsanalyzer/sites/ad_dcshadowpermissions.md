---
title: "AD_DCShadowPermissions Job"
description: "AD_DCShadowPermissions Job"
sidebar_position: 10
---

# AD_DCShadowPermissions Job

The AD_DCShadowPermissions Job highlights all Active Directory users that are capable of potentially
performing a DCShadow attack within the targeted domains.

## Analysis Tasks for the AD_DCShadowPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **9.Sites** >
**AD_DCShadowPermissions** > **Configure** node and select **Analysis** to view analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_DCShadowPermissions Job](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/sites/dcshadowpermissionsanalysis.webp)

The default analysis tasks are:

- DCShadow Permissions – Creates the SA_AD_DCShadowPermissions_Details table accessible under the
  job’s Results node
- DCShadow Summary – Creates the SA_AD_DCShadowPermission_Summary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_DCShadowPermisssions Job
produces the following pre-configured report.

| Report               | Description                                                                                                                                                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DCShadow Permissions | This report highlights permissions applied to Site objects and Computer objects in Active Directory required to execute the DCShadow attack. By default this report excludes members of administrator groups such as Domain Admins, Schema Admins, and Enterprise Admins. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top users by computer count</li><li>Table – Provides details on top users by computer count</li><li>Table – Provides details on DCShadow permission details</li></ul> |
