---
title: "Agent Information"
description: "Agent Information"
sidebar_position: 20
---

# Agent Information

The Activity Monitor agents perform real-time monitoring of the events occurring across supported
systems and applications. There are three types of agents:

- Activity Agent – Deploy this agent to monitor:

    - Exchange Online – Activity Agent must be deployed to a Windows server that acts as a proxy for
      monitoring the target environment
    - Microsoft Entra ID – Activity Agent must be deployed to a Windows server that acts as a proxy
      for monitoring the target environment
    - Network Attached Storage Devices – Activity Agent must be deployed to a Windows server that
      acts as a proxy for monitoring the target environment

        :::info
        The proxy Windows server should be close to the NAS device in the network
        to decrease latency
        :::


        - For Dell devices – The agent server must have CEE installed

    - SharePoint – Activity Agent must be deployed to the SharePoint Application server that hosts
      the “Central Administration” component of the SharePoint farm
    - SharePoint Online – Activity Agent must be deployed to a Windows server that acts as a proxy
      for monitoring the target environment
    - SQL Server – Activity Agent must be deployed to a Windows server that acts as a proxy for
      monitoring the target environment
    - Windows File Server – Activity Agent must be deployed to the server. It cannot be deployed to
      a proxy server.

        - Credentials used for deployments must also be provisioned for monitoring

- AD Agent – Deploy this agent to monitor Active Directory. The AD Agent is deployed to every domain
  controllers to monitor Active Directory domains.
- Linux Agent – Deploy this agent to monitor Linux File Servers. The Linux Agent is deployed to
  Linux servers to be monitored.

    - Credentials used for deployments must also be provisioned for monitoring

In order to perform centralized agent maintenance from the application console server, WMI must be
enabled on the machine where the agent is installed.

You will need the following information to deploy agents from the console:

- Server name – Name or an IP Address of the server
- Credentials – Account used to deploy must be a member of the BUILTIN\Administrators group on the
  target server

See the [Agents Tab](/docs/activitymonitor/8.0/admin/agents/overview.md) topic for additional information on how to deploy
agents using console.

The Activity Monitor Agent may also be deployed manually. Use one of the following to manually
install an agent:

- [Manually Install the Activity Agent](/docs/activitymonitor/8.0/install/agents/manual.md)
- [ Manually Install the Linux Agent](/docs/activitymonitor/8.0/install/agents/manuallinux.md)
- [Manually Install the AD Module](/docs/activitymonitor/8.0/install/agents/manualad.md)
