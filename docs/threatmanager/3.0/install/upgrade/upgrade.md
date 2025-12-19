---
title: "Upgrade Procedure"
description: "Upgrade Procedure"
sidebar_position: 70
---

# Upgrade Procedure

This topic describes the steps needed for upgrading Threat Manager to the latest version.


## Considerations

Configure integration with one or more Netwrix products to feed the desired type of data into Threat
Manager:

- [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
- [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
- [Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)

If Netwrix Activity Monitor is used to send data to Threat Manager, the versions of both products
must be compatible.

:::note
It is not required to upgrade the Activity Monitor to the latest version when upgrading
Threat Manager, but it is recommended to upgrade it in order to take full advantage of the new
features.
:::


| Netwrix Activity Monitor Version | Compatibility with Threat Manager v3.0  |
| --- | --- |
| 7.1 | Fully compatible for monitoring of: <br /><ul><li>File System Data</li><li>Active Directory Data</li><li>Microsoft Entra ID Data</li></ul> Threat Manager also supports file copy event type and file size information. <br />**NOTE:** SharePoint, SharePoint Online, Exchange Online, Linux, and SQL monitoring are not supported  |
| 7.0 | Fully compatible for monitoring of: <br /><ul><li>File System Data</li><li>Active Directory Data</li><li>Microsoft Entra ID Data</li></ul> Threat Manager also supports file copy event type and file size information. <br />**NOTE:** SharePoint, SharePoint Online, Exchange Online, Linux, and SQL monitoring are not supported. |
| 6.0 | Fully compatible for monitoring of: <br /><ul><li>File system Data</li><li>Active Directory Data</li></ul> Threat Manager also supports file copy event type and file size information. <br />**NOTE:** SharePoint, SharePoint Online, Exchange Online, Microsoft Entra ID, Linux, and SQL monitoring are not supported |

## Threat Manager Services

Stop all Threat Manager services.

**Step 1 –** Go to Services in the Windows Services Management Console (`services.msc`) on the
server where Netwrix Threat Manageris installed.

**Step 2 –** Right-click on each Threat Manager service and click Stop in the following order:

- Netwrix Threat Manager Action Service
- Netwrix Threat Manager Active Directory Service
- Netwrix Threat Manager Email Service
- Netwrix Threat Manager Event Service
- Netwrix Threat Manager Integration Service
- Netwrix Threat Manager Job Service
- Netwrix Threat Manager License Service
- Netwrix Threat Manager SIEM Service
- Netwrix Threat Manager Web Service

## Upgrade Cases

You can:

- [Upgrade Threat Manager from 2.8 to 3.0](/docs/threatmanager/3.0/install/upgrade/upgrade3.0.md)
- [Upgrade Threat Manager from 2.6/2.7 To 2.8](/docs/threatmanager/3.0/install/upgrade/upgrade2.8.md)
