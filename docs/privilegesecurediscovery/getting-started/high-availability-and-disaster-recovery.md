---
title: "High availability and disaster recovery options"
description: "Compare single-node and three-node deployments and plan for high availability and disaster recovery."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Define the supported disaster recovery (DR) approach for customers, such as a standby deployment restored from a database backup. Evidence: no backup, restore, or DR tooling in the application, deployment, or infrastructure repositories (r05-backup-dr.md).

TODO: Confirm which services must stay stopped on a DR standby so that it doesn't act on managed systems. Evidence: the earlier documentation lists API, Worker, Expire, LDAP sync, and Scanner; the stack files also define worker-secondary, analytics_engine, internal_api, windows-bridge, and windows-bridge-proxy (docker-stack.prod.single.yml).

TODO: Confirm that a three-node cluster continues to run without interruption when any one node fails, including the MongoDB election time. Evidence: docker-stack.prod.cluster.yml defines mongo1 to mongo3 with --replSet secureone; failover timing not documented.

TODO: Confirm whether hypervisor snapshots of a stopped or quiesced node are a supported backup for a single-node deployment. Evidence: none.
:::

Privilege Secure for Discovery supports two deployment layouts: a single node and a three-node cluster. This page explains how each layout handles a failure and what to plan for disaster recovery (DR). Contact Netwrix Support to discuss the approach that fits your environment.

## Compare the deployment layouts

| Layout | Database | Behavior when a node fails |
| --- | --- | --- |
| Single node | One standalone MongoDB service (`s1_db`) with no replica set | The product is unavailable until you restore the node or recover on another host. |
| Three-node cluster | A three-member MongoDB replica set (`s1_mongo1`, `s1_mongo2`, and `s1_mongo3`) on a Docker Swarm of three nodes | The product continues to run when any one node fails. |

A single node provides no high availability. Plan for recovery from a backup.

## High availability

A three-node cluster uses Docker Swarm. A swarm needs an odd number of nodes so that a majority of nodes can agree on the cluster state. With three nodes, any one node can fail and the product continues to run without interruption. For more information, see the Docker documentation on [administering a swarm](https://docs.docker.com/engine/swarm/admin_guide/).

Place the three nodes of a cluster in the same location. The nodes exchange a large amount of traffic to stay synchronized, and nodes at different sites add latency and risk network interruptions.

### Load balancing

Docker Swarm balances the services across the nodes and moves them between nodes based on load and availability. Publish the product behind a single DNS name, and configure the DNS entry or a load balancer to distribute requests across the nodes. A load balancer is a recommended practice for managing traffic. It isn't required to run the product.

Three nodes work for a wide range of environment sizes. For the host requirements of each node, see [Sizing](../requirements/sizing.md).

## Disaster recovery

Disaster recovery covers a failure that affects the whole deployment, such as the loss of a site or of every node. Privilege Secure for Discovery doesn't include built-in scheduled backups, database replication to a second site, or an automated failover. Plan and test these steps yourself, or work with Netwrix Support.

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
Don't run the services that act on managed systems in the DR environment while production runs against the same systems. If both environments run, the DR environment overwrites the policies that production set. These services include the API, worker, expire, LDAP sync, and scanner services.
:::

Include a DNS change in your DR plan so that users can reach the restored deployment.
