---
title: "EX_HourlyMetrics Job"
description: "EX_HourlyMetrics Job"
sidebar_position: 60
---

# EX_HourlyMetrics Job

The EX_HourlyMetrics Job provides visibility into how much mail-flow the organization sends and
receives each hour.

## Analysis Tasks for the EX_HourlyMetrics Job

View the analysis tasks by navigating to the **Exchange** > **1. HUB Metrics** >
**EX_HourlyMetrics** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_HourlyMetrics Job](/images/accessanalyzer/11.6/solutions/exchange/hubmetrics/hourlymetricsanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Server Averages** – Creates the SA_EX_HourlyMetrics_ServerAverages table, accessible under the
       job’s Results node
-   **2. Org Averages** – Creates the SA_EX_HourlyMetrics_OrgAverages table, accessible under the job’s
       Results node

In addition to the tables and views created by the analysis tasks, the EX_HourlyMetrics Job produces
the following pre-configured reports:

| Report                                  | Description                                                                                    | Default Tags | Report Elements                                                                                                                                                                               |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hourly Traffic (Average Hourly Traffic) | This report identifies which hours during the day have the most traffic by count of messages.  | None         | This report is comprised of two elements: <ul><li>Column Chart – Displays average hourly traffic by enterprise</li><li>Table – Provides details on average hourly traffic by server</li></ul> |
| Hourly Volume (Average Hourly Volume)   | This report identifies which hours during the day have the most traffic by volume of messages. | None         | This report is comprised of two elements: <ul><li>Column Chart – Displays average hourly volume (MB)</li><li>Table – Provides details on server averages</li></ul>                            |
