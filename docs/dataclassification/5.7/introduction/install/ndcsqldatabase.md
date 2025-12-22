---
title: "Configure NDC SQL database"
description: "Configure NDC SQL database"
sidebar_position: 10
---

# Configure NDC SQL database

Netwrix Data Classification uses Microsoft SQL Server database as metadata storage. During
installation, you have been prompted to create a dedicated NDC SQL database on your SQL Server
instance. Upon installation completion, you need to configure it as shown below for the product to
function properly. You can create the database manually prior to the product installation—Using SQL
Server Management Studio or Transact-SQL. Refer to the following Microsoft article for detailed
instructions on how to create a new database:
[Create a Database](https://docs.microsoft.com/en-us/sql/relational-databases/databases/create-a-database).

:::note
For performance purposes, Netwrix strongly recommends to separate NDC and SQL Server
machine.
:::


For certain product features, SQL Server Standard or Enterprise edition is required.

**To configure NDC database**

:::note
The account used to create the NDC SQL database must be granted the dbcreator server-level
role.
:::


1. On the computer where SQL Server instance with the NDC SQL database resides, navigate to Start →
   All Programs → Microsoft SQL Server → SQL Server Management Studio.
2. Connect to the server.
3. Locate the NDC_Database, right-click it and select Properties.
4. Select the Files page and set the Initial Size (MB) parameter for PRIMARY file group to 512 MB.
5. Click Expand next to PRIMARY file group and set Autogrowth / Maxsize as follows:

    | Option            | Description                                        |
    | ----------------- | -------------------------------------------------- |
    | File Growth       | - Recommended—128 MB. - Large environment— 512 MB. |
    | Maximum File Size | Select Unlimited.                                  |

6. Go to Options page and make sure that the Recovery model parameter is set to "_Simple_".

    :::note
    Netwrix recommends that you do not change the recovery model to avoid log files
    growth.
    
    :::
