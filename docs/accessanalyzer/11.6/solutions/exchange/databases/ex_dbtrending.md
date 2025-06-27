# EX_DBTrending

The EX_DBTrending Job creates trend projections for mailbox and public folder databases for the
entire organization.

## Analysis Tasks for the EX_DBTrending Job

View the analysis tasks by navigating to the **Exchange** > **3. Databases** > **EX_DBTrending** >
**Configure** node and selecting **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_DBTrending Job](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/exchange/databases/dbtrendinganalysis.webp)

The following analysis tasks are selected by default:

-   0. Drop tables – Drops tables from previous runs
-   1. Store size history – Creates the SA_EX_DBTrending_History table, accessible under the job’s
       Results node
-   2. Trend Mailbox Database – Creates the SA_EX_DBTrending_MBTREND table, accessible under the
       job’s Results node
-   3. Trend Public Store – Creates the SA_EX_DBTrending_PFTREND table, accessible under the job’s
       Results node
-   4. Modify Runtime to be Date – Modifies the runtime for the SA_EX_DBTrending_MBTREND table and
       the SA_EX_DBTrending_PFTREND table, to be set to a month/day/year (mdy) date format

In addition to the tables and views created by the analysis tasks, the EX_DBTrending Job produces
the following pre-configured report:

| Report                        | Description                                                                                                                                                                                                                                                                                         | Default Tags | Report Elements                                                                                                                  |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Capacity Planning - Databases | This report displays the growth rate trend of your private stores and the growth rate trend of your public stores.  The trend is projected for two months. These reports help identify bad trends in growth on Exchange servers for hard drive space usage is key in avoiding running out of space. | None         | This report is comprised of two elements: - Line Chart – Displays private store trend - Line Chart – Displays public store trend |
