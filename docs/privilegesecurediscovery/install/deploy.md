---
title: "Deploy Privilege Secure for Discovery with Docker"
description: "Download the quickstart bundle and run secureone.sh to deploy Netwrix Privilege Secure for Discovery on one node or a three-node cluster."
sidebar_position: 20
---

This page covers how to download the Netwrix Privilege Secure for Discovery quickstart bundle from the Netwrix releases server, distribute it to every node, and run the deployment script. The same script upgrades an existing deployment and removes a deployment before a reinstall. For every command and option, see the [secureone.sh script reference](../appendix/secureone-script-reference.md).

:::important MongoDB 4.0 and a future release
A future release will update the backend to Python 3.x and supported library versions. That release will require MongoDB 8.0 and will no longer support MongoDB 4.0. New installations use MongoDB 8.0. If an existing deployment still uses MongoDB 4.0, complete [Migrate from MongoDB 4.0 to 8.0](../migration/mongodb-4-to-8/overview.md) before you upgrade to that release or any later release.
:::

## Prerequisites

- Every node meets the requirements in [Requirements](../requirements/overview.md).
- Every node has the operating system prerequisites installed. See [Install host prerequisites](../requirements/host-prerequisites.md).
- Every node has signed in to the Netwrix container registry, as the user that runs the script. See [Configure registry access](../requirements/registry-access.md).
- You can sign in to each node over SSH with an account that can run `sudo`.
- You know the release to install. See the [release notes](../release-notes/whats-new.md). The release number has the form `<major.minor>.<patch>`, for example `26.09.1`, where `<major.minor>` is `26.09`.

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

:::note
This bundle deploys the product. The Quickstart tools, which export reports and push bulk changes, are a different download named `privilegesecure-discovery-quickstart-tools-<version>.zip`. See [Install the Quickstart tools](../configuration/bulk-onboarding/install-the-quickstart-tools.md).
:::

## Extract the bundle

The archive contains exactly two files: `secureone.sh` and `secureone.tar.gz`. The setup script looks for `secureone.tar.gz` in the directory you run it from, so keep both files together in one directory on every node. This page uses your home directory.

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

Both files must be in the same directory on every node before you run the setup script.

:::note
The setup script creates the `/secureone/` directory to store the deployment configuration, stack files, data volumes, and logs. This directory is separate from the home directory where you downloaded the quickstart files.

The script reads the registry sign-in from your own `~/.docker` directory, so the sign-in must exist before you run it. See [Configure registry access](../requirements/registry-access.md).
:::

## Run the deployment script

All deployment operations use `secureone.sh`. Run the script as root with `sudo -E`. The `-E` option keeps your environment, including `HOME`, so the script reads the Docker registry sign-in that you saved in your own `~/.docker` directory. Plain `sudo` and `sudo -i` reset `HOME` to `/root`, where the script finds no sign-in and the image pull fails.

### What setup changes on the host

The `setup` command prepares the host as well as the product. Before it deploys anything, it does the following:

- Prompts you for a host name. You can keep the current name. The script sets the host name and the `127.0.1.1` entry in `/etc/hosts` to match.
- Sets the Docker bridge network to `169.254.47.1/24` in `/etc/docker/daemon.json`, re-creates the `docker_gwbridge` network on `169.254.48.0/24`, and restarts Docker.
- Installs Docker and Python 3 with `apt-get` if they are missing.

Setup needs an interactive terminal because it prompts you. It can take several minutes. The script waits for Docker, the stack, the database, and the API to become ready. On the primary node of a cluster, the script also pauses with a `Press Enter to continue` prompt while you join the secondary nodes.

### Deploy a single node

Run the following command on the node:

```bash
sudo -E bash secureone.sh setup
```

By default, the script deploys the release that matches the bundle. To deploy a specific release, add `--version <version>`.

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

When setup finishes, verify the deployment. See [Verify the deployment](./verify-deployment.md).

### Deploy a three-node cluster

1. Run the following command on the primary node.

   ```bash
   sudo -E bash secureone.sh setup --cluster --primary
   ```

2. Answer the host name prompt. The script initializes the swarm, prints the exact command to run on each secondary node, and pauses at `Press Enter to continue`. Leave the primary node at this prompt.
3. On each secondary node, run the command that the primary node printed. The command has the following form:

   ```bash
   sudo -E bash secureone.sh setup --cluster --join-token <token>@<host>:<port> --version <version>
   ```

   The command includes the `--version` option, which is required on a secondary node and must match the release on the primary node.

4. After every secondary node joins the swarm, return to the primary node and press Enter. The script deploys the stack, initializes the MongoDB replica set, runs the database migrations, promotes the secondary nodes to managers, and restarts the API.
5. Confirm the result. See [Verify the deployment](./verify-deployment.md).

If a secondary node joins after the primary node passes the prompt, promote it from the primary node:

```bash
sudo -E bash secureone.sh promote
```

### Known issue: clients on 10.0.0.0/24 and 10.0.1.0/24

In release 26.09.1, clients on the 10.0.0.0/24 or 10.0.1.0/24 network lose HTTP and HTTPS access to the product, because those ranges overlap the Docker overlay network. To work around the issue, place the clients outside those ranges.

### If setup fails

Don't run `setup` again unless the first installation failed. Each run rebuilds the swarm, generates a new `key.txt` secret that can't decrypt your stored credentials, and resets the `secureone` account password to its default. Choose the case that matches your situation:

- **A later step failed, for example `install-cli`:** run only the command that the script prints.
- **You want to start over:** run `teardown` on every node, and then follow this page again from [Download the quickstart bundle](#download-the-quickstart-bundle).
- **The deployment is live:** never run `setup` again.

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

The upgrade stops before it changes anything if the target release needs a newer MongoDB than the deployment uses. The message names the sequence to follow. See [Migrate from MongoDB 4.0 to 8.0](../migration/mongodb-4-to-8/overview.md).

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
```

On a deployment that moved from MongoDB 4.0 to MongoDB 8.0, the live database data is in a Docker volume instead of `/secureone/data/db/`. See [Migrate from MongoDB 4.0 to 8.0](../migration/mongodb-4-to-8/overview.md).
