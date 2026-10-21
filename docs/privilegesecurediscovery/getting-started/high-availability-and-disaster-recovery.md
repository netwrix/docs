---
title: "High availability and disaster recovery options"
description: "Compare single-node and three-node deployments and plan for high availability and disaster recovery."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Define the supported disaster recovery (DR) position for customers, such as a standby deployment restored from a database backup. The product ships no backup, restore, or DR tooling, so the supported approach needs a product management decision.
:::

Privilege Secure for Discovery supports two deployment layouts: a single node and a three-node cluster. This page explains how each layout handles a failure and what to plan for disaster recovery (DR). Contact Netwrix Support to discuss the approach that fits your environment.

## Compare the deployment layouts

| Layout | Database | Behavior when a node fails |
| --- | --- | --- |
| Single node | One standalone MongoDB service (`s1_db`) with no replica set | The product is unavailable until you restore the node or recover on another host. |
| Three-node cluster | A three-member MongoDB replica set (`s1_mongo1`, `s1_mongo2`, and `s1_mongo3`) on a Docker Swarm of three nodes | The product survives the failure of any one node, with a brief outage while the database elects a new primary and Docker Swarm restarts services on the surviving nodes. |

A single node provides no high availability. Plan for recovery from a backup.

## High availability

A three-node cluster uses Docker Swarm. A swarm needs an odd number of nodes so that a majority of nodes can agree on the cluster state. With three nodes, the swarm keeps its quorum when any one node fails, and the product recovers on the other two nodes. The recovery isn't instant:

- If the failed node held the MongoDB primary, the replica set elects a new primary in about 10 to 12 seconds.
- Docker Swarm restarts the services that run as a single replica on the surviving nodes.

Expect a brief outage while these steps finish. For more information, see the Docker documentation on [administering a swarm](https://docs.docker.com/engine/swarm/admin_guide/).

Place the three nodes of a cluster in the same location. The nodes exchange a large amount of traffic to stay synchronized, and nodes at different sites add latency and risk network interruptions.

### Load balancing

Docker Swarm places each service on a node when it schedules the service. It moves a service to another node only when a node fails. It doesn't rebalance services by load. Publish the product behind a single DNS name, and configure the DNS entry or a load balancer to distribute requests across the nodes. A load balancer is a recommended practice for managing traffic. It isn't required to run the product.

Three nodes work for a wide range of environment sizes. For the host requirements of each node, see [Sizing](../requirements/sizing.md).

## Disaster recovery

Disaster recovery covers a failure that affects the whole deployment, such as the loss of a site or of every node. Privilege Secure for Discovery ships no backup, restore, or disaster recovery tooling. The only pieces are a manual `mongodump` of the database and a saved copy of the encryption key, `key.txt`. The product has no scheduled backups, database replication to a second site, or automated failover. Plan and test these steps yourself, or work with Netwrix Support.

### What a recovery needs

To rebuild a deployment, you need the following items from the original deployment:

- The MongoDB database, stored on each database host in `/secureone/data/db`.
- The encryption key, `key.txt`. The product encrypts stored credentials with this key. A database copy without the matching key can't decrypt the stored credentials.
- The host configuration in `/secureone/s1.env` and the active stack file, `/secureone/docker-stack.yml`.
- The Fluentd configuration, if you customized it.

The installer registers `key.txt` only as a Docker Swarm secret and leaves no copy on disk. Removing the deployment with `secureone.sh teardown` deletes the swarm secrets, the configuration files, and the database. Store the key outside the host, with restricted access, and separate from the database backup.

For the recommended protection steps, see [Protect and recover your deployment](../admin/maintenance/protect-and-recover-your-deployment.md).

### Plan a DR environment

Build the DR environment with the same architecture as production. A matching architecture shortens the time to switch over and reduces the chance of problems. Test the DR environment and the switch-over process at least once a year.

:::warning
Don't run the services that act on managed systems in the DR environment while production runs against the same systems. If both environments run, the DR environment overwrites the policies that production set. These services include the API, worker, worker-secondary, expire, scanner, LDAP sync, analytics engine, and internal API services. The health reporter, Windows bridge, message queue, and Fluentd services don't write to the database and can run.
:::

Include a DNS change in your DR plan so that users can reach the restored deployment.
