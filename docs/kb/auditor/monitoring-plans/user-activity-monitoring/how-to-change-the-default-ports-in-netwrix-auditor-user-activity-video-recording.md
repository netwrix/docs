---
description: >-
  Shows how to change the default ports (9003 and 9004) used by Netwrix Auditor
  User Activity Video Recording by editing registry settings on the host and
  target machines and restarting the UAVR service.
keywords:
  - netwrix
  - user activity
  - video recording
  - ports
  - registry
  - UAVR
  - ServerPort
  - CallbackPort
products:
  - auditor
sidebar_label: How to Change the Default Ports in Netwrix Auditor
tags: []
title: "How to Change the Default Ports in Netwrix Auditor User Activity Video Recording"
knowledge_article_id: kA00g000000H9VcCAK
---

# How to Change the Default Ports in Netwrix Auditor User Activity Video Recording

## Related Query

- "Is there a way to configure the agent to use different ports instead of 9003 and 9004 for User Activity Video Recording?"

## Question

How can you change the default ports in Netwrix Auditor User Activity Video Recording?

## Answer

Yes, you can configure the agent to use different ports by modifying the registry settings on both the Netwrix Auditor host server and the target servers. Follow these steps:

### On the Netwrix Auditor Host Server

1. Open **Registry Editor** and navigate to:
   `HKEY_LOCAL_MACHINE\SOFTWARE\(Wow6432Node)\NetWrix Auditor\User Activity Video Reporter`
2. Create a new **DWORD (32-bit)** value named **ServerPort** (default: `9004`).

### On Each Target Machine

1. Open **Registry Editor** and navigate to:
   `HKEY_LOCAL_MACHINE\SOFTWARE\(Wow6432Node)\NetWrix\User Activity Video Reporter Agent`
2. Create a new **String** value named **ServerPort** (this should match the value specified on the Netwrix host).
3. Create another **String** value named **CallbackPort** (default: `9003`).
4. Specify the desired ports in both values.
5. Restart the **UAVR Service** on each target machine to apply the changes.
