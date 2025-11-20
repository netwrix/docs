---
title: "How do I deploy the Endpoint Policy Manager CSE via SCCM (or other systems management system) ?"
description: "How do I deploy the Endpoint Policy Manager CSE via SCCM (or other systems management system) ?"
sidebar_position: 10
---

# How do I deploy the Endpoint Policy Manager CSE via SCCM (or other systems management system) ?

Using SCCM to deploy the Netwrix Endpoint Policy Manager (formerly PolicyPak) CSE is a simple
process. It will honor a silent install and will not require or request a reboot.

Examples of typical silent command lines to run are below:

To install Endpoint Policy Manager CSE quietly with no UI:

```
msiexec /i "C:\Temp\PolicyPak Client-Side Extension x64.msi" /qn
```

To install Endpoint Policy Manager CSE quietly with no UI and no restart:

```
msiexec /i "C:\Temp\PolicyPak Client-Side Extension x64.msi" /qn /norestart
```

More info on MSIEXEC command line switches please see
[Microsoft Standard Installer command-line options](https://learn.microsoft.com/en-us/windows/win32/msi/standard-installer-command-line-options)

The only caveats are around Endpoint Policy Manager Browser Router:

- A reboot is first required for Endpoint Policy Manager Browser Router to function 100%.
- Internet Explorer should be closed when deploying the Endpoint Policy Manager CSE to avoid
  questions of IE during installation. You can use the script below to help with this.

```
Do {$ieCheck = Get-Process iexplore -ErrorAction SilentlyContinueIf ($ieCheck -eq $null) 
{msiexec /i ‘PolicyPak Client-Side Extension x64.msi' /q#Write-Host ‘Installing'Start-Sleep -s 600Exit}else 
{#Write-Host ‘IE Open'Start-Sleep -s 600}} while ($ieCheck -ne $null)
```

