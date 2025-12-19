---
title: "What does the Preparation Tool Install"
description: "What does the Preparation Tool Install"
sidebar_position: 20
---

# What does the Preparation Tool Install

When the [Preparation Tool](/docs/directorymanager/11.1/install/installer/preparationtool.md) runs, it installs the following software and Windows
features:

| Software | Comments |
| --- | --- |
| **Required by all Directory Manager modules**   |   |
| Microsoft Internet Information Services (IIS) with the following role services: <ul><li>Common HTTP Features<ul><li>Default Document</li><li>Static Content</li><li>WebDAV Publishing</li></ul></li><li>**Performance**<ul><li>Static Content Compression</li></ul></li><li>**Security**<ul><li>Request Filtering</li><li>Windows Authentication</li></ul></li><li>Application Development<ul><li>NET Extensibility</li><li>ASP.NET</li><li>ISAPI Extensions</li><li>ISAPI Filters</li></ul></li><li>**Management Tools**<ul><li>IIS Management Console</li><li>IIS 6 Management Compatibility (with sub options _IIS 6 Metabase Compatibility_ & _IIS 6 Management Console_)</li></ul></li></ul> |  |
| Windows server features: <ul><li>Windows Process Activation Service<ul><li>Process Model</li><li>Configuration APIs</li></ul></li></ul> |    |
| Microsoft .NET Desktop Runtime 8.0.8 Click [here](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.30-windows-x64-installer) to download. <br />Microsoft ASP.NET Core Hosting Bundle 8.0.8 <br />Click [here](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.30-windows-hosting-bundle-installer) to download. | Directory Manager runs on Microsoft .NET 6. <br />The .NET Core Hosting bundle is an installer for the .NET Core Runtime and the [ASP.NET Core Module](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.30-windows-hosting-bundle-installer). The bundle allows ASP.NET Core apps to run with IIS. Directory Manager Installer, Configuration Tool and Upgarde Wizard need this specific version of .Net Framework. |
| PowerShell Core 7.4.6 | |
| Microsoft AD module for PowerShell |
| Visual C++  |    |
| Visual Studio 2015 Redistributable Tool |  |
| Microsoft Edge WebView2 Runtime |  |
| Microsoft Distributed Transaction Coordinator | The Microsoft Distributed Transaction Coordinator service (MSDTC) is installed during the installation of the Windows OS. Errors that occur during installation may stop the component from working properly. Any errors that occur during an upgrade process may also stop the component from working properly. More information: [Microsoft Distributed Transaction Coordinator Service Installation and Setup](http://technet.microsoft.com/en-us/library/dd353812%28v=ws.10%29.aspx) |
| Elasticsearch 8.0.0  | If 95% of space is consumed on C drive, Elasticsearch will stop responding intermittently and will require a restart after more than 95% space is available. When Elasticsearch is locked, any object created or modified in Directory Manager will be committed in the provider but not in the Elasticsearch repository. While configuring an Elasticsearch cluster on all Directory Manager Instances, make sure that port TCP IP 9305 or a custom port (configured in the yml file for the Elasticsearch cluster) is unblocked and remains the same on each Directory Manager instance that is part of the master-slave cluster. If you do not want to use this version of Elasticsearch, select the **I will install and manage Elasicsearch myself** option on the Elasticsearch Settings page of the Configuration Tool. |
| Exchange Online Management Module  | Required for Microsoft Entra ID |
| WinRM IIS Extension | For Directory Manager to make a connection to Exchange, configure WinRM in one of the following ways. <ul><li>**Option 1: intra-Domain** <br />Both Directory Manager and the destination Exchange host must be in the same domain. Both systems must have WinRM configured (use the PowerShell command winrm /quickconfig for this). The default value for the necessary listener(s) is \* and that is all that is necessary to make a remote connection when the “–authentication” parameter is not specified.</li><li>**Option 2: Inter-Domain** <br />Both systems must have WinRM configured (use the PowerShell command winrm /quickconfig for this). Design the hosts to trust each other by configuring “Trusted Hosts” either by GPO or locally.<ul><li>By GPO — Computer > Windows > Admin Templates > Windows Components > Windows Remote Management > WinRM Client > Trusted Hosts</li><li>Use this PowerShell command to configure locally: <br />Set-Item wsman:\localhost\Client\TrustedHosts –Value `servername.domain.com`</li></ul></li></ul> |
| **Required by Synchronize** |   |
| Microsoft Access Database Engine 2016 Click [here](https://www.microsoft.com/en-us/download/details.aspx?id=54920) to download. | Required if Microsoft Office Access 2016 or Microsoft Office Excel 2016 is used in a Synchronize job, either as a source or a destination. Install manually since the Preparation tool will not detect and install it automatically. |
| Microsoft Access Runtime 2016 Click [here](https://www.microsoft.com/en-us/download/details.aspx?id=50040&quot) to download. | Required if Microsoft Office Access 2016 is used in a Synchronize job, either as a source or a destination. Install manually since the Preparation tool will not detect and install it automatically. |