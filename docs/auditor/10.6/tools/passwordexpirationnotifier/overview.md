---
title: "Password Expiration Notifier"
description: "Password Expiration Notifier"
sidebar_position: 50
---

# Password Expiration Notifier

Netwrix Auditor Password Expiration Notifier standalone tool checks which domain accounts or
passwords are about to expire in the specified number of days and sends notifications to users. It
also generates summary reports that can be delivered to system administrators and/or users'
managers. Besides, Netwrix Auditor Password Expiration Notifier allows checking the effects of a
password policy change before applying it to the managed domain.

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012
- Windows Server 2008 R2
- Windows Server 2008

Review the following for additional information:

- [Configure Password Expiration Alerting](#configure-password-expiration-alerting)
- [Registry Key Configuration](#registry-key-configuration)
- [Password Expiration Notifier Ports](/docs/auditor/10.6/tools/passwordexpirationnotifier/ports.md)
- [Password Expiration Monitoring Scope](/docs/auditor/10.6/tools/passwordexpirationnotifier/monitoringscope.md)

## Configure Password Expiration Alerting

Follow the steps to configure password expiration alerting.

**Step 1 –** Navigate to **Start** > **Netwrix Auditor** > **Password Expiration Notifier**.

**Step 2 –** On the main page, you will be prompted to select a monitoring plan. Click Add to add a
new monitoring plan.

**Step 3 –** Configure basic parameters as follows:

| Option                                                        | Description                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enable password expiration alerting or inactive user tracking | Select the checkbox to discover expiring passwords or inactive users in your Active Directory domain.                                                                                                                                                              |
| Audited domain                                                | Specify domain name in the FQDN format.                                                                                                                                                                                                                            |
| Send report to administrators                                 | Enable this option and specify one or several email addresses for administrators to receive daily reports with a list of inactive users whose accounts/passwords are going to expire in the specified number of days. Use semicolon to separate several addresses. |

**Step 4 –** Navigate to the **General** tab and complete the following fields:

| Option                                                                     | Description                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Specify account which will be used to collect data: - User name - Password | Enter the account which will be used for data collection. For a full list of the rights and permissions of this account, and instructions on how to configure them, refer to [Monitoring Plans](/docs/auditor/10.6/admin/monitoringplans/overview.md).                                                                               |
| Filter users by organizational unit                                        | To audit users for expiring accounts/passwords that belong to certain organizational units within your Active Directory domain, select this option and click Select OUs. In the dialog that opens, specify the OUs that you want to audit. Only users belonging to these OUs will be notified and included in the administrators and managers reports. |
| Filter users by group                                                      | To audit users for expiring accounts/passwords that belong to certain groups within your Active Directory domain, select this option and click Select Groups. In the dialog that opens, specify the groups that you want to audit. Only users belonging to these groups will be notified and included in the administrators and managers reports.      |
| Filter by account name                                                     | Specify one or several user account names (e.g., \*John\*). Use semicolon to separate several names. Only user accounts that contain selected name will be notified and included in the administrators and managers reports.                                                                                                                           |

**Step 5 –** Navigate to the **Actions** tab and complete the following fields:

| Option                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Send report to the users’ managers                                    | Enable this option to deliver reports to the user’s managers. To review and edit the user's managers 1. Start **Active Directory Users and Computers**. 2. Navigate to each group where the user belongs to, right-click it and select Properties. 3. In the `<user account>` Properties dialog, select the Managed By tab and review a manager. Update it if necessary. To edit a report template, click **Customize**. You can use HTML tags when editing a template.                                                                                                                                                                                                                                                                                                                                                                                                             |
| List users whose accounts or passwords expire in `<>` days or less    | Specify the expiration period for accounts and/or passwords to be included in the administrators and managers reports.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Only report on users with expiring accounts                           | Select this option to deliver reports on users with expiring accounts only and ignore users whose passwords will be valid for a rather long time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Notify users                                                          | Select this option to notify users that their passwords and/or accounts are about to expire.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Every day if password expires in `<>` days or less                    | Select this option for users to be notified daily that their passwords are going to expire, and specify the number of days before the expiration date. To edit a report template, click **Customize**. You can use HTML tags when editing a template. In order to send a test email, click **Test** and select an account. Make sure this account has a password that expires within the period you specifed next to this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| First/Second/Last time when password expires in `<>` days             | Select this option for users to be notified three times, and specify the number of days before the expiration date for each of three notifications. To edit a report template, click **Customize**. You can use HTML tags when editing a template. In order to send a test email, click Test and select an account. Make sure this account has a password that expires within the period you specifed next to this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Notify users by email every day if their accounts expire in `<>` days | Select this option for users to be notified daily that their account is going to expire, and specify the number of days before the expiration date. In order to send a test email, click **Test** and select an account. Make sure this account has a password that expires within the period you specifed next to this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Notify users by text messages                                         | Select this option for users to receive text messages if their passwords are about to expire. To edit SMS Notifications template, click Customize. - Every day if password expires in `<>` days or less — Select this option for users to be notified daily that their passwords are going to expire, and specify the number of days before the expiration date. - First/Second/Last time when password expires in `<>` days — Select this option for users to be notified three times, and specify the number of days before the expiration date for each of three notifications. - Provider name — Specify provider name. - Property name — Specify the name of the Active Directory User Property where the recipient's phone number is stored. Pager is the default property. If the Pager property of an AD User contains a full email address, Provider Name will be ignored. |

**Step 6 –** Navigate to the **Notifications** tab and complete the following fields:

| Option                                                    | Description |
| --------------------------------------------------------- | ----------- |
| SMTP server                                               |             |
| Port number                                               |             |
| Sender address                                            |             |
| SMTP authentication                                       |             |
| User name                                                 |             |
| Password                                                  |             |
| Use Secure Sockets Layer encrypted connection (SSL)       |             |
| Use implicit SSL                                          |             |
| Enforce certificate validation to ensure security         |             |
| Display the following From address in email notifications |             |

**Step 7 –** Navigate to the **Advanced** tab and complete the following fields:

| Option                                                           | Description                                                                                                                                    |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Modify scheduled task start time                                 | The default start time of the scheduled task is 3.00 AM every day. Click Modify to configure custom schedule.                                  |
| Customize the report template                                    | Click Customize to edit the notification template, for example, modify the text of the message. You can use HTML tags when editing a template. |
| Attach reports as a CSV files                                    | Select this option to receive reports attached to emails as CSV files.                                                                         |
| Ignore users who must change password at next logon              | Select this option to exclude users who must change password at next logon from reports.                                                       |
| Ignore users with the "_Password never expires_" option enabled  | Select this option to exclude users with the "_Password never expires_" option enabled from reports.                                           |
| Ignore users who do not have email accounts                      | Select this option to exclude users who do not have email accounts from reports.                                                               |
| Ignore users whose passwords have already expired                | Select this option to exclude users whose passwords have already expired from reports.                                                         |
| Include data on expiring accounts                                | Select this option to include data on expiring domain accounts further to expiring passwords information.                                      |
| Only report on users with fine-grained password policies applied | Select this option to include in reports only users who have fine-grained policies applied.                                                    |

**Step 8 –** If you want to save your current configuration, click Save.

To review Password Expiration Report

Click Generate next to Generate report on users with expired account or passwords to view report on
users passwords immediately. In the Maximum Password Age Setting dialog that opens, select domain
policy settings or specify the maximum password age in days.

![passwordexpiration](/images/auditor/10.6/tools/passwordexpirationnotifier/passwordexpiration.webp)

## Registry Key Configuration

Review the basic registry keys that you may need to configure for monitoring expiring passwords
within your Active Directory domain with Netwrix Auditor. Navigate to **Start > Run** and type
_"regedit"_.

| Registry key (REG_DWORD type)                                                        | Description / Value                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\Password Expiration Notifier |                                                                                                                                                                                                          |
| HideEmailAdditionalInfo                                                              | Defines whether to show or hide the header and footer in emails sent to users and their managers (emails sent to administrators always have default header and footer): - 0—Show - Any other number—Hide |
