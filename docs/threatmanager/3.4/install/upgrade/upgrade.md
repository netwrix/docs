---
title: "Upgrade Procedure"
description: "Upgrade Procedure"
sidebar_position: 70
---

# Upgrade Procedure

This topic describes the steps needed for upgrading Threat Manager to the latest version.


## Considerations

Configure integration with one or more Netwrix products to feed the type of data you want into Threat
Manager:

- [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
- [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
- [Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)

If you use Netwrix Activity Monitor to send data to Threat Manager, the versions of both products
must be compatible.

:::note
You don't need to upgrade the Activity Monitor to the latest version when upgrading
Threat Manager, but Netwrix recommends the upgrade to take full advantage of the new
features.
:::


| Netwrix Activity Monitor Version | Compatibility with Threat Manager v3.4  |
| --- | --- |
| 7.1 | Fully compatible for monitoring of: <br /><ul><li>File System Data</li><li>Active Directory Data</li><li>Microsoft Entra ID Data</li></ul> Threat Manager also supports file copy event type and file size information. <br />**NOTE:** Threat Manager doesn't support SharePoint, SharePoint Online, Exchange Online, Linux, and SQL monitoring  |
| 7.0 | Fully compatible for monitoring of: <br /><ul><li>File System Data</li><li>Active Directory Data</li><li>Microsoft Entra ID Data</li></ul> Threat Manager also supports file copy event type and file size information. <br />**NOTE:** SharePoint, SharePoint Online, Exchange Online, Linux, and SQL monitoring aren't supported. |
| 6.0 | Fully compatible for monitoring of: <br /><ul><li>File system Data</li><li>Active Directory Data</li></ul> Threat Manager also supports file copy event type and file size information. <br />**NOTE:** SharePoint, SharePoint Online, Exchange Online, Microsoft Entra ID, Linux, and SQL monitoring aren't supported |

## Threat Manager Services

Stop all Threat Manager services.

**Step 1 –** Go to Services in the Windows Services Management Console (`services.msc`) on the
server that hosts Netwrix Threat Manager.

**Step 2 –** Right-click each Threat Manager service and click Stop in the following order:

- Netwrix Threat Manager Web Service
- Netwrix Threat Manager Action Service
- Netwrix Threat Manager Active Directory Service
- Netwrix Threat Manager Azure Service
- Netwrix Threat Manager Email Service
- Netwrix Threat Manager Event Service
- Netwrix Threat Manager Integration Service
- Netwrix Threat Manager Job Service
- Netwrix Threat Manager License Service
- Netwrix Threat Manager SIEM Service

## Signing Key

On upgrade from a version that used `%ProgramData%\STEALTHbits\StealthDEFEND\WebService\jwtsign.pfx`, the installer reuses the private key from that file so tokens already issued stay valid. It then deletes the file. You don't re-enter the certificate password.

If the installer can't read the old `jwtsign.pfx`, it logs a warning, leaves the file in place, and generates a new key. Tokens signed with the old key then stop validating. For example, this happens when no `appsettings.json` references the file, so its password is unknown. See [JWT Signing Key](/docs/threatmanager/3.4/install/signingkey.md).

## After the Upgrade

A browser tab built against the old version recovers automatically. It clears the cached session and reloads from the root, at most once per minute, instead of showing the error screen at login. The web server tells browsers to load the new `index.html` after an upgrade instead of a cached page that points to removed files.

## Upgrade Cases

You can:

- [Upgrade PostgreSQL from 14 To 18](/docs/threatmanager/3.4/install/upgrade/upgrade_pg14_to_pg18.md)
- [Upgrade Threat Manager from 3.3 to 3.4](/docs/threatmanager/3.4/install/upgrade/upgrade3.4.md)
