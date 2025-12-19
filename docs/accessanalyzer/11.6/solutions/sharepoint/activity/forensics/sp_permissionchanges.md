---
title: "SP_PermissionChanges Job"
description: "SP_PermissionChanges Job"
sidebar_position: 20
---

# SP_PermissionChanges Job

This job identifies permission changes which have been performed on all monitored SharePoint sites
over the past 30 days.

## Analysis Tasks for the SP_PermissionChanges Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Forensics** >
**SP_PermissionChanges** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_PermissionChanges Job](/images/accessanalyzer/11.6/solutions/sharepoint/activity/forensics/permissionchangesanalysis.webp)

The default analysis tasks are:

- Analyze Permission Changes – Creates the SA_SP_PermissionChanges table accessible under the job’s
  Results node
- Permission Changes Counts – Creates the SA_SP_PermissionChanges_Counts table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_PermissionChanges Job
produces the following pre-configured report:

| Report             | Description                                                                                                                                                            | Default Tags | Report Elements                                                                                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permission Changes | This report identifies SharePoint permission changes based on activity events and determines whether or not that permission change is considered a high security risk. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays permission change activity in the past seven days</li><li>Table – Provides permission change details</li></ul> |
