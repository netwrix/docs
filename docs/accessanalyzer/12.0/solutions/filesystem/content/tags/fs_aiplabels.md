---
title: "FS_AIPLabels Job"
description: "Report on files classified with Azure Information Protection (AIP) labels by using the FS_AIPLabels job."
sidebar_position: 10
---

# FS_AIPLabels Job

The FS_AIPLabels job reports on resources classified by Azure Information Protection
(AIP) labels from targeted file servers.

:::note
This job collects Microsoft Information Protection (MIP) labels. A future release will rename it to
FS_MIPLabels.
:::

## Analysis Tasks for the FS_AIPLabels Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Tags** >
**FS_AIPLabels** > **Configure** node and select **Analysis**.

:::warning
Don't modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_AIPLabels Job](/images/accessanalyzer/12.0/solutions/filesystem/content/tags/aiplabelsanalysis.webp)

The following analysis task is selected by default:

- AIP Label Details – Creates the SA_FS_FileLabel_Details table accessible under the job’s Results
  node

In addition to the tables and views created by the analysis task, the FS_AIPLabels job produces the
following pre-configured report:

| Report     | Description                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AIP Labels | This report provides details on labels applied to files. The report rolls up this information by folder and summarizes it at the enterprise level. | None         | This report has three elements: <ul><li>Pie Chart – Displays enterprise AIP summary</li><li>Table– Provides details on label details by folder</li><li>Table – Provides details on labels by file count</li></ul> |
