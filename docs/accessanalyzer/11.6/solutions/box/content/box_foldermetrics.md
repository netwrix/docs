---
title: "Box_FolderMetrics Job"
description: "Box_FolderMetrics Job"
sidebar_position: 20
---

# Box_FolderMetrics Job

The Box_FolderMetrics Job offers insight into content sizing, staleness, and ownership of folders in
the Box environment.

:::note
The staleness threshold can be customized within the **Folder Metrics Details** analysis.
Largest and smallest folder size thresholds can be configured in a similar way on their respective
analysis tasks.
:::


## Analysis Tasks for the Box_FolderMetrics Job

Navigate to **Box** > **2.Content** > **Box_FolderMetrics** > **Configure** node and select
**Analysis** to view analysis tasks.

:::warning
Most of these analysis tasks should never be modified and never be deselected.
:::


![Analysis Tasks for the Box_FolderMetrics Job](/images/accessanalyzer/11.6/solutions/box/content/foldermetricsanalysis.webp)

The following analysis tasks are selected by default:

- Folder Metrics Details – Creates the Box_FolderMetrics_Details table accessible under the job’s
  Results node
    - Set to consider content stale after 30 days which is the @STALETHRESHOLD parameter value
    - See the
      [Customizable Analysis Tasks for the Box_FolderMetrics Job](#customizable-analysis-tasks-for-the-box_foldermetrics-job)
      topic for additional information.
- Largest Folders – Creates the Box_FolderMetrics_Largest table accessible under the job’s Results
  node
- Smallest Non-Empty Folders – Creates the Box_FolderMetrics_Smallest table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the Box_FolderMetrics Job produces the
following pre-configured reports.

| Report           | Description                                            | Default Tags | Report Elements                                                                                                                                                                                                                        |
| ---------------- | ------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Largest Folders  | This report summarizes the Box content by folder size. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top 5 largest folders</li><li>Table – Provides details on largest folders</li></ul>                                                                             |
| Smallest Folders | This report summarizes the Box content by folder size. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top 5 smallest folders with files</li><li>Table – Provides details on smallest folders with files</li><li>Table – Provides details on empty folders</li></ul> |


### Customizable Analysis Tasks for the Box_FolderMetrics Job

The default values for parameters that can be customized are:

| Analysis Task          | Customizable Parameter Name | Default Value | Value Indicates                      |
| ---------------------- | --------------------------- | ------------- | ------------------------------------ |
| Folder Metrics Details | @STALE_THRESHOLD            | 30            | Consider content stale after 30 days |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md) topic
for instructions on how to modify parameters.
