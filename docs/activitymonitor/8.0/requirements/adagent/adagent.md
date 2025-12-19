---
title: "AD Agent Server Requirements"
description: "AD Agent Server Requirements"
sidebar_position: 20
---

# AD Agent Server Requirements

Active Directory (AD) monitoring can be accomplished through two primary methods:

- Activity Monitor Agents with the AD Module
- Retrieving activity data from Netwrix Threat Prevention

Both approaches require the installation of agents on each domain controller within the monitored
domain and are compatible with Netwrix Access Analyzer (formerly Enterprise Auditor) and Netwrix
Threat Manager, feeding them AD activity data.

Activity Monitor Agents: This option focuses solely on monitoring AD activity, providing basic
visibility into AD events without additional features.

![nam_admodule](/images/activitymonitor/8.0/requirements/nam_admodule.webp)

Netwrix Threat Prevention: Offers a more comprehensive and flexible monitoring experience, including
advanced features like operation blocking and enhanced monitoring capabilities.

![ntp](/images/activitymonitor/8.0/requirements/ntp.webp)

These methods provide organizations with a choice between basic AD activity monitoring and a more
versatile, security-enhanced option.

**Activity Monitor and Threat Prevention Compatibility Matrix**

| Activity Monitor Version | Threat Prevention (formerly Stealth Intercept) Version | Threat Prevention Version |
| ------------------------ | ------------------------------------------------------ | ------------------------- |
| 7.1                      | 7.3                                                    | 7.4                       |
| 7.0                      | 7.3                                                    |                           |

## Requirements

The AD Agent is deployed to every domain controllers to monitor Active Directory domains. The server
can be physical or virtual. The supported operating systems are:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

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

Old files are zipped, typical compression ratio is 20. Optionally, old files are moved from the
server to a network share. See the [Archiving Tab](/docs/activitymonitor/8.0/admin/agents/properties/archiving.md) topic
for additional information.

**Additional Server Requirements**

The following are additional requirements for the agent server:

- .NET Framework 4.7.2 installed, which can be downloaded from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article
- WMI enabled on the machine, which is optional but required for centralized Agent maintenance

**Permissions for Installation**

The following permission is required to install and manage the agent:

- Membership in the Domain Administrators group
- READ and WRITE access to the archive location for Archiving feature only

## Supported Active Directory Platforms

The Activity Monitor provides the ability to monitor Active Directory:

:::note
For monitoring an Active Directory domain, the AD Agent must be installed on all domain
controllers within the domain to be monitored.
:::


- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

See the [Active Directory Activity Auditing Configuration](/docs/activitymonitor/8.0/requirements/adagent/activity/activity.md)
topic for target environment requirements.

## AD Agent Compatibility with Non-Netwrix Security Products

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
