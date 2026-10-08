---
title: Upgrade to a New Version
description: How to upgrade Access Analyzer from the Settings page, automatically, or with dspm-installer upgrade, including air-gapped and registry installs, rollback, exit codes, and how to check the result.
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

How you upgrade Access Analyzer depends on how you installed it.

| Install | How it upgrades |
|---|---|
| **Connected** (the default) | The upgrade downloads the new release's offline media from Netwrix, verifies it, and loads it into the cluster. Start it from the **Settings** page, let the version poller start it, or run `dspm-installer upgrade --download` on the host. |
| **Air-gapped** | You download the new media on a connected machine, copy it to the server, and run `dspm-installer upgrade --bundle-dir`. |
| **Registry** (a connected install made before media installs, or with `DSPM_MEDIA_INSTALL=false`) | ArgoCD pulls new releases from the Netwrix registry. You tell it which version to run with `dspmctl`. [Convert a registry install](convert-or-connect-an-install.md) to downloaded media to upgrade the same way as any connected install. |

Pick the tab that matches your install.

The installer installs `dspmctl` at `/usr/local/bin/dspmctl`. It's a small shell wrapper that runs `kubectl exec` into the `dspmctl` pod in the `argocd` namespace. That pod signs in to ArgoCD and runs `argocd` commands for you. You don't need the `argocd` command-line interface (CLI) on the host.

Run `dspmctl` and `dspm-installer` with `sudo`. The default kubeconfig at `/etc/rancher/k3s/k3s.yaml` is readable only by root, so without `sudo`, kubectl falls back to `localhost:8080` and fails with "connection refused."

:::note
On RHEL and similar distributions, `/usr/local/bin` usually isn't on the `PATH`, so `dspm-installer` and `dspmctl` can fail with `command not found`. Run them by their full paths instead, for example `sudo /usr/local/bin/dspm-installer` or `sudo /usr/local/bin/dspmctl`.
:::

## Check Which Version Is Running

Start by checking which version is running:

```bash
sudo dspmctl version
```

Compare the output with the latest release Netwrix has announced. If they match, Access Analyzer is already up to date.

## Upgrade

<Tabs groupId="install-mode">
<TabItem value="connected" label="Connected upgrade">

All three ways to upgrade a connected install run the same upgrade. Only one upgrade can run at a time.

### Upgrade from the Settings page

You need the **Administrator** role.

1. Go to **Settings** > **System**.
2. Select the version and click **Update**. The confirmation says the app downloads the release media and is briefly unavailable.
3. Watch the progress through these phases: **Checking prerequisites**, **Downloading media**, **Deploying**, and **Waiting for services**.
4. When the upgrade finishes, reload the page.

If the upgrade fails, the page shows the reason and what to do next.

| What you see | What it means |
|---|---|
| **Check the license** | Netwrix rejected the license. Nothing changed. |
| **The upgrade couldn't start**, **No release available**, or **Download failed** | Nothing changed. For a download failure, free some disk space and click **Retry**. |
| **Retry or contact support** | The installer couldn't load the media. Nothing changed. |
| **The upgrade failed while applying**, **The new version didn't become healthy**, or **The new version failed to start** | The cluster may have changed. Click **Roll back** to return to the previous version. |
| **Contact support** | The installer couldn't apply the new version. |

If another upgrade is already running, the page says so.

### Upgrade automatically

The version poller checks for new releases every 12 hours. When a newer release matches the install's version constraint and Netwrix has published its media, the poller starts the same upgrade the **Settings** page starts.

If an upgrade fails partway through deploying, the poller doesn't retry it. Fix the cause, then run `sudo dspm-installer upgrade --download` on the host.

### Upgrade from the host

Upgrade to the newest stable release:

```bash
sudo dspm-installer upgrade --download
```

Upgrade to a specific release:

```bash
sudo dspm-installer upgrade --download --target-revision 1.5.0
```

`--download` reads the license key from `/etc/dspm/installer.yaml`. On a host without a saved key, pass the key through the environment, as the install does:

```bash
read -rs LICENSE_KEY && export LICENSE_KEY
sudo --preserve-env=LICENSE_KEY dspm-installer upgrade --download
```

If the cluster already runs the newest release, the command prints `The cluster is already on the newest release (v<version>); nothing was changed.` and exits `0`. A scheduled run can use this to tell "nothing to do" apart from a failure.

Add `--dry-run` to check the preconditions and free space and print the upgrade plan without downloading anything.

### What an upgrade does

1. Checks the preconditions: the cluster runs from offline media, the root application's automated sync is on, the release is newer than the installed one, and the server has enough disk space. If any check fails, the upgrade exits with code `16` and changes nothing.
2. Downloads and checks the media, or reuses media already on disk.
3. Pauses automated sync, so ArgoCD doesn't act on a half-loaded release.
4. Removes images older than the previous release from the in-cluster registry. The registry keeps the current release and the one before it.
5. Loads the new charts and images into the cluster and points the root application at the new version.
6. Turns automated sync back on and waits for every application to become healthy.
7. Deletes the downloaded media.

