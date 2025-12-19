---
description: >-
  Explains why macOS shows "Failed to initiate USB device" when launching
  EasyLock from Finder with read-only access enforced, and how to launch
  EasyLock using the Netwrix Endpoint Protector Client or Notifier.
keywords:
  - Failed to initiate USB device
  - EasyLock
  - macOS
  - read-only
  - TD1+
  - Netwrix Endpoint Protector
  - USB
  - Finder
  - Notifier
products:
  - endpoint-protector
sidebar_label: "Error: Failed to Initiate USB device"
tags:
  - device-control-and-access-management
title: 'Error: Failed to Initiate USB device'
knowledge_article_id: kA0Qk0000002BCHKA2
---

# Error: Failed to Initiate USB device

## Question
Why does the error message "Failed to initiate USB device" appear when attempting to start EasyLock from **Finder** with read-only access enforced on macOS?

## Answer
You see this error on macOS when the **Allow Access if TD1+, otherwise Read Only** right is applied. Due to operating system limitations, you cannot launch applications from a device when read-only access is enforced. As a result, when you start EasyLock from **Finder**, you see the "Failed to initiate USB device" error.

To launch EasyLock, use the **Netwrix Endpoint Protector Client** or **Notifier** and click the **mini USB icon**. This method allows Netwrix Endpoint Protector to grant the necessary access for EasyLock to run on the USB device.
