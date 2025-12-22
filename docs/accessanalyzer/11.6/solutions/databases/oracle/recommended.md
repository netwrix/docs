---
title: "Recommended Configuration"
description: "Recommended Configuration"
sidebar_position: 10
---

# Recommended Configuration

The Oracle Solution has been configured to inherit down from the Oracle > Settings node. However, it
is best practice to assign the host list and the Connection Profile at the data collection level,
0.Collection Job Group. Once these are assigned to the job group, it can be run directly or
scheduled.

**Dependencies**

- .Active Directory Inventory Job Group run successfully
- For Activity Auditing – Oracle Server audit specifications to be configured on the target
  databases
- For Sensitive Data Discovery Auditing – Sensitive Data Discovery Add-On installed on the
  Enterprise Auditor Console server

Some of the queries in the **Jobs** > **Databases** > **0.Collection** > **Oracle Job Group** can be
scoped to target specific databases and/or instances. However, it is necessary for the
SA_SQL_Instances table to be populated before attempting to scope the queries. Therefore, the
0-Oracle_Servers job must be executed before attempting to scope the rest of the 0.Collection Job
Group queries.

**Targeted Host(s)**

The 0.Collection Job Group must be set to run against the following dynamic host list:

- Oracle Servers

Default dynamic host lists are populated from hosts in the Host Master Table which meet the host
inventory criteria for the list. Ensure the appropriate host list(s) have been populated through
host inventory results.

**Connection Profile**

The SQL Data Collector requires a specific set of permissions. The account used can be either an
Active Directory account or an Oracle account.

For a Windows-integrated Oracle instance it is possible to use one Active Directory credential that
has permissions on both the Oracle database and the server. This will not generally be the case in
most customer environments, but it is possible.

If the required permissions are assigned to one Active Directory credential, once the account has
been provisioned, create a custom Connection Profile containing the credentials for the targeted
environment. See the
[SQL Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/sql/overview.md)
topic for additional information on permissions and creating a SQL custom connection profile.

Alternatively, create a connection profile with both the Oracle database credentials and the server
credentials for the targeted host.

A Connection Profile with the applicable permissions should be assigned under each jobs Connection
node as follows:

- Both the Oracle database credentials and the Server credentials for the targeted host (or the
  previously provisioned AD credentials) for:
    - 0-Oracle_Servers Job
- Oracle Database credentials only for:
    - 1-Oracle_PermissionsScan Job
    - 2-Oracle_SensitiveDataScan Job
    - 3-Oracle_ActivityScan Job
    - 4-Oracle_DefaultPasswordUsers Job
    - 5-Oracle_Configuration Job

The Connection Profile is set to Use the Default Profile, as configured at the global settings
level. However, since this may not be the Connection Profile with the necessary permissions for the
assigned hosts, click the radio button for the Select one of the following user defined profiles
option and select the appropriate Connection Profile drop-down menu.

See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

**Schedule Frequency**

One of the most important decisions to make is how frequently to collect this data. The Oracle Job
Group can be scheduled to run as desired depending on the types of auditing being conducted and the
scope of the target environment. The general recommendation is to schedule the solution to run
daily.

**Run Order**

The 0-Oracle_Servers Job within the Oracle 0.Collection Job Group must be run first, before running
the rest of the jobs.

:::info
Run the solution at the top level: Oracle Job Group
:::


The other job groups in the Jobs > Databases > Oracle Job Group can be run in any order only after
running the 0.Collection Job Group.

**Query Configuration**

This solution is designed to be run with the default query configurations. However, the following
SQL Data Collector configurations can be modified if desired:

- Options page – Customize scan options and/or sensitive data (DLP) options in the following jobs:
    - 2-Oracle_SensitiveDataScan Job
    - 1-Oracle_ActivityScan Job
- Criteria page – Customize the criteria used to define sensitive data in the following job:
    - 2-Oracle_SensitiveDataScan Job
- Filter page – Scope the query to target specific databases/instances in the following jobs:

    Remember, it is necessary for the
    [0-Oracle_Servers Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/collection/0-oracle_servers.md)
    to run at least once before attempting to scope any of the following queries:

    - 1-Oracle_PermissionsScan Job
    - 2-Oracle_SensitiveDataScan Job
    - 3-Oracle_ActivityScan Job
    - 4-Oracle_DefaultPasswordUsers Job
    - 5-Oracle_Configuration Job

    :::info
    For reporting purposes, scope all queries to target the same
    databases/instances if applying a scope.
    :::


**Analysis Configuration**

This solution should be run with the default analysis configurations. These analysis tasks are
preconfigured and should not be modified or deselected!

Remember, disabling obsolete or un-desired jobs allows the solution to run more efficiently. To
disable a job or job group, right-click on the item and select Disable Job.

:::info
Do not delete any jobs. Instead, jobs should be disabled.
:::


**Workflow**

1. Set a Connection Profile for the 0.Collection Job Group with the permissions listed in the
   Recommended Configurations section. See the
   [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/databases/oracle/collection/overview.md)
   section for additional information.
2. For Sensitive Data Discovery Auditing – Ensure the Sensitive Data Discovery Add-On is installed
   on the Enterprise AuditorEnterprise Auditor Console server.
3. Schedule the solution to run daily or as desired.
4. Review the reports generated by the jobs.
