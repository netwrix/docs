---
title: "EX_UserMetrics Job"
description: "EX_UserMetrics Job"
sidebar_position: 90
---

# EX_UserMetrics Job

The EX_UserMetrics Job provides information around each users mail-flow in the organization.

## Analysis Tasks for the EX_UserMetrics Job

View the analysis tasks by navigating to the **Exchange** > **1. HUB Metrics** >
**EX_UserMetrics** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_UserMetrics Job](/images/accessanalyzer/12.0/solutions/exchange/hubmetrics/usermetricsanalysis.webp)

The following analysis tasks are selected by default:

-   **1. User Metrics - Volume** – Creates the SA_EX_UserMetrics_Volume table, accessible under the
       job’s Results node
-   **2. User Metrics - Count** – Creates the SA_EX_UserMetrics_Count table, accessible under the job’s
       Results node

In addition to the tables and views created by the analysis tasks, the EX_UserMetrics Job produces
the following pre-configured reports:

| Report                          | Description                                                                   | Default Tags | Report Elements                                                                                                                                                                                                    |
| ------------------------------- | ----------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Top Receivers by Message Count  | This report identifies users who have received the most messages.             | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top receivers by message count (last 30 days)</li><li>Table – Provides details on top receivers by message count (last 30 days)</li></ul>   |
| Top Receivers by Message Volume | This report identifies users who have received the most mail by total volume. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top receivers by message volume (last 30 days)</li><li>Table – Provides details on top receivers by message volume (last 30 days)</li></ul> |
| Top Senders by Message Count    | This report identifies users who have sent the most mail.                     | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top senders by message count (last 30 days)</li><li>Table – Provides details on top senders by message count (last 30 days)</li></ul>       |
| Top Senders by Message Volume   | This report identifies users who have sent the most mail by total volume.     | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top senders by message volume (last 30 days)</li><li>Table – Provides details on top senders by message volume (last 30 days)</li></ul>     |
