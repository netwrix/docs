---
sidebar_position: 5047
title: AD_GroupMembershipPermissions Job
---

# AD\_GroupMembershipPermissions Job

The AD\_GroupMembershipPermissions Job highlights all Active Directory users that are capable of modifying group membership within the targeted domains.

## Analysis Tasks for the AD\_GroupMembershipPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **2.Groups** > **AD\_GroupMembershipPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_GroupMembershipPermissions Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Groups/GroupMembershipPermissionsAnalysis.png "Analysis Tasks for the AD_GroupMembershipPermissions Job")

The default analysis tasks are:

* List group object permissions – Creates the SA\_AD\_GroupMembershipPermissions\_Details table accessible under the job’s Results node
* Summarize group object permissions – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD\_GroupMembershipPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Membership | This report highlights instances where trustees can change the membership of Active Directory group objects, either by writing the member attribute or via the "Add/Remove self as member" permission. By default, this report excludes members of administrator groups such as Domain Admins, Schema Admins, and Enterprise Admins. | None | This report is comprised of three elements:   * Bar Chart – Displays affected groups by domain * Table – Provides details on membership change permissions * Table – Provides details on top users with group membership change permissions |