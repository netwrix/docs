---
title: "FS_RestoreInheritance Job"
description: "FS_RestoreInheritance Job"
sidebar_position: 30
---

# FS_RestoreInheritance Job

The FS_RestoreInheritance job is designed to restore inheritance to previously quarantined files.

## Analysis Tasks for the FS_RestoreInheritance Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** > **FS_RestoreInheritance** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_RestoreInheritance Job](/images/accessanalyzer/12.0/solutions/filesystem/cleanup/quarantine/restoreinheritanceanalysis.webp)

The following analysis task is selected by default:

- Determines candidates for restored inheritance – Creates the
  SA_FS_RestoreInheritance_CandidatesView table accessible under the job’s Results node

## Action Tasks for the FS_RestoreInheritance Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** > **FS_RestoreInheritance** >
**Configure** node and select **Actions** to view the action tasks.

:::warning
Do not enable the action unless it is required. Disable the action after execution to
prevent making unintended and potentially harmful changes to Active Directory.
:::


:::warning
Do not modify the action task. The action task is preconfigured for this job.
:::


![Action Tasks for the FS_RestoreInheritance Job](/images/accessanalyzer/12.0/solutions/filesystem/cleanup/quarantine/restoreinheritanceaction.webp)

The following action tasks are deselected by default:

- Restore Permissions – Restores permission inheritance to quarantined files where activity has
  occurred
