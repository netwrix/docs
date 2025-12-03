---
description: >-
  Shows how to remotely invoke the Management Shell from PowerShell 7 for
  Netwrix Directory Manager v11 by establishing a remote session, importing
  modules, and connecting to an Identity Store using credentials.
keywords:
  - powershell7
  - management shell
  - remote session
  - netwrix directory manager
  - identity store
  - Connect-IdentityStore
  - Import-PSSession
  - New-PSSession
products:
  - directory-manager
sidebar_label: Invoke Management Shell from PowerShell 7 in v11
tags:
  - system-administration-and-maintenance
title: "Invoke Management Shell from PowerShell 7 in v11"
knowledge_article_id: kA0Qk00000015QfKAI
---

# Invoke Management Shell from PowerShell 7 in v11

## Applies To
Netwrix Directory Manager 11

## Overview
This article explains how to remotely invoke the Management Shell from PowerShell 7 in Netwrix Directory Manager version 11. It covers the process of establishing a remote session, importing the necessary modules, and connecting to an Identity Store using credentials. This method allows you to run Netwrix Directory Manager cmdlets in PowerShell 7 without directly signing into the Netwrix Directory Manager server.

## Instructions
Follow the steps below to remotely connect to the Management Shell:

1. Open **PowerShell 7** as an Administrator.
2. Enter the following cmdlet and update the placeholders with the correct values:

- `DOMAIN\USERNAME` – Replace with the domain and username of your account.
- `USER-PASSWORD` – Replace with your actual password (in plain text).
- `YOUR MACHINE NAME HERE` – Replace with the name of the Directory Manager server.
- `IDENTITYSTOREID HERE` – Replace with the appropriate Identity Store ID.

```powershell
$username = "DOMAIN\USERNAME"
$pass = ConvertTo-SecureString "USER-PASSWORD" -AsPlainText -Force
$Cred = New-Object System.Management.Automation.PSCredential ($username, $pass)
$s = New-PSSession -ComputerName "YOUR MACHINE NAME HERE" -Credential $Cred -ConfigurationName PowerShell.7

Invoke-Command -Session $s -ScriptBlock {
  $srcu = [reflection.assembly]::LoadFrom('C:\Program Files\PowerShell\7\System.Windows.Forms.dll')
  $OnAssemblyResolve = [System.ResolveEventHandler] {
    param($sender, $e)
    if ($e.Name -like "System.Windows.Forms, Version=*") {
      return $srcu
    }
    return $null
  }
  [System.AppDomain]::CurrentDomain.add_AssemblyResolve($OnAssemblyResolve)
  $reg = Get-ItemProperty -Path HKLM:SOFTWARE\Microsoft\PowerShell\1\PowerShellSnapIns\Imanami.Groups.Management.PowerShell.Admin11
  $appbase = $reg.ApplicationBase
  Import-Module -Name "$appbase\GroupIDManagementShell\bin\Imanami.GroupID.Management.dll"
  Set-ModulePath -ModulePath "$appbase\GroupIDManagementShell\bin"
}

Import-PSSession -Session $s -Type cmdlet -AllowClobber
Connect-IdentityStore -mode "2" -IdentityStoreID "IDENTITYSTOREID HERE" -Credential $Cred
```

3. Once the script completes, a remote session will be established. This allows you to run Netwrix Directory Manager cmdlets in PowerShell 7 without logging directly into the Netwrix Directory Manager server.
