---
title: "SQL_SensitiveDataPermissions Job"
description: "SQL_SensitiveDataPermissions Job"
sidebar_position: 20
---

# SQL_SensitiveDataPermissions Job

The SQL_SensitiveDataPermissions Job is designed to provide all types of permissions on database
objects containing sensitive data across all the targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL_SensitiveDataPermissions Job

Navigate to the **Databases** > SQL > 5.Sensitve Data > SQL_SensitiveDataPermissions > Configure
node and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/sql/sensitivedata/sqljobgroup48.webp)

The default analysis tasks are:

- List sensitive data permission details – Creates the SA_SQL_SensitiveDataPermissions_Details table
  accessible under the job’s Results node
- Sensitive Data Permissions Database Summary – Creates the
  SA_SQL_SensitiveDataPermissions_DatabaseSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveDataPermissions
Job produces the following pre-configured report.

| Report                     | Description                                                                   | Default Tags | Report Elements                                                                                                                                                                                                                                            |
| -------------------------- | ----------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top databases by permission count</li><li>Table – Provides details on database permission summary</li><li>Table – Provides details on sensitive data permission details</li></ul> |
