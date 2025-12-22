---
title: "Oracle_Activity Job"
description: "Oracle_Activity Job"
sidebar_position: 10
---

# Oracle_Activity Job

The Oracle_Activity Job is designed to provide insight into user activity in target Oracle database
servers and instances based on Oracle Unified Audit settings.

## Analysis Tasks for the Oracle_Activity Job

Navigate to the **Oracle** > **2.Activity** > **Oracle_Activity** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/activity/jobgroup26.webp)

The default analysis tasks are:

- Oracle Activity Details – Creates the SA_Oracle_Activity_Details table accessible under the job’s
  Results node
- Activity Database Summary – Summarizes all activity by database. Creates the
  SA_Oracle_Activity_UserDatabaseSummary table accessible under the job’s Results node.
- Activity Instance Summary – Summarizes Oracle activity by Instance. Creates the
  SA_Oracle_Activity_UserInstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created the analysis task, the Oracle_Activity Job produces the
following pre-configured report.

| Report                | Description                                                                        | Default Tags | Report Elements                                                                                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Activity Summary | This report lists all Oracle events, and summarizes them by database and instance. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays users with most events by instance</li><li>Table – Provides details on users with most events by instance</li><li>Table – Provides details on event details</li></ul> |
