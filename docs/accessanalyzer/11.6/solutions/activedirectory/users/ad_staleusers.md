---
title: "AD_StaleUsers Job"
description: "AD_StaleUsers Job"
sidebar_position: 80
---

# AD_StaleUsers Job

The AD_StaleUsers job identifies potentially stale users based on the amount of time since their
last login to the domain, or if the account has been disabled. These accounts should be reviewed and
cleaned up in order to increase security and reduce complexity.

:::note
The definition of a stale user is set by the .Active Directory Inventory solution. These
parameters, including the number of days since last login to be considered stale (by default 60
days), can be customized within the **.Active Directory Inventory** > **3-AD_Exceptions** job's
**Stale Users** analysis task. See the
[3-AD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/activedirectoryinventory/3-ad_exceptions.md)
topic for additional information.
:::


## Analysis Tasks for the AD_StaleUsers Job

Navigate to the **Active Directory** > **2.Users** > **AD_StaleUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_StaleUsers Job](/images/accessanalyzer/11.6/solutions/activedirectory/users/staleusersanalysis.webp)

The default analysis tasks are:

- User Details – Creates the SA_AD_StaleUsers_Details table accessible under the job’s Results node
- Summarize by Domain – Creates the SA_AD_StaleUsers_DomainSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_StaleUsers job produces
the following pre-configured report:

| Report      | Description                                                                                                                                                                                                                                       | Default Tags | Report Elements                                                                                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Users | This report identifies user accounts which have not logged into the domain for an extended amount of time or are currently disabled. A user account is considered stale if the last logon is over 60 days ago, is currently disabled, or expired. | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays users by domain</li><li>Table – Provides details on users</li><li>Table – Provides details on users by domain</li></ul> |
