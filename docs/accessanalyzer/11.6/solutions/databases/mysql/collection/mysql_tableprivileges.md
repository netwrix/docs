---
title: "MySQL_TablePrivileges Job"
description: "MySQL_TablePrivileges Job"
sidebar_position: 30
---

# MySQL_TablePrivileges Job

The MySQL_TablePrivileges job is designed to collect MySQL table privileges from all the targeted
servers.

## Queries for the MySQL_TablePrivileges Job

The MySQL_TablePrivileges Job uses the SQL Data Collector for queries.

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Query Selection](/images/accessanalyzer/11.6/solutions/databases/mysql/collection/querytableprivileges.webp)

The query is:

- Table Privileges - Returns table privileges from all the targeted servers.

## Analysis Task for the MySQL_TablePrivileges Job

Navigate to the **Databases** > **0.Collection** > **MySQL** > **MySQL_TablePrivileges** >
**Configure** node and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/mysql/collection/analysistableprivileges.webp)

The default analysis task is:

- AIC Import - MySQL Permissions – Imports MySQL permissions to the AIC.
