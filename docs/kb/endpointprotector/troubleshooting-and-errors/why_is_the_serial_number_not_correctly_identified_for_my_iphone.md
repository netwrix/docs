---
description: >-
  This article explains why the serial number for an iPhone may not be correctly identified and the implications of Apple's security limitations on device identification.
keywords:
  - iPhone
  - serial number
  - USB storage device
sidebar_label: iPhone Serial Number Identification
tags:
  - troubleshooting-and-errors
title: "Why Is the Serial Number Not Correctly Identified for My iPhone?"
knowledge_article_id: kA0Qk0000002BIoKAM
products:
  - endpoint-protector
---

# Why Is the Serial Number Not Correctly Identified for My iPhone?

## Question

Why is the serial number not correctly identified for my iPhone?

## Answer

Devices such as iPhones can be connected and detected as various device types, depending on the computer operating system. An iPhone, in addition to being a smartphone, can also function as a USB storage device.

Although USB devices are identified using Vendor ID (VID), Product ID (PID), and serial number, Apple prohibits access to the device identifying data that is visible in the iOS Settings app.

These security limitations imposed by Apple are further extended, as the USB serial number is also used by iTunes to name the backup folder for an iPhone on the computer.

As a result, the serial number displayed by Endpoint Protector will be the iPhone's USB storage device serial number, not the iPhone serial number shown in the phone's settings menu.