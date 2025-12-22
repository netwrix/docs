---
title: "SQL Job Group"
description: "SQL Job Group"
sidebar_position: 70
---

# SQL Job Group

The SQL Job Group reports on SQL Server, AzureSQL, or both depending on which collection jobs were
run. The SQL Job Group is a comprehensive set of pre-configured audit jobs and reports that provide
information on users and roles, activity, permissions, configuration, sensitive data, and overall
security assessment.

**Supported Platforms**

- Azure SQL

- SQL Server 2022
- SQL Server 2019
- SQL Server 2017
- SQL Server 2016

**Requirements, Permissions, and Ports**

See the
[Target SQL Server Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/databases/sql/sql.md)
topic for additional information.

**Sensitive Data Discovery Considerations**

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans.If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host.For example, if the job is configured to scan 8 hosts at a time , then
an extra 16 GB of RAM are required (8x2=16).

:::note
The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.
:::


**Location**

The SQL Job Group within the Jobs tree, as part of the Database Solution: Jobs > Database > SQL.

The Database Solution license includes all supported database platforms supported by Enterprise
Auditor. Additionally, the Sensitive Data Discovery Add-On enables the solution to search database
content for sensitive data.

![SQL Job Group](/images/accessanalyzer/11.6/solutions/databases/sql/sqljobgroup.webp)

The SQL Job Group includes:

- Databases > 0.Collection > SQL >
  [0.Collection > SQL Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/collection/overview.md)
  – This job group is designed to collect high level summary information from Microsoft SQL servers.
  This information is used by other jobs in the SQL solution set for further analysis and for
  producing respective reports.
- Databases > 0.Collection > AzureSQL >
  [0.Collection > Azure SQL Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/collection-azuresql/overview.md)
  — This job group is designed to collect high level summary information from targeted Azure SQL
  Instances. This information is used by other jobs in the Azure SQL solution set to provide further
  analysis and for producing respective reports.
- [1.Users and Roles Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/usersroles/overview.md)–
  This job group is designed to provide insight into user security, roles, and object permissions to
  all the SQL server objects
- [2.Activity Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/activity/overview.md)
  – This job group is designed to provide insight into use login activity, object permission
  changes, any unusual database activity, SQL activity against sensitive data, SQL activity against
  selective or all database objects
- [3.Permissions Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/permissions/overview.md)
  – This job group is designed to provide insight into all types of permissions at the instance,
  database, and object level across all the targeted SQL servers
- [4.Configuration Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/configuration/overview.md)
  – This job group is designed to provide insight into potential vulnerabilities related to SQL
  server configuration settings
- [5.Sensitive Data Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/sensitivedata/overview.md)–
  This job group is designed to provide insight into where sensitive data exists and who has access
  to it across all the targeted SQL server databases
    - Requires the Sensitive Data Discovery Add-On.
- [SQL_SecurityAssessment Job](/docs/accessanalyzer/11.6/solutions/databases/sql/sql_securityassessment.md)
  – This job is designed to summarize and categorize the security findings into HIGH, MEDIUM, LOW,
  and NO FINDING categories based on their severity.
