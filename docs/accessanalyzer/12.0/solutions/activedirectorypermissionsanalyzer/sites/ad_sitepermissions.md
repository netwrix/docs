---
title: "AD_SitePermissions Job"
description: "AD_SitePermissions Job"
sidebar_position: 20
---

# AD_SitePermissions Job

The AD_SitePermissions Job reports on all Active Directory permissions applied to site objects
within the targeted domains.

## Analysis Tasks for the AD_SitePermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **9.Sites** > **AD_SitePermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_SitePermissions Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/sites/sitepermissionsanalysis.webp)

The default analysis tasks are:

- Site Permissions – Creates the SA_AD_SitePermissions_Details table accessible under the job’s
  Results node
- Summarize Site Permissions – Creates the SA_AD_SitePermissions_DomainSummary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_SitePermissions Job
produces the following pre-configured report.

| Report           | Description                                                                                      | Default Tags | Report Elements                                                                                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Site Permissions | This report highlights instances where permissions are applied to Active Directory Site objects. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays permissions by site</li><li>Pie chart – Provides details on enterprise site permissions by type</li><li>Table – Provides details on site permissions</li></ul> |
