---
title: "Install the s1 CLI helper utility"
description: "Install, use, and upgrade the s1 command-line tool that manages Netwrix Privilege Secure for Discovery services and the database from the host."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm whether the standalone install script that the previous version of this page used (`s1_install.sh` on the legacy deploy domain) is still published and supported. This page documents `secureone.sh install-cli` instead. Evidence: secureone.sh `install-cli` (line 1019); no reference to the legacy script in the 26.09.1 deployment repository.

TODO: Confirm the supported way to install the `s1` tool on a host where `secureone.sh` isn't available. Evidence: none.
:::

The `s1` tool is a command-line helper that manages Netwrix Privilege Secure for Discovery services and makes frequently used commands easier to run. It installs a launcher at `/usr/local/bin/s1` that runs the matching `s1tool` container image from the Netwrix registry.

## Install the tool

The `secureone.sh setup` and `secureone.sh upgrade` commands install the matching `s1` tool on the node where you run them. On a cluster, `setup` also installs it on each secondary node. See [Deploy Privilege Secure for Discovery with Docker](./deploy.md).

To install or upgrade the tool on its own, or to repeat an installation that didn't complete, run the following command. The `--version` value must match the release that the deployment runs.

```bash
sudo -E bash secureone.sh install-cli --version <version>
```

The command installs the launcher at `/usr/local/bin/s1`, pins the version in `/secureone/s1.env`, and verifies that the installed tool reports the version of its image. Use the following command to run the same check again:

```bash
sudo -E bash secureone.sh verify --version <version>
```

On a cluster's secondary nodes, which have no `docker-stack.yml`, add the `--cli-only` option.

## Use the tool

Display the status of the services:

```bash
s1 status
```

Display the status of the Docker nodes:

```bash
s1 nodes
```

Open a database shell that uses the active database:

```bash
sudo s1 db
```

Display the active database service, the MongoDB version, and the replica set status:

```bash
sudo s1 database-status
```

Display all available commands and options:

```bash
s1 --help
```

## Upgrade the tool

To pull the image for a specific version and replace the launcher on the host, set `S1_VERSION` and run `s1 --upgrade`. The following example uses version 26.09.1:

```bash
S1_VERSION=26.09.1 s1 --upgrade
```

## Troubleshoot the installation

### The image pull is denied

If the installation fails with an error such as `pull access denied for ..., repository doesn't exist or may require 'docker login'`, the node isn't logged in to the Netwrix container registry. Log in with the AWS CLI version 2 command, and then run the installation again:

```bash
aws ecr get-login-password --region us-west-2 \
  | sudo docker login --username AWS --password-stdin 176947481038.dkr.ecr.us-west-2.amazonaws.com
```

For the AWS credentials and more information, see [Configure registry access](../requirements/registry-access.md).

### The registry isn't reachable

If a firewall blocks the node from the registry, allow the hosts that [Proxy and firewall allowlist](../requirements/proxy-and-firewall-allowlist.md) lists, and then run the installation again.
