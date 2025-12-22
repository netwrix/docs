---
description: >-
  Shows how to create a scheduled daily report of failed jobs and job errors in
  Netwrix Access Analyzer by using the SAS_ExecutionStatistics instant job and
  configuring the Job Execution Statistics report.
keywords:
  - job errors
  - SAS_ExecutionStatistics
  - Job Execution Statistics
  - schedule
  - daily report
  - Netwrix Access Analyzer
products:
  - access-analyzer
sidebar_label: Creating a Daily Report on Job Errors
tags:
  - job-management-and-scheduling
title: "Creating a Daily Report on Job Errors"
knowledge_article_id: kA0Qk0000001KXlKAM
---

# Creating a Daily Report on Job Errors

## Question

Does Netwrix Access Analyzer allow the creation of a daily report on failed jobs and errors in jobs?

## Answer

> **NOTE:** To keep track of custom jobs, you can create a separate job group. This article references a custom group as **Sandbox**.

Refer to the following steps to create a custom report on job errors:

1. In the Netwrix Access Analyzer console, right-click the **Sandbox** job group and select **Add Instant Job**.
2. Proceed to the **Instant Job** page. Expand the **Netwrix Auditor Utilities** node, select the **SAS_ExecutionStatistics** job and click **Next**.
3. The host assignment does not affect the job—select the **Use default settings** option. Proceed with the wizard steps to save the job and exit the wizard.
4. Right-click the **SAS_ExecutionStatistics** job in the job tree and select **Schedule** to create a scheduled task. In the **Schedule** window, click **New** to define a schedule. Complete the wizard steps to save the schedule.
5. Under the **SAS_ExecutionStatistics** job, navigate to **Configure > Reports**, and configure the **Job Execution Statistics** report. In the **E-mail** page of the wizard, specify the target e-mail. Complete the wizard steps to save the changes.
