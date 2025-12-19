---
description: >-
  Shows how to remove Netwrix Threat Prevention (NTP) management from Netwrix
  Activity Monitor (NAM) agents by updating the agent configuration to use a
  local SAMConfig.xml and restarting the agent service.
keywords:
  - NTP
  - NAM
  - SIWindowsAgent.exe.Config
  - managerAddress
  - SAMConfig.xml
  - agent management
  - restart service
  - Netwrix Threat Prevention
  - Netwrix Activity Monitor
  - remove management
products:
  - activitymonitor
  - threat-prevention
sidebar_label: How To Remove NTP Management of NAM Agents
tags: []
title: "How To Remove NTP Management of NAM Agents"
knowledge_article_id: kA0Qk0000001quDKAQ
---

# How To Remove NTP Management of NAM Agents

## Question

How can you remove the Netwrix Threat Prevention (NTP) management of Netwrix Activity Monitor (NAM) agents?

## Answer

To adjust the management of the NAM agents, follow the steps below:

1. Edit the `SIWindowsAgent.exe.Config` file in the agent install directory with an Admin notepad.
2. Change the original `managerAddress` to:
```xml
<add key="managerAddress" value="file://.\SAMConfig.xml" />
```
3. Restart the agent service.
