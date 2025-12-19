---
title: "Management Console Views"
description: "Management Console Views"
sidebar_position: 10
---

# Management Console Views

The Password Policy Enforcer management console has four views. Click an item in the left pane of
the management console to select a view.

## Password Policy Enforcer View

![configuring_ppe_2](/images/passwordpolicyenforcer/10.2/administration/configuring_ppe_2.webp)

Click Netwrix Password Policy Enforcer in the left pane to display this view. With this view, you
can perform the following actions:

- Read the Password Policy Enforcer documentation.
- Connect to configuration. See the
  [Connect to a Configuration](/docs/passwordpolicyenforcer/10.2/administration/connecting.md)
  topic for additional information.

## Password Policy Server View

![configuring_ppe_3](/images/passwordpolicyenforcer/10.2/administration/configuring_ppe_3.webp)

Click **Password Policy Server** in the left pane to display this view. With this view, you can
perform the following actions:

- Edit
  [PPS Properties Page](/docs/passwordpolicyenforcer/10.2/administration/properties/properties.md)
- Display the [Compromised Password Checker](#compromised-password-checker) page
- Run
  [HIBP Updater](/docs/passwordpolicyenforcer/10.2/administration/hibpupdater.md)
- [Connect to a Configuration](/docs/passwordpolicyenforcer/10.2/administration/connecting.md)
  to a configuration
- Display the
  [Support Tools](/docs/passwordpolicyenforcer/10.2/administration/support_tools.md)
  page

### Compromised Password Checker

The Compromised Password Checker finds compromised passwords and helps to strengthen them, which
leads to increased security. It checks existing passwords against a compromised hash list at any
time, not only during a password change or reset.

#### General

#### ![cpcgeneral](/images/passwordpolicyenforcer/10.2/administration/cpcgeneral.webp)

- **Enable** – select this checkbox if you want to perform one of the following operations:

    - Notify User – Sends an email to the email address on the user object of an AD user that is
      found to have a compromised password.
    - Log events in "Event Viewer" – Creates a log entry for each user that has a compromised
      password. The log entry can be found in the X log of the event viewer.
    - Force password change at next logon – Sets the Force Password Change at next login attribute
      on the AD User that was found to have a compromised password. When the user tries to login the
      next time they will be forced to go through the password change process.

- **Schedule** – Click this link to open the "Schedule task" window. Choose date and time when the
  scan will start and configure the scan frequency.

    ![supporttoolswindowpasswordcheckerschedule](/images/passwordpolicyenforcer/10.2/administration/supporttoolswindowpasswordcheckerschedule.webp)

    Setup the desired schedule to run Password Checker. You may choose to run it once, or
    periodically on a defined schedule.

    - **Frequency** – Select how frequently you want to run Password Checker.

        - **One Time** – There are two options: Run now and Run later. If later, you should select
          the time in the **When** area.
        - **Daily** – Select the time of day at which you want to run Password Checker.
        - **Weekly** – Select the day of the week on which you want to run Password Checker.

            ![supporttoolswindowpasswordcheckerscheduleweekly](/images/passwordpolicyenforcer/10.2/administration/supporttoolswindowpasswordcheckerscheduleweekly.webp)

        - **Monthly** – Select the day of the month on which you want to run Password Checker.

            ![supporttoolswindowpasswordcheckerschedulemonthly](/images/passwordpolicyenforcer/10.2/administration/supporttoolswindowpasswordcheckerschedulemonthly.webp)

    - **When** – Select the start date and time when you to run Password Checker.

- **List of compromised passwords** – The path to the database of compromised passwords.
- **Domain Controller** – Name of the Domain Controller you want to scan with Compromised Password
  Checker. The name of the current domain controller can be taken from Configuration Report tab >
  Computer value. Please use the fully qualified (FQDN) domain controller name.

#### Report Recipient

![cpcreportrecipient](/images/passwordpolicyenforcer/10.2/administration/cpcreportrecipient.webp)

- **To** – Type the email address of the administrator receiving the full report.
- **From** – Type the name and email address you wish to appear. The correct format is
  `"Display Name" <mailbox@domain.com>`

#### User Notification

![cpcusernotification](/images/passwordpolicyenforcer/10.2/administration/cpcusernotification.webp)

- **From** – Type the name and email address you wish to appear. The correct format is
  `"Display Name" <mailbox@domain.com>`
- **Subject** – Type the subject line of your email.
- **Email** – The text for the message you want to send to the user. The default text contains
  information about the recipient's name and account, as well as a request to change the password.
  You can customize it any way you want.

The Compromised Password Checker is now configured to protect your system against compromised
passwords.

## Policies View

![configuring_ppe_4](/images/passwordpolicyenforcer/10.2/administration/configuring_ppe_4.webp)

Click **Password Policy Server** in the left pane to display this view. With this view, you can
perform the following actions:

- Edit
  [Policy Properties](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/policy_properties.md)
- [Testing Policies](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/testing_policies.md)
- [Creating a Policy](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/creating_a_policy.md)
  and
  [Deleting a Policy](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/deleting_a_policy.md)
- Set
  [Policy Properties](/docs/passwordpolicyenforcer/10.2/administration/managingpolicies/policy_properties.md)

## Rules View

#### ![configuring_ppe_5](/images/passwordpolicyenforcer/10.2/administration/configuring_ppe_5.webp)

Click a **policy name** in the left pane to display this view. Use this view to configure the rules
for a policy.
