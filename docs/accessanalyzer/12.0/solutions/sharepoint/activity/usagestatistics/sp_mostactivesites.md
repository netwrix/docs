---
title: "SP_MostActiveSites Job"
description: "SP_MostActiveSites Job"
sidebar_position: 20
---

# SP_MostActiveSites Job

This job identifies the top five most active monitored sites.

## Analysis Tasks for the SP_MostActiveSites Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Usage Statistics** >
**SP_MostActiveSites** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the SP_MostActiveSites Job](/images/accessanalyzer/12.0/solutions/sharepoint/activity/usagestatistics/mostactivesitesanalysis.webp)

The default analysis task is:

- Most Active Sites Last 30 Days – Creates the SA_SPAC_MostActiveSites_Last30Days table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_MostActiveSites Job
produces the following pre-configured report:

| Report                           | Description                                                                                                                                                                                                                                                                                                                                                                                                   | Default Tags | Report Elements                                                                                                                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Sites – Last 30 Days | This report identifies the top five most active sites for the past 30 days. [Reads], [Updates], [Deletes], [Permission Changes] fields reflect the number of unique operations of each type that was performed on the site for this time frame. Unique Resources Accessed, number of active user performing operations on the site, as well as whether or not the active site contains sensitive information. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays information on most active sites by event count</li><li>Table – Provides details on most active sites by event count</li></ul> |
