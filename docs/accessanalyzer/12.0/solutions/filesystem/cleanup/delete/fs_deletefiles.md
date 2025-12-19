---
title: "FS_DeleteFiles Job"
description: "FS_DeleteFiles Job"
sidebar_position: 10
---

# FS_DeleteFiles Job

The FS_DeleteFiles job is designed to delete resources from targeted file servers that were
previously quarantined and can be deleted.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The FS_DeleteFiles job has the following configurable parameter:

- Number of days without access after which a file is a deletion candidate

See the
[Customizable Analysis Tasks for the FS_DeleteFiles Job](#customizable-analysis-tasks-for-the-fs_deletefiles-job)
topic for additional information.

## Analysis Tasks for the FS_DeleteFiles Job

Navigate to the **FileSystem** > **Cleanup** > **4. Delete** > **FS_DeleteFiles** > **Configure**
node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_DeleteFiles Job](/images/accessanalyzer/12.0/solutions/filesystem/cleanup/delete/deletefilesanalysis.webp)

The following analysis tasks are selected by default:

- Determine candidates for deletion – Creates the SA_FS_Delete_CandidatesView table accessible under
  the job’s Results node

    - The threshold for the number of days without access after which a file becomes a candidate for
      deletion can be configured. See the [Parameter Configuration](#parameter-configuration) topic
      for additional information.

### Customizable Analysis Tasks for the FS_DeleteFiles Job

The default values for parameters that can be customized are:

| Analysis Task                     | Customizable Parameter Name | Default Value | Value Indicates                                                                           |
| --------------------------------- | --------------------------- | ------------- | ----------------------------------------------------------------------------------------- |
| Determine candidates for deletion | @DELETE_THRESHOLD           | 180           | Set the number of days without access after which a file becomes a candidate for deletion |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/12.0/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for instructions to modify parameters.

## Action Tasks for the FS_DeleteFiles Job

Navigate to the **FileSystem** > **Cleanup** > **4. Delete** > **FS_DeleteFiles** > **Configure**
node and select **Actions** to view the action tasks.

:::warning
Do not enable the action unless it is required. Disable the action after execution to
prevent making unintended and potentially harmful changes to Active Directory.
:::


![Action Tasks for the FS_DeleteFiles Job](/images/accessanalyzer/12.0/solutions/filesystem/cleanup/delete/deletefilesaction.webp)

The following actions are deselected by default:

- Delete files – Deletes files that are listed as candidates for deletion in the
  FS_Delete_CandidatesView table. The threshold for the number of days without access after which a
  file becomes a candidate for deletion can be configured through the **Determines candidates for
  deletion** analysis task.

    - See the [Parameter Configuration](#parameter-configuration) topic for additional information
