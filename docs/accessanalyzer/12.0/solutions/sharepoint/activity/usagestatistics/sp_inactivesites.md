---
title: "SP_InactiveSites Job"
description: "SP_InactiveSites Job"
sidebar_position: 10
---

# SP_InactiveSites Job

This job highlights your environments least active Sites or Site Collections.

## Analysis Tasks for the SP_InactiveSites Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Usage Statistics** >
**SP_InactiveSites** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the SP_InactiveSites Job](/images/accessanalyzer/12.0/solutions/sharepoint/activity/usagestatistics/inactivesitesanalysis.webp)

The default analysis task is:

- Inactive Sites Last 30 Days – Creates the SA_SP_InactiveSites_Last30Days table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_InactiveSites Job
produces the following pre-configured report:

| Report         | Description                                                                                                                                                                                                                                 | Default Tags | Report Elements                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inactive Sites | This report identifies Sites that have not had activity for at least 30 days. [View], [Delete], [Update], [Delete] fields reflect the number of unique operations of each type that was performed on the inactive site for this time frame. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays information on inactive sites</li><li>Table – Provides details on inactive sites</li></ul> |
