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
  - kb
title: "Why DPI Does Not Inspect Content When VPN Add-ons Are Installed on Browsers"
knowledge_article_id: kA0Qk0000002B9TKAU
products:
  - endpointprotector
---

# Why DPI Does Not Inspect Content When VPN Add-ons Are Installed on Browsers

## Question

Why is Deep Packet Inspection (DPI) not inspecting content when VPN add-ons are installed on browsers?

## Answer

Endpoint Protector is an endpoint Data Loss Prevention (DLP) solution. Content inspection occurs on the endpoint when a monitored application accesses a file that is being monitored for content using custom content dictionaries, predefined content, regular expressions (regexes), and similar methods.

With the introduction of Deep Packet Inspection (DPI) functionality, an additional content inspection mechanism is available that inspects packets sent to the network. As an enterprise solution, the DPI feature within Endpoint Protector is designed to work in scenarios where only corporate VPNs are used. Such VPN solutions provide various configuration options that can be utilized by a network administrator to align with the overall, company-wide security policy.

End users are generally restricted from installing their own applications or deploying individual solutions such as VPN add-ons in browsers. This restriction is enforced by network administrators to ensure business continuity, limit exposure and risks, and ensure data security measures are effective.

The DPI feature within Endpoint Protector is not designed to cover scenarios where end users deploy their own browser-based VPN add-ons. In such cases, the Deep Packet Inspection functionality should be disabled, allowing the default method of confidential content inspection to operate.

For the full reference, see [Deep Packet Inspection](/docs/endpointprotector/admin/cap_module/deeppacket).

:::note
This limitation applies specifically to uncontrolled, end-user-installed browser VPN add-ons — not to managed corporate VPN traffic. On macOS, Endpoint Protector supports intercepting managed VPN traffic through the **Intercept VPN Traffic** setting. See [Enabling Deep Packet Inspection and Intercepting VPN Traffic on macOS Clients](/docs/kb/endpointprotector/content-aware-protection-and-dpi/enabling-deep-packet-inspection-and-intercepting-vpn-traffic-on-macos-clients) for the configuration steps.
:::

:::tip
If third-party software (including certain VPN or firewall clients) has trouble handling or blocking traffic redirected to Endpoint Protector's local proxy, switching from Regular DPI to **Stealthy DPI** on Windows can resolve some of these conflicts. See [Stealthy DPI vs. regular DPI](/docs/endpointprotector/admin/cap_module/deeppacket#stealthy-dpi-vs-regular-dpi) for the comparison. This doesn't extend DPI support to unmanaged, end-user browser VPN add-ons.
:::