---
title: Run Common Operations with aa
description: Check service status, open database shells, restart services, and run kubectl on the Access Analyzer server with the short aa command.
sidebar_position: 5.6
---

Every Access Analyzer service runs as a pod on the server's Kubernetes cluster. Day-to-day tasks such as checking that the services are up, opening a database shell, or restarting a service would otherwise need `kubectl` commands that name the `access-analyzer` namespace, the pod, the container, and the cluster credentials every time. The `aa` command fills those in for you.

{/* TODO: name the Access Analyzer release whose installer first adds aa */}

The installer adds `aa` to the server when it installs Access Analyzer, and each time `dspm-installer upgrade` deploys a release. It's a link at `/usr/local/bin/aa` to `dspm-installer`, so it always matches the installer version on the server. `dspm-installer --uninstall` removes it.

## Before You Begin

- Sign in to the Access Analyzer server with an account that can run `sudo`.
- You don't need to type `sudo`. Only root can read the cluster credentials in `/etc/rancher/k3s/k3s.yaml`, so `aa` runs itself again with `sudo` when you start it as another user. `sudo` asks for your password the first time, as it does for any command.
- Every `aa` command acts with full administrator rights on the cluster. A query you run in a database shell or a service you restart takes effect at once.

## Command Summary

| Task | Command |
|---|---|
| Pick a task from a menu | `aa` |
| Check everything and get the next step for each problem | `aa doctor` |
| Explain why a service isn't running | `aa why <service>` |
| Explain every service that isn't ready | `aa why` |
| List warning events from the last hour | `aa events` |
| Show application and pod status | `aa status` |
| Open a PostgreSQL shell on the `access_analyzer` database | `aa psql` |
| Run one PostgreSQL statement | `aa psql -c "<statement>"` |
| Open a ClickHouse shell | `aa ch` |
| Run one ClickHouse query | `aa ch --query "<query>"` |
| Open a Redis shell | `aa redis` |
| Restart a service | `aa restart <service>` |
| Pick services to restart from a list | `aa restart` |
| Open a shell in a service | `aa sh <service>` |
| Run one command in a service | `aa sh <service> -- <command>` |
| List connector scan and sync jobs | `aa scans` |
| Run any `kubectl` command in the Access Analyzer namespace | `aa k <kubectl arguments>` |
| Pick a common `kubectl` command from a list | `aa k` |
| Show the Access Analyzer, installer, Kubernetes, and operating system versions | `aa version` |
| Show or follow a service's logs | `aa logs <service>` |
| Write a support bundle | `aa export-logs` |
| Show help for a command | `aa <command> --help` |

## Pick a Task from the Menu

If you don't remember a command, type `aa` on its own. A menu lists every task, grouped by area, with the command that runs it. Move with the arrow keys and press **Enter** to run a task, or press **/** to filter the list by typing. When a task needs a service, such as a restart, `aa` then lists the services to pick from.

```bash
aa
```

![The aa menu listing tasks grouped as Health, Logs, Databases, Services, Scans, kubectl, and Support, each with its command, and running aa events after the task is picked](/images/accessanalyzer/26.1/install/aa-menu.webp)

The menu shows each task's command, so you can type it directly next time. Press **Esc** or **Ctrl+C** to leave the menu without running anything.

## Use Short Service Names

`aa why`, `aa restart`, and `aa sh` accept these short names for a service:

| Short name | Service |
|---|---|
| `api` | `core-api` |
| `conn` | `connector-api` |
| `pg`, `postgresql` | `postgres` |
| `ch` | `clickhouse` |
| `web`, `ui` | `webapp` |

When a name doesn't match a service, `aa` suggests the closest one, for example `did you mean core-api?`, and lists the valid names.

## Find Problems with aa doctor

Start here when something is wrong. `aa doctor` checks the server and every part of Access Analyzer, marks each check as passed (✔), a warning (⚠), or a problem (✘), and prints the command to run next for each warning and problem.

```bash
aa doctor
```

![aa doctor opening with the Access Analyzer, installer, Kubernetes, and operating system versions, then passing every check except one warning about a service that restarted recently, with the aa why command to run next](/images/accessanalyzer/26.1/install/aa-doctor.webp)

`aa doctor` checks:

- How full the disk that holds the Kubernetes data is. It warns from 85% and reports a problem from 95%, where Kubernetes starts to stop services to free space.
- That each server in the cluster is ready and isn't short of memory, disk space, or process IDs.
- That every Argo CD application is `Synced` and `Healthy`.
- That every service pod is ready, and which pods restarted in the last hour. Scan jobs aren't included; list them with `aa scans`.
- Which failed pods Kubernetes left behind after it replaced them, for example after it stopped them to free disk space. Delete each one with the `aa k delete pod` command that `aa doctor` prints.
- That every persistent volume claim is `Bound`.
- That PostgreSQL, ClickHouse, and Redis accept connections.
- How long the web TLS certificate stays valid. It warns when fewer than 30 days remain.

The first line names the Access Analyzer and installer versions and the Kubernetes and operating system versions of the server, which Netwrix Support usually asks for first.

