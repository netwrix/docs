---
description: >-
  This article outlines the required PowerShell modules and PackageProviders for configuring Entra, Exchange Online, and SharePoint Online auditing with Access Analyzer.
keywords:
  - PowerShell
  - Exchange Online
  - SharePoint Online
  - Entra
  - Access Analyzer
sidebar_label: PowerShell Modules for O365 Configuration
tags:
  - exchange-online-integration
title: "PowerShell Modules Required for O365 Configuration"
knowledge_article_id: kA0Qk0000001i3pKAA
products:
  - access-analyzer
---

# PowerShell Modules Required for O365 Configuration

## Question

What PowerShell Modules and PackageProviders are required to use the below instant jobs for setting up Entra, Exchange Online, and SharePoint Online auditing with Access Analyzer?

- AADI_RegisterAzureAppAuth
- SP_RegisterAzureAppAuth
- EX_RegisterAzureAppAuth

## Answer

The following PowerShell Modules and PackageProviders are required for their respective Instant Job:

### AADI_RegisterAzureAppAuth

- PowerShellGet
- NuGet
- Az.Accounts
- Microsoft.Graph

### EX_RegisterAzureAppAuth

- AzureAD
- ExchangeOnlineManagement

### SP_RegisterAzureAppAuth

- AzureAD

**To install these modules and package providers, the following commands can be run in an Admin PowerShell:**

```powershell
Install-Module -Name PowerShellGet -Force
Install-PackageProvider -Name NuGet -Force
Install-Module -Name Az.Accounts -Force
Install-Module -Name Microsoft.Graph -Force
Install-Module -Name AzureAD -Force
Install-Module -Name ExchangeOnlineManagement -Force
```