---
title: "FS_NotifyOwners_Status Job"
description: "FS_NotifyOwners_Status Job"
sidebar_position: 20
---

# FS_NotifyOwners_Status Job

The FS_NotifyOwners_Status job is comprised of analysis and reports that summarize the actions
performed by the FS_NotifyOwners job. See the
[FS_NotifyOwners Job](/docs/accessanalyzer/11.6/solutions/filesystem/cleanup/notify/fs_notifyowners.md) topic
for additional information.

## Analysis Tasks for the FS_NotifyOwners_Status Job

Navigate to the **FileSystem** > **Cleanup** > **2. Notify** > **FS_NotifyOwners_Status** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_NotifyOwners_Status Job](/images/accessanalyzer/11.6/solutions/filesystem/cleanup/notify/notifyownersstatusanalysis.webp)

The following analysis tasks are selected by default:

- Summarize notifications – Creates the SA_FS_CleanupAssessment_ShareDetails_NotifySummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_NotifyOwners_Status job
produces the following pre-configured report.

| Report                                          | Description                                                                                    | Default Tags | Report Elements                                                                                                                                                                         |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Owner Notifications (Share Owner Notifications) | This report summarizes share owner notifications which have occurred during the Cleanup effort | None         | This report is comprised of two elements: <ul><li>Line Chart – Displays the historical summary of notify share owners</li><li>Table – provides details on notify share owners</li></ul> |
