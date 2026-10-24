---
title: "High availability options"
description: "Choose a high availability deployment for Privilege Secure, learn what is replicated, and find how to back up, fail over, and register a secondary node."
sidebar_position: 100
---

# High availability options

Netwrix Privilege Secure for Access Management (Privilege Secure) supports deployments that keep working when a server or database fails. This page describes the options, what each one replicates, and how to back up and recover a deployment.

## Choosing a deployment

| Option | Database | Failover | Complexity |
|---|---|---|---|
| Active-passive | PostgreSQL only. Uses the database that the installer provides. | Manual | Lowest. Two identical servers. |
| Active-active | PostgreSQL or SQL Server | No manual step | Higher. Needs an extra server for the database. |
| Cloud-native database | Amazon Aurora PostgreSQL, Amazon RDS for SQL Server, or the PostgreSQL and SQL Server database services in Azure | Provided by the database service | Depends on the cloud service |

### Active-passive

Two identical servers run all Privilege Secure components. The database replicates from the primary server to the secondary server. When the primary server becomes unavailable, you start the failover manually. The secondary database is read-only until the failover.

After you establish the pair, sign in to the primary server for normal use.

### Active-active

Several application servers share one database. Failover needs no manual step, and you can add application servers for redundancy and scalability. Setup is more complex than active-passive, and the database runs on its own server.

### Cloud-native database

A cloud database service has built-in high availability and automatic scaling, which suits an active-active deployment. See [Database requirements](/docs/privilegesecure/26.07/requirements/database.md) for the supported database options.

{/* TODO verify: the supported cloud database list and versions. Source: the 26.03 overview only. */}

## Set up high availability

The HA manager tool (`NPS.HaMgr.exe`) is in the `Extras` folder of the product download. You run it on both servers to configure PostgreSQL replication for an active-passive pair.

For the full setup and upgrade procedures, use these Knowledge Base articles:

- [Configuring and Upgrading in High Availability Mode and Using Remote Services Configurations](/docs/kb/privilegesecure/high-availability-and-clustering/configuring-and-upgrading-in-high-availability-mode-and-using-remote-services-configurations)
- [How to Configure Encryption Keys in Multiple NPS Server Environments](/docs/kb/privilegesecure/high-availability-and-clustering/how-to-configure-encryption-keys-in-multiple-nps-server-environments)
- [How to Create a Service Mesh Between App Servers](/docs/kb/privilegesecure/high-availability-and-clustering/how-to-create-a-service-mesh-between-app-servers)
- [How to Configure a Multi-Server NPS Environment with a Shared Database Server](/docs/kb/privilegesecure/database-and-backend/how-to-configure-a-multi-server-nps-environment-with-a-shared-database-server)

The servers in a pair must reach each other on the console port, 6500 by default, and on the PostgreSQL port. See [Ports](/docs/privilegesecure/26.07/requirements/ports.md).

{/* TODO verify: the PostgreSQL port that the HA manager uses. The tool defaults to 5432, and the bundled PostgreSQL port isn't confirmed (5432 or 5437). Don't state a mismatch as fact until the SME confirms the port. */}

:::note
To upgrade a high availability pair, fail over and upgrade the secondary server, upgrade the primary server, and then re-establish replication. The Knowledge Base article gives the full order, including copying the configuration and encryption keys to the secondary. Follow it before you start. See also [Upgrade Privilege Secure](/docs/privilegesecure/26.07/install/upgrade.md).
:::

## Back up and recover

Plan backups around four items:

| Item | Included in high availability replication |
|---|---|
| PostgreSQL database | Yes |
| RDP and SSH session recordings | No. Recordings are stored on the proxy servers. |
| Configuration files | No |
| Encryption keys | No |

High availability replicates the database only. Back up recordings, configuration files, and encryption keys separately, and keep the encryption keys with your other secrets. Keep a copy of the keys that matches each database backup.

{/* TODO verify: the supported backup procedure for recordings and configuration files, and a restore test of a backup with its keys. */}

### Fail over to the secondary server

Failover is manual.

1. Start the failover on the secondary server with the HA manager tool, or run `failover.ps1` on the secondary server.
2. Point the Action Service at the new primary server. Run `ActionService.exe -register` and supply an administrator account when prompted.
3. Point the web service's database setting at the new primary server.
4. Confirm that you can sign in to the Privilege Secure Console on the new primary server.

{/* TODO verify: where failover.ps1 is installed and how a customer starts it, the exact Action Service re-point command and arguments (-register vs -Config, as in the additional services page), and where the web Database setting lives (appsettings.db.json or the Database Configuration Tool). The standby script that the repository README mentions wasn't found in the source. */}

### Related procedures

These Knowledge Base articles cover recovery tasks. Review each one against your version before you follow it.

- [Exporting and Importing the Database to a New Server](/docs/kb/privilegesecure/database-and-backend/exporting-and-importing-the-database-to-a-new-server)
- [Moving the PostgreSQL Data Directory (PGDATA_DIR) to a New Location](/docs/kb/privilegesecure/database-and-backend/moving-the-postgresql-data-directory-pgdatadir-to-a-new-location)
- [Netwrix Privilege Secure: Performing an In-Place Postgres Upgrade](/docs/kb/privilegesecure/database-and-backend/netwrix-privilege-secure-performing-an-in-place-postgres-upgrade)
- [Index Was Outside the Bounds of the Array Error](/docs/kb/privilegesecure/high-availability-and-clustering/index-was-outside-the-bounds-of-array-error)

For how encryption keys protect stored secrets, and how to rotate them, see [Encryption keys](/docs/privilegesecure/26.07/configuration/encryption-keys/encryption-keys.md).

## Register the secondary node after an upgrade

After an upgrade, the primary Privilege Secure Console can show no nodes for the secondary server. To register the secondary server's services:

1. Sign in to the Privilege Secure Console on the secondary server.
2. Open the page that holds the **NPS Rest URL** setting. See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md).
3. Enter the fully qualified domain name (FQDN) URL of the secondary server, for example `https://<secondary-server-fqdn>:6500`. Don't add a trailing slash.
4. Click **Register Services**.

The secondary node then appears in the primary console. {/* TODO verify: the exact menu path to the Services page in 26.07. */}

## Known issue

Configuring the secondary node can fail intermittently when the link between the nodes is slow. In one reported case, latency of 300 to 400 milliseconds between nodes contributed to the problem. Treat that value as an example, not a supported limit. {/* TODO verify: status and workaround, and the supported latency. */}

## Related topics

- [Service Nodes](/docs/privilegesecure/26.07/admin/service-nodes/service-nodes.md)
- [Architecture](/docs/privilegesecure/26.07/getting-started/architecture.md)
