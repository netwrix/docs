---
title: "3.Permissions Job Group"
description: "3.Permissions Job Group"
sidebar_position: 50
---

# 3.Permissions Job Group

The 3.Permissions Job Group is designed to provide insight into all types of permissions at the
instance, database, and object levels across all targeted Oracle database servers.

![Permissions Job Group](/images/accessanalyzer/11.6/solutions/databases/oracle/permissions/jobgroup33.webp)

The jobs in the 3.Permissions Job Group are:

- [Oracle_DomainUserPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/permissions/oracle_domainuserpermissions.md)
  – This job will provide insight into Microsoft Active Directory domain users access to Oracle
  database objects both at the instance and object level
- [Oracle_ObjectPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/permissions/oracle_objectpermissions.md)
  – This job will provide insight into user and role permissions to all the database objects in the
  targeted Oracle database server
- [Oracle_PublicPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/permissions/oracle_publicpermissions.md)
  – This job provides the list of all the permission assigned to the PUBLIC profile in all the
  targeted Oracle database servers
- [Oracle_ServerPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/permissions/oracle_serverpermissions.md)
  – This job analyzes all the permission granted at the database level and repots on the effective
  database level permissions across all the audited Oracle database servers
- [Oracle_SysSchemaPermissions Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/permissions/oracle_sysschemapermissions.md)
  – This job provides insight into all the users who have access to the objects in the SYS schema
  and the type permissions to those objects across all the audited Oracle database servers
