---
title: "AD_GroupMembershipPermissions Job"
description: "AD_GroupMembershipPermissions Job"
sidebar_position: 10
---

# AD_GroupMembershipPermissions Job

The AD_GroupMembershipPermissions Job highlights all Active Directory users that are capable of
modifying group membership within the targeted domains.

## Analysis Tasks for the AD_GroupMembershipPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **2.Groups** >
**AD_GroupMembershipPermissions** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_GroupMembershipPermissions Job](/images/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/groups/groupmembershippermissionsanalysis.webp)

The default analysis tasks are:

- List group object permissions – Creates the SA_AD_GroupMembershipPermissions_Details table
  accessible under the job’s Results node
- Summarize group object permissions – Creates an interim processing table in the database for use
  by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_GroupMembershipPermissions
Job produces the following pre-configured report.

| Report           | Description                                                                                                                                                                                                                                                                                                                          | Default Tags | Report Elements                                                                                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Membership | This report highlights instances where trustees can change the membership of Active Directory group objects, either by writing the member attribute or via the "Add/Remove self as member" permission. By default, this report excludes members of administrator groups such as Domain Admins, Schema Admins, and Enterprise Admins. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays affected groups by domain</li><li>Table – Provides details on membership change permissions</li><li>Table – Provides details on top users with group membership change permissions</li></ul> |
