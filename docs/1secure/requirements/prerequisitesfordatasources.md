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
| Microsoft Entra ID | Microsoft Entra ID version provided within Microsoft Office 365 Depending on the authentication method you use to collect Azure AD and Office 365 data, additional configuration steps may be required. See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic for additional information. |
| Computer (Windows File Server) | <ul><li>Windows Server OS<ul><li>Windows Server 2022</li><li>Windows Server 2019</li><li>Windows Server 2016</li><li>Windows Server 2012 R2</li></ul></li><li>Windows Desktop OS (32 and 64-bit)<ul><li>Windows 10</li><li>Windows 8.1</li><li>Windows 7</li></ul></li></ul>Consider the following: <br /><ul><li>To collect data from 32-bit operating systems, network traffic compression must be disabled.</li><li>To collect data from Windows Failover Cluster, network traffic compression must be enabled.</li><li>Scale-Out File Server (SOFS) cluster isn't supported.</li></ul>|
| Network Attached Storage | <ul><li>Azure Files</li><li>Cohesity SmartFiles</li><li>CTERA</li><li>Dell VNX/Celerra</li><li>Dell Isilon/PowerScale</li><li>Dell Unity</li><li>Dell PowerStore</li><li>Everpure FlashArray (beta)</li><li>Everpure FlashBlade (beta)</li><li>Hitachi NAS</li><li>Nasuni</li><li>NetApp</li><li>Nutanix Files</li><li>Panzura</li><li>Qumulo</li></ul>Consider the following: <br /><ul><li>To collect activity, you need Netwrix Activity Monitor 10.2 in addition to the Netwrix Cloud Agent. Activity Monitor is a separate on-premises Netwrix product that collects the activity from the storage devices and forwards it to 1Secure through the Cloud Agent.</li><li>The Cloud Agent listens for Activity Monitor agent connections on TCP port 4507 by default.</li></ul>See the [Network Attached Storage](/docs/1secure/admin/datacollection/networkattachedstorage.md) topic for additional information. |
| SharePoint Online | Azure Active Directory version provided within Microsoft Office 365 Depending on the authentication method you use to collect SharePoint Online and OneDrive for Business data, additional configuration steps may be required. See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic for additional information.                                                                                      |
| Exchange Online | Azure Active Directory version provided within Microsoft Office 365 Depending on the authentication method you use to collect Exchange Online data, additional configuration steps may be required. See the [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic for additional information.