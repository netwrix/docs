---
title: "EX_DBSizing Job"
description: "EX_DBSizing Job"
sidebar_position: 30
---

# EX_DBSizing Job

The EX_DBSizing Job provides visibility into current database sizes, growth statistics, and
historical sizing information.

## Analysis Tasks for the EX_DBSizing Job

View the analysis tasks by navigating to the **Exchange** > **3. Databases** > **EX_DBSizing** >
**Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_DBSizing Job](/images/accessanalyzer/12.0/solutions/exchange/databases/dbsizinganalysis.webp)

The following analysis tasks are selected by default:

-   **2. Database Size History** – Creates the SA_EX_DBSizing_SizeHist table, accessible under the job’s
       Results node
- SET HISTORY RETENTION – Sets retention period in months

    - The default is 6 months. It can be modified.
    - See the
      [Exchange History Retention](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#exchange-history-retention)
      topic for additional information

-   **3. Database details table** – Creates the SA_EX_DBSizing_StoreDetails table, accessible under the
       job’s Results node
-   **4. 30 day Database growth table** – Creates the SA_EX_DBSizing_30DayGrowth table, accessible under
       the job’s Results node
-   **5. 7 day Database growth table** – Creates the SA_EX_DBSizing_7DayGrowth table, accessible under
       the job’s Results node

The following analysis task deletes table data from data collection and analysis jobs. This analysis
task should remain cleared unless specifically needed:

:::warning
Do not select the **00. Deletes all Stored Data** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.
:::


-   **1. Deletes all Stored Data**

    - See the
      [Troubleshooting Data Collection](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#troubleshooting-data-collection)
      topic for additional information

In addition to the tables and views created by the analysis tasks, the EX_DBSizing Job produces the
following pre-configured reports:

| Report                                   | Description                                                                                                                                                                                                                                                                            | Default Tags | Report Elements                                                                                                                                                                                                                                                                |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Database Details (Storage Group Details) | This report provides the details of Mailbox Stores grouped by Server, then Storage Group. This report helps administrators locate Storage Groups that may be growing out of control. If a storage group with very few users is extremely large, further investigation may be required. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays database sizes</li><li>Table – Provides details on database sizes</li></ul>                                                                                                                             |
| Database Growth Statistics               | This report displays the top 10 Databases that grew over the last 30 days in pure MB. This report is filtered on the Rank Column for Top 10 and may be modified to fit any desired Top outcome.                                                                                        | None         | This report is comprised of four elements: <ul><li>Stacked Bar Chart – Displays store size growth</li><li>Stacked Bar Chart – Displays WhiteSpace growth</li><li>Table – Provides details on store size growth</li><li>Table – Provides details on WhiteSpace growth</li></ul> |
| Historical Database Information          | This report shows the history of the store size, white space, mailbox count, and hard drive space on all targeted servers.                                                                                                                                                             | None         | This report is comprised of one element: <ul><li>Table – Displays details on historical store information</li></ul>                                                                                                                                                            |
| Mailbox Counts by Database               | This report graphically displays the number of Mailboxes by Database.  It provides an overall picture of the Exchange Mailbox Environment. Having a clear break down of the number of mailboxes per database allows for better planning of architecture in the future.                 | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays mailbox counts by database</li><li>Table – Provides details on mailbox counts by database</li></ul>                                                                                                     |
