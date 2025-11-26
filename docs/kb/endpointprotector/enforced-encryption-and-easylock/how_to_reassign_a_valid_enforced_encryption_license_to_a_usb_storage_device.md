---
description: >-
  This article provides step-by-step instructions on how to reassign a valid Enforced Encryption license from the server to a USB storage device.
keywords:
  - Enforced Encryption
  - EasyLock
  - USB storage device
sidebar_label: Reassign Enforced Encryption License
tags:
  - enforced-encryption-and-easylock
title: "How to Reassign a Valid Enforced Encryption License to a USB Storage Device"
knowledge_article_id: kA0Qk0000002B7BKAU
products:
  - endpoint-protector
---

# How to Reassign a Valid Enforced Encryption License to a USB Storage Device

## Overview

This article provides step-by-step instructions on how to reassign a valid Enforced Encryption (EasyLock) license from the server to a USB storage device.

## Instructions

Follow these steps to reassign a valid license to a USB storage device:

1. To configure the USB device, navigate to **Device Control > Devices** in Endpoint Protector.
2. Right-click the device and select **Manage Rights**. Ensure the USB storage device is accessible and set the device to **Allow**. Alternatively, connect the USB storage device to a computer that does not have the client installed.
3. Navigate to the hidden folder **.EasyLock Settings** on the USB device and delete the file named **cs14c7el.data**.
4. Delete the executable file **EasyLock.exe** from the root of the USB storage device.
5. Download the EasyLock utility executable from [this link](https://download.endpointprotector.com/Support_files/EasyLock_util.zip).
6. Extract **EasyLock_util.exe** to the root of the USB storage device and run it.
7. Download the EasyLock package from the server and copy it to the root of the USB storage device. Extract all files and overwrite existing files.
8. Open **EasyLock.exe** from the USB storage device and enter the password.