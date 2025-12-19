---
title: "FS_DeleteFiles_Status Job"
description: "FS_DeleteFiles_Status Job"
sidebar_position: 20
---

# FS_DeleteFiles_Status Job

The FS_DeleteFiles_Status job is designed to report on deleted resources from targeted file servers
that were deleted from the FS_DeleteFiles job. See the [FS_DeleteFiles Job](/docs/accessanalyzer/12.0/solutions/filesystem/cleanup/delete/fs_deletefiles.md) topic
for additional information.

## Analysis Tasks for the FS_DeleteFiles_Status Job

Navigate to the **FileSystem** > **Cleanup** > **4. Delete** > **FS_DeleteFiles_Status** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_DeleteFiles_Status Job](/images/accessanalyzer/12.0/solutions/filesystem/cleanup/delete/deletefilesstatusanalysis.webp)

The following analysis task is selected by default:

- Summarize file deletion actions – Creates the SA_FS_Delete_Status_Summary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_DeleteFiles_Status job
produces the following pre-configured report.

| Report         | Description                                                                          | Default Tags | Report Elements                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File Deletions | This report summarizes file deletions which have occurred during the Cleanup process | None         | This report is comprised of two elements: <ul><li>Line Chart – Displays the historical summary of file deletions</li><li>Table – provides details on file deletions</li></ul> |
