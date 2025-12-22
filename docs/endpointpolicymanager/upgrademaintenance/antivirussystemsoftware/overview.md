---
title: "AntiVirus and System Software Overview"
description: "AntiVirus and System Software Overview"
sidebar_position: 1
---

# AntiVirus and System Software Overview

This section provides guidance for configuring third-party antivirus and system-level software to work properly with Netwrix Endpoint Policy Manager.

## AntiVirus Configuration

Learn how to properly configure antivirus software to avoid conflicts:

- [AntiVirus Configuration Requirements](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/antivirus.md) - How to configure anti-virus or system-level software to work with Endpoint Policy Manager CSE

## Virtualization and Layering

Special considerations for virtualized environments:

- [Citrix App Layering Integration](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/citrixapplayering.md) - Implementation with Citrix App Layering (formerly Unidesk)

## Common Issues and Solutions

Troubleshoot common problems related to third-party software interference:

- [Digitally Signed Driver Prompts](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/digitallysigneddriver.md) - Why you're prompted about digitally signed drivers and workarounds
- [Service Start Privilege Issues](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/sufficientprivileges.md) - Troubleshooting "insufficient privileges to start system services" errors

## Key Recommendations

- Always configure antivirus software to exclude Endpoint Policy Manager files and processes
- Test thoroughly in virtualized environments before deployment
- Be aware that some security software may prevent proper CSE operation without proper configuration

