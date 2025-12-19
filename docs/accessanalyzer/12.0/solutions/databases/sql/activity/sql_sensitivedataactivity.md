---
title: "SQL_SensitiveDataActivity Job"
description: "SQL_SensitiveDataActivity Job"
sidebar_position: 40
---

# SQL_SensitiveDataActivity Job

The SQL_SensitiveDataActivity Job provides detailed information on DML (UPDATE, INSERT, DELETE,
TRUNCATE) used against objects containing sensitive data.

## Analysis Tasks for the SQL_SensitiveDataActivity Job

Navigate to the **Databases** > SQL > 2.Activity > SQL_SensitiveDataActivity > Configure node and
select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/sql/activity/sqljobgroup34.webp)

The default analysis tasks are:

- SDD Activity Details – Creates the SA_SQLServer_SensitiveDataActivity_Details table accessible
  under the job’s Results node
- SDD Activity Instance Summary – Creates the SA_SQLServer_SensitiveDataActivity_UserSummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveDataActivity Job
produces the following pre-configured report.

| Report                  | Description                                                           | Default Tags | Report Elements                                                                                                                                                                                                                                        |
| ----------------------- | --------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sensitive Data Activity | This report highlights events in databases containing sensitive data. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top users by instance</li><li>Table – Provides details on user activity by instance</li><li>Table – Provides details on sensitive data activity details by database</li></ul> |
