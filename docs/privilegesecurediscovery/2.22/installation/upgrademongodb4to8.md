---
title: "Upgrade MongoDB 4.0 to 8.0"
description: "Migrate an existing NPS-D 26.09.0 deployment from MongoDB 4.0 to MongoDB 8.0"
sidebar_position: 15
---

# Upgrade MongoDB 4.0 to 8.0

## Overview

Netwrix Privilege Secure for Discovery (NPS-D) 26.09.0 provides the supported path for moving an existing deployment from MongoDB 4.0 to MongoDB 8.0. The migration is available for:

* A single-node NPS-D deployment with one MongoDB service.
* A three-node NPS-D cluster with a three-member MongoDB replica set.

**Audience:** NPS-D administrators and Netwrix Support engineers who plan, perform, or assist with the database upgrade.

> **Important:** Complete this migration on NPS-D 26.09.0 before upgrading to the NPS-D release that updates the backend to Python 3.13 and supported library versions, or to any later release. As part of that platform update, MongoDB 8.0 will be required, and MongoDB 4.0 will no longer be supported.

This process is a side-by-side data migration, not an in-place MongoDB server upgrade. NPS-D creates a separate MongoDB 8.0 target and copies data at the application level. You don't need to perform sequential MongoDB server upgrades through versions 4.2, 4.4, 5.0, 6.0, and 7.0.

## Side-by-side migration architecture

MongoDB 4.0 and MongoDB 8.0 run at the same time during the migration. NPS-D continues to use MongoDB 4.0 while the initial copy is in progress.

```text
Before migration

NPS-D services  ───────────────>  MongoDB 4.0 source


During the initial copy

NPS-D services  ───────────────>  MongoDB 4.0 source
                                         │
                                         │ read and copy
                                         ▼
                                  MongoDB 8.0 target


During cutover

1. Stop services that write to MongoDB.
2. Confirm that MongoDB 4.0 is no longer receiving writes.
3. Reconcile and validate MongoDB 4.0 against MongoDB 8.0.
4. Switch NPS-D services to MongoDB 8.0.
5. Check the complete stack for references to MongoDB 4.0.
6. Stop MongoDB 4.0 when no remaining reference is found.


After a successful cutover

NPS-D services  ───────────────>  MongoDB 8.0 target

MongoDB 4.0 source: stopped and retained for the validation period
```

The MongoDB 8.0 target isn't an active-active database or an automatic failover database during the copy. Application writes continue on MongoDB 4.0 until cutover. The final reconciliation makes the MongoDB 8.0 target current before NPS-D starts using it.

> **Important: cutover retains MongoDB 4.0.** The `cutover` command never deletes the old database. After a clean switch and reference scan, it stops the MongoDB 4.0 service or replica set and retains its data. If any service still references MongoDB 4.0, the old database remains running until you correct that reference.

> **Important for later deployments:** A successful 26.09.0 `cutover` records the MongoDB 8.0 connection settings in `/secureone/s1.env`. Keep this file after migration. For container-based deployments, use the `secureone.sh` script that ships with NPS-D 26.09.0 or later for every subsequent `deploy` or `upgrade`; earlier versions of the script don't read the saved database selection. For an installation originally deployed with an earlier release, the newer script alone isn't sufficient: before another deployment operation, complete **Preserve the migrated state for later deploys and upgrades** in this guide.

> **Important: verify that the database selection is persistent.** Cutover attempts to save the MongoDB 8.0 connection settings in `/secureone/s1.env`. Confirm that the cutover output reports either `Pinned ... in /secureone/s1.env` or `/secureone/s1.env already pins ...` for every required setting. If it reports `WARNING: could not pin ... in /secureone/s1.env`, the running application may already be using MongoDB 8.0, but the saved configuration is incomplete. Don't rerun `cutover`, and don't run another `deploy` or `upgrade`. Add the exact line printed by cutover to `/secureone/s1.env`, verify that the setting occurs only once, and complete the persistence checks in this guide first.

### Single-node coexistence

With the default stack name `s1`, the following services coexist:

| Role | Service | Network alias | MongoDB version | Application use during `run` |
|------|---------|---------------|-----------------|----------------------------|
| Current source | `s1_db` | `db`          | 4\.0            | Active database            |
| Migration target | `s1_db8` | `db8`         | 8\.0            | Copy and validation target |

The migration tool creates `s1_db8` on the existing stack network and gives it a separate Docker named volume. It doesn't replace or modify the MongoDB 4.0 source storage.

### Three-node cluster coexistence

The existing cluster uses a replica set named `secureone`. The migration creates a second replica set named `secureone8`:

| Node placement | MongoDB 4.0 source | MongoDB 8.0 target |
|----------------|--------------------|--------------------|
| Replica placement 1 | `s1_mongo1`        | `s1_mongo1-8`      |
| Replica placement 2 | `s1_mongo2`        | `s1_mongo2-8`      |
| Replica placement 3 | `s1_mongo3`        | `s1_mongo3-8`      |

The migration places each MongoDB 8.0 member on the same Swarm node as its MongoDB 4.0 counterpart by using the existing Mongo replica node labels. During the coexistence period, expect six MongoDB services to run across the cluster.

Each MongoDB service has exactly one desired replica. A three-node database cluster means three separate services with one replica each; it doesn't mean three replicas of `mongo1`, `mongo2`, or `mongo3`. Don't set an individual `MONGO1_REPLICA_COUNT`, `MONGO2_REPLICA_COUNT`, or `MONGO3_REPLICA_COUNT` to `3`, `6`, or another value greater than `1`. Docker Swarm can place multiple tasks of the same service on one constrained database node, where they contend for the same bind-mounted data path.

MongoDB 4.0 and MongoDB 8.0 can't form one mixed-version replica set across this version gap. The migration therefore requires a separate `secureone8` replica set.

## Migration commands

Run the four commands in this order:

| Command | Purpose | NPS-D availability |
|---------|---------|--------------------|
| `check` | Reports the live source version and validates that it can read the logical database size, local free space, and migration image. | Available          |
| `run`   | Creates the MongoDB 8.0 target, copies data and indexes, and runs validation. | Available          |
| `status` | Reads checkpoint progress for an active or interrupted initial copy. | Available          |
| `cutover` | Stops database writes, then reconciles and validates the latest data, switches NPS-D, and stops MongoDB 4.0 when safe. | Maintenance window required |

