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
  - endpointprotector
sidebar_label: DPI Certificate Not Available in the Browser
tags:
  - content-aware-protection-and-dpi
  - kb
title: "DPI Certificate Not Available in the Browser"
knowledge_article_id: kA0Qk0000002B60KAE
---

# DPI Certificate Not Available in the Browser

## Symptom
The Deep Packet Inspection (DPI) certificate is not available in the web browser, even though DPI is enabled on the computer and no errors are reported.

## Cause
This issue occurs when there are no Content Aware Policies (CAP) applied to the computer. The DPI certificate is only deployed and used if CAP policies are configured to monitor browsers or other applications controlled by DPI. For a full overview of DPI, including Stealthy vs. Regular DPI modes and known OS-specific limitations, see [Deep Packet Inspection](/docs/endpointprotector/admin/cap_module/deeppacket).

## Resolution
1. Open the **Netwrix Endpoint Protector** management console.  
2. In the left-side pane under **Device Control**, navigate to the **Content Aware Protection** section.  
3. Review and configure your Content Aware Policies (CAP) so that a policy applies to the affected computer and includes the browser as an Exit Point.
4. Confirm the EPP Client installed correctly on the endpoint. See [Agent Installation](/docs/endpointprotector/admin/agent#agent-installation) — on macOS, Deep Packet Inspection also requires the EPP Client to have **Full Disk Access** granted under **System Preferences** > **Security & Privacy** > **Privacy**.
5. Visit a website in the affected browser. Endpoint Protector generates the DPI certificate the first time a monitored browser visits a site and caches it for later visits, so the certificate won't appear until a monitored transfer actually occurs.

:::note
The DPI certificate deploys automatically and transparently on Windows. On macOS and Linux, it requires manual installation. See [Deep Packet Inspection Certificate](/docs/endpointprotector/admin/cap_module/deeppacket#deep-packet-inspection-certiﬁcate) for the OS-specific installation steps and the certificate status matrix used to diagnose availability and trust issues.
:::

For detailed information and step-by-step instructions on configuring Content Aware Policies (CAP), refer to the following documentation:

- [Policy Configuration and Application](/docs/endpointprotector/admin/cap_module/cappolicies)
