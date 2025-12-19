---
title: "AD_AdminSDHolder Job"
description: "AD_AdminSDHolder Job"
sidebar_position: 10
---

# AD_AdminSDHolder Job

The AD_AdminSDHolder Job is comprised of analysis tasks and reports which use the data collected by
the 0.Collection Job Group to provide information on permissions applied to the AdminSDHolder
Container in Active Directory.

## Queries for the AD_AdminSDHolder Job

The AD_AdminSDHolder Job uses the PowerShell Data Collector for the following query:

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Queries for the AD_AdminSDHolder Job](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/containers/adminsdholderquery.webp)

- Default AdminSDHolder Perms – Creates a table of default AdminSDHolder permissions

    - See the
      [PowerShell Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/powershell/overview.md)
      topic for additional information

## Analysis Tasks for the AD_AdminSDHolder Job

Navigate to the **Active Directory Permissions Analyzer** > **7.Containers** >
**AD_AdminSDHolder** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_AdminSDHolder Job](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/containers/adminsdholderanalysis.webp)

The default analysis tasks are:

- Determine AdminSDHolder permissions – Creates the SA_AD_AdminSDHolder_Details table accessible
  under the job’s Results node
- Summarize AdminSDHolder permissions – Creates the SA_AD_AdminSDHolder_DomainSummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_AdminSDHolder Job produces
the following pre-configured report.

| Report                    | Description                                                                                                                                                                                                                                                                                                                                                                                          | Default Tags | Report Elements                                                                                                                                                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AdminSDHolder Permissions | This report highlights suspicious (non-default) permissions applied to the AdminSDHolder container across all audited domains, and enumerates all AdminSDHolder permissions. For more information on vulnerabilities involving AdminSDHolder access, see the Microsoft [AdminSDHolder, Protected Groups and SDPROP](https://technet.microsoft.com/en-us/library/2009.09.sdadminholder.aspx) article. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays suspicious AdminSDHolder permissions by domain</li><li>Table – Provides details on AdminSDHolder permissions</li><li>Table – Provides details on top users by suspicious AdminSDHolder permissions</li></ul> |
