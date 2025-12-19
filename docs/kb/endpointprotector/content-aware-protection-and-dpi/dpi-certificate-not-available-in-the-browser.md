---
description: >-
  The DPI certificate may not appear in the browser when no Content Aware
  Policies (CAP) are applied. This article explains the cause and shows how to
  configure CAP so the DPI certificate is deployed to monitored browsers and
  applications.
keywords:
  - DPI
  - DPI certificate
  - browser
  - Content Aware Policies
  - CAP
  - Netwrix Endpoint Protector
  - Device Control
  - Content Aware Protection
products:
  - endpoint-protector
sidebar_label: DPI Certificate Not Available in the Browser
tags:
  - content-aware-protection-and-dpi
title: "DPI Certificate Not Available in the Browser"
knowledge_article_id: kA0Qk0000002B60KAE
---

# DPI Certificate Not Available in the Browser

## Symptom
The Deep Packet Inspection (DPI) certificate is not available in the web browser, even though DPI is enabled on the computer and no errors are reported.

## Cause
This issue occurs when there are no Content Aware Policies (CAP) applied to the computer. The DPI certificate is only deployed and used if CAP policies are configured to monitor browsers or other applications controlled by DPI.

## Resolution
1. Open the **Netwrix Endpoint Protector** management console.  
2. In the left-side pane under **Device Control**, navigate to the **Content Aware Protection** section.  
3. Review and configure your Content Aware Policies (CAP) as needed.

For detailed information and step-by-step instructions on configuring Content Aware Policies (CAP), refer to the following documentation:

- Configuring Content Aware Policies (CAP)
