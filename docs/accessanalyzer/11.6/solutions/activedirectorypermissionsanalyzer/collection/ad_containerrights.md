---
title: "AD_ContainerRights Job"
description: "AD_ContainerRights Job"
sidebar_position: 20
---

# AD_ContainerRights Job

The AD_ContainerRights Job provides data collection to identify permissions applied to Containers in
Active Directory.

## Query for the AD_ContainerRights Job

The AD_ContainerRights Job uses the ADPermissions Data Collector for the following query:

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Query for the AD_ContainerRights Job](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/collection/containerrightsquery.webp)

- Container Access Permissions – Returns containers under the given scope

    - See the
      [ADPermissions Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/adpermissions/overview.md)
      topic for additional information

## Analysis Tasks for the AD_ContainerRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** >
**AD_ContainerRights** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_ContainerRights Job](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/collection/containerrightsanalysis.webp)

The default analysis tasks are:

- Container Rights View – Creates the SA_AD_ContainerRights_Details_PermissionsView visible under
  the job’s Results node
- AIC container permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation
