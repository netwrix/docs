---
description: >-
  This article explains why the Read Only access right may not function as expected after changing access rights and provides guidance on how to ensure the correct permissions are applied.
keywords:
  - Read Only access
  - access rights
  - Endpoint Protector
sidebar_label: Read Only Access Issues
tags:
  - device-control-and-access-management
title: "Read Only Access Not Working After Rights Change"
knowledge_article_id: kA0Qk0000002BIqKAM
products:
  - endpoint-protector
---

# Read Only Access Not Working After Rights Change

## Question

Why does the Read Only right not work as intended after changing access rights?

## Answer

The Read Only right may not work as intended immediately after changing access rights because the device or media must be reconnected for the new permissions to take effect.

When you modify access rights for a device in **Endpoint Protector**, such as changing from **Allow Access** or **Deny Access** to **Read Only**, the system does not require a reboot. However, the updated rights are only enforced after the device is unplugged and reconnected. For optical drives, you must remove and re-insert the CD or DVD to trigger the rights update.

In contrast, installing the **Endpoint Protector Client** or changing default rights during installation does require a system reboot for changes to apply. For all other access right modifications, simply re-plugging the device or media ensures the correct rights are assigned and resolves most issues with Read Only access not working as expected.