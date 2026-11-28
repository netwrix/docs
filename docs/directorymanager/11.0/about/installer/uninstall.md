---
title: "Uninstall GroupID"
description: "Uninstall GroupID from a server, then remove leftover folders, registry keys, IIS sites, application pools, and certificates for a complete removal."
keywords:
  - uninstall GroupID
  - remove GroupID registry keys
  - GroupID complete uninstall
  - GroupID IIS cleanup
sidebar_position: 40
---

# Uninstall GroupID

Before you uninstall GroupID, ensure that the signed-in user is a member of the local
Administrators group on that machine.

To uninstall the current GroupID version to upgrade to a newer version, follow these steps:

1. Click **Start**.
2. Type **Control Panel** and select it.
3. Select **Uninstall a program**.
4. From the **Name** column, right-click **Imanami GroupID `<version>`** and select **Uninstall**.
5. On the **User Account Control** window, click **Yes**.

This uninstalls GroupID from your machine.

## Complete Uninstall

To uninstall GroupID completely, remove the GroupID folders and registry keys from your machine.
After you do this, you can no longer upgrade to a newer version of GroupID.

First, complete the uninstall steps at the start of this topic.

Next, to completely uninstall GroupID from your machine, remove:

- The GroupID installation directory
- Other relevant directories
- Registry keys
- The GroupID site
- GroupID application pools
- GroupID certificates

**Remove the GroupID installation directory**

1. Go to the location:  
   X:\Program Files\Imanami  
   (X represents the GroupID installation drive).
2. Delete the directory named GroupID 11.0.

**Remove other relevant directories**

1. In the Windows **Run** dialog box, enter the command:

    ```
       %ALLUSERSPROFILE%\Imanami
    ```

2. From the location that the command opens, delete the folder GroupID 11.0.

**Remove registry keys**

1. Open the **Registry Editor** by typing **regedit** in the Windows **Run** dialog box.
2. Delete the following registry key:

    ```
       HKEY_LOCAL_MACHINE\SOFTWARE\Imanami\GroupID\Version 11.0
    ```

**Remove the GroupID site**

To remove the GroupID site from IIS:

1. Open the Internet Information Services (IIS) console by typing _inetmgr_ in the Windows **Run** dialog
   box.
2. Expand the `<machine name>` node in the console tree and click **Sites**.
3. On the **Sites** page, delete _GroupIDSite11_.

**Remove the GroupID application pools**

To remove the GroupID Admin Center, application pools, services, and portals from IIS:

1. Open the Internet Information Services (IIS) console by typing _inetmgr_ in the Windows **Run** dialog
   box.
2. Expand the `<machine name>` node in the console tree and click **Application Pools**.
3. On the **Application Pools** page, delete all application pools for GroupID Admin Center, applications,
   portals, and services.

**Remove GroupID certificates**

To remove GroupID certificates from IIS:

1. Open the Internet Information Services (IIS) console by typing _inetmgr_ in the Windows **Run** dialog
   box.
2. Click the `<machine name>` node in the console tree. On the **Features View** tab, select
   **Server Certificates** in the IIS section.
3. Delete these certificates bound to GroupIDSite11 (the site that deploys the Data Service):

    - GroupIDSecurityService
    - Imanami GroupID Certificate

:::note
Don't remove these certificates if another GroupID version is installed on the machine.
:::

See Also

- [Back Up and Restore Data for a GroupID Upgrade](/docs/directorymanager/11.0/about/upgrade/backuprestore.md)
