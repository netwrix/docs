---
title: "Recommended Configurations"
description: "Recommended Configurations"
sidebar_position: 10
---

# Recommended Configurations

The following sections describe the recommended configurations for the SQL Solution 0.Collection Job
Group and the Azure SQL 0.Collection Job Group.

:::note
The SQL Solution Jobs report on both the SQL and Azure SQL Collection Jobs.
:::


## SQL Solution 0.Collection Job Group

The SQL Solution has been configured to inherit down from the SQL > Settings node. However, it is
best practice to assign the host list and the Connection Profile at the data collection level, the
0.Collection Job Group. Once these are assigned to the job group, it can be run directly or
scheduled.

**Dependencies**

- .Active Directory Inventory Job Group run successfully
- For Activity Auditing – SQL Server Audit Specifications to be configured on the target databases
    - Audit destination must be a binary file
    - See the Microsoft
      [Create a Server Audit and Database Audit Specification](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/create-a-server-audit-and-database-audit-specification)
      article for additional information.
- For Sensitive Data Discovery Auditing – Sensitive Data Discovery Add-On installed on the
  Enterprise Auditor Console server
- For the SQL_SecurityAssessment Job – One or more of the following jobs or job groups must be run
  to produce results:
    - [0.Collection > SQL Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/collection/overview.md)
    - [1.Users and Roles Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/usersroles/overview.md)
    - [3.Permissions Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/permissions/overview.md)
    - [5.Sensitive Data Job Group](/docs/accessanalyzer/11.6/solutions/databases/sql/sensitivedata/overview.md)
    - [Privileged Accounts Job Group](/docs/accessanalyzer/11.6/solutions/windows/privilegedaccounts/overview.md)
    - [Privileged Accounts Job Group](/docs/accessanalyzer/11.6/solutions/windows/privilegedaccounts/overview.md)

Some of the 0.Collection Job Group queries can be scoped to target specific databases/instances.
However, it is necessary for the SA_SQL_Instances table to be populated before attempting to scope
the queries. Therefore, the
[0-SQL_InstanceDiscovery Job](/docs/accessanalyzer/11.6/solutions/databases/sql/collection/0-sql_instancediscovery.md)
must be manually executed before attempting to scope the 0.Collection Job Group queries.

**Targeted Host(s)**

The 0.Collection Job Group has been set to run against the following default dynamic host list:

- All Microsoft SQL Server Hosts

    :::note
    Default dynamic host lists are populated from hosts in the Host Master Table which
    meet the host inventory criteria for the list. Ensure the appropriate host list(s) have been
    populated through host inventory results.
    :::


**Connection Profile**

The SQL Data Collector requires a specific set of permissions. See the Permissions section for
necessary permissions. The account used can be either an Active Directory account or a SQL account.
Once the account has been provisioned, create a custom Connection Profile containing the credentials
for the targeted environment. See the
[SQL Custom Connection Profile & Default Dynamic Host List](/docs/accessanalyzer/11.6/admin/datacollector/sql/configurejob.md)
topic for additional information.

The Connection Profile should be assigned under the SQL > 0.Collection > Settings > Connection node.
It is set to Use the Default Profile, as configured at the global settings level. However, since
this may not be the Connection Profile with the necessary permissions for the assigned hosts, click
the radio button for the Select one of the following user defined profiles option and select the
appropriate Connection Profile drop-down menu.

See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

**Schedule Frequency**

One of the most important decisions to make is how frequently to collect this data. The SQL Job
Group can be scheduled to run as desired depending on the types of auditing being conducted and the
scope of the target environment. The general recommendation is to schedule the solution to run
daily.

**Run Order**

The 0.Collection Jobs must be run first and in order. The other SQL Solution sub-job groups can be
run in any order, together or individually, after running the 0.Collection Job Group.

:::info
Run the solution at the top level.
:::


**Workflow**

Prerequisites:

- Successful execution of the .Active Directory Inventory Job Group
- For the 3-SQL_ActivityScan, configure SQL Server Audit and SQL Server Audit Specifications on
  target SQL Server Databases. Audit destination for the configured server or database audit must be
  a binary file.
- The 5-SQL_ServerSettings Job contains the Orphaned Users query which returns users that are
  orphaned for each database. The query uses the sp_Change_users_login procedure which requires the
  db_owner fixed database to be assigned to the Enterprise Auditor User. See the
  [sp_change_users_login (Transact-SQL)](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-change-users-login-transact-sql?view=sql-server-ver15)
  Microsoft article for additional information.

1. (Optional) Configure the queries for the jobs in the 0.Collection Job Group
2. Schedule the 0.Collection Job Group to run daily or as desired

    :::note
    Running the 0.Collection Job Group is a prerequisite for the other job groups in the
    SQL solution
    :::


3. Review the reports generated by the 0.Collection Job Group’s jobs

## Azure SQL 0.Collection Job Group

The Azure SQL Solution has been configured to inherit down from the Azure SQL > Settings node.
However, it is best practice to assign the host list and the Connection Profile at the data
collection level, the 0.Collection Job Group. Once these are assigned to the job group, it can be
run directly or scheduled.

**Dependencies**

- Full registration within Microsoft's Azure portal:

    - Creation of a Enterprise Auditor Azure SQL Role in the Access control (IAM) section
    - Successful registration of the Enterprise Auditor app
    - Successful creation of an Application (client) ID

- Successful configuration of an AzureSQL-specific connection profile
- Creation of an Azure Tenancy host list (ex. COMPANY.onmicrosoft.com) and Azure Active Directory
  user credential(s)

    :::info
    To avoid functional issues with Enterprise Auditor, create multiple
    connection profiles to accommodate multiple credentials.
    :::


- Define and validate connection information in the Connection screen
- [0-AzureSQL_InstanceDiscovery Job](/docs/accessanalyzer/11.6/solutions/databases/sql/collection-azuresql/0-azuresql_instancediscovery.md)
  run successfully

**Targeted Host(s)**

The 0.Collection Job Group has been set to run against the following default dynamic host list:

- All targeted Azure SQL Tenants

**Connection Profile**

The SQL Data Collector requires a specific set of permissions. See the Permissions section for
necessary permissions. The account used can be either an Active Directory account with database
login enabled or a SQL account. Once the account has been provisioned, create a custom Connection
Profile containing the credentials for the targeted environment. See the
[SQL Custom Connection Profile & Default Dynamic Host List](/docs/accessanalyzer/11.6/admin/datacollector/sql/configurejob.md)
topic for additional information.

The Connection Profile should be assigned under the **Databases** > 0.Collection > Azure SQL >
Settings > Connection node. It is set to Use the Default Profile, as configured at the global
settings level. However, since this may not be the Connection Profile with the necessary permissions
for the assigned hosts, click the radio button for the Select one of the following user defined
profiles option and select the appropriate Connection Profile drop-down menu.

See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

**Schedule Frequency**

One of the most important decisions to make is how frequently to collect this data. The Azure SQL
Job Group can be scheduled to run as desired depending on the types of auditing being conducted and
the scope of the target environment. The general recommendation is to schedule the solution to run
daily.

**Run Order**

The 0.Collection Jobs must be run first and in order. The other Azure SQL Solution sub-job groups
can be run in any order, together or individually, after running the 0.Collection Job Group.

:::info
Run the solution at the top level.

:::
