---
title: "Restore Windows 11 Specific Right-Click Context Menu"
description: "Restore Windows 11 Specific Right-Click Context Menu"
sidebar_position: 10
---

# Restore Windows 11 Specific Right-Click Context Menu

The Endpoint Policy Manager team is working to fix a known bug that occurs when upgrading one
version to the latest version of the Endpoint Policy Manager. The CSE will prevent the Windows
11-specific Least Privilege Manager context menu from displaying.

The workaround is to run as Admin or System (or using Endpoint Policy Manager Scripts Manager). Only
perform this workaround once. It will restore the Windows 11 Start Menu for the Least Privilege
Manager.

![Restoring the Right-Click Context Menu](/images/endpointpolicymanager/troubleshooting/log/leastprivilege/restorecontextmenu.webp)

Use Endpoint Policy Manager Scripts Manager to perform this action, one time, on the computer side.

:::note
There are two PowerShell scripts. Select the script to use according to the Endpoint
Policy Manager configuration that is implemented. It is recommended to perform a small-scale test
before rolling this update out to the entire organization.
:::


Non-domain-Joined Machines

Use the following PowerShell script for non-domain-joined machines (typically Endpoint Policy
Manager Cloud or Endpoint Policy Manager configured with an MDM service like Intune):

```
$RegistryPath = 'HKLM:\Software\Policies\PolicyPak\Client-Side Extensions\{58DE0268-6384-49E0-A333-20EC46654B82}\UI Settings'
$Name = 'DisableWindows11ModernContextMenu'
$Value = '1'
If (-NOT (Test-Path $RegistryPath)) {
New-Item -Path $RegistryPath -Force | Out-Null
}
New-ItemProperty -Path $RegistryPath -Name $Name -Value $Value -PropertyType DWORD -Force
ppupdate
Start-Sleep -Seconds 10
$Value = '0'
New-ItemProperty -Path $RegistryPath -Name $Name -Value $Value -PropertyType DWORD -Force
ppupdate
```

Domain-Joined Machines

Use the following Powershell script for domain-joined machines:

```
$RegistryPath = 'HKLM:\Software\Policies\PolicyPak\Client-Side Extensions\{58DE0268-6384-49E0-A333-20EC46654B82}\UI Settings'
$Name = 'DisableWindows11ModernContextMenu'
$Value = '1'
If (-NOT (Test-Path $RegistryPath)) {
New-Item -Path $RegistryPath -Force | Out-Null
}
New-ItemProperty -Path $RegistryPath -Name $Name -Value $Value -PropertyType DWORD -Force
gpupdate
$Value        = '0'
New-ItemProperty -Path $RegistryPath -Name $Name -Value $Value -PropertyType DWORD -Force
gpupdate
```


