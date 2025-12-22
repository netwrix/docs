---
description: >-
  This article addresses the "Cannot Execute PowerShell Command" error encountered in the Exchange Online monitoring plan for Netwrix Auditor, detailing symptoms, causes, and resolutions.
keywords:
  - PowerShell
  - Exchange Online
  - Netwrix Auditor
sidebar_label: PowerShell Command Error
tags: []
title: "Cannot Execute PowerShell Command Error in Exchange Online Monitoring Plan"
knowledge_article_id: kA04u000001112PCAQ
products:
  - auditor
---

# Cannot Execute PowerShell Command Error in Exchange Online Monitoring Plan

## Symptom

One of the following errors is prompted in the Health Log for your Exchange Online monitoring plan:

```
Event ID: 2002
User: N/A
Description: Monitoring Plan: %Exchange Online Monitoring Plan name%

The following error has occurred while processing '%domain_name%':

Cannot Execute the PowerShell command. Error. Connecting to the remote server outlook.office365.com failed with the following error message: 
For more information, see the about_Remote_Troubleshooting Help topic.
```

```
Event ID: 2002
User: N/A
Description: Monitoring Plan: %Exchange Online Monitoring Plan name%

The following error has occurred while processing '%domain_name%':

Connecting to the remote server outlook.office365.com failed with the following error message: 
For more information, see the about_Remote_Troubleshooting Help topic.
```

> **NOTE:** The white space after the `following error message:` as well as the absence of the error message itself are both strong indicators for this issue.

## Cause

The Exchange Online Management PowerShell module is outdated.

## Resolution

### Resolution 1. For Netwrix Auditor v10.5 and older

Update the Exchange Online Management PowerShell module on your Netwrix Auditor server. Run the following command in the elevated PowerShell prompt:

```powershell
Update-Module -Name "ExchangeOnlineManagement"
```

### Resolution 2. For Netwrix Auditor v10.6

> **NOTE:** Netwrix Auditor v10.6.12275 (GA) installs and requires ExchangeOnlineManagement PowerShell module v3.0 to operate. For Netwrix Auditor v10.6.12275 users, it is recommended to upgrade to the latest version available. For additional information, refer to the following link: [Upgrade to the Latest Version ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/install/upgrade).  
> Netwrix Auditor v10.6.12299 (Update 1) installs and requires ExchangeOnlineManagement PowerShell module v3.2 to operate.

1. Netwrix Auditor v10.6.12299 (Update 1) uses the ExchangeOnlineManagement PowerShell (EXO) module v3.2 and newer.

   Upgrade the EXO module by uninstalling the previous version and installing the EXO v3.2 module. Follow the installation steps in this article: [Deprecation of Remote PowerShell (RPS) Protocol in Exchange Online PowerShell – If you have installed any module earlier than v3 ⸱ Microsoft 🡥](https://techcommunity.microsoft.com/t5/exchange-team-blog/announcing-deprecation-of-remote-powershell-rps-protocol-in/ba-p/3695597).

2. Check if Remote PowerShell (RPS) is deprecated by MS. You can find instructions and the deprecation timeline here: [Deprecation of Remote PowerShell in Exchange Online – Re-enabling or Extending RPS support ⸱ Microsoft 🡥](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-in-exchange-online-re-enabling/ba-p/3779692).

   If it's disabled, you will need to review the PowerShell installation on the Netwrix Auditor server.

3. Auditor versions prior to 10.6 used ExchangeOnlineManagement v2. It is now deprecated by MS, so check the ExchangeOnlineManagement installed on your system:

   ```
   get-module -ListAvailable | Where-object {$_.Name -like '*Exchange*'}
   ```

   > **TIP:** If you see a 2.x or 3.0 version, you will need to delete it. Netwrix Auditor will attempt to use it and will not be able to install v3.2.0.

Steps to remove/update ExchangeOnlineManagement:

1. Disable the Exchange Online Monitoring Plan in Auditor.
2. Delete all ExchangeOnlineManagement installed on your system:

   ```
   Get-InstalledModule -Name ExchangeOnlineManagement | Uninstall-Module
   ```

3. Enable the Exchange Online Monitoring Plan in Auditor. Then Netwrix Auditor will install v3.2.0.