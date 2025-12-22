---
description: >-
  This article explains what the color indicators mean in the Endpoint Protector
  Server and Client. It maps each color to the corresponding device right or
  status so you can interpret device states at a glance.
keywords:
  - endpoint protector
  - colors
  - trusted device
  - device rights
  - client
  - server
  - read-only
  - allow charging
products:
  - endpoint-protector
visibility: public
sidebar_label: What Do the Colors Represent in Endpoint Protector
tags:
  - features-and-operations
title: "What Do the Colors Represent in Endpoint Protector Server and Client?"
knowledge_article_id: kA0Qk0000002B63KAE
---

# What Do the Colors Represent in Endpoint Protector Server and Client?

## Question
What rights do the colors represent in the Endpoint Protector Server and Client?

## Answer
Endpoint Protector uses color indicators to represent device rights and statuses in both the Server and Client interfaces.

### Server Side
- **Red**: The device is blocked in the system.
- **Green**: The device is allowed on computers or users.
- **Yellow**: The device is allowed on some users or computers with restrictions.

### Client Side
- **Red**: The device is blocked.
- **Green**: The device is allowed.
- **Yellow**: The device is set to Trusted Device Level 1; otherwise, it is read-only.
- **Orange**: The device is set to Read-Only.
- **Blue**: The device is set to TD 1, TD 2, TD 3, or TD 1+ (all Trusted Device levels).
- **Turquoise**: The iPhone is set to Allow Charging.
- **Grey**: The device was disconnected on macOS and Linux.
