---
title: "0.Collection > SQL Job Group"
description: "0.Collection > SQL Job Group"
sidebar_position: 30
---

# 0.Collection > SQL Job Group

The 0.Collection Job Group is designed to collect high level summary information form targeted
Microsoft SQL Servers. This information is used by other jobs in the SQL solution set for further
analysis and for producing reports.

![0.Collection Job Group - SQL](/images/accessanalyzer/12.0/solutions/databases/sql/collection/sqljobgroup1.webp)

The jobs in the 0.Collection Job Group are:

- [0-SQL_InstanceDiscovery Job](/docs/accessanalyzer/12.0/solutions/databases/sql/collection/0-sql_instancediscovery.md) – This job is designed to enumerate and
  store the list of SQL Server Instances running on the targeted servers
- [1-SQL_PermissionsScan](/docs/accessanalyzer/12.0/solutions/databases/sql/collection/1-sql_permissionsscan.md) – This job is designed to collect SQL Server
  instance and database level permissions from all targeted servers
- [2-SQL_SensitiveDataScan Job](/docs/accessanalyzer/12.0/solutions/databases/sql/collection/2-sql_sensitivedatascan.md) – This job is designed to discover
  sensitive data in the database SQL Server instances and databases based on a pre-defined or
  user-defined search criteria
- [3-SQL_ActivityScan Job](/docs/accessanalyzer/12.0/solutions/databases/sql/collection/3-sql_activityscan.md) – This job is designed to capture user activity
  from all targeted SQL server instances and databases
- [4-SQL_ServerLogons Job](/docs/accessanalyzer/12.0/solutions/databases/sql/collection/4-sql_serverlogons.md) – This job is designed to capture all types of SQL
  server logon activity including successful or failed logons
- [5-SQL_ServerSettings Job](/docs/accessanalyzer/12.0/solutions/databases/sql/collection/5-sql_serversettings.md) – This job is designed to collect SQL server
  instance and database configuration settings so that they can be evaluated against recommended
  best practices
