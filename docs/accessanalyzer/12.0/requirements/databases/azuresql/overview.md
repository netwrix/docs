---
title: "Target Azure SQL Requirements, Permissions, and Ports"
description: "Target Azure SQL Requirements, Permissions, and Ports"
sidebar_position: 75
---

# Target Azure SQL Requirements, Permissions, and Ports

The Access Analyzer for Databases Solution provides the ability to audit and monitor Azure SQL
database environments to collect permissions, sensitive data, and activity events. It scans:

- Azure SQL

**Target Azure SQL Requirements**

The following are requirements for scanning Azure SQL environments:

- Full registration within Microsoft's Azure portal:

    - Creation of an Access Analyzer Azure SQL Role in the Access control (IAM) section
    - Successful registration of the Access Analyzer app
    - Successful creation of an Application (client) ID

See the [Azure SQL Auditing Configuration](/docs/accessanalyzer/12.0/requirements/databases/azuresql/azuresqlaccess.md)
topic for additional information on configuring the Azure portal for Access Analyzer scanning.

**Data Collectors**

This solution employs the following data collector to scan the target environment:

- [SQL Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/sql/overview.md)

## Permissions

See the
[AzureSQL Target Least Privilege Model](/docs/accessanalyzer/12.0/requirements/databases/azuresql/azuresql.md)
topic for required permissions and configuration steps.

## Ports

The following firewall ports are needed:

**For SQL Data Collector**

- Specified by Instances table (default is 1433)
