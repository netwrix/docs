---
title: "4-AzureSQL_ServerSettings Job"
description: "4-AzureSQL_ServerSettings Job"
sidebar_position: 50
---

# 4-AzureSQL_ServerSettings Job

The 4–AzureSQL_ServerSettings Job is designed to collect Azure SQL instance and database
configuration settings so they can be evaluated against recommended best practices.

## Queries for the 4–AzureSQL_ServerSettings Job

The 4–AzureSQL_ServerSettings Job uses the SQL Data Collector for the following query:

![0.Collection_4–AzureSQL_ServerSettings Job - Query Selection](/images/accessanalyzer/12.0/solutions/databases/azuresql/collection/serversettings.webp)

- Database Sizing— Returns details on database sizing
- Server Details — Collects Azure SQL Server properties
- Configuration Details— Collects database configuration properties
- Table Row Counts— Returns Azure SQL table row counts for additional data points in the sensitive
  data reports
- Standalone Database Sizing— Returns the size of Azure standalone databases

## Analysis Tasks for the 4–AzureSQL_ServerSettings Job

Navigate to the **Databases** > **0.Collection** > **Azure SQL** >
**4–AzureSQL_ServerSettings** > **Configure** node and select **Analysis** to view the analysis
task.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/azuresql/collection/serversettingsanalysis.webp)

The default analysis tasks are:

- Update Database Sizing — Updates the database sizing table with the data from the standalone
  database sizing table
