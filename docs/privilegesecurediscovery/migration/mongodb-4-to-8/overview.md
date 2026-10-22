---
title: "Migrate from MongoDB 4.0 to 8.0"
description: "Decide whether you need the MongoDB 4.0 to 8.0 migration, and see how the side-by-side migration works for single-node and cluster deployments."
sidebar_position: 10
---

Netwrix Privilege Secure for Discovery 26.09.1 provides the supported path for moving an existing deployment from MongoDB 4.0 to MongoDB 8.0. Use this set of pages if your deployment still runs MongoDB 4.0. New installations use MongoDB 8.0 and don't need a migration.

:::warning
MongoDB 4.0 will no longer be supported and the backend will move to Python 3.x in a future release. Customers still using MongoDB 4.0 must deploy 26.09.1 and complete the database migration before upgrading to that release or any later release.
:::

## Check whether you need the migration

Run the following command on the primary node, or on any node of a cluster:

```bash
s1 database-status
```

The output names the active database service and the live MongoDB version. To see the services too, run `sudo docker service ls | grep -i mongo`. Match the result to the following table.

| Result | Meaning | Action |
|--------|---------|--------|
| One service named `<stack>_db`, version 4.0 | Single-node deployment on MongoDB 4.0 | Migrate. Follow [Migrate a single-node deployment](./single-node.md). |
| Three services named `<stack>_mongo1`, `<stack>_mongo2`, and `<stack>_mongo3`, version 4.0 | Three-node cluster on MongoDB 4.0 | Migrate. Follow [Migrate a three-node cluster](./three-node-cluster.md). |
| The same services running MongoDB 8.0 | New installation, or migration already finished | No migration needed. See [Verify and maintain the deployment after cutover](./after-cutover.md). |
| Both `<stack>_db` and `<stack>_db8`, or both `<stack>_mongoN` and `<stack>_mongoN-8` | Migration in progress or finished but not retired | See [Resume, roll back, or recover a migration](./resume-roll-back-recover.md) and [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md). |

## What 26.09.1 provides

Release 26.09.1 is the bridge release for this migration. It supports both MongoDB 4.0 and MongoDB 8.0 and provides the following `s1 mongo-upgrade` commands.

| Command | Purpose |
|---------|---------|
| `check` | Reports the live source version and validates that the tool can read the database size, local free space, and the migration image. |
| `run` | Creates the MongoDB 8.0 target, copies data and indexes, and runs validation. |
| `status` | Reports whether the last `run` completed, failed, or is in progress. |
| `cutover` | Stops database writes, reconciles the latest data, validates it, switches the application to MongoDB 8.0, and stops MongoDB 4.0 when safe. |
| `finish-cutover` | Repeats only the final check and stop of MongoDB 4.0 when `cutover` left it running. |
| `retire` | Gives the canonical service names back to the MongoDB 8.0 data and removes the temporary 8.0 services. |

The `s1 db`, `s1 set-password`, and `s1 database-status` commands follow the active database before, during, and after the migration. The exception is a three-node cluster after `retire`, where these commands can't reach the replica set. See [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md).

## Supported topologies

The migration supports the following topologies:

* A single-node deployment with one MongoDB service.
* A three-node cluster with a three-member MongoDB replica set.

If the result of the earlier service check doesn't match either topology, don't continue. Contact Netwrix Support.

If you installed from the ISO image, contact Netwrix Support before you start. An ISO installation runs the same Docker Swarm stack, but `secureone.sh upgrade` doesn't refresh an ISO stack file automatically, and `retire` refuses a stack file that hardcodes the MongoDB image tag or the `--replSet` name.

## How the side-by-side migration works

The migration isn't an in-place MongoDB server upgrade. The tool creates a separate MongoDB 8.0 target and copies the data at the application level. You don't need to upgrade through MongoDB 4.2, 4.4, 5.0, 6.0, and 7.0.

MongoDB 4.0 and MongoDB 8.0 run at the same time. The application keeps using MongoDB 4.0 while the initial copy runs.

