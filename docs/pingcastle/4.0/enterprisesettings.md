---
sidebar_label: Settings overview
---
# PingCastle Enterprise settings overview

PingCastle Enterprise groups its configuration options into sections on **Configuration** > **Settings**. This page links each section to where it's documented.

## Authentication

See [Configuring Authentication for PingCastle Enterprise](enterpriseauthsetup.md) for the full setup guide, including these methods:

- [Local authentication](enterpriseauthsetup.md#local-authentication)
- [Windows authentication](enterpriseauthsetup.md#windows-authentication)
- [OpenID Connect](enterpriseauthsetup.md#openid-connect)
- [SAML2 authentication](enterpriseauthsetup.md#saml2-authentication)
- [Header authentication](enterpriseauthsetup.md#header-authentication)
- [Client certificate authentication](enterpriseauthsetup.md#client-certificate-authentication)
- [Custom login message](enterpriseauthsetup.md#custom-login-message)

:::note
The **Minimum password length** and **Session timeout** fields on the **Login options** screen aren't documented yet.
:::

## Administration

- **Licensing** — [PingCastle Enterprise License](enterpriselicense.md) explains how domain-based licensing works.

  :::note
  The **Licensing** screen's status display and license upload aren't documented yet.
  :::

- **Data retention** — [Data retention](enterprisesettings-logging.md#data-retention)
- **Notifications** — [Configuring the web host](enterpriseemailsetup.md#configuring-the-web-host) and [Configuring reminders and the weekly report](enterpriseemailsetup.md#configuring-reminders-and-the-weekly-report)

  :::note
  The **Notification email addresses** field on this screen isn't documented yet.
  :::

- **Email** — [Configuring Email for PingCastle Enterprise](enterpriseemailsetup.md)
- **Scanning and Scheduling** — [Scanning and Scheduling](enterprisesettings-logging.md#scanning-and-scheduling); see also [Enterprise Scheduling](enterprisescheduling.md) for how these settings are used
- **Action Plans** — [Action Plans](enterprisesettings-logging.md#action-plans)
- **Provisioning** — [Settings: Provisioning](enterprisesettings-scim.md)

## System

- **Database**

  :::note
  The **Database** screen (database engine, connection string, and active schema selection) isn't documented yet.
  :::

- **Security** — [Antiforgery protection](enterprisesettings-security.md#antiforgery-protection) and [Password rate limiting](enterprisesettings-security.md#password-rate-limiting)
- **Logging** — [Log levels](enterprisesettings-logging.md#log-levels) and [File logging](enterprisesettings-logging.md#file-logging)

  :::note
  The **Download today's log** and **Download all logs** buttons aren't documented yet.
  :::

- **Application** — [Application](enterprisesettings-logging.md#application)

## Entra Scanner

:::note
The settings synced from the Entra Scanner microservice (Api, Security & headers, Rate limiting, Scanning, Azure scanning, HTTP resilience, Audit store, Maintenance, and Telemetry) aren't documented yet. See [Entra scanning](enterpriseentrascan.md) for the scanning feature itself.
:::
