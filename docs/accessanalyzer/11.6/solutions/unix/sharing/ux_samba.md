---
title: "UX_Samba Job"
description: "UX_Samba Job"
sidebar_position: 30
---

# UX_Samba Job

The UX_Samba job identifies potentially insecure Samba share configurations which are categorized by
their risk level.

## Analysis Tasks for the UX_Samba Job

View the analysis tasks by navigating to the **Unix** > **3.Sharing** > **UX_Samba** > **Configure**
node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the UX_Samba Job](/images/accessanalyzer/11.6/solutions/unix/sharing/sambaanalysis.webp)

The default analysis tasks are:

- Lists high risk Samba share configurations – Creates the SA_UX_Samba_HighRiskSambaShares table
  accessible under the job’s Results node
- Highlights hosts with a large number of risky shares – Creates an interim processing table in the
  database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis task, the UX_NFS job produces the
following pre-configured report:

| Report                                                | Description                                                                       | Default Tags | Report Elements                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------------- | --------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Samba Shares with Potentially Insecure Configurations | This report identifies Samba shares with parameters which may lead to open access | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays Top Hosts by Potentially Insecure Shares</li><li>Table – Provides details on Top Hosts by Potentially Insecure Shares bar chart</li><li>Table – Provides details on List of Potentially Insecure Share Configurations</li></ul> |
