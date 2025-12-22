---
title: "EX_DLCleanup Job"
description: "EX_DLCleanup Job"
sidebar_position: 40
---

# EX_DLCleanup Job

The EX_DLCleanup job identifies potentially stale Distribution Groups based on the last domain logon
of the members, membership counts, and last time mail was sent to the distribution lists. These DLs
should be reviewed and cleaned up.

## Analysis Tasks for the EX_DLCleanup Job

View the analysis task by navigating to the **Exchange** > **6. Distribution Lists** >
**EX_DLCleanup** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the EX_DLCleanup Job](/images/accessanalyzer/12.0/solutions/exchange/distributionlists/dlcleanupanalysis.webp)

The following analysis task is selected by default:

-   **1. DL Cleanup** – Creates the SA_EX_GroupCleanup_GroupSummary table, accessible under the job’s
       Results node

In addition to the tables and views created by the analysis task, the EX_DLCleanup job produces the
following pre-configured report:

| Report                                                 | Description                                                                               | Default Tags | Report Elements                                                                                          |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------- |
| Distribution List Cleanup (Distribution List Overview) | This report identifies common issues which may affect distribution list group membership. | None         | This report is comprised of one element: <ul><li>Table – Provides a distribution list overview</li></ul> |
