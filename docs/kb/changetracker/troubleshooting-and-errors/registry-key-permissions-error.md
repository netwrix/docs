---
description: >-
  Explains the RegistryTrackerDataCollector error that indicates the Netwrix
  Change Tracker agent cannot access a registry key, why the error appears,
  and how to troubleshoot or safely ignore it.
keywords:
  - RegistryTrackerDataCollector
  - registry key
  - permissions
  - Netwrix Change Tracker
  - rolling log
  - agent
  - policy template
  - registry tracking
  - key does not exist
  - troubleshooting
  - Windows registry
  - HKEY_LOCAL_MACHINE
knowledge_article_id: ka04u000000Hd99AAC
products:
  - change-tracker
sidebar_label: Registry Key Permissions Error
tags: [kb, troubleshooting-and-errors]
title: >-
  Rolling-Log Fix: "RegistryTrackerDataCollector - Check the Agent Process
  Has the Required Permissions to Access the Registry Key"
---

This article explains the `RegistryTrackerDataCollector` error in the Netwrix Change Tracker agent Rolling Log and when it is safe to ignore.

## Symptom

The following error appears in the agent Rolling Log:

```text
2017-10-02 09:14:38,759 [9] ERROR RegistryTrackerDataCollector - check the agent process has the required permissions to access the registry key. (HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ExampleService\Parameters, error: The specified registry key does not exist.)
```

## Cause

This error occurs when a policy template in Netwrix Change Tracker is set to track a registry key and the agent cannot access the registry key because it does not exist or the agent does not have the required permissions.

## Resolution

### If the registry key does not exist on the device

If you are receiving this error for a registry key that does not exist on the device, it is safe to ignore. If you are using one template to track multiple agents and some agents have the key while others do not, it is not a problem to let the template continue tracking this key.

> **NOTE:** The only caution is the number of keys the template is looking for. If the template grows significantly, having a large volume of these errors may cause performance issues. However, in most cases, it is perfectly fine.

### If the registry key should exist

If the registry key exists but the error still appears, verify the following:

1. Verify the policy template is looking for the key in the correct location.
2. If the key is stored in different locations on different servers, define all potential locations in the template.
3. Check whether the agent has the required permissions to access the registry key. If not, adjust the permissions to allow access.
