---
title: "Start Activity Session"
description: "Start Activity Session"
sidebar_position: 20
---

# Start Activity Session

On the Active Sessions dashboard, when the status Available is shown, the activity session is ready.
To begin the activity session, click the Connection icon in the Status column for the applicable
session to be automatically connected to the resource.

![Connecto to remote session](/images/privilegesecure/4.1/accessmanagement/revieweruser/dashboard/startactivitysession.webp)

Also note the icons to view and copy the password for the session as plain text, if the option is
enabled in the access policy Connection Profiles.

- Copy to Clipboard icon — Click to copy the password for the session as plain text. For
  resource–based activities for end users, this is only available if enabled in the activity's
  Access Policy. The password can always be viewed for credential–based activities.
- View Password icon — Click to view the password for the session as plain text. For resource–based
  activities for end users, this is only available if enabled in the activity's Access Policy. The
  password can always be viewed for credential–based activities. To view a password, select the Eye
  icon. Users will have 20 seconds to view the password or copy it.
- Connection icon — Click the icon to begin the activity session.

Alternatively, configure any RDP / SSH Manager for remote login, including:

- PuTTY
- MobaXterm
- MS Remote Desktop Connection Manager
- MS Terminal Services Client (Remote Desktop)

## Session Extension

Each session will remain active for a pre-configured amount of time based on the Connection Profile
being used with the Access Policy. Session extension options can be configured in the connection
profile that allow a session to be extended by the user, in increments.

If Session Extension is enabled, the session extension option appears for users when the remaining
time is 5 minutes or less.

![Extend Activity Session](/images/privilegesecure/4.1/accessmanagement/enduser/dashboard/extendsession.webp)

For RDP, a pop-up message is displayed in the session window.

![extendsessionssh](/images/privilegesecure/4.1/accessmanagement/enduser/dashboard/extendsessionssh.webp)

For SSH the user can extend by typing **Ctrl+X** when prompted.
