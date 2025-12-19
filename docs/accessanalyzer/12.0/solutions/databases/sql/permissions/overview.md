---
title: "3.Permissions Job Group"
description: "3.Permissions Job Group"
sidebar_position: 60
---

# 3.Permissions Job Group

The 3.Permissions Job Group provides insight into permissions at the instance, database, and object
level across all targeted SQL and Azure SQL servers.

![sqljobgroup36](/images/accessanalyzer/12.0/solutions/databases/sql/permissions/sqljobgroup36.webp)

The jobs in the 3.Permissions Job Group are:

- [SQL_ControlServer Job](/docs/accessanalyzer/12.0/solutions/databases/sql/permissions/sql_controlserver.md) – This job will provide information on control
  server permissions. Users with control server permissions allow users to command full control of a
  SQL and Azure SQL server instances
- [SQL_DirectPermissions Job](/docs/accessanalyzer/12.0/solutions/databases/sql/permissions/sql_directpermissions.md) – This job will provide information about
  the permissions granted to users at the schema, database, and server levels
- [SQL_DomainUserPermissions Job](/docs/accessanalyzer/12.0/solutions/databases/sql/permissions/sql_domainuserpermissions.md) – This job will provide insight into
  Microsoft Active Directory domain users’ access to SQL and Azure SQL server objects both at the
  instance and database level
- [SQL_PublicPermissions Job](/docs/accessanalyzer/12.0/solutions/databases/sql/permissions/sql_publicpermissions.md) – This job analyzes all the permissions
  granted at the server level and reports on the effective server level permissions across all the
  audited SQL and Azure SQL server instances
- [SQL_ServerPermissions Job](/docs/accessanalyzer/12.0/solutions/databases/sql/permissions/sql_serverpermissions.md) – This job provides the list of SQL and
  Azure SQL server logins that have the PUBLIC roles assigned. In addition, it also provides the
  list of permissions assigned to the PUBLIC role as well
