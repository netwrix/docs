---
title: "AD_GroupPermissions Job"
description: "AD_GroupPermissions Job"
sidebar_position: 20
---

# AD_GroupPermissions Job

The AD_Permissions Job reports on all Active Directory permissions applied to group objects within
the targeted domains.

## Analysis Tasks for the AD_GroupPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **2.Groups** > **AD_GroupPermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_GroupPermissions Job](/images/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/groups/grouppermissionsanalysis.webp)

The default analysis tasks are:

- List group object permissions – Creates the SA_AD_GroupPermissions_Details table accessible under
  the job’s Results node
- Summarize group object permissions – Creates an interim processing table in the database for use
  by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_GroupPermissions Job
produces the following pre-configured report.

| Report            | Description                                                                                                                                                           | Default Tags | Report Elements                                                                                                                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Permissions | This report highlights instances where permissions are applied to Active Directory group objects. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays group permissions by domain</li><li>Pie Chart – Displays group permissions by type</li><li>Table – Provides details on group permissions</li></ul> |
