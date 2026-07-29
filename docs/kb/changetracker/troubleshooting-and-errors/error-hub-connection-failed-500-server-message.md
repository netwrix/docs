---
description: >-
  When an agent with the same name as an already registered agent attempts to
  connect to Netwrix Change Tracker, the hub can return a 500 error indicating
  the requested agent name is in use. This article explains how to resolve the
  error on Windows and RHEL/CentOS by restoring the correct agent ID and editing
  HubDetails.xml.
keywords:
  - change-tracker
  - gen7agent
  - agent.id
  - HubDetails.xml
  - rolling-log
  - 500 server message
  - agent id
  - Linux
  - Windows
products:
  - changetracker
knowledge_article_id: ka0Qk000000DSEbIAO
sidebar_label: 'Error: Hub Connection Failed (500 Server Message)'
tags: [kb, troubleshooting-and-errors]
title: 'Error: Hub Connection Failed (500 Server Message)'
---

# Error: Hub Connection Failed (500 Server Message)

## Symptom

When attempting to connect a device to Netwrix Change Tracker, the following error message may appear in the rolling log:

```text
2017-08-15 16:29:41,627 [10] INFO Message - Hub connection failed (500 Server message: Error, requested Agent name is in use by device with uniqueId: 123456a6-ffee-78a9-927e-34921d59ce64)
```

## Cause

This problem occurs when a device that has the same name as an already registered agent attempts to connect to **Netwrix Change Tracker**. When an agent connects, it receives an identifier called the `agent.id` file, which contains an alphanumeric ID for identification purposes. If two or more devices attempt to register with Change Tracker that share the same hostname but a different agent.id value, this scenario will occur.

> **IMPORTANT:** Use this method to resolve this problem only if the Agent you are trying to connect is the same device or a re-imaged variant of the older device. Contact [Netwrix Support](https://www.netwrix.com/support.html) before attempting this fix.

## Resolution

### For Windows-Based OS

Follow these steps:

1. Stop the **Netwrix ChangeTracker Gen7 Agent NetCore Service**.
2. Browse to the `C:\ProgramData\NNT\gen7agent.app.netcore` folder.
3. Open the `rolling-log.txt` file and search for an error that looks like the following example: `Hub connection failed (500 Error, requested Agent name is in use by device with uniqueId: 123456a6-ffee-78a9-927e-34921d59ce64)`.
4. If you can find the error message, the information you require is the `uniqueId: 123456a6-ffee-78a9-927e-34921d59ce64)` value.
5. Open the `agent.id` file stored in `C:\ProgramData\NNT\gen7agent.app.netcore` using Notepad. Erase the uniqueId currently in that file and paste in the uniqueId identified in the previous step (123456a6-ffee-78a9-927e-34921d59ce64). Ensure there are no spaces at the beginning or end of the text string.
6. Close and save the `agent.id` file.
7. Start the **Netwrix ChangeTracker Gen7 Agent NetCore Service**.

This should resolve the uniqueId conflict and the device should now be registered on Change Tracker successfully.

### For RHEL/CentOS Linux-Based OS

Follow these steps:

1. Stop the **Netwrix ChangeTracker Gen7 Agent NetCore Service**.
2. Browse to the `/var/nnt/gen7agent.app.netcore` folder.
3. Open the `rolling-log.txt` file and search for an error that looks like the following example: `Hub connection failed (500 Error, requested Agent name is in use by device with uniqueId: 123456a6-ffee-78a9-927e-34921d59ce64)`.
4. If you can find the error message, the information you require is the `uniqueId: 123456a6-ffee-78a9-927e-34921d59ce64)` value.
5. Open the `agent.id` file stored in `/var/nnt/gen7agent.app.netcore` using a text editor (`nano` or `vi`). Erase the uniqueId currently in that file and paste in the uniqueId identified in the previous step (123456a6-ffee-78a9-927e-34921d59ce64). Ensure there are no spaces at the beginning or end of the text string.
6. Close and save the `agent.id` file.
7. Start the **Netwrix ChangeTracker Gen7 Agent NetCore Service**.

This should resolve the uniqueId conflict and the device should now be registered on Change Tracker successfully.


