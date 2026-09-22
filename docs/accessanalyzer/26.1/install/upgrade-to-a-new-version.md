---
title: Upgrade to a New Version
description: How to upgrade an airgap install with new offline media and dspm-installer upgrade, or an online install with dspmctl, and how to check that the upgrade finished.
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

How you upgrade Access Analyzer depends on the mode you installed it in. An **airgap** install has no network access, so you download the new release's offline media on a connected machine, move it to the server, and run `dspm-installer upgrade` to load it into the cluster. An **online** install pulls new releases from the network, so you only tell ArgoCD which version to run, using `dspmctl`. Pick the tab that matches your install.

Both modes use `dspmctl`, a small shell wrapper the installer drops at `/usr/local/bin/dspmctl`. It runs `kubectl exec` into the `dspmctl` pod in the `argocd` namespace, and that pod signs in to ArgoCD and runs `argocd` commands for you. You don't need the `argocd` command-line interface (CLI) on the host.

Run `dspmctl` and `dspm-installer` with `sudo`. The default kubeconfig at `/etc/rancher/k3s/k3s.yaml` is readable only by root, so without `sudo`, kubectl falls back to `localhost:8080` and fails with "connection refused."

## Check Which Version Is Running

Start by checking which version is running:

```bash
sudo dspmctl version
```

Compare the output with the latest release Netwrix has announced. If they match, Access Analyzer is already up to date.

## Upgrade

<Tabs groupId="install-mode">
<TabItem value="airgap" label="Airgap upgrade">

An airgap upgrade loads the new release into the cluster from a newer offline media bundle. `dspm-installer upgrade` reads only the cluster and the media: it doesn't read or write `/etc/dspm/installer.yaml`, and the wizard, preflight checks, and platform setup never run. It upgrades the Access Analyzer services and ArgoCD. It doesn't upgrade the underlying k3s platform or the offline package manager; if the media targets a different version of either, the command prints a warning naming both versions and continues with the installed ones.

Before it changes anything, the command checks that the server has an airgap install, that the media carries a newer version than the one installed, and that automated sync is on for the `netwrix` app. If any check fails, it exits with code `16` and the cluster is untouched.

### Download the new release

Download the new installer and the new media the same way you did for the install, with the new release's version number.

:::warning
Download the latest `dspm-installer` binary along with the media, and run the upgrade with that binary. The `upgrade` command only exists in newer installers, and an installer from an older release can reject newer media. Confirm with `dspm-installer --version` after the download.
:::

1. Export your license key.

   ```bash
   export LICENSE_KEY='<license-key>'
   ```

2. Download the installer and the offline media for the new release. Clear `/etc/dspm/dspm-media` first so files from the release you installed don't mix with the new ones.

   ```bash
   ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
   VERSION='<release-version>'  # the release you're upgrading to, for example 1.6.0
   TMP_FILE=$(mktemp)
   curl -Lf -o "$TMP_FILE" \
     "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-installer-linux-$ARCH?auth=license:${LICENSE_KEY}&channel=stable"
   sudo install -m 0755 "$TMP_FILE" "/usr/local/bin/dspm-installer"
   rm -f "$TMP_FILE"
   dspm-installer --version

   sudo rm -rf /etc/dspm/dspm-media
   sudo mkdir -p /etc/dspm/dspm-media
   curl -Lf \
     "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-airgap-media-v${VERSION}-${ARCH}.tar.gz?auth=license:${LICENSE_KEY}&channel=stable" \
     | sudo tar -xzf - -C /etc/dspm/dspm-media
   ```

   If the server has no network access, run these commands on a connected machine with the same architecture, then copy `/usr/local/bin/dspm-installer` and `/etc/dspm/dspm-media` to the server with `scp` or removable media. Keep the `channel=stable` parameter on every download; without it, the registry can return a pre-release build.

3. Confirm the media extracted correctly.

   ```bash
   ls /etc/dspm/dspm-media/manifest.json
   ```

   If this file is missing, the extraction failed or the tarball didn't download completely. Repeat step 2.

### Run the upgrade