### Command syntax

Use the following commands for a single-node deployment with the default stack name:

```text
s1 mongo-upgrade check
s1 mongo-upgrade run
s1 mongo-upgrade status
s1 mongo-upgrade cutover
```

Use the explicit `--multi-node` option for a three-node cluster:

```text
s1 --multi-node mongo-upgrade check
s1 --multi-node mongo-upgrade run
s1 --multi-node mongo-upgrade status
s1 --multi-node mongo-upgrade cutover
```

If the deployment uses a stack name other than `s1`, place the global options before `mongo-upgrade`:

```text
s1 --stack <stack-name> mongo-upgrade <command>
s1 --stack <stack-name> --multi-node mongo-upgrade <command>
```

Don't place `--stack` after `run`, `status`, or `cutover`.

For a cluster, run `check` separately on every database node. Select one database node that is also a Swarm manager, then run `run`, `status`, and `cutover` from that same node throughout the migration. These commands use a MongoDB container and checkpoint volume local to the invoking node. If no database node is a Swarm manager, stop the migration and contact Netwrix Support.

### NPS-D commands during coexistence

The standard `s1 db` and `s1 set-password` commands resolve the active database during the coexistence period. Before and during `run`, they use MongoDB 4.0. After a successful cutover, they use MongoDB 8.0.

For a three-node replica set, `s1 --multi-node database-status` provides useful replica-set status. For a single-node deployment, the current `s1 database-status` output doesn't by itself identify both the active service and its live MongoDB engine version. Don't rely on that command alone. Validate the cutover by combining its recorded output with `s1 status`, `docker service ls`, the saved database settings, and an application-level sign-in and workflow check.

## Plan storage capacity

The migration keeps the MongoDB 4.0 database in place and creates a complete MongoDB 8.0 copy. It isn't an in-place upgrade and it doesn't copy only the changed data.

The readiness check calculates the current logical database size as data plus indexes. It requires **free space of at least twice that reported size**.

| Size reported by `check` | Additional free space required | Recommended total storage budget |
|------------------------|--------------------------------|----------------------------------|
| 100 GB                 | At least 200 GB                | At least 300 GB, plus operational margin |

The total budget includes the existing MongoDB 4.0 data, the new MongoDB 8.0 copy, and migration headroom. Actual on-disk use can differ between MongoDB versions because storage formats and compression differ. Keep additional capacity for logs, temporary data, database growth, and normal host operations.

MongoDB 4.0 continues to use disk space throughout migration and the post-cutover validation period. Permanently removing its data later makes that disk space available for reuse. Don't subtract this future reclaimed space from the migration capacity requirement.

For a single-node deployment, confirm capacity on the database host. For a three-node cluster, apply the requirement independently to every database node because each replica-set member stores a complete copy.

The current readiness check measures free space at `/secureone/data/db`. The MongoDB 8.0 target uses Docker named volumes. If the Docker data root is on a different filesystem, validate that filesystem separately. Use the lower available capacity when deciding whether the host is ready.

Use these read-only commands to identify the relevant filesystems:

```text
df -h /secureone/data/db
docker info --format '{{.DockerRootDir}}'
```

Run `df -h <docker-root-directory>` against the directory that Docker returns. Don't continue unless both the manual capacity review and `s1 mongo-upgrade check` pass.

## Plan the maintenance window

The initial `run` stage can take a long time on a large database, but it doesn't intentionally stop NPS-D services. The final `cutover` stage requires downtime because NPS-D services that write to the database remain stopped while the tool reconciles, validates, and switches the source.

Cutover duration depends on:

* Logical database size and total document count.
* The number and distribution of documents across collections.
* How much data changes between the initial copy and cutover.
* Collections that continue to change while the initial copy is running.
* Host CPU and memory.
* Storage throughput and latency.
* Docker volume placement.
* Network throughput and latency between cluster nodes.

Don't estimate one environment by applying a simple GB-per-hour or documents-per-hour formula to another.

### Laboratory planning reference

The following result is a planning reference, not a service-level commitment:

| Tested environment | Dataset | Measured final cutover |
|--------------------|---------|------------------------|
| Three-node lab cluster | Approximately 121 GB and 149 million documents | Approximately 5 hours 26 minutes |

In this measured run, the source quiescence check took only a few seconds. Final reconciliation, approximately 4 hours 31 minutes, and final validation, approximately 52 minutes, accounted for most of the downtime. One large collection that continued to change during the initial copy accounted for most of the reconciliation time. This is why total database size alone isn't a reliable predictor.

The same lab baseline before the current comparison optimizations was approximately 6 hours 42 minutes. The optimized result represents an improvement of approximately 19 percent in that environment, not a guaranteed reduction for other deployments.

For a large, active deployment at a similar or greater scale, use **6 to 10 hours as a conservative initial maintenance-window range** until an environment-specific assessment supports a shorter window. Smaller or less active deployments may finish sooner. Slower storage, greater activity, or a different data distribution may take longer.

Schedule `run` to finish as close as practical to the approved cutover window. A long delay allows more source activity to accumulate before final reconciliation. Ask Netwrix Support to review the plan for a large or business-critical deployment.

## Before you begin

### Container-based deployments: install the 26.09.0 `s1` CLI

> **Important:** `secureone.sh` upgrades the NPS-D application services, but it doesn't install or update the host `s1` CLI. The NPS-D 26.09.0 `s1tool` image provides the MongoDB migration commands. A container-based deployment can't start this migration until you install that version of `s1`.

For an existing container-based deployment, use this order:


