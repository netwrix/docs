---
title: "Migrate a single-node deployment to MongoDB 8.0"
description: "Run the readiness check, copy data to MongoDB 8.0, validate the copy, and prepare for cutover on a single-node deployment."
sidebar_position: 40
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm whether `run` exits with a non-zero code when the validation summary reports failed checks, so that `status` reports FAILED. The page tells readers to check the summary line either way. Evidence: none (validation logic is in the mongo-migrate image, not s1.py).
:::

Use this procedure when `docker service ls | grep -i mongo` shows one service named `<stack>_db`. The procedure creates a MongoDB 8.0 service named `<stack>_db8`, copies the data from MongoDB 4.0, and validates the copy. The application keeps using MongoDB 4.0 until you run `cutover`.

## Before you begin

Complete [Plan the MongoDB migration](./plan.md) and [Prepare hosts for the MongoDB migration](./prepare-hosts.md).

The examples use the default stack name `s1`. If the deployment uses a different stack name, place the global option before `mongo-upgrade`:

```bash
s1 --stack <stack-name> mongo-upgrade <command>
```

Don't place `--stack` after `check`, `run`, `status`, or `cutover`.

## Run the readiness check

1. Run the check:

   ```bash
   s1 mongo-upgrade check
   ```

   The check is read-only and safe to repeat. It validates the running MongoDB version, the size of data and indexes, free space at `/secureone/data/db`, and access to the migration image.

   A successful check resembles the following output:

   ```text
   Logging this run to /secureone/logs/mongo-upgrade/check-<UTC-timestamp>.log
   Current mongo version: 4.0.x
   Current DB size: <bytes> bytes
   Free disk space at /secureone/data/db: <bytes> bytes
   OK: sufficient disk space for migration
   OK: <migration-image> is pullable
   check passed. Ready for migration.
   ```

2. Confirm that **Current mongo version** reports `4.0.x` and that the last line says `check passed. Ready for migration.`

A `FAIL` message identifies the failed condition, and the command exits without changing the deployment. See [Resume, roll back, or recover a migration](./resume-roll-back-recover.md) for common failures.

## Create the MongoDB 8.0 target and copy data

1. Run the copy:

   ```bash
   s1 mongo-upgrade run
   ```

   The command performs the following operations:

   1. Pulls the MongoDB 8.0 image.
   2. Creates `<stack>_db8` on the existing stack network with the network alias `db8`.
   3. Creates a separate named volume for the MongoDB 8.0 target.
   4. Waits for MongoDB 8.0 to respond.
   5. Pulls the migration image.
   6. Copies all user collections, documents, collection settings, and indexes from MongoDB 4.0 to MongoDB 8.0.
   7. Runs post-copy validation.
   8. Writes complete output to the migration log, and uses checkpoint data during the copy.

   The application keeps using `<stack>_db` on MongoDB 4.0 during this stage. It doesn't use `<stack>_db8` yet.

   Progress resembles the following output:

   ```text
   Logging this run to /secureone/logs/mongo-upgrade/run-<UTC-timestamp>.log
   Pulling <registry>/mongo:8.0
   Standing up <stack>_db8 on network <stack>_default
   Waiting for <stack>_db8 to come alive...
   <stack>_db8 is alive
   Running mongo-migrate: <source> -> <target>
   [1/5] Connecting to databases...
   [2/5] Analyzing source database...
   [3/5] Calculating migration scope...
   [4/5] Migrating data...
   [5/5] Verifying migration...
   ```

   Large collections report document counters during processing. A copy that takes hours doesn't indicate a problem. The initial `run` has no confirmation prompt.

2. To monitor a long copy without keeping a terminal open, you can start `run` with `nohup`, then monitor it with `status` and the log:

   ```bash
   nohup s1 mongo-upgrade run > /dev/null 2>&1 &
   ```

   Don't use this approach for `cutover`.

## Review the validation summary

The post-copy validation checks the following areas.

| Validation area | Method |
|-----------------|--------|
| Collection inventory | Confirms that all source collections exist in MongoDB 8.0, including empty collections. |
| Document counts | Compares exact document counts for every collection. |
| Indexes | Compares index definitions and supported index options. |
| Collection settings | Compares capped settings, validators, validation level, and validation action. |
| Document content | Deep-compares a sample of documents from each collection. It doesn't deep-compare every document. |
| Storage statistics | Compares logical data sizes and reports material differences. |

1. Find the final summary in the terminal output or the log, and confirm the following line:

   ```text
   Checks failed:          0
   ```

2. Review every warning. `VERIFICATION PASSED WITH WARNINGS` is acceptable only when **Checks failed** is zero. Storage-size differences can occur because MongoDB 4.0 and MongoDB 8.0 use different storage formats and compression.

3. Record the complete validation summary before `cutover`.

If **Checks failed** is greater than zero, or you can't explain a warning, don't continue. Save the log and contact Netwrix Support.

## Check copy progress

Run the following command from a second terminal while `run` is active, or after an interruption:

```bash
s1 mongo-upgrade status
```

The command reports one of the following states.

| Output | Meaning |
|--------|---------|
| `Not started: <stack>_db8 does not exist yet.` | `run` hasn't created the target. |
| `Migration to <stack>_db8 completed successfully` | The last `run` finished. `cutover` is the next step. |
| `Migration to <stack>_db8 FAILED` | The last `run` failed. Run it again. |
| `No checkpoint or outcome marker found` | `run` hasn't run with these endpoints, or it is in its first moments. |
| `Migration started` with a list of collections | `run` is in progress or was interrupted. Each collection shows `complete` or `in progress` with a document count. |

Use the recorded validation summary, not `status` alone, as the decision point for `cutover`.

## Resume an interrupted copy

Repeating `run` before cutover is safe, because the copy uses idempotent upserts keyed by document ID. To resume from a saved checkpoint, run the following command:

```bash
s1 mongo-upgrade run --resume
```

The `--resume` option skips collections already marked complete and resumes partial collections from the recorded checkpoint. A regular `run` starts the copy from the beginning, which is also safe but can be much slower.

After an interruption, use `--resume` and confirm a new validation summary with **Checks failed: 0**. Don't rely on the previous command's final line or exit status.

If an existing MongoDB 8.0 target service uses a different image than the requested target, the tool refuses to reuse it. Don't delete that service or its volume without confirming the correct recovery action with Netwrix Support.

## Follow the logs

Every `mongo-upgrade` command writes its output to the following path. The first output line shows the exact file.

```text
/secureone/logs/mongo-upgrade/<command>-<UTC-timestamp>.log
```

Large collections can take a long time without a new high-level message. To follow progress, run the following command, and look for advancing document counters:

```bash
tail -f /secureone/logs/mongo-upgrade/<log-file>
```

Don't assume a quiet terminal is a stopped process. If counters don't advance for an extended period, collect the log and contact Netwrix Support before you stop the process. If the tool can't create the log directory, it continues without a persistent log, so preserve the terminal output manually.

## Prepare for cutover

Immediately before `cutover`, confirm each item:

1. The independent backup is complete and restorable.
2. The initial copy ended with **Checks failed: 0**.
3. No directory synchronization, bulk scan, or other long-running job is active.
4. The maintenance window is open and stakeholders expect downtime.
5. Registry access is still available.
6. The operator can stay connected and monitor the command and log.
7. You recorded `s1 status` and `s1 database-status` again.

Continue with [Cut over to MongoDB 8.0](./cut-over.md).
