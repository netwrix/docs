---
description: >-
  This article explains the rights hierarchy for devices in Netwrix Endpoint
  Protector and how permissions are applied and overridden. It also shows how to
  set precedence between Computer and User rights and explains Custom Classes.
keywords:
  - netwrix endpoint protector
  - rights hierarchy
  - device rights
  - global rights
  - group rights
  - computer rights
  - user rights
  - custom classes
  - system settings
products:
  - endpointprotector
visibility: public
sidebar_label: Understanding the Rights Hierarchy for Devices
tags:
  - device-control-and-access-management
  - kb
title: "Understanding the Rights Hierarchy for Devices"
knowledge_article_id: kA0Qk0000002B6SKAU
---

# Understanding the Rights Hierarchy for Devices

## Overview

This article explains the rights hierarchy for devices, which determines how Netwrix Endpoint Protector applies and overrides permissions.

The rights hierarchy for devices, from lowest to highest, is as follows:

1. Global Rights
2. Group Rights
3. Computer or User Rights
4. Devices
5. Custom Classes

![Priority order when configuring device rights](../0-images/priortyorder.webp)

Computer Rights and User Rights share one level. To choose which takes precedence, follow the steps in [Instructions](#instructions).

Custom Classes override all other rights. Use Custom Classes to globally set rights for a device or class of devices identified by Vendor ID (VID), Product ID (PID), and Serial Number.

For the full reference, see [Priority order](/docs/endpointprotector/admin/dc_module/devicesandcomputers#priority-order) in the Devices and Computers documentation.

> **NOTE:** If you do not configure device rights, the device uses the default Global Rights set per Device Type (USB Storage Device, Digital Camera, iPod, Thunderbolt, Chip Card Device, etc.). See [Directory Services](/docs/endpointprotector/admin/directoryservices) for more detail on how these defaults interact with directory-synced entities.

## Instructions

To set precedence between Computer Rights and User Rights, go to **System Configuration > System Settings** and select the desired option.

![System Settings page showing precedence configuration for Computer or User Rights](../0-images/ka0Qk000000DzNR_0EMQk00000BmNLl.png)
