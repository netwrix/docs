---
title: "FS_AIPLabels Job"
description: "Report on files classified with Microsoft Information Protection sensitivity labels by using the FS_AIPLabels job."
sidebar_position: 10
---

# FS_AIPLabels Job

The FS_AIPLabels job reports on resources classified by Microsoft Information Protection (MIP)
sensitivity labels from targeted file servers.

:::note
The FSAA Data Collector collects label data by using the Microsoft Information Protection (MIP)
File SDK. See the
[Microsoft Information Protection Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md)
topic for the prerequisites required to scan for labels. To apply sensitivity labels to files that
contain sensitive data, see the
[FS_MIPLabeling Job](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/fs_miplabeling.md) topic.

A future release will rename this job to FS_MIPLabels.
:::

## Analysis Tasks for the FS_AIPLabels Job

To view the analysis tasks, navigate to the **FileSystem** > **4.Content** > **Tags** >
**FS_AIPLabels** > **Configure** node and select **Analysis**.

:::warning
Don't modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_AIPLabels Job](/images/accessanalyzer/12.0/solutions/filesystem/content/tags/aiplabelsanalysis.webp)

The following analysis task is selected by default:

- MIP Label Details – Creates the SA_FS_FileLabel_Details table, accessible under the job’s Results
  node, which lists the sensitivity labels applied to files

In addition to the tables and views created by the analysis task, the FS_AIPLabels job produces the
following pre-configured report:

| Report     | Description                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MIP Labels | This report provides details on labels applied to files. The report rolls up this information by folder and summarizes it at the enterprise level. | None         | This report has three elements: <ul><li>Pie Chart – Displays enterprise sensitivity label summary</li><li>Table – Provides label details by folder</li><li>Table – Provides details on labels by file count</li></ul> |
