---
title: "SP_MostActiveUsers Job"
description: "SP_MostActiveUsers Job"
sidebar_position: 30
---

# SP_MostActiveUsers Job

This job identifies the most active users from the last 30 days on all monitored SharePoint servers
with a view of Reads, Updates, Deletes, and Permission changes performed by a user.

## Analysis Tasks for the SP_MostActiveUsers Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Usage Statistics** >
**SP_MostActiveUsers** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the SP_MostActiveUsers Job](/images/accessanalyzer/11.6/solutions/sharepoint/activity/usagestatistics/mostactiveusersanalysis.webp)

The default analysis task is:

- Most Active Users Last 30 Days – SA_SPAC_MostActiveUsers_Last30Days table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_MostActiveUsers Job
produces the following pre-configured report:

| Report                           | Description                                                                                                                                                                                                                                                                                                    | Default Tags | Report Elements                                                                                                                                                                               |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Users – Last 30 Days | This report identifies the top users for the past 30 days. [View], [Delete], [Update], [Delete] fields reflect the number of unique operations of each type that was performed by the user for this time frame. Unique Resources are the number of distinct resources that have had activity during that time. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays information on top users by operation count</li><li>Table – Provides details on top users by operation count</li></ul> |
