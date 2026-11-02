---
title: "Action Service Requirements"
description: "Action Service Requirements"
sidebar_position: 40
---

# Action Service Requirements

The Action Service is an optional feature of the main installer. To install it on another server,
run `NetwrixThreatManager.exe` on that server and select **Remote Services Only**.

:::tip
On the Threat Manager server, select the Action Service feature during installation.
:::


The Windows server can be physical or virtual. Threat Manager supports the following Windows server operating systems:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

Additionally the server must meet these requirements:

- United States English language installation

**RAM, CPU, and Disk Space**

Minimum hardware requirements:

- 4 GB RAM
- 1 CPU Core
- 500 MB Total Disk Space

**Additional Server Requirements**

The following are additional requirements for the Action Service server:

- .NET Desktop Runtime 10.0.10 (x64)
- ASP.NET Core Runtime 10.0.10 (x64)
- Microsoft Visual C++ 2017-2026 x64 14.50 Redistributable

The **Install AD PowerShell Modules** and **Install Entra PowerShell Modules** options appear on the
firewall page only when you install the Action Service.
