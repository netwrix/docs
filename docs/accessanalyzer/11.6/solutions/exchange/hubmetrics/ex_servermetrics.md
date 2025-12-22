---
title: "EX_ServerMetrics Job"
description: "EX_ServerMetrics Job"
sidebar_position: 80
---

# EX_ServerMetrics Job

The EX_ServerMetrics Job provides visibility into server mail flow statistics, such as, sent,
received, journaling, transport, and NDR counts and sizes.

## Analysis Tasks for the EX_ServerMetrics Job

View the analysis tasks by navigating to the **Exchange** > **1. HUB Metrics** >
**EX_ServerMetrics** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_ServerMetrics Job](/images/accessanalyzer/11.6/solutions/exchange/hubmetrics/servermetricsanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Transport** – Creates the SA_EX_ServerMetrics_Transport table, accessible under the job’s
       Results node
-   **2. NDRs** – Creates the SA_EX_ServerMetrics_NDRs table, accessible under the job’s Results node
-   **3. Journaling** – Creates the SA_EX_ServerMetrics_Journaling table, accessible under the job’s
       Results node
-   **4. Yesterday** – Creates the SA_EX_ServerMetrics_Yesterday table, accessible under the job’s
       Results node
-   **5. Last 7 Days** – Creates the SA_EX_ServerMetrics_Last7Days table, accessible under the job’s
       Results node
-   **6. Last 30 Days** – Creates the SA_EX_ServerMetrics_Last30Days table, accessible under the job’s
       Results node
-   **7. Historical Statistics** – Creates the SA_EX_ServerMetrics_HistoricalStatistics table,
       accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX_ServerMetrics Job produces
the following pre-configured reports:

| Report                                  | Description                                                                         | Default Tags | Report Elements                                                                                                                                                                                                          |
| --------------------------------------- | ----------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Journaling (Journaling Traffic)         | This report summarizes journaling message traffic across the organization.          | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top servers by journaling messages (last 30 days)</li><li>Table – Provides details on top servers by journaling messages (last 30 days)</li></ul> |
| NDRs (Exchange NDRs)                    | This report shows NDR counts broken down by server.                                 | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top servers by NDRs (last 30 days)</li><li>Table – Provides details on top servers by NDRs (last 30 days)</li></ul>                               |
| Server Traffic (Top Servers by Traffic) | This report summarizes server traffic across the organization for the Last 30 Days. | None         | This report is comprised of two elements: <ul><li>Stacked Bar Chart – Displays top servers by total traffic</li><li>Table – Provides details top servers by total traffic</li></ul>                                      |
| Transport (Transport Messages)          | This report summarizes transport messages across the exchange organization.         | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top servers by transport messages (last 30 days)</li><li>Table – Provides details on top servers by transport messages (last 30 days)</li></ul>   |
