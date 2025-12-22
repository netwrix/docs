---
title: "SQL_UnusualActivity Job"
description: "SQL_UnusualActivity Job"
sidebar_position: 50
---

# SQL_UnusualActivity Job

The SQL_UnusualActivity Job identifies anomalies related to outlier user activity by database for
all targeted SQL and Azure SQL server instances.

## Analysis Tasks for the SQL_UnusualActivity Job

Navigate to the **Databases** > SQL > 2.Activity > SQL_UnusualActivity > Configure node and select
Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/sql/activity/sqljobgroup35.webp)

The default analysis tasks are:

- Hourly User Activity Outlier Analysis – Creates the SA_SQLServer_UnusualHourlyUserActivity table
  accessible under the job’s Results node
- Hourly Unusual Activity Summary – Creates the SA_SQLServer_UnusualActivitySummary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveDataActivity Job
produces the following pre-configured report.

| Report                         | Description                              | Default Tags | Report Elements                                                                                                                                                                                                                                |
| ------------------------------ | ---------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unusual Hourly Activity Report | This report lists abnormal user activity | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays abnormal user activity</li><li>Table – Provides details on number of outliers per instance</li><li>Table – Provides details on unusual hourly user activity</li></ul> |
