---
title: "UX_NFS Job"
description: "UX_NFS Job"
sidebar_position: 20
---

# UX_NFS Job

The UX_NFS job identifies potentially insecure NFS share options which are categorized by their risk
level. Separate lists of options are checked based on target operating system.

## Analysis Tasks for the UX_NFS Job

Navigate to the **Unix** > **3.Sharing** > **UX_NFS** > **Configure** node and select **Analysis**
to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the UX_NFS Job](/images/accessanalyzer/11.6/solutions/unix/sharing/nfsanalysis.webp)

The default analysis tasks are:

- Lists high risk NFS share options – Creates an interim processing table in the database for use by
  downstream analysis and report generation
- Highlights hosts with a large number of risky shares – Creates an interim processing table in the
  database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis task, the UX_NFS job produces the
following pre-configured report:

| Report                                       | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                                                                                   |
| -------------------------------------------- | ---------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFS Shares with Potentially Insecure Options | This report identifies NFS shares with options which may lead to open access | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays Top Hosts by Potentially Insecure Shares</li><li>Table – Provides details on Top Hosts by Potentially Insecure Shares bar chart</li><li>Table – Provides details on List of Potentially Insecure Share Options</li></ul> |
