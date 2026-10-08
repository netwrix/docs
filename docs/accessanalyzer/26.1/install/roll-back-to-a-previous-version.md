---
title: Rolling Back to a Previous Version
description: Move Access Analyzer back to an earlier release with the Settings page or dspmctl, what a rollback does and doesn't do, and how to recover if it fails.
sidebar_position: 4.1
---

If an upgrade causes problems, you can move Access Analyzer back to an earlier release. There's no dedicated `down` or `downgrade` command. A rollback re-points ArgoCD at the older release, using the same mechanism as an upgrade.

:::warning
A rollback changes your database schema. The database setup job (`db-seeds`) runs the newer release's stored down migrations against both Postgres and ClickHouse, and those migrations can drop columns and tables. The backup in [Before you roll back](#before-you-roll-back) covers Postgres only, so ClickHouse (scan results and reporting data) has no backup. Read that section first.
:::

## Before You Roll Back

1. **Confirm the last upgrade finished cleanly.** If an earlier upgrade failed partway through its database migrations, the schema is marked dirty and `db-seeds` refuses to roll back. Fix that failure first, or contact Netwrix Support.
2. **Take a database backup.** Trigger an on-demand Postgres backup and wait for it to finish:

   ```bash
   sudo kubectl create job --from=cronjob/postgres-backup pre-rollback-backup -n access-analyzer
   sudo kubectl get jobs -n access-analyzer -w
   ```

   This backs up Postgres only. It doesn't include ClickHouse (scan results and reporting data), and a rollback can change the ClickHouse schema too.
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

This pins the install to the version you chose. Selecting a version also clears the annotation that lets the automatic updater move the install, so you don't need the extra step the `dspmctl` method requires. Automatic updates stop until you [resume them](#resume-automatic-updates).

Air-gapped installs don't show a version picker. Use `dspmctl` instead.

## Roll Back With dspmctl

Run these commands on the install host. `dspmctl` needs `sudo` because only root can read the k3s kubeconfig.

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

   Skip this step and the updater upgrades the install back to the newest release within 12 hours. Removing the annotation takes the install off automatic updates until you [resume them](#resume-automatic-updates).

3. Apply the change:

   ```bash
   sudo dspmctl sync netwrix --prune
   ```

   `--prune` deletes resources the older release doesn't include. Without it, those leftover resources can keep the app showing as not healthy after the rollback completes.

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

It also prints a rollback command when it finishes, and when it fails after switching versions. That command is the short form: it runs `sync` without `--prune`. Add `--prune` as in step 3 of the `dspmctl` procedure.

Online upgrades don't record this. Check the release notes or your change records.

## Resume Automatic Updates

Connected installs only. After a rollback, the install stays on the version you chose. To return to automatic updates, set the revision to a version constraint again:

```bash
sudo dspmctl set-revision netwrix '1.*'
```

The updater adopts the constraint and restores its annotation itself. You don't add it back by hand.

## Air-Gapped: Redeploy Older Offline Media

A `dspmctl` rollback works only while the older release's charts and images are still in the cluster. They stay there after an upgrade, so this is normally the case. If they're gone, redeploy the older release's offline media:

```bash
sudo dspm-installer upgrade --bundle-dir /path/to/older-dspm-airgap-media --allow-downgrade --dry-run
sudo dspm-installer upgrade --bundle-dir /path/to/older-dspm-airgap-media --allow-downgrade
```

Without `--allow-downgrade`, `upgrade` refuses media that's the same as or older than the installed version, exits with code `16`, and changes nothing. The command also requires automated sync to be on. If a previous rollback left it off, run `sudo dspmctl enable-auto netwrix` first.

`upgrade` doesn't downgrade k3s or the offline package manager. If the media ships different versions, it prints a warning and keeps the installed ones.

## What a Rollback Doesn't Do

- **It doesn't restore dropped data.** `db-seeds` rolls the Postgres and ClickHouse schemas back to match the older release by running the down migrations that each release stores in the database. Those migrations can drop columns and tables, and the data in them is gone. Data created or changed on the newer release stays. To return to the data as it was before the upgrade, restore a backup taken before you upgraded. Support can help with that.
- **It doesn't downgrade the host.** It leaves k3s, ArgoCD's own version on connected installs, and the installer binary as they are.

## Troubleshooting

**`dspmctl` hangs at "Logging in to Argo CD ..."** A canceled `dspmctl` command can leave its pod stuck. Restart it and run the rollback again:

```bash
sudo kubectl rollout restart deploy/dspmctl -n argocd
sudo kubectl rollout status deploy/dspmctl -n argocd
```

**`db-seeds` fails with "database schema is ahead of this release's newest migration."** The stored down migrations are missing or the chain between the current schema and the older release is broken, so `db-seeds` can't roll back safely. Contact Netwrix Support. Don't edit the schema by hand: the stored down migrations are the source of truth for the rollback, and manual changes break the chain `db-seeds` validates.

**The install upgraded itself again after a rollback.** You skipped step 2 of the `dspmctl` rollback. Run it, then repeat steps 1, 3, and 4.

**`dspm-installer upgrade` exits with code 16 saying automated sync is off.** A previous rollback skipped `enable-auto`. Run `sudo dspmctl enable-auto netwrix` and retry.
