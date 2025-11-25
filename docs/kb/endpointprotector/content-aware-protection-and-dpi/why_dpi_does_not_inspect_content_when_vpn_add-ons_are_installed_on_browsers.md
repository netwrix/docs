---
description: >-
  This article explains why Deep Packet Inspection (DPI) does not inspect content when VPN add-ons are installed on browsers and outlines the implications for endpoint data loss prevention.
keywords:
  - Deep Packet Inspection
  - VPN add-ons
  - Data Loss Prevention
  - Endpoint Protector
  - content inspection
sidebar_label: DPI and VPN Add-ons
tags:
  - content-aware-protection-and-dpi
title: "Why DPI Does Not Inspect Content When VPN Add-ons Are Installed on Browsers"
knowledge_article_id: kA0Qk0000002B9TKAU
products:
  - endpoint-protector
---

# Why DPI Does Not Inspect Content When VPN Add-ons Are Installed on Browsers

## Question

Why is Deep Packet Inspection (DPI) not inspecting content when VPN add-ons are installed on browsers?

## Answer

Endpoint Protector is an endpoint Data Loss Prevention (DLP) solution. Content inspection occurs on the endpoint when a monitored application accesses a file that is being monitored for content using custom content dictionaries, predefined content, regular expressions (regexes), and similar methods.

With the introduction of Deep Packet Inspection (DPI) functionality, an additional content inspection mechanism is available that inspects packets sent to the network. As an enterprise solution, the DPI feature within Endpoint Protector is designed to work in scenarios where only corporate VPNs are used. Such VPN solutions provide various configuration options that can be utilized by a network administrator to align with the overall, company-wide security policy.

End users are generally restricted from installing their own applications or deploying individual solutions such as VPN add-ons in browsers. This restriction is enforced by network administrators to ensure business continuity, limit exposure and risks, and ensure data security measures are effective.

The DPI feature within Endpoint Protector is not designed to cover scenarios where end users deploy their own browser-based VPN add-ons. In such cases, the Deep Packet Inspection functionality should be disabled, allowing the default method of confidential content inspection to operate.