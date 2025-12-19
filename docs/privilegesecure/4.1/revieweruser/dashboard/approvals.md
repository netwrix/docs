---
title: "Approvals Dashboard"
description: "Approvals Dashboard"
sidebar_position: 30
---

# Approvals Dashboard

The Approvals Dashboard displays requested sessions that require approval. Users and group members
designated as approvers will see the pending sessions queued here. The session must be approved
before the requestor can log in to the session.

![Approvals Dashboard](/images/privilegesecure/4.1/accessmanagement/revieweruser/dashboard/reviwerapprovalsdashboard.webp)

The Approvals Dashboard has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Approve — Approves the selected session(s)
- Deny — Denies the selected session(s)
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items to complete a bulk action
- Status — Shows status information for the session:

    - Waiting for Approval — The session requires approval to begin.
    - Canceling — The session is either expired or was canceled manually by the user or an Privilege
      Secure administrator.

- Requested — Date and time of when the session was created
- Requested By — User who requested the session
- Host — Resource that the user will run the activity on
- Login Account — Displays the account used to log onto the resource
- Activity — Displays the name of the activity
- Start — Indicates when the activity starts. This refers to when the activity’s actions will be
  executed and not when the user logs on to the resource.
- End — Indicates when the session is scheduled to end the activity, which is determined by the
  start time plus the maximum session duration set by the access policy Connection Profile
- Notes — Any notes that were entered when the session was created
- Ticket Number — Any ticket numbers that were entered when the session was created

The table columns can be resized and sorted in ascending or descending order.
