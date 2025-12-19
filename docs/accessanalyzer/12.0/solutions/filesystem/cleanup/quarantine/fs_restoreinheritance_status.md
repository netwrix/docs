---
title: "FS_RestoreInheritance_Status Job"
description: "FS_RestoreInheritance_Status Job"
sidebar_position: 40
---

# FS_RestoreInheritance_Status Job

The FS_RestoreInheritance_Status job is designed to report on inheritance that was restored to
previously quarantined files.

## Analysis Tasks for the FS_RestoreInheritance_Status Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** >
**FS_RestoredInheritance_Status** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the FS_RestoreInheritance_Status Job](/images/accessanalyzer/12.0/solutions/filesystem/cleanup/quarantine/restoreinheritancestatusanalysis.webp)

The following analysis tasks are selected by default:

- Summarize restore inheritance actions – Creates an interim processing table in the database for
  use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS_RestoreInheritance_Status
job produces the following pre-configured report.

| Report               | Description                                                                               | Default Tags | Report Elements                                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Restored Inheritance | This report summarizes restored inheritance which has occurred during the Cleanup process | None         | This report is comprised of two elements: <ul><li>Line Chart – Displays the historical summary of restored inheritance</li><li>Table – provides details on restored inheritance</li></ul> |
