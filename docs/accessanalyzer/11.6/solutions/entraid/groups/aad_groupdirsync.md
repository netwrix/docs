---
title: "AAD_GroupDirSync Job"
description: "AAD_GroupDirSync Job"
sidebar_position: 40
---

# AAD_GroupDirSync Job

The AAD_GroupDirSync Job summarizes on-premises Active Directory syncing in the audited Microsoft
Entra ID environment.

## Analysis Tasks for the AAD_GroupDirSync Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_GroupDirSync** > **Configure** node
and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis tasks for AAD_GroupDirSync Job](/images/accessanalyzer/11.6/solutions/entraid/groups/groupdirsyncanalysis.webp)

The default analysis tasks are:

- Calculate group DirSync details – Creates the AAD_GroupDirSync_Details table accessible under the
  job’s Results node
- Summarize group DirSync details – Creates the AAD_GroupDirSync_EnterpriseSummary table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_GroupDirSync Job produces the
following pre-configured report.

| Report        | Description                                                                     | Default Tags | Report Elements                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Syncing | This report indicates the sync status of groups within the audited environment. | None         | This report is comprised of two elements: <ul><li>Pie Chart – Displays an enterprise group synching summary</li><li>Table – Provides group sync details</li></ul> |
