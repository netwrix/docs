---
title: "EX_Mailflow_Mailbox Job"
description: "EX_Mailflow_Mailbox Job"
sidebar_position: 40
---

# EX_Mailflow_Mailbox Job

The EX_Mailflow_Mailbox job provides information around each user’s mail flow in the organization.
This job is set to analyze the last 30 days.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/admin/jobs/job/overview.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The EX_Mailflow_Mailbox job has the following configurable parameter:

- Number of days to collect counts for – Sets the number of days for the **User Mailboxes By Message
  Count** and **User Mailboxes by Message Size** analysis tasks. The default is **30** days.

See the
[Analysis Tasks for the EX_Mailflow_Mailbox Job](#analysis-tasks-for-the-ex_mailflow_mailbox-job)
topic for additional information.

## Analysis Tasks for the EX_Mailflow_Mailbox Job

View the analysis tasks by navigating to the **Exchange** > **8. Exchange Online** >
**EX_Mailflow_Mailbox** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_Mailflow_Mailbox Job](/images/accessanalyzer/11.6/solutions/exchange/online/mailflow/mailflowmailboxanalysis.webp)

The following analysis tasks are selected by default:

- User Message Metrics By Day – Creates the EX_MailFlow_UserByDay table, accessible under the job’s
  Results node
- User Mailboxes By Message Count – Creates the EX_MailFlow_UserByCount table, accessible under the
  job’s Results node

    - By default, counts are collected for the last 30 days. The number of days can be modified with
      the `@Days` parameter.
    - See the
      [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
      topic for additional information

- User Mailboxes by Message Size – Creates the EX_MailFlow_UserBySize table, accessible under the
  job’s Results node

    - By default, sizes are selected for the last 30 days. The number of days can be modified with
      the `@Days` parameter.
    - See the
      [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
      topic for additional information

In addition to the tables and views created by the analysis tasks, the EX_Mailflow_Mailbox job
produces the following pre-configured reports.

| Report                                                                      | Description                                      | Default Tags | Report Elements                                                                                                                                                                                            |
| --------------------------------------------------------------------------- | ------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Top Users Message Count by Message ID (Top User Traffic By Message ID)      | Displays message counts for users by Message ID. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top 5 users traffic by message ID</li><li>Table – Provides details on the last 30 days user traffic by message ID</li></ul>         |
| Top Users Message Count By Recipient (Top Users Traffic By Recipient)       | Displays message counts for users by recipient.  | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top 5 users traffic by recipient</li><li>Table – Provides details on the last 30 days user traffic by recipient</li></ul>           |
| Top Users Message Size By Message ID (Top Users Traffic Size By Message ID) | Displays message sizes for users by Message ID.  | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top 5 users traffic size by message ID</li><li>Table –Details on the last 30 days user traffic size by recipient</li></ul>          |
| Top Users Message Size By Recipient (Top Users Traffic Size By Recipient)   | Displays message sizes for users by recipient.   | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top 5 users traffic size by recipient</li><li>Table – Provides details on the last 30 days user traffic size by recipient</li></ul> |
