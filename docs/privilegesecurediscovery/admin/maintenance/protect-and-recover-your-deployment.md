---
title: "Protect and recover your deployment"
description: "Learn what a backup must contain, how to back up and restore the database, why the encryption key matters, and how recovery works."
sidebar_position: 20
---

Netwrix Privilege Secure for Discovery stores its data in MongoDB and encrypts stored credentials with a key that exists only on the deployment. A usable backup must include both. This page describes what to protect, how to back up and restore the database of a single-node or three-node deployment, and how a recovery works.

## What a backup must contain

A backup that can rebuild a deployment includes the following items:

- The MongoDB database. It includes the web server certificate and its private key.
- The encryption key. If `docker secret ls` also lists `s1.pem` and `s1.pub`, which a deployment upgraded from an earlier version can hold, include those secrets.
- The `/secureone/s1.env` file.
- The active stack file.
- The `fluent.conf` file, if you customized log forwarding.

The product doesn't use the `/secureone/conf/ssl` directory when it runs. It stores the web server certificate in the database, so the database backup carries it. You don't need the application logs to restore the product. Keep them according to your own retention policy.

## Understand why the encryption key matters

The product encrypts stored credentials, such as directory bind passwords, service account passwords, and the secrets of managed systems, with an encryption key. The installer creates the key and stores it as a Docker Swarm secret. It doesn't leave a copy on disk.

A copy of the database without the matching key can't decrypt the stored credentials. A different key also invalidates every sign-in token, so all users have to sign in again. If you restore a database onto a deployment that has a newly generated key, the credentials remain unreadable. Treat the key as part of every backup.

## Protect the key and the backup files

Follow these guidelines for the key:

- Keep a copy off the host. To export it, see [Manage Docker secrets](../../install/docker-secrets.md).
- Restrict access to the people who administer the deployment.
- Store it apart from database archives. A database archive and the key together can reveal stored credentials.
- Use an enterprise secrets vault if you have one.

A database archive contains the private key of the web server certificate. Restrict access to every archive, and encrypt the archive when you store it off the host.

## Back up the database of a single node

Take a logical dump of the `SecureONE` database. Don't copy the MongoDB data folder while MongoDB runs. A file copy of the data folder isn't a reliable restore method.

A single node runs a standalone MongoDB server without a replica set, so a live dump is consistent for each collection but not across collections. Stop the services that write to the database for the length of the dump.

1. Stop the services that write to MongoDB:

   ```bash
   s1 stop api worker worker-secondary expire scanner ldapsync analytics_engine internal_api
   ```

   Run `s1` without `sudo`, because the launcher calls `sudo` itself. The `health_reporter`, `windows-bridge`, `mq`, and `fluentd` services can keep running.

2. Run the dump with the tools in the database container. The hostnames of the deployment resolve only on the Docker network, so run the tools inside the container. Replace `<backup-directory>` with a directory that only root can read.

   ```bash
   sudo sh -c 'umask 077; docker exec $(docker ps -q -f "name=^s1_db\.") mongodump --db SecureONE --gzip --archive > <backup-directory>/secureone-$(date +%F).archive'
   ```

   The output ends with a `done dumping` line for each collection. The archive contains every collection and index of the database.

3. Start the services again:

   ```bash
   s1 start api worker worker-secondary expire scanner ldapsync analytics_engine internal_api
   ```

4. Copy the archive to storage outside the host, apart from the key.

If the deployment uses MongoDB 4.0, the same command works, because the container runs the matching tools. A dump that you took on MongoDB 4.0 also restores into MongoDB 8.0. After a migration cutover and before `retire`, take the backup from the MongoDB 8.0 container instead. In the command, replace `^s1_db\.` with `^s1_db8\.` for a single node. See [Migrate from MongoDB 4.0 to 8.0](../../migration/mongodb-4-to-8/overview.md).

## Restore a database backup to a single node

Restore into a running deployment that has the same release and the same encryption key.

1. Stop the services that write to MongoDB:

   ```bash
   s1 stop api worker worker-secondary expire scanner ldapsync analytics_engine internal_api
   ```

