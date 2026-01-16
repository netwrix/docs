---
title: "Users Tab for Resource Based Access Policies"
description: "Users Tab for Resource Based Access Policies"
sidebar_position: 10
---

# Users Tab for Resource Based Access Policies

The Users tab shows the users and groups associated with the selected access policy.

![Resource based policy users tab](/images/privilegesecure/25.12/accessmanagement/admin/policy/tab/policyresource/userstab.webp)

The Users tab has the following features:

- Add — Opens the Add Users and Groups window. See the
  [Add Users & Groups Window](/docs/privilegesecure/25.12/admin/interface/usersgroups/add/addusersandgroups.md) topic for additional
  information.
- Remove — Removes the selected item from being associated with the policy
- Search — Searches the table or list for matches to the search string. 

:::note
If a seach finds a match for a user (or users) that is not already listed in the policy, an "Add User" box appears. Clicking on this box will open the Add User modal with the search results for quickly adding users.
:::

 ![Quick Add](/images/privilegesecure/25.12/accessmanagement/admin/policy/tab/policyresource/quickadd.png)
- Type — Provides options to filter results based on a chosen criterion:

    - All — Displays all individual and group types
    - User — Displays user types
    - Group — Displays group types
    - Application — Displays application types
    - Collection — Displays collection types
    - Local User — Displays local user types

- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Expand — Click the expand () icon to show additional information about the activities and
  resources authorized for the selected user or group
- Name — Displays the name of the account. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/25.12/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md) topic for
  additional information.
- Email — Displays the associated email address, if available
- User Name — Displays the sAMAccountName for the account
- Type — Icon indicates the type of object
- Certified — Indicates the access entitlement for the user or group. See the
  [Access Certification Page](/docs/privilegesecure/25.12/admin/AuditReporting/accesscertification/accesscertification.md) topic for
  additional information.

    - Approved — Access entitlements have been approved
    - Denied — Access entitlements have been revoked
    - Incomplete — No access entitlement review has been completed

The table columns can be resized and sorted in ascending or descending order.
