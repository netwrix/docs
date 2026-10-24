---
title: "Installation package contents"
description: "Look up the installers and tools in the Privilege Secure download, and which installer to use for each component."
sidebar_position: 20
---

# Installation package contents

The Netwrix Privilege Secure for Access Management (Privilege Secure) download is a zip file named `privilegesecure-accessmanagement-<version>.zip`. It contains the Setup Launcher, the main installer, and standalone installers for services and tools.

{/* TODO screenshot: contents of the downloaded zip file */}

{/* TODO verify: the full file list of the 26.07.3 zip. The tables below come from the 26.03 documentation and the installer source, and the zip listing wasn't checked against them. */}

## Main files

| File | Description |
|---|---|
| `NPS_Setup.exe` | Opens the Netwrix Setup Launcher. The launcher checks prerequisites, installs PostgreSQL, and installs or upgrades the application. See [Install the application server](/docs/privilegesecure/26.07/install/install-application-server.md). |
| `Pre-Reqs` folder | Contains the installer for .NET Framework 4.7.2. |
| `Extras` folder | Contains the standalone installers in the next table. |

The Setup Launcher looks for `NPS.exe` and `NetwrixPostgreSQL16.exe` in the `Extras` folder first, and then in its own folder.

:::warning
The Setup Launcher doesn't install or check PowerShell 7.6 or later. Install it before you run `NPS.exe`. See [Application server requirements](/docs/privilegesecure/26.07/requirements/application-server.md).
:::

## Extras folder

| File | Description |
|---|---|
| `NPS.exe` | Installs the Privilege Secure application. The Setup Launcher runs it by default. |
| `NetwrixPostgreSQL16.exe` | Installs the bundled PostgreSQL 16 database. The Setup Launcher runs it by default. It installs the PostgreSQL 16 service, directory, and database. |
| `NPS.DbCfg.msi` | Installs the Netwrix Privilege Secure Database Configuration Tool, which points Privilege Secure at a local or remote PostgreSQL or SQL Server database. |
| `NPS.ActionService.exe` | Installs an Action service on another server. |
| `NPS.HostScanService.exe` | Installs a Host Scan service on another server. |
| `NPS.SchedulerService.exe` | Installs a Scheduler service on another server. |
| `NPS.EmailService.exe` | Installs an Email service on another server. |
| `NPS.SiemService.exe` | Installs a SIEM service on another server. |
| `NPS.ProxyService` | Installs a Proxy service on another server. It is available as an `.exe` and an `.msi` file. Use the `.msi` file with a software deployment tool. |
| `NPS.TSMon.exe` | Installs the Remote Desktop Monitor on target Windows hosts. |
| `NPS.HaMgr.exe` | The high availability manager tool. Copy it to the server and run it. See [High availability](/docs/privilegesecure/26.07/install/high-availability.md). |
| `SbPAMPowershellModules.msi` | Installs the Privilege Secure PowerShell modules, which run custom PowerShell scripts against the application API. |
| `sbpam-url.exe` | Installs the `sbpam-url` URL handler, which starts SSH sessions from the browser in your preferred SSH client. |
| Enablement Toolkit | Installs a graphical utility for common troubleshooting tests. |

{/* TODO verify: the file name and type of the Host Scan installer. The 26.03 list shows `NPS.HostScanService.msi`, but the installer source builds Host Scan as a bundle. */}

{/* TODO verify: the Email service installer file name, which the 26.03 list omitted. The installer source has a separate Email service bundle. */}

{/* TODO verify: the Enablement Toolkit installer file name and whether it is still in the Extras folder. The 26.03 page lists "Enablement Toolkit.exe". */}

{/* TODO verify: whether PowerShell 7.6 or later is required to install the PowerShell modules. The 26.03 page says PowerShell 7.1. */}

## What NPS.exe installs

`NPS.exe` installs the following components on the application server:

- Web service, which hosts the console and the API in Microsoft Internet Information Services (IIS)
- License service
- Action service
- Host Scan service
- Scheduler service
- Email service
- SIEM service
- Proxy service

It also installs the .NET 10 Hosting Bundle, the Microsoft Visual C++ runtime, and the IIS features that it needs, if the server doesn't already have them.

You can install the Action, Host Scan, Scheduler, Email, SIEM, and Proxy services on other servers with the standalone installers. See [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md).

## Installer options

The installers that run from the command line accept the Windows installer bootstrapper switches, such as `/quiet` and `/log`. See [Install silently](/docs/privilegesecure/26.07/install/silent-install.md).

:::note
Disable antivirus software on the server during installation, as the Setup Launcher recommends.
:::

## Related packages

- The Remote Access Gateway has its own package. See the [Remote Access Gateway overview](/docs/privilegesecure/26.07/remote-access-gateway/overview.md).
- The browser extension installs from the browser store. See [Browser extension](/docs/privilegesecure/26.07/user-guide/browser-extension/browser-extension.md).
