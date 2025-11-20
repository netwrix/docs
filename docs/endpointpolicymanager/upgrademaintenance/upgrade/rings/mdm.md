---
title: "Rings with Endpoint Policy Manager and an MDM Service"
description: "Rings with Endpoint Policy Manager and an MDM Service"
sidebar_position: 20
---

# Rings with Endpoint Policy Manager and an MDM Service

The concept of rings with regard to Windows 10 updates and upgrades is built into Microsoft Intune
(and perhaps other MDM services). You can see Microsoft Intune's example of rings here
[https://www.anoopcnair.com/software-update-patching-options-with-intune/](https://www.anoopcnair.com/software-update-patching-options-with-intune/).
However, the specific idea of using rings to deploy any other software, like the Endpoint Policy
Manager CSE, is not something native to an MDM service. Therefore, you will need to create computer
groups, then assign software to those groups. In Intune (and most other MDM services), groups can be
simple or dynamic. You might want to create the following three groups:

- Simple group: Hand-picked machines which represent 2–5% of your estate.
- 30% dynamic group: A group you define with 30% of your Windows 10 computers.
- Dynamic group with the remainder (31-100%): A group you define with the remainder of your Windows
  10 computers.

By making the groups dynamic, as computers get enrolled into your MDM service they will
automatically be part of the first or second dynamic group. But because the first group is a simple
group with hand-picked machines, those machines are the only ones that will get the initial rollout
of a new CSE. Then, because the Endpoint Policy Manager CSE is an MSI, you can use the MSI
deployment method with your MDM service to target to these groups.

