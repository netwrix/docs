---
title: "Azure SQL Solution"
description: "Azure SQL Solution"
sidebar_position: 75
---

# Azure SQL Solution

The Azure SQL Solution is a comprehensive set of pre-configured audit jobs and reports that provide
information on users and roles, activity, permissions, configuration, sensitive data, and overall
security assessment for Azure SQL.

**Supported Platforms**

- Azure SQL

**Requirements, Permissions, and Ports**

See the
[Target SQL Server Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/databases/sql/sql.md)
topic for additional information.

**Sensitive Data Discovery Considerations**

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job is
configured to scan 8 hosts at a time, then an extra 16 GB of RAM are required (8x2=16).

:::note
The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the
server. The JDK deployed is prepackaged and does not require any configuration; it has been
preconfigured to work with Access Analyzer and should never be customized through Java. It will not
conflict with other JDKs or Java Runtimes in the same environment.
:::

**Location**

The Azure SQL Solution is located within the Jobs tree, as part of the Database Solution: Jobs > Database >
Azure SQL.

The Database Solution license covers all database platforms that Access Analyzer supports.
Additionally, Sensitive Data Discovery enables the solution to search database content for
sensitive data.

The Azure SQL Solution includes:

- Databases > 0.Collection > AzureSQL >
  [0.Collection > Azure SQL Job Group](/docs/accessanalyzer/12.0/solutions/databases/azuresql/collection-azuresql/overview.md) — This job group is
  designed to collect high-level summary information from targeted Azure SQL Instances. This
  information is used by other jobs in the Azure SQL solution set to provide further analysis and
  for producing respective reports.
