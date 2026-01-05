---
description: >-
  This article explains the purpose of `core.*` files in Gen 7 Agent servers and whether they can be safely deleted to free up disk space.
keywords:
  - core files
  - Gen 7 Agent
  - disk space
sidebar_label: Disk Space and Core Files
tags:
  - database-and-diagnostics
title: "Disk Space Occupied by Core.* Files in Gen 7 Agent Servers"
knowledge_article_id: kA0Qk0000000NuHKAU
products:
  - change-tracker
---

# Disk Space Occupied by Core.* Files in Gen 7 Agent Servers

## Questions

The `/opt/nnt/gen7agentcore/bin/` directory (see [Linux Agent Installation](https://docs.netwrix.com/docs/changetracker/8_1/install/agent/linuxos)) in Gen 7 Agent servers (Linux) contains multiple `core.*` files.

1. What are these files?
2. Is it safe to delete these files?

## Answers

1. The `core.*` files located in the `/opt/nnt/gen7agentcore/bin/` directory are core dumps. These core dumps are generated upon a process crash or a fatal error—they contain a snapshot of the process memory at the time of the crash or error.
2. These core files can be safely deleted to free up disk space.
