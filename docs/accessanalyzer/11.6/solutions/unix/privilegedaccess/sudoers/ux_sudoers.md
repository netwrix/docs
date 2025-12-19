---
title: "UX_Sudoers Job"
description: "UX_Sudoers Job"
sidebar_position: 20
---

# UX_Sudoers Job

The UX_Sudoers job provides visibility into all rights granted via sudoers within audited Unix and
Linux environments.

## Analysis Tasks for the UX_Sudoers Job

Navigate to the **Unix** > **2.Privileged Access** > **Sudoers** > **UX_Sudoers** > **Configure**
node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the UX_Sudoers Job](/images/accessanalyzer/11.6/solutions/unix/privilegedaccess/sudoers/sudoersanalysis.webp)

The default analysis tasks are:

- Summarize number of provisioned users by host – Creates an interim processing table in the
  database for use by downstream analysis and report generation
- Determine highly provisioned users – Creates an interim processing table in the database for use
  by downstream analysis and report generation
- List sudoers entries across the environment – Creates the SA_UX_Sudoers_Details table accessible
  under the job’s Results node

In addition to the table and views created by the analysis tasks, the UX_Sudoers job produces the
following pre-configured report:

| Report              | Description                                                                       | Default Tags | Report Elements                                                                                                                                                                                                                  |
| ------------------- | --------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sudo Rights by Host | This report details all rights granted via sudoers across the audited environment | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays Hosts With Most Provisioning</li><li>Table – Provides details on Provisioning by Host</li><li>Table – Provides information on Sudoers Details</li></ul> |
