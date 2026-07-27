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
- [Login options](enterpriseauthsetup.md#login-options)

## Administration

- **Licensing** — [PingCastle Enterprise License](enterpriselicense.md#updating-your-license) explains how domain-based licensing works and the Licensing screen's status display and license upload.
- **Data retention** — [Settings: Data Retention](enterprisesettings-dataretention.md)
- **Notifications** — [Configuring the web host](enterpriseemailsetup.md#configuring-the-web-host) and [Configuring reminders and the weekly report](enterpriseemailsetup.md#configuring-reminders-and-the-weekly-report)
- **Email** — [Configuring Email for PingCastle Enterprise](enterpriseemailsetup.md)
- **Scanning and Scheduling** — [Settings: Scanning and Scheduling](enterprisesettings-scanningscheduling.md); see also [Enterprise Scheduling](enterprisescheduling.md) for how these settings are used
- **Action Plans** — [Settings: Action Plans](enterprisesettings-actionplans.md)
- **Provisioning** — [Settings: Provisioning](enterprisesettings-scim.md)

## System

- **Database** — Shows the database engine, connection string, current schema, detection status, app pool identity, detected schemas, total domain count, and last data update, all read-only. The **Active schema** dropdown is the only editable setting — use it to force a specific schema when multiple schemas are active. Changing it requires a restart.
- **Security** — [Antiforgery protection](enterprisesettings-security.md#antiforgery-protection) and [Password rate limiting](enterprisesettings-security.md#password-rate-limiting)
- **Logging** — [Log levels](enterprisesettings-logging.md#log-levels), [File logging](enterprisesettings-logging.md#file-logging), and [Downloading logs](enterprisesettings-logging.md#downloading-logs)
- **Application** — [Settings: Application](enterprisesettings-application.md)

## Entra Scanner

See [Settings: Entra Scanner](enterprisesettings-entrascanner.md) for the settings synced from the Entra Scanner microservice. See [Entra scanning](enterpriseentrascan.md) for the scanning feature itself.
