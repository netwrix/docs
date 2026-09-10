---
title: Upgrade to a New Version
description: How dspmctl upgrades Access Analyzer, when you need to run it, and how to check that an upgrade finished.
sidebar_position: 4
---

You upgrade Access Analyzer with `dspmctl` on the install host. `dspmctl` is a small shell wrapper the installer drops at `/usr/local/bin/dspmctl`. It runs `kubectl exec` into the `dspmctl` pod in the `argocd` namespace, and that pod signs in to ArgoCD and runs `argocd` commands for you. You don't need the `argocd` command-line interface (CLI) on the host.

Run it with `sudo`. The default kubeconfig at `/etc/rancher/k3s/k3s.yaml` is readable only by root, so without `sudo`, kubectl falls back to `localhost:8080` and fails with "connection refused."

## Check Whether You Need to Act

Start by checking which version is running:

```bash
sudo dspmctl version
```

Compare the output with the latest release Netwrix has announced. If they match, Access Analyzer is already up to date.

If they don't match, check how you installed the app. The installer's default `--target-revision` is `1.*`, a wildcard. If nobody pinned a specific version at install time, ArgoCD already tracks the newest stable 1.x tag and picks up new releases on its next sync. You don't need any `dspmctl` steps.

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

Wait one to five minutes for the pods to restart, then check the version again:

```bash
sudo dspmctl version
```

The output should show the version you set. Pod restarts take longer on a busy server, so if the version hasn't changed after five minutes, wait another two or three minutes and run the command again.

For a detailed view of the sync, ask ArgoCD directly:

```bash
sudo kubectl exec -n argocd -ti deploy/dspmctl -- argocd app get argocd/netwrix
```

Check `TARGET REVISION` and `Sync Status`. The `netwrix` app only manages the child `Application` resources; each child still has to sync on its own to roll new pods. A child with auto-sync enabled syncs shortly after the parent. Otherwise, sync it directly, for example:

```bash
sudo dspmctl sync netwrix.webapp
```

<details>
<summary>Troubleshooting: dspmctl hangs after a cancelled command</summary>

If you press Ctrl-C part-way through a `dspmctl` command (for example, after typing the wrong version), every later `dspmctl` call can hang at `Logging in to ArgoCD ...` and never return. Even `argocd version --client`, which needs no network at all, hangs, so the cause is local to the pod. Every `dspmctl` invocation runs inside the same long-lived `dspmctl` pod, and the interrupted run leaves the `argocd` binary in that pod unresponsive.

Restart that pod and re-run the upgrade:

```bash
sudo kubectl rollout restart deploy/dspmctl -n argocd
sudo kubectl rollout status deploy/dspmctl -n argocd
sudo kubectl exec -n argocd deploy/dspmctl -- argocd version --client   # should print instantly now
sudo dspmctl set-revision netwrix 1.1.2
sudo dspmctl sync netwrix
```

If `argocd version --client` still hangs after the restart, `dspmctl` isn't usable in that environment. Everything `dspmctl` does is an edit to the `netwrix` ArgoCD `Application` object, so make the same changes directly with `kubectl` from the host.

Pin the umbrella chart:

```bash
sudo kubectl patch application netwrix -n argocd --type merge \
  -p '{"spec":{"source":{"targetRevision":"1.1.2"}}}'
```

Set the Helm parameter that propagates the version to the child apps. List the parameters, find the 0-based position of `config.spec.source.targetRevision`, and use it as `N`:

```bash
sudo kubectl get application netwrix -n argocd \
  -o jsonpath='{range .spec.source.helm.parameters[*]}{.name}{"\n"}{end}'
sudo kubectl patch application netwrix -n argocd --type json \
  -p '[{"op":"replace","path":"/spec/source/helm/parameters/N/value","value":"1.1.2"}]'
```

Turn auto-sync back on and force an immediate refresh:

```bash
sudo kubectl patch application netwrix -n argocd --type merge \
  -p '{"spec":{"syncPolicy":{"automated":{"selfHeal":true,"prune":true}}}}'
sudo kubectl annotate application netwrix -n argocd argocd.argoproj.io/refresh=hard --overwrite
sudo kubectl get applications -n argocd -w
```

</details>
