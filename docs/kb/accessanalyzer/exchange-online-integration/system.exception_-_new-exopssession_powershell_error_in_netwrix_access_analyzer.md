---
description: >-
  This article addresses the PowerShell error encountered when running an Exchange Online job in Netwrix Access Analyzer and provides resolutions for updating necessary modules.
keywords:
  - PowerShell
  - Exchange Online
  - Netwrix Access Analyzer
sidebar_label: PowerShell Error in Netwrix Access Analyzer
tags:
  - exchange-online-integration
title: "System.Exception − New-ExoPSSession PowerShell Error in Netwrix Access Analyzer"
knowledge_article_id: kA04u00000111IrCAI
products:
  - access-analyzer
---

# System.Exception − New-ExoPSSession PowerShell Error in Netwrix Access Analyzer

## Symptom

The following error is prompted when running an Exchange Online job in Netwrix Access Analyzer:

```
PowerShell error: System.Exception: New-ExoPSSession:
Connection to the remote server %server% failed with the following error message: 
For more information, see the about_Remote_Troubleshooting Help topic.
```

## Causes

1. The **ExchangeOnlineManagement** PowerShell module is outdated.
2. The **PowerShellGet** PowerShell module is outdated.

## Resolutions

1. Run the following command in elevated PowerShell to update the **ExchangeOnlineManagement** module:

   ```powershell
   Update-Module -Name "ExchangeOnlineManagement"
   ```

   If the error `Update-Module : Module 'ExchangeOnlineManagement' was not installed by using Install-Module` is prompted, refer to the following command to install the module:

   ```powershell
   Install-Module -Name ExchangeOnlineManagement -RequiredVersion 3.3.0 -Force
   ```

   Follow the instructions to complete the update.

2. Run the following command in elevated PowerShell to update the **PowerShellGet** module:

   ```powershell
   Update-Module -Name "PowerShellGet"
   ```

   If the error `Update-Module : Module 'PowerShellGet' was not installed by using Install-Module` is prompted, refer to the following command to install the module:

   ```powershell
   Install-Module -Name PowerShellGet -RequiredVersion 2.2.5 -Force
   ```

   Follow the instructions to complete the update.

## Related Links

- [ExchangeOnlineManagement 3.3.0 ⸱ PowerShell Gallery 🡥](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.3.0)
- [PowerShellGet 2.2.5 ⸱ PowerShell Gallery 🡥](https://www.powershellgallery.com/packages/PowerShellGet/2.2.5)