---
title: "Recommended Configurations"
description: "Recommended Configurations"
sidebar_position: 10
---

# Recommended Configurations

The following sections describe the recommended configurations for the Azure SQL 0.Collection Job
Group.

## Azure SQL 0.Collection Job Group

The Azure SQL Solution inherits settings from the Azure SQL > Settings node. However, it is best
practice to assign the host list and the Connection Profile at the data collection level, the
0.Collection Job Group. Once you assign these to the job group, you can run it directly or
schedule it.

**Dependencies**

- Full registration within Microsoft's Azure portal:

    - Creation of an Access Analyzer Azure SQL Role in the Access control (IAM) section
    - Successful registration of the Access Analyzer app
    - Successful creation of an Application (client) ID

- Successful configuration of an AzureSQL-specific connection profile
- Creation of an Azure Tenancy host list (ex. COMPANY.onmicrosoft.com) and Azure Active Directory
  user credentials

    :::info
    To avoid functional issues with Access Analyzer, create multiple connection
    profiles to accommodate multiple credentials.
    :::

- [0-AzureSQL_InstanceDiscovery Job](/docs/accessanalyzer/12.0/solutions/databases/azuresql/collection-azuresql/0-azuresql_instancediscovery.md) run
  successfully

**Targeted Hosts**

The 0.Collection Job Group has been set to run against the following default dynamic host list:

- All targeted Azure SQL Tenants

**Connection Profile**

The SQL Data Collector requires a specific set of permissions. See the
[AzureSQL Target Least Privilege Model](/docs/accessanalyzer/12.0/requirements/databases/azuresql/azuresql.md)
topic for the required permissions. The account used can be either an Active Directory account with
database login enabled or a SQL account. Once the account has been provisioned, create a custom
Connection Profile containing the credentials for the targeted environment. See the
[SQL Custom Connection Profile & Default Dynamic Host List](/docs/accessanalyzer/12.0/admin/datacollector/sql/configurejob.md)
topic for additional information.

The Connection Profile should be assigned under the **Databases** > 0.Collection > Azure SQL >
Settings > Connection node. By default, the connection node uses the Default Profile configured at
the global settings level. However, since this may not be the Connection Profile with the necessary
permissions for the assigned hosts, click the radio button for the S**elect one of the following user
defined profiles** option and select the appropriate Connection Profile drop-down menu.

See the [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional
information.

**Schedule Frequency**

Schedule frequency depends on the types of auditing being conducted and the scope of the target
environment. The general recommendation is to run the solution daily.

**Run Order**

Run the 0.Collection Jobs first and in order. You can run the other Azure SQL Solution sub-job
groups in any order, together, or individually, after running the 0.Collection Job Group.

:::info
Run the solution at the top level.

:::
