---
title: "Sessions Tab for Secret Vault"
description: "Sessions Tab for Secret Vault"
sidebar_position: 20
---

# Sessions Tab for Secret Vault

The Sessions tab shows information about the sessions of the selected resource.

![Sessions Tab for Secret Vault Resource](/images/privilegesecure/4.2/accessmanagement/admin/policy/tab/resources/sessionstabforsecretvault.webp)

The Sessions tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- View Logs — Opens the Session Logs window to view the action log for the selected session. See the
  [Session Logs Window](/docs/privilegesecure/4.2/admin/dashboard/historical/sessionlogs.md) topic for additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Requested — Date and time of when the session was created
- Requested By — User who requested the session. Click the link to view additional details. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.2/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md) topic for
  additional information.
- Login Account — Displays the account used to log onto the resource
- Activity — Displays the name of the activity. Click the link to view additional details. See the
  [Activities Page](/docs/privilegesecure/4.2/admin/interface/activities/activities.md) topic for additional information.
- Start — Indicates when the activity started. This refers to when the activity’s actions were
  executed and not when the user was logged on to the resource.
- End — Indicates when the session is scheduled to end the activity, which is determined by the
  start time plus the maximum session duration set by the access policy Connection Profile
- Status — Shows status information for the session:

    - Waiting for Approval — The session requires approval to begin. See the Approvals Dashboard
      topic for additional information.
    - Approval Denied — Requested session was denied
    - Approval Failed — Approval request has encountered an error
    - Pending — Session scheduled start time is still in the future, session is waiting to start.
      See the Scheduled Dashboard topic for additional information.
    - Available — The activity session is ready. Click the icon to begin the session, or log in
      through a client. See the Start Activity Session topic for additional information.
    - Completed — Activity either reached the end of its scheduled end time or was canceled early by
      the requestor
    - Canceled — The session is either expired or was canceled manually by the user or an Privilege
      Secure administrator.
    - Failed — Pre-Session stage of the Activity has encountered an error
    - Locked — The session has been locked by an Privilege Secure administrator. See the
      [Lock Session](/docs/privilegesecure/4.2/admin/dashboard/active/locksession.md) topic for additional information.

The table columns can be resized and sorted in ascending or descending order.
