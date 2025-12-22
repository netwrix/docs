---
title: "AAD_DisabledUsers Job"
description: "AAD_DisabledUsers Job"
sidebar_position: 20
---

# AAD_DisabledUsers Job

The AAD_DisabledUsers Job identifies disabled user accounts within Microsoft Entra ID. These
accounts should be reviewed and cleaned up in order to increase security and reduce complexity.

## Analysis Tasks for the AAD_DisabledUsers Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD_DisabledUsers** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AAD_DisabledUsers Job](/images/accessanalyzer/11.6/solutions/entraid/users/disabledusersanalysis.webp)

The default analysis tasks are:

- Get disabled user account information – Creates the AAD_DisabledUsers_Details table accessible
  under the job’s Results node
- Summarize disabled user information – Creates the AAD_DisabledUsers_Summary table accessible under
  the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_DisabledUsers Job produces the
following pre-configured report.

| Report                 | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                                         |
| ---------------------- | ---------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disabled User Accounts | This report identifies disabled user accounts and summarizes them by domain. | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays disabled users by domain</li><li>Table – Provides user details</li><li>Tables – Provides details on disabled users by domain</li></ul> |
