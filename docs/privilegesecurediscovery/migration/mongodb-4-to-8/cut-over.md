---
title: "Cut over to MongoDB 8.0"
description: "Run cutover during the maintenance window to switch Privilege Secure for Discovery to MongoDB 8.0, and understand its stages, exit codes, and failures."
sidebar_position: 60
---

The `cutover` command is the only migration step that causes downtime. It stops the services that write to the database, copies the final changes, validates the result, switches the application to MongoDB 8.0, and stops MongoDB 4.0 when that is safe. The command never deletes MongoDB 4.0.

## Before you begin

* Complete the initial copy with **Checks failed: 0**. See [Migrate a single-node deployment](./single-node.md) or [Migrate a three-node cluster](./three-node-cluster.md).
* Confirm that `s1 mongo-upgrade status` reports that the last `run` completed. The `cutover` command refuses to start without a completed `run`.
* Confirm that an independent backup exists and is restorable.
* Confirm that the maintenance window is open and that no long-running job is active.
* For a cluster, run the command from the same database-manager node that ran `run`.

## Run cutover

Run the command during the approved maintenance window.

For a single-node deployment:

```bash
s1 mongo-upgrade cutover
```

For a three-node cluster:

```bash
s1 --multi-node mongo-upgrade cutover
```

For a custom stack name, place `--stack <stack-name>` before `mongo-upgrade`, as in `s1 --stack <stack-name> --multi-node mongo-upgrade cutover`.

The command shows the time of the initial copy and asks for confirmation:

```text
Will catch up on changes since <UTC-timestamp> and switch the app to <target>.
This stops the app briefly. Continue? [y/N]:
```

Nothing changes if you answer `N` or press Enter. The word `briefly` is part of the prompt and isn't a duration estimate. See [Plan the MongoDB migration](./plan.md) for what determines the length of the downtime.

Run the command inside `tmux` or `screen`, so that a dropped SSH session doesn't interrupt the switch. Keep it in the foreground and watch the log until it finishes. The log path is the first line of output.

### Skip the confirmation prompt

The `--yes` option, also written `--non-interactive`, skips the confirmation prompt for detached or automated execution. All readiness and safety checks still run.

```bash
s1 mongo-upgrade cutover --yes
```

Use this option only when an operator can't answer the prompt, and monitor the log until the command finishes. Don't leave `cutover` unattended.

## Cutover stages

After you confirm, `cutover` performs the following stages.

1. Records the current replica counts and database connection settings for the write-path services.
2. Stops the services that write to MongoDB.
3. Waits up to five minutes for every write-path service to reach zero running tasks.
4. Pulls the migration image.
5. Watches MongoDB 4.0 for three consecutive quiet seconds, with a 30-second limit.
6. Runs a complete source-to-target reconciliation across all collections. The tool compares selected immutable data on an optimized path and compares other data in full.
7. Copies source-only or changed documents and removes target-only documents so the target matches the frozen source.
8. Repeats validation.
9. Switches the database connection settings to MongoDB 8.0 and restores each service to its previous replica count.
10. Saves the MongoDB 8.0 connection settings in `/secureone/s1.env`, so the switch survives the next deployment.
11. Scans every service in the stack for a remaining MongoDB 4.0 connection reference.
12. When the scan is clean, saves zero replicas for the MongoDB 4.0 services, writes the `docker-stack.mongo-state.yml` override file, and stops MongoDB 4.0.
13. Reports the application downtime.

The write-path freeze covers these services when present: `api`, `worker`, `worker-secondary`, `expire`, `scanner`, `ldapsync`, `analytics_engine`, and `internal_api`.

Progress resembles the following output:

```text
Stopping write-path services...
Confirming write-path services have fully stopped...
Confirming the source database has gone quiet...
Running catch-up copy for changes since <UTC-timestamp>...
Verifying...
Switching app to <target>...
Pinned DB=<connection-string> in /secureone/s1.env so the switch survives the next `s1 deploy`.
Scanning the stack for any remaining reference to the old db...
Sweep found no remaining references to the old db.
Stopping old db...
Cutover complete. App downtime: ~<seconds>s. The old db is stopped but not deleted.
```

The line `Running catch-up copy` describes the final reconciliation. It covers more than recently changed documents and can be the longest stage.

If validation fails after a reconciliation that corrected differences, the tool repeats reconciliation and validation up to two more times, for three attempts in total. If reconciliation reports no differences but validation still fails, the tool stops immediately and restores the write-path services against MongoDB 4.0. That result indicates a disagreement that needs investigation, not another retry.

## Exit codes

| Exit code | Meaning |
|-----------|---------|
| `0` | Cutover completed. MongoDB 4.0 is stopped, or the tool left it running for a reason that doesn't affect the saved settings. Read the final message. |
| `1` | Cutover failed. Either a precondition wasn't met before the switch, or one or more write-path services didn't move to MongoDB 8.0 during the switch. |
| `2` | The application switched and serves requests, but the switch isn't durable because the tool couldn't write a saved setting. The tool leaves MongoDB 4.0 running. |

An exit code of `0` doesn't replace reading the final message. If the message says the tool didn't stop MongoDB 4.0, follow the instruction in it, and see [Resume, roll back, or recover a migration](./resume-roll-back-recover.md).

## Failure behavior

The correct action depends on the stage at which `cutover` fails. The details are on [Resume, roll back, or recover a migration](./resume-roll-back-recover.md). In summary:

* **Failure before the switch.** The tool restores the write-path services against MongoDB 4.0 and prints `Restoring write-path services against the OLD db (no cutover happened)`. Correct the cause, confirm the application uses MongoDB 4.0, and run `cutover` again.
* **Partial switch.** Some services switched and others didn't. Don't run `cutover` again. Follow the printed remediation commands and contact Netwrix Support.
* **Stale reference found, or the scan couldn't complete.** The application may already run on MongoDB 8.0. The tool leaves MongoDB 4.0 running. Fix the reference, then run `s1 mongo-upgrade finish-cutover`.
* **Settings couldn't be saved (exit code `2`).** Don't run `cutover` again or deploy. Add the exact line the tool printed to `/secureone/s1.env`.
* **Already switched.** The tool refuses to run when every write-path service already uses MongoDB 8.0. This protects against a reverse reconciliation. Validate the active database and continue with [Verify and maintain the deployment after cutover](./after-cutover.md).

## Next steps

1. Verify the result. See [Verify and maintain the deployment after cutover](./after-cutover.md).
2. After a validation period, restore the canonical service names. See [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md).
