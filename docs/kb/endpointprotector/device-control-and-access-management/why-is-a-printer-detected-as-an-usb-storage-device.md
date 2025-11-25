---
description: >-
  Explains why Netwrix Endpoint Protector detects printers with internal storage
  as USB storage devices and how device type information is reported by the
  operating system.
keywords:
  - endpoint protector
  - printer
  - usb storage
  - internal storage
  - device detection
  - operating system
  - data remanence
products:
  - endpoint-protector
sidebar_label: Why Is a Printer Detected as an USB Storage Device
tags:
  - device-control-and-access-management
title: "Why Is a Printer Detected as an USB Storage Device?"
knowledge_article_id: kA0Qk0000002BLzKAM
---

# Why Is a Printer Detected as an USB Storage Device?

## Question

Why does Endpoint Protector detect the printer as a USB storage device?

## Answer

You should be aware that printers with internal storage are identified by the operating system as both printers and storage devices. This is because their ability to store, manage, and access files directly is similar to how traditional storage devices function. As a result, sensitive or confidential information may remain on the printer for extended periods.

Endpoint Protector receives device type information from the operating system. The printing function is managed under the **Printers** device type, while the internal storage is managed under the **USB Storage Device** type.
