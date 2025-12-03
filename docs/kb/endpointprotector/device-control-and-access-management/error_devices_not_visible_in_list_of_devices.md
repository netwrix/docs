---
description: >-
  This article addresses the issue of new devices not appearing in the List of Devices on a protected computer and provides troubleshooting steps to resolve the problem.
keywords:
  - devices not visible
  - Endpoint Protector
  - EPP Client
sidebar_label: Devices Not Visible
tags:
  - device-control-and-access-management
title: "Error: Devices Not Visible in List of Devices"
knowledge_article_id: kA0Qk0000002B6eKAE
products:
  - endpoint-protector
---

# Error: Devices Not Visible in List of Devices

## Symptom

New devices connected to a protected computer are not visible in the system's **List of Devices**.

## Cause

This issue may occur if the **Endpoint Protector (EPP) Client** is not communicating with the **EPP Server**, or if the device has not been properly recognized or registered by the system.

## Resolutions

1. **Verify the device status:**
   1. Open the **EPP Client** notifier by double-clicking the **EPP Client** icon in the task bar.
   2. Check if the **EPP Client** is communicating with the **EPP Server** by reviewing the **Last Server Connection** status.
   3. On the **Settings** tab, press **Ctrl** + **Alt** + **I** (Windows) or **Command** + **Option** + **I** (macOS). Confirm that **YES** appears next to **Connected**.
   4. Check if the device is visible under the **Device Control** tab in the **EPP Client**.

2. **Unplug the device and restart the computer.** After the restart, reconnect the device to the computer and update **EPP Client** policies.

3. **Manually create a new device** by providing the device parameters and information under **List of Devices**:
   1. Navigate to **Device Control** > **Devices** > **Create**.
   2. Save the newly added device and retest.