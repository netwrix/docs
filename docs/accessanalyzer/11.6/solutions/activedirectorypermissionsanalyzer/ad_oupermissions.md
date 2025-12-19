---
title: "3.OUs > AD_OUPermissions Job"
description: "3.OUs > AD_OUPermissions Job"
sidebar_position: 50
---

# 3.OUs > AD_OUPermissions Job

The AD_OUPermissions Job reports on all Active Directory permissions applied to organizational unit
objects within the targeted domains.

![3.OUs Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/ousjobstree.webp)

The AD_OUPermissions Job is located in the 3.OUs Job Group.

## Analysis Tasks for the AD_OUPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **3.OUs** > **AD_OUPermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_OUPermissions Job](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/oupermissionsanalysis.webp)

The default analysis tasks are:

- List OU permissions – Creates the SA_AD_OUPermissions_Details table accessible under the job’s
  Results node
- Summarize OU permissions – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_OUPermissions Job produces
the following pre-configured report.

| Report         | Description                                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| OU Permissions | This report highlights instances where permissions are applied to Active Directory organizational units. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays OU permissions by domain</li><li>Pie Chart – Displays OU permissions by type</li><li>Table – Provides details on OU permissions</li></ul> |
