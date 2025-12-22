---
title: "File Search Results"
description: "File Search Results"
sidebar_position: 10
---

# File Search Results

When a search has been started, the Search Status table at the bottom displays the percentage
complete according to the size and quantity of the activity log files being searched per activity
agent. You can [Filter](/docs/activitymonitor/8.0/admin/search/overview.md#filter) and [Sort](/docs/activitymonitor/8.0/admin/search/overview.md#sort) the results using the
column headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/admin/search/overview.md#export) option.

![File Search Results UI](/images/activitymonitor/8.0/admin/search/results/filesearchresults.webp)

The results data grid columns display the following information for each event:

- Event Time – Date timestamp of the event
- Agent – Agent which monitored the event
- Host – Monitored host where the event occurred
- Operation – Type of the activity event which was monitored
- User – User account that performed the activity event
- Object – Type of object the activity event occurred upon:

    - File
    - Folder
    - Unknown

- Path – Path where the operation occurred
- New Path – For rename operation events only, the path’s new location/name
- UNC Path – UNC path employed by a remote user to access the share, folder, and/or file
- New UNC Path – For rename operation events only, the UNC path’s new location/name employed by a
  remote user
- Source – Indicates the source of the activity event

    - For local Windows activity – Process name (e.g. notepad.exe)
    - For network Windows activity – IP Address of the user
    - For NAS device activity – IP Address for the NAS device of the user

- Share Name – Name of share where the activity event occurred. This includes NFS.
- I/O Type – Displays the input/output type
- Protocol – Communication protocol used to access the share, folder, and/or file:

    - CIFS
    - NFS
    - VSS
    - HTTP

- Protocol Version – Displays the Protocol Version for NetApp Data ONTAP Cluster-Mode device. This
  field is empty for all other servers/devices.
- File Size — Displays the file size
- Tags — _(Windows Only)_ Operation tags. Reports 'Copy' for events that are probably copies.
- Group — Displays the Group Name or ID (GID)

At the bottom of the search interface, additional information is displayed for selected events in
the data grid. The Attribute Name, Operation, Old Value, and New Value for the logged event (as
applicable to the event) are displayed.

## Permissions Changes

When the results data grid displays information about permissions changes, additional information is
made available.

![Search Results with Permissions listed in the Operations Column](/images/activitymonitor/8.0/admin/search/results/filesearchresultspermissionsimage.webp)

A link displays in the **Operation** column of the results data grid. Click the Permissions Change
link to open the Permissions Change Details window.

![File Search Results Permissions link popup window](/images/activitymonitor/8.0/admin/search/results/permissionslpopupwindow.webp)

The window displays details about the changes of the security descriptor with information from the
new line added to a DACL:

- Change – Type of change which occurred (Added, Removed, etc.)
- Trustee – SAM account name of the affected object
- Type – Type of permission applied (Allow/Deny)
- Access Rights – Rights associated with the type of permission change
- Inheritance – Indicates how the permission change is inherited
