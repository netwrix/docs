---
title: "0.Collection > Azure SQL Job Group"
description: "0.Collection > Azure SQL Job Group"
sidebar_position: 20
---

# 0.Collection > Azure SQL Job Group

The 0.Collection Job Group, located at **Databases** > **0.Collection** > **AzureSQL** collects
high–level summary information from targeted Azure SQL Instances. This information is used by other
jobs in the Azure SQL solution further analysis and for producing respective reports.

![0.Collection Job Group - Azure SQL](/images/accessanalyzer/11.6/solutions/databases/azuresql/collection/collectionjobmenu.webp)

The jobs in 0.Collection Jobs Group are:

- 0-AzureSQL_InstanceDiscovery Job — Enumerates a list of Azure SQL Server Instances from target
  endpoints and populates the necessary instance connection information which is used throughout the
  solution set
- [1-AzureSQL_PermissionScan Job](/docs/accessanalyzer/11.6/solutions/databases/sql/collection-azuresql/1-azuresql_permissionscan.md)
  — Collects Azure SQL database level permissions from all targeted Azure SQL database servers
- [2-AzureSQL_SensitiveDataScan Job](/docs/accessanalyzer/11.6/solutions/databases/sql/collection-azuresql/2-azuresql_sensitivedatascan.md)
  — Discovers sensitive data in Azure SQL databases across all targeted Azure SQL database servers
  based on pre-defined or user-defined search criteria
- [3-AzureSQL_ActivityScan Job](/docs/accessanalyzer/11.6/solutions/databases/sql/collection-azuresql/3-azuresql_activityscan.md)
  — Captures user activity from all targeted Azure SQL instances and databases
- [4-AzureSQL_ServerSettings Job](/docs/accessanalyzer/11.6/solutions/databases/sql/collection-azuresql/4-azuresql_serversettings.md)
  — Collects Azure SQL instances and database configuration settings to evaluate them against
  recommended best practices

**Workflow**

1. Prerequisite:
    1. Successful execution of the .Active Directory Inventory Job Group
    2. For the 1-AzureSQL_PermissionScan Job, configure SQL Server Audit and SQL Server Audit
       Specifications on target SQL Server Databases.
2. (Optional) Configure the queries for the jobs in the 0.Collection Job Group
3. Schedule the 0.Collection Job Group to run daily or as desired

    :::note
    Running the 0.Collection Job Group is a prerequisite for the other job groups in the
    Azure SQL solution

    :::
