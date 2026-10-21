---
title: "Resume, roll back, or recover a migration"
description: "Find the right recovery action for each migration stage, from an interrupted copy to a failed cutover, and use finish-cutover to complete a switch."
sidebar_position: 90
---

:::warning[Needs dev input: remove before publishing]
TODO: Netwrix Support to confirm that customers may run the abandoned-target removal commands before this section is published.
:::

The correct recovery action depends on the stage at which the migration stopped. Find your stage in the following sections. If you can't determine the stage, preserve the logs and contact Netwrix Support.

## Stop conditions

Don't continue to the next step when any of the following applies:

* A readiness check fails.
* An independent backup isn't available and verified.
* Required storage capacity isn't available.
* MongoDB 8.0 replica-set health is incomplete.
* **Checks failed** is greater than zero, or you can't explain a validation warning.
* A long-running job is still active before `cutover`.
* `cutover` reports a partial switch, a stale MongoDB 4.0 reference, or a setting it couldn't save.
* `status` reports `FAILED`, or no successful validation summary exists for the initial copy.

When any condition applies, preserve the logs and contact Netwrix Support. The [Migration checklist](./checklist.md) repeats these conditions as a go or no-go gate before cutover.

## Resume an interrupted copy

Before cutover, the application still uses MongoDB 4.0, so an interrupted or failed `run` has no effect on users.

