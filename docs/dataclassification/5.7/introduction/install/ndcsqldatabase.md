---
title: "Configure NDC SQL database"
description: "Configure NDC SQL database"
sidebar_position: 10
---

# Configure NDC SQL database

Netwrix Data Classification uses a Microsoft SQL Server database as metadata storage. During
installation, you are prompted to create a dedicated NDC SQL database on your SQL Server
instance. Upon installation completion, you need to configure it as shown below for the product to
function properly. You can create the database manually before the product installation using SQL
Server Management Studio or any tool that supports T-SQL (for example, sqlcmd). See the Microsoft article
[Create a Database](https://docs.microsoft.com/en-us/sql/relational-databases/databases/create-a-database) for detailed instructions on creating a new database.

:::note
For performance purposes, Netwrix strongly recommends installing NDC and the SQL Server hosting
the NDC database on separate servers.
:::


For certain product features, SQL Server Standard or Enterprise edition is required.

**To configure NDC database**

:::note
The account used to create the NDC SQL database must be granted the dbcreator server-level
role.
:::


1. Open SQL Server Management Studio or your preferred SQL client and connect to the
SQL Server instance hosting the NDC database. Depending on your security
setup, you may need to do this on the server itself.
2. Open the properties window for the NDC database. In SQL Server Management Studio,
select the database in the explorer tab on the left side of the window,
right-click, and select Properties.
3. Select the Files page and set the Initial Size (MB) for the PRIMARY file group to 512MB.
4. Set the Autogrowth and Max Size for the PRIMARY file group as follows:

    | Option            | Description                                        |
    | ----------------- | -------------------------------------------------- |
    | File Growth       | - Recommended — 128 MB. - Large environment — 512 MB. |
    | Maximum File Size | Select Unlimited.                                  |

5. Select the Options page and ensure the Recovery model is set to "_Simple_".

    :::note
    Netwrix recommends that you don't change the recovery model to avoid excessive log file
    growth.
    :::
