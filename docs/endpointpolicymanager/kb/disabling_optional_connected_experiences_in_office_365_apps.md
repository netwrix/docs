---
description: >-
  This article explains how to disable the Optional Connected Experiences feature in Office 365 apps such as Word and Excel using registry settings or PowerShell scripts.
keywords:
  - Office 365
  - Optional Connected Experiences
  - registry settings
  - PowerShell
  - Endpoint Policy Manager
sidebar_label: Disabling Optional Connected Experiences
tags: []
title: "Disabling Optional Connected Experiences in Office 365 Apps"
knowledge_article_id: kA0Qk0000002WyHKAU
products:
  - endpointpolicymanager
---

# Disabling Optional Connected Experiences in Office 365 Apps

## Related Queries

- "How can I configure a policy to automatically uncheck the option for optional connected experiences in Office 365 apps?"
- "Disable Optional Connected Experiences in O365 apps"

## Overview

This article explains how to disable the **Optional Connected Experiences** feature in Office 365 apps such as Word and Excel by using registry settings or PowerShell scripts. This setting is located under **App** > **File** > **Options** > **Trust Center Settings** > **Privacy Options**.

## Instructions

### Using Registry Settings

To disable the **Optional Connected Experiences** feature, you can manually set the required registry keys:

```plaintext
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Policies\Microsoft\office\16.0\common\privacy]
"disconnectedstate"=dword:00000002
```

> **IMPORTANT:** Always test registry changes on a small number of machines before deploying them widely.

### Using a PowerShell Script

Alternatively, you can use the following PowerShell script to set the registry keys:

```powershell
if((Test-Path -LiteralPath "HKCU:\Software\Policies\Microsoft\office\16.0\common\privacy") -ne $true) {  
    New-Item "HKCU:\Software\Policies\Microsoft\office\16.0\common\privacy" -force -ea SilentlyContinue 
};
New-ItemProperty -LiteralPath 'HKCU:\Software\Policies\Microsoft\office\16.0\common\privacy' -Name 'disconnectedstate' -Value 2 -PropertyType DWord -Force -ea SilentlyContinue;
```

> **NOTE:** Ensure the **`disconnectedstate`** value is set to **`2`** to properly disable the feature.

### Using Endpoint Policy Manager

If you are using **Netwrix Endpoint Policy Manager**, you can deploy the above PowerShell script as a policy using the **Scripts & Triggers** component. Refer to [How to create a shortcut under the Public Desktop using Endpoint Policy Scripts Manager](https://docs.netwrix.com/docs/endpointpolicymanager/) to see an example of how to run PowerShell scripts via Scripts & Triggers Manager.

## Related Links

- [How to create a shortcut under the Public Desktop using Endpoint Policy Scripts Manager](https://docs.netwrix.com/docs/endpointpolicymanager/)
- [Policy Setting for Optional Connected Experiences ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/microsoft-365-apps/privacy/manage-privacy-controls#policy-setting-for-optional-connected-experiences)