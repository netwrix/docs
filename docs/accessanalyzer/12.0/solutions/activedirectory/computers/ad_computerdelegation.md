---
title: "AD_ComputerDelegation Job"
description: "AD_ComputerDelegation Job"
sidebar_position: 20
---

# AD_ComputerDelegation Job

The AD_ComputerDelegation Job provides details on computer accounts that have unconstrained
delegation enabled. When an account connects to one of these computers, Active Directory stores the
account's ticket-granting ticket (TGT) in memory. The computer can then reuse that TGT for
impersonation, which creates a significant security risk if privileged accounts access the computer.
See the
[What Is Kerberos Delegation?](https://blog.netwrix.com/2021/11/30/what-is-kerberos-delegation-an-overview-of-kerberos-delegation/) Netwrix
blog article for more information about this configuration and the related security risks.

## Analysis Task for the AD_ComputerDelegation Job

Navigate to the **Active Directory** > **3.Computers** > **AD_ComputerDelegation** > Configure node
and select **Analysis** to view the analysis tasks.

:::warning
Don't modify or deselect the analysis task. The analysis task is preconfigured for
this job.
:::


![Analysis Task for the AD_ComputerDelegation Job](/images/accessanalyzer/12.0/solutions/activedirectory/computers/computerdelegationanalysis.webp)

The default analysis tasks are:

- Determine computers trusted for delegation – Creates the SA_AD_ComputerDelegation_Details table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD_ComputerDelegation Job
produces the following pre-configured report:

| Report                           | Description                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computers Trusted for Delegation | This report highlights which computers are trusted for delegation, which accounts are sensitive, and whether the delegation is constrained or unconstrained. | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays computers trusted for delegation by domain</li><li>Table – Provides details on computers trusted for delegation</li><li>Table – Provides details on computers trusted for delegation by domain</li></ul> |
