---
title: "Add Item to the SQL Server"
description: "Add Item to the SQL Server"
sidebar_position: 10
---

# Add Item to the SQL Server

Perform the following steps to add an item to the SQL Server monitoring plan.

**Step 1 –** Create a monitoring plan for the SQL Server.

**Step 2 –** Double-click SQL Server monitoring plan.

**Step 3 –** Click **Add Item**.

**Step 4 –** Select one of the items from the drop-down list:

- SQL Server Instance
- SQL Server Availability Group

**Step 5 –** Click **Add**.

Item is added and SQL Server monitoring plan is ready to use.

## SQL Server Instance

Complete the following fields:

| Option                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Specify SQL Server instance             | Specify the name of the SQL Server instance.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Specify the account for collecting data | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. The credentials are case sensitive. A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic for additional information. |

Use a combination of server role, environment, instance name (including "DEFAULT" for default
instances), and a unique identifier.

Example:

- Production default instance: PROD-SQL-01
- Development named instance: DEV-SQL-01\DEVINSTANCE
- Test named instance on a specific port: TEST-SQL-01\TESTINSTANCE:1440

**NOTE:** When dealing with SQL Server instances, Always On Availability Group (AG) instances, and a
mix of default and non-default instances along with specified ports, it's important to craft names
that provide clear identification.

## SQL Server Availability Group

Complete the following fields:

| Option                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Availability group listener             | Provide a name of an availability group listener in FQDN or NetBIOS format. The listener is a virtual network name (VNN) that you can connect to in order to access a database in a primary or secondary replica of an Always On availability group. A listener allows you to connect to a replica without having to know the physical instance name of the SQL Server. Ensure that the requirements to the DNS name and Windows permissions requirements are met. See [Configure a listener for an Always On availability group](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/create-or-configure-an-availability-group-listener-sql-server?view=sql-server-ver15) for additional information. |
| Availability group name                 | Enter a name of your SQL Server availability group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Specify the account for collecting data | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. The credentials are case sensitive. A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic for additional information.                                                                                                                                                                                                                                                 |

Extend the SQL Server instance name with a replica role (Primary/Secondary), AG identifier, and a
unique identifier.

Example:

- For: `PROD-SQL-01-AG1`
