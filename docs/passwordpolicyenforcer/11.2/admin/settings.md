---
title: "Settings"
description: "Settings"
sidebar_position: 15
---

# Settings

There are four tabs:

- General
- Notifications
- Mail Service
- License

## General

Open the **Settings** > **General** tab to set up policy and log settings. The general settings
apply to either the domain or to a local computer, depending on your Connected To configuration
setting.

If you make changes, click **Save** to keep your changes or **Discard** to cancel.

Here are the default settings.

![General Settings PPE](/images/passwordpolicyenforcer/11.2/administration/settingsgeneral.webp)

- **Default policy** sets the policy to be enforced on the domain or local computer unless users
  have a different policy assigned to them.
- **Enforce policy when password is reset** requires users, administrators, and helpdesk operators to
  comply with the password policy when resetting a password or creating a new user account. Default
  is checked.

    - Minimum Age rule is never enforced during a reset.
    - History rule is enforced if this option is selected and the **Enforce this rule when a
      password is reset** option is selected on the [History Rule](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/rules/history_rule.md) Properties.

- **Accept encrypted client request only** specifies requests from Password Policy Client, Netwrix
  Password Reset and Password Policy/Web must be encrypted. Client requests don't contain passwords
  or password hashes. See the [Password Policy Client](/docs/passwordpolicyenforcer/11.2/admin/password-policy-client/password_policy_client.md) topic for
  additional information. Default is checked.
- **Log event when password not checked by service** adds an entry to the Windows Application Event
  Log whenever it accepts a password without checking it. Default is checked. This can occur if:

    - Password Policy Enforcer is disabled.
    - The policy assigned to a user is disabled.
    - No policy is assigned to a user or an error occurs when determining the assigned policy, and a
      Default Policy isn't specified.
    - A password is reset, and the **Enforce policy when password is reset** isn't selected.

- **Log event when password rejected by service** adds an entry to the Windows Application Event Log
  whenever a password is rejected. Default isn't checked. The logged event includes:

    - Username
    - Source (client or server)
    - Rules the password doesn't meet.

        :::note
        Passwords or password hashes aren't sent over the network.
        :::


    Most rules are enforced by both the Password Policy Client and Password Policy Server. If the
    Password Policy Enforcer Client is installed, a non-compliant password can be rejected before
    Windows sends it to the domain controller. The following limitations apply when a password is
    rejected by the Password Policy Client:

    - An event is only logged if the Password Policy Enforcer Client version is 9.0 or later. If a
      password is rejected by the Password Policy Server, then the event is logged.
    - Client logged events only show the local rules the password violated. For example, the
      Compromised rule is only enforced by the Password Policy Server. See the [Rules](/docs/passwordpolicyenforcer/11.2/admin/manage-policies/rules/rules.md)
      topic for additional information.
    - Client rejections can be lost or duplicated if there are communication issues between the
      Password Policy Client and Password Policy Server.

- **Log event when password accepted by service** adds an entry to the Windows Application Event Log
  whenever a password is accepted. The logged event includes the username. Default isn't checked.

- **Use old icons in Live Policy Feedback** allows switching between displaying old-style and new-style icons in the Password Policy Enforcer Client on the change password screen.

## Notifications

Open the **Settings** > **Notifications** tab to set up notifications. Notifications are only
available when **domain** is selected with the Connected To configuration setting.

If you make changes, click **Save** to keep your changes or **Discard** to cancel.

![Notifications Settings](/images/passwordpolicyenforcer/11.2/administration/settingsnotifications.webp)

- **Send email reminders**: check this option to send reminders. Default isn't checked.
- **Save email to a pickup folder**: check this option to have the Mailer save emails to a folder for later delivery by a mail server. The mail server must monitor this folder for new email.
    - **Path**: Click **Browse** and select the path to the pickup folder.

:::note
Saving email to a pickup folder is the fastest and most reliable delivery method. Use this
option if your mail server supports pickup folders.
:::

The Password Policy Enforcer Mailer sends emails at 2:00 AM every day (local time on your server).
Check the Windows Application Event Log to monitor its progress. You can also run the Password
Policy Enforcer Mailer from the command line to send email immediately, or to troubleshoot problems.

:::note
You can change the time the mailer runs. Set the **PPE Mailer** service startup to
**Disabled** or **Manual**, then stop the service. Create a task to run "**PPEMail /send**" at the
desired time.
:::

### Configuring Email Settings

There are three possible ways to configure email settings:
 - **SMTP Server**
 - **Google OAuth2**
 - **O365 OAuth2**

#### SMTP Server

![Notifications Settings](/images/passwordpolicyenforcer/11.2/administration/settingsnotifications2.webp)

- **SMTP Server**: enter IP address.
- **Port**: enter port number.
- **Username**: enter your username.
- **Password**: enter your password.
- **Use TLS**: check this option to enable TLS email encryption.

#### Google OAuth2

![Notifications Settings](/images/passwordpolicyenforcer/11.2/administration/settingsnotifications3.webp)

- **User Account**: authenticated Google Workspace account.
- **Client ID**: value configured in the Google Workspace Admin Console.
- **Client Secret**: value configured in the Google Workspace Admin Console.
- **Clear Credentials**: removes stored values and tokens.
- **Update Credentials**: initiates token generation in a browser window.

:::note
The Google OAuth2 timeout can be configured in **PPEConfiguration.json**.
By default, it is set to **1 minute**:
```
"Configuration": { 
  "GoogleOAuthTimeout": 60
}
```
:::

#### O365 OAuth2

![Notifications Settings](/images/passwordpolicyenforcer/11.2/administration/settingsnotifications4.webp)

- **User Account**: Office 365 account.
- **Client ID**: value configured in the Office 365 Admin Console.
- **Client Secret**: value configured in the Office 365 Admin Console.
- **Tenant ID**: Office 365 tenant identifier.
- **Clear Credentials**: removes values.

## Mail Service

Open the **Settings** > **Mail Service** tab to set up mail service for notifications. 

If you make changes, click **Save** to keep your changes or **Discard** to cancel.

![Mail Server Tab](/images/passwordpolicyenforcer/11.2/administration/settingsmailserver.webp)

- **Service**: specify the address of the machine where the mail service is installed.
- **Port**: specify the port number.

:::note
If you need to use a port other than 12345, open the **PPEMailService.json** file on the machine where 
the mail service is installed, update the port value, and restart the mail service to apply the changes.
```
"MailService": {
  "HostName": "localhost",
  "Port": 6000
}
```
:::

## License

Open the **Settings** > **License** tab to view your current license. The license settings apply to
either the domain or to a local computer, depending on your Connected To configuration setting.

To add or update your license, copy it from the email or file, then click **Paste license from
clipboard**.

![License Settings Tab](/images/passwordpolicyenforcer/11.2/administration/settingslicense.webp)

- **License type** and **Licensed to** are set based on your sales agreement.
- **Users** is the total number of available licenses.
- **AD Users** is the total number of Active Directory user accounts.
- **In use pertains** to active AD user accounts, disregarding disabled accounts.
