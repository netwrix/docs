---
title: "Operations Tab"
description: "Operations Tab"
sidebar_position: 60
---

# Operations Tab

The Operations tab on an output Properties window is where monitoring scope by operation can be
modified. These settings are initially configured when the output is added.

Select an output from the Monitored Hosts & Services tab and click **Edit** to open the output Properties
window. The tab varies based on the type of host selected.

## For Linux Hosts

The tab contains the following settings and features:

![linux](/images/activitymonitor/9.0/admin/outputs/linux.webp)

Use the options in the Operations tab to filter the list of available audit activities. The options
are:

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission
  change, Read / List

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Microsoft Entra ID Hosts

The tab contains the following settings and features:

![Host Properties - Azure AD Operations tab](/images/activitymonitor/9.0/admin/outputs/azureadoperationstab.webp)

- Monitor Sign-Ins activity – Indicates if user sign-ins activity is monitored
- Monitor Audit activity – Indicates if audit for all operations is monitored
- Service – Filter the table by Service using the drop-down menu
- Category – Filter the table by Category using the drop-down menu
- Operation – Filter the table by Operation using the textbox

The table lists operations being monitored, displaying columns for Service, Category, and Operation.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Nasuni Hosts

The tab contains the following settings and features:

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission
  change, Read / List
- Link Operations – Scope by link operation events: Add, Delete
- Suppress reporting of File Explorer's excessive directory traversal activity – When you open a
  folder, Windows File Explorer tends to read all sub-folders to display proper icons and meta-data.
  This activity occurs without the explicit intent of the user. This option tries to suppress such
  automatic activity. It is only available when the Read / List option for Directory Operations is
  selected.
- Suppress reporting of File Explorer's excessive file read activity – When you open a folder,
  Windows File Explorer tends to read files in the folder to display proper icons and meta-data.
  This activity occurs without the explicit intent of the user. This option tries to suppress such
  automatic activity. It is only available when the Read option for File Operations is selected.
- Suppress Microsoft Office operations on temporary files – Filters out events for Microsoft Office
  temporary files. When Microsoft Office files are saved or edited, many temporary files are
  created. With this option enabled, events for these temporary files are ignored.
- Suppress operations on common temporary files – Filters out events for common temporary files.
  With this option enabled, events for these common temporary files are ignored.
- Suppress duplicate operations for [VALUE] seconds

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Nutanix Hosts

The tab contains the following settings and features:

![operations](/images/activitymonitor/9.0/admin/outputs/operations.webp)

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission change

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Qumulo Hosts

The tab contains the following settings and features:

![qumulooutputproperties](/images/activitymonitor/9.0/admin/outputs/qumulooutputproperties.webp)

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission
  change, Read / List
- Share Operations – Scope by share operation events: Add, Delete, Update, Read / Connect
- Suppress operations on common temporary files – Filters out events for common temporary files.
  With this option enabled, events for these common temporary files are ignored.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SharePoint Host

The tab contains the following settings and features:

![Operations Tab for SharePoint](/images/activitymonitor/9.0/admin/outputs/sp.webp)

- SharePoint operations – Scope by SharePoint operation events: Check-Out, View, Update, Child
  Delete, Undelete, Copy, Audit Mask Change, Child Move, Custom, Check-In, Delete, Profile Change,
  Schema Change, Workflow, Move, Search, File Fragment Write
- Permission Operations – Scope by permission operation events: Creation of a user group, Addition
  of a new member to a group, creation of a new role, Changing a role, Changing the permissions of a
  user or group, Turning off inheritance of security settings, Granting App Permissions, Deletion of
  a group, Deletion of a member from a group, Removal of a role, Turning off inheritance of role,
  Turning on inheritance of security settings, Deletion of audited events, Revoking App Permissions

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SharePoint Online Host

The tab contains a subset of tabs. Each tab has a **Select All** check box to include all events for
that tab.

![Operations Tab for SharePoint Online Properties](/images/activitymonitor/9.0/admin/outputs/operationstab.webp)

You can scope by the following events:

