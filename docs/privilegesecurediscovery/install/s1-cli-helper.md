---
title: "Install the s1 CLI helper utility"
description: "Install the s1 command-line tool and use it to check services, read logs, open a database shell, and run common maintenance commands on Netwrix Privilege Secure for Discovery."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm whether the standalone installer from the previous documentation (`s1_install.sh`, downloaded from the legacy deployment domain) is still published and supported, or whether `secureone.sh install-cli` is the only supported path. Evidence: the script still ships inside the s1tool image at /app/s1_install.sh; the 26.09.1 deployment repository doesn't reference the legacy download.

TODO: Confirm whether customers should run `s1 deploy`, `s1 undeploy`, `s1 pull`, and the `s1 docker-daemon-*` commands directly, or only on Netwrix Support's direction. Evidence: docker/s1tool/src/s1.py defines them as public commands; the installation guide uses `secureone.sh` for deployment and upgrade.
:::

The `s1` tool is a command-line helper for the Docker Swarm that runs Netwrix Privilege Secure for Discovery. It shows service status, follows logs, opens a database shell, and wraps other maintenance tasks. The launcher at `/usr/local/bin/s1` runs the matching `s1tool` container image from the Netwrix container registry, so the tool always matches your release.

## Install the tool

The `secureone.sh setup` and `secureone.sh upgrade` commands install the matching `s1` tool on the node where you run them. On a cluster, `setup` also installs the tool on each secondary node. See [Deploy Privilege Secure for Discovery with Docker](./deploy.md).

To install or change the version of the tool on its own, or to repeat an installation that didn't complete, run the following command from the directory that holds `secureone.sh`. The `--version` value must match the release that the deployment runs.

```bash
sudo -E bash secureone.sh install-cli --version <version>
```

For example, for release 26.09.1:

```bash
sudo -E bash secureone.sh install-cli --version 26.09.1
```

The command requires that `setup` has already created the `/secureone` directory on the node. It pulls the `s1tool` image, installs the launcher, and pins the version in `/secureone/s1.env`. The command then checks that the installed tool reports the version of its image. To run the same check again, use the `verify` command:

```bash
sudo -E bash secureone.sh verify --version <version>
```

On a cluster's secondary nodes, which have no `docker-stack.yml` file, add the `--cli-only` option to both commands.

## Run the tool

Run `s1` as the user that deploys the product, without `sudo`. The launcher calls `sudo` itself. The tool authenticates to the registry with the AWS credentials in the `~/.aws` directory of the user who runs it, so run `aws configure` as that same user. See [Configure registry access](../requirements/registry-access.md).

The tool runs in the Docker Swarm. Run it on a node where `docker node ls` works. To display all commands and options, run:

```bash
s1 --help
```

Every command accepts the `--help` option. For example, `s1 logs --help` lists the log options.

## Check services and nodes

Display the status of all services:

```bash
s1 status
```

To display the task history of one service, add its name:

```bash
s1 status api
```

Display the Docker nodes in the swarm:

```bash
s1 nodes
```

Display the deployment mode, which is single-node or multi-node:

```bash
s1 check-deployment-mode
```

Display the active database service, the MongoDB version, and the replica set status:

```bash
s1 database-status
```

## Read logs

The `s1 logs` command follows the logs that the `fluentd` service collects. By default, it shows the last 30 seconds and keeps following new lines. Press Ctrl+C to stop.

| Option | Default | Effect |
| --- | --- | --- |
| `--since <time>` | `30s` | Shows logs since a timestamp such as `2026-10-01T13:23:37` or a relative time such as `42m`. |
| `--tail <lines>` | `all` | Shows the given number of lines from the end of the logs. |
| `--no-follow` | Off | Prints the logs and exits. |

For example, to print the last 200 lines from the past hour and exit:

```bash
s1 logs --since 1h --tail 200 --no-follow
```

## Start, stop, and restart services

Replace `<service>` with a service name from `s1 status`, for example `api`.

| Command | Effect |
| --- | --- |
| `s1 restart <service>` | Forces the service to restart. |
| `s1 stop <service> [<service> ...]` | Scales one or more services to zero replicas. |
| `s1 start <service> [<service> ...]` | Scales one or more services to one replica. The `windows-bridge` service starts six replicas. |
| `s1 shell <service>` | Opens an interactive `/bin/bash` shell in a running service container. |

For example, to restart the API service:

```bash
s1 restart api
```

## Open a database shell

The `s1 db` command opens a MongoDB shell on the active database service. To run a script, mount the JavaScript file in the database container under `/data/db` and pass it with the `--file` option.

```bash
s1 db
```

For the queries you can run and the differences between MongoDB versions, see [Open the MongoDB shell](../admin/maintenance/open-the-mongodb-shell.md).

## Run other maintenance commands

The following commands cover less frequent tasks.

| Command | Effect |
| --- | --- |
| `s1 healthcheck-report` | Runs the domain health check reports in the `internal_api` container. |
| `s1 set-password` | Prompts for a new password and updates the stored password hash of the product's built-in `svc_login` account. The password must have at least 15 characters. |
| `s1 migrate status`, `s1 migrate apply`, `s1 migrate revert` | Show, apply, or revert database schema migrations. The `--to <number>` option limits `apply` and `revert`. |
| `s1 mongo-upgrade check`, `run`, `status`, `cutover`, `finish-cutover`, `retire` | Move the database from MongoDB 4.0 to 8.0. Follow [Upgrade MongoDB 4.0 to 8.0](../migration/mongodb-4-to-8/overview.md) instead of running these commands on their own. |
| `s1 deploy`, `s1 undeploy` | Deploy the stack from `/secureone/docker-stack.yml`, or remove it. |
| `s1 pull <service> --version <version>` | Pulls the image of one or more services. Without `--version`, the command pulls the `latest` tag. The `--all` option pulls every service image. |
| `s1 docker-daemon-check`, `docker-daemon-validate`, `docker-daemon-configure` | Check or set the Docker daemon limits that the `windows-bridge-proxy` service needs in `/etc/docker/daemon.json`. The `configure` command accepts `--dry-run`, and needs `sudo`. |

Before `s1 deploy` runs, it checks the Docker daemon limits and the database state. If Docker needs a restart, the command prints `sudo systemctl restart docker`.

## Update the tool

To change the tool to another release, run `secureone.sh install-cli --version <version>` as described in [Install the tool](#install-the-tool). The `s1 --upgrade` option only pulls the image pinned in `/secureone/s1.env` again and replaces the launcher. It pulls with `sudo`, which reads the registry credential of the root user.

## Troubleshoot the installation

### The image pull is denied

If the installation fails with `Could not pull` followed by an image name, or Docker reports `pull access denied ... repository does not exist or may require 'docker login'`, the node has no sign-in to the Netwrix container registry, or the registry doesn't hold that release. Sign in as the same user that runs the script, and then run the installation again:

```bash
aws ecr get-login-password --region us-west-2 \
  | sudo -E docker login --username AWS --password-stdin 176947481038.dkr.ecr.us-west-2.amazonaws.com
```

For the AWS credentials and more information, see [Configure registry access](../requirements/registry-access.md).

### The registry isn't reachable

If a firewall blocks the node from the registry, allow the hosts in [Proxy and firewall allowlist](../requirements/proxy-and-firewall-allowlist.md), and then run the installation again.

### The tool reports an error about the swarm

The tool calls `docker node ls` at startup. If the node isn't part of a swarm or isn't a manager node, the command fails. Run `s1` on a node that the swarm manages. See [Inspect and troubleshoot the deployment](../troubleshooting/inspect-and-troubleshoot-the-deployment.md).
