---
description: >-
  Use the Deny Access but Allow Charging right to allow iOS devices to charge
  while access is denied. This article shows where to configure this setting in
  the Netwrix Endpoint Protector Console and provides important notes about its
  behavior.
keywords:
  - deny access
  - allow charging
  - iOS
  - Netwrix Endpoint Protector
  - device types
  - Windows
  - macOS
  - native sync
products:
  - endpoint-protector
sidebar_label: How to Configure Deny Access but Allow Charging fo
tags:
  - device-control-and-access-management
title: "How to Configure Deny Access but Allow Charging for iOS Devices"
knowledge_article_id: kA0Qk0000002BHDKA2
---

# How to Configure Deny Access but Allow Charging for iOS Devices

## Overview

The **Deny Access** right typically prevents iOS devices from charging. To address this, the **Deny Access but Allow Charging** right was introduced. This setting allows iOS devices to charge while access is denied. This feature is currently available for Windows and macOS.

## Instructions

1. In the **Netwrix Endpoint Protector Console**, navigate to the **Global**, **Computer**, **User**, or **Group** level settings.
2. Locate the **Deny Access but Allow Charging** option under **Device Types**.  
   ![Deny Access but Allow Charging option under Device Types in Netwrix Endpoint Protector](./../0-images/ka0Qk000000ESsT_0EMQk00000C77qh.png)
3. Select **Deny Access but Allow Charging** for the desired iOS devices.

> **NOTE:** This right prevents native sync, a common process for all iOS devices. Setting **Deny Access but Allow Charging** for any iPhone, iPad, or iPod can affect other iOS devices in Netwrix Endpoint Protector. Applying this right to a device type (for example, iPhones) may also apply it to other device types (such as iPads or iPods), regardless of the rights set on those devices. For granular control (Groups, Computers, Devices, etc.), ensure this right is set for a specific device and not for an entire device type.
