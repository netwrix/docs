---
title: "Container-based deployment overview"
description: "Learn how the container-based deployment of Netwrix Privilege Secure for Discovery works and choose between a single node and a three-node cluster."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm whether a single node is supported for production use or only for a proof of concept.
:::

Container-based deployment is the installation method for Netwrix Privilege Secure for Discovery. You deploy the product as a Docker Swarm stack on Ubuntu Server 24.04 LTS machines. A single shell script, `secureone.sh`, and a configuration package, `secureone.tar.gz`, do the work. Netwrix bundles both files in a versioned quickstart archive that you download from the Netwrix releases server.

The method supports a single-node deployment and a three-node high-availability cluster. New installations use MongoDB 8.0.

## Deployment steps

1. Choose a single node or a three-node cluster, and prepare one or three Ubuntu machines. The machines can be virtual machines. See [Requirements](../requirements/overview.md) and [Sizing](../requirements/sizing.md).
2. Install the operating system prerequisites on each machine. See [Install host prerequisites](../requirements/host-prerequisites.md).
3. Sign in each machine to the Netwrix container registry. Netwrix Support provides the access key. See [Configure registry access](../requirements/registry-access.md).
4. Download the quickstart bundle onto each machine and run `secureone.sh` on the primary machine. See [Deploy Privilege Secure for Discovery with Docker](./deploy.md).
5. Confirm that the deployment is healthy. See [Verify the deployment](./verify-deployment.md).
6. Review the [Go-live checklist](./go-live-checklist.md) before you protect production systems.

## Compare a single node and a cluster

| Feature | Single node | Cluster |
|---|---|---|
| Machines required | 1 | 3 |
| High availability | No | Yes |
| Database | One MongoDB service | A three-member MongoDB replica set |
| Behavior when a node fails | The product is unavailable until you restore the node. | A brief outage while Swarm restarts the services that ran on the failed node. MongoDB keeps quorum and elects a new primary. |
| Effect of an operating system update on one node | The product is unavailable while the node restarts. | No data loss. The API and background services restart briefly. |

Use a single node for a proof of concept or a low-risk environment. Use a three-node cluster for production environments that require high availability. For recovery planning, see [High availability and disaster recovery](../getting-started/high-availability-and-disaster-recovery.md).

## Upgrade or migrate an existing deployment

- To upgrade a container-based deployment, run the upgrade command from the quickstart bundle for the target release. See [Upgrade an existing deployment](./deploy.md#upgrade-an-existing-deployment).
- If a deployment still uses MongoDB 4.0, move it to MongoDB 8.0 first. See [Migrate from MongoDB 4.0 to 8.0](../migration/mongodb-4-to-8/overview.md).
- If a deployment came from the ISO image, which is deprecated, contact Netwrix Support to plan the move to containers. See [Legacy ISO installation](../appendix/legacy-iso/legacy-iso-installation.md).

## Related tools

- [Install the s1 CLI helper utility](./s1-cli-helper.md): the `s1` command manages services and the database from the host.
- [Manage Docker secrets](./docker-secrets.md): the deployment creates an encryption key that you must protect.
- [Set up the Docker credential helper](./docker-credentials-helper.md): store the registry credential in an encrypted store instead of in plain text.
- [secureone.sh script reference](../appendix/secureone-script-reference.md): look up every command, option, and environment variable of the deployment script.
