---
title: "Oracle_PermissionChanges Job"
description: "Oracle_PermissionChanges Job"
sidebar_position: 30
---

# Oracle_PermissionChanges Job

The Oracle_PermissionsChanges Job is designed to provide detailed information about changes in
permissions across all database objects. Audited activities include granting, altering, and revoking
permissions on database objects.

## Analysis Tasks for the Oracle_PermissionsChanges Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_PermissionChanges** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/activity/jobgroup28.webp)

The default analysis tasks are:

- Oracle Permission Changes – Highlights activity involving permission changes on audited Oracle
  Instances. Creates the SA_Oracle_PermissionChange_Details table accessible under the job’s Results
  node.
- Oracle Permission Changes Instance Summary – Summarizes Permission Changes per Instance. Creates
  the SA_Oracle_PermissionChange_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_PermissionsChanges Job
produces the following pre-configured report.

| Report                             | Description                                                                                     | Default Tags | Report Elements                                                                                                                                                                                                                                                           |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permission Change Activity Summary | This report lists all permission change related Oracle events, and summarizes them by instance. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by permission change activity</li><li>Table –  Provides details on instances by permission change activity</li><li>Table – Provides details on permission change details</li></ul> |
