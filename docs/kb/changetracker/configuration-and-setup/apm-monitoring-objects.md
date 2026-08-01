---
description: >-
  Recommended services, processes, paths, and log locations to monitor with
  application performance monitoring (APM) tools for Netwrix Change Tracker's
  Gen7 Hub server and agents.
keywords:
  - change tracker
  - Gen7
  - monitoring
  - APM
  - agents
  - hub
  - MongoDB
  - logs
  - NetCore
products:
  - changetracker
knowledge_article_id: ka04u000000Hd9DAAS
sidebar_label: APM Monitoring Objects
tags: [kb, configuration-and-setup]
title: What Change Tracker Gen7 Objects to Monitor Using Application Performance Monitoring (APM) Tools
---

# What Change Tracker Gen7 Objects to Monitor Using Application Performance Monitoring (APM) Tools

## Overview

This article lists the services, processes, paths, and log files to monitor with application performance monitoring (APM) tools to track the health of your Netwrix Change Tracker Hub server and agents.

## Services

| Service | Monitor On | Purpose |
|---|---|---|
| `WAS` / `W3SVC` | Hub server | IIS service |
| `MongoDB` | Hub server | Confirms the MongoDB database is running |
| `Gen7AgentCore` | Windows NetCore agents and Hub server | Confirms the Change Tracker agent service is running |
| `nntgen7agentcore` | Linux and Red Hat/Debian-based NetCore agents | Confirms the Change Tracker agent service is running |

## Processes

| Process | Monitor On | Purpose |
|---|---|---|
| `Gen7Agent.App.NetCore.exe` | Windows NetCore agents and Hub server | Confirms the agent process is running |
| `w3wp.exe` | Hub server | Confirms the IIS worker process is running |
| `mongod.exe` | Hub server | Confirms the MongoDB database process is running |

## Default Software Paths

- `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub`
- `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) WebUI`
- `C:\Program Files\NNT Change Tracker Suite\Gen7Agent (NetCore)`
- `C:\ProgramData\NNT\gen7agent.app.netcore`
- `C:\ProgramData\Change Tracker Generation 7 (NetCore)`

## Drivers and Dependencies

- Netwrix "who made the change" driver: `C:\Windows\System32\drivers\NNTInfo.sys` — confirms the kernel mini-filter driver that captures "who made the change" attribution for Windows file integrity monitoring (FIM) with live tracking is loaded. If the driver stops running, this attribution data may be lost or intermittently missing on affected Windows FIM trackers; other tracker types and Linux devices are unaffected.

## Potential Syslog Thresholds and Messages

Build a threshold mechanism that alerts the appropriate response team when the Change Tracker server generates any of the following message types:

- **Agent Error** — Errors reported by Change Tracker agents.
- **Audit (Device Admin)** — Changes to device configurations.
- **Audit (System Config Change)** — Changes to Change Tracker server settings.
- **Audit (User Administration)** — Changes to Change Tracker console user settings.
- **Audit (Device Details Change)** — Changes to the details of an agent device.
- **Device Offline** / **Device Online** — An agent goes offline or comes back online.
- **New Device Registered** — A new agent registers to the Hub server.
- **System Error** — The Change Tracker server experiences an error.
- **Planned and Unplanned Changes** — The Change Tracker server receives a planned or unplanned change.
- **Event Type: Communications** — Communication between an agent and the Hub server.
- **Event Type: Audit** — Audit information, such as user account management or configuration changes.

## Log Files

### Change Tracker NetCore Agent

**On Windows**

- `C:\ProgramData\NNT\gen7agent.app.netcore\rolling-log.txt`
- `C:\ProgramData\NNT\gen7agent.app.netcore\HubDetails.xml`

**On Linux**

- `/var/nnt/gen7agent.app.netcore/rolling-log.txt`
- `/var/nnt/gen7agent.app.netcore/HubDetails.xml`

### Change Tracker Hub and Database

- Hub service log (Windows): `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\log\hubservice-log.txt`
- MongoDB log (Windows): `C:\ProgramData\Change Tracker Generation 7 (NetCore)\MongoDB\log\mongod.log`

## Things to Keep in Mind

### Netwrix Change Tracker Hub Server

The percentage of memory in use on a server should not be monitored, because MongoDB reserves as much memory as possible. This reserved memory is the "Commit Size." The memory actually in use is the "Working Set" — monitor this value instead.

### Netwrix Change Tracker Agents

Memory usage for the Change Tracker agent is a difficult metric to gauge. The agent's garbage collection process determines when to release memory banks it no longer needs, so the agent rarely uses all the memory assigned to it at any given time.

Contact Netwrix Support for the latest agent performance metrics and footprint guide.