If something interrupts the upgrade (Ctrl-C, a dropped SSH session, or a stopped pod), it turns automated sync back on before it exits. Run the same command again to finish the upgrade.

</TabItem>
<TabItem value="airgap" label="Air-gapped upgrade">

An air-gapped upgrade loads the new release into the cluster from the newer offline media archive. The upgrade reads only the cluster and the media, so it needs no network access. It upgrades the Access Analyzer services and ArgoCD. It doesn't upgrade the underlying k3s platform or the offline package manager. If the media targets a different version of either, the command prints a warning that names both versions and continues with the installed ones.

Before it changes anything, the command checks that the server runs from offline media, that the media carries a newer version than the one installed, and that automated sync is on for the `netwrix` app. If any check fails, it exits with code `16` and nothing in the cluster changes.

### Download the new release

Download the new installer and the new media the same way you did for the install, with the new release's version number.

:::warning
Download the latest `dspm-installer` binary along with the media, and run the upgrade with that binary. The `upgrade` command exists only in newer installers, and an installer from an older release can reject newer media. Confirm the version with `dspm-installer --version` after the download.
:::

1. Read your license key into an environment variable.

   ```bash
   read -rs LICENSE_KEY && export LICENSE_KEY
   ```

2. Download the installer and the offline media archive for the new release.

   ```bash
   ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
   VERSION='<release-version>'  # the release you're upgrading to, for example 1.6.0
   TMP_FILE=$(mktemp)
   curl -Lf -o "$TMP_FILE" \
     "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-installer-linux-$ARCH?auth=license:${LICENSE_KEY}&channel=stable"
   sudo install -m 0755 "$TMP_FILE" "/usr/local/bin/dspm-installer"
   rm -f "$TMP_FILE"
   dspm-installer --version

   sudo mkdir -p /etc/dspm/media
   sudo curl -Lf -o "/etc/dspm/media/dspm-airgap-media-v${VERSION}-${ARCH}.tar.gz" \
     "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-airgap-media-v${VERSION}-${ARCH}.tar.gz?auth=license:${LICENSE_KEY}&channel=stable"
   ```

   Don't extract the archive, and keep its name as downloaded. If the server has no network access, run these commands on a connected machine with the same architecture, then copy `/usr/local/bin/dspm-installer` and the archive to the server with `scp` or removable media. Keep the `channel=stable` parameter on every download. Without it, the registry can return a pre-release build.

3. Confirm the archive downloaded completely.

   ```bash
   ls -lh "/etc/dspm/media/dspm-airgap-media-v${VERSION}-${ARCH}.tar.gz"
   ```

   The file should be about 3.5 GB. If it's much smaller, the download didn't finish. Repeat step 2.

### Run the upgrade

1. Preview the upgrade. `--dry-run` validates the media and the preconditions and prints the planned changes without touching the cluster.

   ```bash
   sudo dspm-installer upgrade --bundle-dir /etc/dspm/media/dspm-airgap-media-v<version>-<arch>.tar.gz --dry-run
   ```

   The summary shows the installed version, the version in the media, and the k3s, offline package manager, and ArgoCD versions on each side. Fix anything it reports before you continue.

