---
title: "System Settings"
description: "Reference for the System Settings page, covering RDP, WinRM, idle timeout, user expiration, email, password, retention, and service options."
keywords:
  - RDP
  - WinRM
  - UI Idle Timeout
  - User Expiration
  - Password History Options
  - Data Retention
  - Encrypted Files
  - Email Configuration
sidebar_position: 10
---

# System Settings

In all cases, you have to hit save for the changes to take effect.

- **Save button (only visible when editing)** — Saves changes
- **Cancel button (only visible when editing)** — Discards changes

## RDP options

![RDP options with default resolution and certificate thumbprint](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/rdpoptions.webp)

- **Default Resolution** — The resolution the RDP session will use when first connected. If you select "Full Screen", then RDP attempts to auto-detect the screen resolution and match it.
- **Certificate Thumbprint** — The hexadecimal certificate (or thumbprint) value. See the
  [Sign RDP Files to Prevent Publisher Warning](/docs/privilegesecure/26.03/install/troubleshooting.md) topic for additional information.

## WinRM options

![WinRM HTTP setting options](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/winrmoptions.webp)

- **WinRM HTTP Setting** — This setting governs the HTTP encryption settings that WinRM
  connections use. The following options are available:
  - Use HTTP
  - Use HTTPS if available
  - Use HTTPS only

## UI idle timeout

![UI idle timeout setting](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/uiidletimeout.webp)

- **UI Idle Timeout Options** — Users with the Administrator role can configure the idle timeout for the
  Privilege Secure Console. The default idle timeout is 10 minutes.

## User expiration

![User expiration setting](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/userexpiration.webp)

- **NPS User Expiration** — Users who have not logged in to NPS for a configurable number of days are automatically disabled. Disabled users don't consume a license credit. Admins and Application users are exempt from this policy. The idle timeout can be set to a specific number of days or turned off entirely. This setting is disabled by default.

## Encrypted files

![Encrypted files size and malware scan settings](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/encryptedfiles.webp)

- **NPS Encrypted Files** — Set a maximum file size (MB). 10 MB is the default. There is also an option to scan the file for malware which is enabled by default.

## Email configuration

![Email configuration with the website URL field](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/email.webp)

- **Website URL** — Specify the website URL for emailed links in the following format:
  `https://fqdn:port e.g. https://sbpam1.company.com:6500`

This field determines the link format in all emails and notifications sent by Privilege Secure.

### Example email

![Email message containing the link to the website URL](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/emailedlink.webp)

## Password history options

![Password history options](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/passwordhistory.webp)

- **Historical Password Limit** — Number of previous passwords that can't be reused (Range: 1 - 50,
  Default: 7)
- **Days of Password Retention** — The number of days the password record is kept in the history (Range
  1 - 365, Default 30)

## Local account password options

![Local account password options](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/localaccountpasswordoptionspage.webp)

Provide the following information for the local account passwords:

- Length
- Unique Chars
- Require Non-Alphanumeric
- Require Lowercase
- Require Uppercase
- Require Digit
- **Expiration days** — The number of days the password can be used before the password expires

## Data retention

![Data retention settings](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/dataretention.webp)

Set any data retention policies your organization requires and number of days:

- SIEM Retention (logs)
- Email Retention
- Input/Output Logs (Session recordings)

## Services

After a website certificate is installed in IIS, update the Netwrix Privilege
Secure web services to ensure they are calling the correct URL. If the Web Services are set to the
wrong address, the services shows offline in the Services Node area.

![Services settings with the NPS Rest URL](/images/privilegesecure/26.03/accessmanagement/admin/configuration/page/services.webp)

:::note
ensure that the web certificate is updated in IIS before setting a new value in
Netwrix Privilege Secure. ensure the Binding Hostname in IIS, the certificate
Subject, and the NPS Rest URL value in the Services page exactly match.
:::

The Services Settings page has the following features:

- **NPS Rest URL** — The full qualified domain name (FQDN) of the new IIS web certificate
- **Ignore HTTPS Certificate Errors** — When checked, the console will ignore any HTTPS certificate
  errors (not recommended for production environments)
- **Register Services** — Applies the new URL value to the Netwrix Privilege Secure web services and
  re-registers them
- **Save button (only visible when editing)** — Saves changes
- **Cancel button (only visible when editing)** — Discards changes