2. Restore the archive. The `--drop` option replaces the existing collections.

   ```bash
   sudo sh -c 'docker exec -i $(docker ps -q -f "name=^s1_db\.") mongorestore --gzip --archive --drop < <backup-directory>/<archive-file>'
   ```

   The output ends with a count of restored documents and `0 document(s) failed to restore`.

3. Start the services again:

   ```bash
   s1 start api worker worker-secondary expire scanner ldapsync analytics_engine internal_api
   ```

4. Confirm that the `health_reports` collection is capped, because a restore can bring it back without its size cap. Open a shell with `s1 db` and run the following command:

   ```javascript
   db.health_reports.isCapped()
   ```

   The result is `true`. If it is `false`, contact Netwrix Support.

## Back up and restore a three-node deployment

A three-node deployment runs a three-member MongoDB replica set. Each member keeps its own copy of the data on its own node, so a node failure doesn't need a restore. See [High availability and disaster recovery](../../getting-started/high-availability-and-disaster-recovery.md). You still need a backup for data loss, such as a deleted domain or a damaged database.

On a replica set, take the dump from a secondary member with `--oplog`. The dump then reflects a single point in time, and you don't need to stop the services. The `--oplog` option works only on a dump of the whole instance, so don't add `--db` or `--collection`, and leave the database name out of the connection string.

1. Run `s1 database-status` to find the replica set name, and use the connection string without a database name from [Identify the service names](./open-the-mongodb-shell.md#identify-the-service-names). For example, on a new MongoDB 8.0 installation the string is `mongodb://mongo1,mongo2,mongo3/?replicaSet=secureone`.
2. On a node that runs a MongoDB member, run the dump inside the member container. Replace `<service>` with the member service on the node, such as `mongo2`, and `<connection-string>` with the string from step 1.

   ```bash
   sudo sh -c 'umask 077; docker exec $(docker ps -q -f "name=^s1_<service>\.") mongodump --uri "<connection-string>&readPreference=secondary" --oplog --gzip --archive > <backup-directory>/secureone-$(date +%F).archive'
   ```

   The output ends with `dumped 1 oplog entry` or a similar count.
3. Copy the archive to storage outside the host, apart from the key.

To restore, stop the services that write to MongoDB with `s1 stop`, as in [Restore a database backup to a single node](#restore-a-database-backup-to-a-single-node). Then run the restore inside a member container. `mongorestore` finds the primary through the connection string.

```bash
sudo sh -c 'docker exec -i $(docker ps -q -f "name=^s1_<service>\.") mongorestore --uri "<connection-string>" --gzip --archive --drop --oplogReplay < <backup-directory>/<archive-file>'
```

Start the services again with `s1 start`, and run the checks in [Verify the deployment](#verify-the-deployment).

You don't need a backup of the Docker Swarm state to rebuild a three-node cluster. Run `setup` on the primary node, join the other nodes, and label the nodes again. If you reattach the existing data directories, label the nodes by hand so that the node that holds the `mongoN` data gets label `N`. The `node-labels` command assigns labels in `docker node ls` order, which isn't stable. For a restore from a logical dump, the label order doesn't matter.

## Hypervisor snapshots

A hypervisor snapshot isn't a substitute for a database backup. Netwrix doesn't state support for snapshots as a backup method. Contact Netwrix Support to discuss them.

## Before you remove or reinstall

Removing the deployment with the teardown option deletes the stack, the data, the configuration in `/secureone`, and the encryption key. Confirm that you have a complete, verified backup before you remove or reinstall the deployment.

## Recovery overview

A recovery onto a new or rebuilt host follows these stages:

1. Install the same product version on the new or rebuilt host.
1. Restore the encryption key. On a rebuilt single node, `setup` deletes a key that you create before you run it, so contact Netwrix Support for the procedure.
1. Restore the database.
1. Verify the deployment.

The installer starts the application against an empty database before you can restore. If the API starts on an empty database, it creates a new web server certificate record. Stop the services that write to the database, and then restore with the `--drop` option.

Contact Netwrix Support for the supported procedure before you attempt a recovery.

## Verify the deployment

After a restore, confirm the following:

- All services show as running when you check the service status.
- You can sign in to the web interface.
- A task that depends on stored credentials works, such as a directory sync or a scan of a managed system.

## Scope

The product has no built-in backup scheduling and no built-in failover to a standby site. For help designing a disaster recovery approach, contact Netwrix Support.
