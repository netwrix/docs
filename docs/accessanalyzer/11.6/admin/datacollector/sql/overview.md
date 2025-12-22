---
title: "SQL Data Collector"
description: "SQL Data Collector"
sidebar_position: 350
---

# SQL Data Collector

The SQL Data Collector provides information on database configuration, permissions, data extraction,
application name of the application responsible for activity events, an IP Address or Host name of
the client server, and sensitive data reports. This data collector also provides information on
Oracle databases including infrastructure and operations.

The SQL Data Collector has been preconfigured within the Database data collection jobs for Db2,
MySQL, Oracle, PostgreSQL, Redshift, and SQL Server databases. Both this data collector and the
Database Solution are available with a special Enterprise Auditor license. See the following topics
for additional information:

- [Db2 Solution](/docs/accessanalyzer/11.6/solutions/databases/db2/overview.md)
- [MySQL Solution](/docs/accessanalyzer/11.6/solutions/databases/mysql/overview.md)
- [PostgreSQL Solution](/docs/accessanalyzer/11.6/solutions/databases/postgresql/overview.md)
- [Oracle Solution](/docs/accessanalyzer/11.6/solutions/databases/oracle/overview.md)
- [Redshift Solution](/docs/accessanalyzer/11.6/solutions/databases/redshift/overview.md)
- [SQL Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/overview.md)

**Protocols**

TCP

**Ports**

For Db2:

- Specified by Instances table (default is 5000)

For MySQL:

- Specified by Instances table (default is 3306)

For Oracle:

- Specified by Instances table (default is 1521)

For PostgreSQL:

- Specified by Instances table (default is 5432)

For SQL:

- Specified by Instances table (default is 1433)

**Permissions**

For MySQL:

- Read access to MySQL instance to include all databases contained within each instance
- Windows Only — Domain Admin or Local Admin privilege

For Oracle:

- User with SYSDBA role
- Local Administrator on the target servers – Only applies to Windows Servers and not on Linux or
  Unix operating systems

For PostgreSQL:

- Read access to all the databases in PostgreSQL cluster or instance
- Windows Only — Domain Admin or Local Admin privilege

For Redshift:

- Read-access to the following tables:

    - pg_tables
    - pg_user

For SQL:

- For Instance Discovery, local rights on the target SQL Servers:

    - Local group membership to Remote Management Users
    - Permissions on the following WMI NameSpaces: `root\Microsoft\SQLServer, root\interop`

- For permissions for data collection:

    - Read access to SQL instance
    - Requires SQL Full-Text and Semantic Extractions for Search feature to be installed on the
      target SQL instance(s) when using the **Scan full rows for sensitive data** option on the
      Options wizard page
    - Grant Authenticate Server to [DOMAIN\USER]
    - Grant Connect SQL to [DOMAIN\USER]
    - Grant View any database to [DOMAIN\USER]
    - Grant View any definition to [DOMAIN\USER]
    - Grant View server state to [DOMAIN\USER]
    - Grant Control Server to [DOMAIN\USER] (specifically required for the Weak Passwords Job)

See the
[Azure SQL Auditing Configuration](/docs/accessanalyzer/11.6/requirements/databases/sql/azuresqlaccess.md)
topic and the
[AzureSQL Target Least Privilege Model](/docs/accessanalyzer/11.6/requirements/databases/sql/azuresql.md)
topic for additional information.

**Sensitive Data Discovery Considerations**

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

## SQL Query Configuration

The SQL Data Collector is configured through the SQL Data Collector Wizard. The wizard contains the
following pages, which change based upon the query category selected:

:::note
The SQL Data Collector is used in multiple Enterprise Auditor Solutions, and the query
categories used are dependent on the solution.
:::


- [SQL: Category](/docs/accessanalyzer/11.6/admin/datacollector/sql/category.md)
- [SQL: Options](/docs/accessanalyzer/11.6/admin/datacollector/sql/options.md)
- [SQL: Criteria](/docs/accessanalyzer/11.6/admin/datacollector/sql/criteria.md)
- [SQL: Filter](/docs/accessanalyzer/11.6/admin/datacollector/sql/filter.md)
- [SQL: Settings](/docs/accessanalyzer/11.6/admin/datacollector/sql/settings.md)
- [SQL: Custom SQL Query](/docs/accessanalyzer/11.6/admin/datacollector/sql/customquerysql.md)
- [SQL: Custom Oracle Query](/docs/accessanalyzer/11.6/admin/datacollector/sql/customqueryoracle.md)
- [SQL: Results](/docs/accessanalyzer/11.6/admin/datacollector/sql/results.md)
- [SQL: Rowkey](/docs/accessanalyzer/11.6/admin/datacollector/sql/rowkey.md)
- [SQL: Summary](/docs/accessanalyzer/11.6/admin/datacollector/sql/summary.md)
