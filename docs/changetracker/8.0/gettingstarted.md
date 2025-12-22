---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 2
---

# Getting Started

Once you have successfully installed Netwrix Change Tracker, and logged in for the first time (see
2FA section below), you can start putting it to work. Change Tracker can collect data for the
reports with or without agents. By default, an agent is installed on the Change Tracker machine, so
you can quickly check the data collection and reports using that agent. Alternatively, you can
collect data from other devices in your network. Either way, your starting point will be the
[Device Tab](/docs/changetracker/8.0/admin/devices.md).

Once you have established data collection, use the Reports tab to view reports on you device's
configuration.

Next, use the
[Planned Changes Tab](/docs/changetracker/8.0/admin/plannedchanges/plannedchanges.md)
manage change events and filter any changes that are considered as noise.

To add another user, manage licenses, set the planned change intervals, and otherwise configure
Change Tracker, review the
[Settings Tab](/docs/changetracker/8.0/admin/settingstab/settingstab.md).

## Two Factor Authentication

Sign in as the root "admin" account and follow the instructions to register Change Tracker with an
authenticator app on your mobile device.

Once registered with your authenticator app, use it to provide a One-Time Passcode (OTP) to complete
the 2FA registration.

A One-Time Passcode (OTP) must now be provided during the sign in process.

2FA is highly recommended, but it is possible to be disabled. Clearing the "2FA login" checkbox
against the User account in the User Admin page will disable 2FA for the user. If a One-Time
Passcode (OTP) is not provided during the sign in process, one may be required when attempting
certain actions within Change Tracker for the first time during a session.

If the root admin user is NOT able to use an authenticator app for 2FA on the first login, then set
the following configuration settings in the C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore)
Hub\Configs\appsettings.json file as shown:

security > auth > twoFactor > "registerAdmin": "false"

security > auth > twoFactor > "fallbackEnabled": "true" (default setting)

![2faconfiguration](/images/changetracker/8.0/admin/2faconfiguration.webp)

A One-Time Passcode (OTP) may be required when attempting certain actions within Change Tracker for
the first time during a session. Without 2FA or an authenticator app, this OTP will be written to
the application log file (C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore)
Hub\logs\hubservice-log.txt) which is only accessible by local admins.
