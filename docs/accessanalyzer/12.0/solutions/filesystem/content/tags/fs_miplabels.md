---
title: "FS_MIPLabels Job"
description: "FS_MIPLabels Job"
sidebar_position: 10
---

# FS_MIPLabels Job

The FS_MIPLabels job reports on resources classified by Microsoft Information Protection (MIP)
sensitivity labels from targeted file servers.

:::note
The FSAA Data Collector collects label data by using the Microsoft Information Protection (MIP)
File SDK. See the
[Microsoft Information Protection Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md)
topic for the prerequisites required to scan for labels. To apply sensitivity labels to files that
contain sensitive data, see the
[FS_MIPLabeling Job](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/fs_miplabeling.md) topic.
:::

## Analysis Tasks for the FS_MIPLabels Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Tags** >
**FS_MIPLabels** > **Configure** node and select **Analysis**.

:::warning
Don't modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_MIPLabels Job](/images/accessanalyzer/12.0/solutions/filesystem/content/tags/miplabelsanalysis.webp)

The following analysis task is selected by default:

- MIP Label Details – Creates the SA_FS_FileLabel_Details table, which lists the sensitivity labels
  applied to files, accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_MIPLabels job produces the
following pre-configured report:

| Report     | Description                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MIP Labels | This report provides details on labels applied to files. This information is rolled up by folder, and summarized at the enterprise level. | None         | This report is comprised of three elements: <ul><li>Pie Chart – Displays enterprise sensitivity label summary</li><li>Table– Provides details on label details by folder</li><li>Table – Provides details on labels by file count</li></ul> |
