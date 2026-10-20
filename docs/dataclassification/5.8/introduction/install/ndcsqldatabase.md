---
title: "Configure NDC SQL database"
description: "Configure NDC SQL database"
sidebar_position: 10
---

# Configure NDC SQL database

Netwrix Data Classification uses either a Microsoft SQL Server database or a PostgreSQL database as metadata storage. During
installation, the setup wizard prompts you to create a dedicated NDC SQL database on your SQL Server or PostgreSQL
instance. After installation completes, configure it as described in this topic for the product to
function properly. You can create the database manually before the product installation using an appropriate tool such as SQL Server Management Studio or pgAdmin. See the Microsoft article
[Create a Database](https://docs.microsoft.com/en-us/sql/relational-databases/databases/create-a-database) for detailed instructions on creating a new SQL Server database. See the pgAdmin article [Database Dialog](https://www.pgadmin.org/docs/pgadmin4/9.17/database_dialog.html) for instructions on creating a new PostgreSQL database.

:::note
Netwrix recommends installing NDC and its database on separate servers for better performance.
:::


## Configure a SQL Server database

Certain product features require SQL Server Standard or Enterprise edition.

:::note
The account you use to create the NDC SQL database needs the dbcreator server-level
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

5. Select the Options page and ensure the Recovery model is "_Simple_".

    :::note
    Netwrix recommends that you don't change the recovery model to avoid excessive log file
    growth.
    :::

## Configure a PostgreSQL database

Allow for a write-ahead log (pg_wal) directory of at least 32 GB for a single instance, or 128 GB for a Distributed Query Server environment, to accommodate periods of high load.

:::note 
Use the postgres account, or an account with permission to create and alter databases, tables, and indexes, to create the NDC 
SQL Database.
:::

1. Connect to the server hosting the PostgreSQL instance and open the postgresql.conf file.
2. Update the values for the specified configuration settings as follows:

    | Setting | Recommended value (single instance) | Recommended value (4-instance Distributed Query Server environment) | 
    |----------|-------------------------------------|--------------------------------------------------------------------|
    | max_wal_size | 16GB | 64GB |
    | min_wal_size | 4GB | 16GB |
    | checkpoint_timeout | 15min | 15min |
    | checkpoint_completion_target | 0.9 | 0.9 |

Netwrix recommends these values for a fully loaded instance of the given size, i.e. up to 16 million files per instance. 

3. Reload the configuration in your PostgreSQL instance by restarting the service.

:::note 
These recommendations are calculated estimates and subject to change. Adjust the PostgreSQL database configuration according to your needs and limits.
:::
