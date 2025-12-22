---
description: >-
  Use Microsoft Graph PowerShell or the Azure Active Directory PowerShell 2.0
  module to determine how many enabled Microsoft Entra ID accounts exist in your
  environment. This article includes the exact commands and notes about version
  behavior and userType assignment.
keywords:
  - Microsoft Entra ID
  - Azure AD
  - Microsoft Graph PowerShell
  - Azure AD PowerShell
  - enabled accounts
  - user count
  - userType
  - PowerShell
products:
  - auditor
  - Azure_AD_and_Office_365
sidebar_label: 'Determining the Number of Enabled Microsoft Entra '
tags: []
title: "Determining the Number of Enabled Microsoft Entra ID Accounts"
knowledge_article_id: kA00g000000H9dyCAC
---

# Determining the Number of Enabled Microsoft Entra ID Accounts

## Overview

This article explains how to determine the number of enabled Microsoft Entra ID (formerly Azure AD) accounts in your environment. The process uses either Microsoft Graph PowerShell or the Azure Active Directory PowerShell 2.0 module, depending on your version and requirements.

> **NOTE:** This method works **only** for version 9.96 and later. Licensing for version 9.95 counts guest and external users. From version 9.96 and onwards, guest and external users are not included in the license count.

## Instructions

> **NOTE:** As the Azure Active Directory PowerShell 2.0 module is planned for deprecation, use the following steps to determine the count of enabled accounts via Microsoft Graph PowerShell.

### Microsoft Graph PowerShell (recommended)

1. Ensure you have the **Microsoft Graph PowerShell** module installed. For installation instructions, see Install the Microsoft Graph PowerShell SDK — Microsoft: https://learn.microsoft.com/en-us/powershell/microsoftgraph/installation?view=graph-powershell-1.0#installation. For migration guidance from Azure AD PowerShell, see Upgrade from Azure AD PowerShell to Microsoft Graph PowerShell — Microsoft: https://learn.microsoft.com/en-us/powershell/microsoftgraph/migration-steps?view=graph-powershell-1.0.
2. Connect to Microsoft Entra ID. For details, see Get Started with the Microsoft Graph PowerShell SDK — Sign in — Microsoft: https://learn.microsoft.com/en-us/powershell/microsoftgraph/get-started?view=graph-powershell-1.0#sign-in.
3. Run the following command in elevated PowerShell:

```powershell
Connect-MgGraph -Scopes "User.Read.All","Group.ReadWrite.All"
(Get-MgUser -All -Filter "userType eq 'Member' and accountEnabled eq true").Count
```

### Azure AD PowerShell 2.0

1. Ensure you have the **Azure Active Directory PowerShell 2.0** module installed. For more information, see Install Azure Active Directory PowerShell for Graph — Installing the Azure AD Module — Microsoft: https://docs.microsoft.com/en-us/powershell/azure/active-directory/install-adv2?view=azureadps-2.0#installing-the-azure-ad-module.
2. Connect to Microsoft Entra ID. For steps, see Install Azure Active Directory PowerShell for Graph — Connect to Azure AD — Microsoft: https://docs.microsoft.com/en-us/powershell/azure/active-directory/install-adv2?view=azureadps-2.0#connect-to-azure-ad.
3. Run the following command:

```powershell
(Get-AzureADUser -All $true -Filter "userType eq 'Member' and accountEnabled eq true").Count
```

After completing these steps, you will see the number of enabled user accounts in Microsoft Entra ID.

> **NOTE:** If a Microsoft Entra ID account was created prior to 2014, the `usertype` of this account will be blank. For information on how to assign the `usertype` to a user, see Add or Update User Profile Information and Settings — Microsoft: https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/how-to-manage-user-profile-info.

Alternatively, you can use one of the following commands depending on the PowerShell module:

- For **Azure AD PowerShell 2.0**:

```powershell
Set-MsolUser -UserPrincipalName "user@company.com" -UserType "Member"
```

- For **Graph PowerShell** (admin account required):

```powershell
Connect-MgGraph -Scopes "User.Read.All","Group.ReadWrite.All"
Update-MgUser -UserPrincipalName 'user@company.com' -UserType 'Member'
```

## Related Links

- Install the Microsoft Graph PowerShell SDK — Microsoft: https://learn.microsoft.com/en-us/powershell/microsoftgraph/installation?view=graph-powershell-1.0#installation
- Upgrade from Azure AD PowerShell to Microsoft Graph PowerShell — Microsoft: https://learn.microsoft.com/en-us/powershell/microsoftgraph/migration-steps?view=graph-powershell-1.0
- Get Started with the Microsoft Graph PowerShell SDK — Sign in — Microsoft: https://learn.microsoft.com/en-us/powershell/microsoftgraph/get-started?view=graph-powershell-1.0#sign-in
- Install Azure Active Directory PowerShell for Graph — Installing the Azure AD Module — Microsoft: https://docs.microsoft.com/en-us/powershell/azure/active-directory/install-adv2?view=azureadps-2.0#installing-the-azure-ad-module
- Install Azure Active Directory PowerShell for Graph — Connect to Azure AD — Microsoft: https://docs.microsoft.com/en-us/powershell/azure/active-directory/install-adv2?view=azureadps-2.0#connect-to-azure-ad
- Add or Update User Profile Information and Settings — Microsoft: https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/how-to-manage-user-profile-info
