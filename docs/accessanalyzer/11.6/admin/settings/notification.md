---
title: "Notification"
description: "Notification"
sidebar_position: 80
---

# Notification

The Notification node is where email notifications are configured. Emails can be sent from the
Enterprise Auditor Console for a variety of purposes: reports on collected data, change detection
alerts, conformance analysis notification, and more.

![Global Settings Notification page](/images/accessanalyzer/11.6/admin/settings/notification.webp)

To enable notifications from the Enterprise Auditor Console, a mail server must be configured for
Enterprise Auditor to employ for sending emails.

Enterprise Auditor supports authentication and encryption when sending email notifications.
Notifications can be configured based on the requirements of an organizations mail environment.

Enable Enterprise Auditor notifications by configuring the Mail Server and Sender Information. It is
recommended to send a test email to yourself after initial configuration to ensure proper settings.
See the [Test Notification Settings](#test-notification-settings) topic for additional information.

The **Cancel** and **Save** buttons are in the lower-right corner of the Notification view. These
buttons become enabled when modifications are made to the Notification global setting. Whenever
changes are made at the global level, click **Save** and then **OK** to confirm the changes.
Otherwise, click **Cancel** if no changes were intended.

## Configure SMTP Server Information

The Mail Server section at the top of the page is where an organization’s SMTP Server information is
provided.

![Mail Server settings on Notification page](/images/accessanalyzer/11.6/admin/settings/server.webp)

Provide the following information to enable notifications from Enterprise Auditor.

:::note
Check with your Messaging Team if you are unsure of this information.
:::


- Mail Server – Enter the organization’s SMTP Server name
- Encryption – Allows Enterprise Auditor users to enable notification encryption according to the
  supported protocol on the configured SMTP Server. The default setting is **No Encryption**. Select
  an encryption method:
    - No Encryption
    - Encryption
    - Encryption, Ignore Certificate Error
- Port – Enter the SMTP Server port number. The default port setting changes based on the selected
  Encryption Option:
    - For the **No Encryption** option, the default port is 25, since this is common for most SMTP
      Servers
    - For the **Encryption** and **Encryption, Ignore Certificate Error** options, the default port
      is 587

### Notification Authentication Credentials

If the SMTP Server requires authentication, select the **My Mail Server requires authentication**
checkbox and provide the necessary credentials in the User name and Password boxes.

#### Update Notification Authentication Credentials

**Step 1 –** In the My Mail server requires authentication section, enter a new **Password** for the
account.

**Step 2 –** Click **Save**.

The credentials for Mail Server authentication account have been updated and committed to the
Console.

## Sender Information

The Sender Information section is where the sender information is provided.

![Sender Information section on Notification page](/images/accessanalyzer/11.6/admin/settings/senderinformation.webp)

Configure the sender information for all Enterprise Auditor notifications. Since this is a global
settings, any recipients configured at this level receive all notifications sent from Enterprise
Auditor, and are sent to this recipient list unless inheritance is broken at the job group or job
level.

- Sender Name – Name displayed in the sent from field of the email
- Sender Address – Sender’s email address. This does not have to be a real email address, unless
  required by the organization. It can be something as simple as `accessanalyzer@yourdomain.com`.

## Email Content

The Email Content section is where the recipient information is provided.

![Email Content section on Notification page](/images/accessanalyzer/11.6/admin/settings/emailcontent.webp)

- To / CC / BCC – Enter the email addresses for the recipients of the email notifications. Use a
  semicolon (;) to separate multiple recipients.
    - Recipients listed at this global level receive all email notifications sent by Enterprise
      Auditor unless inheritance is broken at the job group or job levels

## Test Notification Settings

Once the global **Notification** settings have been configured, it is recommended to send a test
email to ensure proper configuration. This verifies all settings are correct and email is received
as expected.

![Test Email Settings button](/images/accessanalyzer/11.6/admin/settings/test.webp)

The Test Email Settings button sends a test email to the recipient list. It is recommended that you
test by sending an email to yourself. Once all Notification settings are configured, click the
**Test Email Settings** button.

![Test email sent successfully message](/images/accessanalyzer/11.6/admin/settings/testsuccess.webp)

A message displays stating that the test e-mail was sent successfully.

![Test email error message example](/images/accessanalyzer/11.6/admin/settings/testerror.webp)

:::note
If there are any problems with the information, an error message will appear during the
Test Email settings process. Correct the Notification settings until the test email is sent
successfully.
:::


![Netwrix Enterprise Auditor test e-mail](/images/accessanalyzer/11.6/admin/settings/testemail.webp)

This email is sent to all recipients when the **Test Email settings** link is clicked. When the
Notification settings are configured, click **Save** and then **Ok** to complete the configuration.
