---
title: "AD_StaleGroups Job"
description: "AD_StaleGroups Job"
sidebar_position: 110
---

# AD_StaleGroups Job

The AD_StaleGroups Job identifies groups that contain potentially stale users. Users are considered
stale if they have never logged onto the domain, have not logged onto the domain in the past 60
days, or are disabled. These group memberships should be reviewed and possibly removed.

## Analysis Tasks for the AD_StaleGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_StaleGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_StaleGroups Job](/images/accessanalyzer/12.0/solutions/activedirectory/groups/stalegroupsanalysis.webp)

The default analysis tasks are:

- Stale Group Details – Creates the SA_AD_StaleGroups_Details table accessible under the job’s
  Results node
- Stale Groups Summary – Creates the SA_AD_StaleGroups_GroupSummary table accessible under the job’s
  Results node
- Stale Groups Org Summary – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_StaleGroups Job produces
the following pre-configured report:

| Report                                           | Description                                                                                                                                                                              | Default Tags | Report Elements                                                                                                                                                                                         |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Effective Membership (A.K.A. Stale Groups) | This report identifies groups with stale effective membership. A stale user is defined as someone who has not logged into the domain in over 60 days, is expired, or currently disabled. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays group membership</li><li>Table – Provides details on membership</li><li>Table – Provides details on group membership</li></ul> |
