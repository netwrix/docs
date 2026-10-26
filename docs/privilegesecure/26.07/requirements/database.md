---
title: "Database requirements"
description: "Choose between the bundled PostgreSQL database and a customer-provided SQL Server database for Privilege Secure, and check the ports and support limits."
sidebar_position: 30
---

# Database requirements

Netwrix Privilege Secure for Access Management (Privilege Secure) stores its data in one of two databases:

| Database | Provided by | Default port |
| -------- | ----------- | ------------ |
| PostgreSQL 16 (bundled installer) | Netwrix | 5432 |
| Microsoft SQL Server | You | 1433 |

A server upgraded from PostgreSQL 12 uses a different port. See [Database ports](/docs/privilegesecure/26.07/requirements/ports.md#database).

## PostgreSQL

The product zip file includes a PostgreSQL 16 installer. Run it from the Setup Launcher before you install Privilege Secure. See [Install the application server](/docs/privilegesecure/26.07/install/install-application-server.md).

Follow these guidelines for PostgreSQL versions:

- You can apply minor updates within PostgreSQL 16. Back up the database first.
- Move to a different major PostgreSQL version only through the Setup Launcher during a Privilege Secure upgrade. Don't upgrade the major version yourself.

## SQL Server

You provide SQL Server. The Setup Launcher doesn't install it. SQL Server uses port 1433 by default.

:::note
A SQL Server deployment is an advanced configuration that requires additional support from Netwrix. Contact Netwrix Support before you choose SQL Server.
:::

{/* TODO verify: the SQL Server versions and editions that Netwrix supports. The release code uses Entity Framework Core 10 for SQL Server and doesn't define a version range, and Microsoft's documentation doesn't state Netwrix's support. */}

## High availability

- An active-passive configuration is available only with PostgreSQL. It uses the embedded database and needs manual failover.
- An active-active configuration supports both PostgreSQL and SQL Server. It needs an additional server for the database and requires no manual failover.
- A customer-provided PostgreSQL or SQL Server database suits an active-active configuration.

For setup, see [High availability options](/docs/privilegesecure/26.07/install/high-availability.md).

## Next steps

- See [Ports](/docs/privilegesecure/26.07/requirements/ports.md) for the database ports to open between servers.
- See [Application server requirements](/docs/privilegesecure/26.07/requirements/application-server.md).
