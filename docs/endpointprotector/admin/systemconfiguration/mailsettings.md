---
title: "Mail Settings"
description: "Configure email server settings and OAuth 2.0 authentication for Microsoft Exchange Online"
sidebar_position: 35
---

# Mail Settings

From this section, you can configure the email server settings that Endpoint Protector uses to send notifications, alerts, and test emails.

## E-mail Authorization Required

When **OAuth** is selected as the E-mail Authentication Type, authorization is required to complete the email setup. Click **Sign In** to grant Endpoint Protector access to send emails on your behalf.

## Administrator E-mail

The test email is sent to the address configured for your administrator account. If no email address is set, the message *"There is no e-mail defined for your Administrator Account. You must setup the e-mail address from System Administrators > Edit info"* is displayed.

To set an email address, go to **System Configuration** > **System Administrators** and select **Edit info**.

## E-mail Server Settings

Configure the email server that Endpoint Protector uses to send notifications and alerts.

:::note
An active Internet connection is required to use this feature.
:::

### E-mail Authentication Type

Use the **E-mail Authentication Type** dropdown to select how Endpoint Protector authenticates with the email server:

- **Basic** — standard username and password authentication. Supports native and SMTP email types, with TLS 1.3.
- **OAuth** — OAuth 2.0 authentication for Microsoft Exchange Online. Use this option to comply with Microsoft's deprecation of Basic Auth for SMTP AUTH.

### Basic authentication

When **Basic** is selected, configure the following fields:

- E-mail Type — select **Native** or **SMTP**
- Hostname
- SMTP Port
- Username
- Password

### OAuth authentication

When **OAuth** is selected, configure the following fields:

- **E-mail Type** — SMTP (read-only)
- **E-mail Provider** — Microsoft (read-only)
- **Hostname** — recommended: `smtp.office365.com`
- **SMTP Port** — recommended: `587`
- **Username**
- **Tenant ID**
- **Application (Client) ID**
- **Client Secret Value**
- **Redirect URI** — must match the redirect URI registered in your Microsoft Azure application

After filling in all fields, click **Sign In** to complete OAuth authorization.

:::note
The redirect URI saved in Mail Settings must exactly match the redirect URI registered in your Microsoft Azure application.
:::

### Microsoft Azure prerequisites

OAuth is supported for Microsoft Exchange Online. Your subscription must be one of the following:

- Microsoft 365 Business Basic, Standard, or Premium
- Office 365 E1, E3, or E5
- Microsoft 365 E3 or E5
- Exchange Online Plan 1 or 2

**Step 1 –** In the Microsoft Admin Center, go to **Users** > **Active Users**, select the user, and then go to **Mail** > **Manage email apps**. Enable **Authenticated SMTP**.

**Step 2 –** In Microsoft Azure, go to your app **Overview** > **Manage** > **Redirect URIs**. Click **Add a platform**, select **Web**, and enter the redirect URI (for example, `https://192.168.0.2/index.php`).

**Step 3 –** Go to **Client Credentials** > **Client Secrets**. Create a new client secret and copy the value.

**Step 4 –** Go to **API Permissions** > **Add a permission** > **Microsoft Graph** > **Delegated Permissions**. Select **SMTP.Send** and **offline_access**, then click **Grant admin consent** for the selected permissions.

## UI messages

The following messages are displayed during email configuration and testing:

| Situation | Message |
|---|---|
| Test email sent successfully | A test e-mail was sent to `<address>` |
| No administrator email configured | There is no e-mail defined for your Administrator Account. You must setup the e-mail address from System Administrators > Edit info |
| Test email failed to send | Failed to send the test e-mail! Please verify if the E-mail Server Settings are correct! |
| OAuth authorization failed | Email authorization failed! Please check the provided credentials and try again! |
| Settings saved successfully | Changes have been saved! |
| OAuth authorization completed | Your email has been verified. Authorization complete! |
| Error saving settings | Cannot execute command! An error occurred! |
