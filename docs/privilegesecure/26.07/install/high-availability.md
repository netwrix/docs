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
| Cloud-native database | A PostgreSQL or SQL Server database that you provide and manage | Your responsibility | Depends on your database setup |

### Active-passive

Two identical servers run all Privilege Secure components. The database replicates from the primary server to the secondary server. When the primary server becomes unavailable, you start the failover manually. The secondary database is read-only until the failover.

After you establish the pair, sign in to the primary server for normal use.

### Active-active

Several application servers share one database. Failover needs no manual step, and you can add application servers for redundancy and scalability. Setup is more complex than active-passive, and the database runs on its own server.

### Cloud-native database

In this option, the database is a PostgreSQL or SQL Server server that you provide and manage. Its high availability and scaling are your responsibility, and it suits an active-active deployment. See [Database requirements](/docs/privilegesecure/26.07/requirements/database.md) for the supported database options.

## Set up high availability

The HA manager tool (`NPS.HaMgr.exe`) is in the `Extras` folder of the product download. You run it on both servers to configure PostgreSQL replication for an active-passive pair.

For the full setup and upgrade procedures, use these Knowledge Base articles:

- [Configuring and Upgrading in High Availability Mode and Using Remote Services Configurations](/docs/kb/privilegesecure/high-availability-and-clustering/configuring-and-upgrading-in-high-availability-mode-and-using-remote-services-configurations)
- [How to Configure Encryption Keys in Multiple NPS Server Environments](/docs/kb/privilegesecure/high-availability-and-clustering/how-to-configure-encryption-keys-in-multiple-nps-server-environments)
- [How to Create a Service Mesh Between App Servers](/docs/kb/privilegesecure/high-availability-and-clustering/how-to-create-a-service-mesh-between-app-servers)
- [How to Configure a Multi-Server NPS Environment with a Shared Database Server](/docs/kb/privilegesecure/database-and-backend/how-to-configure-a-multi-server-nps-environment-with-a-shared-database-server)

The servers in a pair must reach each other on the console port, 6500 by default, and on the PostgreSQL port. See [Ports](/docs/privilegesecure/26.07/requirements/ports.md).

The HA manager takes the PostgreSQL port from the database settings of the Privilege Secure configuration, which default to 5432. If none is set, it uses 5432. If your PostgreSQL instance listens on a different port, enter that port in the HA manager.

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

{/* TODO verify: the Netwrix-supported backup and restore procedure for recordings and configuration files. The product code defines no backup feature for these items, so a Netwrix support statement is needed. */}

### Fail over to the secondary server

Failover is manual.

1. On the secondary server, open the HA manager tool and click **Failover**. Confirm the prompt. The prompt names the server that becomes the primary.

   The HA manager starts PostgreSQL if it is stopped, promotes the replica to primary, and writes the local host and PostgreSQL port into the database settings file, `appsettings.db.json`, in the `Database` folder under `C:\ProgramData\Stealthbits\PAM`. It then restarts the `SbPAMProxy` service. {/* TODO verify: whether the web service (IIS) must be restarted to pick up the new database settings after a failover. The HA manager restarts only the SbPAMProxy service, so a host test or an SME statement settles it. */}
2. If the Action Service runs on another server, point it at the new primary server. Run the following command on that server, and enter the password when prompted:

   ```
   ActionService.exe -register -u <domain>\<nps-admin> -url https://<new-primary-server>:6500
   ```

   See [Additional services](/docs/privilegesecure/26.07/install/additional-services.md) for the `-register` options.
3. Confirm that you can sign in to the Privilege Secure Console on the new primary server.

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
2. Select **System Settings** > **Services** to open the page that holds the **NPS Rest URL** setting. See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md).
3. Enter the fully qualified domain name (FQDN) URL of the secondary server, for example `https://<secondary-server-fqdn>:6500`. Don't add a trailing slash.
4. Click **Register Services**.

The secondary node then appears in the primary console.

{/* TODO verify: Support confirmation of a known issue where configuring the secondary node fails intermittently on a slow link between the nodes, its workaround, and the supported latency. Unconfirmed, so it isn't published. */}

## Related topics

- [Service Nodes](/docs/privilegesecure/26.07/admin/service-nodes/service-nodes.md)
- [Architecture](/docs/privilegesecure/26.07/getting-started/architecture.md)
