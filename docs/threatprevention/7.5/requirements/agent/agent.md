---
title: "Agent Server Requirements"
description: "Agent Server Requirements"
sidebar_position: 30
---

# Agent Server Requirements

The Agent server can be physical or virtual. The supported operating systems are:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

- Windows Server 2025

The supported Exchange Servers are:

- Exchange Server 2019
- Exchange Server 2016
- Exchange Server 2013
- Exchange Server 2010

**RAM, Cores, and Disk Space**

These depend on the amount of activity expected:

| Environment | Recommended | Minimum |
| ----------- | ----------- | ------- |
| RAM         | 8+ GB       | 4+ GB   |
| Cores       | 4+ CPU      | 2 CPU   |
| Disk Space  | 50 GB       | 50 GB   |

The disk space requirement covers the following:

- Agent Size – 150 MB
- Agent Queues – In the event of a network outage, the agent will cache up to 40 GB of event data
- Diagnostic Logging – 1 GB

**Additional Enterprise Password Enforcer Solution Requirements**

The Have I Been Pwnd (HIBP) database, which is an optional feature of the Enterprise Password
Enforcer solution, can be deployed on the server where the Agent resides to improve performance. It
requires:

- Additional 15 GB of disk space to deploy

You can also have the HIBP database deployed on some Agent servers, while other Agent servers work
with the copy installed on the Enterprise Manager server. See the
[EPE Settings Window](/docs/threatprevention/7.5/admin/configuration/epesettings.md) topic for additional information.

**Additional Server Requirements**

The following are additional requirements for the Agent server:

- .NET Framework 4.7.2 installed, which can be downloaded from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article
- WMI enabled on the machine, which is optional but required for centralized Agent maintenance

**Permissions for Installation**

The following permission is required to install the Agent:

- Membership in the local Administrators group

  :::note
  Membership in the Domain Administrators group for a domain controller.
  :::


## Agent Compatibility with Non-Netwrix Security Products

The following products conflict with the agent:

:::warning
Do not install these products on a server where an agent is deployed. Do NOT install an
agent on a server where these products are installed.
:::


- Quest Change Auditor (aka Dell ChangeAuditor)
- PowerBroker Auditor for Active Directory by BeyondTrust

The following products, which protect LSASS, may prevent the agent from injecting into LSASS, and
thereby prevent monitoring Active Directory events:

- Cisco AMP for Endpoints Connector
- Avast Business Antivirus

  - Specifically the “Avast self-defense module”

:::note
These products and other similar products can be configured via a whitelist to allow the
agent to operate.

:::