If the Kubernetes API doesn't respond, `aa doctor` reports that as a problem, still checks the disk, and points you to `systemctl status` for the Kubernetes service.

`aa doctor` only reads. It never restarts a service or changes a setting. It exits with code `1` when it finds a problem, so a script can run it as a health check.

## Explain Why a Service Isn't Running

`aa why` gathers what you need to understand a failing service in one place:

- Each pod's state, the node it runs on, and when it started.
- Each container's state, restart count, and why it last stopped, such as `OOMKilled` when it ran out of memory.
- The memory and CPU each container requests and is limited to.
- The pod's recent events.
- The last 30 lines of each container's log, including setup containers that haven't finished. When a container restarted, these are the lines from before the restart, which usually show why it stopped.

```bash
aa why metabase
```

![aa why metabase showing a pod with 28 restarts, its last exit with code 137, its memory limit, liveness probe failures in its events, and the last log lines before the restart](/images/accessanalyzer/26.1/install/aa-why.webp)

With no service name, `aa why` explains every pod that isn't ready. Add `--all` to explain every pod, or `--tail <lines>` to show more or fewer log lines. `aa desc` is another name for `aa why`.

## List Recent Events

Kubernetes records an event when it can't schedule a pod, pull an image, mount a volume, or pass a health check. `aa events` lists the warning events from the last hour, oldest first.

```bash
aa events
```

- `--since <duration>` changes how far back to look, for example `--since 24h`.
- `--all` adds normal events, such as a container starting.
- `-w` keeps the list open and prints new events as they happen. Press **Ctrl+C** to stop. It can't be combined with `--since`.

## Check the Status of Access Analyzer

`aa status` starts with one line that counts the ready services and the healthy Argo CD applications. It then lists the Argo CD applications that deploy Access Analyzer, with their sync and health status, and every pod in the `access-analyzer` namespace.

```bash
aa status
```

![aa status opening with a summary of ready services and healthy applications, then every Argo CD application as Synced and Healthy, followed by each Access Analyzer pod with its ready count, status, and restarts](/images/accessanalyzer/26.1/install/aa-status.webp)

Read the output this way:

- An application that isn't `Synced` and `Healthy` is still deploying, or one of its resources has a problem.
- A pod is ready when both numbers in its `READY` column match, such as `1/1`. Pods whose `STATUS` is `Completed` are one-time jobs that have finished, and `0/1` is normal for them.
- A `RESTARTS` count that keeps growing points to a service that crashes. Run `aa why <service>` to see why it last stopped and its logs from before the restart.

## Open a Database Shell

`aa psql`, `aa ch`, and `aa redis` open the database's own client inside its pod. The client signs in with the credentials the pod already holds, so you never type or see a database password.

| Command | Opens | Signed in as |
|---|---|---|
| `aa psql` | `psql` on the `access_analyzer` PostgreSQL database | `postgres` |
| `aa ch` | `clickhouse-client` on ClickHouse | The ClickHouse service user |
| `aa redis` | `redis-cli` on Redis | No sign-in needed |

```bash
aa psql
```

![aa psql opening a psql session on the access_analyzer database, running two queries, and exiting with \q](/images/accessanalyzer/26.1/install/aa-psql.webp)

Type `\q` to leave `psql`, `exit` to leave `clickhouse-client`, and `quit` to leave `redis-cli`. **Ctrl+C** cancels the running query and keeps the session open.

Everything you type after the command goes to the client, so you can run one statement and return to the prompt:

```bash
aa ch --query "SELECT name FROM system.databases ORDER BY name"
aa redis ping
```

![aa ch running one query that lists the ClickHouse databases, then aa redis ping returning PONG](/images/accessanalyzer/26.1/install/aa-ch.webp)

To run a file of statements, redirect it into the command, for example `aa psql < cleanup.sql`.

:::warning
Changes you make in a database shell are permanent. Before you change or delete data, confirm that a recent backup exists, as [Backups](../configuration/settings/backups.md) describes, and change data only when Netwrix Support asks you to.
:::

## Restart a Service

`aa restart` performs a rolling restart of one or more services: Kubernetes starts a new pod, and stops the old one when the new pod is ready. Name each service by its Deployment or StatefulSet name, such as `core-api`, `webapp`, or `clickhouse`. The pod names in `aa status` start with these names.

```bash
aa restart webapp
aa k rollout status deployment/webapp
```

![aa restart webapp restarting the web application, then aa k rollout status waiting until the new pod has rolled out](/images/accessanalyzer/26.1/install/aa-restart.webp)

`aa k rollout status` waits until the restart finishes. With no service name, `aa restart` lists the services so you can pick one or more with the **Space** key and confirm with **Enter**. A name that doesn't match a service prints the list of valid names.

## Open a Shell in a Service

`aa sh <service>` opens a shell in the service's pod, which helps you check files, disk usage, or network access from inside the cluster. Type `exit` to leave the shell.

```bash
aa sh clickhouse
```

![aa sh clickhouse opening a shell in the ClickHouse pod, checking the size of the data directory, and exiting](/images/accessanalyzer/26.1/install/aa-sh.webp)

