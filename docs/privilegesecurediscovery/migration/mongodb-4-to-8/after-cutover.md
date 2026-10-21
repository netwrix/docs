---
title: "Verify and maintain the deployment after cutover"
description: "Verify that Privilege Secure for Discovery runs on MongoDB 8.0, see which settings persist, and redeploy safely after a migration."
sidebar_position: 70
---

After `cutover`, the application runs on MongoDB 8.0. Use the checks on this page to confirm the result, to understand which settings the migration saved, and to avoid commands that undo it.

## Verify the deployment

Run the following commands. For a three-node cluster, add `--multi-node` before each subcommand and run them from the database-manager node.

```bash
s1 database-status
s1 status
sudo docker service ls | grep -i mongo
```

The `s1 database-status` command shows which database the application uses and the live engine version on both single-node deployments and clusters. The output includes the following lines:

```text
Active database service: <service>
MongoDB version: <version>
```

On a single node, the command then reports that there is no replica set to query. On a cluster, it lists the members and their states.

Confirm each of the following:

* `s1 database-status` reports `MongoDB version: 8.0.x`, and the active service is `db8` (single node) or a `mongoN-8` service (cluster) after `cutover`, or `db` or `mongoN` after `retire`. On a cluster after `retire`, the command can't reach the replica set. See the known issue in [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md).
* A cluster's `secureone8` replica set has one primary and two secondary members.
* The MongoDB 8.0 services each have one running replica on their expected nodes.
* After a clean scan, each MongoDB 4.0 service has zero running replicas. If `cutover` kept MongoDB 4.0 running because of a reference, keep it running until you resolve that reference. See [Resume, roll back, or recover a migration](./resume-roll-back-recover.md).
* The product loads and administrators can sign in.
* A scan of a test system returns results.
* A user can request just-in-time access, receive it, and lose it when it expires.
* A directory synchronization completes.
* The other workflows you use in your environment complete normally.
* No write-path service stays stopped or uses MongoDB 4.0.

Keep the command outputs and logs with the change record. The [Migration checklist](./checklist.md#phase-6-verify) lists these checks in order.

## MongoDB states

The following table shows how to recognize each state, and which names and shell apply. For the commands to open a shell, see [Open the MongoDB shell](../../admin/maintenance/open-the-mongodb-shell.md).

| State | How to recognize it | Active database | Replica set (cluster) | Shell |
|-------|---------------------|-----------------|-----------------------|-------|
| Fresh MongoDB 8.0 installation | `s1 database-status` reports 8.0. Only the canonical services exist. | `<stack>_db` or `<stack>_mongo1` to `<stack>_mongo3` | `secureone` | `mongosh` |
| Still on MongoDB 4.0 | `s1 database-status` reports 4.0. Only the canonical services exist. | `<stack>_db` or `<stack>_mongo1` to `<stack>_mongo3` | `secureone` | `mongo` |
| Mid-migration | The `<stack>_db8` or `<stack>_mongoN-8` services exist, and the application still uses MongoDB 4.0. | The MongoDB 4.0 services | `secureone`, with `secureone8` as the target | `mongo` for the active database |
| Cut over, not retired | The `-8` services run. The MongoDB 4.0 services have zero replicas. | `<stack>_db8` or `<stack>_mongo1-8` to `<stack>_mongo3-8` | `secureone8` | `mongosh` |
| Retired | The canonical services run MongoDB 8.0. The `-8` services are gone. A `.mongo4.<timestamp>` archive exists. | `<stack>_db` or `<stack>_mongo1` to `<stack>_mongo3` | `secureone8` | `mongosh` |

The `s1 db` and `s1 database-status` commands select the active database and the correct shell for you in every state. Use them instead of building a `docker exec` command by hand.

## What persists after cutover

The `cutover` command saves its result so that later deployments keep the migrated state. Check the output for each of the following:

* `Pinned ... in /secureone/s1.env` or `/secureone/s1.env already pins ...` for the MongoDB 8.0 connection settings (`DB`, and `REMEDIANT_DB` when the tool changed it).
* `Pinned ... in /secureone/s1.env so the old mongo stays stopped across deploys` for the zero-replica settings of the retained MongoDB 4.0 services (`DB_REPLICA_COUNT`, or `MONGO1_REPLICA_COUNT`, `MONGO2_REPLICA_COUNT`, and `MONGO3_REPLICA_COUNT`).
* A line that says the tool wrote `docker-stack.mongo-state.yml`, so the retained MongoDB 4.0 services stay stopped.

If the output reports `WARNING: could not pin ...`, the running application may use MongoDB 8.0, but the saved configuration is incomplete. Don't run `cutover` again, and don't deploy or upgrade. See [Resume, roll back, or recover a migration](./resume-roll-back-recover.md).

To review the saved settings, run the following command:

```bash
sudo grep -nE '^(DB|REMEDIANT_DB|DB_REPLICA_COUNT|MONGO[123]_REPLICA_COUNT)=' /secureone/s1.env
```

Each variable must appear once. Keep `/secureone/s1.env` after the migration, and don't add comments to it. Each MongoDB service runs one replica. Never set a `*_REPLICA_COUNT` value above `1` for an active service.

Don't set `MONGO_VERSION=8.0` in `/secureone/s1.env` before `retire`. Until `retire` runs, that variable changes the image of the retained MongoDB 4.0 service definitions, and it can start MongoDB 8.0 against the MongoDB 4.0 data path.

Until `retire` runs, the MongoDB 8.0 data is in Docker named volumes, not in `/secureone/data/db`. Backup procedures that read `/secureone/data/db` don't see the live database.

## Redeploy safely

Redeploy only with `s1 deploy` or `sudo -E bash secureone.sh deploy --version <version>`. Both read `/secureone/s1.env`, so they preserve the migrated state.

Never delete the stack. Don't run `docker stack rm`, and don't run `s1 undeploy`, on a migrated deployment. Removing the stack removes the `-8` services, and nothing recreates them. Don't run a plain `docker stack deploy` either, because it doesn't read `/secureone/s1.env` and returns every service to the MongoDB 4.0 host.

## Next steps

When the application has run on MongoDB 8.0 long enough for you to trust it, run [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md).
