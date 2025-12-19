---
title: "Databases Solutions"
description: "Databases Solutions"
sidebar_position: 90
---

# Databases Solutions

Enterprise Auditor Databases Solution Set is a comprehensive set of pre-configured audit jobs and
reports that provide visibility into various aspects of supported databases:

- [Db2 Solution](/docs/accessanalyzer/11.6/solutions/databases/db2/overview.md)
  – Db2 Solution is a comprehensive set of pre-configured audit jobs and reports that provide
  visibility into various aspects of Db2, such as Data Collection, Configuration, user Permissions,
  and Sensitive Data.
- [MongoDB Solution](/docs/accessanalyzer/11.6/solutions/databases/mongodb/overview.md)
  – Enterprise Auditorfor MongoDB automates the process of understanding where MongoDB databases
  exist and provides an overview of the MongoDB environment in order to answer questions around data
  access.
- [MySQL Solution](/docs/accessanalyzer/11.6/solutions/databases/mysql/overview.md)
  – Enterprise Auditor for MySQL automates the process of understanding where MySQL databases exist
  and provides an overview of the MySQL environment in order to answer questions around data access.
- [Oracle Solution](/docs/accessanalyzer/11.6/solutions/databases/oracle/overview.md)
  – Enterprise Auditor for Oracle automates the process of understanding where Oracle databases
  exist and provides an overview of the Oracle environment in order to answer questions around data
  access.
- [PostgreSQL Solution](/docs/accessanalyzer/11.6/solutions/databases/postgresql/overview.md)
  – Enterprise Auditor for PostgreSQL automates the process of understanding where
  PostgreSQL databases exist and provides an overview of the PostgreSQL environment in order to
  answer questions around data access.
- [Redshift Solution](/docs/accessanalyzer/11.6/solutions/databases/redshift/overview.md)
  – Redshift Solution Set is a comprehensive set of pre-configured audit jobs and reports that
  provide visibility into various aspects of Redshift: Data Collection, Configuration, and Sensitive
  Data.
- [SQL Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/overview.md)
  – SQL Job Group is a comprehensive set of pre-configured audit jobs and reports that provide
  information on users and roles, activity, permissions, configuration, sensitive data, and overall
  security assessment for both the SQL 0.Collection Job Group and Azure SQL 0.Collection Job Group.

The Database Solution license includes all supported database platforms supported by Enterprise
Auditor. Additionally, the Sensitive Data Discovery Add-On enables the solution to search database
content for sensitive data.

The following table identifies the type of audit functionality for each supported database platform:

| Database Platforms | Instance Discovery | Permission Audit      | Activity Audit  | Sensitive Data Discovery | Configuration Audit     |
| ------------------ | ------------------ | --------------------- | --------------- | ------------------------ | ----------------------- |
| SQL Server         | Fully Supported    | Fully Supported       | Fully Supported | Fully Supported          | Fully Supported         |
| Oracle             | Fully Supported    | Fully Supported       | Fully Supported | Fully Supported          | Fully Supported         |
| DB2                |                    | Fully Supported       |                 | Fully Supported          | \*\*Partially Supported |
| MongoDB            |                    |                       |                 | Fully Supported          | \*\*Partially Supported |
| MySQL              |                    | \*Partially Supported |                 | Fully Supported          | \*\*Partially Supported |
| PostgreSQL         |                    | \*Partially Supported |                 | Fully Supported          | \*\*Partially Supported |
| Redshift           |                    | \*Partially Supported |                 | Fully Supported          | \*\*Partially Supported |

In the above table:

- \*Partially Supported, "Permission Audit" means the permissions as solely collected at the table
  level.
- \*\*Partially Supported, "Permission Audit" means only the database size information is collected.
