---
description: >-
  Antivirus and endpoint detection and response (EDR) exclusions required for
  Netwrix Change Tracker agents and Hub to avoid performance degradation.
keywords:
  - antivirus exclusions
  - EDR exclusions
  - agents
  - Hub
  - MongoDB
  - performance
  - Gen7AgentCore
  - nntgen7agentcore
  - w3wp.exe
  - mongod.exe
  - AV exclusions
  - endpoint protection
products:
  - change-tracker
sidebar_label: Antivirus Exclusions
tags:
  - kb
  - configuration-and-setup
title: Antivirus Exclusions for Netwrix Change Tracker
knowledge_article_id: ""
---

# Antivirus Exclusions for Netwrix Change Tracker

## Overview

Antivirus (AV) and endpoint detection and response (EDR) solutions may negatively affect Netwrix Change Tracker performance. Add the following exclusions to avoid potential performance degradation.

## Instructions

### Exclusions for Netwrix Change Tracker Agents

| Name/Platform | Service | Process | Folder |
|---|---|---|---|
| Windows NetCore Agent | `Gen7AgentCore` | `Gen7Agent.App.NetCore.exe` | - `C:\ProgramData\NNT\gen7agent.app.netcore`<br />- `C:\Program Files\NNT Change Tracker Suite\Gen7Agent (NetCore)` |
| Linux NetCore Agent | `nntgen7agentcore` | `/opt/nnt/gen7agentcore/bin/Gen7Agent.App.NetCore` | - `/var/nnt/gen7agent.app.netcore/`<br />- `/opt/nnt/gen7agentcore/` |
| Linux Express Agent | `nntexpressagent` | `/opt/nnt/expressagent/expressAgent` | - `/var/nnt/expressagent/`<br />- `/opt/nnt/expressagent/` |

### Exclusions for Netwrix Change Tracker Hub

| Service | Process | Folder |
|---|---|---|
| - `MongoDB`<br />- `W3SVC (Windows IIS Service)` | - `mongod.exe` (MongoDB Database Service)<br />- `w3wp.exe` (IIS Worker Process) | - `C:\Program Files\NNT Change Tracker Suite\Gen7\`<br />- `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub`<br />- `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) WebUI`<br />- `C:\ProgramData\Change Tracker Generation 7 (NetCore)\MongoDB\`<br />- `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\` |
