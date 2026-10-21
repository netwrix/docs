---
sidebar_position: 3
sidebar_label: Settings migration
description: Migrate settings from pingcastle.exe.config to appsettings.console.json when you upgrade to version 3.5 or later.
---
# Settings Migration from pingcastle.exe.config

This migration happened in version 3.5 and applies only if you're upgrading from an earlier version. The `PingCastleAutoUpdater.exe` includes an automatic migration process:

1. **Run PingCastleAutoUpdater.exe** to download the update
2. **Verify the version** of PingCastle.exe matches the expected version
3. **Check the readme files** added or updated by the update
4. **Run PingCastleAutoUpdater.exe a second time** to trigger automatic migration

During migration:
- The updater automatically converts settings from `PingCastle.exe.config` (XML) to `appsettings.console.json` (JSON)
- The updater renames the original `PingCastle.exe.config` to `PingCastle.exe.config.bak` as a backup
- The updater generates a **Configuration Migration Report** detailing which sections it migrated

:::note
Visually review the migrated settings in `appsettings.console.json` to ensure they are correct. You don't lose any configuration context if the upgrade fails.
:::
