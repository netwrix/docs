---
title: "SQL_Activity Job"
description: "SQL_Activity Job"
sidebar_position: 10
---

# SQL_Activity Job

The SQL_Activity Job provides insight into user activity in target SQL server instances and
databases based on SQL Server Audit Specification settings.

## Analysis Tasks for the SQL_Activity Job

Navigate to the **Databases** > SQL > 2.Activity > SQL_Activity > Configure node and select Analysis
to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/sql/activity/sqljobgroup31.webp)

The default analysis tasks are:

- List SQL User Activity Details – Creates the SA_SQLServer_Activity_Details table accessible under
  the job’s Results node
- User Activity Database Summary – Creates the SA_SQLServer_Activity_UserDatabaseSummary table
  accessible under the job’s Results node
- User Activity Instance Summary – Creates the SA_SQLServer_Activity_UserInstanceSummary table
  accessible under the job’s Results node

In addition to the tables and views created the analysis task, the SQL_Activity Job produces the
following pre-configured report.

| Report                | Description                                                                     | Default Tags | Report Elements                                                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Activity Summary | This report lists all SQL events, and summarizes them by database and instance. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays users with most events by instance</li><li>Table – Provides details on users with most events by database</li><li>Table – Provides details on event details</li></ul> |
