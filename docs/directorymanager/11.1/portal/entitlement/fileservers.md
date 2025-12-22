---
title: "File Servers"
description: "File Servers"
sidebar_position: 10
---

# File Servers

The [ Entitlement](/docs/directorymanager/11.1/portal/entitlement/overview.md) page lists the servers specified for permission analysis in the
identity store, displaying granular level permission granted to objects on shared files and folders.
This data is subject to the date and time the permissions were last replicated.

You can view all active servers as enabled and not replicated servers as disabled. It is as:

![disabledfileserver](/images/directorymanager/11.1/portal/entitlement/disabledfileserver.webp)

Here, the second server is disabled while the first one is enabled. A disabled server indicates that
the Entitlement job has not run to replicate permission data for it. Once permissions are
replicated, the server is enabled.

- You will find the following information under a server name:

    - **Path**: the location where the server exists.
    - **Total Shares**: Number of shared folders that exist in the configured and replicated server.
    - **Last Replication**: day, date, and time when the server was last replicated.
    - **Time Taken**: time it took to complete the replication.

- Double click on the card to explore the server. Once explored, click **Go Back** to return to the
  list of available sites.
- You can search specific servers on the search bar on the top. If you want to undo the search
  results, click **Refresh List** which will display all the servers on the page.

## Explore a server – card view

On double clicking the fileserver, a separate card for each file and folder shared at the root is
displayed, showcasing the following information:

- The date and time the file/folder was last created.
- Owner of the file/folder.

    ![fileservercard](/images/directorymanager/11.1/portal/entitlement/fileservercard.webp)

:::note
Date format: mm/dd/yyyy
:::

- For child folders, the path is as: servername.parentsharedfoldername.

    ![fileserverpath](/images/directorymanager/11.1/portal/entitlement/fileserverpath.webp)

- You can view the child files and folders within a shared folder till the nth level. Double-click a
  folder card to view its direct child files and folders. Continue till the nth level.

## View file/folder permissions

On clicking a file/folder card, all users and groups with effective NTFS permission on it are listed
in the right pane.

![fileserverpermissions](/images/directorymanager/11.1/portal/entitlement/fileserverpermissions.webp)

Information includes:

- The date and time the file/folder was replicated and created, the name of the owner, and the
  number of files and folders that reside directly in the selected folder.

    For example, if the folder contains a folder, ABC, that further contains 3 folders, the direct
    sub file/folder count will be 1, not 4.

- Under **Users/Groups**, you can view all users and groups with permissions on the file/folder. You
  can also view the permission status, such as _Full Control_, _Read & Execute_, and so on.

    Use the search box to filter the listing.

- Add new users/groups who can have permissions on the file/folder. You can permanently or
  temporarily add user/groups.

    You can select multiple user/groups and collectively assign them the same permissions.

- On clicking a user or group name, the user/group’s properties are displayed

    You can view and update properties, depending on your rights and privileges.

- Clicking the permission status for a user/group displays the effective permissions assigned to
  this user/group on the file/folder.

    You can allow and deny access and inherited access and click **Save** icon.

    ![filespermissions](/images/directorymanager/11.1/portal/entitlement/filespermissions.webp)

    Permissions are displayed as **Explicit permissions** which list the effective permissions set
    the user/group has on the file/folder.

With the effective permissions displayed, clicking the user/group again would launch the object
properties as well as collapse the permissions view.

## Search shared files and folders on the server

You can search for specific files and folders (shared) on the server. You can also search for a file
or folder in a particular folder.

![filefolderssearch](/images/directorymanager/11.1/portal/entitlement/filefolderssearch.webp)

**Search filter**

Below the search box is the **Add new filter** link. Click it to apply a search filter with a
user/group, access type, and permission criterion. This will display shared files/folders that match
your criterion.

- Type the name of a user or group in the **User or Group** box. It must be a specific name, like
  ‘Sarah’ (for user) or ‘Engineering team’ (for group), and not an object type, like ‘users’,
  ‘groups’, ‘contacts’, or ‘computers’.
- From the **Access Type** drop-down list, select the _Allow_ or _Deny_ option.
- In the **Permission** box, select one or more permissions.
- Click **Apply filters**.

Directory Manager Entitlement displays folders and files on which the user/group has the speci fic
access type with respect to the specified permission(s).

**Example:**

User: Administrator

**Access type: Allow**

Permission: WriteAttributes, ExecuteFile, Read

This would list all files and folders on which the Administrator has these three permissions -
WriteAttributes, ExecuteFile, and Read - set to ‘Allow’.

You can apply multiple search filters. Click **Add new filter** to insert a filter row. Each filter
row is taken as a separate criterion; any file or folder that matches all of these criteria will be
displayed in the results.

## How Directory Manager (formerly GroupID) Entitlement displays permissions

| Condition                                                                     | Access level displayed                                       |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------ |
| User has direct Allow access on a folder.                                     | Allow                                                        |
| User has direct Deny access on a folder.                                      | Deny                                                         |
| Group has direct Deny access on a folder.                                     | Explicit Deny access is displayed on the root parent folder. |
| User has inherited the Allow access but has explicit Deny access on a folder. | Deny access is displayed on the folder.                      |
| User has inherited the Deny access but has explicit Allow access on a folder. | Allow access is displayed on the folder.                     |
