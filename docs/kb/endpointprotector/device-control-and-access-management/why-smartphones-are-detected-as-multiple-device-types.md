---
description: >-
  Explains how Netwrix Endpoint Protector identifies smartphones and why a
  single phone may be detected as multiple device types depending on
  manufacturer and configuration.
keywords:
  - endpoint protector
  - smartphones
  - MTP
  - USB storage
  - USB modem
  - tethering
  - device types
  - mobile devices
  - Android
products:
  - endpoint-protector
sidebar_label: Why Smartphones Are Detected as Multiple Device Ty
tags:
  - device-control-and-access-management
title: "Why Smartphones Are Detected as Multiple Device Ty"
knowledge_article_id: kA0Qk0000002B96KAE
---

# Why Smartphones Are Detected as Multiple Device Ty

## Question

How does Netwrix Endpoint Protector identify smartphones, and why might multiple device types appear depending on manufacturer and configuration?

## Answer

Netwrix Endpoint Protector identifies smartphones based on how the operating system (OS) presents the device when it is connected. Modern smartphones function as full-featured computers with their own operating systems, and their connection behavior can vary by manufacturer and configuration.

For example:

- **Apple phones** typically appear as a single device type when connected.
- **Some Android phones** (such as Samsung devices) may appear as multiple device types.

Depending on the phone’s features and settings, the OS and Netwrix Endpoint Protector may detect the following device types:

- **MTP Device**: Most smartphones are detected as Media Transfer Protocol (MTP) devices in Device Manager.
- **USB Storage Device**: If the phone uses an SD card and is configured to appear as a storage device, Netwrix Endpoint Protector will detect it as a USB storage device.
- **USB Modem**: If internet sharing (tethering) is enabled, the device may also be detected as a USB modem.

To manage access and apply the appropriate policies, review the device types detected in Netwrix Endpoint Protector for each scenario.
