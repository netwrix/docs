---
title: "AD_DCLogonGroups Job"
description: "AD_DCLogonGroups Job"
sidebar_position: 30
---

# AD_DCLogonGroups Job

The AD_DCLogonGroups Job identifies users who are able to log on to Domain Controllers through
effective membership to the Enterprise Admins, Domain Admins, Administrators, Backup Operators,
Account Operators, Print Operators, or Remote Desktop Users groups. This type of access should be
limited to only those individuals who require this level of administrative privileges.

## Analysis Tasks for the AD_DCLogonGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_DCLogonGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_DCLogonGroups Job](/images/accessanalyzer/11.6/solutions/activedirectory/groups/dclogongroupsanalysis.webp)

The default analysis tasks are:

- Circular Effective Membership – Creates the SA_AD_DCLogonGroups_Membership table accessible under
  the job’s Results node
- User Listing – Creates the SA_AD_DCLogonGroups_UserList table accessible under the job’s Results
  node
- Membership Summary – Creates the SA_AD_DCLogonGroups_Summary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_CircularNesting Job
produces the following pre-configured report:

| Report                         | Description                                                                                   | Default Tags | Report Elements                                                                                                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Controller Logon Rights | This report displays effective membership for groups with logon rights to domain controllers. | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays largest groups</li><li>Table – Provides details on membership</li><li>Table – Provides summary of membership</li></ul> |
