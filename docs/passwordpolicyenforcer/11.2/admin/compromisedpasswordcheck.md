---
title: "Password Scanner"
description: "Password Scanner"
sidebar_position: 30
---

# Password Scanner

Password Policy Enforcer (PPE) enforces its [rules](./manage-policies/rules/rules.md) at the time of password change. This allows PPE to stop non-compliant passwords from being used, but there are three scenarios that real-time checking doesn't protect against:

- Passwords that weren't known to be compromised at the time of password change, but are found in a later breach.
- Identical passwords used by different users. While this requirement could be enforced during a password change, PPE doesn't enforce it because it would slow down password changes significantly.
- Blank passwords used by accounts whose passwords never change.

PPE's Password Scanner addresses these scenarios by regularly scanning domain password hashes and executing one or more actions when compromised, duplicate or blank hashes are found.

:::note
You must configure [Notifications](./settings.md#notifications) before you can use the Password Scanner. If you don't want PPE to send notification emails while you are configuring and testing the scanner, then temporarily configure PPE to **Save emails to a pickup folder** that isn't monitored by your mail server. You can read the content of the emails in the pickup folder with a mail application or text editor.

You must also download the compromised password database before you can use the Password Scanner. The [HIBP Updater](./hibpupdater.md) page explains how to configure and use the database downloader.

The Password Scanner only works with [domain policies](../installation/domain_and_local_policies.md).
:::

The Password Scanner is disabled by default. To enable and configure it:
1. Open the [PPE configuration console](./configconsole.md).
2. Click the **Password Scanner** tile on the right.

![Password Scanner](/images/passwordpolicyenforcer/11.2/administration/compromisedpasswords.webp)

Use the toggle switch in the upper-left corner of the Password Scanner page to enable and disable it.

**Compromised Passwords Base**. Enter the path to the compromised password database, or click **Browse** to select it. The [HIBP Updater](./hibpupdater.md) page explains how to configure and use the database downloader.

**Domain Controller (FQDN)**. Enter the Fully Qualified Domain Name of the domain controller that will run the Password Scanner, or click **Browse** to select it.

**Log events in Windows Application Event Viewer**. Select this checkbox to log the Password Scanner's progress and findings to the Windows Application Event Log.

**Force users to change password at next logon**. Select this checkbox to set "User must change password at next logon" for any account with a compromised password. This action is not be performed for accounts with "Password never expires" set.

**Report password reuse by another account**. Select this checkbox to scan for accounts with the same password. You can also select **Force users to change password at next logon** if you want the Password Scanner to set "User must change password at next logon" for any accounts with identical passwords. This action is not be performed for accounts with "Password never expires" set.

**Recipient of the full report on the found compromised passwords**. Enter the email address of a person or distribution list into this text box. The Password Scanner sends a report to this address after every scan. This is a report for administrators, not users.

**From**. Enter the sender's email address for the full report. The correct format is `"Display Name" <mailbox@domain.com>`.

**Notify users whose passwords are compromised by email**. Select this checkbox to send an email to users whose passwords are compromised.

Click **Set up email** to edit the email template for the compromised password email. The correct format for the From text box is `"Display Name" <mailbox@domain.com>`. You can edit the email body with a visual editor or raw HTML editor by clicking **Visual** or **HTML**.



## Rewritten up to this point



    ![Email user notification of compromised password](/images/passwordpolicyenforcer/11.2/administration/emailusernotification.webp)

Click **Save** to save your settings before running the check or setting up a schedule.

Click **Run now** to run the check. Depending on your network, the check can take a long time to complete. You can schedule it for off hours instead of running it now.

Here is an example of the compromised passwords report:

---
**List of compromised passwords**
|User  |  Account | Sid | Email | Description |
| --- | --- | --- | --- | --- |
| admin    | Administrator | S-1-5-21-1006207104-1546379664-2458629591-500  |      | Sending emails isn't possible due to the lack of an email address in the account. |
| user2   | user2  | S-1-5-21-1006207104-1546379664-2458629591-1118 | user2@company.com | Email has been sent  |


**List of reused passwords**
|User  |  Account | Sid | Email | Description |
| --- | --- | --- | --- | --- |
| admin    | Administrator | S-1-5-21-1006207104-1546379664-2458629591-500  |      | Sending emails isn't possible due to the lack of an email address in the account. |
| user2   | user2  | S-1-5-21-1006207104-1546379664-2458629591-1118 | user2@company.com | Email has been sent  |

**Users with empty password:**
Guest (S-1-5-21-1006207104-1546379664-2458629591-501)

---

## Schedule the Password Scanner

Click **Schedule** to set up a schedule to run the Password Scanner.

![Schedule the Password Scanner](/images/passwordpolicyenforcer/11.2/administration/compromisedpasswordsschedule.webp)

Select the **Frequency**:

- None: no scheduled runs.
- Run now: run the check now. No scheduled runs.
- Once: set the **Start date** and **Start time** to run the check a single time.
- Daily: set the **Start date** and **Start time** to run the check daily.
- Weekly: set the **Start date**, **Start time** and select the day of the week to run the check weekly.
- Monthly: set the **Start date**, **Start time** and select the day of the month to run the check monthly.

Click **Apply**.
