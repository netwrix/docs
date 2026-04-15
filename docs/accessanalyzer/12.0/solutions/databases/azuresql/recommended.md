---
title: "Recommended Configurations"
description: "Recommended Configurations"
sidebar_position: 10
---

# Recommended Configurations

The following sections describe the recommended configurations for the Azure SQL 0.Collection Job
Group.

## Azure SQL 0.Collection Job Group

The Azure SQL Solution has been configured to inherit down from the Azure SQL > Settings node.
However, it is best practice to assign the host list and the Connection Profile at the data
collection level, the 0.Collection Job Group. Once these are assigned to the job group, it can be
run directly or scheduled.

**Dependencies**

- Full registration within Microsoft's Azure portal:

    - Creation of a Access Analyzer Azure SQL Role in the Access control (IAM) section
    - Successful registration of the Access Analyzer app
    - Successful creation of an Application (client) ID

- Successful configuration of an AzureSQL-specific connection profile
- Creation of an Azure Tenancy host list (ex. COMPANY.onmicrosoft.com) and Azure Active Directory
  user credential(s)

    :::info
    To avoid functional issues with Access Analyzer, create multiple connection
    profiles to accommodate multiple credentials.
    :::

- Define and validate connection information in the Connection screen
- [0-AzureSQL_InstanceDiscovery Job](/docs/accessanalyzer/12.0/solutions/databases/azuresql/collection-azuresql/0-azuresql_instancediscovery.md) run
  successfully

**Targeted Host(s)**

The 0.Collection Job Group has been set to run against the following default dynamic host list:

- All targeted Azure SQL Tenants

**Connection Profile**

The SQL Data Collector requires a specific set of permissions. See the Permissions section for
necessary permissions. The account used can be either an Active Directory account with database
login enabled or a SQL account. Once the account has been provisioned, create a custom Connection
Profile containing the credentials for the targeted environment. See the
[SQL Custom Connection Profile & Default Dynamic Host List](/docs/accessanalyzer/12.0/admin/datacollector/sql/configurejob.md)
topic for additional information.

The Connection Profile should be assigned under the **Databases** > 0.Collection > Azure SQL >
Settings > Connection node. It is set to Use the Default Profile, as configured at the global
settings level. However, since this may not be the Connection Profile with the necessary permissions
for the assigned hosts, click the radio button for the Select one of the following user defined
profiles option and select the appropriate Connection Profile drop-down menu.

See the [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional
information.

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
