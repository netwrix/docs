---
title: "Retire MongoDB 4.0 after cutover"
description: "Use s1 mongo-upgrade retire to give the canonical MongoDB service names back to the MongoDB 8.0 data, and archive the MongoDB 4.0 data."
sidebar_position: 80
---

:::warning[Needs dev input: remove before publishing]
TODO: Dev confirmed that after a multi-node `retire`, `get_db_info` (s1.py:6729) finds no `mongoN-8` service and falls back to `MONGO_UPGRADE_MULTI_NODE_SOURCE_URI`, which hardcodes `replicaSet=secureone` (s1.py:1164). Remove the known-issue note when a release fixes it. Evidence: dev answer; the runbook claims the commands work only through the coexistence window.

TODO: Confirm the downtime a customer should expect from `retire`. The prompt text says the app stops "for a few minutes" for a rename. Evidence: s1.py retire confirmation prompts.

TODO: Confirm the location of the MongoDB 8.0 data on cluster nodes before `retire`, and the exact reclaim commands for a cluster. The tool prints them at the end. Evidence: s1.py _retire_multi_node.
:::

After `cutover`, the application runs on MongoDB 8.0 under the temporary names `<stack>_db8` or `<stack>_mongoN-8`. The `retire` command gives the canonical names back to the MongoDB 8.0 data, so the deployment matches a new MongoDB 8.0 installation. Run it after the application has run on MongoDB 8.0 long enough for you to trust it.

