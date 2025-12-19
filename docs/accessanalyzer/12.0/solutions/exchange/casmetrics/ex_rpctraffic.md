---
title: "Outlook Anywhere > EX_RPCTraffic Job"
description: "Outlook Anywhere > EX_RPCTraffic Job"
sidebar_position: 40
---

# Outlook Anywhere > EX_RPCTraffic Job

The EX_RPCTraffic job provides visibility into Outlook Anywhere or RPC\HTTPs Traffic in the
organization.

![Outlook Anywhere > EX_RPCTraffic Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/exchange/casmetrics/outlookanywherejobstree.webp)

The EX_RPCTraffic job is located in the Outlook Anywhere job group.

## Analysis Tasks for the EX_RPCTraffic Job

View the analysis tasks by navigating to the **Exchange** > **2. CAS Metrics** > **Outlook
Anywhere** > **EX_RPCTraffic** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_RPCTraffic Job](/images/accessanalyzer/12.0/solutions/exchange/casmetrics/rpctrafficanalysis.webp)

The following analysis tasks are selected by default:

-   **1. RPC View** – Creates the SA_EX_RPCTraffic_Details table, accessible under the job’s Results
       node
-   **2. User Summary** – Creates the SA_EX_RPCTraffic_UserSummary table, accessible under the job’s
       Results node
-   **3. Server View** – Creates the SA_EX_RPCTraffic_ServerSummary table, accessible under the job’s
       Results node
-   **4. Servers Ranked** – Creates the SA_EX_RPCTraffic_ServerRanked table, accessible under the job’s
       Results node
-   **5. SET HISTORY RETENTION** – Sets retention period in months

    - The default is 6 months. It can be modified.
    - See the
      [Exchange History Retention](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#exchange-history-retention)
      topic for additional information

The following analysis tasks deletes table data from data collection and analysis jobs. These
analysis tasks should remain cleared unless specifically needed:

:::warning
Do not select the **00. Delete all History** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.
:::


-   **0. Delete all History - LEAVE UNCHECKED** – Clears all historical data

    - See the
      [Troubleshooting Data Collection](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#troubleshooting-data-collection)
      topic for additional information

In addition to the tables and views created by the analysis tasks, the EX_RPCTraffic Job produces
the following pre-configured reports:

| Report                                                                 | Description                                              | Default Tags | Report Elements                                                                                                                                                                                              |
| ---------------------------------------------------------------------- | -------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Top Servers by Average Load ( Top Servers by Average Daily User Count) | This report shows servers with the highest average load. | None         | This report is comprised of two elements: <ul><li>Stacked Bar Chart – Displays top servers by average daily user count</li><li>Table – Provides details on top servers by average daily user count</li></ul> |
| Top Users (Outlook Anywhere Traffic)                                   | This report identifies top users of Outlook Anywhere.    | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top users</li><li>Table – Provides details on top users</li></ul>                                                                     |