| Tab                        | Event                                         |
| -------------------------- | --------------------------------------------- |
| Content Explorer           | Accessed item                                 |
| DLP                        | Designated false positive                     |
| DLP                        | Matched DLP rule                              |
| DLP                        | Undone DLP action                             |
| File and Page              | Accessed File                                 |
| File and Page              | Accessed File (ext)                           |
| File and Page              | Changed compliance policy label               |
| File and Page              | Changed record status to locked               |
| File and Page              | Changed record status to unlocked             |
| File and Page              | Checked in file                               |
| File and Page              | Checked out file                              |
| File and Page              | Copied file                                   |
| File and Page              | Deleted file                                  |
| File and Page              | Deleted file from recycle bin                 |
| File and Page              | Deleted file from second-stage recycle bin    |
| File and Page              | Deleted record compliance policy label        |
| File and Page              | Detected document sensitivity mismatch        |
| File and Page              | Detected malware in file                      |
| File and Page              | Discarded file checkout                       |
| File and Page              | Downloaded file                               |
| File and Page              | Modified file                                 |
| File and Page              | Modified file (ext)                           |
| File and Page              | Moved file                                    |
| File and Page              | Performed search query                        |
| File and Page              | Prefetched page                               |
| File and Page              | Previewed file                                |
| File and Page              | Recycled all minor versions of file           |
| File and Page              | Recycled all versions of file                 |
| File and Page              | Recycled version of file                      |
| File and Page              | Renamed file                                  |
| File and Page              | Restored file                                 |
| File and Page              | Uploaded file                                 |
| File and Page              | View signaled by client                       |
| File and Page              | Viewed page                                   |
| File and Page              | Viewed page (ext)                             |
| Folder                     | Copied folder                                 |
| Folder                     | Created folder                                |
| Folder                     | Deleted folder                                |
| Folder                     | Deleted folder from recycle bin               |
| Folder                     | Deleted folder from second-stage recycle bin  |
| Folder                     | Modified folder                               |
| Folder                     | Moved folder                                  |
| Folder                     | Renamed folder                                |
| Folder                     | Restored folder                               |
| List                       | Created list                                  |
| List                       | Created list column                           |
| List                       | Created list column                           |
| List                       | Created list content type                     |
| List                       | Created list item                             |
| List                       | Created site column                           |
| List                       | Created site content type                     |
| List                       | Deleted list                                  |
| List                       | Deleted list column                           |
| List                       | Deleted list content type                     |
| List                       | Deleted list item                             |
| List                       | Deleted site column                           |
| List                       | Deleted site content type                     |
| List                       | Recycled list item                            |
| List                       | Restored list                                 |
| List                       | Restored list item                            |
| List                       | Updated list                                  |
| List                       | Updated list column                           |
| List                       | Updated list content type                     |
| List                       | Updated list item                             |
| List                       | Updated site column                           |
| List                       | Updated site content type                     |
| Other                      | Other events                                  |
| Sensitive Label            | Applied sensitivity label to file             |
| Sensitive Label            | Applied sensitivity label to site             |
| Sensitive Label            | Changed sensitivity label applied to file     |
| Sensitive Label            | Removed sensitivity label from file           |
| Sensitive Label            | Removed sensitivity label from site           |
| Sharing and Access Request | Accepted access request                       |
| Sharing and Access Request | Accepted sharing invitation                   |
| Sharing and Access Request | Added permission level to site collection     |
| Sharing and Access Request | Blocked sharing invitation                    |
| Sharing and Access Request | Created a company shareable link              |
| Sharing and Access Request | Created access request                        |
| Sharing and Access Request | Created an anonymous link                     |
| Sharing and Access Request | Created secure link                           |
| Sharing and Access Request | Created sharing invitation                    |
| Sharing and Access Request | Deleted secure link                           |
| Sharing and Access Request | Denied access request                         |
| Sharing and Access Request | Removed a company shareable link              |
| Sharing and Access Request | Removed an anonymous link                     |
| Sharing and Access Request | Shared file, folder, or site                  |
| Sharing and Access Request | Unshared file, folder, or site                |
| Sharing and Access Request | Updated access request                        |
| Sharing and Access Request | Updated an anonymous link                     |
| Sharing and Access Request | Updated sharing invitation                    |
| Sharing and Access Request | Used a company shareable link                 |
| Sharing and Access Request | Used an anonymous link                        |
| Sharing and Access Request | Used secure link                              |
| Sharing and Access Request | User added to secure link                     |
| Sharing and Access Request | User removed from secure link                 |
| Sharing and Access Request | Withdrew sharing invitation                   |
| Site Administration        | Added allowed data location                   |
| Site Administration        | Added exempt user agent                       |
| Site Administration        | Added geo location admin                      |
| Site Administration        | Allowed user to create groups                 |
| Site Administration        | Canceled site geo move                        |
| Site Administration        | Changed a sharing policy                      |
| Site Administration        | Changed device access policy                  |
| Site Administration        | Changed exempt user agents                    |
| Site Administration        | Changed network access policy                 |
| Site Administration        | Completed site geo move                       |
| Site Administration        | Created Sent To connection                    |
| Site Administration        | Created site collection                       |
| Site Administration        | Deleted orphaned hub site                     |
| Site Administration        | Deleted Sent To connection                    |
| Site Administration        | Deleted site                                  |
| Site Administration        | Enabled document preview                      |
| Site Administration        | Enabled legacy workflow                       |
| Site Administration        | Enabled Office on Demand                      |
| Site Administration        | Enabled result source for People Searches     |
| Site Administration        | Enabled RSS feeds                             |
| Site Administration        | Joined site to hub site                       |
| Site Administration        | Registered hub site                           |
| Site Administration        | Removed allowed data location                 |
| Site Administration        | Removed geo location admin                    |
| Site Administration        | Renamed site                                  |
| Site Administration        | Scheduled site geo move                       |
| Site Administration        | Set host site                                 |
| Site Administration        | Set storage quota for geo location            |
| Site Administration        | Unjoined site from hub site                   |
| Site Administration        | Unregistered hub site                         |
| Site Permissions           | Added site collection admin                   |
| Site Permissions           | Added user or group to SharePoint group       |
| Site Permissions           | Broke permission level inheritance            |
| Site Permissions           | Broke sharing inheritance                     |
| Site Permissions           | Created group                                 |
| Site Permissions           | Deleted group                                 |
| Site Permissions           | Modified access request setting               |
| Site Permissions           | Modified 'Members Can Share' setting          |
| Site Permissions           | Modified permissions level on site collection |
| Site Permissions           | Modified site permissions                     |
| Site Permissions           | Removed permission level from site collection |
| Site Permissions           | Removed site collection admin                 |
| Site Permissions           | Removed user or group from SharePoint group   |
| Site Permissions           | Requested site admin permissions              |
| Site Permissions           | Restored sharing inheritance                  |
| Site Permissions           | Updated group                                 |
| Synchronization            | Allowed computer to sync files                |
| Synchronization            | Blocked computer from syncing files           |
| Synchronization            | Downloaded file changes to computer           |
| Synchronization            | Downloaded files to computer                  |
| Synchronization            | Uploaded file changes to document library     |
| Synchronization            | Uploaded files to document library            |

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SQL Server Hosts

