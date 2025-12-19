---
title: "EX_MailboxLogons Job"
description: "EX_MailboxLogons Job"
sidebar_position: 20
---

# EX_MailboxLogons Job

The EX_MailboxLogons Job provides details around Mailbox logon activity occurring within the
Exchange environment.

## Analysis Tasks for the EX_MailboxLogons Job

View the analysis tasks by navigating to the **Exchange** > **4. Mailboxes** > **Logons** >
**EX_MailboxLogons** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_MailboxLogons Job](/images/accessanalyzer/11.6/solutions/exchange/mailboxes/logons/mailboxlogonsanalysis.webp)

The following analysis tasks are selected by default:

-   **1. Create History Table** – Creates the SA_EX_MailboxLogons_Details table, accessible under the
       job’s Results node
- 02.Hourly Activity – Creates the SA_EX_MailboxLogons_HourlyActivity table, accessible under the
  job’s Results node
- 03.SET HISTORY RETENTION – Sets retention period in months

    - By default set to retain 6 months. It can be modified.
    - See the
      [Exchange History Retention](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#exchange-history-retention)
      topic for additional information

- 04.Last Week Top Offenders – Creates the SA_EX_MailboxLogons_LastWeekSummary table, accessible
  under the job’s Results node
- 05.Hourly by Client IP – Creates the SA_EX_MailboxLogons_HourlyActivityByClient table, accessible
  under the job’s Results node
- 06.Import Logon Activity to AIC – Imports Logon Activity to Access Information Center

The following analysis task deletes table data from data collection and analysis jobs. This analysis
task should remain cleared unless specifically needed:

:::warning
Do not select the **00. Delete All Historical Data** option. This analysis task is for
troubleshooting and cleanup only. Data will be deleted from the database.
:::


- 00.Delete All Historical Data

    - See the
      [Troubleshooting Data Collection](/docs/accessanalyzer/11.6/solutions/exchange/hubmetrics/collection/ex_metricscollection.md#troubleshooting-data-collection)
      topic for additional information

In addition to the tables and views created by the analysis tasks, the EX_MailboxLogons Job produces
the following pre-configured reports:

| Report                                                                        | Description                                                                                                                   | Default Tags | Report Elements                                                                                                                                                                                  |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Non Owner Mailbox Logons – Last Week (Top Users Logging into Other Mailboxes) | Lists the number of distinct non-owner mailboxes accessed by each user and counts of non-owner logons in the last seven days. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top users for non-owner activity – last week</li><li>Table – Provides details on all mailbox logons</li></ul>             |
| Top Hourly Activity (By IP) (Top Hourly Activity)                             | This report shows periods where there was large amounts of traffic coming from a single machine.                              | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top machines by user account activity</li><li>Table – Provides details on top machines by user account activity</li></ul> |
| Top Hourly Activity (By User) (Top Hourly Activity)                           | This report shows periods when users are most active.                                                                         | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top machines by non-owner logons</li><li>Table – Provides details on top users by non-owner logons</li></ul>              |
