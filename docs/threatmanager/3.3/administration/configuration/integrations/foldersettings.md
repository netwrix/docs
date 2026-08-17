---
title: "Folder Settings Page"
description: "Folder Settings Page"
sidebar_position: 70
---

# Folder Settings Page

Use the Folder Settings page within the Integrations interface to designate the
Investigation exports folder location. You can also provide a shared folder for subscriptions.

![Integrations interface on the Folder Settings page](/images/threatmanager/3.0/administration/configuration/integrations/page_5.webp)

By default, the application places Investigation exports in the Downloads folder of the logged in
user, on the machine where that user is accessing the application. When you designate a Local Folder
path, the application also stores all Investigation exports in that folder on the application server.

When you add shared folders, they appear in a table at the bottom of the page.

![Shared Folder table on the Folders Settings page](/images/threatprevention/7.5/reportingmodule/configuration/integrations/sharedfoldertable.webp)

The Shared Folders table has the following columns:

- Display Name – The name of the shared folder as displayed in the application
- Path to the Shared folder – The path to the shared folder where the application stores
  subscription reports
- Credential Profile – Name of the Credential Profile
- Access – The users that can save their subscription exports to the shared folder
- Last Time tested – Date timestamp when the application last tested the shared folder
  configuration

**Additional Options**

When you hover over a row within the Shared Folders table, three additional options appear:

![Shared Folder table on the Folders Settings page showing additional options](/images/threatprevention/7.5/reportingmodule/configuration/integrations/additionaloptions.webp)

- Refresh Arrow – Tests the shared folder configuration
- Edit – Opens the Add New Shared Folder window to edit the configured settings
- Trash – Deletes the shared folder, which prevents the application from using it

## Designate a Local Folder

To designate a local folder for Investigation exports:

**Step 1 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **Integrations** to open the Integrations interface.

**Step 2 –** On the Integrations interface, click **Folder Settings** in the navigation pane.

![Local Folder settings on the Folder Settings page](/images/threatprevention/7.5/reportingmodule/configuration/integrations/localfolder.webp)

**Step 3 –** In the Path field, enter a valid folder path on the server where the application is
installed. For example, C:\Reports.

**Step 4 –** The Save button activates when you modify any settings. Click it to commit the
changes before leaving the page.

The application now saves Investigation exports to the designated local folder on the application
server.

## Add a Shared Folder

:::note
Before adding a shared folder, you must first configure a Credential Profile with Write
access to the shared folder. See the [Credential Profile Page](/docs/threatmanager/3.3/administration/configuration/integrations/credentialprofile.md) topic for
additional information on creating a profile.
:::


You can specify a shared folder for exporting investigations data from subscriptions through the
Integrations menu. To add a shared folder:

**Step 1 –** Use the gear icon in the upper right corner of the console to open the Configuration
menu. Then select **Integrations** to open the Integrations interface.

**Step 2 –** On the Integrations interface, click **Folder Settings** in the navigation pane.

**Step 3 –** Click **Add Shared Folder**. The Add New Shared Folder window opens.

![Add New Shared Folder window](/images/threatprevention/7.5/reportingmodule/configuration/integrations/addnewsharedfolderwindow.webp)

**Step 4 –** Enter the following information:

- Display Name – Enter a name of the shared folder as displayed in the application
- Credential Profile – Select the Credential Profile by name from the dropdown menu. You create this
  profile on the Credential Profiles page.
- Path – Enter a valid share path with the \\[SERVER NAME]\[PATH TO SHARED FOLDER] format. For
  example, \\NT-FS02\Subscriptions.
- Access – Allow specific users to access the folder when configuring subscriptions in the
  application. By default, this is set to All users. To limit access, select users from the
  dropdown menu. The dropdown lists only users granted application access through the System
  Settings > User Access page.

**Step 5 –** Click **Add**. The Add New Shared Folder window closes.

Subscription exports can now use the specified shared folder.
