---
title: "AD_GroupRights Job"
description: "AD_GroupRights Job"
sidebar_position: 50
---

# AD_GroupRights Job

The AD_GroupRights Job provides data collection to identify permissions applied to groups in Active
Directory.

## Query for the AD_GroupRights Job

The AD_GroupRights Job uses the ADPermissions Data Collector for the following query:

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Query for the AD_GroupRights Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/grouprightsquery.webp)

- Group Access Permissions – Returns group access permissions

    - See the [ADPermissions Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/adpermissions/overview.md)
      topic for additional information

## Analysis Tasks for the AD_GroupRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD_GroupRights** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_GroupRights Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/grouprightsanalysis.webp)

The default analysis tasks are:

- Group Rights View – Creates the SA_AD_GroupRights_Details_PermissionsView visible under the job’s
  Results node
- AIC group permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation
