---
title: "AD_UserRights Job"
description: "AD_UserRights Job"
sidebar_position: 80
---

# AD_UserRights Job

The AD_UserRights Job provides data collection to identify permissions applied to users in Active
Directory.

## Query for the AD_UserRights Job

The AD_UserRights Job uses the ADPermissions Data Collector for the following query:

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Query for the AD_UserRights Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/userrightsquery.webp)

- User Access Permissions – Returns user permissions

    - See the [ADPermissions Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/adpermissions/overview.md)
      topic for additional information

## Analysis Tasks for the AD_UserRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD_UserRights** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_UserRights Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/userrightsanalysis.webp)

The default analysis tasks are:

- User Rights View – Creates the SA_AD_UserRights_Details_PermissionsView visible under the job’s
  Results node
- AIC user permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation
