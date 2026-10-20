---
title: "Container-based deployment overview"
description: "Learn how the container-based deployment of Netwrix Privilege Secure for Discovery works and choose between a single node and a three-node cluster."
sidebar_position: 10
---

Container-based deployment is the installation method for Netwrix Privilege Secure for Discovery. You deploy the product as a Docker Swarm stack on standard Ubuntu Server 24.04 LTS machines. The deployment uses one shell script, `secureone.sh`, and one configuration package, `secureone.tar.gz`. Netwrix bundles both files in a versioned quickstart archive that you download from the Netwrix releases server.

The method supports a single-node deployment and a three-node high-availability cluster. New installations use MongoDB 8.0.

The `secureone.sh` script contains all of the deployment logic. The package provides the installation directory structure and the default configuration files.

## Deployment steps

1. Prepare one Ubuntu machine for a single-node deployment, or three Ubuntu machines for a cluster. The machines can be virtual machines. See [Requirements](../requirements/overview.md).
2. Install the operating system prerequisites on each machine. See [Install host prerequisites](../requirements/host-prerequisites.md).
3. Authenticate each machine with the Netwrix container registry. See [Configure registry access](../requirements/registry-access.md).
4. Download the quickstart bundle onto each machine and run `secureone.sh` on the primary machine. See [Deploy Privilege Secure for Discovery with Docker](./deploy.md).
5. Confirm that the deployment is healthy. See [Verify the deployment](./verify-deployment.md).
6. Review the [Go-live checklist](./go-live-checklist.md) before you protect production systems.

## Compare a single node and a cluster

| Feature | Single node | Cluster |
|---|---|---|
| Machines required | 1 | 3 |
| High availability | No | Yes |
| Downtime during an operating system update | Yes | No |
| MongoDB replication | No | Yes, as a replica set |

Use a single node for a proof of concept or a low-risk environment. Use a three-node cluster for production environments that require high availability.

## Related tools

- [Install the s1 CLI helper utility](./s1-cli-helper.md): the `s1` command manages services and the database from the host.
- [Manage Docker secrets](./docker-secrets.md): the deployment creates an encryption key that you must protect.
- [Set up the Docker credential helper](./docker-credentials-helper.md): store the registry credential in an encrypted store instead of in plain text.
