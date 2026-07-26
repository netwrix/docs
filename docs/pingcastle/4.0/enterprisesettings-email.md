---
sidebar_position: 8
---
# Settings: Email and Notifications

The Email and Notifications screen configures how PingCastle Enterprise sends email, and when it reminds you about upcoming scan and reporting activity.

:::note
Most changes on this screen take effect within about 30 seconds, without a restart. A few settings across the Settings UI require a restart, and PingCastle Enterprise schedules that restart automatically when needed.
:::

<!-- TODO: screenshot -->

## Choosing an email provider

PingCastle Enterprise sends email for password reset requests and notifications, including weekly reports. Select one of two providers under **Email Provider**:

- **SMTP** — Sends email through a traditional SMTP server.
- **Microsoft Graph** — Sends email through the Microsoft Graph API using OAuth 2.0 authentication. Choose this option for Office 365 environments that require modern authentication instead of a shared mailbox password.

For example, an organization that already runs an internal SMTP relay for other applications can point PingCastle at that relay with the SMTP provider. An organization that has disabled basic authentication for Exchange Online needs the Microsoft Graph provider instead.

Both providers share two common fields:

- **From Address** — The email address that appears as the sender on messages PingCastle sends.
- **From Display Name** — The display name that appears alongside the From address.

<!-- TODO: screenshot -->

## Configuring the SMTP provider

When you select **SMTP** as the email provider, configure these fields:

- **SMTP Host** — The fully qualified domain name (FQDN) or IP address of the SMTP server.
- **SMTP Port** — The port the SMTP server listens on. Common values are 25 (unencrypted), 465, and 587 (TLS/SSL).
- **SMTP Login** — The username PingCastle uses to authenticate to the SMTP server. Leave this field blank if the server doesn't require authentication.
- **SMTP Password** — The password for the SMTP login. Leave this field blank if the server doesn't require authentication.
- **Enable SSL** — Encrypts the connection to the SMTP server. Enable this option when your SMTP server requires TLS/SSL, such as on port 465 or 587.

<!-- TODO: screenshot -->

## Configuring the Microsoft Graph provider

When you select **Microsoft Graph** as the email provider, configure these fields:

- **Tenant ID** — The Azure AD tenant ID for your organization.
- **Client ID** — The application (client) ID from the Azure AD app registration that PingCastle uses to send email.
- **Authentication Method** — The credential type the app registration uses: a client secret or a certificate.
- **Client Secret** — The application's client secret. This field applies only when you set **Authentication Method** to client secret.
- Certificate fields (location, file, thumbprint, store location, and store name) — These fields apply only when you set **Authentication Method** to certificate. They identify which certificate PingCastle uses to authenticate.

:::note
Setting up the Azure AD app registration, permissions, and certificate for Microsoft Graph is a one-time configuration task outside this Settings screen. For the full walkthrough, including creating the app registration and configuring RBAC for Applications in Exchange Online, see [Modern Authentication with Office 365 Using Graph API](enterpriseinstall.md#modern-authentication-with-office-365-using-graph-api) in the installation guide.
:::

<!-- TODO: screenshot -->

## Configuring the web host and notification recipients

- **Webhost** — The base URL PingCastle Enterprise uses when it builds links in outgoing emails, such as links back to a report or the login page. Set this to the URL your users use to reach PingCastle Enterprise.
- **Notification Emails** — The list of email addresses that receive system notifications, separate from the recipients you configure on individual reports or scans.

For example, if your PingCastle Enterprise instance is reachable at `https://pingcastle.contoso.com`, set **Webhost** to that address so email links resolve correctly for recipients.

<!-- TODO: screenshot -->

## Configuring reminders and the weekly report

PingCastle Enterprise can remind administrators before scheduled items expire and can send a weekly summary report.

- **Default Domain Reminder Days** — The number of days before an Active Directory domain's scheduled review that PingCastle sends a reminder email.
- **Default Entra Reminder Days** — The number of days before an Entra ID tenant's scheduled review that PingCastle sends a reminder email.
- **Monday Hour** — The hour of the day, on Mondays, when PingCastle sends the weekly report.

For example, setting **Default Domain Reminder Days** to 7 sends a reminder email one week before a domain's next scheduled review.

<!-- TODO: screenshot -->
