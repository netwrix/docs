---
title: "SQL_ControlServer Job"
description: "SQL_ControlServer Job"
sidebar_position: 10
---

# SQL_ControlServer Job

The SQL_ControlServer Job provides information on control server permissions. Users with control
server permissions can command full control of a SQL and Azure SQL server instance.

## Analysis Tasks for the SQL_ControlServer Job

Navigate to the **Databases** > SQL > 3.Permissions > SQL_ControlServer > Configure node and select
Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/sql/permissions/sqljobgroup37.webp)

The default analysis tasks are:

- Determine Control Server Rights – Creates the SA_SQL_ControlServer_Details table accessible under
  the job’s Results node
- Control Server Domain Users – Creates the SA_SQLServer_ControlServer_DomainUsers table accessible
  under the job’s Results node
- Control Server Instance Summary – Creates the SA_SQLServer_ControlServer_InstanceSummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the SQL_ControlServer Job produces
the following pre-configured report.

| Report                     | Description                                                                                            | Default Tags | Report Elements                                                                                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Control Server Permissions | This report highlights control server permissions, and summarizes them by instance and by domain user. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top instances by control server permissions</li><li>Table – Provides details on instances by control server permission count</li><li>Table – Provides details on control server permissions</li></ul> |
