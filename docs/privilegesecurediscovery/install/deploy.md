---
title: "Deploy Privilege Secure for Discovery with Docker"
description: "Download the quickstart bundle and run secureone.sh to deploy Netwrix Privilege Secure for Discovery on one node or a three-node cluster."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that `sudo -E` keeps the HOME of the calling user, or state which user's Docker configuration `secureone.sh` reads for the registry login. Evidence: none.

TODO: Confirm that the bundle ships the three files in the zip (`secureone.sh`, `secureone.tar.gz`) with no other contents at 26.09.1. Evidence: none.
:::

This page covers how to download the Netwrix Privilege Secure for Discovery quickstart bundle from the Netwrix releases server, distribute it to every node, and run the deployment script. The same script upgrades an existing deployment and removes a deployment before a reinstall.

:::important MongoDB 4.0 and a future release
A future release will update the backend to Python 3.13 and supported library versions. That release will require MongoDB 8.0 and will no longer support MongoDB 4.0. New installations use MongoDB 8.0. If an existing deployment still uses MongoDB 4.0, complete [Upgrade MongoDB 4.0 to 8.0](../migration/mongodb-4-to-8/overview.md) before you upgrade to that release or any later release.
:::

## Prerequisites

- Every node meets the requirements in [Requirements](../requirements/overview.md).
- Every node has the operating system prerequisites installed. See [Install host prerequisites](../requirements/host-prerequisites.md).
- Every node has signed in to the Netwrix container registry. See [Configure registry access](../requirements/registry-access.md).
- You can sign in to each node over SSH with an account that can run `sudo`.

## Download the quickstart bundle

1. Sign in to the primary node over SSH.
2. Change to your home directory.

   ```bash
   cd ~
   ```

3. Download the bundle. Replace `<major.minor>` and `<version>` with the target release.

   ```bash
   wget https://releases.netwrix.com/products/privilegesecure-discovery/<major.minor>/privilegesecure-discovery-quickstart-<version>.zip
   ```

   For example, for release 26.09.1:

   ```bash
   wget https://releases.netwrix.com/products/privilegesecure-discovery/26.09/privilegesecure-discovery-quickstart-26.09.1.zip
   ```

## Extract the bundle

The archive contains two files: `secureone.sh` and `secureone.tar.gz`. The setup script looks for `secureone.tar.gz` in the directory you run it from, so keep both files together in your home directory.

1. Extract the archive on the primary node.

   ```bash
   unzip privilegesecure-discovery-quickstart-<version>.zip
   ```

2. For a cluster, copy the files to each secondary node. Use one of the following methods.

   - Copy the files from the primary node with `scp`:

     ```bash
     scp secureone.sh secureone.tar.gz <user>@<secondary-node-ip>:~/
     ```

   - Download the bundle directly on each secondary node:

     ```bash
     cd ~
     wget https://releases.netwrix.com/products/privilegesecure-discovery/<major.minor>/privilegesecure-discovery-quickstart-<version>.zip
     unzip privilegesecure-discovery-quickstart-<version>.zip
     ```

Both files must be in the home directory on every node before you run the setup script.

:::note
The setup script creates the `/secureone/` directory to store the deployment configuration, stack files, data volumes, and logs. This directory is separate from the home directory where you downloaded the quickstart files.
:::

## Run the deployment script

All deployment operations use `secureone.sh`. Run the script as root with `sudo -E` so that the script keeps your environment variables, including the registry credentials you configured earlier.

### Deploy a single node

Run the following command on the node:

```bash
sudo -E bash secureone.sh setup --version <version>
```

The script performs the following tasks:

- Installs Docker if it is missing.
- Extracts the configuration package.
- Creates `/secureone/s1.env` from the packaged copy if the host has none.
- Initializes Docker Swarm.
- Pulls the images.
- Creates the encryption secret.
- Deploys the stack.
- Runs the database migrations.
- Sets the default user.
- Installs the matching `s1` command-line tool.

If the `s1` installation fails, for example because the registry login expired, the application stays deployed. The script reports the outstanding step with the command to run again and exits with a non-zero status.

