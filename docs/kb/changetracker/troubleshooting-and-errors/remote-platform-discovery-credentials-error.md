---
description: >-
  Shows how to resolve the rolling log error "Couldn't get credentials for
  remote platform discovery on" by manually updating the ProxiedDevices.json
  file on a Netwrix Change Tracker Gen 7 Agent used as a proxy.
keywords:
  - rolling log
  - ProxiedDevices.json
  - proxy device
  - nntgen7agent
  - Netwrix Change Tracker
  - proxied device
  - Gen7 agent
  - Netwrix Change Tracker Gen 7 Agent
products:
  - changetracker
knowledge_article_id: ka0Qk000000DlnVIAS
sidebar_label: 'Rolling-Log Fix: Could Not Get Credentials for Remote Platform Discovery'
tags: [kb, troubleshooting-and-errors]
title: 'Rolling-Log Fix: "Could Not Get Credentials for Remote Platform Discovery On"'
---

# Rolling-Log Fix: "Could Not Get Credentials for Remote Platform Discovery On"

## Symptom

The rolling log on a Netwrix Change Tracker Gen 7 Agent used as a proxy contains an error indicating that the agent could not get credentials for remote platform discovery. This problem can occur when the Netwrix Change Tracker Gen 7 Agent's `ProxiedDevices.json` file does not automatically update its fields with the proxy device you have configured on the console.

### Example Error Message

```
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#                                                   Example Message:                                                      #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

2019-11-19 09:40:54,551 [9] INFO  Message - Hub connection failed  (403 Server message: Invalid Permission)
2019-11-19 09:40:54,551 [9] INFO  Message - Couldn't get credentials for remote platform discovery on 1,28 HostNameOrIp: ORCL. Returning a default platform with OSType.Unspecified
2019-11-19 09:40:54,552 [9] INFO  Message - task 370 - DeviceConfigTask-28 cannot execute, cannot discover proxied device platform details: 1,28 HostNameOrIp: ORCL
2019-11-19 09:40:54,559 [9] INFO  Message - Entering configuration problem state for 28. Retry at: 19/11/2019 09:43:24
```

## Cause

The `ProxiedDevices.json` file on the Netwrix Change Tracker Gen 7 Agent did not automatically populate with the proxy device details configured on the console, so the agent cannot resolve credentials for the proxied device.

## Resolution

1. Remote into the Netwrix Change Tracker Gen 7 Agent device you are using to proxy.
2. Navigate to the agent service folder:
   - Windows: `C:\ProgramData\NNT\gen7agent.service`
   - Linux: `/var/nnt/gen7agent.service`
3. Stop the **nntgen7agent** service on the server.
4. Edit the `ProxiedDevices.json` file.
5. Within the `[]` brackets, manually fill in the proxy device details. Use the following example as a guide.

On the Netwrix Change Tracker Console, edit the proxy device in question to view its details.

Using the console, fill out the details as shown in the following example.

> **NOTE:** You can find the AgentID and DeviceID of the proxy device in the rolling log file.

Example proxied device JSON:
```json
[{"AgentId":"1","DeviceId":"28","DeviceName":"ORCL","PollPeriodSeconds":30,"PingTimeoutSeconds":15,"HostType":"Database","HostNameOrIp":"ORCL"}]
```

6. After you have entered the details of the proxy device manually, save the file.
7. Start the **nntgen7agent** service.
8. Check whether the proxy device appears online on the Netwrix Change Tracker Console and operates as expected.
