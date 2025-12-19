---
title: "PgSQL_TablePrivileges Job"
description: "PgSQL_TablePrivileges Job"
sidebar_position: 30
---

# PgSQL_TablePrivileges Job

The PgSQL_TablePrivileges job is designed to collect PostgreSQL table privileges from all the
targeted servers.

## Queries for the PgSQL_TablePrivileges Job

The PgSQL_TablePrivileges Job uses the SQL Data Collector for queries.

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Query Selection](/images/accessanalyzer/11.6/solutions/databases/postgresql/collection/tableprivileges_query.webp)

The query is:

- Table Privileges - Returns table privileges from all the targeted servers.

## Analysis Task for the PgSQL_TablePrivileges Job

Navigate to the **Databases** > **0.Collection** > **PostgreSQL** > **PgSQL_TablePrivileges** >
**Configure** node and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/postgresql/collection/tableprivileges_analysis.webp)

The default analysis task is:

- AIC Import - PostgreSQL Permissions – Imports PostgreSQL permissions to the AIC.
- AIC Import - Databases – Imports PostgreSQL database and schema nodes to the AIC.
