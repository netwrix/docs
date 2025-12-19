---
title: "0-SQL_InstanceDiscovery Job"
description: "0-SQL_InstanceDiscovery Job"
sidebar_position: 10
---

# 0-SQL_InstanceDiscovery Job

The 0-SQL_InstanceDiscovery job enumerates and stores the list of SQL Server Instances running on
the targeted servers.

## Queries for the 0-SQL_InstanceDiscovery Job

The 0-SQL_InstanceDiscovery job uses the SQL Data Collector for the following query:

![Query Selection](/images/accessanalyzer/11.6/solutions/databases/sql/collection/instancedisc_query.webp)

- SQL Server Instance Discovery — Collects the list of SQL Server Instances from target endpoints
  and populates the necessary instance connection information

## Analysis Tasks for the 0-SQL_InstanceDiscovery Job

Navigate to the **Databases** > **0.Collection** > **SQL** > **0-SQL_InstanceDiscovery** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/sql/collection/instancedisc_analysis.webp)

The default analysis tasks is:

- SQL Instances — Brings SA_SQL_Instances table to view