1. Run `s1 mongo-upgrade status` to see the state. See [Migrate a single-node deployment](./single-node.md#check-copy-progress).
2. Resume the copy:

   ```bash
   s1 mongo-upgrade run --resume
   ```

   For a cluster, use `s1 --multi-node mongo-upgrade run --resume` from the same database-manager node.

3. Confirm a new validation summary with **Checks failed: 0**.

If you can't complete `run`, leave the MongoDB 8.0 target in place for troubleshooting, and the application continues on MongoDB 4.0. To remove the target, see [Remove an abandoned MongoDB 8.0 target](#remove-an-abandoned-mongodb-80-target).

## Remove an abandoned MongoDB 8.0 target

Use these steps only before cutover, when you decide not to continue the migration. The application still uses MongoDB 4.0, and these steps don't touch it. Don't run them after `cutover`.

For a single-node deployment, remove the target service, and then its volumes:

```bash
sudo docker service rm s1_db8
sudo docker volume rm s1_db8_data s1_db8_checkpoints
```

For a three-node cluster, remove the three target services from a manager node:

```bash
sudo docker service rm s1_mongo1-8 s1_mongo2-8 s1_mongo3-8
```

Then remove the data volume on each node that hosted a member, where `N` is the member number on that node:

```bash
sudo docker volume rm s1_mongoN-8_data
```

On the node where you ran `run`, also remove the checkpoint volume:

```bash
sudo docker volume rm s1_mongo8_checkpoints
```

Wait until the services are gone before you remove the volumes. Confirm with `sudo docker service ls | grep -i mongo`. A custom stack name replaces `s1` in each name.

Remove the checkpoint volume too. A stale checkpoint can make a later `run --resume` skip collections.

## Recover from a failed cutover

### Failure before the switch

If write-path services don't stop, the source keeps receiving writes, the final reconciliation fails, or validation fails before the switch, the tool restores the original replica counts against MongoDB 4.0. The output includes the following text:

```text
Restoring write-path services against the OLD db (no cutover happened)
```

1. Review the log and correct the cause.
2. Confirm that the application is using MongoDB 4.0 again.
3. Run `cutover` again, or contact Netwrix Support when the cause isn't clear.

If a write-path service didn't stop within five minutes, let the long-running job finish or stop it safely, confirm the service has zero running tasks with `sudo docker service ps <service> --filter desired-state=running`, and retry.

### Partial application-service switch

If some services switched to MongoDB 8.0 and others didn't, the tool leaves both databases available and prints service-specific remediation commands.

:::warning
Don't run `cutover` again. A repeated reconciliation against a partially switched environment can overwrite or remove data written after the partial switch.
:::

Run only the printed remediation commands for the affected services, confirm the database connection that every write-path service uses, and contact Netwrix Support.

### Cutover reports that it is already switched

The tool refuses to run when every write-path service already uses MongoDB 8.0. Don't try to bypass this protection. Validate the active database and continue with [Verify and maintain the deployment after cutover](./after-cutover.md).

## Finish a cutover that left MongoDB 4.0 running

After the write path switches, `cutover` scans every service in the stack for a connection that still points to MongoDB 4.0. If the scan finds a reference, or the scan itself fails, the tool leaves MongoDB 4.0 running. The application may already be using MongoDB 8.0.

For a found reference, the output names the affected services and provides remediation commands when the tool can safely rewrite the value. Values that aren't a plain MongoDB connection string need a manual edit.

If the scan couldn't complete, the output includes the following warning:

```text
WARNING: could not complete the stale-reference sweep (...)
```

The result is unknown, not confirmed clean. Check each service manually with `sudo docker service inspect <service>`.

After you correct the references, run `finish-cutover`. The command repeats only the stale-reference scan and, when the scan is clean, stops MongoDB 4.0. It doesn't repeat the freeze, copy, or switch.

For a single-node deployment:

```bash
s1 mongo-upgrade finish-cutover
```

For a three-node cluster:

```bash
s1 --multi-node mongo-upgrade finish-cutover
```

The command asks for confirmation. To skip the prompt in automation, add `--yes` or `--non-interactive`.

The command exits with `1` and changes nothing when the write path isn't fully switched to MongoDB 8.0. In that case, see [Cut over to MongoDB 8.0](./cut-over.md). It exits with `2` only when it can't pin a setting in `/secureone/s1.env`, or when the stopped state isn't durable.

A failed stale-reference scan or a remaining reference doesn't change the exit code. The command exits with `0` and prints `Cutover complete` followed by a message that the old database was deliberately not stopped. Don't rely on the exit code. Confirm that the output includes `Stopping old db...` and the sweep result described in [Cut over to MongoDB 8.0](./cut-over.md).

## Recover from a setting that couldn't be saved

If `cutover` prints the following warning, the application may run on MongoDB 8.0 but the saved configuration is incomplete:

```text
WARNING: could not pin ... in /secureone/s1.env
```

1. Don't run `cutover` again, and don't run `s1 deploy`, `secureone.sh deploy`, or `secureone.sh upgrade`.
2. Run `sudoedit /secureone/s1.env`, remove any older assignment for the named variable, and add the exact line that `cutover` printed. Keep the quoting. Connection strings can contain shell metacharacters. Don't add comments to the file.
3. Confirm that each required variable appears once:

   ```bash
   sudo grep -nE '^(DB|REMEDIANT_DB)=' /secureone/s1.env
   ```

4. Run `s1 mongo-upgrade finish-cutover` to stop MongoDB 4.0 when the scan is clean.

If the output also reports that the stopped state isn't durable, fix the setting that the warning names, and then run `s1 deploy`. The deployment repairs this state.

## Recover from a failed retire

See [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md#recover-from-a-failed-retire).

## Roll back

* **Before cutover.** The application still uses MongoDB 4.0. Leave the migration unfinished, or remove the target. See [Remove an abandoned MongoDB 8.0 target](#remove-an-abandoned-mongodb-80-target).
* **After cutover.** No command and no supported procedure rolls back to MongoDB 4.0 after the application accepted writes on MongoDB 8.0. Contact Netwrix Support. Don't change replica counts, connection strings, or replica-set configuration yourself.
* **After retire.** No command and no supported procedure exists. Contact Netwrix Support. On a three-node cluster, no rollback procedure exists at all.

:::warning
A rollback after cutover can lose data. Before `retire`, the MongoDB 4.0 data stays as it was at the moment of cutover, so anything written on MongoDB 8.0 exists only on MongoDB 8.0. After `retire`, the archive is a snapshot from before cutover, so a rollback loses every write since cutover.
:::

## Collect information for Netwrix Support

Record the following before the migration, and include the relevant items in a support request:

* Product and `s1` versions.
* Deployment topology and stack name.
* Database node names and Docker Swarm manager nodes.
* Complete output from `check` on every database node.
* Reported database size and available storage on both relevant filesystems.
* Output from `s1 status`, `s1 database-status`, and `sudo docker service ls | grep -i mongo`.
* The exact command and stage that failed.
* The final validation summary, including **Checks failed** and **Warnings**.
* The logs in `/secureone/logs/mongo-upgrade/`.
* Any remediation command that `cutover` printed.

Don't include passwords, access tokens, registry credentials, or database connection secrets in a support request.

## Troubleshooting reference

| Message or condition | Meaning | Action |
|----------------------|---------|--------|
| `FAIL: could not determine current mongo version` | The local MongoDB source isn't reachable or the container isn't running. | Restore the source service to a healthy state, then repeat `check`. |
| `FAIL: could not determine current DB size` | The tool couldn't read database statistics. | Confirm MongoDB health. Don't estimate around the failed check. |
| `FAIL: need ... free (2x current DB size)` | The source-data filesystem has less than the required free space. | Add capacity, and validate the Docker named-volume filesystem too. |
| The migration image isn't pullable | Registry access, DNS, firewall, or authentication failed. | Restore registry access on the affected node before `run` or `cutover`. |
| `no mongo replica found running on this node` | A cluster `check` can't find the local MongoDB 4.0 member. | Verify Swarm placement, and run `check` on the correct database node. |
| An existing target uses a different image | A previous or mismatched target service exists. | Stop. Don't reuse or delete it until Support confirms the action. |
| `secureone8` doesn't become fully healthy | A MongoDB 8.0 member didn't reach primary or secondary state. | Check service placement, registry pulls, container logs, and network connectivity. Don't copy data yet. |
| `Migration to ... FAILED` from `status` | The last `run` failed. | Review the log and run `s1 mongo-upgrade run` again. |
| **Checks failed** is greater than zero | A validation area failed. | Don't cut over. Save the log and contact Support. |
| Validation passed with warnings | No hard check failed, but a difference needs review. | Confirm **Checks failed: 0**, review each warning, and escalate unexplained ones. |
| `FAIL: no run-outcome marker found` | `cutover` found no record of a completed `run`. | Run `run` again, and confirm `status` reports success. |
| A write-path service doesn't stop within five minutes | A long-running process is active, or Swarm can't stop the task. | Let the job finish or stop it safely, confirm zero running tasks, and retry. |
| The source still receives writes after services stop | A late or external write reaches MongoDB 4.0. | Identify the writer. Don't bypass the quiet-source check. |
| Reconciliation or validation fails before the switch | The tool couldn't make the frozen source and target consistent. | Confirm the services restarted, inspect the log, and resolve the cause before retrying. |
| Only some services switch | The environment is partially cut over. | Don't run `cutover` again. Use the printed remediation and contact Support. |
| `WARNING: could not complete the stale-reference sweep` | The scan failed and gave no reliable result. | Preserve both data sets and the log. Check each service, then run `finish-cutover`. |
| `WARNING: could not pin ... in /secureone/s1.env` | The settings aren't durable. | See [Recover from a setting that couldn't be saved](#recover-from-a-setting-that-couldnt-be-saved). |
| `/secureone/s1.env already pins ...` | The saved value already matches. | Treat it as success for that setting. |
| A long period with no output | A large collection may still be processing. | Follow the log and check for advancing counters. |
| The old MongoDB service shows as stopped | A clean cutover scales the old database to zero but keeps it. | Expected. Don't delete its data. |
