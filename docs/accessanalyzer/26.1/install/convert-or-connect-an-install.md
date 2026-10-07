---
title: Convert or Connect an Install
description: How to convert a registry install onto downloaded media, or connect an air-gapped install so it can check for and download upgrades.
sidebar_position: 4.2
---

Two commands change how an existing install gets its upgrades. Both run on the server with `dspm-installer upgrade`, and neither reinstalls Access Analyzer.

| You have | You want | Use |
|---|---|---|
| A registry install (made before media installs, or with `DSPM_MEDIA_INSTALL=false`) | Upgrades from downloaded media, like any connected install | [`--migrate`](#convert-a-registry-install) |
| An air-gapped install on a host that now has internet access | Upgrades from the **Settings** page, automatically, or with `upgrade --download` | [`--connect`](#connect-an-air-gapped-install) |

Both commands need the `dspm-installer` binary from the release you're moving to. See [Download the installer](run-the-installer.md#download-the-installer).

## Convert a Registry Install

A cluster installed from the registry can move onto downloaded media without a reinstall. Later upgrades then work as on any connected media install. The cluster stays online throughout.

```bash
sudo dspm-installer upgrade --download --migrate
```

To convert to a specific release, add `--target-revision`. You can also convert without changing release.

```bash
sudo dspm-installer upgrade --download --migrate --target-revision 1.5.0
```

`--download` reads the license key from `/etc/dspm/installer.yaml`. If the host has no saved key, pass the key through the environment, as [Upgrade from the host](upgrade-to-a-new-version.md#upgrade-from-the-host) shows.

### Before You Start

The command checks these conditions. If any fail, it exits with code `16` and changes nothing.

- The root application is healthy.
- No remote scanner nodes have joined. Remove them first.
- Automated sync is on.
- The `access-analyzer/dspm-license` Secret exists.
- The target release isn't older than the installed release or the installer.

### What the Conversion Does

1. Sets up the in-cluster registry and git server.
2. Loads the media over the running release and takes ownership of what's already there.
3. Switches the root application, and any child application that still points at the registry, to the in-cluster git server.
4. Turns automated sync back on and waits for every application to become healthy.
5. Deletes the old registry credentials (`argocd/keygen-oci-creds`).

You can re-run every step. If the conversion stops partway, run the same command again.

:::warning
A conversion has no way back to the registry.
:::

### Convert Automatically

To convert a cluster without running the command, set `versionPoller.migrateToMedia: true` in the apps chart. The version poller starts the conversion on its next run.

## Connect an Air-Gapped Install

An air-gapped install has no license and doesn't check for updates. If the host later gains internet access, connect it so it can upgrade like any connected install.

```bash
read -rs LICENSE_KEY && export LICENSE_KEY
sudo --preserve-env=LICENSE_KEY dspm-installer upgrade --connect
```

`--connect` checks the license key first. It exits with code `16` if the host can't reach `api.keygen.sh`, and with code `10` if Netwrix rejects the key. It then stores the key, turns on the version poller, and clears the air-gapped setting. Nothing redeploys. The cluster keeps running the release it has.

`--connect` takes only the license key, `--dry-run`, `--kubeconfig`, and `--timeout`. Add `--dry-run` to run the checks without changing anything.

Afterwards, upgrade from the **Settings** page, automatically, or with `upgrade --download`. See [Upgrade to a new version](upgrade-to-a-new-version.md).

`--connect` refuses a cluster installed from the registry, because that cluster needs [`--migrate`](#convert-a-registry-install), and a cluster that's already connected.

:::warning
Connecting has no way back to air-gapped short of a reinstall.
:::

## Troubleshooting

**The command exits with code `16`.** A precondition failed and nothing changed. Read the message, fix the condition, and run the command again.

**The command exits with code `10`.** Netwrix rejected the license key. Check the key and try again.
