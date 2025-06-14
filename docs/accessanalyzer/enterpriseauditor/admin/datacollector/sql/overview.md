# SQL Data Collector

The SQL Data Collector provides information on database configuration, permissions, data extraction,
application name of the application responsible for activity events, an IP Address or Host name of
the client server, and sensitive data reports. This data collector also provides information on
Oracle databases including infrastructure and operations.

The SQL Data Collector has been preconfigured within the Database data collection jobs for Db2,
MySQL, Oracle, PostgreSQL, Redshift, and SQL Server databases. Both this data collector and the
Database Solution are available with a special Access Analyzer license. See the following topics for
additional information:

- [Db2 Solution](../../../solutions/databases/db2/overview.md)
- [MySQL Solution](../../../solutions/databases/mysql/overview.md)
- [PostgreSQL Solution](../../../solutions/databases/postgresql/overview.md)
- [Oracle Solution](../../../solutions/databases/oracle/overview.md)
- [Redshift Solution](../../../solutions/databases/redshift/overview.md)
- [SQL Job Group](../../../solutions/databases/sql/overview.md)

Protocols

TCP

Ports

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

Permissions

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

See the [Azure SQL Auditing Configuration](../../../requirements/target/config/azuresqlaccess.md)
topic and the
[AzureSQL Target Least Privilege Model](../../../requirements/target/config/databaseazuresql.md)
topic for additional information.

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## SQL Query Configuration

The SQL Data Collector is configured through the SQL Data Collector Wizard. The wizard contains the
following pages, which change based upon the query category selected:

**NOTE:** The SQL Data Collector is used in multiple Access Analyzer Solutions, and the query
categories used are dependent on the solution.

- [SQL: Category](category.md)
- [SQL: Options](options.md)
- [SQL: Criteria](criteria.md)
- [SQL: Filter](filter.md)
- [SQL: Settings](settings.md)
- [SQL: Custom SQL Query](customquerysql.md)
- [SQL: Custom Oracle Query](customqueryoracle.md)
- [SQL: Results](results.md)
- [SQL: Rowkey](rowkey.md)
- [SQL: Summary](summary.md)
