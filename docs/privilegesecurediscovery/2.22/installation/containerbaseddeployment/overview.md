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

The entire deployment process is transparent — the `secureone.sh` script contains all logic with
no hidden components. The tarball (`secureone.tar.gz`) provides the installation directory
structure and default configuration files.

## Deployment Steps

1. Create one Ubuntu machine (single-node) or three Ubuntu machines (cluster). These can be
   virtual machines.
2. Install [OS prerequisites](./prerequisites.md) on each machine.
3. Configure [AWS credentials](./awsconfiguration.md) on each machine to authenticate with the
   Netwrix container registry (Amazon ECR).
4. [Download the quickstart bundle](./deploysecureone.md) onto each machine and run `secureone.sh`
   on the primary machine.
5. [Verify the deployment](./verifydeployment.md) using Docker Swarm monitoring commands.

## Single-Node vs. Cluster

| | Single-node | Cluster |
|---|---|---|
| Machines required | 1 | 3 |
| High availability | No | Yes |
| Downtime on OS update | Yes | No |
| MongoDB replication | No | Yes (replica set) |

Use a single-node deployment for proof-of-concept or low-risk environments. Use a three-node
cluster for production environments that require high availability.
