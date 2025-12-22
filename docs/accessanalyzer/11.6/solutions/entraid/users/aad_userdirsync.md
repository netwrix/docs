---
title: "AAD_UserDirSync Job"
description: "AAD_UserDirSync Job"
sidebar_position: 50
---

# AAD_UserDirSync Job

The AAD_UserDirSync Job summarizes on-premises Active Directory syncing in the audited Microsoft
Entra ID environment.

## Analysis Tasks for the AAD_UserDirSync Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD_UserDirSync** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AAD_UserDirSync Job](/images/accessanalyzer/11.6/solutions/entraid/users/userdirsyncanalysis.webp)

The default analysis tasks are:

- Get user DirSync details – Creates the AAD_UserDirSync_Details table accessible under the job’s
  Results node
- Summarize user DirSync details – Creates the AAD_UserDirSync_EnterpriseSummary table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_UserDirSync Job produces the
following pre-configured report.

| Report       | Description                                                                            | Default Tags | Report Elements                                                                                                                                                     |
| ------------ | -------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Syncing | This report indicates the sync status of user accounts within the audited environment. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays enterprise user synchronization summary</li><li>Table – Provides user sync details</li></ul> |
