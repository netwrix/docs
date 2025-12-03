---
title: "History Tab for Microsoft Entra ID"
description: "History Tab for Microsoft Entra ID"
sidebar_position: 60
---

# History Tab for Microsoft Entra ID

The History tab Access Policies tab for Microsoft Entra ID (formerly Azure AD) shows information
about the session history of the selected resource.

![History Tab Entra ID](/images/privilegesecure/25.12/accessmanagement/admin/policy/tab/resources/historyazuread.webp)

The History tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- View Logs — Opens the Session Logs window to view the action log for the selected session. See the
  [Session Logs Window](/docs/privilegesecure/25.12/admin/dashboard/historical/sessionlogs.md) topic for additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Status — Shows status information for the session:

    - Information — Session was successful and row contains details
    - Warning — Session was successful but there were non-critical issues detected
    - Error — Session had an error and row contains details

- Time — Date timestamp for when the event occurred
- User — User who requested the session. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/25.12/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md) topic for
  additional information.
- Access Policy — Displays the name of the policy
- Event Message — Description of the event
- Session ID — Unique identifier for the session

The table columns can be resized and sorted in ascending or descending order.
