---
title: View and Export Logs
description: Read, follow, and filter Access Analyzer service logs with dspm-installer logs, and collect a support bundle for Netwrix Support with export-logs.
sidebar_position: 5.5
---

Every Access Analyzer service runs as a pod on the server's Kubernetes cluster. The installer has two commands for reading those pods' logs without `kubectl`:

- `dspm-installer logs` prints or follows the logs of the pods you pick, on screen.
- `dspm-installer export-logs` writes the installer log, pod status, events, and every container's logs into one support bundle that you can send to Netwrix Support.

Run both on the Access Analyzer server as root, or with `sudo`. They read the cluster's credentials from `/etc/rancher/k3s/k3s.yaml`, which only root can read.

## Command Summary

| Task | Command |
|---|---|
| Show the last 200 lines of a service | `sudo dspm-installer logs core-api` |
| Show a set number of lines | `sudo dspm-installer logs core-api --tail 50` |
| Follow new lines as they arrive | `sudo dspm-installer logs core-api -f` |
| Show the logs from before the last restart | `sudo dspm-installer logs core-api --previous` |
| Pick pods from a list | `sudo dspm-installer logs` |
| Show only the last hour | `sudo dspm-installer logs core-api --since 1h` |
| Read a system pod | `sudo dspm-installer logs -n kube-system coredns` |
| Write a support bundle of every pod | `sudo dspm-installer export-logs` |
| Write a bundle for one service, as a folder | `sudo dspm-installer export-logs core-api -o ./bundle/` |

## Choose Which Pods to Read

Both commands take one or more targets. The commands check each target against these rules in order and use the first one that matches:

1. The exact pod name, for example `core-api-84946b5ccd-pmfqb`.
2. The pod's `app.kubernetes.io/name` label, for example `core-api`.
3. The pod's `app.kubernetes.io/component` label.
4. Part of the pod name, for example `zitadel` also matches `zitadel-setup-kfnng`.

The commands search the `access-analyzer` and `argocd` namespaces by default. To narrow a target to one namespace, prefix it with the namespace and a slash, such as `access-analyzer/clickhouse`. A target that matches pods in more than one namespace prints a warning.

| Flag | Effect |
|---|---|
| `-n`, `--namespace <name>` | Search only this namespace. Repeat the flag for more than one. Replaces the default namespaces. |
| `--all` | Also search `cert-manager`, `adcs-issuer`, and `kube-system`. Ignored when you pass `--namespace`. |
| `--since <duration>` | Only include lines newer than this duration, such as `30m` or `2h`. |
| `--argocd-namespace <name>` | The ArgoCD namespace, if it isn't `argocd`. |
| `--kubeconfig <path>` | The cluster credentials file, if it isn't `/etc/rancher/k3s/k3s.yaml`. |

## Read a Service's Logs

`dspm-installer logs <target>` prints the last 200 lines of every container in the matching pods, including init containers. Each line starts with the local time and the pod and container it came from, so you can tell which container wrote each line. A header before each container shows how many lines follow.

```bash
sudo dspm-installer logs core-api --tail 3
```

![dspm-installer logs core-api printing the last three lines of each container in the core-api pod](/images/accessanalyzer/26.1/install/logs-target.webp)

`--tail` sets the number of lines per container to print. Use `--tail -1` for every line the container still holds, or `--tail 0` to print none and only follow new lines. The command prints at most the newest 5 MB of each container's log. `--no-color` turns off the colored pod and container names, for example when you save the output to a file.

## Follow Logs as They Arrive

Add `-f` (`--follow`) to keep the command running and print each new line as the service writes it. If a container restarts while you're following it, the command attaches to the new container and continues. Press **Ctrl+C** to stop.

```bash
sudo dspm-installer logs webapp -f --tail 2
```

![dspm-installer logs webapp -f printing new web application log lines until you press Ctrl+C](/images/accessanalyzer/26.1/install/logs-follow.webp)

