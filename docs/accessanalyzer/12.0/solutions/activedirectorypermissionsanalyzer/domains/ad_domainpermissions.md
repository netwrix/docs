---
title: "AD_DomainPermissions Job"
description: "AD_DomainPermissions Job"
sidebar_position: 40
---

# AD_DomainPermissions Job

The AD_DomainPermissions Job reports on all Active Directory permissions applied to domain objects
within the targeted domains.

#### Analysis Tasks for the AD_DomainPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **8.Domains** >
**AD_DomainPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_DomainPermissions Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/domains/domainpermissionsanalysis.webp)

The default analysis tasks are:

- List domain object permissions – Creates the SA_AD_DomainPermissions_Details table accessible
  under the job’s Results node
- Summarize domain permissions – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_DomainPermissions Job
produces the following pre-configured report.

| Report             | Description                                                                                                                                                            | Default Tags | Report Elements                                                                                                                                                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Permissions | This report highlights instances where permissions are applied to Active Directory domain objects. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays permissions by domain</li><li>Pie Chart – Provides details on enterprise domain permissions by type</li><li>Table – Provides details on domain permissions</li></ul> |
