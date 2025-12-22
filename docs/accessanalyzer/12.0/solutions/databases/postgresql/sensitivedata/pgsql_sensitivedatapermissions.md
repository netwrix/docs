---
title: "PgSQL_SensitiveDataPermissions Job"
description: "PgSQL_SensitiveDataPermissions Job"
sidebar_position: 20
---

# PgSQL_SensitiveDataPermissions Job

The PgSQL_SensitiveDataPermissions Job is designed to provide information on all types of
permissions on database objects containing sensitive data across all the targeted PostgreSQL servers
based on the selected scan criteria.

## Analysis Tasks for the PgSQL_SensitiveData Job

Navigate to the **Jobs > Databases > PostgreSQL > Sensitive
Data > PgSQL_SensitiveDataPermissions > Configure** node and select Analysis to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/postgresql/sensitivedata/sensitivedatapermission.webp)

The default analysis tasks are:

- Sensitive Data Permission Details – Creates the PgSQL_SensitiveDataPermissions_Details table
  accessible under the job’s Results node
- Sensitive Data Permissions Database Summary – Creates the
  PgSQL_SensitiveDataPermissions_DatabaseSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the
PgSQL_SensitiveDataPermissions Job produces the following pre-configured report.

| Report                     | Description                                                                   | Default Tags | Report Elements                                                                                                                                                                                                                                            |
| -------------------------- | ----------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Permissions | This report highlights sensitive data permissions in the audited environment. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top databases by permission count</li><li>Table – Provides details on database permission summary</li><li>Table – Provides details on sensitive data permission details</li></ul> |