The tab contains the following settings and features:

![sql](/images/activitymonitor/9.0/admin/outputs/sql.webp)

- DML operations – Scope by DML operation events: Select, Update, Merge, Insert, Delete, Execute
- Audit operations – Scope by audit operation events: Login, Logout, Login Failed, Error
- Permission operations – Scope by permission operation events: Grant, Deny, Revoke, Alter Role
- Suppress subsequent logon/logout events from the same user in [VALUE] minutes interval

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Windows File Server Hosts

The tab contains the following settings and features:

![Operations Tab for File System](/images/activitymonitor/9.0/admin/outputs/fs.webp)

- Operation Type – Scope events by operation type:

    - All – Both allowed and denied operations
    - Allowed only – Only allowed operations
    - Denied only – Only denied operations

- File Operations – Scope by file operation events: Add, Delete, Rename, Permission change, Read,
  Update
- Directory Operations – Scope by directory operation events: Add, Delete, Rename, Permission
  change, Read / List
- Share Operations – Scope by share operation events: Add, Delete, Update, Permission change
- VSS Operations – Scope by VSS operation events: Snapshot add, Snapshot delete, Read
- Suppress reporting of File Explorer's excessive directory traversal activity – When you open a
  folder, Windows File Explorer tends to read all sub-folders to display proper icons and meta-data.
  This activity occurs without the explicit intent of the user. This option tries to suppress such
  automatic activity. It is only available when the Read / List option for Directory Operations is
  selected.
- Suppress reporting of File Explorer's excessive file read activity – When you open a folder,
  Windows File Explorer tends to read files in the folder to display proper icons and meta-data.
  This activity occurs without the explicit intent of the user. This option tries to suppress such
  automatic activity. It is only available when the Read option for File Operations is selected.
- Suppress Permission Change operations with reordered ACL – Prevents tracking events where
  permission updates occurred resulting in reordered ACEs, but with no other changes in the ACL
- Suppress Inherited Permissions Changes – Prevents tracking events where changes for inherited
  permissions occurred. This option is provided to improve overall performance and reduce output log
  volume.
- Suppress Microsoft Office operations on temporary files – Filters out events for Microsoft Office
  temporary files. When Microsoft Office files are saved or edited, many temporary files are
  created. With this option enabled, events for these temporary files are ignored.
- Suppress operations on common temporary files – Filters out events for common temporary files.
  With this option enabled, events for these common temporary files are ignored.
- Suppress duplicate operations for [VALUE] seconds

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

See[Suppress Windows Explorer Activity](/docs/activitymonitor/9.0/admin/outputs/operations/suppress.md) topic for more information.
