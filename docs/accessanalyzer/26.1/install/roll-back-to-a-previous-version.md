---
title: Rolling Back to a Previous Version
description: Move Access Analyzer back to an earlier release with the Settings page or dspmctl, what a rollback does and doesn't do, and how to recover if it fails.
sidebar_position: 4.1
---

If an upgrade causes problems, you can move Access Analyzer back to an earlier release. There's no dedicated `down` or `downgrade` command. A rollback re-points ArgoCD at the older release, using the same mechanism as an upgrade.

:::warning
A rollback changes the application, not your data. Database schema changes made by the newer release stay in place. If the newer release changed the schema, the older release may fail to start against it. Read [Before you roll back](#before-you-roll-back) first.
:::

## Before You Roll Back

1. **Find out whether the upgrade changed the database schema.** Check the release notes for every version between the one you're on and the one you want to go back to, or ask Netwrix Support. If any of them changed the schema, don't roll back on your own. Contact Netwrix Support.
2. **Take a database backup.** Trigger an on-demand Postgres backup and wait for it to finish:

   ```bash
   sudo kubectl create job --from=cronjob/postgres-backup pre-rollback-backup -n access-analyzer
   sudo kubectl get jobs -n access-analyzer -w
   ```

   This backs up Postgres only. It doesn't include ClickHouse (scan results and reporting data).
3. **Note the version you're rolling back to**, for example `1.1.2`.

## Choose a Method

| Install type | Method |
|---|---|
| Connected to the internet | [Settings page](#roll-back-from-the-settings-page) (recommended) or [`dspmctl`](#roll-back-with-dspmctl) |
| Air-gapped | [`dspmctl`](#roll-back-with-dspmctl), or [older offline media](#air-gapped-redeploy-older-offline-media) if the older release is no longer in the cluster |

## Roll Back From the Settings Page

You need the **Administrator** role.

1. Go to **Settings > System**.
2. Under the application version, select the version to roll back to.
3. Select **Update**. The confirmation dialog warns: "You are moving to an older version. Downgrading may result in data loss. Consult Netwrix Support before making this change."
4. Select **Update** to confirm.

The app is unavailable for a short time while it redeploys. Reload the page when it finishes.

This pins the install to the version you chose. Automatic updates stop until you select a version again.

Air-gapped installs don't show a version picker. Use `dspmctl` instead.

## Roll Back With dspmctl

Run these commands on the install host. `dspmctl` needs `sudo` because the k3s kubeconfig is readable only by root.

1. Pin the root application to the older version:

   ```bash
   sudo dspmctl set-revision netwrix <version>
   ```

   Use the version format your install uses:

   | Install type | Format | Example |
   |---|---|---|
   | Connected | no `v` prefix | `1.1.2` |
   | Air-gapped | `v` prefix | `v1.1.2` |

   `set-revision` also turns off automated sync, so ArgoCD doesn't undo the change.

2. **Connected installs only:** stop the automatic updater from upgrading you again:

   ```bash
   sudo kubectl annotate application netwrix -n argocd dspm.netwrix.com/target-revision-managed-by-
   ```

   Skip this step and the updater upgrades the install back to the newest release within 12 hours. The command prints `annotation ... unannotated` on success, or `not found` if the annotation was already absent. Both are fine.

3. Apply the change:

   ```bash
   sudo dspmctl sync netwrix
   ```

4. Turn automated sync back on:

   ```bash
   sudo dspmctl enable-auto netwrix
   ```

   :::warning
   Don't skip this step. Without it, the root application never syncs again, and later upgrades, including an air-gapped `dspm-installer upgrade`, stop working.
   :::

5. Wait for every application to become healthy:

   ```bash
   sudo dspm-installer wait-for-apps
   ```

## Find the Previous Version (Air-Gapped)

`dspm-installer upgrade` records the version it upgraded from on the root application:

```bash
sudo kubectl -n argocd get application netwrix \
  -o jsonpath='{.metadata.annotations.dspm\.netwrix\.com/previous-target-revision}'
```

It also prints the exact rollback command when it finishes, and when it fails after switching versions.

Online upgrades don't record this. Check the release notes or your change records.

## Air-Gapped: Redeploy Older Offline Media

A `dspmctl` rollback works only while the older release's charts and images are still in the cluster. They stay there after an upgrade, so this is normally the case. If they're gone, redeploy the older release's offline media:

```bash
sudo dspm-installer upgrade --bundle-dir /path/to/older-dspm-airgap-media --allow-downgrade --dry-run
sudo dspm-installer upgrade --bundle-dir /path/to/older-dspm-airgap-media --allow-downgrade
```

Without `--allow-downgrade`, `upgrade` refuses media that's the same as or older than the installed version, exits with code `16`, and changes nothing. The command also requires automated sync to be on. If a previous rollback left it off, run `sudo dspmctl enable-auto netwrix` first.

`upgrade` doesn't downgrade k3s or the offline package manager. If the media targets different versions, it prints a warning and keeps the installed ones.

## What a Rollback Does Not Do

- **It doesn't reverse database schema changes.** The older release starts against the newer schema. If the newer release added Postgres migrations, expect the database setup job (`db-seeds`) to fail on the older release because it doesn't recognize the schema version. Contact Netwrix Support. Don't try to fix the schema by hand.
- **It doesn't restore data.** Data created or changed on the newer release stays. To return to the data as it was before the upgrade, restore a backup taken before you upgraded. Support can help with that.
- **It doesn't downgrade the host.** It leaves k3s, ArgoCD's own version on connected installs, and the installer binary as they are.

## Troubleshooting

**`dspmctl` hangs at "Logging in to ArgoCD ..."** A canceled `dspmctl` command can leave its pod stuck. Restart it and run the rollback again:

```bash
sudo kubectl rollout restart deploy/dspmctl -n argocd
sudo kubectl rollout status deploy/dspmctl -n argocd
```

**The install upgraded itself again after a rollback.** Step 2 of the `dspmctl` rollback didn't run. Run it, then repeat steps 1, 3, and 4.

**`dspm-installer upgrade` exits with code 16 saying automated sync is off.** A previous rollback skipped `enable-auto`. Run `sudo dspmctl enable-auto netwrix` and retry.
