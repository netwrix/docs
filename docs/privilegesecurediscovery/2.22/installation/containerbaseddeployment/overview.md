---
title: "Container-Based Deployment Overview"
description: "Deploy Privilege Secure Discovery on bare Ubuntu machines using the container-based deployment method"
sidebar_position: 10
---

# Container-Based Deployment Overview

:::note
Container-based deployment is available in NPS-D 2.22.14, 26.03.2, or later.
:::

Container-based deployment lets you deploy Privilege Secure Discovery (NPS-D) on standard Ubuntu
machines without using the ISO appliance image. The deployment uses a single shell script
(`secureone.sh`) and a configuration package (`secureone.tar.gz`), both bundled in a versioned
quickstart archive available on the Netwrix releases server.

This method supports both single-node and three-node high-availability cluster deployments.

## Deployment Steps

1. Prepare Ubuntu machines and install [OS prerequisites](./prerequisites.md).
2. Configure [AWS credentials](./awsconfiguration.md) on each machine to authenticate with the
   Netwrix container registry (Amazon ECR).
3. [Download the quickstart bundle and deploy](./deploysecureone.md) using `secureone.sh`.
4. [Verify the deployment](./verifydeployment.md) using Docker Swarm monitoring commands.

## Single-Node vs. Cluster

| | Single-node | Cluster |
|---|---|---|
| Machines required | 1 | 3 |
| High availability | No | Yes |
| Downtime on OS update | Yes | No |
| MongoDB replication | No | Yes (replica set) |

Use a single-node deployment for proof-of-concept or low-risk environments. Use a three-node
cluster for production environments that require high availability.
