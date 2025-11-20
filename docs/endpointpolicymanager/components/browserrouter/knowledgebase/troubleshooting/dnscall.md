---
title: "Why does Endpoint Policy Manager PPExtensionService.exe make a call out to DNS?"
description: "Why does Endpoint Policy Manager PPExtensionService.exe make a call out to DNS?"
sidebar_position: 240
---

# Why does Endpoint Policy Manager PPExtensionService.exe make a call out to DNS?

## Problem:

Your production system or network monitoring tools are logging a lot of DNS queries for a
decommissioned host.

In System Monitor (Sysmon) logs there are frequent Event Log entries of `PPExtensionService.EXE`
that is querying that dead host computer' FQDN.

Like in an example screenshot below.

![878_1_image-20211223234143-1](/images/endpointpolicymanager/troubleshooting/browserrouter/878_1_image-20211223234143-1.webp)

## Cause:

The cause of the problem is a Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router
(PPBR) rule that has an Item-level Targeting (ILT) filter of the decommissioned host computer.

![878_2_image-20211223234143-2](/images/endpointpolicymanager/troubleshooting/browserrouter/878_2_image-20211223234143-2.webp)

## Resolution:

Correct the ILT condition or remove the filter that is in place for that computer.


