---
title: "Box_PermissionChanges Job"
description: "Box_PermissionChanges Job"
sidebar_position: 50
---

# Box_PermissionChanges Job

The Box_PermissionChannges Job provides details on permission changes that have occurred over the
past 30 days.

## Analysis Tasks for the Box_PermissionChanges Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box_PermissionChanges** > **Configure**
node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Box_PermissionChanges Job](/images/accessanalyzer/12.0/solutions/box/activity/forensics/permissionchangesanalysis.webp)

The following analysis tasks are selected by default:

- Permission Change Details – Creates the Box_PermissionChange_Details table accessible under the
  job’s Results node
- Permission Changes (Last 30 Days) – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box_PermissionChanges Job produces the
following pre-configured report:

| Report             | Description                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permission Changes | This report identifies all resources where successful permission changes have occurred. The line chart shows data for the past 30 days only. | None         | This report is comprised of two elements: <ul><li>Line Chart – Displays last 30 days of permission changes</li><li>Table – Provides details on permission changes</li></ul> |
