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

{/* TODO verify: the bundled PostgreSQL port. The Setup Launcher configuration and System Settings > Database in an upgraded lab show 5432, but the backend code uses 5437 for production. Confirm the port on a fresh install. */}

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

{/* TODO verify: the supported SQL Server versions and editions. */}

## High availability and cloud databases

- An active-passive configuration is available only with PostgreSQL. It uses the embedded database and needs manual failover.
- An active-active configuration supports both PostgreSQL and SQL Server. It needs an additional server for the database and requires no manual failover.
- Cloud-native databases suit an active-active configuration. AWS offers Aurora PostgreSQL and RDS for SQL Server. Azure offers its own PostgreSQL and SQL Server services.

For setup, see [High availability options](/docs/privilegesecure/26.07/install/high-availability.md).

## Next steps

- See [Ports](/docs/privilegesecure/26.07/requirements/ports.md) for the database ports to open between servers.
- See [Application server requirements](/docs/privilegesecure/26.07/requirements/application-server.md).
