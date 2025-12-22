---
title: "Uninstall GroupID Credential Provider"
description: "Uninstall GroupID Credential Provider"
sidebar_position: 20
---

# Uninstall GroupID Credential Provider

You can uninstall GroupID Credential Provider using one of the following:

- Windows Control Panel: If you have installed GroupID Credential Provider manually, you can
  uninstall it using Windows Control Panel.
- Group Policy Object: If you have installed the GroupID Credential Provider via Group Policy Object
  you can uninstall it using the following steps:

    1. Open Group Policy Management by typing _gpmc.msc_ in the **Run** box and clicking **OK**.
    2. Right-click the required GPO under the domain or organizational unit that contains the GPO
       distributing GroupID Credential Provider and click **Edit**. The Group Policy Management
       Editor opens.
    3. Click **Computer Configurations** > **Policies** > **Software Settings** > **Software
       Installation**.
    4. Right-click the GroupID Credential Provider package, point to **All Tasks** and click
       **Remove**.
    5. In the **Remove Software** dialog box, select **Immediately uninstall the software from users
       and computers** and click **OK**.
    6. Click **Close** to close the **Group Policy Object Editor**.
    7. When a client workstation restarts, the GPO, now without the Credential Provider object, is
       applied on it. This removes the installed GroupID Credential Provider from all client
       workstations. Once it is removed from the client workstation, the user must restart it again
       to remove the links from the Windows logon screen.

See Also

- [Install GroupID Credential Provider](/docs/directorymanager/11.0/credentialprovider/installcp.md)
- [ GroupID Credential Provider](/docs/directorymanager/11.0/credentialprovider/credentialprovider.md)
