---
title: "View File Server Permissions in GroupID"
description: "Explore replicated file servers in GroupID Entitlement to view, search, and update NTFS permissions on shared files and folders."
keywords:
  - file server permissions
  - NTFS permissions
  - GroupID Entitlement file servers
  - shared folders
  - file server replication
sidebar_position: 10
---

# View File Server Permissions in GroupID

The [GroupID Entitlement Management](/docs/directorymanager/11.0/welcome/entitlement/overview.md) page lists the servers specified for permission analysis in the
identity store, displaying granular-level permissions granted to objects on shared files and folders.
This data is subject to the date and time the permissions were last replicated.

Active servers appear as enabled, and servers that aren't replicated appear as disabled, as follows:

![File server list showing one enabled server and one disabled server](/images/directorymanager/11.0/portal/entitlement/disabledfileserver.webp)

Here, the second server is disabled while the first one is enabled. A disabled server indicates that
the Entitlement job hasn't run to replicate permission data for it. After permissions are
replicated, the server is enabled.

- The following information appears under a server name:

    - **Path**: the location where the server exists.
    - **Total Shares**: number of shared folders that exist in the configured and replicated server.
    - **Last Replication**: day, date, and time when the server was last replicated.
    - **Time Taken**: time it took to complete the replication.

- Double-click the card to explore the server. Once explored, click **Go Back** to return to the
  list of available sites.
- You can search for specific servers in the search bar at the top. If you want to undo the search
  results, click **Refresh List** to display all the servers on the page.

## Explore a server – card view

When you double-click the file server, a separate card appears for each file and folder shared at the root, showing the following information:

- The date and time the file/folder was last created.
- Owner of the file/folder.

    ![File server explorer showing cards for shared folders with creation date and owner](/images/directorymanager/11.0/portal/entitlement/fileservercard.webp)

:::note
Date format: mm/dd/yyyy
:::

- For child folders, the path format is: servername.parentsharedfoldername.

    ![Child folder card showing the path in servername.parentsharedfoldername format](/images/directorymanager/11.0/portal/entitlement/fileserverpath.webp)

- You can view the child files and folders within a shared folder to the nth level. Double-click a
  folder card to view its direct child files and folders. Continue to the nth level.

## View file/folder permissions

When you click a file/folder card, all users and groups with effective NTFS permissions on it are listed
in the right pane.

![Right pane listing users and groups with effective NTFS permissions on a folder](/images/directorymanager/11.0/portal/entitlement/fileserverpermissions.webp)

Information includes:

- The date and time the file/folder was replicated and created, the name of the owner, and the
  number of files and folders that reside directly in the selected folder.

    For example, if the folder contains a folder, ABC, that further contains 3 folders, the direct
    sub file/folder count is 1, not 4.

- Under **Users/Groups**, you can view all users and groups with permissions on the file/folder. You
  can also view the permission status, such as _Full Control_, _Read & Execute_, and so on.

    Use the search box to filter the listing.

- Add new users/groups who can have permissions on the file/folder. You can add users/groups permanently or
  temporarily.

    You can select multiple users/groups and collectively assign them the same permissions.

- When you click a user or group name, the user/group’s properties are displayed.

    You can view and update properties, depending on your rights and privileges.

- Clicking the permission status for a user/group displays the effective permissions assigned to
  this user/group on the file/folder.

    You can allow and deny access and inherited access, and then click the **Save** icon.

    ![Effective permissions for a user or group with Allow and Deny options and the Save icon](/images/directorymanager/11.0/portal/entitlement/filespermissions.webp)

    Permissions are displayed as **Explicit permissions** which list the effective permissions set
    the user/group has on the file/folder.

With the effective permissions displayed, clicking the user/group again launches the object
properties and collapses the permissions view.

## Search shared files and folders on the server

You can search for specific files and folders (shared) on the server. You can also search for a file
or folder in a particular folder.

![Search box for shared files and folders on the server with the Add new filter link](/images/directorymanager/11.0/portal/entitlement/filefolderssearch.webp)

**Search filter**

Below the search box is the **Add new filter** link. Click it to apply a search filter with a
user/group, access type, and permission criterion. This displays shared files/folders that match
your criterion.

- Enter the name of a user or group in the **User or Group** box. It must be a specific name, like
  ‘Sarah’ (for user) or ‘Engineering team’ (for group), and not an object type, like ‘users’,
  ‘groups’, ‘contacts’, or ‘computers’.
- From the **Access Type** dropdown list, select the _Allow_ or _Deny_ option.
- In the **Permission** box, select one or more permissions.
- Click **Apply filters**.

GroupID Entitlement displays folders and files on which the user/group has the specific
access type with respect to the specified permissions.

**Example:**

User: Administrator

Access type: Allow

Permission: WriteAttributes, ExecuteFile, Read

This would list all files and folders on which the Administrator has these three permissions -
WriteAttributes, ExecuteFile, and Read - set to ‘Allow’.

You can apply multiple search filters. Click **Add new filter** to insert a filter row. Each filter
row is taken as a separate criterion; the results display any file or folder that matches all of these criteria.

## How GroupID Entitlement displays permissions

| Condition                                                                     | Access level displayed                                       |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------ |
| User has direct Allow access on a folder.                                     | Allow                                                        |
| User has direct Deny access on a folder.                                      | Deny                                                         |
| Group has direct Deny access on a folder.                                     | Explicit Deny access is displayed on the root parent folder. |
| User has inherited the Allow access but has explicit Deny access on a folder. | Deny access is displayed on the folder.                      |
| User has inherited the Deny access but has explicit Allow access on a folder. | Allow access is displayed on the folder.                     |

**See Also:**

- [GroupID Entitlement Management](/docs/directorymanager/11.0/welcome/entitlement/overview.md)
