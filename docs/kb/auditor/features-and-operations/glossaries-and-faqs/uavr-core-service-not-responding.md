---
description: >-
  Describes troubleshooting steps when the User Activity Video Recording (UAVR)
  Core Service shows "Not Responding" after installation, including firewall,
  ports, required services, remote connection tests, and agent reinstallation.
keywords:
  - UAVR
  - User Activity Video Recording
  - core service
  - Not Responding
  - UACoreSvcSetup.msi
  - ports
  - Windows Firewall
  - WMI
  - RPC
  - Remote Registry
  - agent reinstall
products:
  - auditor
sidebar_label: UAVR Core Service not Responding
tags: []
title: "UAVR Core Service not Responding"
knowledge_article_id: kA00g000000H9agCAC
---

# UAVR Core Service not Responding

## Symptom

User Activity Video Recording Core Service shows the following status:

```text
 Not Responding after install
```

## Cause

This issue is often caused by the ports being blocked by Windows Firewall or some other software/hardware.

## Resolution

In order to troubleshoot the issue please perform the following steps:

1. Disable Windows Firewall on local and target servers.
2. Make sure that the following ports are opened on the local and target server: User Activity Protocols and Ports ⸱ v10.6
3. Make sure that the following services are started - *WMI, RPC, Remote Registry*.
4. Try to connect to services remotely while logged in as the service account (`services.msc`)
   - This can be done by opening **Services** and right-clicking **Services (Local)** then select "Connect to Another Computer"
5. Try to re-install the agent on the target server with the `UACoreSvcSetup.msi` found in the install path on the Netwrix Host (default path: `C:\Program Files (x86)\Netwrix Auditor\User Activity Video Recording`)
