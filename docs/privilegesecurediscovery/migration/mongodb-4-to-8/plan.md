---
title: "Plan the MongoDB migration"
description: "Plan storage capacity, the maintenance window, and backups before you migrate Privilege Secure for Discovery from MongoDB 4.0 to 8.0."
sidebar_position: 20
---

The migration keeps the MongoDB 4.0 database in place and creates a complete MongoDB 8.0 copy. Plan the storage, the maintenance window, and a verified backup before you start. This page applies to single-node deployments and three-node clusters.

## Plan storage capacity

The migration isn't an in-place upgrade, and it doesn't copy only changed data. The readiness check calculates the current database size as data plus indexes and requires free space of at least twice that size.

| Size reported by `check` | Additional free space required | Recommended total storage budget |
|--------------------------|--------------------------------|----------------------------------|
| 100 GB | At least 200 GB | At least 300 GB, plus operational margin |

The total budget includes the existing MongoDB 4.0 data, the new MongoDB 8.0 copy, and migration headroom. Actual disk use can differ between MongoDB versions because storage formats and compression differ. Keep additional capacity for logs, temporary data, database growth, and normal host operations.

MongoDB 4.0 keeps using disk space throughout the migration and after cutover. The `retire` command renames the MongoDB 4.0 data aside and never deletes it, so that space stays in use until you remove the archive. Don't subtract this future reclaimed space from the capacity requirement. See [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md).

For a single-node deployment, confirm capacity on the database host. For a three-node cluster, apply the requirement to every database node, because each replica-set member stores a complete copy.

The readiness check measures free space at `/secureone/data/db`. The MongoDB 8.0 target uses Docker named volumes. If the Docker data root is on a different filesystem, validate that filesystem separately and use the lower available capacity.

Identify the relevant filesystems with the following read-only commands:

```bash
df -h /secureone/data/db
sudo docker info --format '{{.DockerRootDir}}'
```

Run `df -h <docker-root-directory>` against the directory that Docker returns. Don't continue unless both the manual capacity review and `s1 mongo-upgrade check` pass.

## Plan the maintenance window

The `run` stage can take a long time on a large database, but it doesn't intentionally stop application services. Only `cutover` causes downtime. During `cutover`, the services that write to the database stay stopped while the tool reconciles, validates, and switches the source.

The length of `cutover` depends on the following factors:

* Database size and total document count.
* The number and distribution of documents across collections.
* How much data changes between the initial copy and `cutover`.
* Collections that continue to change while the initial copy runs.
* Host CPU and memory.
* Storage throughput and latency.
* Docker volume placement.
* Network throughput and latency between cluster nodes.

Don't estimate one environment by applying a GB-per-hour or documents-per-hour formula from another. Run `check` and `run` first to see the size of your own database. The `run` stage doesn't disrupt users, so treat it as a rehearsal and use how long it takes to size the window. Plan the window in hours rather than minutes for a large deployment.

Schedule `run` to finish as close as practical to the approved `cutover` window. A long delay allows more source activity to accumulate before the final reconciliation. For a large or business-critical deployment, contact Netwrix Support to review the plan before you schedule the window.

The `retire` command is a separate step with its own, shorter application downtime. See [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md).

## Back up before you start

Take and verify an independent backup of the MongoDB 4.0 data before you start, by using your established backup and restore procedure. No backup tooling ships with the product. For the `mongodump` method and the `key.txt` encryption key, see [Back up the database of a single node](../../admin/maintenance/protect-and-recover-your-deployment.md#back-up-the-database-of-a-single-node) and [Back up and restore a three-node deployment](../../admin/maintenance/protect-and-recover-your-deployment.md#back-up-and-restore-a-three-node-deployment). Export a copy of the `key.txt` encryption key and keep it with the backup, but not in the same location. See [Protect and recover your deployment](../../admin/maintenance/protect-and-recover-your-deployment.md) and [Manage Docker secrets](../../install/docker-secrets.md).

If a backup procedure isn't available or the restore path is unverified, don't run `cutover`. Contact Netwrix Support first. The retained MongoDB 4.0 services aren't a substitute for an independent backup.

## Decide who can stop the migration

Before the window, name the person who decides to continue or stop, and agree on the condition that triggers a stop. After the application writes to MongoDB 8.0, a rollback isn't a one-command operation and needs Netwrix Support. See [Resume, roll back, or recover a migration](./resume-roll-back-recover.md#roll-back).

## Next step

Follow the planning items in the [Migration checklist](./checklist.md#phase-1-plan), and then continue to [Prepare hosts for the migration](./prepare-hosts.md).
