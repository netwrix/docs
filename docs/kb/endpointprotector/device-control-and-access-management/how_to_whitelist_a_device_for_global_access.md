---
description: >-
  This article explains how to globally whitelist a specific device in Endpoint Protector (EPP) by creating a custom class. You will learn how to identify devices using attributes and configure access permissions.
keywords:
  - whitelisting
  - Endpoint Protector
  - device management
sidebar_label: Whitelisting a Device
tags:
  - device-control-and-access-management
title: "How to Whitelist a Device for Global Access"
knowledge_article_id: kA0Qk0000002BB8KAM
products:
  - endpoint-protector
---

# How to Whitelist a Device for Global Access

## Overview

This article explains how to globally whitelist a specific device in **Endpoint Protector** (EPP) by creating a custom class. You will learn how to identify devices using attributes such as Device Type, Device Class (VID, PID), or Serial Number, and configure access permissions to allow the device across all endpoints.

## Instructions

Follow the steps below to complete this process:

1. To access Custom Classes, navigate to **EPP Console** > **Device Control** > **Custom Classes** and click **Create**.
2. To configure the Custom Class, provide a name for your custom class and ensure the **Custom Class Status** is set to **ON**.
3. Add Device to Custom Class by clicking **Add** in the **Custom Class Device List**.
4. The Device Wizard window will populate. You must select a **Device Type** from the list provided, which includes the following devices:
   - Unknown Device
   - USB Storage Device
   - Internal CD or DVD RW
   - Internal Card Reader
   - Internal Floppy Drive
   - Local Printers
   - Network Printers
   - Windows Portable Device (Media Transfer Protocol)
   - Digital Camera
   - BlackBerry
   - iPhone
   - iPad
   - Bluetooth (with subcategories like Radio, Keyboard, Mouse, Smartphone, Headphones)
   - iPod
   - VM USB Device
   - Serial ATA Controller
   - WiFi
   - FireWire Bus
   - Serial Port
   - PCMCIA Device
   - Card Reader Device (MTD, SCSI)
   - ZIP Drive
   - Teensy Board
   - Thunderbolt
   - Infrared Dongle
   - Parallel Port (LPT)
   - Thin Client Storage (RDP Storage)
   - Additional Keyboard
   - USB Modem
   - Android Smartphone (Media Transfer Protocol)
   - Chip Card Device
   - Audio Device
5. For each device selected, choose **Allow Access** or **Deny Access**.
6. Choose the method for adding the device, then select **Next**.
7. To finalize the setup of the Device Wizard, follow the steps below for the device that applies:
   - **Existing Device (Wizard):** Use the checkbox to select one or more device types, then click **Save**.
   - **New Device (VID, PID, Serial Number):** Enter the VID, PID, Serial Number, and Description, then press **Save**.
   - **Device Serial Number Range:** Enter the VID, PID, first serial number in range, last serial number in range, and Description, then press **Save**.
   - **Bulk List of Devices:** Choose enrollment options, then insert/import content and press **Save**.