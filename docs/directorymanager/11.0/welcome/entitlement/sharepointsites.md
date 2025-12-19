---
title: "Explore SharePoint Sites"
description: "Explore SharePoint Sites"
sidebar_position: 20
---

# Explore SharePoint Sites

The **SharePoint Sites** page lists the sites specified for permission analysis in the identity
store, displaying granular level permission granted to objects on document libraries. This data is
subject to the date and time the permissions were last replicated.

You can view all active sites as enabled and inactive sites as disabled. It is as:

![disabledsites](/images/directorymanager/11.0/portal/entitlement/disabledsites.webp)

A disabled site indicates that the Insights job has not run to replicate permission data for it.
Once permissions are replicated, the site is enabled.

- You will find the following information under a site name:

    - **Path**: the location where the site exists.
    - **Total Share**: number of the shared document libraries.
    - **Last Replication**: day, date, and time when the site was last replicated.
    - **Time Taken**: time it took to complete the replication.

- Double click on the card to explore the site. Once explored, click **Go Back** to return to the
  list of available sites.
- You can search specific sites on the search bar on the top. If you want to undo the search
  results, click **Refresh** which will display all the sites on the page.

What do you want to do?

- Explore a Site Card View
- View levels and permissions on a library
- Search document libraries, files and folders in a site
- How GroupID Entitlement displays permissions

## Explore a Site Card View

On double clicking the site, a separate card for each document library in the site is displayed,
showcasing the following information:

- The date and time the library was last created.

    NOTE: Date format: mm/dd/yyyy

- You can view the files and folders within a document library till the nth level. Double-click a
  folder card to view its direct child files and folders. Continue till the nth level.

    ![sitesfolders](/images/directorymanager/11.0/portal/entitlement/sitesfolders.webp)

## View levels and permissions on a library

On clicking a library card or even a file/folder card, all users and groups with permission on it
are listed in the right pane.

![sitesrightpane](/images/directorymanager/11.0/portal/entitlement/sitesrightpane.webp)

Information includes:

- The date and time the file/folder was created and the number of files and folders that reside
  directly in the selected folder.

    For example, if the folder contains a folder, ABC, that further contains 3 folders, the direct
    sub file/folder count will be 1, not 4.

- Under **Users/Groups**, you can view all users and groups with permissions on the file/folder. You
  can also view the levels, such as _Full Control_, _Limited Access_, _View_, _Read, and Edit._

    Use the search box to filter the listing.

- Add new users who can have permissions on the file/folder in a site. You can permanently or
  temporarily add users.

    You can select multiple users and collectively assign them the same permissions.

- On clicking a user or group name, the user/group's properties are displayed.

    You can view and update properties, depending on your rights and privileges.

    NOTE: For groups, this functionality is available for domain groups only; SharePoint groups are
    not linked.

- Clicking a level for a user displays the effective permissions assigned to this user on the
  file/folder.

    You can update the permissions and click **Save** icon.

    ![sitespermissions](/images/directorymanager/11.0/portal/entitlement/sitespermissions.webp)

    Permissions are displayed as **Explicit permissions** which list the effective permissions set
    the user/group has on the file/folder.

## Search document libraries, files and folders in a site

Use the search bar to search for specific files and folders in the site. You can also search for a
file or folder in a particular folder. Click the card for that folder and search for the required
child file/folder.

![sitessearch](/images/directorymanager/11.0/portal/entitlement/sitessearch.webp)

**Search filter**

Below the search box is the **Add new filter** link. Click it to apply a search filter with a
user/group, access type, and permission criterion. This will display shared files/folders that match
your criterion.

- Type the name of a user or group in the **User or Group** box. It must be a specific name, like
  'Sarah' (for user) or 'Engineering team' (for group), and not an object type, like 'users',
  'groups', 'contacts', or 'computers'.
- From the **Access Type** drop-down list, select the _Allow_ or _Deny_ option.
- In the **Permission** box, select one or more permissions.
- Click **Apply filters**.

GroupID Entitlement displays folders and files on which the user/group has the specific access type
with respect to the specified permission(s).

**Example:**

User: Administrator

Access type: Allow

Permission: WriteAttributes, ExecuteFile, Read

This would list all files and folders on which the Administrator has these three permissions -
WriteAttributes, ExecuteFile, and Read - set to 'Allow'.

You can apply multiple search filters. Click **Add new filter** to insert a filter row. Each filter
row is taken as a separate criterion; any file or folder that matches all of these criteria will be
displayed in the results.

## How GroupID Entitlement displays permissions

| Level                                                                  | Access level displayed in GroupID Entitlement SharePoint                                                           |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| User/Group has the 'Full Control' permission level on a file/folder.   | 'Allow' for all list permissions.                                                                                  |
| User/Group has the 'Limited Access' permission level on a file/folder. | 'Allow' only for the View Application Pages list permission.                                                       |
| User/Group has the 'Edit' permission level on a file/folder.           | 'Allow' for all list permissions except Full Control and Approve Items.                                            |
| User/Group has the 'Read' permission level on a file/folder.           | 'Allow' for the View Items, Open Items, View Versions, Create Alerts, and View Application Pages list permissions. |

**See Also**

- [ Entitlement](/docs/directorymanager/11.0/welcome/entitlement/overview.md)
