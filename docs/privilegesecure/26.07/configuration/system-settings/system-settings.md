---
title: "System settings reference"
description: "Look up each System Settings panel in Privilege Secure, its fields, default values, and allowed ranges."
sidebar_position: 10
---

# System settings reference

**System Settings** is a top-level item in the left navigation. The page lists the setting panels, and a search box (**Search Settings...**) filters the list. Two more pages sit under the **System Settings** menu: **Action Service Settings** and **Database**.

You need the Administrator role to change these settings. When you edit a value, **Save** and **Cancel** buttons appear. Click **Save** to keep the change.

The defaults on this page come from the product. A system upgraded from an earlier release can show different values if someone changed them.

The panels appear in this order:

1. [RDP Options](#rdp-options)
2. [WinRM Options](#winrm-options)
3. [UI Idle Timeout](#ui-idle-timeout)
4. [User Expiration](#user-expiration)
5. [Encrypted Files](#encrypted-files)
6. [Email](#email)
7. [Password History](#password-history)
8. [Local User Password](#local-user-password)
9. [Data Retention](#data-retention)
10. [Services](#services)

{/* TODO screenshot: the System Settings page with the panel list (retake the searchable list) */}

## RDP Options

These options apply to the Remote Desktop Protocol (RDP) files that Privilege Secure creates for sessions.

| Field | Default | Description |
| --- | --- | --- |
| **Default Resolution** | 1440x900 | The resolution of a new RDP session. The list runs from 640x480 to 2560x1440. Select **Full Screen** to have RDP detect the screen resolution and match it. |
| **Multi Monitor** | Cleared | Select to turn on multiple-monitor support. |
| **Smart Sizing** | Selected | Select to scale the remote desktop to the size of the session window. |
| **Certificate Thumbprint** | Empty | The hexadecimal thumbprint of the certificate that signs the RDP files. See [Configure and sign RDP files](/docs/privilegesecure/26_07/configuration/system-settings/rdp-files). |

{/* TODO verify: what Multi Monitor and Smart Sizing change in the generated RDP file. */}

## WinRM Options

| Field | Default | Description |
| --- | --- | --- |
| **WinRM HTTP Setting** | **Use Http** | The transport for Windows Remote Management (WinRM) connections: **Use Http**, **Use Https If Available**, or **Use Https Only**. |

A resource can override this setting on its own details page. See [Secure WinRM](/docs/privilegesecure/26_07/resources/secure-winrm).

## UI Idle Timeout

| Field | Default | Description |
| --- | --- | --- |
| **Idle Timeout (minutes)** | 10 | The minutes of inactivity before the console shows a **Session Timeout** warning. The allowed range is 1 to 1000. |

If the user doesn't click **Keep Session Active** within 5 minutes of the warning, the console signs them out. With the default, an idle user is signed out after about 15 minutes. The console shows a caution when you enter a value above 60. See [Idle timeout](/docs/privilegesecure/26_07/user-guide/sign-in#idle-timeout).

{/* TODO verify: time the warning and the sign-out on 26.07.3 (the code sets the sign-out 5 minutes after the warning). Confirm whether 0 is accepted through the API, and whether the setting applies to the Remote Access Gateway portal. */}

## User Expiration

| Field | Default | Description |
| --- | --- | --- |
| **Idle Limit to Disable Users (days)** | 0, with **Disabled** selected | The number of days without a sign-in after which Privilege Secure acts on an idle user. The field is unavailable while **Disabled** is selected. The allowed values are 0 (off) or 90 to 365. |

:::warning
The label says users are disabled, but this setting may remove the idle users from Privilege Secure instead. Don't turn it on in a production system until you have confirmed the result on a test system or a copy of the database.
:::

Administrators and application users are exempt.

{/* TODO verify: whether the setting disables or deletes idle users. The panel label and the July 2025 announcement say disable and say disabled users free a license. The code removes the managed accounts. Test on a disposable VM or after a snapshot, then replace the warning with the confirmed behavior. Also confirm the 90 to 365 range and the exemptions. */}

## Encrypted Files

These settings apply to files that users store in a secret vault for File Release activities.

| Field | Default | Description |
| --- | --- | --- |
| **Max Filesize (mb)** | 10 | The largest file that Privilege Secure accepts. The allowed range is 1 to 20 MB. |
| **File Malware Scanning** | Selected | Scans each file for malware when a user uploads it. |

## Email

| Field | Default | Description |
| --- | --- | --- |
| **Website URL** | Empty | The base address that Privilege Secure uses for links in emails and notifications. Enter a valid URL, for example `https://<nps-server>:6500`. |

This panel holds only the **Website URL**. The mail server settings (Simple Mail Transfer Protocol, SMTP) are on the Email Service of a service node. See [Configure email notifications](/docs/privilegesecure/26_07/configuration/system-settings/email).

## Password History

| Field | Default | Description |
| --- | --- | --- |
| **Historical Password Limit** | 7 | The number of previous passwords that can't be reused. The allowed range is 1 to 50. |
| **Days Of Password Retention** | 30 | The number of days that Privilege Secure keeps a password record in the history. The allowed range is 1 to 365. |

## Local User Password

These rules apply to the passwords of local users.

| Field | Default | Description |
| --- | --- | --- |
| **Length** | 8 | The minimum password length. The allowed range is 8 to 1024. |
| **Unique Chars** | 1 | The minimum number of different characters. The allowed range is 1 to 12. |
| **Require Non-Alphanumeric** | Selected | The password needs at least one character that isn't a letter or digit. |
| **Require Lowercase** | Selected | The password needs a lowercase letter. |
| **Require Uppercase** | Selected | The password needs an uppercase letter. |
| **Require Digit** | Selected | The password needs a digit. |
| **Expiration (Days)** | 90 | The days a password stays valid before it expires. The allowed range is 10 to 365. |

See [Add and manage local users](/docs/privilegesecure/26_07/admin/users-groups/local-users).

## Data Retention

Data retention deletes old records. It doesn't archive them. All three types are off by default.

| Field | Default | Description |
| --- | --- | --- |
| **Enable SIEM Retention** and **SIEM Retention Days** | Cleared, 90 | Deletes Security Information and Event Management (SIEM) log records older than the number of days. |
| **Enable Email Retention** and **Email Retention Days** | Cleared, 90 | Deletes email records older than the number of days. |
| **Enable I/O Log Retention** and **I/O Log Retention Days** | Cleared, 90 | Deletes session recordings (input and output logs) older than the number of days. |

Each retention period accepts 1 to 3650 days. See [Configure data retention](/docs/privilegesecure/26_07/configuration/system-settings/data-retention).

## Services

| Field | Default | Description |
| --- | --- | --- |
| **NPS Rest URL** | `https://localhost:6500` | The address that the Privilege Secure services use to reach the web service. Change it to the console's fully qualified name, for example `https://<nps-server>:6500`. |
| **Ignore HTTPS Certificate Errors** | Cleared | Skips certificate validation for connections to the web service. Leave it cleared. |
| **Register Services** | Not applicable | Applies the **NPS Rest URL** to the services and registers them again. |

See [Set the NPS REST URL and register services](/docs/privilegesecure/26_07/configuration/system-settings/services-url).

## Action Service Settings

**System Settings** > **Action Service Settings** lists the action types that the Action Service runs: **Active Directory**, **Activities**, **Database**, **Debug**, **Host Scanning**, **Password Rotation**, **Password Verification**, and **Protection Policy**. The **Debug** entry isn't for production use.

Each entry has a read-only **Description** and a **Timeout Override** checkbox. Select **Timeout Override** to show **Timeout Override (minutes)**, and enter the number of minutes to use in place of the default time limit for that action type.

## Database

**System Settings** > **Database** shows the database that Privilege Secure uses, as read-only fields: **Host**, **Port**, **Database**, and **Service Status**. For PostgreSQL, a table of server parameters follows, with a **Name** and a **Value** for each. For the supported databases, see [Database requirements](/docs/privilegesecure/26_07/requirements/database).

{/* TODO verify: whether the Database page still supports Microsoft SQL Server in 26.07.3 (the lab showed PostgreSQL only), and the default PostgreSQL port on a new install. */}
