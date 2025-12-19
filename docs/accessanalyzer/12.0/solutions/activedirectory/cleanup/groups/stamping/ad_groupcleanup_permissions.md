---
title: "AD_GroupCleanup_Permissions Job"
description: "AD_GroupCleanup_Permissions Job"
sidebar_position: 10
---

# AD_GroupCleanup_Permissions Job

The AD_GroupCleanup_Permissions Job reports on where security groups are being used to assign
permissions. This can be used to prioritize remediation for groups that are rarely used.

## Analysis Tasks for the AD_GroupCleanup_Permissions Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **2. Group Stamping** >
**AD_GroupCleanup_Permissions** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_GroupCleanup_Permissions Job](/images/accessanalyzer/12.0/solutions/activedirectory/cleanup/groups/stamping/groupcleanuppermissionsanalysis.webp)

The default analysis tasks are:

- Summarize Group Type/Scope – Creates the SA_AD_GroupCleanup_GroupTypes table accessible under the
  job’s Results node
- Direct Permission Details – Creates the SA_AD_GroupCleanup_PermissionsImport table accessible
  under the job’s Results node
- Expanded Perms Details – Creates the SA_GroupCleanup_ExpandedPermissions table accessible under
  the job’s Results node
- Expanded Perms Summary – Creates the SA_GroupCleanup_ExpandedPermissionsSummary table accessible
  under the job’s Results node
- Access Counts by Group – Creates the SA_GroupCleanup_GroupAccessSprawl table accessible under the
  job’s Results node
- Permission and Access Counts by Group Scope – Creates the SA_AD_GroupCleanup_PermissionsByScope
  table accessible under the job’s Results node
- Permission and Access Counts by Toxic Condition – Creates the
  SA_AD_GroupCleanup_PermissionsByCondition table accessible under the job’s Results node
- Permission and Access Counts by Scan Type – Creates the SA_AD_GroupCleanup_ScanOverview table
  accessible under the job’s Results node
- Group Summary – Creates the SA_GroupCleanup_GroupSummary table accessible under the job’s Results
  node

In addition to the tables and views created by the analysis tasks, the AD_GroupCleanup_Permissions
Job produces the following pre-configured reports.

| Report                          | Description                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Direct Permission Details | This report shows all direct permissions found by DAG for FileSystem, DAG for SharePoint, or imported into the Access Information Center from other sources. | None         | This report is comprised of one element: <ul><li>Table – Provides group direct permission details</li></ul>                                                                                                                                               |
| Group Permission Summary        | This report identifies what types of resources each security group is being used to apply permissions.                                                       | None         | This report is comprised of four elements: <ul><li>Table – Provides details on permission scans</li><li>Table – Provides details on group access</li><li>Table – Provides details on toxic conditions</li><li>Table – Provides a group overview</li></ul> |
