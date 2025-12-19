---
title: "Integration Device"
description: "Integration Device"
sidebar_position: 10
---

# Integration Device

This section identifies the requirements for the local device used for the installation: either the
integrator can log in onto the local network, or a station must be available.

## Hardware

No matter whether the machine is virtual or physical, running a Usercube server or agent requires at
least 8 GB of RAM, 20 GB of disk storage, and a dual-core CPU.

NETWRIX even recommends a 4-core CPU if SQL server is installed on this device.

## Operating System

Both server and agent must run on [Windows Server](https://www.microsoft.com/en-us/windows-server).

Supported versions are:

- Windows Server 2022
    - Full Server
    - Server Core
    - Nano Server
- Windows Server 2019
    - Full Server
    - Server Core
    - Nano Server
- Windows Server 2016
    - Full Server
    - Server Core
    - Nano Server

> **FAQ**:
> [What version of Windows server am I currently running?](https://docs.microsoft.com/en-us/windows/client-management/windows-version-search)

## Access

The device must have access to the Virtual Machines of Usercube's server, and to the database.

## Software

Microsoft Excel must be installed.

A web browser must be accessible to test the future installation. Usercube's UI supports all popular
browsers:

- Google Chrome (latest 2 versions);
- Mozilla Firefox (latest 2 versions);
- Apple Safari (latest 2 versions);
- Microsoft Edge Chromium.

## Administrator Account

A Windows local administrator account is required to install the server and agent on the target
Windows Server workstation.

## Additional Recommendations

A not-so-minimalist text editor such as [Notepad++](https://notepad-plus-plus.org/downloads/) can be
useful to comfortably edit
[network configuration files](/docs/identitymanager/6.1/integration-guide/network-configuration/index.md).

## What's Next?

Let's move on to the requirements for
[Usercube's database](/docs/identitymanager/6.1/installation-guide/requirements/database-requirements/index.md).
