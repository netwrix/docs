---
title: "Scheduled Dashboard"
description: "Scheduled Dashboard"
sidebar_position: 20
---

# Scheduled Dashboard

The Scheduled sessions dashboard shows all scheduled sessions.

![Scheduled Dashboard](/images/privilegesecure/4.1/accessmanagement/revieweruser/dashboard/reviwerscheduleddashboard.webp)

The Scheduled Sessions table has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Create Session — Open the Activity Request window. See the
  [Create Activity Session](/docs/privilegesecure/4.1/revieweruser/dashboard/active/createsession.md)
  topic for additional information.
- End Session — Cancel the selected session(s)
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Status — Shows status information for the session:

    - Provisioning — Pre-Session stage of the Activity is processing and assigning permissions to
      the login account
    - Pending — Session scheduled start time is still in the future, session is waiting to start
    - Waiting for Approval — The session requires approval to begin. See the
      [Approvals Dashboard](/docs/privilegesecure/4.1/revieweruser/dashboard/approvals.md)
      topic for additional information.
    - Available — The activity session is ready. Click the icon to begin the session, or log in
      through a client. See the
      [Start Activity Session](/docs/privilegesecure/4.1/revieweruser/dashboard/active/startsession/startsession.md)
      topic for additional information.
    - Failed — Pre-Session stage of the Activity has encountered an error
    - Logged In — User is successfully logged in to the Resource either directly or via the Proxy.
      Direct log-in is detected by polling the Resource at regular intervals and may not update
      immediately.
    - Canceling — The session is either expired or was canceled manually by the user or an Privilege
      Secure administrator.
    - Locked — The session has been locked by an Privilege Secure administrator

- Requested — Date and time of when the session was created
- Requested By — User who requested the session
- Host — Resource that the user will run the activity on
- Login Account — Displays the account used to log onto the resource
- Activity — Displays the name of the activity
- Start — Indicates when the activity starts. This refers to when the activity’s actions will be
  executed and not when the user logs on to the resource.
- End — Indicates when the session is scheduled to end the activity, which is determined by the
  start time plus the maximum session duration set by the access policy Connection Profile

The table columns can be resized and sorted in ascending or descending order.