2. Run the upgrade.

   ```bash
   sudo dspm-installer upgrade --bundle-dir /etc/dspm/media/dspm-airgap-media-v<version>-<arch>.tar.gz
   ```

   The command loads the chart snapshot and container images into the cluster, applies the bundled ArgoCD manifest, and re-seeds the registry pull secret into every application namespace. It then re-pins the `netwrix` app to the new version and records the previous version in the `dspm.netwrix.com/previous-target-revision` annotation. Finally, it waits for every application to become Synced and Healthy. The wait defaults to 30 minutes. Pass `--timeout` with a duration such as `45m` to change it.

   Exit code `0` means the cluster runs the new release and every application is healthy. For any other code, see [Upgrade exit codes](#upgrade-exit-codes).

`--bundle-dir` takes the archive directly. An extracted media directory also works. `--allow-downgrade` lifts the "newer version" check for an intentional redeploy of the same version or a downgrade. `--kubeconfig` and `--argocd-namespace` override the defaults if you installed with non-default values. See [The `upgrade` command](installer-reference.md#the-upgrade-command) for every flag.

A host that later gains internet access can [connect the air-gapped install](convert-or-connect-an-install.md#connect-an-air-gapped-install) to upgrade like a connected install.

</TabItem>
<TabItem value="registry" label="Registry upgrade">

A registry install pulls releases from the Netwrix registry. To upgrade it with downloaded media instead, [convert it](convert-or-connect-an-install.md#convert-a-registry-install). Otherwise, follow these steps.

If the installed version doesn't match the latest release, check how you installed the app. The installer's default `--target-revision` is `1.*`, a wildcard. If nobody pinned a specific version at install time, ArgoCD already tracks the newest stable 1.x tag and picks up new releases on its next sync. You don't need any `dspmctl` steps.

If you pinned a specific version at install time, or want to pin one now, follow these steps.

1. Point the umbrella app at the new version.

   ```bash
   sudo dspmctl set-revision netwrix 1.1.2
   ```

   For the `netwrix` app, this command does three things. It turns off automated sync and self-heal, sets `targetRevision` to `1.1.2`, and sets the Helm parameter `config.spec.source.targetRevision=1.1.2` so every child application (webapp, core-api, and so on) gets the same version.

2. Trigger the sync. `set-revision` disables auto-sync, so nothing deploys until you run this command.

   ```bash
   sudo dspmctl sync netwrix --prune
   ```

   `--prune` deletes resources the new release no longer includes. Without it, those leftover resources can keep the app showing as not healthy even after the upgrade completes.

3. Turn auto-sync back on so later releases in the pinned range deploy without manual steps.

   ```bash
   sudo dspmctl enable-auto netwrix
   ```

   `enable-auto` changes only the sync policy. It doesn't force a reconcile, and the ArgoCD controller polls roughly every 3 minutes. If you ran only `enable-auto` and nothing changed yet, run `sync`.

</TabItem>
</Tabs>

## Roll Back an Upgrade

<!-- TODO: link to roll-back-to-a-previous-version once #1589 merges -->

On a connected install, when an upgrade fails after it starts applying the new version, the **Settings** page offers **Roll back**. The button points the install back at the version the upgrade started from.

From the host, a rollback is a re-pin. The previous chart tag and images stay in the cluster, so you don't need the old media. The in-cluster registry keeps only the previous release's images, so a rollback works one release back. To roll back further, you need that release's media again.

Read the previous version from the annotation, then run all three `dspmctl` commands. `set-revision` turns off automated sync so self-heal doesn't immediately re-sync the new version, `sync` applies it, and `enable-auto` turns automated sync back on. If you skip `enable-auto`, the `netwrix` app never syncs again, and the next `dspm-installer upgrade` refuses to run.

```bash
sudo kubectl -n argocd get application netwrix \
  -o jsonpath='{.metadata.annotations.dspm\.netwrix\.com/previous-target-revision}'
sudo dspmctl set-revision netwrix v<previous>
sudo dspmctl sync netwrix --prune
sudo dspmctl enable-auto netwrix
sudo dspm-installer wait-for-apps
```

:::warning
A re-pin doesn't roll back database schema changes the new release made.
:::

## Upgrade Exit Codes

| Code | Meaning | What to do |
|---|---|---|
| `0` | The cluster runs the new release and every application is Synced and Healthy, or the cluster already runs the newest release. | Nothing. |
| `10` | Netwrix rejected the license key. | Check the key, then run the command again. |
| `15` | The command couldn't load or deploy the media. The cluster is still on the previous release. | Fix the cause and run the command again. The deploy is idempotent. |
| `16` | A precondition failed, such as no cluster or root application, the install type doesn't match the command, the release isn't newer, automated sync is off, or the media volume lacks free space. Nothing changed. | Read the message. For automated sync, run `sudo dspmctl enable-auto netwrix` first. For a same-version redeploy, add `--allow-downgrade`. For free space, free space on the media volume or use `--tmp-dir`. |
| `17` | The command couldn't download, verify, or unpack the media. Nothing changed. | Run the command again. It resumes the download. |
| `20` | No release matches `--target-revision`, or the release has no media for this architecture. | Check the release number. |
| `60` | The command couldn't apply the new version, couldn't switch to the in-cluster source, or couldn't turn automated sync back on. | Check `/var/log/dspm-installer.log`, run `sudo dspmctl enable-auto netwrix`, and run the command again. |
| `70` | The new version applied, but ArgoCD didn't acknowledge it or the release didn't become healthy within `--timeout`. The new pin stays in place and ArgoCD keeps reconciling. | Run `sudo dspm-installer wait-for-apps` to keep waiting, or [roll back](#roll-back-an-upgrade). |
| `71` | A pod failed to start. | Check the failing pod with `sudo kubectl get pods -A`, then roll back or fix the cause and run the command again. |

## Troubleshooting an Upgrade

**Automated sync is still off after a failed upgrade.** Run the same upgrade command to finish it, or turn sync back on with `sudo dspmctl enable-auto netwrix`.

**An upgrade exits with code `70`, and running it again says the cluster is already on that version.** The new version is in place but wasn't healthy in time. Run `sudo dspm-installer wait-for-apps`.

**The upgrade stops with exit code `16` about free space.** Free space on the media volume, or point the media elsewhere with `--tmp-dir`. The check counts media from other releases as free, because the upgrade deletes them, but it deletes nothing unless the check passes.

**The progress bar shows garbled characters.** Run with `--progress ascii`, or set `DSPM_PROGRESS=ascii`.

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
sudo dspmctl sync netwrix --prune
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
