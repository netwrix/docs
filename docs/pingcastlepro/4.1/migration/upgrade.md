---
description: "Upgrade PingCastle Pro to a newer version."
sidebar_position: 10
sidebar_label: Upgrade guide
---
# PingCastle Pro Upgrade Guide

:::warning
PingCastle Pro 4.1 requires ASP.NET Core 10.0. Versions up to 3.5 use ASP.NET Core 8.0. Before you upgrade from 3.5 or earlier, install the ASP.NET Core 10.0 Hosting Bundle on the server. See [Software requirements](#software-requirements).
:::

## Before proceeding to the upgrade

**Version check**

You can check the existing version using the About link at the bottom of
each page.

![Une image contenant texte Description générée automatiquement](/images/pingcastlepro/4.1/proupgrade/image2.webp)

![Une image contenant texte Description générée automatiquement](/images/pingcastlepro/4.1/proupgrade/image3.webp)

## Database backup

Netwrix highly recommends backing up the data before proceeding with an upgrade.

PingCastle Pro stores the data in the database. No data exists outside the database.

## Software requirements

Before performing the upgrade, you must meet the software requirements
for the new version. The following table lists the requirements for each
version.

| Upgrade path | Requirement |
|---|---|
| Any 2.x version | All versions have the same requirements. |
| 2.x to 3.2 | Upgrade ASP.NET from 3.1 to 6.0. |
| 3.2 to 3.5 | Upgrade ASP.NET from 6.0 to 8.0. |
| 3.5 to 4.1 | Upgrade ASP.NET from 8.0 to 10.0. Install the ASP.NET Core 10.0 Hosting Bundle before you replace the files. |

## Performing the upgrade

:::note
If PingCastle Pro connects to the database with a limited-privilege account (read, modify, and delete only), contact Netwrix Support for the SQL script to apply before you replace the files. PingCastle Pro can't create or alter tables without database-owner permissions. If the database user is the database owner, you don't need the script. PingCastle Pro creates or modifies tables automatically the first time it runs after the upgrade.
:::

To upgrade PingCastle Pro:

1. Download the ZIP file for the new version.
2. On the server where PingCastle Pro is installed, open a command prompt as an administrator and stop IIS:

   ```cmd
   iisreset /stop
   ```

3. Extract the ZIP file over the installation directory, overwriting the existing files.
4. Start IIS:

   ```cmd
   iisreset /start
   ```

:::note
The MSI installer doesn't support upgrades. Use the ZIP file.
:::

## Post-upgrade verification

After the upgrade completes:

1. Confirm the application starts successfully.
2. Check the About link at the bottom of the page to confirm the version number matches the version you installed.
3. Confirm your settings in `appsettings.Production.json` are unchanged, since the upgrade doesn't remove or reset this file.
4. Confirm the database is intact. Upgrading, like uninstalling, doesn't remove the database.
