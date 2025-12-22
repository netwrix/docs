---
title: "Hub Installation for Windows"
description: "Hub Installation for Windows"
sidebar_position: 30
---

# Hub Installation for Windows

This topic lists the hardware requirements and software requirements for Netwrix Change Tracker.

## Hardware Requirements

|      | Standard Install ( 100 devices) | Large Install (~ 1k devices) |
| ---- | -------------------------------- | ---------------------------- |
| CPU  | 4 cores                          | 16 cores                     |
| RAM  | 8 GB                             | 32 GB                        |
| Disk | 500GB                            | 5TB                          |

## Software Requirements

- Operating System – Windows Server 2022
- MongoDB – v8.0
- IIS – v10.0

    - Server roles:

![Software Requirements](/images/changetracker/8.0/requirements/performancecheckbox.webp)

- .NET Hosting Bundle – v8.0
- Redis

    - If a single instance of Change Tracker is installed and the organizations licensed for more
      than 1500 devices, Redis should be deployed and configured as part of the applications
      architecture.
    - If a clustered installation of Change Tracker is planned, i.e. more than one instance of
      Change Tracker is installed, Redis should be deployed and configured as part of the
      applications architecture.
    - Redis should be deployed onto a dedicated system running on Linux (CentOS/RHEL for example).
      Please contact support for further information on required system specification and network
      traffic requirements.

- On older versions of Windows, for example Windows Server 2012 R2, install the Visual Studio C++
  2015, 2017, 2019 Redistributable.

    - Otherwise, a confusing error message in the Windows Event Log reports that The data is the
      error.

Disk space based on limited trial implementations only. For production, we size based on an average
of 4GB per device, per annum, based on typical change event and report volumes (4 Compliance Reports
per month, 200 change events per month)

- See the [Installation](/docs/changetracker/8.0/install/overview.md) topic
  for additional information on the installation process.

Please run a Windows Update to ensure all above components are fully up to date.