1. Preview the upgrade. `--dry-run` validates the media and the preconditions and prints the planned changes without touching the cluster.

   ```bash
   sudo dspm-installer upgrade --bundle-dir /etc/dspm/dspm-media --dry-run
   ```

   The summary shows the installed version, the version in the media, and the k3s, offline package manager, and ArgoCD versions on each side. Fix anything it reports before you continue.

2. Run the upgrade.

   ```bash
   sudo dspm-installer upgrade --bundle-dir /etc/dspm/dspm-media
   ```

   The command loads the chart snapshot and container images into the cluster, applies the bundled ArgoCD manifest, re-seeds the registry pull secret into every application namespace, then re-pins the `netwrix` app to the new version and records the previous version in the `dspm.netwrix.com/previous-target-revision` annotation. It then waits for every application to become Synced and Healthy. The wait defaults to 30 minutes; pass `--timeout` with a duration such as `45m` to change it.

   Exit code `0` means the cluster is running the new release with every application healthy. For any other code, see [Upgrade exit codes](#upgrade-exit-codes).

`--allow-downgrade` lifts the "newer version" check for an intentional redeploy of the same version or a downgrade. `--kubeconfig` and `--argocd-namespace` override the defaults if you installed with non-default values. See [The `upgrade` command](installer-reference.md#the-upgrade-command) for every flag.

### Roll back an airgap upgrade

A rollback is a re-pin. The previous chart tag and images stay in the cluster, so you don't need the old media. Read the previous version from the annotation, then run all three `dspmctl` commands: `set-revision` turns off automated sync so self-heal doesn't immediately re-sync the new version, `sync` applies it, and `enable-auto` turns automated sync back on. Skip `enable-auto` and the `netwrix` app never syncs again, and the next `dspm-installer upgrade` refuses to run.

```bash
sudo kubectl -n argocd get application netwrix \
  -o jsonpath='{.metadata.annotations.dspm\.netwrix\.com/previous-target-revision}'
sudo dspmctl set-revision netwrix v<previous>
sudo dspmctl sync netwrix
sudo dspmctl enable-auto netwrix
sudo dspm-installer wait-for-apps
```

:::warning
A re-pin doesn't roll back database schema changes the new release made. This is the same limitation an online rollback has.
:::

### Upgrade exit codes

| Code | Meaning | What to do |
|---|---|---|
| `0` | The cluster is running the new release, and every application is Synced and Healthy. | Nothing. |
| `15` | The command couldn't load the media, or the offline package manager failed to deploy it. | Fix the cause and run the command again. The deploy is idempotent, and the cluster is still on the previous release. |
| `16` | A precondition failed: no cluster or root application, not an airgap install, the media isn't a newer version, or automated sync is off. Nothing changed. | Read the message. For automated sync, run `sudo dspmctl enable-auto netwrix` first. For a same-version redeploy, add `--allow-downgrade`. |
| `60` | The command couldn't re-apply the ArgoCD overlay, or the re-pin failed. | Check `/var/log/dspm-installer.log` and run the command again. |
| `70` | The re-pin applied, but ArgoCD didn't acknowledge it or the new release didn't become healthy within `--timeout`. The new pin stays in place and ArgoCD keeps reconciling. | Run `sudo dspm-installer wait-for-apps` to keep waiting, or follow [Roll back an airgap upgrade](#roll-back-an-airgap-upgrade). |
| `71` | A pod entered a terminal failure state. | Check the failing pod with `sudo kubectl get pods -A`, then roll back or fix the cause and run the command again. |

</TabItem>
<TabItem value="online" label="Online upgrade">

If the installed version doesn't match the latest release, check how you installed the app. The installer's default `--target-revision` is `1.*`, a wildcard. If nobody pinned a specific version at install time, ArgoCD already tracks the newest stable 1.x tag and picks up new releases on its next sync. You don't need any `dspmctl` steps.

If you pinned a specific version at install time, or want to pin one now, follow these steps.

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

</TabItem>
</Tabs>

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

If you press Ctrl-C during a `dspmctl` command part-way through (for example, after typing the wrong version), every later `dspmctl` call can hang at `Logging in to ArgoCD ...` and never return. Even `argocd version --client`, which needs no network at all, hangs, so the cause is local to the pod. Every `dspmctl` invocation runs inside the same long-lived `dspmctl` pod, and the interrupted run leaves the `argocd` binary in that pod unresponsive.

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
