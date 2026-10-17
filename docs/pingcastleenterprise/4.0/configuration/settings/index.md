---
sidebar_position: 1
sidebar_label: Settings overview
---
# PingCastle Enterprise settings overview

PingCastle Enterprise groups its configuration options into sections on **Configuration** > **Settings**. This page links each section to its documentation.

## Authentication

See [Configuring Authentication for PingCastle Enterprise](./authentication.md) for the full setup guide, including these methods:

- [Local authentication](./authentication.md#local-authentication)
- [Windows authentication](./authentication.md#windows-authentication)
- [OpenID Connect](./authentication.md#openid-connect)
- [SAML2 authentication](./authentication.md#saml2-authentication)
- [Header authentication](./authentication.md#header-authentication)
- [Client certificate authentication](./authentication.md#client-certificate-authentication)
- [Custom login message](./authentication.md#custom-login-message)
- [Login options](./authentication.md#login-options)

## Administration

- **Licensing** — [PingCastle Enterprise License](../../install/license.md#updating-your-license) explains the per-user licensing model and the legacy per-domain licensing model, along with the Licensing screen's status display and license upload.
- **Data retention** — [Data Retention](./data-retention.md)
- **Notifications** — [Configuring the web host](./email.md#configuring-the-web-host) and [Configuring reminders and the weekly report](./email.md#configuring-reminders-and-the-weekly-report)
- **Email** — [Configuring Email for PingCastle Enterprise](./email.md)
- **Scanning and Scheduling** — [Scanning and Scheduling](./scanning-scheduling.md); see also [Active Directory scan scheduling](../first-scan/ad-scan-scheduling.md) for how PingCastle Enterprise uses these settings
- **Action Plans** — [Action Plans](./action-plans.md)
- **Provisioning** — [Provisioning](../../integrations/scim.md)

## System

- **Database** — Shows the database engine, connection string, detection status, app pool identity, detected schemas, total domain count, and last data update, all read-only. The **Active schema** dropdown shows the schema PingCastle Enterprise uses and is the only editable setting on this screen — use it to force a specific schema when multiple schemas are active. Changing it requires a restart.
- **Security** — [Antiforgery protection](./security.md#antiforgery-protection) and [Password rate limiting](./security.md#password-rate-limiting)
- **Logging** — [Log levels](./logging.md#log-levels), [File logging](./logging.md#file-logging), and [Downloading logs](./logging.md#downloading-logs)
- **Application** — [Application](./application.md)

## Entra Scanner

See [Entra Scanner](./entra-scanner.md) for the settings synced from the Entra Scanner microservice. See [Entra scanning](../first-scan/entra-scanning.md) for the scanning feature itself.

## Configuration migration from appsettings.Production.json

In previous versions, PingCastle Enterprise stored configuration settings in `appsettings.Production.json`. Starting with version 4.0, PingCastle Enterprise stores these settings in the database instead.

When you start the application for the first time after upgrading to version 4.0, PingCastle Enterprise automatically migrates the settings from `appsettings.Production.json` into the database. You don't need to manually port any values from the old file.

As part of this migration, the installer backs up the original `appsettings.Production.json` file to a `config-backups/` subfolder in the install directory. Reference this backup if you need to verify a setting after the upgrade.
