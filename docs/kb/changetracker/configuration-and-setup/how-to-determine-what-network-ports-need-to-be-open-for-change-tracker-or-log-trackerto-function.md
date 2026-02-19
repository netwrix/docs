---
description: >-
  Describes which network ports to open to allow Netwrix Change Tracker agents
  and servers to communicate, including ports for agentless monitoring and
  network device configuration.
keywords:
  - Netwrix Change Tracker
  - network ports
  - firewall rules
  - HTTPS
  - agents
  - agentless
  - SSH
  - port 443
products:
  - change-tracker
sidebar_label: Network Ports for Change Tracker
tags: []
title: Determining which network ports should be open for Change Tracker to function
---

# Determining which network ports should be open for Change Tracker to function

## Overview

This article describes the network ports required for Netwrix Change Tracker to function properly. Use this information when configuring firewall rules for new deployments or troubleshooting connectivity issues.

> **Note:** For the most current port requirements and network architecture details, refer to the official documentation: [Change Tracker 8.0 - Agent and Device Ports](/docs/changetracker/8.0/requirements/agentdeviceports.html)

Although custom ports can be set in the agent's configuration files, the following are the default and recommended ports for Change Tracker.

![Change Tracker network ports diagram](https://nwxcorp--c.na147.content.force.com/sfc/dist/version/download/?oid=00D7000000091pB&ids=0684u00000LdKFX&d=%2Fa%2F4u000000Lzny%2FZeSqAiVi0zhk87SB7gy6ozAik49vfOFITCzm__LZ4Fk&asPdf=false)

## Instructions

### Change Tracker Console

- **Port:** 443 (HTTPS) or Custom
- **Direction:** Inbound to Change Tracker Hub server
- **Protocol:** HTTPS

HTTPS communication to the Change Tracker Console is by default on port 443. This can be adjusted within IIS if other ports are deemed more suitable for your environment.

### Change Tracker Agents (Windows & Linux)

- **Port:** 443 (HTTPS) or Custom
- **Direction:** Outbound from agent to Change Tracker Hub
- **Protocol:** HTTPS

HTTPS communication between Change Tracker and the agent is controlled by the agent's HUBURL, defined during installation. The HUBURL will resemble `https://MY_CT_SERVER/api/`.

**Important:** Communication is one-way and will always be initiated by the agent connecting to the Hub server.

### Agentless Monitoring - Linux Systems

- **Port:** 22 (SSH)
- **Direction:** Outbound from Change Tracker Proxy Agent to monitored Linux systems
- **Protocol:** TCP/SSH

One-way communication is initiated from the Change Tracker Proxy Agent to the monitored Linux systems. The proxy agent is typically collocated with Change Tracker but can be installed on a separate system if needed.

### Agentless Monitoring - Windows Systems

- **Port:** 445 (SMB)
- **Direction:** Outbound from Change Tracker Proxy Agent to monitored Windows systems
- **Protocol:** SMB

One-way communication is initiated from the Change Tracker Proxy Agent to the Remote Registry Service on the Windows devices being monitored.

### Network Devices (Routers, Switches, Firewalls)

#### SSH-Based Monitoring

- **Port:** 22
- **Direction:** Outbound from Change Tracker Proxy Agent to network devices
- **Protocol:** TCP/SSH

#### Telnet-Based Monitoring (Legacy)

- **Port:** 23
- **Direction:** Outbound from Change Tracker Proxy Agent to network devices
- **Protocol:** TCP/Telnet

> **Note:** SSH (port 22) is recommended over Telnet (port 23) for security reasons.

### Firewall Configuration Summary

For a typical Change Tracker deployment, ensure the following firewall rules are in place:

**Inbound to Change Tracker Hub:**
- Port 443 (HTTPS) - for console access and agent communication

**Outbound from Change Tracker Hub/Proxy Agent:**
- Port 22 (SSH) - for agentless Linux and network device monitoring
- Port 23 (Telnet) - for legacy network device monitoring (if required)
- Port 445 (SMB) - for agentless Windows monitoring

**Outbound from Agents:**
- Port 443 (HTTPS) - to communicate with Change Tracker Hub

## Related Links

- [Gen 7 Agent Deployment Options](/docs/changetracker/kb/gen-7-agent-deployment-options)
- [Agent and Device Ports](/docs/changetracker/8.0/requirements/agentdeviceports)
- [Gen 7 Agent Requirements - Windows](/docs/changetracker/8.0/requirements/gen7agentwindows)
- [Gen 7 Agent Requirements - Linux](/docs/changetracker/8.0/requirements/gen7agentlinux)
