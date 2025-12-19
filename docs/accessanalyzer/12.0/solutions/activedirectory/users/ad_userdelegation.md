---
title: "AD_UserDelegation Job"
description: "AD_UserDelegation Job"
sidebar_position: 100
---

# AD_UserDelegation Job

The AD_Delegation Job highlights user accounts which are trusted for delegation. Kerberos delegation
enables an application to access resources hosted on a different server, and opens up several
avenues to compromise based on the type of delegation enabled.  See the
[What Is Kerberos Delegation?](https://blog.netwrix.com/2021/11/30/what-is-kerberos-delegation-an-overview-of-kerberos-delegation/) Netwrix
blog article for more information about this configuration and the related security risks.

## Analysis Task for the AD_UserDelegation Job

Navigate to the **Active Directory** > **2.Users** > **AD_UserDelegation** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Task for the AD_UserDelegation Job](/images/accessanalyzer/12.0/solutions/activedirectory/users/userdelegationanalysis.webp)

The default analysis tasks are:

- Determine users for trusted delegation – Creates the SA_AD_UserDelegation_Details table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis task, the AD_UserDelegation Job produces
the following pre-configured report:

| Report                       | Description                                                                                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                                                       |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Users Trusted for Delegation | This report highlights which users are trusted for delegation, which accounts are sensitive, and whether the delegation is constrained or unconstrained. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays users trusted for delegation by domain</li><li>Table – Provides details on users trusted for delegation</li><li>Table – Provides details on users trusted for delegation by domain</li></ul> |
