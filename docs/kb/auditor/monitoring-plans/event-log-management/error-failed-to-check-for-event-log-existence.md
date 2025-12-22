---
description: >-
  Describes the "Failed to check for event log existence" error, how to test for
  loopback-related connectivity issues, and how to resolve the problem by
  disabling Network Traffic Compression or applying Microsoft KB 926642.
keywords:
  - event log
  - loopback
  - Event Log Manager
  - Network Traffic Compression
  - Failed to check for event log existence
  - Netwrix
  - scheduled task
  - data processing account
  - Event Viewer
  - KB926642
products:
  - auditor
sidebar_label: 'Error: Failed to check for event log existence'
tags: []
title: 'Error: Failed to check for event log existence'
knowledge_article_id: kA00g000000H9c6CAC
---

# Error: Failed to check for event log existence

## Symptom
You see the following error in the session results or daily change summary email:

"Failed to check for event log existence".

## Cause
This problem occurs because the loopback check functionality is active on the problematic server.

## Test
To diagnose the issue, perform the following test:

1. Launch **Event Viewer** on the machine where the Netwrix product is installed.
2. From the **Action** menu, select **Connect to another computer** and specify the name of the problematic computer.
3. Select the **Connect as another user** option, click the **Set user** button and specify the account that is used to run the Event Log Manager scheduled task (the default data processing account).

## Resolution
- If you can connect successfully, resolve the issue by turning off the **Network Traffic Compression** option in the **Event Log Manager** settings.
- Alternatively, perform the procedure described in the Microsoft Knowledge Base article: http://support.microsoft.com/kb/926642.
