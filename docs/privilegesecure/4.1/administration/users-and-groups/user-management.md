# History Tab

The History tab shows information about the session history of the selected user, group, or
application.

![History Tab for Application User](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/usersgroups/userhistorytab.webp)

The History tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- View Logs — Opens the Session Logs window to view the action log for the selected session. See the
  [Session Logs Window](/docs/privilegesecure/4.1/administration/session-management/session-logs.md)
  topic for additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Status — Shows status information for the session:

  - Information — Session was successful and row contains details
  - Error — Session had an error and row contains details

- Time — Date timestamp for when the event occurred
- User— Displays the name of the account. Click the link to view additional details. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.1/administration/applications/index.md)
  topic for additional information.
- Access Policy — Displays the number of access policies associated
- Event Message — Description of the event
- Session ID — Unique identifier for the session

The table columns can be resized and sorted in ascending or descending order.

# Properties Tab

The Properties Tab enables Privilege Secure administrators to provide additional metadata for the
application according to the use case.

![Properties Tab for Application User](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/usersgroups/applicationpropertiestab.webp)

The Properties tab has the following fields:

- Display Name — Displays the name of the application
- Department — Displays the associated department, if available
- Email — Displays the associated email address, if available
- SamAccountName — Displays the sAMAccountName for the account
- User Principal Name — Displays the UPN value for the account

# Sessions Tab

The Sessions tab shows information about the sessions of the selected user, group, or application.

![Sessions Tab for Application Users](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/usersgroups/usersessionstab.webp)

The Sessions tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- End Session — Cancel the selected session(s)
- View Log — View a detailed event log of the session. A new window opens that shows an event log
  for the session.

  **NOTE:** If a session is associated with a Secret Vault, the activity log displays access to
  secrets but does not record the secret content.

- Lock/Unlock — Locks/Unlocks the user session. See the
  [Lock Session](/docs/privilegesecure/4.1/administration/session-management/lock-session.md)
  topic for additional information.
- Terminate Session — Ends a selected session
- Refresh — Reload the information displayed

The table has the following columns:

- Requested — Date and time of when the session was created
- User — Displays the account used to log onto the resource
- Host — Resource that the user will run the activity on. The details vary based on the type of
  resource. See the
  [Resources Page](/docs/privilegesecure/4.1/administration/resources/index.md)
  topic for additional information.
- Start — Indicates when the activity started. This refers to when the activity's actions were
  executed and not when the user was logged on to the resource.
- End — Indicates when the session is scheduled to end the activity, which is determined by the
  start time plus the maximum session duration set by the access policy Connection Profile
- Status — Shows status information for the session:

  - Provisioning — Pre-Session stage of the Activity is processing and assigning permissions to
    the login account
  - Complete — Activity either reached the end of its scheduled end time or was canceled early by
    the requestor
  - Waiting for Approval — The session requires approval to begin. See the Approvals Dashboard
    topic for additional information.
  - Available — The activity session is ready. Click the icon to begin the session, or log in
    through a client. See the Start Activity Session topic for additional information.
  - Failed — Pre-Session stage of the Activity has encountered an error
  - Approval Failed — Approval request has encountered an error
  - Logged In — User is successfully logged in to the Resource either directly or via the Proxy.
    Direct log-in is detected by polling the Resource at regular intervals and may not update
    immediately.
  - Canceling — The session is either expired or was canceled manually by the user or an Privilege
    Secure administrator.
  - Locked — The session has been locked by an Privilege Secure administrator. See the
    [Lock Session](/docs/privilegesecure/4.1/administration/session-management/lock-session.md)
    topic for additional information.

- Activity — Displays the name of the activity. Click the link to view additional details. See the
  [Activities Page](/docs/privilegesecure/4.1/administration/activities/index.md)
  topic for additional information.

The table columns can be resized and sorted in ascending or descending order.
