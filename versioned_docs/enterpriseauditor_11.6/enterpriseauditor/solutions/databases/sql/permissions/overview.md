# 3.Permissions Job Group

The 3.Permissions Job Group provides insight into permissions at the instance, database, and object
level across all targeted SQL and Azure SQL servers.

![sqljobgroup36](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/permissions/sqljobgroup36.png)

The jobs in the 3.Permissions Job Group are:

- [SQL_ControlServer Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/permissions/sql_controlserver.md)
  – This job will provide information on control server permissions. Users with control server
  permissions allow users to command full control of a SQL and Azure SQL server instances
- [SQL_DirectPermissions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/permissions/sql_directpermissions.md)
  – This job will provide information about the permissions granted to users at the schema,
  database, and server levels
- [SQL_DomainUserPermissions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/permissions/sql_domainuserpermissions.md)
  – This job will provide insight into Microsoft Active Directory domain users’ access to SQL and
  Azure SQL server objects both at the instance and database level
- [SQL_PublicPermissions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/permissions/sql_publicpermissions.md)
  – This job analyzes all the permissions granted at the server level and reports on the effective
  server level permissions across all the audited SQL and Azure SQL server instances
- [SQL_ServerPermissions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/permissions/sql_serverpermissions.md)
  – This job provides the list of SQL and Azure SQL server logins that have the PUBLIC roles
  assigned. In addition, it also provides the list of permissions assigned to the PUBLIC role as
  well
