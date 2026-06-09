---
title: "Antivirus Exclusions"
description: "Antivirus Exclusions"
sidebar_position: 30
---

# Antivirus Exclusions

Windows activity monitoring and performance of the Activity Agent may be negatively affected by
antivirus protections. Add the following components to antivirus exclusions in order to avoid
potential performance degradation.

## Directories

The following directories can be added to antivirus exclusions:

- `<INSTALL_DIR>` — Agent installation directory. Default path is
  `%ProgramFiles%\Netwrix\Activity Monitor\Agent`. The agent stores binaries and install files in
  this location.
- `<DATA_DIR>` — Agent configuration directory. Default path is
  `%ProgramData%\Netwrix\Activity Monitor\Agent`. The agent stores configuration, and debug log
  files in this location.
- `<DATA_DIR>\ActivityLogs` — Default location for collected activity files. If files are stored in
  a separate location, specify the user-designated directory instead of the default location.
- `<DATA_DIR>\Data` — Various temporary data files, which may be actively updated.

## Binary Files

The following binary files can be added to antivirus exclusions:

- Common Exclusions

    - `<INSTALL_DIR>\net472\FSACLoggingSvc.exe` — Logging service. Forwards events to files, syslog, AMQP.
    - `<INSTALL_DIR>\ConfigurationAgent.Grpc.Host.exe` — Netwrix Activity Monitor Agent service


- Active Directory Monitoring

    - `<INSTALL_DIR>\MonitorService.exe` — Active Directory monitoring service
    - `%ProgramFiles%\Netwrix\Netwrix Threat Prevention\SIWindowsAgent.exe` — Active Directory Module
      service.

- Dell Celerra/VNX, Isilon/PowerScale, PowerStore, and Unity Monitoring

    - `<INSTALL_DIR>\net472\CelerraServerSvc.exe` — Dell Monitoring service

- Hitachi Monitoring

    - `<INSTALL_DIR>\net472\HitachiService.exe` — Hitachi HNAS monitoring service

- Microsoft Entra ID, SharePoint Online, and Exchange Online Monitoring

    - `<INSTALL_DIR>\MonitorService.exe` — Microsoft Entra ID monitoring service

- NetApp Monitoring

    - `<INSTALL_DIR>\net472\FPolicyServerSvc.exe` — NetApp Monitoring service

- Nasuni, Panzura, Nutanix Files, Qumulo, CTERA, Cohesity SmartFiles Monitoring

    - `<INSTALL_DIR>\MonitorService.exe` — NAS monitoring service

- SharePoint Monitoring

    - `<INSTALL_DIR>\net472\MonitorService.exe` — SharePoint 2016, 2019, Subscription monitoring service
    - `<INSTALL_DIR>\net40\MonitorService.exe` — SharePoint 2013 monitoring service

- SQL Server Monitoring

    - `<INSTALL_DIR>\net472\MonitorService.exe` — SQL Server monitoring service

- Windows Monitoring

    - `%SystemRoot%\System32\drivers\SBTFSF.sys` — The File System filter driver
    - `%ProgramFiles%\Stealthbits\StealthAUDIT\FSAC\SBTService.exe` — Windows File System monitoring service.
