---
title: "Outlook Web Access > EX_OWATraffic Job"
description: "Outlook Web Access > EX_OWATraffic Job"
sidebar_position: 50
---

# Outlook Web Access > EX_OWATraffic Job

The EX_OWATraffic Job provides visibility into Outlook Web Access Traffic in the organization.

![Outlook Web Access > EX_OWATraffic Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/exchange/casmetrics/outlookwebaccessjobstree.webp)

The EX_OWATraffic job is located in the Outlook Web Access Job Group.

## Analysis Tasks for the EX_OWATraffic Job

View the analysis tasks by navigating to the **Exchange** > **2. CAS Metrics** > **Outlook Web
Access** > **EX_OWATraffic** > **Configure** node and select **Analysis**.

:::warning
Most of these analysis tasks are preconfigured and should not be modified ordeselected.
There is one that is deselected by default, as it is for troubleshooting purposes.
:::


![Analysis Tasks for the EX_OWATraffic Job](/images/accessanalyzer/12.0/solutions/exchange/casmetrics/owatrafficanalysis.webp)

The following analysis tasks are selected by default:

-   **1. OWA Traffic** – Creates the SA_EX_OWATraffic_Details table, accessible under the job’s Results
       node
-   **2. User Summary** – Creates the SA_EX_OWATraffic_UserSummary table, accessible under the job’s
       Results node
-   **3. Server View** – Creates the SA_EX_OWATraffic_ServerSummary table, accessible under the job’s
       Results node
-   **4. Server View** – Creates the SA_EX_OWATraffic_ServerRanked table, accessible under the job’s
       Results node
-   **5. SET HISTORY RETENTION** – Sets retention period in months

    - By default it is set to retain 6 months. This can be modified.
    - See the
      [Exchange History Retention](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#exchange-history-retention)
      topic for additional information

The following analysis task deletes table data from data collection and analysis jobs. This analysis
task should remain cleared unless specifically needed:

:::warning
Do not select the **00. Delete all History** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.
:::


-   **0. Deletes all History - LEAVE UNCHECKED** – Clears all historical data
    - See the
      [Troubleshooting Data Collection](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#troubleshooting-data-collection)
      topic for additional information

In addition to the tables and views created by the analysis tasks, the EX_OWATraffic Job produces
the following pre-configured reports:

| Report                                 | Description                                              | Default Tags | Report Elements                                                                                                                                                                                      |
| -------------------------------------- | -------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Top Servers by Average Load            | This report shows servers with the highest average load. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top servers by average daily user count</li><li>Table – Provides details on top servers by average daily user count</li></ul> |
| Top Users (Outlook Web Access Traffic) | This report identifies top users of OWA.                 | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top users</li><li>Table – Provides details on top users</li></ul>                                                             |