### Deploy a three-node cluster

1. Run the following command on the primary node.

   ```bash
   sudo -E bash secureone.sh setup --cluster --primary --version <version>
   ```

2. Follow the prompts. The script initializes the swarm, deploys the stack, and prints the exact command to run on each secondary node.
3. On each secondary node, run the command that the primary node printed. The command has the following form:

   ```bash
   sudo -E bash secureone.sh setup --cluster --join-token <token>@<host>:<port> --version <version>
   ```

   The `--version` option is required on a secondary node and must match the release on the primary node.

4. After all secondary nodes join the swarm, promote them to managers. Run the following command on the primary node:

   ```bash
   sudo -E bash secureone.sh promote
   ```

5. Confirm the result. See [Verify the deployment](./verify-deployment.md).

## Upgrade an existing deployment

To upgrade, you need the quickstart bundle for the target release. The upgrade refreshes the stack templates in `/secureone/setup/` and the active `docker-stack.yml` from that release's package.

1. Download and extract the quickstart bundle for the target release on the primary node. See [Download the quickstart bundle](#download-the-quickstart-bundle). Alternatively, set `S1_TARBALL_URL` to the URL of the target release's `secureone.tar.gz`.
2. Run the upgrade command on the primary node.

   ```bash
   sudo -E bash secureone.sh upgrade --version <version>
   ```

The script performs the following tasks:

- Installs or upgrades the `s1` command-line tool on this node to the exact version you specify.
- Refreshes the stack templates and the active `docker-stack.yml`, and keeps a copy of the previous stack file as `docker-stack.yml.pre-*`.
- Pins the API to this node.
- Pulls the new images.
- Re-deploys the stack with a rolling update.
- Runs the database migrations.
- Removes the API pin.

On a cluster, the script prints a reminder to run `install-cli` on the other database nodes. Run the following command on each of them so that every node has a matching `s1` tool:

```bash
sudo -E bash secureone.sh install-cli --version <version>
```

The upgrade stops before it changes anything if the target release needs a newer MongoDB than the deployment uses. The message names the sequence to follow. See [Upgrade MongoDB 4.0 to 8.0](../migration/mongodb-4-to-8/overview.md).

The upgrade also exits with a non-zero status, and reports what is outstanding, if it can't verify the `s1` tool, if the active stack file needs a manual merge, or if it can't remove the API pin.

## Re-deploy after a configuration change

Run the following command to re-deploy the stack from `/secureone/docker-stack.yml`. Docker Swarm performs a rolling update of any changed services.

```bash
sudo -E bash secureone.sh deploy --version <version>
```

The `--version` value must match the release that you installed. To move to another release, use `upgrade`.

## Reset a deployment before a reinstall

:::warning
The `teardown` command is destructive. It removes the running stack, stops all containers, leaves the swarm, and deletes `/secureone` and `~/secureone.tar.gz`. It destroys all data in the MongoDB volume, the encryption key, and the `s1.env` file. Run it only when you intend to reinstall the deployment. For more information about the encryption key, see [Manage Docker secrets](./docker-secrets.md).
:::

1. Run the following command on the primary node, and then on each secondary node of a cluster:

   ```bash
   sudo -E bash secureone.sh teardown
   ```

2. To redeploy, follow this page again from [Download the quickstart bundle](#download-the-quickstart-bundle).

## Script reference

### Usage

```text
sudo -E bash secureone.sh <command> [options]
```

Run `bash secureone.sh --help` to display the built-in help. The help doesn't require `sudo`.

### Commands

| Command | Description |
|---|---|
| `setup` | Guided setup for this node. Installs Docker if missing, extracts the package, creates `/secureone/s1.env` if the host has none, sets the hostname, reconfigures the Docker bridge network, and installs the matching `s1` tool. The options you pass decide the node's role. |
| `upgrade` | Upgrades all services to the version you specify, and installs or upgrades the `s1` tool to the same version. Requires `--version`. |
| `deploy` | Deploys or re-deploys the stack from `/secureone/docker-stack.yml`. Requires `--version`. Waits 30 seconds and then prints the service status. |
| `install-cli` | Installs or upgrades the `s1` tool at `/usr/local/bin/s1` to the version you specify, pins that version in `/secureone/s1.env`, and verifies the result. Requires `--version`. |
| `verify` | Checks that this node is ready and reports every failure. Uses `--version` if given, otherwise the version pinned in `s1.env`. |
| `generate-join-token` | Prints the command to run on each secondary node. Run it on the primary node after `setup --cluster --primary`. |
| `promote` | Promotes all worker nodes to managers. Run it on the primary node after all secondary nodes join. Safe to run again. |
| `init` | Initializes Docker Swarm on the primary node. `setup` calls it automatically. Run it alone only to re-initialize the swarm without repeating the full setup. |
| `teardown` | Destructive reset of this node. Prompts you to reset secondary nodes manually. |

### Options

| Option | Description |
|---|---|
| `--cluster` | Treats this node as part of a cluster deployment. |
| `--primary` | Treats this node as the cluster primary. Requires `--cluster`. |
| `--join-token <token>@<host>:<port>` | Manager join token from `generate-join-token`. Requires `--cluster`. The node joins the swarm as a manager after the network setup. |
| `--version <version>` | Image tag to pull and deploy, for example `26.09.1`. Required for `upgrade`, `deploy`, `install-cli`, and the setup of a cluster secondary node. Optional for the setup of a single node or a cluster primary, which default to the release the package was built for. |
| `--cli-only` | Narrows `verify` to the `s1` tool and `s1.env`. Use it on a cluster's secondary nodes, which have no `docker-stack.yml`. |
| `--skip-asset-refresh` | Lets `upgrade` proceed without the target release's package. Only the images change. The command refuses this option on a node that already serves a database. |
| `-h`, `--help` | Shows the help and exits. |

### Environment variables

| Variable | Description |
|---|---|
| `S1_TARBALL_URL` | URL to download `secureone.tar.gz` instead of using the file in the current directory. Useful when the package is on an internal server. For `upgrade`, point it at the target release's package. |

The script also reads `/secureone/s1.env`. The values in that file are overrides for a deployed host, such as `S1_VERSION`, `MONGO_VERSION`, and `S1_REPO_DOMAIN`. A `--version` option takes precedence over the file.

### Typical workflows

```bash
# Single-node deployment
sudo -E bash secureone.sh setup --version <version>

# Three-node cluster, on the primary node
sudo -E bash secureone.sh setup --cluster --primary --version <version>

# Upgrade, on the primary node
sudo -E bash secureone.sh upgrade --version <version>

# Install the matching s1 tool on a cluster's other database nodes
sudo -E bash secureone.sh install-cli --version <version>

# Check that a node is ready
sudo -E bash secureone.sh verify --version <version>

# Check a cluster's other database nodes
sudo -E bash secureone.sh verify --cli-only --version <version>

# Re-deploy after a configuration change
sudo -E bash secureone.sh deploy --version <version>

# Reset a node before a reinstall
sudo -E bash secureone.sh teardown
```

### Post-deployment checks

```bash
docker stack services s1
docker stack ps s1
docker service logs s1_api -f
curl -sk https://localhost/api/v1/ping
```

See [Verify the deployment](./verify-deployment.md) for the full health checklist and troubleshooting guidance.

## Installation directory

After `setup` completes, the deployment files are under `/secureone/`:

```text
/secureone/
  docker-stack.yml          Active stack file (single node or cluster)
  docker-stack.yml.pre-*    Copy that the upgrade keeps before it refreshes the active file
  s1.env                    Host configuration; created if absent and never replaced
  setup/                    Stack templates and helper scripts
  setup/RELEASE             The release the package came from
  data/db/                  MongoDB data volume
  data/logs/                Application and Fluentd log files
  conf/fluentd/fluent.conf  Fluentd logging configuration
  conf/ssl/                 TLS certificate and key
```

On a deployment that moved from MongoDB 4.0 to MongoDB 8.0, the live database data is in a Docker volume instead of `/secureone/data/db/`. See [Upgrade MongoDB 4.0 to 8.0](../migration/mongodb-4-to-8/overview.md).
