---
title: "Prerequisites for Data Sources"
description: "Prerequisites for Data Sources"
sidebar_position: 10
---

# Prerequisites for Data Sources

This section lists platforms and systems that can be monitored with Netwrix 1Secure.

| Data source | Supported Versions |
| --- | ---|
| Active Directory (including Logon Activity) | Domain Controller OS versions: <br /><ul><li> Windows Server 2022</li><li>Windows Server 2019</li><li>Windows Server 2016</li><li>Windows Server 2012 R2</li></ul> |
| Microsoft Entra ID | Microsoft Entra ID version provided within Microsoft Office 365 You may need to take some preparatory steps, depending on the authentication method you want to use for collecting Azure AD and Office 365 data. See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic for additional information. |
| Computer (Windows File Server) | <ul><li>Windows Server OS<ul><li>Windows Server 2022</li><li>Windows Server 2019</li><li>Windows Server 2016</li><li>Windows Server 2012 R2</li></ul></li><li>Windows Desktop OS (32 and 64-bit)<ul><li>Windows 10</li><li>Windows 8.1</li><li>Windows 7</li></ul></li></ul>Consider the following: <br /><ul><li>To collect data from 32-bit operating systems, network traffic compression must be disabled.</li><li>To collect data from Windows Failover Cluster, network traffic compression must be enabled.</li><li>Scale-Out File Server (SOFS) cluster is not supported.</li></ul>|
| SharePoint Online | Azure Active Directory version provided within Microsoft Office 365 You may need to take some preparatory steps, depending on the authentication method you want to use for collecting SharePoint Online and One Drive for Business. See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic for additional information.                                                                                      |
| Exchange Online | Azure Active Directory version provided within Microsoft Office 365 You may need to take some preparatory steps, depending on the authentication method you want to use for collecting Exchange Online. See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic for additional information.