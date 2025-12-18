---
description: >-
  Explains why the Active Directory Compression Service starts and stops every
  60 seconds and why Event ID 7036 entries appear; confirms this is expected
  Windows behavior that cannot be suppressed.
keywords:
  - Active Directory
  - Compression Service
  - Event ID 7036
  - Windows System
  - service start stop
  - event logs
  - expected behavior
products:
  - auditor
sidebar_label: 'Active Directory Compression Service Continuously '
tags: []
title: "Active Directory Compression Service Continuously Starting and Stopping"
knowledge_article_id: kA04u0000000HjzCAE
---

# Active Directory Compression Service Continuously Starting and Stopping

## Symptoms
You may see the following symptoms in your environment:

- The **Active Directory Compression Service** starts and stops every 60 seconds.
- There are many events with `Event ID 7036` stating that the **Active Directory Compression Service** entered the Started or Stopped state.

## Cause
Windows generates these events as they are hard coded into the Windows System.

## Resolution
This notification is expected behavior. If you see these information messages, it means that the Active Directory collection works correctly. Unfortunately, these notifications cannot be stopped as they are hard coded into the Windows System, and it is Windows that generates these events.