:::warning
Known issue: on a three-node cluster after `retire`, the `s1 db`, `s1 set-password`, and `s1 database-status` commands can't reach the replica set. They look for the replica set `secureone`, but the replica set's name is `secureone8`. The application still works. Until a fix ships, open a shell with the manual method in [Open a shell manually](../../admin/maintenance/open-the-mongodb-shell.md#open-a-shell-manually), and use the third connection string.
:::

The `retire` command never deletes the MongoDB 4.0 data. It renames that data aside, so a rollback remains possible until you remove the archive.

## What retire changes

| Item | Single node | Three-node cluster |
|------|-------------|--------------------|
| Services | `<stack>_db` runs MongoDB 8.0 on the canonical data path. The command removes `<stack>_db8`. | `<stack>_mongo1`, `<stack>_mongo2`, and `<stack>_mongo3` run MongoDB 8.0. The command removes the `-8` services. |
| Data path | MongoDB 8.0 data moves to `/secureone/data/db`. | The same, on each node, one member at a time. |
| MongoDB 4.0 data | Renamed to `/secureone/data/db.mongo4.<timestamp>`. | Renamed beside the canonical path on each node. |
| Replica set | Not applicable. | Stays `secureone8`. The tool renames hosts, not the replica set. |
| `/secureone/s1.env` | Pins `MONGO_VERSION`. Removes the `DB`, `REMEDIANT_DB`, and `DB_REPLICA_COUNT` settings that `cutover` added, so the stack defaults apply. | Pins `MONGO_VERSION`, `MONGO_REPLICA_SET`, and `DB` (to the canonical connection string). Removes the `MONGO1_REPLICA_COUNT`, `MONGO2_REPLICA_COUNT`, and `MONGO3_REPLICA_COUNT` settings. |
| `docker-stack.mongo-state.yml` | Removed. | Removed. |

For a cluster, the tool processes secondary members first and the primary last, so the replica set keeps a majority throughout.

## Before you begin

* Complete [Cut over to MongoDB 8.0](./cut-over.md), and verify the result. See [Verify and maintain the deployment after cutover](./after-cutover.md).
* Confirm that an independent backup exists.
* Schedule a short maintenance window. The command stops the application while it moves the data.
* Confirm that the MongoDB 8.0 data and `/secureone/data` are on the same filesystem. On the same filesystem, the move is a rename. On different filesystems, the move becomes a full copy, the downtime grows with the size of the data, and `retire` refuses to run unless you add `--allow-copy`. The copy also needs free space equal to the data size.

The command refuses to run, and changes nothing, in the following cases:

* The write-path services aren't all on MongoDB 8.0, or the stale-reference scan finds a reference to MongoDB 4.0. Finish the cutover first.
* `/secureone/s1.env` isn't writable.
* `<stack>_db8` isn't running.
* The stack file pins the MongoDB image to a fixed tag, or the redeployed image isn't available on the host.

## Preview the changes

Run the command with `--dry-run` to report every check and every action without changing anything.

For a single-node deployment:

```bash
s1 mongo-upgrade retire --dry-run
```

For a three-node cluster:

```bash
s1 --multi-node mongo-upgrade retire --dry-run
```

The output lists a `retire plan`. Review it, and resolve every `FAIL` message before you continue.

## Run retire

1. Run the command from the node you used for the migration.

   For a single-node deployment:

   ```bash
   s1 mongo-upgrade retire
   ```

   For a three-node cluster:

   ```bash
   s1 --multi-node mongo-upgrade retire
   ```

2. Review the plan, and answer the confirmation prompt. The prompt warns that the application stops for a few minutes and that after this step you can't return to the previous service naming.

For a custom stack name, place `--stack <stack-name>` before `mongo-upgrade`.

The command accepts the following options:

| Option | Effect |
|--------|--------|
| `--dry-run` | Reports every check and action, and changes nothing. |
| `--yes`, `--non-interactive` | Skips the confirmation prompt. All checks still run. |
| `--allow-copy` | Proceeds when the data and `/secureone/data` are on different filesystems, which turns the move into a full copy. |

On a single node, the command performs the following actions:

1. Pins `MONGO_VERSION` in `/secureone/s1.env`.
2. Removes the settings that `cutover` added, so the stack defaults apply again.
3. Stops the write-path services, then stops `<stack>_db` and `<stack>_db8`.
4. Renames `/secureone/data/db` to the `.mongo4.<timestamp>` archive.
5. Renames the MongoDB 8.0 data to `/secureone/data/db`, or copies it with `--allow-copy`.
6. Redeploys the stack, with `<stack>_db` running MongoDB 8.0 on the canonical path.
7. Compares collection counts before and after the move, removes `<stack>_db8`, and restores the write-path services.

The write path stays stopped through the redeployment, so nothing writes to the database before the comparison passes.

### Exit codes

| Exit code | Meaning |
|-----------|---------|
| `0` | Retire completed. |
| `1` | The command refused to run and changed nothing, or it failed early enough to roll back automatically. The command restores the write path against the previous services. |
| `3` | The command failed after the redeployment, and the tool can't undo that automatically. The report names the exact recovery commands. |

## Recover from a failed retire

1. Read the report. When the exit code is `3`, run only the recovery commands that the report names.
2. Don't scale services back up or remove services manually unless the report tells you to.
3. After you fix the cause, run `retire` again. The command picks up an interrupted run where it stopped, when it finds the archived MongoDB 4.0 data and a database service that serves the moved data.

If you can't resolve the failure, preserve the log and contact Netwrix Support. The log is in `/secureone/logs/mongo-upgrade/`.

## Reclaim the disk space

The tool keeps the MongoDB 4.0 data in the archive. Until you remove it, the archive is the only thing that keeps a rollback possible, and it uses disk space. When you're satisfied with the retired deployment, for example after a full backup cycle and a business day of normal use, remove the archive.

At the end of a successful run, `retire` prints the exact commands for each node: a `sudo rm -rf <archive-path>` command, `docker volume rm <volume>` commands, and a command for the checkpoint volume on the node where you ran `run`. The tool never runs these commands for you.

:::warning
These commands are irreversible. After you run them, you can't roll back to MongoDB 4.0. Confirm that you have a verified, independent backup first.
:::

## Next steps

See [Verify and maintain the deployment after cutover](./after-cutover.md) for the checks to run after `retire`.
