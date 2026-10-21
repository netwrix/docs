---
title: "Migrate a three-node cluster to MongoDB 8.0"
description: "Check every database node, create the secureone8 replica set, copy data, and validate the copy on a three-node cluster before cutover."
sidebar_position: 50
---

Use this procedure when `sudo docker service ls | grep -i mongo` shows `<stack>_mongo1`, `<stack>_mongo2`, and `<stack>_mongo3`. The procedure creates a second three-member replica set named `secureone8` on the same nodes, copies the data from the `secureone` replica set, and validates the copy. The application keeps using MongoDB 4.0 until you run `cutover`.

During the migration, expect six MongoDB services across the cluster. Each MongoDB service has exactly one desired replica. Don't set `MONGO1_REPLICA_COUNT`, `MONGO2_REPLICA_COUNT`, or `MONGO3_REPLICA_COUNT` to `3`, `6`, or another value above `1`. Docker Swarm can place multiple tasks of one service on a constrained database node, where they compete for the same data path.

| Node placement | MongoDB 4.0 source | MongoDB 8.0 target |
|----------------|--------------------|--------------------|
| Replica placement 1 | `s1_mongo1` | `s1_mongo1-8` |
| Replica placement 2 | `s1_mongo2` | `s1_mongo2-8` |
| Replica placement 3 | `s1_mongo3` | `s1_mongo3-8` |

The tool places each MongoDB 8.0 member on the same Swarm node as its MongoDB 4.0 counterpart, using the existing Mongo replica node labels.

## Before you begin

Complete [Plan the MongoDB migration](./plan.md) and [Prepare hosts for the MongoDB migration](./prepare-hosts.md) on every database node.

Use the explicit `--multi-node` option in every cluster command. The `s1` tool detects a cluster from the Docker Swarm node count, so the option is a safeguard. If the deployment uses a stack name other than `s1`, place the global options before `mongo-upgrade`:

```bash
s1 --stack <stack-name> --multi-node mongo-upgrade <command>
```

Don't place `--stack` or `--multi-node` after `check`, `run`, `status`, or `cutover`.

## Choose the command node

Three things are independent in a cluster:

* The Docker Swarm manager that can create and update services.
* The node label that places Mongo replica 1, 2, or 3.
* The current MongoDB replica-set primary, which can change through election.

Select one node that is both a Swarm manager and a database host. Run `run`, `status`, and `cutover` from that same node for the whole migration. These commands use a MongoDB container and a checkpoint volume local to the node that runs them. If no database node is a Swarm manager, don't continue. Contact Netwrix Support.

The MongoDB driver discovers the current primaries through the replica-set connection strings. The command node doesn't have to host the current primary.

## Run the readiness check on every database node

1. Run the following command separately on all three database nodes:

   ```bash
   s1 --multi-node mongo-upgrade check
   ```

   Each run checks the MongoDB member and free space local to that node. Passing on one node doesn't establish readiness on the other two.

   Each node hosts only one local member. The command can suggest that you run `check` on the other nodes.

2. Confirm that each node reports MongoDB `4.0.x` and ends with the following line:

   ```text
   check passed. Ready for migration.
   ```

   The command can print a hint about the other two nodes. Keep using `--multi-node` in every cluster command.

## Create the MongoDB 8.0 replica set and copy data

1. Run the following command once, from the selected database-manager node:

   ```bash
   s1 --multi-node mongo-upgrade run
   ```

   The command performs the following operations:

   1. Pulls the MongoDB 8.0 image.
   2. Creates `<stack>_mongo1-8`, `<stack>_mongo2-8`, and `<stack>_mongo3-8`.
   3. Places each new member on the node assigned to the corresponding replica label.
   4. Waits for the local new member to respond.
   5. Initializes the new replica set as `secureone8`.
   6. Waits until all three members report `PRIMARY` or `SECONDARY`.
   7. Pulls the migration image.
   8. Connects to the `secureone` source and the `secureone8` target.
   9. Copies collections, documents, settings, and indexes.
   10. Runs post-copy validation.

   Infrastructure progress resembles the following output:

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

   The application keeps using the `secureone` replica set during the copy.

2. If you repeat `run` after a partial attempt, the tool reuses existing MongoDB 8.0 services that have the expected image. If an existing service uses a different image, the tool stops with a failure instead of reusing it.

## Review the validation summary

Use the same validation requirements as the single-node procedure. See [Migrate a single-node deployment](./single-node.md#review-the-validation-summary).

1. Confirm the following line in the final summary:

   ```text
   Checks failed:          0
   ```

2. Confirm that `secureone8` has all three healthy members. A primary with only one secondary isn't sufficient.

After an interruption, resume the copy from the same manager node:

```bash
s1 --multi-node mongo-upgrade run --resume
```

## Check copy progress

Run the following command from the same database-manager node that ran `run`:

```bash
s1 --multi-node mongo-upgrade status
```

The states and their meaning are the same as for a single node. See [Migrate a single-node deployment](./single-node.md#check-copy-progress). The command reports `Not started` until at least one `mongoN-8` service exists.

## Prepare for cutover

Complete the go or no-go items in the [Migration checklist](./checklist.md#phase-4-decide-whether-to-continue). On a cluster, also confirm the following items:

* `check` passed on all three database nodes.
* All three `secureone8` members are healthy.
* The selected node can update services on all nodes.
* Registry authentication works for services placed on each node.
* Network connectivity between all replica-set members is healthy.

Continue with [Cut over to MongoDB 8.0](./cut-over.md).
