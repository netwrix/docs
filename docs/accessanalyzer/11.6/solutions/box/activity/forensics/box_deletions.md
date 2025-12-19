---
title: "Box_Deletions Job"
description: "Box_Deletions Job"
sidebar_position: 10
---

# Box_Deletions Job

The Box_Deletions Job is comprised of analysis and reports, which use the data collected by the
0.Collection Job Group to identify file and folder deletions that have occurred over the past 30
days.

## Analysis Tasks for the Box_Deletions Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box_Deletions** > **Configure** node and
select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Box_Deletions Job](/images/accessanalyzer/11.6/solutions/box/activity/forensics/deletionsanalysis.webp)

The following analysis tasks are selected by default:

- Deletion Details – Creates the Box_Deletion_Details table accessible under the job’s Results node
- Deletions (Last 30 Days) – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box_Deletions Job produces the
following pre-configured report:

| Report                                      | Description                                                                                                                                                                        | Default Tags | Report Elements                                                                                                                                           |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File and Folder Deletions (Deletion Events) | This report identifies deletion events for the past 30 days. The detailed report shows all resources that were successfully deleted as well as which users performed those events. | None         | This report is comprised of two elements: <ul><li>Line Chart – Displays last 30 days of deletions</li><li>Table – Provides details on deletions</li></ul> |
