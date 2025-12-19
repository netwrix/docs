---
title: "UX_LocalUsers Job"
description: "UX_LocalUsers Job"
sidebar_position: 60
---

# UX_LocalUsers Job

The UX_LocalUsers job provides an overview of all local users within the audited Unix and Linux
environments.

## Analysis Tasks for the UX_LocalUsers Job

Navigate to the **Unix** > **1.Users and Groups** > **UX_LocalUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the UX_LocalUsers Job](/images/accessanalyzer/12.0/solutions/unix/usersgroups/localusersanalysis.webp)

The default analysis tasks are:

- Creates local users table – Creates the SA_UX_LocalUsers_Details table accessible under the job’s
  Results node
- Creates local users summary table – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the table and views created by the analysis tasks, the UX_LocalUsers job produces the
following pre-configured report:

| Report      | Description                                                                                                             | Default Tags | Report Elements                                                                                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local Users | This report summarizes local users in the audited environment. Hosts with large numbers of local users are highlighted. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays Top 5 Hosts by Local User Count</li><li>Table – Provides details on Top 5 Local User Count bar chart</li><li>Table – Provides details on All Local Users</li></ul> |
