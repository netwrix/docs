# EX\_StoreSizes Job

The EX\_StoreSizes job provides analysis and reporting around database sizing based on mailbox sizes.

## Analysis Tasks for the EX\_StoreSizes Job

View the analysis tasks by navigating to the __Exchange__ > __4. Mailboxes__ > __Sizing__ > __EX\_StoreSizes__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_StoreSizes Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/sizing/storesizesanalysis.png)

The following analysis tasks are selected by default:

- 00.Users Ranked by Store – Creates the SA\_EX\_StoreSize\_UsersByStore table, accessible under the job’s Results node
- 01.Rank Stores – Creates the SA\_EX\_StoreSize\_Ranked table, accessible under the job’s Results node
- 02.30 Day Growth – Creates the SA\_EX\_StaleMailboxes\_30DayChange table, accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the EX\_StoreSizes Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Store Sizes and Growth  (Store Sizes) | This report identifies 30 day growth for every mail store within the environment. | None | This report is comprised of two elements:   - Bar Chart – Displays fastest-growing mail stores - Table – Provides details on mail stores – percent change |
| Top Users by Store | This report identifies the top users for every mail store. | None | This report is comprised of one element:   - Table – Provides details on top users by store |
