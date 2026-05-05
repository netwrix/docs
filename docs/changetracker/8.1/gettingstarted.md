---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 3
---

# Getting Started

After you have installed Netwrix Change Tracker, and logged in for the first time (see [Two Factor Authentication](#two-factor-authentication)), you can start using it. Change Tracker can collect data for the
reports with or without agents. By default, Change Tracker installs an agent on the machine, so
you can check the data collection and reports using that agent. Alternatively, you can
collect data from other devices in your network. In both cases, your starting point will be the
[Device Tab](/docs/changetracker/8.1/admin/devices.md).

After establishing data collection, use the Reports tab to view reports on your device's
configuration.

Next, use the [Planned Changes Tab](/docs/changetracker/8.1/admin/plannedchanges/plannedchanges.md) manage change events and filter any
changes that you consider noise.

To add another user, manage licenses, set the planned change intervals, and otherwise configure
Change Tracker, review the [Settings Tab](/docs/changetracker/8.1/admin/settingstab/settingstab.md).

## Two Factor Authentication

Sign in as the root "admin" account and follow the instructions to register Change Tracker with an
authenticator app on your mobile device.

After registering Change Tracker with your authenticator app, use it to provide a One-Time Passcode (OTP) to complete
the 2FA registration.

You must now provide a One-Time Passcode (OTP) during the sign in process.

Netwrix highly recommends 2FA, but you can disable it. Clearing the "2FA login" checkbox
against the User account in the User Admin page will disable 2FA for the user. If you don't provide
a One-Time Passcode (OTP) during the sign-in process, Change Tracker may require one when you attempt
certain actions for the first time during a session.

If the root admin user can't use an authenticator app for 2FA on the first login, set
the following configuration settings in
`C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Configs\appsettings.json`:

```
security > auth > twoFactor > "registerAdmin": "false"
security > auth > twoFactor > "fallbackEnabled": "true"
```

These settings appear in the `security` section of the configuration file:

```json
"security": {
    "xsrf": {
        "headersenabled": "true"
    },
    "auth": {
        "lockoutenabled": "false",
        "lockoutmaxloginattempts": "3",
        "lockoutdurationminutes": "0",
        "ipblockingmaxloginattempts": "3",
        "ipblockingwindowminutes": "10",
        "ipblockingdurationminutes": "10",
        "postonly": "false",
        "ssoenabled": "false",
        "ssoheader": "",
        "hidelogin": "false",
        "twoFactor": {
            "registerAdmin": "false",
            "fallbackEnabled": "true"
        }
    }
}
```

:::note
Change only the `twoFactor` values. The surrounding settings provide context.
:::

Change Tracker may require a One-Time Passcode (OTP) when you attempt certain actions for
the first time during a session. Without 2FA or an authenticator app, Change Tracker writes this OTP to
the application log file
(`C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\logs\hubservice-log.txt`),
which only local admins can access.
