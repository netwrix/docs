---
title: "MongoDB migration checklist"
description: "Follow one checklist from planning through retire to migrate Privilege Secure for Discovery from MongoDB 4.0 to 8.0, with the command and expected result for each step."
sidebar_position: 15
---

:::warning[Needs dev input: remove before publishing]
TODO: Product or QA to decide whether the Phase 3 item "Checks failed: 0" is too strict. Collections that change during the live copy, such as `health_reports`, can legitimately differ, and `cutover` runs its own final reconcile and validation.
:::

Use this checklist to track the whole migration from MongoDB 4.0 to MongoDB 8.0. If the deployment runs release 26.09.0, upgrade to 26.09.1 first. Release 26.09.0 doesn't include `finish-cutover`, `retire`, the durable post-cutover state, `install-cli`, or `verify`. If you already started a migration on 26.09.0, contact Netwrix Support before you continue. Each step gives the command, the result to expect, and the page that explains it. Don't start a phase until every item in the earlier phases is complete.

For a three-node cluster, add `--multi-node` before `mongo-upgrade` in each `s1` command and run `run`, `status`, `cutover`, and `retire` from the same database-manager node. The `s1` tool detects a cluster from the Docker Swarm node count, so the option is a safeguard.

## Phase 1: Plan

- [ ] You confirmed that the deployment runs MongoDB 4.0. Run `s1 database-status`. The output shows `MongoDB version: 4.0.x`. See [Migrate from MongoDB 4.0 to 8.0](./overview.md).
- [ ] You confirmed the free space: at least twice the database size at `/secureone/data/db`, on every database node. See [Plan the MongoDB migration](./plan.md#plan-storage-capacity).
- [ ] You exported a copy of the `key.txt` encryption key and stored it outside the hosts. See [Manage Docker secrets](../../install/docker-secrets.md).
- [ ] You took an independent backup of the MongoDB 4.0 data and confirmed that you can restore it. See [Protect and recover your deployment](../../admin/maintenance/protect-and-recover-your-deployment.md).
- [ ] You named the person who decides to continue or stop, and you agreed on the condition that triggers a stop. After the application writes to MongoDB 8.0, a rollback needs Netwrix Support.
- [ ] You scheduled the maintenance window and told its users. See [Plan the MongoDB migration](./plan.md#plan-the-maintenance-window).

## Phase 2: Prepare every database node

- [ ] You downloaded the 26.09.1 quickstart bundle and used its `secureone.sh`. See [Deploy Privilege Secure for Discovery with Docker](../../install/deploy.md).
- [ ] Every database node signs in to the container registry. See [Configure registry access](../../requirements/registry-access.md).
- [ ] You ran the upgrade on the primary node: `sudo -E bash secureone.sh upgrade --version 26.09.1`. See [Prepare hosts for the MongoDB migration](./prepare-hosts.md).
- [ ] On a cluster, you ran `sudo -E bash secureone.sh install-cli --version 26.09.1` on each other database node.
- [ ] `sudo -E bash secureone.sh verify --version 26.09.1` reports no failures on the primary node, and `verify --cli-only` reports none on the others.
- [ ] `s1 --version` reports 26.09.1 on every database node.
- [ ] All services are healthy. See [Verify the deployment](../../install/verify-deployment.md).
- [ ] You saved the output of `s1 status`, `s1 database-status`, and `sudo docker service ls | grep -i mongo`.

## Phase 3: Check and copy

- [ ] You ran `s1 mongo-upgrade check` on every database node. Each ends with `check passed. Ready for migration.` See [Migrate a single-node deployment](./single-node.md) or [Migrate a three-node cluster](./three-node-cluster.md).
- [ ] You ran `s1 mongo-upgrade run` once, from the database-manager node on a cluster, inside `tmux` or `screen`.
- [ ] The final validation summary shows `Checks failed: 0`, and you explained every warning.
- [ ] `s1 mongo-upgrade status` reports that the last run completed.
- [ ] You recorded how long `run` took, and you used it to confirm the window.

## Phase 4: Decide whether to continue

Continue only if every statement is true. If any is false, stop and see [Resume, roll back, or recover a migration](./resume-roll-back-recover.md).

- [ ] The backup and the `key.txt` copy are current and restorable.
- [ ] **Checks failed** is `0`, and you saved the validation summary.
- [ ] On a cluster, `secureone8` has all three members healthy.
- [ ] No directory synchronization, bulk scan, or other long-running job is active.
- [ ] Registry access still works on every database node.
- [ ] The maintenance window is open, users expect downtime, and the operator can stay connected.

## Phase 5: Cut over

- [ ] You ran `s1 mongo-upgrade cutover` in the foreground, inside `tmux` or `screen`, and watched the log. See [Cut over to MongoDB 8.0](./cut-over.md).
- [ ] The command exited with `0` and ended with `Cutover complete.` If it didn't, don't run it again. See [Resume, roll back, or recover a migration](./resume-roll-back-recover.md).
- [ ] The output shows that the tool pinned the MongoDB 8.0 connection settings in `/secureone/s1.env`.
- [ ] The output includes `Sweep found no remaining references` for MongoDB 4.0 and `Stopping old db...` (`Stopping old replica set...` on a cluster). An exit code of `0` and `Cutover complete.` alone don't prove that MongoDB 4.0 stopped. If the output says the old database was deliberately not stopped, see [Resume, roll back, or recover a migration](./resume-roll-back-recover.md#finish-a-cutover-that-left-mongodb-40-running).

## Phase 6: Verify

- [ ] `s1 database-status` reports `MongoDB version: 8.0.x`. On a cluster, `secureone8` has one primary and two secondaries. See [Verify and maintain the deployment after cutover](./after-cutover.md).
- [ ] Administrators can sign in to the web interface.
- [ ] A scan of a test system returns results.
- [ ] A user can request just-in-time access, receive it, and lose it when it expires.
- [ ] A directory synchronization completes.
- [ ] No write-path service stays stopped.
- [ ] You saved the command output and logs with the change record.

## Phase 7: Soak

- [ ] The application ran on MongoDB 8.0 for the period that you agreed, for example a full backup cycle and a business day of normal use.
- [ ] You redeployed only with `s1 deploy` or `secureone.sh deploy`. You didn't run `docker stack rm`, `s1 undeploy`, or `docker stack deploy`.

## Phase 8: Retire MongoDB 4.0

- [ ] You took a new independent backup.
- [ ] You ran `s1 mongo-upgrade retire --dry-run` and resolved every `FAIL`. See [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md).
- [ ] You scheduled a short window. The application stops while the command moves the data.
- [ ] You ran `s1 mongo-upgrade retire` and it exited with `0`.
- [ ] On a single node, `s1 database-status` reports MongoDB 8.0 on the canonical service names. On a cluster, `s1 db`, `s1 set-password`, and `s1 database-status` fail after `retire`. Open a shell with the manual method instead. See [Retire MongoDB 4.0 after cutover](./retire-mongodb-4.md).

## Phase 9: Reclaim the space

- [ ] The retired deployment ran normally for the period that you agreed.
- [ ] You confirmed a verified, independent backup.
- [ ] You ran the removal commands that `retire` printed, on each node. These commands are irreversible, and after them you can't roll back to MongoDB 4.0.
