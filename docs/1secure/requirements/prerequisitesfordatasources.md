---
title: "Prerequisites for Data Sources"
description: "Prerequisites for Data Sources"
sidebar_position: 10
---

# Prerequisites for Data Sources

The following table lists the platforms and versions that Netwrix 1Secure can monitor.

| Data source | Supported Versions |
| --- | ---|
| Active Directory (including Logon Activity) | Domain Controller OS versions: <br /><ul><li> Windows Server 2022</li><li>Windows Server 2019</li><li>Windows Server 2016</li><li>Windows Server 2012 R2</li></ul> |
| Microsoft Entra ID | Microsoft Entra ID, as provided within Microsoft 365. Depending on your authentication method, additional configuration may be required. See [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) for details. |
| Computer (Windows File Server) | <ul><li>Windows Server OS<ul><li>Windows Server 2022</li><li>Windows Server 2019</li><li>Windows Server 2016</li><li>Windows Server 2012 R2</li></ul></li><li>Windows Desktop OS (32 and 64-bit)<ul><li>Windows 10</li><li>Windows 8.1</li><li>Windows 7</li></ul></li></ul><br />Additional requirements:<br /><ul><li>Disable network traffic compression for 32-bit operating systems.</li><li>Enable network traffic compression for Windows Failover Cluster.</li><li>Scale-Out File Server (SOFS) clusters aren't supported.</li></ul>|
| SharePoint Online | Microsoft Entra ID, as provided within Microsoft 365. Depending on your authentication method, additional configuration may be required. See [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) for details. |
| Exchange Online | Microsoft Entra ID, as provided within Microsoft 365. Depending on your authentication method, additional configuration may be required. See [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) for details. |