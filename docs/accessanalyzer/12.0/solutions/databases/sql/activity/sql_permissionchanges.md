---
title: "SQL_PermissionChanges Job"
description: "SQL_PermissionChanges Job"
sidebar_position: 30
---

# SQL_PermissionChanges Job

The SQL_PermissionChanges Job provides detailed information on permission changes for all database
objects, specifically objects containing sensitive data.

## Analysis Tasks for the SQL_PermissionChanges Job

Navigate to the **Databases** > SQL > 2.Activity > SQL_PermissionChanges > Configure node and select
Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/sql/activity/sqljobgroup33.webp)

The default analysis tasks are:

- SQLServer Permission Changes – Creates the SA_SQLServer_PermissionChanges_Details table accessible
  under the job’s Results node
- Permission Changes Instance Summary – Creates the SA_SQLServer_PermissionChanges_InstanceSummary
  table accessible under the job’s Results node. This analysis task summarizes permission change
  activity per instance.

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveDataActivity Job
produces the following pre-configured report.

| Report                     | Description                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Permission Change Activity | This report lists all permission change related SQL events, and summarizes them by instance. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by permission change activity</li><li>Table – Provides details on instances by permission change activity</li><li>Table – Provides details on event details</li></ul> |
