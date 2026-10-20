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

- Operating System – Windows Server 2019 - 2025
- MongoDB – v5.x - 8.x
- IIS – v10

    - Server roles:

![Software Requirements](/images/changetracker/requirements/performancecheckbox.webp)

- .NET Hosting Bundle – v8.0
- Redis

    - If you install a single instance of Change Tracker and your organization is licensed for more
      than 1,500 devices, deploy and configure Redis as part of the application architecture.
    - If you plan a clustered installation of Change Tracker, meaning you install more than one
      instance of Change Tracker, deploy and configure Redis as part of the application
      architecture.
    - Deploy Redis onto a dedicated system running on Linux (for example, CentOS/RHEL). Contact
      support for more information about the required system specifications and network traffic
      requirements.

- On older versions of Windows, for example, Windows Server 2012 R2, install the Visual Studio C++
  2015, 2017, 2019 Redistributable.

    - Otherwise, a confusing error message in the Windows Event Log reports that The data is the
      error.

These disk space figures come from limited trial implementations only. For production, Netwrix
estimates 4 GB per device per year, based on typical change event and report volumes (4 compliance
reports per month, 200 change events per month).

- See the [Installation](/docs/changetracker/install/overview.md) topic for additional information on the
  installation process.

Run Windows Update to ensure all components listed here are fully up to date.
