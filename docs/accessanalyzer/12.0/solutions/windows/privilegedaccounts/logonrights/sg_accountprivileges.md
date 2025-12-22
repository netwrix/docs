---
title: "SG_AccountPrivileges Job"
description: "SG_AccountPrivileges Job"
sidebar_position: 20
---

# SG_AccountPrivileges Job

The SG_AccountPrivileges job identifies accounts privileges on hosts in the targeted environment.

**Targeted Hosts**

All Windows Hosts

## Queries for the SG_AccountPrivileges Job

The SG_AccountPrivileges job uses the PowerShell Data Collector for the following query:

:::warning
The query is preconfigured for this job. Never modify the query.
:::


![Queries for the SG_AccountPrivileges Job](/images/accessanalyzer/12.0/solutions/windows/privilegedaccounts/logonrights/accountprivilegesquery.webp)

The query for the SG_AccountPrivileges job is:

- Account Privilege Check – Determines account privileges on local hosts

## Analysis Tasks for the SG_AccountPrivileges Job

Navigate to the **Windows** > **Privileged Accounts** > **Logon Rights** >
**SG_AccountPrivileges** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the SG_AccountPrivileges Job](/images/accessanalyzer/12.0/solutions/windows/privilegedaccounts/logonrights/accountprivilegesanalysis.webp)

The default analysis task is:

- List all assigned privileges – Creates the SA_SG_AccountPrivileges_Details table accessible under
  the job’s Results node

In addition to the tables created by the analysis tasks, the SG_AccountPrivileges job produces the
following pre-configured report.

| Report                    | Description                                                                                                                                         | Default Tags | Report Elements                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------- |
| Account Privilege Details | This report highlights account privileges on hosts in the targeted environment. Default privileges present on all Windows hosts have been filtered. | None         | This report is comprised of one element: <ul><li>Table – Provides account privilege details</li></ul> |
