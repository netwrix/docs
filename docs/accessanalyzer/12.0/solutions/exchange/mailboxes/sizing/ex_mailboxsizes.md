---
title: "EX_MailboxSizes Job"
description: "EX_MailboxSizes Job"
sidebar_position: 20
---

# EX_MailboxSizes Job

The EX_MailboxSizes job provides analysis and reporting around mailbox sizing and growth.

#### Analysis Tasks for the EX_Mailbox Sizes Job

View the analysis tasks by navigating to the **Exchange** > **4. Mailboxes** > **Sizing** >
**EX_MailboxSizes** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_Mailbox Sizes Job](/images/accessanalyzer/12.0/solutions/exchange/mailboxes/sizing/mailboxsizesanalysis.webp)

The following analysis tasks are selected by default:

- 01.Update or Create Details Table – Creates an interim processing table in the database for use by
  downstream analysis and report generation
- 02.Regional Track Mailbox Size History – Creates an interim processing table in the database for
  use by downstream analysis and report generation
- 03.SET HISTORY RETENTION – Sets retention period in months

    - The default is 6 months. It can be modified.
    - See the
      [Exchange History Retention](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#exchange-history-retention)
      topic for additional information

- 04.Store History – Creates the SA_EX_MailboxSizes_StoreHistory table, accessible under the job’s
  Results node
- 05.Current Sizes – Creates the SA_EX_MailboxSizes_CurrentSnapshot table, accessible under the
  job’s Results node
- 06.Dumpster Sizes – Creates the SA_EX_MailboxSizes_DumpstersByStore table, accessible under the
  job’s Results node
- 07.Current Store Size – Creates the SA_EX_MailboxSizes_CurrentStoreSize table, accessible under
  the job’s Results node

The following analysis task deletes table data from data collection and analysis jobs. This analysis
task should remain cleared unless specifically needed:

:::warning
Do not select the **00.Delete All Data** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database:
:::


- 00.Delete All Data

    - See the
      [Troubleshooting Data Collection](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#troubleshooting-data-collection)
      topic for additional information

In addition to the tables and views created by the analysis tasks, the EX_MailboxAccess Job produces
the following pre-configured reports:

| Report                                                               | Description                                                                        | Default Tags | Report Elements                                                                                                                                                                                  |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Largest Recoverable Items Folder (Dumpster) (Dumpster Sizes by User) | This report identifies users with the largest Recoverable Items folder (dumpster). | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays users with largest Recoverable Items folders</li><li>Table – Provides details on user Recoverable Items folders</li></ul> |
| Largest Mailboxes (Top Users by Mailbox Size)                        | This report identifies users with the largest mailboxes.                           | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays users with the largest mailboxes</li><li>Table – Provides details on users with largest mailboxes</li></ul>               |
