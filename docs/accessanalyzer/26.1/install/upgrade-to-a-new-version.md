---
title: Upgrade to a New Version
description: How dspmctl upgrades Access Analyzer, when you need to run it, and how to check that an upgrade finished.
sidebar_position: 4
---

You upgrade Access Analyzer with `dspmctl` on the install host. `dspmctl` is a small shell wrapper the installer drops at `/usr/local/bin/dspmctl`. It runs `kubectl exec` into the `dspmctl` pod in the `argocd` namespace, and that pod signs in to ArgoCD and runs `argocd` commands for you. You don't need the `argocd` command-line interface (CLI) on the host.

Run it with `sudo`. The default kubeconfig at `/etc/rancher/k3s/k3s.yaml` is readable only by root, so without `sudo`, kubectl falls back to `localhost:8080` and fails with "connection refused."

## Check Whether You Need to Act

Check how you installed the app. The installer's default `--target-revision` is `1.*`, a wildcard. If nobody pinned a specific version at install time, ArgoCD already tracks the newest stable 1.x tag and picks up new releases on its next sync. You don't need any `dspmctl` steps.

If you pinned a specific version at install time, or want to pin one now, follow these steps.

## Steps

1. Point the umbrella app at the new version.

   ```bash
   sudo dspmctl set-revision netwrix 1.1.2
   ```

   For the `netwrix` app, this does three things: turns off automated sync and self-heal, sets `targetRevision` to `1.1.2`, and sets the Helm parameter `config.spec.source.targetRevision=1.1.2` so every child application (webapp, core-api, and so on) gets the same version.

2. Trigger the sync. `set-revision` disables auto-sync, so nothing deploys until you run this command.

   ```bash
   sudo dspmctl sync netwrix
   ```

3. Turn auto-sync back on so later releases in the pinned range deploy without manual steps.

   ```bash
   sudo dspmctl enable-auto netwrix
   ```

   `enable-auto` only changes the sync policy. It doesn't force a reconcile, and the ArgoCD controller polls roughly every 3 minutes. If you ran only `enable-auto` and nothing changed yet, run `sync`.

## Checking the Result

```bash
sudo kubectl exec -n argocd -ti deploy/dspmctl -- argocd app get argocd/netwrix
```

Check `TARGET REVISION` and `Sync Status`. The `netwrix` app only manages the child `Application` resources; each child still has to sync on its own to roll new pods. A child with auto-sync enabled syncs shortly after the parent. Otherwise, sync it directly, for example:

```bash
sudo dspmctl sync netwrix.webapp
```
