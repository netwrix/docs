---
title: "SharePoint Search Query"
description: "SharePoint Search Query"
sidebar_position: 60
---

# SharePoint Search Query

You can search SharePoint activity that has been monitored and recorded to a File output. When you
select **SharePoint** from the magnifying glass drop-down menu, a New Search tab opens with the
applicable query filters.

![SharePoint New Search Tab](/images/activitymonitor/8.0/admin/search/query/sharepointnewsearchtab.webp)

The filters are separated into the following categories:

- General
- Audit
- Move/Delete/Copy/Checkin
- Delete
- Search
- Permissions

By default, the query is set to return all event activity for the past day. Configuring query
filters will scope results returned.

Set the filters as desired and click **Search**. The application searches through the appropriate
activity log files and returns the events that match the filters.You can
[Filter](/docs/activitymonitor/8.0/admin/search/overview.md#filter) and [Sort](/docs/activitymonitor/8.0/admin/search/overview.md#sort) the results using the column
headers. Below the Search button is the [Export](/docs/activitymonitor/8.0/admin/search/overview.md#export) option.

**Filter Value Entry**

When the drop-down menu is in front of a query filter, it is used to show or hide the filter entry
field. Field options vary based on the selected query filter:

- Textbox – Enter the filter value. If the field has a drop-down arrow, then you can select from
  values known to the application.
- Gray drop-down menu – Provides options to match the value against on of the following, which vary
  based on the filter:

    - Selected values – Filters by the value selected from the drop-down menu for the textbox
    - Simple string with wildcards – Filters by the value entered into the textbox, which contains
      an asterisk (\*) as the wildcard
    - Regular expression – Filters by the Regex entered into the textbox

## General Category

The General category addresses who, what, where, and when an object, user, host, or domain
controller is affected by the events selected in the other categories. The time frame filter must be
configured for every search query.

![General Category - SharePoint](/images/activitymonitor/8.0/admin/search/query/generalfilters.webp)

This section has the following filters:

- From – Set the date and timestamp for the start of the activity range. The drop-down menu opens a
  calendar.
- To – Set the date and timestamp for the end of the activity range. The drop-down menu opens a
  calendar.
- Event Type – Filter the data by the event type: All, CheckOut, CheckIn, View, Delete, Update,
  ProfileChange, ChildDelete, SchemaChange, Undelete, Workflow, Copy, Move, AuditMaskChange, Search,
  ChildMove, FileFragmentWrite, SecGroupCreate, SecGroupDelete, SecGroupMemberAdd,
  SecGroupMemberDel, SecRoleDefCreate, SecRoleDefDelete, SecRoleDefModify, SecRoleDefBreakInherit,
  SecRoleBindUpdate, SecRoleBindInherit, SecRoleBindBreakInherit, EventsDeleted, AppPermissionGrant,
  AppPermissionDelete, Custom

    :::note
    Disabling an event type that is also a category will hide that category from the query
    options.
    :::


- Item Type – Filter the data by the type of SharePoint item: All, Document, ListItem, List, Folder,
  Web, Site
- Protocol – Filter the data by the protocol: Any, HTTP, HTTPS
- Agent Hosts – Filter the data for a specific agent
- Agent Domains – Filter the data for a specific domain
- Item
- Source Name
- Site – Filter the data for a specific SharePoint site
- Document Location
- Web Application – Filter the data for a specific SharePoint web application
- Web Title
- User – Filter the data for a specific user, or perpetrator of the event

    - Specify account or group (...) – The ellipsis button beside the User textbox opens the Specify
      account or group window. Use this window to resolve the account for the user. See the
      [Specify Account or Group Window](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/specifywindowsaccount.md) topic for
      additional information.

- Search Limit – Set the maximum number of rows returned in the search results. The default is
  10,000 rows.
- Event Source – Filter the data by the source: Any, SharePoint, ObjectModel
- Location Type – Filter the data by the type of location: Any, Url, ClientLocation

## Audit Category

The Audit category scopes the query by audit mask activity.

![SharePoint Search - Audit filter section](/images/activitymonitor/8.0/admin/search/query/auditmask.webp)

This section has the following filters:

- Audit Mask – Filter the data by the audit mask type: All, None, CheckOut, CheckIn, View, Delete,
  Update, ProfileChange, ChildDelete, SchemaChange, SecurityChange, Undelete, Workflow, Copy, Move,
  Search

## Move/Delete/Copy/Checkin Category

The Move/Delete/Copy/Checkin category scopes the query by file move and version activity.

![SharePoint Search Query - Move/Delete/Copy/Checkin Filters](/images/activitymonitor/8.0/admin/search/query/movedeletecopycheckinfilters.webp)

This section has the following filters:

- Child Document Location
- New Child Document Location
- Version

## Delete Category

The Delete category scopes the query by type of delete activity.

![SharePoint Search Query - Delete FIlters](/images/activitymonitor/8.0/admin/search/query/delete.webp)

This section has the following filters:

- Delete Type – Filter the data by the type of deletion: Any, MovedToRecycle, DeletedCompletely

## Search Category

The Search category scopes the query by search activity.

![SharePoint Search Query - Search Filters](/images/activitymonitor/8.0/admin/search/query/searchfilters.webp)

This section has the following filters:

- Search Query
- Search Constraint

## Permissions Category

The Permissions category scopes the query by permission change activity.

![SharePoint Search Query - Permissions Filters](/images/activitymonitor/8.0/admin/search/query/permissionsfilters.webp)

This section has the following filters:

- Group
- Trustee
- Trustee Type – Filter the data by the type of trustee: Any, Group, User
- Role
- Update Type – Filter the data by the type of update: All, Added, Removed, Updated
- Permission – Filter the data by the permission: All, EmptyMask, ViewListItems, AddListItems,
  EditListItems, DeleteListItems, CancelCheckout, ManagePersonalViews, ManageLists,
  AnonymousSearchAccessList, AnonymousSearchAccessWebLists, Open, ViewFormPages, ViewPages,
  AddAndCustomizePages, ApplyThemeAndBorder, ApplyStyleSheets, ViewUsageData, CreateSSCSite,
  ManageSubwebs, ManagePermissions, BrowseDirectories, BrowseUserInfo, AddDelPrivateWebParts,
  UpdatePersonalWebParts, ManageWeb, FullMask, UseClientIntegration, UseRemoteAPIs, ManageAlerts,
  CreateAlerts, EditMyUserInfo, EnumeratePermissions, ApproveItems, OpenItems, ViewVersions,
  DeleteVersions, CreateGroups
