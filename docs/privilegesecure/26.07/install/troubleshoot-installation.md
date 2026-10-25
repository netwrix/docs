---
title: "Troubleshoot installation and upgrade"
description: "Find the cause and fix for common Privilege Secure installation and upgrade failures, and the log files to check."
sidebar_position: 120
---

# Troubleshoot installation and upgrade

Use this page when an installation or upgrade of Netwrix Privilege Secure for Access Management (Privilege Secure) fails or leaves the product in an unexpected state. Each entry gives the symptom, the cause, and the fix.

## Log files

Installation and upgrade logs are in `C:\ProgramData\Stealthbits\PAM\Log`. The `PAM-` log file names follow the pattern `PAM-<Service><yyyymmdd>.log`. The PostgreSQL migration writes text files instead. The files to check after a failed install or upgrade are:

| Log | Use it for |
|---|---|
| `PAM-InstallCmd` | Installer custom actions |
| `PAM-DbUpdater` | Database schema updates and data import during install and upgrade |
| `PGUpgrade_out<yyyymmdd>.txt` | Progress log of the PostgreSQL 12 to 16 migration |
| `PGUpgrade_out<yyyymmdd>_<n>.txt` | Output of `pg_upgrade` for attempt `<n>` |
| `PGUpgrade_err<yyyymmdd>_<n>.txt` | Errors from `pg_upgrade` for attempt `<n>` |

You can also open these files from the **Log Files** page in the Privilege Secure Console. See [Log files](/docs/privilegesecure/26.07/admin/audit-reporting/log-files.md).

By default, the installer also writes a log to the `%TEMP%` folder of the account that ran it. To choose the log file, run `NPS.exe` with `/log <file>`. See [Install silently](/docs/privilegesecure/26.07/install/silent-install.md).

## The installer stops and asks for PowerShell 7.6

**Symptom:** `NPS.exe` stops with the message "PowerShell 7.6 or later is required. Please install it from https://aka.ms/powershell".

**Cause:** Privilege Secure 26.07 requires PowerShell 7.6 or later on the application server. The Setup Launcher doesn't check for it, so the launcher can show PowerShell as installed when only Windows PowerShell 5.1 is present.

**Fix:** Install PowerShell 7.6 or later, and run the installer again. See [Application server requirements](/docs/privilegesecure/26.07/requirements/application-server.md).

## The launcher says it must run as Administrator

**Symptom:** The message "Netwrix Setup Launcher must be run as Administrator" appears.

**Fix:** Close the launcher. Right-click `NPS_Setup.exe`, and select **Run as administrator**.

## The installer asks you to uninstall Stealthbits Privileged Activity Manager

**Symptom:** `NPS.exe` stops with the message "Please uninstall Stealthbits Privileged Activity Manager from the Control Panel before installing."

**Cause:** The server has an old Stealthbits Privileged Activity Manager installation. During an upgrade, the Setup Launcher stops the services and uninstalls the old installation before it starts `NPS.exe`. Running `NPS.exe` directly doesn't do this.

**Fix:** Start the installation with `NPS_Setup.exe` instead of `NPS.exe`.

## The PostgreSQL migration is blocked or fails

**Symptom:** The Setup Launcher blocks the PostgreSQL 12 to 16 migration, or the migration fails.

Check these causes:

- **Not enough free space.** The message says the drive requires at least a given amount of free space and reports how much is available. The drive needs at least as much free space as the PostgreSQL 12 data folder. Free space, and run the migration again.
- **Unsupported locale.** The message says the locale isn't supported by the target database. Set the Windows regional format to **English (United States)**, and run the migration again.
- **Other errors.** Open `NPS-PGUpgrade` and `NPS-PGUpgradeErr` in the log folder, and contact [Netwrix Support](https://www.netwrix.com/support.html) with the files.

## Install completes, but the database looked unreachable

**Symptom:** The install finishes, but the database wasn't reachable when the installer ran.

**Cause:** The installer doesn't fail when it can't import the default activities. It records the failure in `ImportActivities.log` in `C:\ProgramData\Stealthbits\PAM\Logs` and continues. This folder is named `Logs`, not `Log`.

**Fix:** Open `ImportActivities.log` and read the error. Correct the database connection. Then, in an elevated PowerShell window, go to the `DatabaseTools` folder of the installation folder, which is `C:\Program Files\Stealthbits\PAM\DatabaseTools` by default, and run these commands in order. The first applies pending schema updates. The second imports the default activities and other default data.

```powershell
.\SbPAM.DbUpdater.exe
.\SbPAM.DbUpdater.exe import Data
```

The installer runs the import only on a new installation or an upgrade, so running the installer again on a server that already has this version doesn't repeat it. If the default activities are missing afterward, contact [Netwrix Support](https://www.netwrix.com/support.html).

## The upgrade fails with a duplicate key error

**Symptom:** After an upgrade to 26.07, Linux resource scans finish with errors and access to Linux resources stops. In the `PAM-DbUpdater` log, the data import fails with error `23505`, a duplicate key on `IX_activity_group_name`, and the log contains "Creating deleted Default ActivityGroup: Domain Administrator Access".

**Cause:** A default activity group was deleted, and a new group with the same name was created. **Domain Administrator Access** and **Local Administrator Access** are the default groups. The upgrade re-creates a missing default group by name and then fails because the name exists.

**Fix:** Upgrade to 26.07.3 or later, which fixes the problem. On earlier releases, don't delete and re-create the default activity groups before you upgrade. If the error persists after you upgrade, contact [Netwrix Support](https://www.netwrix.com/support.html).

## Services return HTTP 500 or sessions stay in Provisioning

**Symptom:** After you register services, every service returns HTTP 500, or sessions stay in the Provisioning status.

**Cause:** The **NPS Rest URL** ends with a slash, for example `https://<nps-server>:6500/`.

**Fix:** Remove the trailing slash, and register the services again. See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md). Release 26.07.3 removes the trailing slash automatically.

## Single sign-on stops working after an upgrade

**Symptom:** SAML sign-in fails after an upgrade.

**Cause:** An upgrade from a release earlier than 26.03.2 overwrites the SAML request and sign-out templates.

**Fix:** Copy your backed-up `SamlRequestTemplate.xml` and `SamlSignoutTemplate.xml` back to the `Web` folder of the installation folder. If you have no backup, recreate your customizations. See [Upgrade Privilege Secure](/docs/privilegesecure/26.07/install/upgrade.md#back-up-the-saml-templates).

## An error mentions a null PlatformID

**Symptom:** A scan or sync fails with the error "Cannot convert null to type 'System.Guid'" for the platform ID.

**Cause:** Resources migrated from SQL Server to PostgreSQL can lose their platform. Release 26.07.3 fixes the problem.

**Fix:** Upgrade to 26.07.3 or later. On earlier releases, assign a platform to the affected resource. See [Change the platform of resources](/docs/privilegesecure/26.07/resources/overview.md#change-the-platform-of-resources).

## Related topics

- [Upgrade Privilege Secure](/docs/privilegesecure/26.07/install/upgrade.md)
- [Install the application server](/docs/privilegesecure/26.07/install/install-application-server.md)
- [Troubleshooting](/docs/privilegesecure/26.07/troubleshooting/overview.md)