1. Follow [Download and Deploy](https://docs.netwrix.com/docs/privilegesecurediscovery/2_22/installation/containerbaseddeployment/deploysecureone) to download the NPS-D 26.09.0 quickstart bundle, and use the `secureone.sh` file from that bundle. Don't use a copy of `secureone.sh` retained from an earlier release.
2. On the primary node, upgrade the NPS-D services:

   ```text
   sudo -E bash secureone.sh upgrade --version 26.09.0
   ```
3. Confirm that every database node has authenticated to the Netwrix container registry as described in [AWS Configuration](https://docs.netwrix.com/docs/privilegesecurediscovery/2_22/installation/containerbaseddeployment/awsconfiguration).
4. Install the 26.09.0 `s1` CLI on the single database host or, for a three-node cluster, repeat these commands on all three database nodes. The command uses the production Netwrix container registry that the AWS Configuration procedure specifies. The complete image reference is `176947481038.dkr.ecr.us-west-2.amazonaws.com/secureone-onprem/s1tool:26.09.0`.

   ```text
   NPSD_VERSION=26.09.0
   NPSD_REGISTRY=176947481038.dkr.ecr.us-west-2.amazonaws.com
   NPSD_REPOSITORY=secureone-onprem
   NPSD_S1TOOL_IMAGE="${NPSD_REGISTRY}/${NPSD_REPOSITORY}/s1tool:${NPSD_VERSION}"

   sudo mkdir -p /secureone
   sudo touch /secureone/s1.env
   sudo sed -i \
     -e '/^S1_VERSION=/d' \
     -e '/^S1_REPO_DOMAIN=/d' \
     -e '/^S1_REPO_PREFIX=/d' \
     -e '/^S1TOOL=/d' \
     /secureone/s1.env

   printf 'S1_VERSION=%s\nS1_REPO_DOMAIN=%s\nS1_REPO_PREFIX=%s\nS1TOOL=%s\n' \
     "$NPSD_VERSION" \
     "$NPSD_REGISTRY" \
     "$NPSD_REPOSITORY" \
     "$NPSD_S1TOOL_IMAGE" \
     | sudo tee -a /secureone/s1.env > /dev/null

   sudo docker pull "$NPSD_S1TOOL_IMAGE"
   NPSD_S1TOOL_CONTAINER="$(sudo docker create "$NPSD_S1TOOL_IMAGE")"
   sudo docker cp "${NPSD_S1TOOL_CONTAINER}:/app/s1-cli" /usr/local/bin/s1
   sudo docker rm "$NPSD_S1TOOL_CONTAINER"
   sudo chmod 755 /usr/local/bin/s1
   ```

   This procedure preserves other existing settings in `/secureone/s1.env` and pins `s1` to the released 26.09.0 image. Don't use an unversioned `latest` image for the migration.
5. Verify the installed CLI on every database node:

   ```text
   s1 --version
   s1 mongo-upgrade --help
   s1 mongo-upgrade check --help
   s1 mongo-upgrade run --help
   s1 mongo-upgrade status --help
   s1 mongo-upgrade cutover --help
   ```

   Confirm that `s1 --version` reports 26.09.0 and that the `mongo-upgrade` help lists `check`, `run`, `status`, and `cutover`. Stop if the version or commands don't match.

Don't manually change `DB` or `REMEDIANT_DB` before cutover. The migration tool writes the MongoDB 8.0 connection settings only after the final reconciliation and switch.

Complete every item before starting the migration:


 1. Upgrade NPS-D to version 26.09.0.
 2. For a container-based deployment, complete the section **Container-based deployments: install the 26.09.0 s1 CLI** on every database node.
 3. Confirm that the installed `s1` CLI includes the current migration commands:

    ```text
    s1 --version
    s1 mongo-upgrade --help
    s1 mongo-upgrade run --help
    s1 mongo-upgrade cutover --help
    ```
 4. For a cluster, confirm the same NPS-D and `s1` version on all three database nodes.
 5. Confirm that the Docker Swarm and existing NPS-D services are healthy.
 6. Identify the deployment topology and stack name.
 7. Take and verify an independent backup of MongoDB 4.0 by using the customer's established backup and restore procedure or the procedure that Netwrix Support provides for the deployment.
 8. Confirm storage capacity on the source-data filesystem and the Docker named-volume filesystem.
 9. Confirm that every required node can reach and authenticate to the configured NPS-D container registry.
10. Schedule and communicate the cutover maintenance window.
11. Allow directory synchronizations, bulk scans, and other long-running jobs to finish before cutover.
12. Confirm that the operator has permission to manage Docker Swarm services on the manager node.
13. Record the pre-migration application and database status.

If a backup procedure isn't available or the restore path is unverified, stop the migration and contact Netwrix Support before cutover. The retained MongoDB 4.0 services aren't a substitute for an independent backup.

### Record the starting state

Run:

```text
s1 status
s1 database-status
docker service ls | grep -i mongo
```

For a cluster, use:

```text
s1 --multi-node status
s1 --multi-node database-status
docker node ls
docker service ls | grep -i mongo
```

Save the output with the migration records. Investigate unhealthy NPS-D or MongoDB services before proceeding.

## Migration image delivery

The migration logic runs in a companion container image that comes from the same configured registry as the other NPS-D service images. The migration image doesn't require a separate manual installation after you install the correct 26.09.0 `s1` CLI. Container-based deployments must complete the `s1` installation procedure first.

* `check` confirms that the migration image is available from the configured registry.
* `run` pulls MongoDB 8.0 and the migration image before copying data.
* `cutover` refreshes the migration image before final reconciliation.
* Cluster service creation forwards the current registry authentication to the Swarm nodes.

If `check` reports that the migration image isn't pullable, treat it as a registry connectivity or authentication issue. Validate DNS, firewall access, registry authentication, and Docker configuration before proceeding.

Don't override the target MongoDB version or migration-image version unless Netwrix Support explicitly directs you to do so.

## Identify the deployment topology

Run:

```text
docker service ls | grep -i mongo
```

Select the procedure based on the current MongoDB services:

* One service named `<stack>_db`: follow **Single-node procedure**.
* Three services named `<stack>_mongo1`, `<stack>_mongo2`, and `<stack>_mongo3`: follow **Three-node cluster procedure**.

If the result doesn't match either supported topology, stop the migration and contact Netwrix Support.

## Single-node procedure

### 1. Run the readiness check

Run:

```text
s1 mongo-upgrade check
```

For a custom stack:

```text
s1 --stack <stack-name> mongo-upgrade check
```

The check is read-only and safe to repeat. It reads or validates:

* The running MongoDB engine version.
* The logical size of data and indexes.
* Free space at `/secureone/data/db`.
* Access to the migration image in the configured registry.

A successful check resembles:

```text
Logging this run to /secureone/logs/mongo-upgrade/check-<UTC-timestamp>.log
Current mongo version: 4.0.x
Current DB size: <bytes>
Free disk space at /secureone/data/db: <bytes>
OK: sufficient disk space for migration
OK: <migration-image> is pullable
check passed. Ready for migration.
```

Confirm that **Current mongo version** reports `4.0.x`, then confirm that the final line says the check passed. The supported source for this procedure is MongoDB 4.0. A `FAIL` message identifies a failed condition and the command exits without modifying the deployment.

### 2. Create the MongoDB 8.0 target and copy data

Run:

```text
s1 mongo-upgrade run
```

For a custom stack:

```text
s1 --stack <stack-name> mongo-upgrade run
```

The command performs the following operations:


1. Pulls the configured MongoDB 8.0 image.
2. Creates `<stack>_db8` on the existing stack network with the network alias `db8`.
3. Creates a separate named volume for the MongoDB 8.0 target.
4. Waits for MongoDB 8.0 to respond.
5. Pulls the migration image.
6. Copies all user collections, documents, collection settings, and indexes from MongoDB 4.0 to MongoDB 8.0.
7. Runs post-copy validation.
8. Uses checkpoint data during the copy and writes complete command output to the migration log.

NPS-D continues to use `<stack>_db` on MongoDB 4.0 throughout this stage. The application doesn't use the new `<stack>_db8` service yet.

Expected progress resembles:

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

Large collections report document counters as the copy processes them. The copy can take hours without indicating a problem.

### 3. Review validation

The post-copy validation checks:

| Validation area | Method |
|-----------------|--------|
| Collection inventory | Confirms that all source collections exist in MongoDB 8.0, including empty collections. |
| Document counts | Compares exact document counts for every collection. |
| Indexes         | Compares index definitions and supported index options. |
| Collection settings | Compares capped settings, validators, validation level, and validation action. |
| Document content | Deep-compares a sample of documents from each collection. It doesn't deep-compare every document. |
| Storage statistics | Compares logical data sizes and reports material differences. |

Before continuing, find the final summary and confirm:

```text
Checks failed:          0
```

`VERIFICATION PASSED WITH WARNINGS` can be acceptable only when **Checks failed** is zero. Review every warning. Storage-size differences can occur because MongoDB 4.0 and MongoDB 8.0 use different storage formats and compression.

Don't treat any of the following as proof that the copy passed validation:

* A process exit code of zero.
* A `Migration Complete` message by itself.
* An absent checkpoint file.
* The existence of `<stack>_db8`.

Record the complete validation summary before cutover. If **Checks failed** is greater than zero or you can't explain a warning, don't continue. Save the log and contact Netwrix Support.

### 4. Resume or repeat an interrupted copy

The migration uses idempotent upserts keyed by document ID. Repeating `run` against the same target image is safe before cutover.

To resume from a saved checkpoint, run:

```text
s1 mongo-upgrade run --resume
```

For a custom stack:

```text
s1 --stack <stack-name> mongo-upgrade run --resume
```

`--resume` skips collections already marked complete and resumes partial collection work from the recorded checkpoint. A regular `run` starts the copy from the beginning. That approach is also safe but can be much slower.

After any interruption, use `--resume` and confirm a new validation summary with **Checks failed: 0**. Don't rely on the previous command's final line or exit status.

If an existing MongoDB 8.0 target service uses a different image than the requested target, the tool refuses to reuse it. Don't delete its service or volume without confirming the correct recovery action with Netwrix Support.

### 5. Check copy progress

Run from a second terminal while `run` is active, or after an interruption:

```text
s1 mongo-upgrade status
```

Example checkpoint output:

```text
Migration started: <UTC-timestamp>
Last updated: <UTC-timestamp>
  <collection-name>: complete (<count> docs migrated so far)
  <collection-name>: in progress (<count> docs migrated so far)
```

After a successful copy and validation, the migration removes its active checkpoint. `No checkpoint file found` can therefore mean either:

* The copy completed successfully and validation passed.
* The migration created no checkpoint for the current source and target.

An absent checkpoint doesn't prove success. Use the recorded validation summary as the decision point. If no successful summary exists, run `run` again before cutover.

### 6. Prepare for cutover

Immediately before cutover:


1. Confirm the independent backup is complete and restorable.
2. Confirm the initial copy ended with **Checks failed: 0**.
3. Confirm no directory synchronization, bulk scan, or other long-running job is active.
4. Confirm the maintenance window is open and stakeholders expect NPS-D downtime.
5. Confirm registry access is still available.
6. Confirm the operator can remain connected and monitor the command and log.
7. Record `s1 status` and `s1 database-status` again.

### 7. Perform cutover

Run this command interactively during the approved maintenance window:

```text
s1 mongo-upgrade cutover
```

For a custom stack:

```text
s1 --stack <stack-name> mongo-upgrade cutover
```

The command displays the source-copy timestamp and asks for confirmation:

```text
Will catch up on changes since <UTC-timestamp> and switch the app to <stack>_db8.
This stops the app briefly. Continue? [y/N]:
```

Nothing changes if the operator answers `N` or presses Enter.

The word `briefly` is part of the command's confirmation prompt. It isn't a duration estimate. Use the maintenance-window guidance in this document.

After confirmation, cutover performs these stages:


 1. Records the current replica counts and database connection settings for write-path services.
 2. Stops NPS-D services that write to MongoDB.
 3. Waits up to five minutes for every write-path service to reach zero running tasks.
 4. Watches the MongoDB 4.0 source for three consecutive quiet seconds, with a 30-second limit.
 5. Runs a complete source-to-target reconciliation across all collections. Selected immutable data uses an optimized comparison path; the tool compares other data in full.
 6. Copies source-only or changed documents and removes target-only documents so the target matches the frozen source.
 7. Repeats validation.
 8. Switches NPS-D database connection settings to MongoDB 8.0 and restores each service to its previous replica count.
 9. Updates supported legacy database references where they still point to MongoDB 4.0.
10. Scans every service in the stack for any remaining MongoDB 4.0 connection reference.
11. Stops `<stack>_db` only when the stack scan is clean.
12. Reports total application downtime.

The write-path freeze covers these stack services when present: `api`, `worker`, `worker-secondary`, `expire`, `scanner`, `ldapsync`, `analytics_engine`, and `internal_api`. The tool records each service's current replica count, scales it to zero, and restores that count after it switches the database connection or if a pre-switch failure occurs.

If validation fails after a reconciliation that corrected differences, the tool can repeat reconciliation and validation up to two additional times, for no more than three attempts in total. If reconciliation reports no differences but validation still fails, the tool stops immediately and restores the write-path services against MongoDB 4.0. That result indicates a disagreement that requires investigation, not another automatic retry.

Expected progress resembles:

```text
Stopping write-path services...
Confirming write-path services have fully stopped...
Confirming the source database has gone quiet...
Running catch-up copy for changes since <UTC-timestamp>...
Verifying...
Switching app to <stack>_db8...
Scanning the stack for any remaining reference to the old db...
Sweep found no remaining references to the old db.
Stopping old db...
Cutover complete. App downtime: ~<seconds>s. The old db is stopped but not deleted.
```

The line `Running catch-up copy` describes the final reconciliation. It covers more than recently changed documents and can be the longest cutover stage.

Keep the command in the foreground and watch the log until it finishes. Don't detach `cutover`, pipe automatic confirmation into it, or leave it unattended.

### 8. Validate the single-node deployment

After successful cutover, run:

```text
s1 database-status
s1 status
docker service ls | grep -i mongo
```

Confirm all of the following:

* The cutover output, saved settings, running services, and application checks consistently show MongoDB 8.0 as the active database. Don't use `s1 database-status` alone as proof on a single-node deployment.
* `<stack>_db8` has one running replica.
* After a clean stale-reference sweep, `<stack>_db` has zero running replicas. If the cutover deliberately retained it because a reference still needs correction, keep it running until you resolve that reference.
* NPS-D loads and administrators can sign in.
* Core workflows used in the environment complete normally.
* The cutover output reports no stale MongoDB 4.0 reference.
* For each required setting, the cutover output reports either `Pinned ... in /secureone/s1.env` or `/secureone/s1.env already pins ...`.
* No write-path service remains stopped or uses MongoDB 4.0.

Retain the command outputs and logs with the change record.

## Three-node cluster procedure

### 1. Confirm cluster placement and command location

The following concepts are independent:

* The Docker Swarm manager that can create and update services.
* The node label that places Mongo replica 1, 2, or 3.
* The current MongoDB replica-set primary, which can change through election.

Select one node that is both a Swarm manager and a database host. Run `run`, `status`, and `cutover` from that same node. The commands need local access to one MongoDB member, and `status` and `cutover` use the checkpoint volume created on the node that ran `run`.

The MongoDB driver discovers the current source and target primaries through their replica-set connection strings. The selected command node doesn't have to host the current replica-set primary, and you don't have to select a primary manually.

### 2. Run the readiness check on every database node

Run separately on all three database nodes:

```text
s1 --multi-node mongo-upgrade check
```

For a custom stack:

```text
s1 --stack <stack-name> --multi-node mongo-upgrade check
```

Each invocation checks the MongoDB member and free space local to that node. Passing on one node doesn't establish readiness on the other two.

Output can include informational messages such as:

```text
<stack>_mongo1 service is not running on this node
```

Each node hosts only one local MongoDB member, so messages about the other members not running locally aren't failures. The command must still end with:

```text
check passed. Ready for migration.
```

The command may print a generic hint without `--multi-node`. Continue using the explicit `--multi-node` option in every cluster command.

Confirm that every node reports MongoDB `4.0.x` before continuing.

### 3. Create the MongoDB 8.0 replica set and copy data

Run once from the selected database-manager node:

```text
s1 --multi-node mongo-upgrade run
```

For a custom stack:

```text
s1 --stack <stack-name> --multi-node mongo-upgrade run
```

The command performs these operations:


 1. Pulls the MongoDB 8.0 image.
 2. Creates `<stack>_mongo1-8`, `<stack>_mongo2-8`, and `<stack>_mongo3-8`.
 3. Places each new member on the node assigned to the corresponding MongoDB replica label.
 4. Waits for the local new MongoDB member to respond.
 5. Initializes the new replica set as `secureone8`.
 6. Waits until all three members report as `PRIMARY` or `SECONDARY`.
 7. Pulls the migration image.
 8. Connects to the `secureone` source replica set and the `secureone8` target replica set.
 9. Copies collections, documents, settings, and indexes.
10. Runs post-copy validation.

Expected infrastructure progress resembles:

```text
Pulling <registry>/mongo:8.0
Standing up <stack>_mongo1-8 on network <stack>_default
Standing up <stack>_mongo2-8 on network <stack>_default
Standing up <stack>_mongo3-8 on network <stack>_default
Waiting for the local new replica-set member to come alive...
<local-member> is alive on this node
Initiating replica set "secureone8"...
Waiting for replica set "secureone8" to become fully healthy...
Replica set "secureone8" is ready
Running mongo-migrate: <source-replica-set> -> <target-replica-set>
```

NPS-D continues to use the MongoDB 4.0 `secureone` replica set throughout the initial copy. The application doesn't use the new `secureone8` replica set yet.

If you repeat `run` after a partial attempt, the tool reuses existing MongoDB 8.0 services with the expected image. If an existing service uses a different image, the tool stops with a failure instead of silently reusing it.

### 4. Review cluster validation

Use the same validation requirements as the single-node procedure. Confirm:

```text
Checks failed:          0
```

Also confirm that `secureone8` has all three healthy members. A primary with only one secondary isn't sufficient for this procedure.

After an interruption, resume the initial copy from a manager node:

```text
s1 --multi-node mongo-upgrade run --resume
```

For a custom stack:

```text
s1 --stack <stack-name> --multi-node mongo-upgrade run --resume
```

### 5. Check cluster copy progress

Run from the same database-manager node that ran `run`:

```text
s1 --multi-node mongo-upgrade status
```

For a custom stack:

```text
s1 --stack <stack-name> --multi-node mongo-upgrade status
```

The checkpoint and validation rules are the same as for single-node. An absent checkpoint doesn't prove successful validation.

### 6. Prepare the cluster for cutover

Complete the single-node cutover checklist and additionally confirm:

* `check` passed on all three database nodes.
* All three `secureone8` members are healthy.
* The selected database-manager node can update services on all nodes.
* Registry authentication works for services placed on each node.
* Network connectivity between all replica-set members is healthy.

### 7. Perform cluster cutover

Run once from the same database-manager node during the approved maintenance window:

```text
s1 --multi-node mongo-upgrade cutover
```

For a custom stack:

```text
s1 --stack <stack-name> --multi-node mongo-upgrade cutover
```

The command follows the same freeze, quiescence, reconciliation, validation, switch, and stale-reference stages as single-node. For the cluster, it:

* Reconciles the MongoDB 4.0 `secureone` replica set with the MongoDB 8.0 `secureone8` replica set.
* Changes the replica-set connection information that NPS-D uses.
* Confirms that the full application stack no longer references `mongo1`, `mongo2`, or `mongo3` as database hosts.
* Stops `<stack>_mongo1`, `<stack>_mongo2`, and `<stack>_mongo3` only when the stale-reference scan is clean.

Expect to see six MongoDB services during the migration window. After a clean cutover, `<stack>_mongo1-8`, `<stack>_mongo2-8`, and `<stack>_mongo3-8` each have one running replica. Each old `<stack>_mongo1`, `<stack>_mongo2`, and `<stack>_mongo3` service has zero running replicas.

The values are per service: `MONGO1_REPLICA_COUNT=0`, `MONGO2_REPLICA_COUNT=0`, and `MONGO3_REPLICA_COUNT=0` preserve the stopped legacy replica set after a clean cutover. Don't use `3` or `6` for any individual MongoDB service.

Don't rerun `cutover` after a successful switch or after a partial application-service switch. Follow the recovery guidance that the tool prints and contact Netwrix Support.

### 8. Validate the cluster

Run from the same database-manager node:

```text
s1 --multi-node database-status
s1 --multi-node status
docker service ls | grep -i mongo
```

Confirm:

* `secureone8` has one primary and two secondary members.
* All three MongoDB 8.0 services have one running replica on their expected nodes.
* NPS-D write-path services use `secureone8`.
* After a clean stale-reference sweep, each old MongoDB 4.0 service has zero running replicas. If cutover deliberately retained the services because of a stale reference, keep them running until you resolve that reference.
* For each required setting, the cutover output reports either `Pinned ... in /secureone/s1.env` or `/secureone/s1.env already pins ...`.
* The interface, sign-in, and core environment workflows pass.

## Preserve the migrated state for later deploys and upgrades

Complete this section after a clean cutover and before running any later `s1 deploy`, `secureone.sh deploy`, or `secureone.sh upgrade`. It is especially important when NPS-D 26.06 or an earlier release originally created the installation, because the active `/secureone/docker-stack.yml` can remain an older template after the application upgrade.

> **Important:** Cutover can correctly switch a running stack to MongoDB 8.0 while its saved deployment definition still points part of the application to MongoDB 4.0 or declares the old database services with one replica. A later deployment can reapply that saved definition. Complete all checks in this section before another deployment operation.

### 1. Save the active configuration

Run on the primary or database-manager node:

```text
sudo cp --preserve=mode,ownership,timestamps /secureone/s1.env "/secureone/s1.env.before-mongodb8-$(date +%Y%m%d-%H%M%S)"
sudo cp --preserve=mode,ownership,timestamps /secureone/docker-stack.yml "/secureone/docker-stack.yml.before-mongodb8-$(date +%Y%m%d-%H%M%S)"
```

### 2. Verify the saved MongoDB 8.0 connection settings

Review the relevant assignments:

```text
sudo grep -nE '^(DB|REMEDIANT_DB)=' /secureone/s1.env
```

The values must match the exact MongoDB 8.0 connection values that cutover reports. `DB` is always required. `REMEDIANT_DB` is also required when cutover changed `REMEDIANT_DB_URL`.

If cutover reported `WARNING: could not pin ... in /secureone/s1.env`, use `sudoedit /secureone/s1.env`, remove any older assignment for the named variable, and paste the exact assignment that cutover printed. Keep one active assignment for each variable. MongoDB connection strings can contain shell metacharacters, so retain the quoting that the tool printed. Don't add comments to `s1.env`.

Run the `grep` command again and confirm that each required variable occurs exactly once. Don't rerun `cutover` to repair a saved setting.

### 3. Preserve the stopped state of MongoDB 4.0

Do this only after the stale-reference sweep completed successfully and the old MongoDB 4.0 service or services are already stopped. If cutover retained MongoDB 4.0 because it found a reference, resolve that condition first.

For a single-node deployment, run:

```text
sudo sed -i '/^DB_REPLICA_COUNT=/d' /secureone/s1.env
printf '%s\n' 'DB_REPLICA_COUNT=0' | sudo tee -a /secureone/s1.env > /dev/null
```

For a three-node cluster, run on the database-manager node:

```text
sudo sed -i \
  -e '/^MONGO1_REPLICA_COUNT=/d' \
  -e '/^MONGO2_REPLICA_COUNT=/d' \
  -e '/^MONGO3_REPLICA_COUNT=/d' \
  /secureone/s1.env

printf '%s\n' \
  'MONGO1_REPLICA_COUNT=0' \
  'MONGO2_REPLICA_COUNT=0' \
  'MONGO3_REPLICA_COUNT=0' \
  | sudo tee -a /secureone/s1.env > /dev/null
```

These settings apply to the retained MongoDB 4.0 services only. The three-node topology remains three MongoDB 8.0 services with one replica each. Don't set any individual MongoDB service to three or six replicas.

### 4. Verify that the active stack consumes the saved settings

Review the active stack definition:

```text
sudo grep -nE 'DB_URL=|REMEDIANT_DB_URL=|DB_REPLICA_COUNT|MONGO[123]_REPLICA_COUNT' /secureone/docker-stack.yml
```

The application services must use `DB_URL=${DB:-...}`. The `internal_api` service must use `REMEDIANT_DB_URL=${REMEDIANT_DB:-...}`. The old database service definitions must use the applicable replica-count variable.

An older active stack can still contain a hardcoded `REMEDIANT_DB_URL`. If it does, back up the file as shown in **Save the active configuration**, then use `sudoedit /secureone/docker-stack.yml` to replace only that environment entry with the applicable parameterized form:

Single-node deployment:

```text
- "REMEDIANT_DB_URL=${REMEDIANT_DB:-mongodb://db:27017/remediant}"
```

Three-node cluster:

```text
- "REMEDIANT_DB_URL=${REMEDIANT_DB:-mongodb://mongo1:27017,mongo2:27017,mongo3:27017/remediant?replicaSet=secureone}"
```

Preserve the file's existing indentation and all customer-specific registry, environment, replica, network, and placement settings. Don't replace the complete active stack file with a default template. If a required placeholder or replica-count variable is missing, contact Netwrix Support before another deployment.

Render the configuration without deploying it:

```text
sudo bash -c 'set -a; . /secureone/s1.env; set +a; docker stack config --compose-file /secureone/docker-stack.yml'
```

Confirm in the rendered output that application database URLs resolve to `db8` for single-node or `mongo1-8`, `mongo2-8`, and `mongo3-8` with replica set `secureone8` for a cluster. Confirm that the retained MongoDB 4.0 service definitions render with zero desired replicas.

Don't set `MONGO_VERSION=8.0` as a workaround. That variable changes the image of the retained MongoDB 4.0 service definitions and can start a MongoDB 8.0 process against the MongoDB 4.0 data path.

The rendered configuration can contain database connection information. Don't include it in a support case without removing credentials and other sensitive values.

### 5. Record the final state

Run the applicable post-cutover validation commands again and retain the output with the change record. Only then is the saved deployment state ready for a later deploy or upgrade.

## Monitoring and logs

Every `mongo-upgrade` command attempts to write its complete output to:

```text
/secureone/logs/mongo-upgrade/<command>-<UTC-timestamp>.log
```

The first output line shows the exact log path. Logs include migration progress, per-collection counters, validation results, warnings, failures, and output from the migration container.

If the command can't create the log directory, it continues without a persistent log. In that case, preserve the terminal output manually.

### Recognize progress on large databases

Large collections can take a long time without producing a new high-level `s1` message. During `run` or cutover:


1. Follow the exact log that the command prints:

   ```text
   tail -f /secureone/logs/mongo-upgrade/<log-file>
   ```
2. Look for timestamped collection start and completion messages.
3. Look for advancing document counters, which the tool reports periodically for large collections.
4. Don't assume a quiet terminal is a stopped process.

If counters don't advance for an extended period, collect the log and contact Netwrix Support before killing the process.

### Run the initial copy without keeping an SSH session open

The initial `run` command has no confirmation prompt. If an approved persistent terminal session isn't available, you can start it with `nohup`:

```text
nohup s1 mongo-upgrade run > /dev/null 2>&1 &
```

For a custom cluster stack:

```text
nohup s1 --stack <stack-name> --multi-node mongo-upgrade run > /dev/null 2>&1 &
```

Monitor it with `status` and the timestamped run log. Don't use this approach for `cutover`. Cutover requires interactive confirmation and active monitoring.

## Cutover failure behavior

The recovery action depends on the stage at which cutover fails.

### Failure before the database switch

If write-path services don't stop, the source continues receiving writes, final reconciliation fails, or validation fails before the switch, the tool restores the original service replica counts against MongoDB 4.0.

Expected failure text includes:

```text
Restoring write-path services against the OLD db (no cutover happened)
```

Review the log, correct the cause, confirm NPS-D is again using MongoDB 4.0, and contact Netwrix Support when the cause isn't clear.

### Partial application-service switch

If some services switch to MongoDB 8.0 and others don't, the tool leaves both database versions available and prints service-specific remediation commands.

> **Don't rerun the cutover command.** A repeated reconciliation against a partially switched environment can overwrite or remove data written after the partial switch.

Follow only the remediation commands for the affected services, confirm the database connection that every write-path service uses, and contact Netwrix Support.

### Stale MongoDB 4.0 reference after the switch

After switching the write path, the tool scans every service in the stack for a MongoDB connection that still points to the old host or replica set.

If it finds a stale reference:

* NPS-D may already be operating on MongoDB 8.0.
* The tool deliberately leaves MongoDB 4.0 running.
* The output identifies affected services and provides remediation when the tool can safely rewrite the value.
* Opaque or compound configuration values require manual review.

Correct the references, verify that nothing still depends on MongoDB 4.0, and stop the old database only with Netwrix Support guidance.

### Stale-reference sweep doesn't complete

If cutover reports:

```text
WARNING: could not complete the stale-reference sweep (...). Proceeding without it
```

the scan didn't produce a clean result. Don't interpret the following `Sweep found no remaining references` message as confirmation, and don't delete MongoDB 4.0 data. The running application may already be using MongoDB 8.0, and the tool may have stopped the old service or services. Preserve both database data sets and the complete cutover log. Don't run another deploy or upgrade until you have checked every service in the stack for MongoDB 4.0 connection references and verified the saved deployment state. Contact Netwrix Support when you can't perform a complete manual review.

### Cutover reports that the stack is already switched

The tool refuses to run cutover when every write-path service already points to MongoDB 8.0. This prevents a reverse reconciliation against the now-idle MongoDB 4.0 source.

Don't try to bypass this protection. Validate the active database and continue with post-cutover checks.

## Troubleshooting reference

| Message or condition | Meaning | Required action |
|----------------------|---------|-----------------|
| `FAIL: could not determine current mongo version` | The local MongoDB source isn't reachable or the expected container isn't running. | Restore the source database service to a healthy state before retrying `check`. |
| `FAIL: could not determine current DB size` | The tool couldn't read database statistics. | Confirm MongoDB health and permissions. Don't estimate around the failed check. |
| `FAIL: need ... free (2x current DB size)` | The source-data filesystem doesn't meet the enforced free-space threshold. | Add capacity and also validate the Docker named-volume filesystem. |
| Migration image isn't pullable | Registry access, DNS, firewall, or authentication failed. | Restore registry access on the affected node before `run` or cutover. |
| `no mongo replica found running on this node` | Cluster `check` can't find the expected local MongoDB 4.0 member. | Verify Swarm placement and run `check` on the correct database node. |
| Existing target uses a different image | A previous or mismatched target service already exists. | Stop. Don't reuse or delete it until Support confirms the correct recovery action. |
| `secureone8` doesn't become fully healthy | One or more MongoDB 8.0 members didn't reach primary or secondary state. | Check service placement, registry pulls, container logs, and network connectivity. Don't copy data yet. |
| `No checkpoint file found` | The copy either completed and removed its checkpoint or no checkpoint exists for these endpoints. Current `status` output can't distinguish those states. | Don't use `status` as cutover approval. Use the recorded validation summary. Repeat `run` if no successful validation summary exists. |
| **Checks failed** is greater than zero | One or more validation areas failed. | Don't cut over. Save the log and investigate with Support. |
| Validation passed with warnings | No hard check failed, but a difference needs review. | Confirm **Checks failed: 0**, review each warning, and escalate unexplained warnings. |
| A write-path service doesn't stop within five minutes | A long-running process is still active or Swarm can't stop the task. | Let the job finish or stop it safely, confirm zero running tasks, and retry cutover. |
| Source is still receiving writes after services stop | A late or external write is reaching MongoDB 4.0. | Identify the writer. Don't bypass the quiescence check. |
| Reconciliation or validation fails before the switch | The tool couldn't make the frozen source and target consistent. | Confirm automatic service restoration, inspect the log, and resolve the cause before retrying. |
| Only some services switch | The environment is partially cut over. | Don't rerun cutover. Use the printed remediation and contact Support. |
| Stack scan finds a MongoDB 4.0 reference | Something may still depend on the old database. | Correct the reference before stopping MongoDB 4.0. |
| `WARNING: could not complete the stale-reference sweep` | The reference scan failed and didn't produce a reliable clean result. | Preserve both database data sets and the cutover log. Don't delete MongoDB 4.0 or perform another deploy or upgrade until you have reviewed every stack service. |
| `WARNING: could not pin ... in /secureone/s1.env` | The running application may be using MongoDB 8.0, but the database selection isn't durable for another deployment. | Don't rerun cutover and don't deploy or upgrade. Add the exact quoted assignment that cutover printed, keep one entry for the variable, and complete the persistence checks. |
| `/secureone/s1.env already pins ...` | The required saved value already matches the MongoDB 8.0 value that cutover selected. | Treat this as a successful persistence result for that setting and continue with the remaining post-cutover checks. |
| `s1 database-status` doesn't identify the active service and live version on a single-node deployment | The current single-node output isn't sufficient as standalone cutover evidence. | Combine the cutover log, `s1 status`, live Docker service state, saved settings, and application validation. |
| The active stack lacks a required `DB`, `REMEDIANT_DB`, or legacy replica-count placeholder | A later deploy can restore a MongoDB 4.0 reference or start the retained old database. | Stop. Complete **Preserve the migrated state for later deploys and upgrades** or contact Netwrix Support before deploying. |
| Long period with no high-level output | A large collection may still be processing. | Follow the log and check advancing counters before treating it as a hang. |
| Old MongoDB service appears stopped in service monitoring | A clean cutover scales the old database to zero but retains it. | Treat this as expected during the validation period. Don't delete its data. |

## Recovery and decommissioning

### Before cutover

NPS-D still uses MongoDB 4.0. If you can't complete `run`, leave the MongoDB 8.0 target in place for troubleshooting. If you must remove it, use the customer's standard Docker and storage administration process or the steps that Netwrix Support provides for that environment.

### Cutover fails before the switch

The tool restores NPS-D write-path services against MongoDB 4.0. Verify application health, review the log, and correct the failure before trying again.

### Cutover partially switches services

Don't rerun cutover. Keep both database versions available, follow the printed remediation, and contact Netwrix Support.

### An issue appears after successful cutover

The MongoDB 4.0 data remains present but stopped after a clean cutover. Once NPS-D has accepted writes on MongoDB 8.0, rollback requires data reconciliation. It isn't an automated one-command operation.

Don't change service replica counts, connection strings, or replica-set configuration without Netwrix Support guidance.

### Decommission MongoDB 4.0

> **Important: permanent removal requires a verified backup.** Before deleting MongoDB 4.0, confirm that an independent backup is available and restorable according to the customer's backup, retention, security, and recovery procedures or the instructions that Netwrix Support provides.

The migration tool doesn't delete MongoDB 4.0. Permanently removing the old service or replica set and its data is a separate manual decommissioning task. You don't have to perform it immediately after cutover.

Decommission MongoDB 4.0 only after:

* The post-cutover validation period has completed.
* NPS-D has operated successfully on MongoDB 8.0.
* Administrators have validated the workflows used in the environment.
* No NPS-D service or external integration references MongoDB 4.0.
* You have verified and retained the independent backup according to the customer's policy.

Use the customer's standard Docker and storage administration process or the environment-specific steps that Netwrix Support provides. Permanent removal frees the disk space that MongoDB 4.0 used, but it also removes the local recovery copy. Recovery after this point requires the retained backup.

## Information to collect for Netwrix Support

Record the following before migration and include the relevant items if you need assistance:

* NPS-D and `s1` versions.
* Deployment topology and stack name.
* Database-node names and Swarm manager information.
* Complete output from `check` on every database node.
* Reported logical database size and available storage on both relevant filesystems.
* Output from `s1 status`, `s1 database-status`, and `docker service ls | grep -i mongo`.
* Whether `DB`, `REMEDIANT_DB`, and the applicable legacy MongoDB replica-count settings are present exactly once in `/secureone/s1.env`. Redact their values before sharing them.
* Whether the active `/secureone/docker-stack.yml` consumes those settings. Share only the relevant redacted entries, not the complete file.
* The exact command and stage that failed.
* The final validation summary, including **Checks failed** and **Warnings**.
* Relevant `check`, `run`, `status`, and `cutover` logs.
* Any remediation command that cutover printed.
* Application validation results after cutover.

Don't include passwords, access tokens, registry credentials, or database connection secrets in a support case.

## Quick reference

### Single-node deployment

```text
s1 mongo-upgrade check
s1 mongo-upgrade run
s1 mongo-upgrade status
s1 mongo-upgrade cutover
```

### Three-node cluster

```text
# Run on every database node
s1 --multi-node mongo-upgrade check

# Run once from the same database node that is also a Swarm manager
s1 --multi-node mongo-upgrade run
s1 --multi-node mongo-upgrade status
s1 --multi-node mongo-upgrade cutover
```

### Logs

```text
/secureone/logs/mongo-upgrade/<command>-<UTC-timestamp>.log
```

### Stop conditions

Don't continue when:

* A readiness check fails.
* An independent backup isn't available and validated.
* Required storage capacity isn't available.
* MongoDB 8.0 replica-set health is incomplete.
* **Checks failed** is greater than zero.
* You can't explain a validation warning.
* A long-running job is still active before cutover.
* Cutover reports a partial switch or stale MongoDB 4.0 reference.
* Cutover reports that it couldn't complete the stale-reference sweep.
* Cutover reports that it couldn't pin a required MongoDB 8.0 setting in `/secureone/s1.env`.
* No successful validation summary for the initial copy exists, even if `status` reports `No checkpoint file found`.
* You haven't verified that the active stack and `/secureone/s1.env` preserve the MongoDB 8.0 selection and zero desired replicas for the retained MongoDB 4.0 services before a later deploy or upgrade.

When any stop condition applies, preserve the logs and contact Netwrix Support.
