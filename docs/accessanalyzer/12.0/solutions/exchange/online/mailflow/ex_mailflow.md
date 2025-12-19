---
title: "0. Collection > EX_Mailflow Job"
description: "0. Collection > EX_Mailflow Job"
sidebar_position: 10
---

# 0. Collection > EX_Mailflow Job

The EX_Mailflow job collects message trace data from Office 365.

![0. Collection > EX_Mailflow Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/exchange/online/mailflow/collectionjobstree.webp)

The EX_Mailflow job is located in the **Mailflow** > **0. Collection** job group.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The EX_Mailflow job has the following configurable parameter:

- Number of months to keep

See the [Analysis Tasks for the EX_Mailflow Job](#analysis-tasks-for-the-ex_mailflow-job) topic for
additional information.

## Queries for the EX_Mailflow Job

The EX_Mailflow job uses the ExchangePS Data Collector.

![Queries for the EX_Mailflow Job](/images/accessanalyzer/12.0/solutions/exchange/online/mailflow/mailflowqueries.webp)

The following queries are included in the EX_Mailflow job:

- MailFlow – Collects Message Tracking data

    - The default is the **Last 7 Days**. It can be modified to a shorter date range
    - See the
      [Configure the ExchangePS Data Collector for Mail Flow Metrics](#configure-the-exchangeps-data-collector-for-mail-flow-metrics)
      topic for additional information

- LocalDomains – Collects domains local to the Office 365 environment

    :::warning
    Do not modify this query. The query is preconfigured for this job.
    :::


    - See the [ExchangePS Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/overview.md)
      topic for additional information

### Configure the ExchangePS Data Collector for Mail Flow Metrics

The ExchangePS Data Collector configured with the Mail Flow Metrics category can be scoped to
specific report dates. By default, the MailFlow Query is set to report on the Last 7 Days.

Follow the steps to modify the query configuration:

**Step 1 –** Navigate to the **Exchange** > **8. Exchange Online** > **0. Collection** >
**EX_Mailflow** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the query and click **Query Properties**. The Query
Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The ExchangePS Data Collector
Wizard opens.

:::warning
Do not modify other wizard pages. The wizard pages are pre-configured for this job.
:::


![ExchangePS Data Collector Wizard Mail Flow page](/images/accessanalyzer/12.0/solutions/exchange/online/mailflow/mailflowmetricsdcwizard.webp)

**Step 4 –** To modify the report dates, navigate to the Mail Flow page. Set the report data range
as desired. See the
[ExchangePS Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/overview.md) topic for
additional information.

:::tip
Remember, the date range must be 7 days or less.
:::


**Step 5 –** Navigate to the Summary page. Click **Finish**.

The job applies the modification to future job executions.

## Analysis Tasks for the EX_Mailflow Job

View the analysis tasks by navigating to the **Exchange** > **8. Exchange Online** > **0.
Collection** > **EX_Mailflow** > **Configure** node and selecting **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_Mailflow Job](/images/accessanalyzer/12.0/solutions/exchange/online/mailflow/mailflowanalysis.webp)

The following analysis tasks are selected by default:

- 01.EX_Mailflow_History – Creates the SA_EX_Mailflow_History table, accessible under the job’s
  Results node
- 02.Update History Table – Updates the SA_EX_Mailflow_History table, with data from the .Active
  Directory Inventory and .Entra ID Inventory solutions to determine local users and distribution
  lists
-   **3. SET HISTORY RETENTION** – Sets retention period in months

    - By default, retention is set to 6 months. This period can be modified. See the
      [Parameter Configuration](#parameter-configuration) topic for additional information.
    - Alternatively, the `@Months` parameter can be modified in the SQL Script Editor. See the
      [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/12.0/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
      topic for additional information

The following analysis task deletes table data from data collection and analysis jobs. This analysis
task should remain cleared unless specifically needed:

:::warning
Do not select the **00. Deletes all Stored Data** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.
:::


-   **0. Deletes all Stored Data - LEAVE UNCHECKED** – Deletes all historical data

    - See the
      [Troubleshooting Data Collection](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#troubleshooting-data-collection)
      topic for additional information
