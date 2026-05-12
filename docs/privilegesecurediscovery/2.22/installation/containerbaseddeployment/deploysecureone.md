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

Download the versioned quickstart archive on the **primary node**. Replace `<version>` and
`<major.minor>` with the target release, for example `2.22.14` and `2.22`:

```bash
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

Extract the archive on each node. The zip contains two files: `secureone.sh` and `secureone.tar.gz`.

```bash
unzip privilegesecure-discovery-quickstart-<version>.zip
```

For a **cluster deployment**, copy both extracted files to each secondary node before proceeding:

```bash
scp secureone.sh secureone.tar.gz <user>@<secondary-node-ip>:~/
```

Repeat for each secondary node. Both files must be present in the home directory on every node
before you run the setup script.

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

## Common Script Commands

| Command | Description |
|---|---|
| `setup` | Guided initial setup for this node |
| `setup --cluster --primary` | Initial setup for a cluster primary node |
| `setup --cluster --join-token <token>` | Join an existing cluster swarm |
| `upgrade --version <tag>` | Upgrade all services to a new version |
| `deploy --version <tag>` | Re-deploy the stack after a configuration change |
| `generate-join-token` | Print the join command for secondary nodes |
| `promote` | Promote all worker nodes to managers |
| `teardown` | Full destructive reset of this node |
