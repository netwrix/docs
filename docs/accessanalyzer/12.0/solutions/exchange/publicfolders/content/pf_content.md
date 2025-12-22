---
title: "PF_Content Job"
description: "PF_Content Job"
sidebar_position: 20
---

# PF_Content Job

The PF_Content job is comprised of analyses and reports that focus on public folder sizing and
content aging.

## Analysis Tasks for the PF_Content Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** > **Content** >
**PF_Content** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the PF_Content Job](/images/accessanalyzer/12.0/solutions/exchange/publicfolders/content/contentanalysis.webp)

The following analysis tasks are selected by default:

- 00.PF Environment Aging by Size – Creates the SA_PF_Content_AgingBySize table, accessible under
  the job’s Results node
- 01.PF Environment Aging by Count – Creates the SA_PF_Content_AgingByCount table, accessible under
  the job’s Results node
- 02.Subtree Aging by Size – Creates the SA_PF_Content_SubtreeAgingBySize table, accessible under
  the job’s Results node
- 03.Subtree Aging by Count – Creates the SA_PF_Content_SubtreeAgingByCount table, accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the PF_Content job produces the
following pre-configured reports:

| Report                                                  | Description                                                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                                                     |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aging by File Count (Public Folder Aging by File Count) | This report highlights content aging within the targeted Public Folder environment, with a focus on the number of files. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays public folder environment aging</li><li>Table – Provides details on public folder environment aging by file count</li><li>Table – Provides details on aging by sub tree</li></ul>          |
| Aging by File Size (Public Folder Aging by File Size)   | This report highlights content aging within the targeted Public Folder environment, with a focus on the size of files.   | None         | This report is comprised of three elements: <ul><li>Column Chart – Displays public folder environment aging by file size</li><li>Table – Provides details on public folder environment by file size</li><li>Table – Provides details on aging by sub tree</li></ul> |
