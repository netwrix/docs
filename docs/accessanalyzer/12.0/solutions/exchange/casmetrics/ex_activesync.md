---
title: "ActiveSync > EX_ActiveSync Job"
description: "ActiveSync > EX_ActiveSync Job"
sidebar_position: 30
---

# ActiveSync > EX_ActiveSync Job

The EX_ActiveSync job provides visibility into ActiveSync Traffic in the Organization.

![ActiveSync > EX_ActiveSync Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/exchange/casmetrics/activesyncjobstree.webp)

The EX_ActiveSync job is located in the ActiveSync job group.

## Analysis Tasks for the EX_ActiveSync Job

View the analysis tasks by navigating to the **Exchange** > **2. CAS Metrics** > **ActiveSync** >
**EX_ActiveSync** > **Configure** node and select **Analysis**.

:::warning
Most of these analysis tasks are preconfigured and should not be modified or
deselected. There are some that are deselected by default, as they are for troubleshooting purposes.
:::


![Analysis Tasks for the EX_ActiveSync Job](/images/accessanalyzer/12.0/solutions/exchange/casmetrics/activesyncanalysis.webp)

The following analysis tasks are selected by default:

- 01b. Active Sync Data – Creates the SA_EX_ActiveSync_Details table, accessible under the job’s
  Results node
-   **2. Last Week Summary** – Creates an interim processing table in the database for use by downstream
       analysis and report generation
-   **3. User Device History** – Creates the SA_EX_ActiveSync_UserDeviceHistory table, accessible under
       the job’s Results node
-   **4. Device Population** – Creates the SA_EX_ActiveSync_DevicePopulation table, accessible under the
       job’s Results node
-   **5. Users Ranked** – Creates the SA_EX_ActiveSync_UsersRanked table accessible, under the job’s
       Results node
-   **6. Servers Ranked** – Creates the SA_EX_ActiveSync_ServersRanked table accessible, under the job’s
       Results node
-   **7. SET HISTORY RETENTION** – Sets retention period in months

    - The default is **6 months**. It can be modified.
    - See the
      [Exchange History Retention](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#exchange-history-retention)
      topic for additional information

The following analysis task deletes table data from the analysis jobs. This analysis task should
remain cleared unless specifically needed:

:::warning
Do not select the **00. Deletes all History** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.
:::


-   0. Delete all History

    - See the
      [Troubleshooting Data Collection](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#troubleshooting-data-collection)
      topic for additional information

The following analysis task updates the table to clean the data so that any UserAgent information
that is returned as NULL is updated based on existing data in the table:

- 01a. Clean NULL UserAgent – Updates UserAgent information which was returned as NULL based on
  existing data

In addition to the tables and views created by the analysis tasks, the EX_ActiveSync Job produces
the following pre-configured reports:

| Report                                                | Description                                                                                                                                    | Default Tags | Report Elements                                                                                                                                                                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Device Types (Device Population)                      | This report identifies what device models are currently being used with ActiveSync, and the average load they put on the environment each day. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays most popular devices</li><li>Table – Provides details on most popular devices</li></ul>                             |
| Server Traffic (Top Servers by Average Daily Traffic) | This report ranks CAS servers by volume of ActiveSync traffic.                                                                                 | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top users by average daily traffic</li><li>Table – Provides details on top users by average daily traffic</li></ul> |
| Top Users (Top Users by Average Daily Traffic)        | This report shows the top users of ActiveSync.                                                                                                 | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top users by average daily traffic</li><li>Table – Provides details on top users by average daily traffic</li></ul> |
| User Devices (User Phones)                            | This report identifies all devices which have been associated with a User, and the time frames when they were used.                            | None         | This report is comprised of one element: <ul><li>Table – Provides details on user devices</li></ul>                                                                                        |
