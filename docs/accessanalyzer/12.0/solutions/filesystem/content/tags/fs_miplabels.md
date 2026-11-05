---
title: "FS_MIPLabels Job"
description: "Report on files classified with Microsoft Information Protection sensitivity labels by using the FS_MIPLabels job."
sidebar_position: 10
---

# FS_MIPLabels Job

The FS_MIPLabels job reports on resources classified by Microsoft Information Protection (MIP)
sensitivity labels from targeted file servers.

:::note
The File System Access Auditing (FSAA) Data Collector collects label data by using the MIP
File SDK. See the
[Microsoft Information Protection Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/microsoftinformationprotection.md)
topic for the prerequisites to scan for labels. To apply sensitivity labels to files that
contain sensitive data, see the
[FS_MIPLabeling Job](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/fs_miplabeling.md) topic.
:::

:::note
This job replaces the FS_AIPLabels job. When you upgrade Access Analyzer, the FS_MIPLabels job
doesn't appear in an existing FileSystem solution unless you select **Full Upgrade** for the
solution in the Upgrade Wizard. If you use another upgrade option, copy the FS_MIPLabels job from
the `InstantSolutions` directory to the **FileSystem** > **4.Content** > **Tags** job group. See the
[Upgrade Wizard](/docs/accessanalyzer/12.0/install/application/upgrade/wizard.md) topic for
additional information on the upgrade options.
:::

## Analysis Tasks for the FS_MIPLabels Job

To view the analysis tasks, navigate to the **FileSystem** > **4.Content** > **Tags** >
**FS_MIPLabels** > **Configure** node and select **Analysis**.

:::warning
Don't modify or deselect the selected analysis tasks. Netwrix preconfigures the
analysis tasks for this job.
:::


![Analysis Tasks for the FS_MIPLabels Job](/images/accessanalyzer/12.0/solutions/filesystem/content/tags/miplabelsanalysis.webp)

The following analysis task is selected by default:

- MIP Label Details – Creates the SA_FS_FileLabel_Details table, accessible under the job’s Results
  node, which lists the sensitivity labels applied to files

In addition to the tables and views created by the analysis task, the FS_MIPLabels job produces the
following pre-configured report:

| Report     | Description                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MIP Labels | This report provides details on labels applied to files. The report rolls up this information by folder and summarizes it at the enterprise level. | None         | This report has three elements: <ul><li>Pie Chart – Displays enterprise sensitivity label summary</li><li>Table – Provides label details by folder</li><li>Table – Provides details on labels by file count</li></ul> |
