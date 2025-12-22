---
title: "AD_DomainRights Job"
description: "AD_DomainRights Job"
sidebar_position: 40
---

# AD_DomainRights Job

The AD_DomainRights Job provides data collection to identify permissions applied to Domains in
Active Directory.

## Query for the AD_DomainRights Job

The AD_DomainRights Job uses the ADPermissions Data Collector for the following query:

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Query for the AD_DomainRights Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/domainrightsquery.webp)

- Domain Access Permissions – Returns domain access permissions

    - See the [ADPermissions Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/adpermissions/overview.md)
      topic for additional information

## Analysis Tasks for the AD_DomainRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD_DomainRights** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_DomainRights Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/collection/domainrightsanalysis.webp)

The default analysis tasks are:

- Domain Rights View – Creates the SA_AD_DomainRights_Details_PermissionsView visible under the
  job’s Results node
- AIC domain permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation
