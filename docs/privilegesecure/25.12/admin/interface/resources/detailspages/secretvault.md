---
title: "Secrets Vault Details Page"
description: "Secret Vault Details Page"
sidebar_position: 50
---

# Secrets Vault Details Page

Secret Vaults are used to store any manually-managed resource, username, or password combination. This is where we describe how to add credentials and files to a vault.

For information on allowing users access to the credentials and files in the vault, see [Access Policy](/docs/privilegesecure/25.12/admin/interface/accesspolicy/addaccesspolicy.md) and create an Access Policy that is Credential based. Then see [Credential-based Access Policy](/docs/privilegesecure/25.12/admin/interface/accesspolicy/credentials.md)

![Secrete Vault Details Page](/images/privilegesecure/25.12/accessmanagement/admin/policy/page/details/secretvaultdetailspage.png)

The details page shows the following information:

- Name — Displays the name of the resource
- Trashcan icon — Deletes this credential. A confirmation window will display.
- Platform — Displays the type of platform, which defines the resource
- Description — Description of the policy

## Accounts Tab

The Accounts tab is where managed account credentials are added to the vault and has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add — Opens the Add a Managed Account window. Add the resource name, username, secret, and comments (opional).
![Add managed account](/images/privilegesecure/25.12/accessmanagement/admin/policy/page/details/addmanagedaccount.png)
- Edit — Opens the Edit a Managed Account window. 
- Delete — Removes the selected item. A confirmation window will appear.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Resource — Name of the resource that the account is on
- Username — Displays the name of the account
- Created — Date timestamp when the account was added to the secret vault

The table columns can be resized and sorted in ascending or descending order.

## Files Tab

The Files tab is where files are added to the vault and has the following features:

- Search — Searches the table or list for matches to the search string. 
- Add — Opens the Add Encrypted File window. Drag and drop the file or click the designated area to browse.  Add a comment (optional)
![Add managed account](/images/privilegesecure/25.12/accessmanagement/admin/policy/page/details/addfile.png)
- Edit — Opens the Edit a Encrypted File window. 
- Delete — Removes the selected item. A confirmation window will appear.
- Refresh — Reload the information displayed

The table has the following columns:

- Action — Download the file or checksum by clicking on the respective icons.
- File type — Format of the file
- Size — File size
- Comment — Notes that were added to the file metadata
- Created -- Date timestamp when the account was added to the secret vault

The table columns can be resized and sorted in ascending or descending order.

## Sessions Tab

The Sessions tab has the following features:

- Search — Searches the table or list for matches to the search string. 
- View Logs — Opens the Session Logs window to view the action log for the selected session. See the
  [Session Logs Window](/docs/privilegesecure/25.12/admin/dashboard/historical/sessionlogs.md) topic for additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Requested — Date and time of when the session was created
- Requested By — User who requested the session. Click the link to view additional details. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/25.12/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md) topic for
  additional information.
- Login Account — Displays the account used to log onto the resource
- Activity — Displays the name of the activity. Click the link to view additional details. See the
  [Activities Page](/docs/privilegesecure/25.12/admin/interface/activities/activities.md) topic for additional information.
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
      [Lock Session](/docs/privilegesecure/25.12/admin/dashboard/active/locksession.md) topic for additional information.

The table columns can be resized and sorted in ascending or descending order.

## History Tab

The History tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- View Logs — Opens the Session Logs window to view the action log for the selected session. See the
  [Session Logs Window](/docs/privilegesecure/25.12/admin/dashboard/historical/sessionlogs.md) topic for additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Status — Shows status information for the session:

    - Information — Session was successful and row contains details
    - Error — Session had an error and row contains details

- Time — Date timestamp for when the event occurred
- User — User who requested the session. Click the link to view additional details. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/25.12/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md) topic for
  additional information.
- Access Policy — Displays the name of the policy
- Event Message — Description of the event
- Session ID — Unique identifier for the session

The table columns can be resized and sorted in ascending or descending order.
