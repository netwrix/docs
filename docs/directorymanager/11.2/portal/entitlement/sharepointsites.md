---
title: "View SharePoint Site Permissions in Directory Manager"
description: "Explore replicated SharePoint sites in Directory Manager Entitlement to view, search, and update permissions on document libraries, files, and folders."
keywords:
  - SharePoint site permissions
  - document libraries
  - Entitlement SharePoint sites
  - permission levels
  - SharePoint permission replication
sidebar_position: 20
---

# View SharePoint Site Permissions in Directory Manager

The **SharePoint Sites** page lists the sites specified for permission analysis in the identity
store, displaying granular-level permissions granted to objects on document libraries. This data is
subject to the date and time the permissions were last replicated.

Active sites appear as enabled, and inactive sites appear as disabled, as follows:

![SharePoint site list showing enabled and disabled sites](/images/directorymanager/11.2/portal/entitlement/disabledsites.webp)

A disabled site indicates that the Insights job hasn't run to replicate permission data for it.
After permissions are replicated, the site is enabled.

- The following information appears under a site name:

    - **Path**: the location where the site exists.
    - **Total Share**: number of the shared document libraries.
    - **Last Replication**: day, date, and time when the site was last replicated.
    - **Time Taken**: time it took to complete the replication.

- Double-click the card to explore the site. Once explored, click **Go Back** to return to the
  list of available sites.
- You can search for specific sites in the search bar at the top. If you want to undo the search
  results, click **Refresh** to display all the sites on the page.

## Explore a site – card view

When you double-click the site, a separate card appears for each document library in the site, showing the following information:

- The date and time the library was last created.

:::note
Date format: mm/dd/yyyy
:::

- You can view the files and folders within a document library to the nth level. Double-click a
  folder card to view its direct child files and folders. Continue to the nth level.

    ![Document library cards and folders within a SharePoint site](/images/directorymanager/11.2/portal/entitlement/sitesfolders.webp)

## View levels and permissions on a library

When you click a library card or a file/folder card, all users and groups with permissions on it
are listed in the right pane.

![Right pane listing users and groups with permission levels on a document library](/images/directorymanager/11.2/portal/entitlement/sitesrightpane.webp)

Information includes:

- The date and time the file/folder was created and the number of files and folders that reside
directly in the selected folder.

    For example, if the folder contains a folder, ABC, that further contains 3 folders, the direct
    sub file/folder count is 1, not 4.

- Under **Users/Groups**, you can view all users and groups with permissions on the file/folder. You
  can also view the levels, such as _Full Control_, _Limited Access_, _View_, _Read_, and _Edit_.

    Use the search box to filter the listing.

- Add new users who can have permissions on the file/folder in a site. You can add users permanently or
temporarily.

    You can select multiple users and collectively assign them the same permissions.

- When you click a user or group name, the user/group’s properties are displayed.

    You can view and update properties, depending on your rights and privileges.

    :::note
    For groups, this functionality is available for domain groups only; SharePoint groups are
    not linked.
    :::


- Clicking a level for a user displays the effective permissions assigned to this user on the
  file/folder.

    You can update the permissions and then click the **Save** icon.

    ![Effective permissions for a user on a SharePoint file or folder with the Save icon](/images/directorymanager/11.2/portal/entitlement/sitespermissions.webp)

    Permissions are displayed as **Explicit permissions** which list the effective permissions set
    the user/group has on the file/folder.

## Search document libraries, files, and folders in a site

Use the search bar to search for specific files and folders in the site. You can also search for a
file or folder in a particular folder. Click the card for that folder and search for the required
child file/folder.

![Search bar for document libraries, files, and folders in a SharePoint site](/images/directorymanager/11.2/portal/entitlement/sitessearch.webp)

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

Directory Manager Entitlement displays folders and files on which the user/group has the specific
access type with respect to the specified permissions.

**Example:**

User: Administrator

**Access type: Allow**

Permission: WriteAttributes, ExecuteFile, Read

This would list all files and folders on which the Administrator has these three permissions -
WriteAttributes, ExecuteFile, and Read - set to ‘Allow’.

You can apply multiple search filters. Click **Add new filter** to insert a filter row. Each filter
row is taken as a separate criterion; the results display any file or folder that matches all of these criteria.

## How Directory Manager Entitlement displays permissions

| Level                                                                  | Access level displayed in Directory Manager Entitlement SharePoint                                               |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| User/Group has the 'Full Control' permission level on a file/folder.   | 'Allow' for all list permissions.                                                                                  |
| User/Group has the ‘Limited Access' permission level on a file/folder. | 'Allow' only for the View Application Pages list permission.                                                       |
| User/Group has the 'Edit' permission level on a file/folder.           | 'Allow' for all list permissions except Full Control and Approve Items.                                            |
| User/Group has the ‘Read' permission level on a file/folder.           | 'Allow' for the View Items, Open Items, View Versions, Create Alerts, and View Application Pages list permissions. |
