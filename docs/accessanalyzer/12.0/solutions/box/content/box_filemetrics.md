---
title: "Box_FileMetrics Job"
description: "Box_FileMetrics Job"
sidebar_position: 10
---

# Box_FileMetrics Job

The Box_FileMetrics Job offers insight into content sizing, staleness, and ownership of files in the
Box environment.

:::note
The staleness threshold can be customized within the **File Metrics Details** analysis.
:::


## Analysis Tasks for the Box_FileMetrics Job

Navigate to **Box** > **2.Content** > **Box_FileMetrics** > **Configure** node and select
**Analysis** to view analysis tasks.

:::warning
Most of these analysis tasks should never be modified and never be deselected.
:::


![Analysis Tasks for the Box_FileMetrics Job](/images/accessanalyzer/12.0/solutions/box/content/filemetricsanalysis.webp)

The following analysis tasks are selected by default:

- File Metrics Details – Creates the Box_FileMetrics_Details table accessible under the job’s
  Results node
    - Set to consider content stale after 30 days which is the @STALETHRESHOLD parameter value
    - See the
      [Customize Analysis Tasks for the Box_FileMetrics Job](#customize-analysis-tasks-for-the-box_filemetrics-job)
      topic for additional information.
- File Count by User – Creates the Box_FileMetrics_UserFileCount table accessible under the job’s
  Results node
- Total File Size by User – Creates the Box_FileMetrics_UserFileSize table accessible under the
  job’s Results node
- File Counts by File Extension – Creates the Box_FileMetrics_ExtFileCount table accessible under
  the job’s Results node
- File Size by File Extension – Creates the Box_FileMetrics_ExtFileSize table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the Box_FileMetrics Job produces the
following pre-configured reports:

| Report             | Description                                               | Default Tags | Report Elements                                                                                                                                                                                                                                                                                                         |
| ------------------ | --------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Files by Extension | This report summarizes the Box content by file extension. | None         | This report is comprised of four elements: <ul><li>Pie Chart – Displays top 20 file counts by file extension</li><li>Bar Chart – Displays top 5 file size by file extension</li><li>Table – Provides details on file counts by file extension</li><li>Table – Provides details on file size by file extension</li></ul> |
| Files by User      | This report summarizes the Box content by user.           | None         | This report is comprised of four elements: <ul><li>Bar Chart – Displays top 5 file count by user</li><li>Bar Chart – Displays top 5 file size by user</li><li>Table – Provides details on file count by user</li><li>Table – Provides details on file size by user</li></ul>                                            |


### Customize Analysis Tasks for the Box_FileMetrics Job

The default values for parameters that can be customized are:

| Analysis Task        | Customizable Parameter Name | Default Value | Value Indicates                      |
| -------------------- | --------------------------- | ------------- | ------------------------------------ |
| File Metrics Details | @STALE_THRESHOLD            | 30            | Consider content stale after 30 days |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/12.0/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for instructions on how to modify parameters.
