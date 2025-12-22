---
title: "AD_SensitiveSecurityGroups Job"
description: "AD_SensitiveSecurityGroups Job"
sidebar_position: 100
---

# AD_SensitiveSecurityGroups Job

The AD_SensitiveSecurityGroups Job identifies users who are granted administrative access within
Active Directory through membership to the Enterprise Admins, Domain Admins, Schema Admins, DNS
Admins, or Administrators groups. This level of access should be limited to only those individuals
who require this level of administrative privileges.

## Analysis Tasks for the AD_SensitiveSecurityGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_SensitiveSecurityGroups** > **Configure**
node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_SensitiveSecurityGroups Job](/images/accessanalyzer/12.0/solutions/activedirectory/groups/sensitivesecuritygroupsanalysis.webp)

The default analysis tasks are:

- Calculate Effective Membership – Creates the SA_AD_SensitiveSecurityGroups_Membership table
  accessible under the job’s Results node
- User Listing – Creates the SA_AD_SensitiveSecurityGroups_UserList table accessible under the job’s
  Results node
- Membership Summary – Creates the SA_AD_SensitiveSecurityGroups_Summary table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_SensitiveSecurityGroups
Job produces the following pre-configured report:

| Report                              | Description                                                              | Default Tags | Report Elements                                                                                                                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Security Group Membership | This report displays effective membership for sensitive security groups. | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays largest groups</li><li>Table – Provides details on membership</li><li>Table – Provides summary of group membership</li></ul> |
