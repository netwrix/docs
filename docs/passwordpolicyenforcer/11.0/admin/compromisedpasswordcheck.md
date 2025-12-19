---
title: "Compromised Password Check"
description: "Compromised Password Check"
sidebar_position: 30
---

# Compromised Password Check

The Compromised Password Checker finds compromised passwords. Users can be notified via email and
advised or forced to change their password. The check can be scheduled to check existing passwords
against a compromised hash list at any time.

:::note
Create the **Compromised Passwords Base** file prior to enabling the Compromised Password
Check. See the [HIBP Updater](/docs/passwordpolicyenforcer/11.0/installation/hibpupdater.md) topic for instructions.
:::


The Compromised Password Checker is launched from the Configuration Console:

Click **Start** > **Netwrix Password Policy Enforcer** > **PPE Configuration**
or
Double click the **PPE Configuration** desktop shortcut.

Click the **Compromised Passwords** tile on the Configuration Console dashboard. This feature is
only available when **domain** is selected with the [Connected To](configconsole.md#connected-to)
configuration setting. The Compromised Password Check is disabled by default, and the schedule is
set to **None**.

Click the **Compromised Password Check** toggle to enable/disable the feature.

![Compromised Password Check](/images/passwordpolicyenforcer/11.0/administration/compromisedpasswords.webp)

- **Compromised Passwords Base** specify the database to use when checking for compromised
  passwords. Netwrix recommends using the [HIBP Updater](/docs/passwordpolicyenforcer/11.0/installation/hibpupdater.md) to create this database.
  Click **Browse** to navigate to the folder. Default is **C:\HIBP\DB**
- **Domain Controller (FQDN)** specify the fully qualified domain controller name where you want to
  run the password check. Click **Browse** and select from the list.
- **Log events in Windows Application Event Viewer** select this option if you want to log events.
- **Force users to change password** select this option to force users to change compromised
  passwords.
- **Recipient of the full report on the found compromised passwords** specify the email address of
  the administrator who should receive the full report.
- **From** specify the email sender.
- **Notify users whose passwords are compromised by email** select this option to send email
  notification to users their password appears in the compromised list.
- **Set up email** click to set up the email message for users. Enter the **From** address and edit
  the subject and body template as needed. Click **Apply** to save changes.

    ![Email user notification of compromised password](/images/passwordpolicyenforcer/11.0/administration/emailusernotification.webp)

Click **Save** to save your settings before running the check or setting up a schedule.

Click **Run now** to run the check. Depending on your network, the check can take quite a while to
complete. You can schedule it for off hours instead of running it now.

Here is an example of the compromised passwords list:

|User  |  Account | Sid | Email | Description |
| --- | --- | --- | --- | --- |
| admin    | Administrator | S-1-5-21-1006207104-1546379664-2458629591-500  |      | Sending emails is not possible due to the lack of an email address in the account. |
| user2   | user2  | S-1-5-21-1006207104-1546379664-2458629591-1118 | user2@company.com | Email has been sent  |

#### Schedule the Compromised Password Check

Click **Schedule** to set up a schedule to run the Compromised Password Check.

![Schedule the Compromised Password Policy Check](/images/passwordpolicyenforcer/11.0/administration/compromisedpasswordsschedule.webp)

Select the **Frequency**:

- None: no scheduled runs.
- Run now: run the check now. No scheduled runs.
- Once: set the **Start date** and **Start time** to run the check a single time.
- Daily: set the **Start date** and **Start time** to run the check daily.
- Weekly: set the **Start date**, **Start time** and select the day of the week to run the check
  weekly.
- Monthly: set the **Start date**, **Start time** and select the day of the month to run the check
  monthly.

Click **Apply**.
