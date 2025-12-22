---
title: "0.Collection Job Group"
description: "0.Collection Job Group"
sidebar_position: 20
---

# 0.Collection Job Group

The Oracle Job Group is designed to collect a high level summary of information from the targeted
Oracle Database Servers. This information is used by other jobs in the Oracle Job Group for further
analysis, and for producing reports.

![Oracle 0Collection Job Group](/images/accessanalyzer/11.6/solutions/databases/oracle/collection/0collection.webp)

The job groups in the 0.Collection Job Group are:

- [0-Oracle_Servers Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/collection/0-oracle_servers.md)
  – This job is designed to enumerate and store the list of Oracle Database Instances running on the
  targeted servers
- [1-Oracle_PermissionsScan Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/collection/1-oracle_permissionsscan.md)
  – This job is designed to collect Oracle database level permissions from all the targeted Oracle
  database servers
- [2-Oracle_SensitiveDataScan Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/collection/2-oracle_sensitivedatascan.md)
  – This job is designed to discover sensitive data in the Oracle database across all the targeted
  Oracle database servers based on pre-defined or user-defined search criteria
- [3-Oracle_ActivityScan Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/collection/3-oracle_activityscan.md)
  – This job is designed to capture user activity from all the targeted Oracle database servers
- [4-Oracle_DefaultPasswordUsers Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/collection/4-oracle_defaultpasswordusers.md)
  – This job is designed to provide a list of users in the database that are configured to use
  default passwords
- [5-Oracle_Configuration Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/collection/5-oracle_configuration.md)
  – This job is designed to return additional configuration settings from Oracle servers.
