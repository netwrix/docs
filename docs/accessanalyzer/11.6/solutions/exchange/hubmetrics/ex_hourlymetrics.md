# EX_HourlyMetrics Job

The EX_HourlyMetrics Job provides visibility into how much mail-flow the organization sends and
receives each hour.

## Analysis Tasks for the EX_HourlyMetrics Job

View the analysis tasks by navigating to the **Exchange** > **1. HUB Metrics** >
**EX_HourlyMetrics** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_HourlyMetrics Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/hubmetrics/hourlymetricsanalysis.webp)

The following analysis tasks are selected by default:

-   1. Server Averages – Creates the SA_EX_HourlyMetrics_ServerAverages table, accessible under the
       job’s Results node
-   2. Org Averages – Creates the SA_EX_HourlyMetrics_OrgAverages table, accessible under the job’s
       Results node

In addition to the tables and views created by the analysis tasks, the EX_HourlyMetrics Job produces
the following pre-configured reports:

| Report                                  | Description                                                                                    | Default Tags | Report Elements                                                                                                                                                         |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hourly Traffic (Average Hourly Traffic) | This report identifies which hours during the day have the most traffic by count of messages.  | None         | This report is comprised of two elements: - Column Chart – Displays average hourly traffic by enterprise - Table – Provides details on average hourly traffic by server |
| Hourly Volume (Average Hourly Volume)   | This report identifies which hours during the day have the most traffic by volume of messages. | None         | This report is comprised of two elements: - Column Chart – Displays average hourly volume (MB) - Table – Provides details on server averages                            |
