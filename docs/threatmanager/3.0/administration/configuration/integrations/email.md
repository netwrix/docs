---
title: "Email Page"
description: "Email Page"
sidebar_position: 60
---

# Email Page

The Email page within the Integrations interface allows users to configure the application to send
email notifications.

![Integrations interface on the Email page](/images/threatmanager/3.0/administration/configuration/integrations/page_4.webp)

The page has the following information:

- Enabled – Indicates whether email notifications are functioning
- Mail Server – The IP address or server name of the mail server that will be used to send email
  notifications
- Port – The Port used by the mail server
- Use TLS – Indicates whether the TLS protocol is in use for email notifications
- Ignore Certificate Errors – Indicates whether certificate errors will be ignored when sending
  email
- User Name – The user name of the credentials that will be used when TLS is enabled
- Password – The password for the credentials that will be used when TLS is enabled
- Send From Address – The email address that will be listed as the sender of notifications
- Send Alerts To – The email address(es) that will receive alert notifications, use a semicolon as a
  seperator
- Subject – The subject line of the alert notification, which can contain data variables. For
  example, [Threat Type] detected by Threat Manager, which would replace the [Threat Type] variable
  with the type of threat detected.
- URL – The URL to the application console to be included in the email as a link
- Send Test Email – Click **Send Test Email** to send a test notification to the configured email
  address(es)

## Configure Email Notifications

Follow the steps to configure email notifications.

**Step 1 –** On the Integrations interface, click **Email** in the navigation pane.

![Integrations interface on the Email page showing details](/images/threatmanager/3.0/administration/configuration/integrations/details_4.webp)

**Step 2 –** Toggle the Enabled button to **ON**, which enables the Send Test Email button.

**Step 3 –** Enter the following information:

- Mail Server – Enter the IP address or server name of the mail server that will be used to send
  email notifications
- Port – Enter the Port used by the mail server. The default port is 25.
- Use TLS – Toggle the button to **ON** if you wish to enable TLS protocol is in use for email
  notifications
- Ignore Certificate Errors –Toggle the button to **ON** if you wish to ensure certificate errors
  will be ignored when sending email
- User Name – If applicable, enter the user name of the credentials that will be used when TLS is
  enabled
- Password – If applicable, enter the password for the credentials that will be used when TLS is
  enabled
- Send From Address – Enter the email address that will be listed as the sender of notifications
- Send Alerts To – Enter the email address(es) that will receive alert notifications, use a
  semicolon as a seperator
- Subject – Enter the subject line of the alert notification, which can contain data variables. By
  default, this includes the [Threat Type] variable.
- URL – Enter the URL to the application console to be included in the email as a link. By default,
  this is set to `http://localhost:8080/`

:::info
When first configuring email notification, enter your email in the Send Alerts To
field for the connection test completed in Step 4. Once the test is successful, replace your email
with the desired recipients.
:::


**Step 4 –** Click **Send Test Email** to send a test notification to the configured email
address(es). Validate the email was sent by checking that the recipient received the email.

**Step 5 –** Click **Save Settings** to commit the changes.

Email notifications are now configured.
