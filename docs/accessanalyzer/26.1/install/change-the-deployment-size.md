---
title: Change the Deployment Size
description: Move an installed Access Analyzer server to a larger size with dspmctl resize, what happens to its volumes, and how to finish a resize that stops.
sidebar_position: 4.3
---

You pick a [size](../requirements/index.md#size) when you install Access Analyzer. When the server outgrows that size, add CPU cores and RAM to the server, then move the install to a larger size with `dspmctl resize`. The new size sets the CPU, RAM, and replica counts every service runs with, and grows the persistent volumes where the storage supports it.

A resize only grows an install. `dspmctl resize` refuses a size smaller than the installed one, whatever flags you pass, because a smaller size can lose data. Access Analyzer doesn't support moving to a smaller size. An install that doesn't record a size counts as **medium**.

Run the commands on this page on the Access Analyzer server, with `sudo`. See [Upgrade to a new version](upgrade-to-a-new-version.md) for why `dspmctl` needs `sudo` and how to run it on Red Hat Enterprise Linux (RHEL).

## Before You Start

1. **Check the server against the new size.** Compare the server's CPU cores, RAM, and free disk on the storage volume with the figures for the new size in [Size](../requirements/index.md#size). `dspmctl resize` checks CPU and RAM itself, but it doesn't check disk. The storage volume is the one that holds `/var/lib`, or the directory you passed to `--storage-dir` at install time.
2. **Stop running scans.** The resize restarts the ClickHouse database, the message queue, and the worker services with their new resources. A scan that runs across that restart fails, and you have to run it again. See [Stop an execution](../admin/scans/scan-executions.md#stop-an-execution).
3. **Wait for any upgrade to finish.** `dspmctl resize` refuses to run while an upgrade is in progress.

## Resize the Deployment

Run `resize` with the new size, one of `small`, `medium`, `large`, or `enterprise`:

```bash
sudo dspmctl resize <size>
```

For example, to move an install to **small**:

```bash
sudo dspmctl resize small
```

The command prints each step with a timestamp. This recording, played at four times its real speed, shows a resize to **small** on a server with host-path storage. The server passes the capacity check, every claim keeps its size, and about three minutes later every application runs the new size:

![dspmctl resize small passing the capacity check, keeping the host-path claims, syncing every application, and exiting with code 0](/images/accessanalyzer/26.1/install/resize-grow.webp)

The same output as text, shortened:

```text
[2026-10-20T13:35:59Z] Host capacity 14 CPU cores / 33.3 GB RAM fits the small size
[2026-10-20T13:35:59Z] clickhouse-pvc keeps its 20Gi claim: a host-path volume does not cap a volume at its claim, so it can use the host disk the small size requires
...
[2026-10-20T13:35:59Z] Disabling automated sync for app netwrix
[2026-10-20T13:35:59Z] Setting Helm param config.sizingTier=small for app netwrix
[2026-10-20T13:35:59Z] Syncing app netwrix
[2026-10-20T13:36:31Z] Sync of app netwrix succeeded
[2026-10-20T13:36:31Z] Waiting for netwrix.classification (syncing), netwrix.common-functions (syncing), ...
...
[2026-10-20T13:38:59Z] Every app runs the small size
[2026-10-20T13:38:59Z] Restored automated sync for netwrix
```

Exit code `0` means every application runs the new size. Restart the scans you stopped. If the command exits with any other code, see [If the Resize Stops](#if-the-resize-stops).

### What the Resize Does

1. Checks the server's CPU cores and RAM against the new size. It counts only server nodes that are Ready, not cordoned, and carry no `NoSchedule` or `NoExecute` taint. [Agent](../configuration/agents/index.md) nodes don't count. If the server lacks either, the command names the shortfall and stops without changing anything.
2. Checks every volume claim and grows the ones the storage can grow. See [What Happens to the Volumes](#what-happens-to-the-volumes).
3. Turns off automated sync on the `netwrix` application and records the new size on it.
4. Syncs `netwrix`, then waits until every application is Synced and Healthy. Each wait lasts up to 10 minutes.
5. Turns automated sync on `netwrix` back on, if it was on before the resize.

If the server is too small for the new size, the command stops at the first step and changes nothing. In this example, a server with 14 CPU cores and 29.4 GB of RAM refuses the **enterprise** size. It skips the agent node, prints each shortfall, and exits with code `1`:

```bash
sudo dspmctl resize enterprise
```

![dspmctl resize enterprise refusing because the server has too few CPU cores and too little RAM, then exiting with code 1](/images/accessanalyzer/26.1/install/resize-capacity.webp)

## What Happens to the Volumes

A resize never deletes, recreates, or shrinks a volume claim, so no data moves. What it does to an existing claim depends on the storage behind it.

| Storage | What `dspmctl resize` does |
|---|---|
| The default host-path storage (`local-path`), or a directory you passed to `--postgres-data-dir` or `--clickhouse-data-dir` | The claim keeps its size. A host-path volume can grow past the size of its claim, so it can already use the free disk on the storage volume. |
| A StorageClass with `allowVolumeExpansion: true` | Grows the claim in place before it records the new size. |
| Any other StorageClass, or a claim with no StorageClass | Refuses and changes nothing, because the new size's services can outgrow the volume. Pass `--skip-volume-check` to resize anyway and leave the claim at its size. |

A claim that has no volume yet, such as a backup claim before the backup's first run, keeps its size. It holds no data, so if you delete it, ArgoCD recreates it at the new size.

An expanded claim reports its new capacity after the storage driver finishes. Some drivers finish only when the pod that uses the volume restarts.

## Resize Options

Add these flags after the size, for example `sudo dspmctl resize large --timeout 20m`.

| Flag | Effect |
|---|---|
| `--skip-capacity-check` | Resize even when the server lacks the CPU cores or RAM for the new size. The command still runs the check and prints the shortfall. Add the missing CPU or RAM before the next upgrade. |
| `--skip-volume-check` | Resize even when a claim needs to grow and its StorageClass can't expand it. The claim keeps its size. |
| `--no-sync` | Record the new size without rolling it out. Claims still grow first, and a grown claim can't shrink again. Automated sync on `netwrix` stays off until you [finish the resize](#finish-a-resize). You can't combine it with `--timeout`. |
| `--timeout <duration>` | How long each wait lasts, such as `20m`. The default is `10m`. |

## If the Resize Stops

| Exit code | Meaning | What to do |
|---|---|---|
| `0` | Every application runs the new size. | Nothing. |
| `1` | The command refused to resize, or the rollout didn't finish in time. A refusal before the rollout changes nothing. If the rollout started, the new size stays recorded, automated sync on `netwrix` stays off, and the message names what didn't finish. | Read the message. For a refusal, fix the cause and run the command again. For a rollout that didn't finish, [finish the resize](#finish-a-resize). |
| `2` | The command line isn't valid, such as an unknown size or flag. Nothing changed. | Check the command. An unknown size lists the sizes `resize` accepts. |

The command also refuses with exit code `1` when it can't read node capacity, a volume claim, or the claim's StorageClass. Check that the `dspmctl` pod is running in the `argocd` namespace, then run the command again.

### Finish a Resize

When a resize stops after it records the new size, or after you ran it with `--no-sync`, apply the size and turn automated sync back on:

```bash
sudo dspmctl sync netwrix
sudo dspmctl enable-auto netwrix
```

Then [check the result](#check-the-result).

:::warning
Don't uninstall and reinstall Access Analyzer to recover from a failed resize. `dspm-installer --uninstall` permanently deletes all Access Analyzer data. Finish the resize instead.
:::

## Grow Volumes an Earlier Resize Didn't Grow

A resize with an earlier release of `dspmctl` changed CPU and RAM but left the volume claims at their original size. A StatefulSet can also recreate a claim at the size the install started with. To grow those claims, run `resize` with the size the install already records. The command grows every claim that's smaller than that size where the storage allows it, and changes nothing else: it records no new size and runs no sync.

1. Read the recorded size:

   ```bash
   sudo kubectl -n argocd get app netwrix -o jsonpath='{.spec.source.helm.parameters[?(@.name=="config.sizingTier")].value}{"\n"}'
   ```

   An empty result means the install records no size and counts as **medium**.

2. Run `resize` with that size. For example, if the command printed `large`:

   ```bash
   sudo dspmctl resize large
   ```

If automated sync on `netwrix` is off, the command says so. Run `sudo dspmctl enable-auto netwrix` to turn it back on.

## Check the Result

List the volume claims with their requested size, their actual capacity, and their StorageClass:

```bash
sudo kubectl get pvc -n access-analyzer -o custom-columns='NAME:.metadata.name,REQUESTED:.spec.resources.requests.storage,CAPACITY:.status.capacity.storage,SC:.spec.storageClassName'
```

Check that automated sync is on for `netwrix`:

```bash
sudo dspmctl auto-status
```

On the default host-path storage, every claim shows `local-path` and keeps its original size:

![The volume claim list with requested size, capacity, and StorageClass, followed by dspmctl auto-status showing automated sync on for every app](/images/accessanalyzer/26.1/install/resize-check.webp)

Confirm every pod is running before you restart scans:

```bash
sudo kubectl get pods -n access-analyzer
```
