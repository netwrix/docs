---
title: "Start Activity Session"
description: "Start Activity Session"
sidebar_position: 20
---

# Start Activity Session

On the Active Sessions dashboard, when the status Available is shown, the activity session is ready.
To begin the activity session, click the Connection icon in the Status column for the applicable
session to be automatically connected to the resource.

![Connecto to remote session](/images/privilegesecure/4.2/accessmanagement/admin/dashboard/startsession.webp)

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

:::note
For NPS users with the Administrator role, session extension is always enabled.
:::


![Extend Activity Session](/images/privilegesecure/4.2/accessmanagement/enduser/dashboard/extendsession.webp)

For RDP, a pop-up message is displayed in the session window.

![extendsessionssh](/images/privilegesecure/4.2/accessmanagement/enduser/dashboard/extendsessionssh.webp)

For SSH the user can extend by typing **Ctrl+X** when prompted.

## SSH for Legacy Cisco Device

If the Cisco device is running with insecure ciphers when the user attempts to connect to an
SSH session, the following error message is displayed:

ssh: handshake failed: ssh: no common algorithm for key exchange; client offered:
[curve25519-sha256@libssh.org ecdh-sha2-nistp256 ecdh-sha2-nistp384 ecdh-sha2-nistp521
diffie-hellman-group14-sha1], server offered: [diffie-hellman-group1-sha1]

Ideally the Cisco device should be upgraded to support secure ciphers. If this is not possible, it
is necessary to add additional ciphers to machines with older (insecure) ciphers that need to be
managed with SSH. You can “opt-in” by configuring the cipher suites used by the Proxy Service.

See the [Proxy Service Install](/docs/privilegesecure/4.2/install/servicesonadditional/proxyservice.md) topic for additional information.

## DirectConnect Inline Password Prompt

RDP DirectConnect now supports the prompting of users for password, removing the old requirement to
modify group/local policy to force RDP password prompts.

![Direct Connect password prompt](/images/privilegesecure/4.2/accessmanagement/admin/dashboard/directconnect.webp)

If a password is entered outside of the RDP session, this will be automatically be used and the
inline password prompt will not display, unless there is an authentication error.
