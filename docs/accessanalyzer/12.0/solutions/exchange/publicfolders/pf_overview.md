---
title: "PF_Overview Job"
description: "PF_Overview Job"
sidebar_position: 60
---

# PF_Overview Job

The PF_Overview job is comprised of analyses and reports that provide a top level summary of each
parent public folder and correlates information from the message tracking logs to identify the last
time a public folder received mail.

## Analysis Tasks for the PF_Overview Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** >
**PF_Overview** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the PF_Overview Job](/images/accessanalyzer/12.0/solutions/exchange/publicfolders/overviewanalysis.webp)

The following analysis tasks are selected by default:

- 00.Top Level Folder Summary – Creates the SA_PF_Overview_TopLevelRollup table, accessible under
  the job’s Results node
- 01.Public Folders Message Traffic – Creates the SA_PF_Overview_ExchangeTraffic table, accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the PF_Overview job produces the
following pre-configured reports:

| Report                     | Description                                                                                                                 | Default Tags | Report Elements                                                                                                                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public Folder Mail Traffic | This report shows which mail-enabled public folders have mail traffic.                                                      | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays oldest public folders</li><li>Table – Provides details on oldest public folders</li></ul>                                                                            |
| Public Folder Summary      | This report shows where data is concentrated within the public folder environment, sorted by the largest top-level folders. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays public folder environment</li><li>Table – Provides details largest public folder trees</li><li>Table – Provides details on the public folder environment</li></ul> |
