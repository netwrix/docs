---
description: >-
  This article explains the purpose of `core.*` files in Gen 7 Agent servers and whether they can be safely deleted to free up disk space.
keywords:
  - core files
  - Gen 7 Agent
  - Netwrix Change Tracker
  - disk space
  - core dump
  - process crash
  - Linux
  - gen7agentcore
  - fatal error
  - memory snapshot
  - file cleanup
sidebar_label: Disk Space and Core Files
tags:
  - kb
  - database-and-diagnostics
title: "Disk Space Occupied by Core.* Files in Gen 7 Agent Servers"
knowledge_article_id: kA0Qk0000000NuHKAU
products:
  - change-tracker
---

# Disk Space Occupied by Core.* Files in Gen 7 Agent Servers

## Question

The `/opt/nnt/gen7agentcore/bin/` directory (see [Linux Agent Installation](/docs/changetracker/8_1/install/agent/linuxos)) in Gen 7 Agent servers (Linux) contains multiple `core.*` files.

1. What are these files?
2. Is it safe to delete these files?

## Answer

1. The `core.*` files located in the `/opt/nnt/gen7agentcore/bin/` directory are core dumps. A process crash or fatal error generates these core dumps — they contain a snapshot of the process memory at the time of the crash or error.
2. These core files can be safely deleted to free up disk space.
