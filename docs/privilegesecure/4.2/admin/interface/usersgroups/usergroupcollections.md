---
title: "User and Group Collections Page"
description: "User and Group Collections Page"
sidebar_position: 40
---

# User and Group Collections Page

The User and Group Collection page is accessible from the Navigation pane under Users & Group. It
shows session information for user and group collections. To gain access to the Privilege Secure
console, users or groups have to be added in the top level [Users & Groups Page](/docs/privilegesecure/4.2/admin/interface/usersgroups/usersgroups.md).

Collections are conglomerated users and groups (that have already been granted rights in the
console) that will gain the same rights collectively. Like users and groups individually,
collections can also be added to policies. Collections are helpful as they allow multiple roles to
be assigned in a single action in the console. The information in the User and Group Collections
table is also displayed on the **Users Dashboard**.

![Users and Group Collections Page](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/userandgroupcollectionspage.webp)

The pane on the left side of the page displays a list of the configured collections. This pane has
the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Blue + button — Create a new collection. See the
  [Add Users & Groups Window](/docs/privilegesecure/4.2/admin/interface/usersgroups/add/addusersandgroups.md) topic for additional
  information.
- Trashcan icon — Deletes the access policy. Icon appears when policy is hovered over. A
  confirmation window will display.

The selected collection details display at the top of the main pane:

- Name — Name of the collection
- Description — A brief description of the collection
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: User, Groups, or
  Applications
- Add Users and Groups button — Opens the Add Users and Groups window
- Remove — Removes console access from the selected account
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Type — Icon indicates the type of object
- Name — Displays the name of the account. Click the link to view additional details. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md) topic for additional
  information.
- User Name — Displays the sAMAccountName for the account
- User Principal Name — Displays the UPN value for the account
- Email — Displays the associated email address, if available
- Active Sessions — Displays the number of active sessions for the user or group
- Scheduled Sessions — Displays the number of sessions scheduled for the user or group
- Access Policies — Displays the number of access policies associated with the user or group

The table columns can be resized and sorted in ascending or descending order.
