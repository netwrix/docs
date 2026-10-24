---
title: "Upgrade Privilege Secure"
description: "Upgrade Privilege Secure from 25.12, 26.03, or an earlier 26.07 release to 26.07, including the pre-upgrade checks and the known issues to expect."
sidebar_position: 110
---

# Upgrade Privilege Secure

Use this page to upgrade Netwrix Privilege Secure for Access Management (Privilege Secure) to 26.07. You can upgrade from these releases:

- 25.12
- 26.03
- An earlier 26.07 release

Each path uses the same installer, `NPS_Setup.exe`, and installs over the existing version. You don't uninstall the previous version first. The Setup Launcher moves PostgreSQL 12 data to PostgreSQL 16 when needed, and the installer updates the database schema.

:::warning
Don't cancel, close, or stop the installer during an upgrade. The upgrade updates both the application and the database, and it can take a long time when the database is large. Stopping it can damage the database and cause data loss.
:::

## Before you upgrade

Complete these checks on the application server before you start.

1. Back up the database. Also back up your encryption keys. See [Back up and recover](/docs/privilegesecure/26.07/install/high-availability.md#back-up-and-recover).
2. Install PowerShell 7.6 or later. The `NPS.exe` installer stops without it, and the Setup Launcher doesn't warn you. See [Application server requirements](/docs/privilegesecure/26.07/requirements/application-server.md).
3. Back up the SAML templates. See [Back up the SAML templates](#back-up-the-saml-templates).
4. Record any changes you made to permanent command plans. The upgrade overwrites them. See [Permanent command plans](#permanent-command-plans).
5. Check the **NPS Rest URL** for a trailing slash. See [Check the NPS Rest URL](#check-the-nps-rest-url).
6. If you upgrade from a release earlier than 26.07.3, don't delete and re-create the default activity groups. See [Default activity groups](#default-activity-groups).
7. If you run a high availability pair or remote service nodes, read the [high availability upgrade article](/docs/kb/privilegesecure/high-availability-and-clustering/configuring-and-upgrading-in-high-availability-mode-and-using-remote-services-configurations) before you begin.

{/* TODO verify: delete resources that have null host or platform values before you upgrade from 26.03. The 26.07.0 and 26.07.1 release notes reference this step, and the notes weren't in the source set. */}

### Back up the SAML templates

The files `SamlRequestTemplate.xml` and `SamlSignoutTemplate.xml` are in the `Web` folder of the installation folder. They hold your SAML customizations.

An upgrade keeps these files only when you upgrade from 26.03.2 or later. When you upgrade from a release earlier than 26.03.2, the upgrade overwrites them, and single sign-on can stop working. Copy both files to a safe location before you upgrade, and copy them back afterward if the upgrade replaced them.

For more about SAML settings, see [SAML authentication](/docs/privilegesecure/26.07/configuration/authentication/saml.md).

### Permanent command plans

Each upgrade imports the built-in permanent command plans again. The import overwrites any edits you made to them. Before you upgrade, record your edits, and reapply them afterward. See [Command plans](/docs/privilegesecure/26.07/resources/platforms/command-plans.md).

### Check the NPS Rest URL

A trailing slash in the **NPS Rest URL** can cause HTTP 500 errors or sessions that stay in the Provisioning status. Open the **Services** page in **System Settings**, check the URL, and remove a trailing slash if there is one. For example, enter `https://<nps-server>:6500` and not `https://<nps-server>:6500/`. See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md).

### Default activity groups

Privilege Secure creates two default activity groups: **Domain Administrator Access** and **Local Administrator Access**. If you upgrade from a release earlier than 26.07.3, don't delete these groups and then create new groups with the same names. The upgrade then fails with a duplicate key error. Release 26.07.3 fixes the problem. See [Troubleshoot installation and upgrade](/docs/privilegesecure/26.07/install/troubleshoot-installation.md).

## Upgrade the application server

1. Extract the Privilege Secure download zip file on the application server.
2. Run `NPS_Setup.exe` as an administrator. The Setup Launcher shows the installed version and the version you are installing.
3. If the launcher offers a PostgreSQL upgrade, complete [Upgrade PostgreSQL from 12 to 16](#upgrade-postgresql-from-12-to-16) first.
4. Click **Netwrix Privilege Secure Upgrade**.
5. When the launcher reports an existing installation, click **OK**. The launcher stops the services, uninstalls the old version, and installs the new version.
6. When the installer finishes, click **OK** to restart the server.
7. Clear the browser cache on the computers that use the Privilege Secure Console.
8. Open the console and sign in. The URL is `https://<nps-server>:6500`.
9. Check the **Service Nodes** page. If a node is offline, run **Register Services**. See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md).

{/* TODO screenshot: the Setup Launcher in its upgrade state, with the Netwrix Privilege Secure Upgrade button visible. */}

The upgrade rotates the encryption key automatically.

Upgrade each remote service node with its own installer. See the [high availability upgrade article](/docs/kb/privilegesecure/high-availability-and-clustering/configuring-and-upgrading-in-high-availability-mode-and-using-remote-services-configurations).

{/* TODO verify: upgrade steps on a clean 26.03 to 26.07 upgrade. The lab is an upgraded install, so no step is lab-verified. */}

### What the upgrade keeps

- The SAML templates, when you upgrade from 26.03.2 or later.
- The IIS site bindings for the console, including a custom certificate binding.
- The database connection settings and the JSON Web Token (JWT) settings.

{/* TODO verify: that a custom certificate binding and a non-default database host survive an upgrade. The code suggests they do, and it isn't lab-verified. */}

### Upgrade PostgreSQL from 12 to 16

When the Setup Launcher detects PostgreSQL 12, it shows two steps instead of one. This migration can take from several minutes to many hours, depending on the size of the database. Plan downtime.

1. Click **Step 1 - Upgrade PostgreSQL to V16**.
2. Click **Step 2 - Migrate PostgreSQL Data to V16**. Read the warning, and click **Yes** to continue.
3. When the migration finishes, click **Netwrix Privilege Secure Upgrade**.

Keep these points in mind:

- The launcher shows the **Estimated Required Space**, which equals the size of the PostgreSQL 12 data folder. If the drive for the new data has less free space than that, the launcher shows "requires at least `<size>` free. Found `<size>` available. Migration blocked." and stops.
- Set the Windows regional format to **English (United States)** before you start. Otherwise the migration fails with the message "Locale is not supported by the target database".
- The migration disables the PostgreSQL 12 service but doesn't uninstall PostgreSQL 12 or remove its data.
- Migration logs are in `C:\ProgramData\Stealthbits\PAM\Log`. See [Troubleshoot installation and upgrade](/docs/privilegesecure/26.07/install/troubleshoot-installation.md).

{/* TODO verify: the exact button labels and the Yes/OK prompt wording on a PostgreSQL 12 host. The labels come from the Setup Launcher resources in the code. */}

To move to Microsoft SQL Server during an upgrade, contact Netwrix Support before you click **Switch to SQL Server**.

## Known issues

### The database schema is broken after the PostgreSQL upgrade

After a PostgreSQL 12 to 16 migration, the database schema can be incomplete. To repair it, run `SbPAM.DbUpdater.exe` on the application server as an administrator.

{/* TODO verify: the folder that holds SbPAM.DbUpdater.exe, any arguments, and how to confirm the repair worked. */}

### The scheduled Active Directory sync fails after the upgrade

A scheduled Active Directory (AD) sync can show a **Failed** status after an upgrade, even when the sync itself works. To clear the status:

1. Open the domain in **Resources**.
2. Change the sync schedule time, and click **Save**.
3. Change the schedule back to the original time, and click **Save**.

See [Active Directory domains](/docs/privilegesecure/26.07/resources/domains.md).

{/* TODO verify: the status label after the reset and whether a manual Sync is needed. */}

### Host Scan and Scheduler services remain after uninstall

The uninstall during an upgrade or removal can leave the Host Scan and Scheduler services on the server.

{/* TODO verify: the workaround for the Host Scan and Scheduler services that an uninstall doesn't remove. */}

## Upgrade the Remote Access Gateway separately

The Remote Access Gateway uses its own installer, so the application server upgrade doesn't upgrade it. See [Upgrade the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/install/upgrade.md).

## Related topics

- [Install the application server](/docs/privilegesecure/26.07/install/install-application-server.md)
- [Troubleshoot installation and upgrade](/docs/privilegesecure/26.07/install/troubleshoot-installation.md)
- [High availability options](/docs/privilegesecure/26.07/install/high-availability.md)
