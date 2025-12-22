---
title: "SQL_PublicPermissions Job"
description: "SQL_PublicPermissions Job"
sidebar_position: 40
---

# SQL_PublicPermissions Job

The SQL_PublicPermissions Job provides the list of SQL server logins that have the PUBLIC roles
assigned. In addition, it also provides the list of permissions assigned to the PUBLIC role as well.

## Analysis Tasks for the SQL_PublicPermissions Job

Navigate to the **Databases** > SQL > 5.Permissions > SQL_PublicPermissions > Configure node and
select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/sql/permissions/sqljobgroup40.webp)

The default analysis tasks are:

- Calculate public permissions – Creates the SA_SQLServer_PublicPermissions_Details table accessible
  under the job’s Results node
- Public Permissions Summary – Creates the SA_SQLServer_PublicPermissions_DatabaseSummary table
  accessible under the job’s Results node
- Public Permissions Summary – Highlights permissions that have been granted to the public role on
  objects that are not-default SQL or Azure SQL server objects
- Public Permissions Instance Summary (Non-Default) – Summarizes non-default SQL and Azure SQL
  server public permissions by instance

In addition to the tables and views created by the analysis task, the SQL_PublicPermissions Job
produces the following pre-configured report.

| Report             | Description                                                                | Default Tags | Report Elements                                                                                                                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Public Permissions | This report determines highlights objects with public permissions applied. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top databases by public permission count</li><li>Table – Provides details on databases by public permission count</li><li>Table – Provides details on public permission details</li></ul> |