- To run one command instead of a shell, put it after `--`, for example `aa sh postgres -- df -h`. Without `--`, `aa sh` reads the extra words as more service names and stops with an error.
- In a pod with more than one container, the shell opens in the main container. Pick another one with `-c <container>`.
- To reach a pod that isn't a Deployment or StatefulSet, such as a scan job, pass its type and name, for example `aa sh pod/<pod-name>`.

The Access Analyzer application services, such as `core-api` and `connector-api`, run in minimal images that contain no shell, so `aa sh` fails for them with `executable file not found`. Read their logs with `aa logs` instead.

## List Scan Jobs

Each scan and sync that a connector runs is a Kubernetes job. `aa scans` lists these jobs, oldest first, with the connector, job type, and how the run was started.

```bash
aa scans
```

Add `-w` to keep the list open and print each change as jobs start and finish. Press **Ctrl+C** to stop. When no scan has run recently, the command prints `No resources found in access-analyzer namespace.`

## Run Any kubectl Command

`aa k` runs `kubectl` with the cluster credentials and the `access-analyzer` namespace already set. Everything after `k` goes to `kubectl` unchanged.

```bash
aa k get pvc
```

![aa k get pvc listing the Access Analyzer persistent volume claims with their capacity](/images/accessanalyzer/26.1/install/aa-k.webp)

To work in another namespace, add `-n <namespace>` or `-A` after `k`, for example `aa k -n argocd get applications`. Your namespace takes the place of `access-analyzer`.

### Pick a Common kubectl Command

Type `aa k` on its own to pick from a list of the `kubectl` commands that help most when something is wrong, such as the pods stuck in `Pending` or `Failed`, recent events, a pod's logs from before its last restart, and Argo CD applications. A pod that keeps restarting stays in the `Running` phase, so use `aa why` to find it. When a command needs a pod or an application, `aa` lists the names to pick from. Before it runs the command, `aa` prints it, so you can type it directly next time.

```bash
aa k
```

![aa k listing common kubectl commands, picking Persistent volume claims, then printing aa k get pvc and its output](/images/accessanalyzer/26.1/install/aa-k-picker.webp)

When `aa k` runs in a script or with its output redirected, it prints the list of commands instead.

## Show Versions

`aa version` shows the versions to include when you contact Netwrix Support:

- The Access Analyzer version.
- The installer version.
- The version each Argo CD application deploys. Applications that differ from the Access Analyzer version are named.
- For each server in the cluster, the Kubernetes (k3s), operating system, and kernel versions. The server that runs the cluster is listed first.

```bash
aa version
```

## Read Logs

`aa logs` and `aa export-logs` are the same commands as `dspm-installer logs` and `dspm-installer export-logs`. For targets, flags, and support bundles, see [View and Export Logs](view-and-export-logs.md).

## Turn On Tab Completion

The installer writes a Bash completion script for `aa` to `/etc/bash_completion.d/aa`. With it, the **Tab** key completes command names, service names for `aa why`, `aa restart`, and `aa sh`, and the `kubectl` arguments after `aa k`.

![Pressing Tab after aa listing its commands, after aa restart c listing the matching services, and after aa k get pod listing the matching resource types](/images/accessanalyzer/26.1/install/aa-completion.webp)

Completion needs the `bash-completion` package. Most Ubuntu Server installs include it. To add it:

- Ubuntu: `sudo apt install bash-completion`
- Red Hat Enterprise Linux (RHEL): `sudo dnf install bash-completion`

Sign out and back in, or open a new shell, for completion to start working.

Service names and `kubectl` arguments come from the cluster, which needs root. For an account other than root, they complete only while `sudo` remembers your password, such as within a few minutes after you run another `aa` command. Pressing **Tab** never asks for a password. Command names and flags always complete.

## Troubleshooting

| Problem | Cause and fix |
|---|---|
| `aa: command not found` | The installer on the server predates `aa`. Download the current installer to `/usr/local/bin/dspm-installer`, as [Download the Installer](run-the-installer.md#download-the-installer) describes, and run `sudo dspm-installer` again. A run with a newer installer goes through every install step, adds `aa`, and keeps your settings and data. |
| The installer prints `Warning: the aa command could not be installed: /usr/local/bin/aa is not a link this installer created; leaving it in place` | Another program already uses `/usr/local/bin/aa`. Run the commands as `sudo dspm-installer` instead, or move the other program and re-run the installer. |
| The installer prints `Warning: the aa command could not be installed: not linking aa to <path>` | The installer ran from a temporary directory, or from a file that root doesn't own. `aa` runs the installer as root, so it links only to a root-owned copy. Install the installer at `/usr/local/bin/dspm-installer`, as [Download the Installer](run-the-installer.md#download-the-installer) describes, and run it again from there. |
| `Warning: aa needs root and could not re-run itself with sudo` | `sudo` isn't installed, or isn't on your `PATH`. Run `aa` as root. |
| `<user> is not in the sudoers file` | Your account can't use `sudo`. Ask your Linux administrator for `sudo` rights, or sign in as root. |
