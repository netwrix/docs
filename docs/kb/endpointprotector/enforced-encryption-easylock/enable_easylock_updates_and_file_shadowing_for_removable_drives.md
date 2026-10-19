---
description: >-
  This article explains how to enable EasyLock application updates and file shadowing for removable drives using the Endpoint Protector web console.
keywords:
  - EasyLock
  - Endpoint Protector
  - file shadowing
sidebar_label: Enable EasyLock Updates
tags:
  - enforced-encryption-easylock
  - kb
title: "Enable EasyLock Updates and File Shadowing for Removable Drives"
knowledge_article_id: kA0Qk0000002B11KAE
products:
  - endpointprotector
---

# Enable EasyLock Updates and File Shadowing for Removable Drives

## Overview

This article explains how to enable EasyLock application updates and file shadowing for removable drives using the Endpoint Protector web console.

For the full reference, see [Enforced Encryption Settings](/docs/endpointprotector/admin/ee_module/eemodule#enforced-encryption-settings).

## Instructions

### Enabling EasyLock Application Updates

1. Open the **Endpoint Protector** web console.
2. Navigate to **Enforced Encryption** > **EasyLock**.
3. Under **Settings**, locate and enable the **Update** option.

### Enabling File Shadowing for Removable Drives

1. In the **Endpoint Protector** web console, navigate to **Device Control** > **Global Settings**.
2. Under **File Tracing and Shadowing**, enable both **File Tracing** and **File Shadowing**.
3. Go to **Enforced Encryption** > **EasyLock** and enable the **File Tracing** option.

:::note
The global (Device Control) **File Tracing** and **File Shadowing** settings and the EasyLock-specific **File Tracing** setting are independent — enabling one doesn't automatically enable the other. Enable both if you need file tracing and shadowing to apply to Enforced Encryption transfers.
:::

:::tip
Whether File Tracing data for EasyLock transfers reaches the server immediately depends on whether the Endpoint Protector Client is present on the computer where the transfer occurs:
- **Client present:** Tracing data sends to the Endpoint Protector Server automatically, regardless of whether File Tracing is enabled for that specific computer through Device Control.
- **Client not present:** Tracing data is stored locally on the device in encrypted form, and sends later from any other computer with the Endpoint Protector Client installed. Enable **Offline File Tracing** (an extension of File Tracing in the same Enforced Encryption Settings section) to support this scenario.

File Shadowing for EasyLock transfers, by contrast, is always a real-time event — no shadowing information is ever stored on the device — and requires both the Endpoint Protector Client to be present and File Shadowing enabled on that computer through Device Control.
:::