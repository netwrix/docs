---
title: "EX_Mailflow_Domain Job"
description: "EX_Mailflow_Domain Job"
sidebar_position: 30
---

# EX_Mailflow_Domain Job

The EX_Mailflow_Domain job provides information about which domain’s mail-flow is going to and
coming from. This job is set to analyze the last 30 days.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/admin/jobs/job/overview.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The EX_Mailflow_Domain job has the following configurable parameter:

- Number of days to show in tables and reports

See the
[Analysis Tasks for the EX_Mailflow_Domain Job](#analysis-tasks-for-the-ex_mailflow_domain-job)
topic for additional information.

## Analysis Tasks for the EX_Mailflow_Domain Job

View the analysis task by navigating to the **Exchange** > **8. Exchange Online** >
**EX_Mailflow_Domain** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the EX_Mailflow_Domain Job](/images/accessanalyzer/11.6/solutions/exchange/online/mailflow/mailflowdomainanalysis.webp)

The following analysis task is selected by default:

- Mailflow Domain – Creates the EX_MailFlow_Domain table, accessible under the job’s Results node.
  It provides counts for messages sent and received from external domains.

    - By default, the number of days to show in tables and reports is set to 30. This can be
      modified. See the [Parameter Configuration](#parameter-configuration) topic for additional
      information.
    - Alternatively, the `@Days` parameter can be modified in the SQL Script Editor. See the
      [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
      topic for additional information

In addition to the tables and views created by the analysis task, the EX_Mailflow_Domain job
produces the following pre-configured report:

| Report               | Description                              | Default Tags | Report Elements                                                                                                                              |
| -------------------- | ---------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Top Domains By Count | Displays top domains by recipient count. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top domains</li><li>Table – Provides details on top domains</li></ul> |
