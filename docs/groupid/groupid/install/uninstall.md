# Uninstall

Before you uninstall Directory Manager , make sure that the logged-in user is a member of the local Administrators group on that machine.

To uninstall the current Directory Manager version to upgrade to a newer version, follow these steps:

1. Click __Start__.
2. Type __Control Panel__ and select it.
3. Select __Uninstall a program__.
4. From the __Name__ column, right-click __Imanami GroupID <version>__and select __Uninstall__.
5. On the __User Account Control__ window, click __Yes__.

This will uninstall Directory Manager from your machine.

## Complete Uninstall

To uninstall Directory Manager completely, remove the Directory Manager folders and registry keys from your machine. This done, you do not have the option to upgrade to a newer version of Directory Manager.

First, uninstall Directory Manager using the steps described above.

Next, to completely uninstall Directory Manager from your machine, remove:

- The Directory Manager installation directory
- Other relevant directories
- Registry keys
- Directory Manager Site
- Directory Manager application pools
- Directory Manager certificates

Remove the Directory Manager installation directory

1. Go to the location:  
   X:\Program Files\Imanami  
   (X represents the Directory Manager installation drive).
2. Delete the directory named GroupID 11.0.

Remove other relevant directories

1. On the Windows __Run__ dialog box, type the command:

    ```
       %ALLUSERSPROFILE%\Imanami
    ```

2. From the location referenced by the given command, delete the folder: GroupID 11.0.

Remove registry keys

1. Open the __Registry Editor__ by typing __regedit__ in the Windows __Run__ dialog box.
2. Delete the following registry keys:

    ```
       HKEY_LOCAL_MACHINE\SOFTWARE\Imanami\GroupID\Version 11.0
    ```

Remove the Directory Manager Site

Follow these steps to remove the Directory Manager site from IIS:

1. Open the Internet Information Service console by typing _inetmgr_ in the Windows __Run__ dialog box.
2. Expand the <machine name> node in the console tree and click __Sites__.
3. On the __Sites__ page, delete _GroupIDSite11_.

Remove the Directory Manager applications and services pools

Follow these steps to remove the Directory Manager Admin Center, app pool, services and portal from IIS:

1. Open the Internet Information Service console by typing _inetmgr_ in the Windows __Run__ dialog box.
2. Expand the <machine name> node in the console tree and click __Application Pools__.
3. On the __Application Pools__ page, delete all app pools for Directory Manager Admin Center, applications, portals and services.

Remove Directory Manager Certificates

Follow these steps to remove Directory Manager certificates from IIS:

1. Open the Internet Information Service console by typing _inetmgr_ in the Windows __Run__ dialog box.
2. Click the <machine name> node in the console tree. On the __Features View__ tab, select __Server Certificates__ in the IIS section.
3. Delete these certificates bound to GroupIDSite11 (the site deploying Data Service):

   - GroupIDSecurityService
   - Imanami GroupID Certificate

NOTE: Do not remove these certificates if another Directory Manager version is installed on the machine.
