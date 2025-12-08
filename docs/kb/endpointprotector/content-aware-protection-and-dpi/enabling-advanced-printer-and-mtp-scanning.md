---
description: >-
  Shows how to enable Advanced Printer and MTP Scanning in Netwrix Endpoint
  Protector to improve Printer and MTP content-aware file tracing and shadowing,
  reducing false positives for browser and application file transfers.
keywords:
  - Advanced Printer and MTP Scanning
  - File Tracing
  - File Shadowing
  - Netwrix Endpoint Protector
  - MTP
  - printers
  - file transfers
  - clients
products:
  - endpoint-protector
visibility: public
sidebar_label: Enabling Advanced Printer and MTP Scanning
tags:
  - content-aware-protection-and-dpi
title: "Enabling Advanced Printer and MTP Scanning"
knowledge_article_id: kA0Qk0000002AxvKAE
---

# Enabling Advanced Printer and MTP Scanning

## Overview

Netwrix Endpoint Protector includes an improved method for Printer and MTP Content Aware Protection; File Tracing and File Shadowing has been added. This enhancement increases accuracy and reduces false positives for file transfers via browsers (Internet Explorer, Firefox, Chrome) and other applications.

## Instructions

1. In the Netwrix Endpoint Protector Console, navigate to **Device Control** > **Global Settings**, **Groups**, or **Computers** > **Manage Settings** > **File Tracing and Shadowing**.
2. Toggle the switch to enable **Advanced Printer and MTP Scanning**.
3. Click **Save** within the **File Tracing and Shadowing** section.  
   ![File Tracing and Shadowing settings with Advanced Printer and MTP Scanning option enabled](./../0-images/ka0Qk000000DsH7_0EMQk00000CB1Rh.png)
4. Save your changes and ensure the updated settings are deployed to Netwrix Endpoint Protector Clients by waiting for the clients to update their policies.
5. Restart the machines protected by Netwrix Endpoint Protector.

> **NOTE:** This feature is only available for Windows. A computer restart is required each time this feature is enabled or disabled.
