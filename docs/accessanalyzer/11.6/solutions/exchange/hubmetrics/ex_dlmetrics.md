# EX_DLMetrics Job

The EX_DLMetrics Job provides information around distribution list usage.

## Analysis Tasks for the EX_DLMetrics Job

View the analysis tasks by navigating to the **Exchange** > **1. HUB Metrics** > **EX_DLMetrics** >
**Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_DLMetrics Job](/img/product_docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/dlmetricsanalysis.webp)

The following analysis tasks are selected by default:

-   1. DL Metrics – Creates the SA_EX_DLMetrics_Details table, accessible under the job’s Results
       node
-   2. Historical Metrics – Creates the SA_EX_DLMetrics_HistoricalStatistics table, accessible under
       the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX_DLMetrics Job produces the
following pre-configured reports:

| Report                                                                   | Description                                                                           | Default Tags | Report Elements                                                                                                                                                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Distribution Lists by Message Count (Most Active DLs by Message Count)   | This report identifies the most active distribution lists by count of messages sent.  | None         | This report is comprised of two elements: - Bar Chart – Displays top distribution lists by message count (last 30 days) - Table – Provides details on top distribution lists by message count (last 30 days) |
| Distribution Lists by Message Volume (Most Active DLs by Message Volume) | This report identifies the most active distribution lists by volume of messages sent. | None         | This report is comprised of two elements: - Bar Chart – Displays top distribution lists by message volume (last 30 days) - Table – Provides details on distribution lists by message volume (last 30 days)   |
