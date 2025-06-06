# PF\_Overview Job

The PF\_Overview job is comprised of analyses and reports that provide a top level summary of each parent public folder and correlates information from the message tracking logs to identify the last time a public folder received mail.

## Analysis Tasks for the PF\_Overview Job

View the analysis tasks by navigating to the __Exchange__ > __5. Public Folders__ > __PF\_Overview__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the PF_Overview Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/publicfolders/overviewanalysis.png)

The following analysis tasks are selected by default:

- 00.Top Level Folder Summary – Creates the SA\_PF\_Overview\_TopLevelRollup table, accessible under the job’s Results node
- 01.Public Folders Message Traffic – Creates the SA\_PF\_Overview\_ExchangeTraffic table, accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the PF\_Overview job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Public Folder Mail Traffic | This report shows which mail-enabled public folders have mail traffic. | None | This report is comprised of two elements:   - Bar Chart – Displays oldest public folders - Table – Provides details on oldest public folders |
| Public Folder Summary | This report shows where data is concentrated within the public folder environment, sorted by the largest top-level folders. | None | This report is comprised of three elements:   - Bar Chart – Displays public folder environment - Table – Provides details largest public folder trees - Table – Provides details on the public folder environment |
