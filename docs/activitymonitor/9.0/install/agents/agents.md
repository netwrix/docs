---
title: "Agent Information"
description: "Agent Information"
sidebar_position: 20
---

# Agent Information

Activity Monitor agents perform real-time monitoring of events occurring across supported systems and applications.  

A typical deployment consists of multiple agents, each monitoring either the system where it is installed or remote systems, 
including in scale-out and fault-tolerant configurations.  

There are two deployment modes:

1. **The agent monitors the server it is installed on**

The agent must be deployed on the target system for the following event sources:

|Event source|Additional requirements|
|------------|-----------------------|
|Windows File Server| |
|Linux File Server| |
|Active Directory domain controllers| The agent must be installed on all domain controllers of the monitored domain.|
|SharePoint On-Premise|The agent must be deployed to the server that hosts the _Central Administration_ component of the SharePoint farm.|


2. **The agent monitors remote hosts or services**

In this mode, the agent is installed on a Windows Server and configured to monitor the following event sources:

|Event source|Additional requirements|
|------------|-----------------------|
|**File Systems**||
|Azure Files||
|CTERA||
|Dell VNX/Celerra|Dell Common Event Enabler|
|Dell Isilon/PowerScale|Dell Common Event Enabler|
|Dell Unity|Dell Common Event Enabler|
|Dell PowerStore|Dell Common Event Enabler|
|Hitachi NAS||
|Nasuni||
|NetApp||
|NetApp 7-mode||
|Nutanix Files||
|Panzura||
|Qumulo||
|**Identity & Access Management**||
|Microsoft Entra ID||
|**Communication & Messaging**||
|Exchange Online||
|SharePoint Online||
|**Database Operations**||
|Microsoft SQL Server||


:::info
For file storage, the agent's server should be located close to the monitored NAS device on the network to reduce latency.
:::

:::info
For Dell devices, the **Dell Common Event Enabler (CEE)** must be installed on the same server as the agent (recommended) or  
on another Windows or Linux server. If installed remotely, the CEE must be configured manually to forward activity to the agent.  
:::

To perform centralized agent maintenance from the application console server, WMI must be enabled on the Windows server where the agent is installed.

You will need the following information to deploy agents from the Console:

- Server name – Name or an IP Address of the server
- Credentials
   - Windows: Account must be a member of the BUILTIN\Administrators group on the target server
   - Linux: Account must have permissions to deploy the agent over SSH on the target server

See the [Agents Tab](/docs/activitymonitor/9.0/admin/agents/overview.md) topic for additional information on how to deploy agents using the Console.

The Activity Monitor Agent may also be deployed manually. Use one of the following to manually install an agent:

- [Manually Install the Windows Agent](/docs/activitymonitor/9.0/install/agents/manual.md)
- [Manually Install the Linux Agent](/docs/activitymonitor/9.0/install/agents/manuallinux.md)
- [Manually Install the Agent for Active Directory](/docs/activitymonitor/9.0/install/agents/manualad.md)
