---
title: "Protect and recover your deployment"
description: "Learn what a Privilege Secure for Discovery backup must contain, how to take a single-node database backup, why the encryption key matters, and how recovery works."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Three-node cluster: should the dump come from a secondary, is --oplog required, and what are the matching restore flags? Dev: dumping from a secondary and --oplog are standard upstream behavior, untested here. --oplog needs a full-instance dump, with no --db or --collection. The replica set is secureone on 4.0 and secureone8 after cutover. Evidence: nothing in the repository runs mongodump.

TODO: Can a MongoDB 4.0 dump restore into MongoDB 8.0, and does `yarn run migrator up onprem` do nothing after a restore? Evidence: dev expects both to work and tested neither. The single-node dump and restore on this page ran MongoDB 8.0 to MongoDB 8.0 only.

TODO: Rebuild on a new host. Dev says a secret created before `setup` wins because the script's own create fails harmlessly, and that `setup` then deploys everything and runs migrations against an empty database. The Docker secrets page says the single-node `setup` leaves the swarm first, which deletes a secret created earlier. Resolve the conflict, then write the rebuild procedure. A possible workaround is to set the `*_REPLICA_COUNT` variables of the write services to 0 in `s1.env`; dev hasn't tried it. Evidence: secureone.sh:1613-1621 and :1880-1885.

TODO: Is a swarm-level backup needed to rebuild a three-node cluster, or is a rebuild with `setup`, join, and relabeling enough? Evidence: none; dev confirms only that labels live in swarm state, so a rebuilt swarm needs relabeling (pre-deploy.sh labels nodes in `docker node ls` order).

TODO: Are s1.pem and s1.pub still relevant on 26.x installs that were upgraded from version 2? Evidence: docker/s1tool/src/upgrade_v3.sh:30-31.

TODO: What disaster recovery posture can Netwrix publish (cold-standby restore only, or another design)? Evidence: none. The write-path services to keep stopped on a standby are the set that `cutover` stops.
:::

Netwrix Privilege Secure for Discovery stores its data in MongoDB and encrypts stored credentials with a key that exists only on the deployment. A usable backup must include both. This page describes what to protect, how to back up the database of a single-node deployment, and how a recovery works.

## What a backup must contain

A backup that can rebuild a deployment includes the following items:

- The MongoDB database. It includes the web server certificate and its private key.
- The encryption key.
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

If the deployment uses MongoDB 4.0, the same command works, because the container runs the matching tools. After a migration cutover and before `retire`, take the backup from the MongoDB 8.0 container instead. In the command, replace `^s1_db\.` with `^s1_db8\.` for a single node. See [Migrate from MongoDB 4.0 to 8.0](../../migration/mongodb-4-to-8/overview.md).

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

## Three-node deployments

A three-node deployment runs a three-member MongoDB replica set. Each member keeps its own copy of the data on its own node. A node failure doesn't need a restore. See [High availability and disaster recovery](../../getting-started/high-availability-and-disaster-recovery.md).

Back up the stack file and the node assignments along with the database so that you can rebuild the cluster. The node labels live in the Docker Swarm state. After you rebuild a swarm, label the nodes again. `secureone.sh` does that in `docker node ls` order. For a restore from a logical dump, it doesn't matter which node holds replica 1. For a restore from a file copy or a snapshot, which brings back the data folders, it does.

Contact Netwrix Support for the supported cluster backup procedure.

## Hypervisor snapshots

A hypervisor snapshot isn't a substitute for a database backup. Netwrix doesn't state support for snapshots as a backup method. Contact Netwrix Support to discuss them.

## Before you remove or reinstall

Removing the deployment with the teardown option deletes the stack, the data, the configuration in `/secureone`, and the encryption key. Confirm that you have a complete, verified backup before you remove or reinstall the deployment.

## Recovery overview

A recovery onto a new or rebuilt host follows these stages:

1. Install the same product version on the new or rebuilt host.
1. Restore the encryption key.
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
