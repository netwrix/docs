---
title: "Download and Deploy"
description: "Download the NPS-D quickstart bundle and deploy using secureone.sh"
sidebar_position: 40
---

# Download and Deploy

This page covers downloading the NPS-D quickstart bundle from the Netwrix releases server,
distributing it to all nodes, and running the deployment script.

## Prerequisites

- All nodes have [OS prerequisites](./prerequisites.md) installed
- All nodes are [authenticated with ECR](./awsconfiguration.md)

## Step 1 — Download the Quickstart Bundle

Log in to the **primary node** via SSH and run the following command from your **home directory**
(`~/`). Replace `<version>` and `<major.minor>` with the target release, for example `2.22.14`
and `2.22`:

```bash
cd ~
wget https://releases.netwrix.com/products/privilegesecure-discovery/<major.minor>/privilegesecure-discovery-quickstart-<version>.zip
```

**Example for 2.22.14:**

```bash
wget https://releases.netwrix.com/products/privilegesecure-discovery/2.22/privilegesecure-discovery-quickstart-2.22.14.zip
```

**Example for 26.03.2:**

```bash
wget https://releases.netwrix.com/products/privilegesecure-discovery/26.03/privilegesecure-discovery-quickstart-26.03.2.zip
```

## Step 2 — Extract the Bundle

Extract the archive. The zip contains two files: `secureone.sh` and `secureone.tar.gz`.

```bash
unzip privilegesecure-discovery-quickstart-<version>.zip
```

Both files are extracted into the current directory (`~/`). The setup script looks for
`secureone.tar.gz` in the directory it is run from, so keep both files together in `~/`.

For a **cluster deployment**, copy both extracted files to each secondary node before proceeding:

```bash
scp secureone.sh secureone.tar.gz <user>@<secondary-node-ip>:~/
```

Repeat for each secondary node. Both files must be present in the home directory on every node
before you run the setup script.

:::note
The setup script creates the `/secureone/` directory on the server to store the deployment
configuration, stack files, data volumes, and logs. This is separate from `~/` where the
quickstart files are downloaded.
:::

## Step 3 — Run the Deployment Script

All deployment operations use `secureone.sh`. Run the script as root (with `-E` to preserve
environment variables including the AWS credentials configured earlier).

### Single-Node Deployment

Run on the single node:

```bash
sudo -E bash secureone.sh setup
```

The script installs Docker if missing, extracts the configuration package, initializes Docker Swarm,
pulls images, creates the encryption secret, deploys the stack, runs database migrations, and sets
the default user.

### Three-Node Cluster Deployment

**On the primary node:**

```bash
sudo -E bash secureone.sh setup --cluster --primary
```

Follow the prompts. The script initializes the swarm, deploys the stack, and then outputs the exact
command to run on secondary nodes.

**On each secondary node** (use the command output by the primary):

```bash
sudo -E bash secureone.sh setup --cluster --join-token <TOKEN@HOST:PORT>
```

After all secondary nodes have joined the swarm, promote them to managers from the primary node:

```bash
sudo -E bash secureone.sh promote
```

## Upgrade an Existing Deployment

To upgrade to a new version, run on the primary node:

```bash
sudo -E bash secureone.sh upgrade --version <version>
```

The script pins the API to the manager node, pulls the new images, performs a rolling update,
runs database migrations, then unpins the API.

## Re-Deploy After a Configuration Change

```bash
sudo -E bash secureone.sh deploy --version <version>
```

Docker Swarm performs a rolling update of any changed services.

## Script Reference

### Commands

| Command | Description |
|---|---|
| `setup` | Guided initial setup for this node. Installs Docker if missing, configures the network, initializes Swarm, pulls images, creates the encryption secret, deploys the stack, runs DB migrations, and sets the default user. |
| `setup --cluster --primary` | Cluster primary setup. Same as above, then labels nodes and initializes the MongoDB replica set. |
| `setup --cluster --join-token <token>` | Join an existing cluster swarm as a manager after network setup. |
| `upgrade --version <tag>` | Upgrade all services to a new version. Pins the API to the manager node, pulls new images, performs a rolling update, runs migrations, then unpins the API. |
| `deploy --version <tag>` | Re-deploy the stack from `/secureone/docker-stack.yml`. Safe to re-run — Swarm rolling-updates changed services. |
| `generate-join-token` | Print the exact join command for secondary nodes. Run on the primary after `setup --cluster --primary`. |
| `promote` | Promote all worker nodes to managers. Run on the primary after all secondary nodes have joined. Safe to re-run. |
| `init` | Initialize Docker Swarm on this node (primary only). Called automatically by `setup` — only use standalone if you need to re-initialize the swarm without repeating full setup. |
| `teardown` | Destructive reset. Removes the running stack, stops all containers, leaves the swarm, and deletes `/secureone` and `~/secureone.tar.gz`. |

### Options

| Option | Description |
|---|---|
| `--cluster` | Treat this node as part of a cluster deployment. |
| `--primary` | Treat this node as the cluster primary. Requires `--cluster`. |
| `--join-token <TOKEN@HOST:PORT>` | Manager join token from `generate-join-token`. Requires `--cluster`. |
| `--version <tag>` | Image tag to pull and deploy (for example `2.22.14`). Required for `setup`, `upgrade`, and `deploy`. |
| `-h`, `--help` | Show help and exit. |

## Installation Directory

After `setup` completes, all deployment files are under `/secureone/`:

```
/secureone/
  docker-stack.yml          Active stack file (single-node or cluster)
  setup/                    Stack templates and helper scripts
  data/db/                  MongoDB data volume
  data/logs/                Application and Fluentd log files
  conf/fluentd/fluent.conf  Fluentd logging configuration
  conf/ssl/                 TLS certificate and key
```
