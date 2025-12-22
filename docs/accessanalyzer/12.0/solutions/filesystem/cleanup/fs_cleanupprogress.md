---
title: "FS_CleanupProgress Job"
description: "FS_CleanupProgress Job"
sidebar_position: 50
---

# FS_CleanupProgress Job

The FS_CleanupProgress job summarizes the progress of the cleanup effort and highlights the amount
of storage reclaimed on each host.

## Analysis Tasks for the FS_CleanupProgress Job

Navigate to the **FileSystem** > **Cleanup** > **FS_CleanupProgress** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_CleanupProgress Job](/images/accessanalyzer/12.0/solutions/filesystem/cleanup/cleanupprogressanalysis.webp)

The following analysis tasks are selected by default:

- Summarize share- and host-level cleanup progress – Creates the SA_FS_CleanupProgress_ShareDetails
  table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_CleanupProgress job
produces the following pre-configured report.

| Report           | Description                                                                 | Default Tags | Report Elements                                                                                                                                                            |
| ---------------- | --------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cleanup Progress | This report gives a high-level overview of an organization's cleanup effort | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays the host summary of cleanup progress</li><li>Table – provides details on cleanup progress</li></ul> |
