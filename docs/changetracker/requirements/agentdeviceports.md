---
title: "Agent and Device Ports"
description: "Agent and Device Ports"
sidebar_position: 20
---

# Agent and Device Ports

Although you can set custom ports in the agent's configuration files, the following are the default
and recommended ports:

## Change Tracker Console

- Port: 443 OR Custom
- By default, the Change Tracker Console uses HTTPS on port 443. You can adjust this port within
  IIS if another port suits your environment better.

## Change Tracker Agents – Windows & Linux

- Port: 443 OR Custom
- The agent's HUBURL, defined during installation, controls HTTPS communication between Change
  Tracker and the agent. The HUBURL resembles https://MY_CT_SERVER/api/. The agent always initiates
  this one-way communication.

## Change Tracker - Agentless Linux

- Port: 22
- The Change Tracker Proxy Agent initiates one-way TCP/SSH communication (the proxy agent is
  collocated with Change Tracker, but you can install it on a separate system).

## Change Tracker - Agentless Windows

- Port: 445
- The Change Tracker Proxy Agent initiates one-way communication (the proxy agent is collocated
  with Change Tracker, but you can install it on a separate system) to the Remote Registry Service
  on the Windows devices.

## Network Devices

- Eg: Routers, switches, or firewalls

    - Port: 22

- The Change Tracker Proxy Agent initiates one-way TCP/SSH communication (the proxy agent is
  collocated with Change Tracker, but you can install it on a separate system).

    - Port: 23

- The Change Tracker Proxy Agent initiates one-way TCP/Telnet communication (the proxy agent is
  collocated with Change Tracker, but you can install it on a separate system).
