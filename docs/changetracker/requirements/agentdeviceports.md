---
title: "Agent and Device Ports"
description: "Agent and Device Ports"
sidebar_position: 20
---

# Agent and Device Ports

Although custom ports can be set in the agent's configuration files, the following are the default
and recommended ports:

## Change Tracker Console

- Port: 443 OR Custom
- HTTPS Communication to the Change Tracker Console is by default HTTPS onport 443. This can be
  adjusted within IIS if other ports are deemed more suitable.

## Change Tracker Agents – Windows & Linux

- Port: 443 OR Custom
- HTTPS Communication between Change Tracker and the agent is controlled by the agent's HUBURL,
  defined during installation. The HUBURL will resemble https://MY_CT_SERVER/api/. The communication
  is one-way and will always be initiated by the agent.

## Change Tracker - Agentless Linux

- Port: 22
- TCP/SSH One-way communication is initiated from the Change Tracker Proxy Agent (The proxy agent is
  collocated with Change Tracker but can be installed on a separate system).

## Change Tracker - Agentless Windows

- Port: 445
- One-way communication is initiated from the Change Tracker Proxy Agent (The proxy agent is
  collocated with Change Tracker but can be installed on a separate system) to the Remote Registry
  Service on the Windows devices.

## Network Devices

- Eg: Routers, switches or firewalls

    - Port: 22

- TCP/SSH One-way communication is initiated from the Change Tracker Proxy Agent (The proxy agent is
  collocated with Change Tracker but can be installed on a separate system).

    - Port: 23

- TCP/Telnet One-way communication is initiated from the Change Tracker Proxy Agent (The proxy agent
  is collocated with Change Tracker but can be installed on a separate system).
