---
title: "Upgrade Procedure"
description: "Upgrade Procedure"
sidebar_position: 40
---

# Upgrade Procedure

**CAUTION:** If you are upgrading from the Netwrix Access Information Center for Netwrix Auditor to
the Netwrix Auditor Access Reviews application, see the Special Considerations topic for upgrade
steps.

To upgrade the Access Reviews application to a newer version, simply run the new `AccessReviews.msi`
executable. It is not necessary to uninstall the existing version. See the [Install](/docs/auditor/10.7/accessreviews/installation/install.md)
topic for additional information.

_Remember,_ the Access Reviews version must align to the compatible Netwrix Auditor version.

When the installer is run over an existing version, the following is happening in the backend:

- During the installation process, a Backup folder is created in the Access Reviews installation
  directory

    ...\Netwrix\Access Reviews

    - The Backup folder contains the files where various settings reside listed in the table below

- The backup folder files are copied over the default files laid down by the installer, preserving
  customized settings
- After the installation is complete, the Backup folder is removed

| File                                | Location                     | Guidance                                                                                                               |
| ----------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Email Templates (multiple files)    | Located in the Backup folder | The HTML templates that are used to send notification email. These can be customized with logos or corporate branding. |
| AccessInformationCenter.Service.exe | Located in the Backup folder | Contains custom application settings and logging levels.                                                               |
| Version.txt                         | Located in the Backup folder | Indicates the version number associated with the backup contents.                                                      |

## Special Considerations

The originally released Netwrix Access Information Center has been rebranded to Netwrix Auditor
Access Reviews. This rebranding project included changing the installation directory, the name of
the service, and the default name of the database created by the installer. Follow the steps to
replace Netwrix Access Information Center with Netwrix Auditor Access Reviews.

**Step 1 –** Install the Netwrix Auditor Access Reviews application on the same server where the
Netwrix Access Information Center was installed. See the [Install](/docs/auditor/10.7/accessreviews/installation/install.md) topic for additional
information. On the SQL Server Connection page:

- Supply the information for the existing database. The default name for the original database was
  NetwrixAIC. However, it could have been Customized.
- Use the same credentials for the SQL Server Connection.

**NOTE:** The new destination folder will be `...\Netwrix\Access Reviews`.

**Step 2 –** Launch the application and reset the Builtin Administrator password. See the
[First Launch](/docs/auditor/10.7/accessreviews/admin/firstlaunch.md) topic for additional information.

**Step 3 –** It will be necessary to add your Console Users again. See the
[Console Access Page](/docs/auditor/10.7/accessreviews/admin/configuration/consoleaccess.md) topic for additional information.

**Step 4 –** It will be necessary to configure the Notification settings. See the
[Notifications Page](/docs/auditor/10.7/accessreviews/admin/configuration/notifications.md) topic for additional information.

**Step 5 –** If you have customized your email templates, it will be necessary to copy the Templates
folder from the old `...\Netwrix\Access Information Center` installation directory to the new
`...\Netwrix\Access Reviews` installation directory.

All of the resources with assigned owners will be visible on the Resource Owners tab. All reviews
will be visible on the Entitlement Reviews tab.

After the upgrade has been confirmed to be successful, you can optionally remove/delete the old
installation directory: `...\Netwrix\Access Information Center`.
