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

The unzip command extracts both files into the current directory (`~/`). The setup script looks
for `secureone.tar.gz` in the directory you run it from, so keep both files together in `~/`.

For a **cluster deployment**, distribute the files to each secondary node. Use whichever method
is more convenient:

**Option A — copy from the primary node using `scp`:**

```bash
scp secureone.sh secureone.tar.gz <user>@<secondary-node-ip>:~/
```

**Option B — download directly on each secondary node:**

```bash
cd ~
wget https://releases.netwrix.com/products/privilegesecure-discovery/<major.minor>/privilegesecure-discovery-quickstart-<version>.zip
unzip privilegesecure-discovery-quickstart-<version>.zip
```

Repeat for each secondary node. Both files must be present in the home directory (`~/`) on every
node before you run the setup script.

:::note
The setup script creates the `/secureone/` directory on the server to store the deployment
configuration, stack files, data volumes, and logs. This is separate from `~/` where you
downloaded the quickstart files.
:::

## Step 3 — Run the Deployment Script

All deployment operations use `secureone.sh`. Run the script as root (with `-E` to preserve
environment variables including the AWS credentials you configured earlier).

### Single-Node Deployment

Run on the single node:

```bash
sudo -E bash secureone.sh setup --version <version>
```

The script installs Docker if missing, extracts the configuration package, initializes Docker Swarm,
pulls images, creates the encryption secret, deploys the stack, runs database migrations, and sets
the default user.

### Three-Node Cluster Deployment

**On the primary node:**

```bash
sudo -E bash secureone.sh setup --cluster --primary --version <version>
```

Follow the prompts. The script initializes the swarm, deploys the stack, and then outputs the exact
command to run on secondary nodes.

**On each secondary node** (use the command output by the primary):

```bash
sudo -E bash secureone.sh setup --cluster --join-token <TOKEN@HOST:PORT> --version <version>
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

## Full Reset Before a Reinstall

:::warning
`teardown` is a destructive operation. It removes the running stack, stops all containers, leaves
the swarm, and deletes `/secureone` and `~/secureone.tar.gz`. Teardown destroys all data in the
MongoDB volume. Run this only when you intend to fully reinstall the deployment.
:::

Run on the primary node (and repeat on each secondary node if it is a cluster):

```bash
sudo -E bash secureone.sh teardown
```

After teardown, follow the full installation steps from Step 1 to redeploy.

## Script Reference

### Usage

```
sudo -E bash secureone.sh <command> [options]
```

### Prerequisites

- Run as root with `sudo -E` to preserve environment variables (AWS credentials)
- AWS CLI installed and authenticated with the Netwrix ECR registry (see [AWS Configuration](./awsconfiguration.md))
- `python3` — installed automatically by `setup` if missing
- Docker — installed automatically by `setup` if missing
- Ubuntu 24.04 (other distributions not tested)

### Commands

**`setup --version <tag>`** — Interactive guided setup for this node. Installs Docker if missing,
extracts the tarball, sets the hostname, and reconfigures the Docker bridge network. Behavior
depends on the options you pass:

- **Single-node** — initializes Swarm, pulls images, creates the encryption secret, deploys the
  stack, runs DB migrations, and sets the default user.
- **Cluster primary** (`--cluster --primary`) — same as single-node, then labels nodes and
  initializes the MongoDB replica set.
- **Cluster secondary** (`--cluster --join-token`) — reconfigures the network, then joins the
  swarm using the provided join token.

**`upgrade --version <tag>`** — Upgrade all services to a new version. Pins the API to the
manager node, pulls the new images, performs a rolling update, runs DB migrations, then unpins
the API.

**`deploy --version <tag>`** — Deploy or re-deploy the Docker stack from
`/secureone/docker-stack.yml`. Safe to re-run — Docker Swarm rolling-updates any changed
services. Waits 30 seconds then prints service status.

**`generate-join-token`** — Print the exact command to run on each secondary node to join the
swarm. Run on the primary node after `setup --cluster --primary`.

**`promote`** — Promote all worker nodes in the swarm to managers. Run on the primary node after
all secondary nodes have joined. Safe to re-run — the script skips nodes already at manager role.

**`init`** — Initialize Docker Swarm on this node (primary only). The `setup` command calls this
automatically — only run standalone if you need to re-initialize the swarm without repeating full
setup.

**`teardown`** — Destructive reset of this node. Removes the running stack, stops all containers,
leaves the swarm, and deletes `/secureone` and `~/secureone.tar.gz`. Prompts you to reset
secondary nodes manually.

### Options

| Option | Description |
|---|---|
| `--cluster` | Treat this node as part of a cluster deployment. |
| `--primary` | Treat this node as the cluster primary. Requires `--cluster`. |
| `--join-token <TOKEN@HOST:PORT>` | Manager join token from `generate-join-token`. Requires `--cluster`. The node joins the swarm as a manager after network setup. |
| `--version <tag>` | Image tag to pull and deploy (for example `2.22.14`). Required for commands that pull images: `setup` and `upgrade`. |
| `-h`, `--help` | Show help and exit. |

### Environment Variables

| Variable | Description |
|---|---|
| `S1_TARBALL_URL` | URL to download `secureone.tar.gz` instead of looking for it in the current directory. Useful when the tarball lives on an internal server. |

### Typical Workflows

```bash
# Single-node deployment (all-in-one):
sudo -E bash secureone.sh setup --version 2.23.0

# Three-node cluster (follow prompts to copy and run commands on secondary nodes):
sudo -E bash secureone.sh setup --cluster --primary --version 2.23.0

# Upgrade to a new version (run on the primary node):
sudo -E bash secureone.sh upgrade --version 2.23.0

# Re-deploy after a config change:
sudo -E bash secureone.sh deploy --version 2.23.0

# Full reset before a reinstall:
sudo -E bash secureone.sh teardown
```

### Post-Deploy Checks

```bash
docker stack services s1          # replica counts and image versions
docker stack ps s1                # per-task state across all nodes
docker service logs s1_api -f     # live API logs
curl -sk https://localhost/api/v1/health
```

See [Verify the Deployment](./verifydeployment.md) for a full health checklist and
troubleshooting guide.

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
