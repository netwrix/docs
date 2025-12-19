---
title: "EX_Mailflow_OrgOverview Job"
description: "EX_Mailflow_OrgOverview Job"
sidebar_position: 50
---

# EX_Mailflow_OrgOverview Job

The EX_Mailflow_OrgOverview job provides information around overall traffic in the organization.
This job is set to analyze the last 30 days.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The EX_Mailflow_OrgOverview job has the following configurable parameter:

- Number of days of data to display

See the
[Analysis Tasks for the EX_Mailflow_OrgOverview Job](#analysis-tasks-for-the-ex_mailflow_orgoverview-job)
topic for additional information.

## Analysis Tasks for the EX_Mailflow_OrgOverview Job

View the analysis tasks by navigating to the **Exchange** > **8. Exchange Online** >
**EX_OrgOverview_Mailbox** > **Configure** node and select **Analysis**.

![Analysis Tasks for the EX_Mailflow_OrgOverview Job](/images/accessanalyzer/12.0/solutions/exchange/online/mailflow/mailfloworgoverviewanalysis.webp)

The following analysis task is selected by default:

- Organization Overview – Creates the EX_MailFlow_OrgOverview table, accessible under the job’s
  Results node

    - By default, data for 30 days is displayed. This number of days can be modified by a parameter.
      See the [Parameter Configuration](#parameter-configuration) topic for additional information.
    - Alternatively, the `@Days` parameter can be modified in the SQL Script Editor. See the
      [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/12.0/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
      topic for additional information.

In addition to the tables and views created by the analysis task, the EX_Mailflow_OrgOverview job
produces the following pre-configured report.

| Report                                     | Description                                                                               | Default Tags | Report Elements                                                                                                                                                                                        |
| ------------------------------------------ | ----------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Trend By MessageID (Organization Overview) | This report shows an overview of sent and received message statuses for the organization. | None         | This report is comprised of two elements: <ul><li>Line Chart – Displays the last 7 days trend by message ID</li><li>Table – Provides details on the last 30 days total traffic by message ID</li></ul> |
| Trend By Recipient                         | This report shows the trend of sent/received and total traffic by recipient.              | None         | This report is comprised of two elements: <ul><li>Line Chart – Displays the last 7 days trend by recipient</li><li>Table – Provides details on the last 30 days traffic by recipient</li></ul>         |
