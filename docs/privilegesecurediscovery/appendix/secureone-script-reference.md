---
title: "secureone.sh script reference"
description: "Look up the commands, options, and environment variables of the secureone.sh deployment script for Netwrix Privilege Secure for Discovery."
sidebar_position: 10
---

The `secureone.sh` script installs, upgrades, and removes a Netwrix Privilege Secure for Discovery deployment. For the procedures, see [Deploy Privilege Secure for Discovery with Docker](../install/deploy.md).

## Usage

```text
sudo -E bash secureone.sh <command> [options]
```

Run `bash secureone.sh --help` to display the built-in help. The help doesn't require `sudo`.

## Commands

| Command | Description |
|---|---|
| `setup` | Guided setup for this node. Installs Docker if missing, extracts the package, creates `/secureone/s1.env` if the host has none, prompts for and sets the host name, reconfigures the Docker bridge network, patches `/etc/sudoers`, and installs the matching `s1` tool. See [What setup changes on the host](../install/deploy.md#what-setup-changes-on-the-host). The options you pass decide the node's role. |
| `upgrade` | Upgrades all services to the version you specify, and installs or upgrades the `s1` tool to the same version. Requires `--version`. |
| `deploy` | Deploys or re-deploys the stack from `/secureone/docker-stack.yml`. Requires `--version`. Waits 30 seconds and then prints the service status. |
| `install-cli` | Installs or upgrades the `s1` tool at `/usr/local/bin/s1` to the version you specify, pins that version in `/secureone/s1.env`, and verifies the result. Requires `--version`. |
| `verify` | Checks that this node is ready and reports every failure. Uses `--version` if given, otherwise the version pinned in `s1.env`. |
| `generate-join-token` | Prints the command to run on each secondary node. Run it on the primary node after `setup --cluster --primary`. |
| `promote` | Promotes all worker nodes to managers. Run it on the primary node after all secondary nodes join. Safe to run again. |
| `init` | Initializes Docker Swarm on the primary node. `setup` calls it automatically. Run it alone only to re-initialize the swarm without repeating the full setup. |
| `teardown` | Destructive reset of this node. Prompts you to reset secondary nodes manually. |

## Options

| Option | Description |
|---|---|
| `--cluster` | Treats this node as part of a cluster deployment. |
| `--primary` | Treats this node as the cluster primary. Requires `--cluster`. |
| `--join-token <token>@<host>:<port>` | Manager join token from `generate-join-token`. Requires `--cluster`. The node joins the swarm as a manager after the network setup. |
| `--version <version>` | Image tag to pull and deploy, for example `26.09.1`. Required for `upgrade`, `deploy`, `install-cli`, and the setup of a cluster secondary node. Optional for the setup of a single node or a cluster primary, which default to the release the package was built for. |
| `--cli-only` | Narrows `verify` to the `s1` tool and `s1.env`. Use it on a cluster's secondary nodes, which have no `docker-stack.yml`. |
| `--skip-asset-refresh` | Lets `upgrade` proceed without the target release's package. Only the images change. The command refuses this option on a node that already serves a database. |
| `-h`, `--help` | Shows the help and exits. |

## Environment variables

| Variable | Description |
|---|---|
| `S1_TARBALL_URL` | URL to download `secureone.tar.gz` instead of using the file in the current directory. Useful when the package is on an internal server. For `upgrade`, point it at the target release's package. |

The script also reads `/secureone/s1.env`. The values in that file are overrides for a deployed host, such as `S1_VERSION`, `MONGO_VERSION`, and `S1_REPO_DOMAIN`. A `--version` option takes precedence over the file.
