---
title: "EX_MetricsDetails Job"
description: "EX_MetricsDetails Job"
sidebar_position: 30
---

# EX_MetricsDetails Job

The EX_MetricsDetails Job collects daily user-to-user Traffic. Walk through this jobs query to
configure the internal domains to collect the sender to recipient traffic from. By default, the
query is configured to collect the previous 1 day of Message Tracking Logs and has @netwrix.com
configured as the domain. If the domains are not configured in the query, then most likely data
collection does not return.

## Queries for the EX_MetricsDetails Job

The EX_MetricsDetails Job uses the ExchangeMetrics Data Collector.

![Queries for the EX_MetricsDetails Job](/images/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/metricsdetailsquery.webp)

The following query is included in the EX_MetricsDetails Job:

- Activity metrics – Collects user to user traffic per day

    - Domains must be configured for data collection to return data
    - See the [Configure the Activity Metrics Query](#configure-the-activity-metrics-query) topic
      for additional information

### Configure the Activity Metrics Query

The Activity Metrics Query has been preconfigured to run with the ExchangeMetrics Data Collector to
collect user traffic per day. The domains must be configured for data collection to return data.

Follow the steps to configure the Activity Metrics Query.

**Step 1 –** Navigate to the **Exchange** > **1. HUB Metrics** > **0. Collection** >
**EX_MetricsDetails** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the Activity metrics Query and click **Query
Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Exchange Metrics Data
Collector Wizard opens.

:::warning
Do not modify other wizard pages. The wizard pages are pre-configured for this job.
:::


![Exchange Metrics Data Collector Wizard Message Activity Filter page](/images/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/exchangemetricsmessageactivityfilter.webp)

**Step 4 –** Navigate to the
[ExchangeMetrics: Message Activity Filter](/docs/accessanalyzer/12.0/admin/datacollector/exchangemetrics/messageactivityfilter.md)
page to configure the internal domains from which to collect the sender to recipient traffic. The
filter should remain **Ends With**. Replace the `@netwrix.com` variable for both the **Senders** and
**Recipients** with the `@domain.com` variable to be audited.

**Step 5 –** Navigate to the Summary page and click **Finish**.

The EX_MetricsDetails Job returns data for the identified sender and recipient domains.

## Analysis Tasks for the EX_MetricsDetails Job

View the analysis tasks by navigating to the **Exchange** > **1. HUB Metrics** > **0. Collection** >
**EX_MetricsDetails** > **Configure** node and selecting **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_MetricsDetails Job](/images/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/metricsdetailsanalysis.webp)

The following analysis tasks are selected by default:

-   **1. User to User Traffic History** – Creates the SA_EX_ExhangeMetrics_MessageTraffic table
       accessible under the job’s Results node
-   **2. SET HISTORY RETENTION** – Sets retention period in months

    - By default set to retain **6 months**
    - This retention period can be modified. See the
      [Exchange History Retention](ex_metricscollection.md#exchange-history-retention) topic for
      additional information.

The following analysis task clears table data from data collection and analysis jobs. This analysis
task should remain deselected unless specifically needed:

:::warning
Do not select the **00. DROP HISTORY** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.
:::


-   **0. DROP HISTORY - LEAVE UNCHECKED** – Clears all historical data

    - See the
      [Troubleshooting Data Collection](ex_metricscollection.md#troubleshooting-data-collection)
      topic for additional information
