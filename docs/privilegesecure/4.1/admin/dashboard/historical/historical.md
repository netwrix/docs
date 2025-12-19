---
title: "Historical Dashboard"
description: "Historical Dashboard"
sidebar_position: 40
---

# Historical Dashboard

The Historical sessions dashboard shows all created sessions and their status. Only users with the
Administrator role can view recordings of historical sessions.

![historical](/images/privilegesecure/4.1/accessmanagement/admin/dashboard/historical.webp)

The dashboard has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results. See the [Searches](#searches) topic for
  additional information.
- Filter — Provides options to filter results based on a chosen criterion:

    - All Historical tab — Shows all sessions for all users
    - Mine tab — Shows sessions for the logged in user
    - Resource Name – Filter by Host value
    - User Name — Filter by Session User
    - User Type — Filter by type of user: All, User, Application, or Local User
    - Recording data — Filter by keystroke data and, when enabled, RDP Windows event activity. See
      the
      [Install Remote Desktop Monitor Service on Target RDP Hosts](/docs/privilegesecure/4.1/install/servicesonadditionalservers/rdpmonitor.md)
      topic for additional information.
    - Requested date — Filter by session start and/or end dates

- Export as CSV — Generates a CSV file of the table and automatically downloads it to your browser's
  default download folder. The file name indicates what table was exported.
- Refresh — Reload the information displayed

The table has the following columns:

- Actions — Contains icons for available actions:

    - Expand icon — Click the expand () icon to show additional information for the session:

        - If a recording of the session is available, the replay viewer allows an admin to watch a
          replay of the remote session. See the
          [Replay Viewer Window](/docs/privilegesecure/4.1/admin/dashboard/historical/replayviewer.md)
          topic for additional information.

    - Rocket icon — Launches the same session (same activity on the same resource with the same
      connection profile) for any historical session that is not a Credential-based session
    - View logs icon — Opens the Session Logs window to view the action log for the selected
      session. See the
      [Session Logs Window](/docs/privilegesecure/4.1/admin/dashboard/historical/sessionlogs.md)
      topic for additional information.

- Requested — Date and time of when the session was created
- Status — Shows status information for the session:

    - Canceled — Activity was manually canceled before its scheduled end time by an Privilege Secure
      administrator
    - Failed — Pre-Session stage of the Activity has encountered an error
    - Completed — Activity either reached the end of its scheduled end time or was canceled early by
      the requestor

- Session User— User who requested the session. Click the link to view additional details. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.1/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md)
  topic for additional information.
- Host — Resource that the user will run the activity on. Click the link to view additional details.
  The details vary based on the type of resource. See the following topics for additional
  information:

    - [Host Details Page](/docs/privilegesecure/4.1/admin/interface/resources/detailspages/host/host.md)
    - [Domain Details Page](/docs/privilegesecure/4.1/admin/interface/resources/detailspages/domain/domain.md)
    - [Website Details Page](/docs/privilegesecure/4.1/admin/interface/resources/detailspages/website/website.md)
    - [Microsoft Entra ID Details Page](/docs/privilegesecure/4.1/admin/interface/resources/detailspages/entraid/entraid.md)
    - [Secret Vault Details Page](/docs/privilegesecure/4.1/admin/interface/resources/detailspages/secretvault/secretvault.md)
    - [Database Details Page](/docs/privilegesecure/4.1/admin/interface/resources/detailspages/databases/databases.md)

- Login Account — Displays the account used to log onto the resource
- Activity — Displays the name of the activity. Click the link to view additional details. See the
  [Activities Page](/docs/privilegesecure/4.1/admin/interface/activities/activities.md)
  topic for additional information.
- Start — Indicates when the activity started. This refers to when the activity’s actions were
  executed and not when the user was logged on to the resource.
- Duration — Indicates how long the Activity ran for until it either reached its scheduled end time
  or was manually canceled by the user or an Privilege Secure administrator
- Notes — Any notes that were entered when the session was created
- Ticket Number — Any ticket numbers that were entered when the session was created

The table columns can be resized and sorted in ascending or descending order.

## Searches

Searches can be performed across both live and previously recorded sessions. Sessions can be
filtered by resource name, requesting user, user type (standard, application, or local), recording
metadata (keystrokes, screen output and executed commands in Windows session), and date range.
Within the filtered list, any column metadata can be searched including login account (account used
to log onto target), Activity name, user session notes and ticket number. All search and filtering
supports partial string matching.

When metadata is searched and a recorded session is opened, we jump to the point of the recording
where the metadata first appears.
