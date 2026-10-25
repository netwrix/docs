---
title: "Application server requirements"
description: "Check the operating system, software, sizing, and permissions that the Privilege Secure application server needs before you run the installer."
sidebar_position: 20
---

# Application server requirements

The application server is the Windows server where you install Netwrix Privilege Secure for Access Management (Privilege Secure). It hosts the Privilege Secure Console and the core services.

## Server requirements

- Windows Server 2016 through Windows Server 2025
- American English language installation
- 2.0 GHz or faster dual-core 64-bit (x64) processor
- Domain-integrated DNS that resolves all managed components forward and in reverse
- A server hardened and dedicated to Privilege Secure (recommended)
- Controlled administrative access to the server (recommended)

:::tip
Keep the Privilege Secure server out of the domain for additional security.
:::

## Software to install before you run the installer

Install the following software on the application server before you run `NPS.exe`.

| Software | Requirement |
| -------- | ----------- |
| PowerShell | PowerShell 7.6 or later. The `NPS.exe` installer enforces this requirement from 26.07.0. |
| .NET Framework | 4.7.2. The `Pre-Reqs` folder of the product zip file includes the installer. |

Download PowerShell from [aka.ms/powershell](https://aka.ms/powershell).

:::warning
The Setup Launcher doesn't warn you if PowerShell 7.6 or later is missing. Its **Pre-requisites Setup** grid checks for PowerShell 5.1 or later, so it can show PowerShell as installed while `NPS.exe` still stops. Install PowerShell 7.6 or later before you start the Setup Launcher.
:::

If PowerShell 7.6 or later isn't installed, `NPS.exe` stops with the message "PowerShell 7.6 or later is required. Please install it from https://aka.ms/powershell".

The check finds PowerShell through the `App Paths\pwsh.exe` registry key. An installation that doesn't register that key can fail the check even when PowerShell is present. Install PowerShell from the MSI package. The PowerShell 7.6 MSI registers `App Paths\pwsh.exe`, and the ZIP package has no installer to register it.

{/* TODO verify: whether an MSIX installation registers the App Paths key. Also flag the KB article exporting-the-activity-log-as-a-csv, which conflicts with the PowerShell 7.6 floor and needs a 26.07 caveat. */}

## Software that the installer adds

`NPS.exe` installs the following software if the server doesn't already have it. You don't need to install it first.

| Software | Version |
| -------- | ------- |
| .NET 10 Hosting Bundle | Included in the installer (10.0.10) |
| Microsoft Visual C++ runtime | 14.51 (14.51.36247.0) |
| Internet Information Services (IIS) | Features that the installer's IIS package (`NPS.IIS.msi`) enables |

## Sizing

The RAM, CPU, and disk space you need depend on the number of administrators who use Privilege Secure.

| Environment | Extra large | Large | Medium | Small |
| ----------- | ----------- | ----- | ------ | ----- |
| Number of administrators | 500-1000 | 100-500 | 50-100 | 50 or fewer |
| RAM | 64 GB | 32 GB | 16 GB | 16 GB |
| Cores | 8-16 | 6-8 | 4-6 | 4 |
| C: drive | 80 GB | 80 GB | 80 GB | 80 GB |
| Application drive | 300 GB | 200 GB | 100 GB | 100 GB |
| Recording drive | 500 GB | 300 GB | 200 GB | 150 GB |

For proxy server sizing, see [Additional service node and proxy server requirements](/docs/privilegesecure/26.07/requirements/service-nodes.md).

## Permissions

To install the application, you need membership in the local Administrators group on the Privilege Secure server.

To synchronize Active Directory for vault connectors, use an account with Domain Admin privileges.

## Virtual environments

Netwrix prefers physical machines but supports virtual machines. For VMware, install all virtual machines in the same datacenter or rack. When the server requirements specify separate disks, configure separate data stores on the VM host.
{/* TODO verify: the VMware versions that Netwrix supports. The release code doesn't define a VMware support range, and the 26.03 page listed ESX 4.0 and ESXi 4.1, which VMware no longer supports. */}

## Next steps

- Check the [database requirements](/docs/privilegesecure/26.07/requirements/database.md).
- Open the [ports](/docs/privilegesecure/26.07/requirements/ports.md) that the application server needs.
- Run the installer. See [Install the application server](/docs/privilegesecure/26.07/install/install-application-server.md).