```text
Before migration
  Application services  ---->  MongoDB 4.0 source

During the initial copy (run)
  Application services  ---->  MongoDB 4.0 source
                                    |  read and copy
                                    v
                                MongoDB 8.0 target

During cutover
  1. Stop services that write to MongoDB.
  2. Confirm that MongoDB 4.0 receives no more writes.
  3. Reconcile and validate MongoDB 4.0 against MongoDB 8.0.
  4. Switch the application services to MongoDB 8.0.
  5. Check the whole stack for references to MongoDB 4.0.
  6. Stop MongoDB 4.0 when no reference remains.

After cutover
  Application services  ---->  MongoDB 8.0 target
  MongoDB 4.0: stopped, data retained

After retire
  Application services  ---->  MongoDB 8.0 on the canonical service names
  MongoDB 4.0 data: archived, never deleted
```

The MongoDB 8.0 target isn't an active-active database or an automatic failover database during the copy. Writes continue on MongoDB 4.0 until cutover. The final reconciliation makes the target current before the application starts using it.

The `cutover` command never deletes the old database. After a clean switch and reference scan, it stops the MongoDB 4.0 service or replica set and retains its data. The `retire` command later renames the 4.0 data aside and never deletes it either.

## Service and data names

The following table shows the names at each stage, with the default stack name `s1`.

| Item | Before migration | During migration and after cutover | After `retire` |
|------|------------------|------------------------------------|----------------|
| Single-node service | `s1_db` (network alias `db`) | `s1_db8` (network alias `db8`) added | `s1_db` runs MongoDB 8.0. `s1_db8` is removed. |
| Cluster services | `s1_mongo1`, `s1_mongo2`, `s1_mongo3` | `s1_mongo1-8`, `s1_mongo2-8`, `s1_mongo3-8` added | `s1_mongo1`, `s1_mongo2`, and `s1_mongo3` run MongoDB 8.0. The `-8` services are removed. |
| Replica set (cluster) | `secureone` | `secureone8` | `secureone8`. The tool renames hosts, not the replica set. |
| Database name | `SecureONE` | `SecureONE` | `SecureONE` |
| Single-node data | `/secureone/data/db` | Docker named volume for `s1_db8` | MongoDB 8.0 data at `/secureone/data/db`. MongoDB 4.0 data archived at `/secureone/data/db.mongo4.<timestamp>`. |
| Cluster data | `/secureone/data/db` on each database node | Docker named volume of each `-8` service, on each node | MongoDB 8.0 data at `/secureone/data/db` on each node. MongoDB 4.0 data archived beside it. |

Each MongoDB service has exactly one desired replica. A three-node cluster means three separate services with one replica each. MongoDB 4.0 and MongoDB 8.0 can't form one mixed-version replica set across this version gap, which is why the migration creates a separate `secureone8` replica set.

During the migration, the application connection string for a single node is `mongodb://db:27017/SecureONE` before cutover and `mongodb://db8:27017/SecureONE` after cutover. Before `retire` finishes, don't assume the canonical names point to the active database.

## Migration pages

Follow the [Migration checklist](./checklist.md) from start to finish. It lists every step, with the command and the result to expect. The following pages explain each step.

1. [Plan the migration](./plan.md): storage, maintenance window, and backups.
2. [Prepare hosts for the migration](./prepare-hosts.md): upgrade to 26.09.1 and install the matching `s1` command-line tool.
3. [Migrate a single-node deployment](./single-node.md) or [Migrate a three-node cluster](./three-node-cluster.md): run `check`, `run`, and `status`.
4. [Cut over to MongoDB 8.0](./cut-over.md): the maintenance-window step.
5. [Verify and maintain the deployment after cutover](./after-cutover.md): validate the result.
6. [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md): restore the canonical names.
7. [Resume, roll back, or recover a migration](./resume-roll-back-recover.md): the actions for each failure.

If a step fails or stops, see [Resume, roll back, or recover a migration](./resume-roll-back-recover.md). To open a database shell on either version, see [Open the MongoDB shell](../../admin/maintenance/open-the-mongodb-shell.md).
