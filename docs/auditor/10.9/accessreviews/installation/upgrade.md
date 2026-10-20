---
title: "Upgrade Procedure"
description: "Upgrade Procedure"
sidebar_position: 40
---

# Upgrade Procedure

**CAUTION:** If you are upgrading from the Netwrix Access Information Center for Netwrix Auditor to
the Netwrix Auditor Access Reviews application, see the Special Considerations topic for upgrade
steps.

To upgrade the Access Reviews application to a newer version, run the new `AccessReviews.msi`
executable. You don't need to uninstall the existing version. See the [Install](/docs/auditor/10.9/accessreviews/installation/install.md)
topic for additional information.

_Remember,_ the Access Reviews version must align with the compatible Netwrix Auditor version.

When you run the installer over an existing version, the following happens in the backend:

- During the installation process, the installer creates a Backup folder in the Access Reviews
  installation directory

    ...\Netwrix\Access Reviews

    - The Backup folder contains the files listed in the following table, where various settings
      reside

- The installer copies the backup folder files over the default files it lays down, preserving
  customized settings
- After the installation completes, the installer removes the Backup folder

| File                                | Location            | Guidance                                                                                                               |
| ----------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Email Templates (multiple files)    | Backup folder | The HTML templates that are used to send notification email. These can be customized with logos or corporate branding. |
| AccessInformationCenter.Service.exe | Backup folder | Contains custom application settings and logging levels.                                                               |
| Version.txt                         | Backup folder | Indicates the version number associated with the backup contents.                                                      |

## Special Considerations

Netwrix rebranded Netwrix Access Information Center to Netwrix Auditor Access Reviews. This
rebranding project included changing the installation directory, the name of the service, and the
default name of the database created by the installer. To replace Netwrix Access Information
Center with Netwrix Auditor Access Reviews:

**Step 1 –** Install the Netwrix Auditor Access Reviews application on the same server where you
installed the Netwrix Access Information Center. See the [Install](/docs/auditor/10.9/accessreviews/installation/install.md) topic for additional
information. On the SQL Server Connection page:

- Supply the information for the existing database. The default name for the original database was
  NetwrixAIC. However, it could have been customized.
- Use the same credentials for the SQL Server Connection.

**NOTE:** The new destination folder is `...\Netwrix\Access Reviews`.

**Step 2 –** Launch the application and reset the Builtin Administrator password. See the
[First Launch](/docs/auditor/10.9/accessreviews/admin/firstlaunch.md) topic for additional information.

**Step 3 –** Add your Console Users again. See the
[Console Access Page](/docs/auditor/10.9/accessreviews/admin/configuration/consoleaccess.md) topic for additional information.

**Step 4 –** Configure the Notification settings. See the
[Notifications Page](/docs/auditor/10.9/accessreviews/admin/configuration/notifications.md) topic for additional information.

**Step 5 –** If you customized your email templates, copy the Templates folder from the old
`...\Netwrix\Access Information Center` installation directory to the new
`...\Netwrix\Access Reviews` installation directory.

All resources with assigned owners appear on the Resource Owners tab. All reviews appear on the
Entitlement Reviews tab.

After you confirm the upgrade was successful, you can optionally remove the old installation
directory: `...\Netwrix\Access Information Center`.
