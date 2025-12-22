---
title: "Redshift_TablePrivileges Job"
description: "Redshift_TablePrivileges Job"
sidebar_position: 30
---

# Redshift_TablePrivileges Job

The Redshift_TablePrivileges job is designed to collect Redshift table privileges from all the
targeted servers.

## Queries for the Redshift_TablePrivileges Job

The Redshift_TablePrivileges Job uses the SQL Data Collector for queries.

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Query Selection](/images/accessanalyzer/11.6/solutions/databases/redshift/collection/tableprivilegesquery.webp)

The query is:

- Table Privileges - Returns table privileges from all the targeted servers.

## Analysis Task for the Redshift_TablePrivileges Job

Navigate to the **Databases** > **0.Collection** > **Redshift** > **Redshift_TablePrivileges** >
**Configure** node and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/redshift/collection/tableprivilegesanalysis.webp)

The default analysis task is:

- AIC Import - Redshift Permissions – Imports Redshift table privileges to the AIC.
- AIC Import - Databases – Imports Redshift database and schema nodes to the AIC.
