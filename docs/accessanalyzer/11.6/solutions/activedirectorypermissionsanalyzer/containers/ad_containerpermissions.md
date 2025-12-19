---
title: "AD_ContainerPermissions Job"
description: "AD_ContainerPermissions Job"
sidebar_position: 20
---

# AD_ContainerPermissions Job

The AD_ContainerPermissions Job is responsible for reporting on all Active Directory permissions
applied to container objects within the targeted domains.

## Analysis Tasks for the AD_ContainerPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **7.Containers** >
**AD_ContainerPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_ContainerPermissions Job](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/containers/containerpermissionsanalysis.webp)

The default analysis tasks are:

- List container object permissions – Creates the SA_AD_ContainerPermissions_Details table
  accessible under the job’s Results node
- Summarize container object permissions – Creates the SA_AD_ContainerPermissions_DomainSummary
  table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_ContainerPermissions Job
produces the following pre-configured report.

| Report                | Description                                                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Container Permissions | This report highlights instances where permissions are applied to Active Directory container objects. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays container permissions by domain</li><li>Pie Chart – Provides details on enterprise container permissions by type</li><li>Table – Provides details on container permissions</li></ul> |
