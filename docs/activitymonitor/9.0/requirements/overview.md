---
title: "Requirements"
description: "Requirements"
sidebar_position: 20
---

# Requirements

This topic describes the recommended configuration of the servers needed to install the application
in a production environment. Depending on the size of the organization, it is recommended to review
your environment and requirements with a Netwrix engineer prior to deployment to ensure all
exceptions are covered.

## Architecture Overview

The following servers are required for installation of the application:

**Core Components**

- **Activity Monitor Console** Machine – This is where the management console is installed.
  The Console can be installed on several machines to manage the same set of agents. 

    :::note
    The Activity Monitor Console can be hosted on the same machine as other Netwrix
    products. 
    :::


- **Agents** – There are three deployment scenarios that that differ in their requirements:

    - Activity monitoring of Windows file servers, Network Attached Storage (NAS) devices, Azure Files, Microsoft Entra ID, SharePoint On-premise, 
      SharePoint Online, Exchange Online, and SQL Server. The agent is deployed on a Windows Server. 
      See the [Activity Agent Server Requirements](/docs/activitymonitor/9.0/requirements/activityagent/activityagent.md) topic
      for additional information.
    - Active Directory monitoring – the agent is deployed to every domain controllers to monitor Active Directory
      domains. See the [AD Agent Server Requirements](/docs/activitymonitor/9.0/requirements/adagent/adagent.md) topic for additional information.
    - Linux monitoring – the agent is deployed to Linux servers to be monitored. See the
      [Linux Agent Server Requirements](/docs/activitymonitor/9.0/requirements/linuxagent.md) topic for additional information.

**Target Environment Considerations**

The target environment encompasses all servers, devices, or infrastructure to be monitored by
Activity Monitor. Most solutions have additional target requirements.

## Activity Monitor Console Machine Requirements

The machine can be a Windows Server or desktop, as well as physical or virtual. The Console can be installed on serveral machines to manage the same agents.
The following Windows Server operating systems are supported:

- Windows Server 2025
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

The following Windows desktop operating systems are supported:

- Windows 11
- Windows 10

**RAM, Processor, and Disk Space**

- RAM – 4 GB minimum
- Processor – x64
- Disk Space – 1 GB minimum

**Additional Machine Requirements**

The following are additional requirements for the Console machine:

- .NET Framework 4.7.2 installed, which can be downloaded from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article

**Permissions for Installation**

The following permission is required to install and use the application:

- Membership in the local Administrators group for the Activity Monitor Console machine