## Read the Logs from Before a Restart

When a service crashes, Kubernetes restarts its container, and the new container's log starts empty. The error that caused the crash is in the previous container's log. Add `--previous` to read it. Containers that haven't restarted show `no previous instance`.

```bash
sudo dspm-installer logs core-api --previous --tail 4
```

![dspm-installer logs core-api --previous showing the core-api container's last lines before it restarted](/images/accessanalyzer/26.1/install/logs-previous.webp)

You can't combine `--previous` with `--follow`, because a stopped container has no new lines to follow. The `RESTARTS` count in the pod list, or the `restarts=` value in the pod picker, shows which containers have a previous log.

## Pick Pods from a List

Run `dspm-installer logs` with no target to choose pods from a list. The list shows each pod's namespace, name, status, ready containers, restart count, and age.

```bash
sudo dspm-installer logs --tail 3
```

![The dspm-installer logs pod picker filtered to core-api, with two pods selected and their logs printed](/images/accessanalyzer/26.1/install/logs-picker.webp)

| Key | Action |
|---|---|
| **Up** and **Down** | Move through the list. |
| **/** | Filter the list by typing part of a pod name. **Esc** clears the filter. |
| **x** or **Space** | Select or clear the pod under the cursor. |
| **Ctrl+A** | Select every pod in the list. |
| **Enter** | Print the logs of the selected pods. |

The picker needs an interactive terminal. In a script, or with output piped to another command, pass a target instead: with no target and no terminal, the command exits with code `2`.

## Narrow by Namespace and Time

Use `-n` to read pods outside the default namespaces, such as the cluster's DNS service in `kube-system`. Use a `<namespace>/` prefix to keep a target to one namespace, and `--since` to skip older lines.

```bash
sudo dspm-installer logs -n kube-system coredns --tail 3
sudo dspm-installer logs access-analyzer/clickhouse --since 10m --tail 4
```

![dspm-installer logs reading coredns in kube-system, then ClickHouse logs from the last 10 minutes](/images/accessanalyzer/26.1/install/logs-scope.webp)

## Create a Support Bundle

`dspm-installer export-logs` collects the logs and cluster state for a support case into one file. With no target, it includes every pod in the selected namespaces. It takes the same targets, `--namespace`, `--all`, and `--since` flags as `logs`.

```bash
sudo dspm-installer export-logs core-api zitadel --since 2h
sudo dspm-installer export-logs core-api -o ./core-api-bundle/
```

![dspm-installer export-logs writing a compressed support bundle, then writing a core-api bundle to a folder](/images/accessanalyzer/26.1/install/export-logs.webp)

By default the bundle is a compressed file named `dspm-support-<timestamp>.tar.gz` in the current folder. Use `-o` (`--output`) to choose the path. A path that ends in `.tar.gz` writes a compressed file. A path that ends in a slash, or an existing empty folder, writes the same files uncompressed, so you can read them on the server.

The bundle holds up to 10,000 lines per container, each capped at 5 MB, and has this layout:

```text
dspm-support-<timestamp>/
  README.txt                          host, version, pod table, warnings, and a file index
  installer.log                       the end of the installer log (--log-path)
  <namespace>/_pods.txt               pod list with nodes and IP addresses
  <namespace>/_events.txt             Kubernetes events, oldest first
  <namespace>/<pod>/_describe.txt     the pod's full description
  <namespace>/<pod>/<container>.log   the container's log, with timestamps
  <namespace>/<pod>/<container>.previous.log
                                      the log from before the last restart, only if the container restarted
```

:::warning
Pod logs can contain the credentials the installer creates, so treat the bundle as sensitive. The command writes it so that only root can read it. Send it to Netwrix Support over an encrypted channel, and delete it after Netwrix Support closes the case.
:::

## Related Pages

The [Installer reference](installer-reference.md#logs) describes the installer's own log file and the preflight results file.
