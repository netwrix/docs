---
title: "Scheduled Dashboard"
description: "Scheduled Dashboard"
sidebar_position: 20
---

# Scheduled Dashboard

The Scheduled sessions dashboard shows all scheduled sessions.

![Scheduled Dashboard Page](/images/privilegesecure/4.1/accessmanagement/admin/dashboard/scheduled.webp)

The Scheduled Sessions table has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Create Session — Open the Activity Request window. See the
  [Create Activity Session](/docs/privilegesecure/4.1/enduser/dashboard/active/createsession.md)
  topic for additional information.
- End Session — Cancel the selected session(s)
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Status — Shows status information for the session:

    - Provisioning — Pre-Session stage of the Activity is processing and assigning permissions to
      the login account
    - Pending — Session scheduled start time is still in the future, session is waiting to start
    - Waiting for Approval — The session requires approval to begin. See the Approvals Dashboard
      topic for additional information.
    - Available — The activity session is ready. Click the icon to begin the session, or log in
      through a client. See the Start Activity Session topic for additional information.
    - Failed — Pre-Session stage of the Activity has encountered an error
    - Logged In — User is successfully logged in to the Resource either directly or via the Proxy.
      Direct log-in is detected by polling the Resource at regular intervals and may not update
      immediately.
    - Canceling — The session is either expired or was canceled manually by the user or an Privilege
      Secure administrator.
    - Locked — The session has been locked by an Privilege Secure administrator. See the
      [Lock Session](/docs/privilegesecure/4.1/admin/dashboard/active/locksession.md)
      topic for additional information.

- Requested — Date and time of when the session was created
- Requested By — User who requested the session
- Host — Displays the name of the host the credentials are on
- Login Account — Displays the account used to log on to the resource
- Access Policy — Displays the name of the policy
- Activity — Displays the name of the activity. Click the link to view additional details. See the
  [Activities Page](/docs/privilegesecure/4.1/admin/interface/activities/activities.md)
  topic for additional information.
- Start — Indicates when the activity is scheduled to start
- End — Indicates when the session is scheduled to end the activity, which is determined by the
  start time plus the maximum session duration set by the access policy Connection Profile

:::note
Sessions can be locked. See the
[Lock Session](/docs/privilegesecure/4.1/admin/dashboard/active/locksession.md)
topic for additional information.
:::


The table columns can be resized and sorted in ascending or descending order.
