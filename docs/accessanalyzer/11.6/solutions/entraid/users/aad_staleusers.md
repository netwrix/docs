---
title: "AAD_StaleUsers Job"
description: "AAD_StaleUsers Job"
sidebar_position: 30
---

# AAD_StaleUsers Job

The AAD_StaleUsers Job identifies potentially stale users based on a variety of factors. These
accounts should be reviewed and cleaned up in order to increase security and reduce complexity.

## Analysis Tasks for the AAD_StaleUsers Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD_StaleUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AAD_StaleUsers Job](/images/accessanalyzer/11.6/solutions/entraid/users/staleusersanalysis.webp)

The default analysis tasks are:

- Stale User Details – Creates the AAD_StaleUsers_Details table accessible under the job’s Results
  node
- Summarize by Domain – Creates the AAD_StaleUsers_DomainSummary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the AAD_StaleUsers Job produces the
following pre-configured report.

| Report      | Description                                                                                                                                                                                                                             | Default Tags | Report Elements                                                                                                                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Users | This report identifies user accounts which have not logged into the domain for an extended amount of time or are currently disabled. A user account is considered stale if the last logon is over 30 days ago or is currently disabled. | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays users by domain</li><li>Table – Provides details on users</li><li>Tables – Provides details on users by domain</li></ul> |
