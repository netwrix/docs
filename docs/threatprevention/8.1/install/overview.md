---
title: "Installation"
description: "Installation"
sidebar_position: 30
---

# Installation

Threat Prevention consists of several components that work together to monitor activity in
Active Directory, Exchange, and file systems.

- Threat Prevention Enterprise Manager
- Threat Prevention Windows console (Administration Console)
- Threat Prevention Agent deployed to Active Directory domain controllers, Exchange servers, and
  file servers
- Threat Prevention EPE Rest Site that third parties can use to integrate with the Enterprise
  Password Enforcer (EPE) solution
- Netwrix Threat Manager Reporting Module, which you install with a separate installation package

:::note
Threat Prevention supports the deployment of remote Administration Console, enabling you
to install additional consoles on standalone machines, like administrator or user workstations. In
this way, users can launch the Administration Console on their workstations, as an alternate to
using it on the Enterprise Manager server only.
:::


The Threat Prevention installation package installs the following components:

- Threat Prevention Prerequisites – .NET 4.7.2 or .NET 4.8.x installed. If the installer doesn't
  find it already installed, it will install .NET Framework 4.7.2.
- Enterprise Manager

  - Creates the NVMonitorConfig and NVMonitorData databases on the designated SQL Server
  - Installs the Threat Prevention Enterprise Manager service

- Administration Console – Installs the user application for administering the Threat Prevention
  application

See the following topics for additional information:

- [Application Server Install](/docs/threatprevention/8.1/install/application.md)
- [Administration Console Remote Install](/docs/threatprevention/8.1/install/adminconsole.md)
- [Agent Information](/docs/threatprevention/8.1/install/agent/overview.md)
- [EPE Rest Site Install](/docs/threatprevention/8.1/install/eperestsite.md)
- [Reporting Module Installation](/docs/threatprevention/8.1/install/reportingmodule/overview.md)

## Software Download

Current customers can log in to the Netwrix Customer Portal to download software binaries and
license keys for purchased products. See the
[Customer Portal Access](https://helpcenter.netwrix.com/bundle/NetwrixCustomerPortalAccess/page/Customer_Portal_Access.html)
topic for information on how to register for a Customer Portal account.

Threat Prevention can integrate with the Netwrix Activity Monitor for monitoring event data on NAS
Devices. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for information on this integration.

The following files are available for download:

- threatprevention-server-8.1.x.msi
- threatprevention-agent-8.1.x.exe
- threatmanager-reportonly-3.0.x.zip – Contains the Netwrix Threat Manager Reporting Module
  installer. See the [Reporting Module Installation](/docs/threatprevention/8.1/install/reportingmodule/overview.md) topic for
  additional information.

## Antivirus Software Considerations

Occasionally, an organization’s antivirus program may shut down the processes launched by Threat
Prevention. The following processes may be impacted.

**Threat Prevention Server**

Files located within the Threat Prevention installation directory:
`…\Netwrix\Netwrix Threat Prevention`

- SIWinConsole.exe
- SIEnterpriseManager.exe
- SI.ReportingServicesHost.exe
- SI.Services.Schedule.Host.exe
- SIWindowsAgent.exe

**Agent Server**

Files located within the Threat Prevention Agent installation directory:
`…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent`

- SIWindowsAgent.exe
- SIAgentUpdater.exe
- plsahlp.sys
- ActiveDirectoryMonitorLoader.dll
- SI.ActiveDirectoryMonitor.dll

The following file in the directory: `…\Netwrix\\Netwrix Threat Prevention\Group Policy`

- SIGPOAgent.exe

The following file in the directory: `…\Netwrix\StealthAudit\FSAC`

- SBTService.exe

**Client Machines**

If you are using Threat Prevention's Enterprise Password Enforcer (EPE) User Feedback module for
client machines, exclude the following file:

- SI_CredentailProvider.dll

If antivirus software blocks this file, the end user doesn't see the reasons for rejecting a
candidate password, but Threat Prevention still fully enforces all EPE rules.

**Domain Controllers**

- PPE.dll – If PPE.dll doesn't load, Threat Prevention doesn't enforce the password policy

### Netwrix Password Policy Enforcer (PPE)

If you are using Netwrix Password Policy Enforcer, the following processes may be impacted.

**Client Machines**

The following DLLs on the client machines (all computers, mostly end user desktops/laptops) don't
work if antivirus software blocks them:

- PPEClt.dll
- APRClt.dll

**Netwrix Password Reset Server**

If you are using Netwrix Password Reset, then ensure the antivirus program doesn't block the
following files on the Netwrix Password Reset server:

- apr.sdf
- aprlog.sdf

These files get updated frequently, so there may be some performance benefit, and they don't
contain any executable code.
