---
title: "SG_LocalAdmins Job"
description: "SG_LocalAdmins Job"
sidebar_position: 10
---

# SG_LocalAdmins Job

The SG_LocalAdmins job identifies the effective membership for all local administrator groups. The
purpose of this job is to gain an understanding of what accounts within the environment are
privileged and should be monitored closely.

## Queries for the SG_LocalAdmins Job

The SG_LocalAdmins job uses the UsersGroups Data Collector for the following query:

:::warning
The query is preconfigured for this job. Never modify the query.
:::


![Queries for the SG_LocalAdmins Job](/images/accessanalyzer/11.6/solutions/windows/privilegedaccounts/localadministrators/localadminsquery.webp)

The query for the SG_LocalAdmins job is:

- Direct Membership – Returns direct membership from targeted hosts

## Analysis Tasks for the SG_LocalAdmins Job

Navigate to the **Windows** > **Privileged Accounts** > **Local Administrators** >
**SG_LocalAdmins** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SG_LocalAdmins Job](/images/accessanalyzer/11.6/solutions/windows/privilegedaccounts/localadministrators/localadminsanalysis.webp)

The default analysis tasks are:

- Expand Effective Membership – Creates the SA_SG_LocalAdmins_Details table accessible under the
  job’s Results node
- Membership Summary – Creates the SA_SG_LocalAdmins_MembershipSummary table accessible under the
  job’s Results node
- Privileged Accounts – Creates the SA_SG_LocalAdmins_PrivilegedAccounts table accessible under the
  job’s Results node
- Track Changes – Creates the SA_SG_LocalAdmins_Changes table accessible under the job’s Results
  node

In addition to the tables created by the analysis tasks, the SG_LocalAdmins job produces the
following pre-configured reports.

| Report               | Description                                                                                    | Default Tags                                                  | Report Elements                                                                                                                                                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local Administrators | This report identifies servers with the largest local administrator groups in the environment. | GDPR, SOX, HIPAA, PCI-DSS, GLBA, ITAR, FERPA, FISMA, ISO27001 | This report is comprised of three elements: <ul><li>Stacked Chart – Displays largest local administrator groups</li><li>Table – Provides membership details</li><li>Table – Provides a local administrator groups summary</li></ul> |
| Membership Changes   | This report identifies changes in effective membership between two scans of the environment.   | None                                                          | This report is comprised of one element: <ul><li>Table – Displays membership changes</li></ul>                                                                                                                                      |
| Privileged Accounts  | This report highlights user accounts with a large number of local administrator rights.        | None                                                          | This report is comprised of two elements: <ul><li>Stacked Chart – Displays top trustees by administrator rights</li><li>Table – Provides details on privileged accounts</li></ul>                                                   |


## Least Privilege Model

The SG_LocalAdmins job typically uses an account that is a member of the Local Administrators group
on the target host. However if a less-privileged option is required, you can instead use a regular
domain user that has been added to the **Network access: Restrict clients allowed to make remote
calls to SAM** Local Security Policy.

![User added to the Local Securtiy Policy](/images/accessanalyzer/11.6/solutions/windows/privilegedaccounts/localadministrators/leastprivilegemodel.webp)
