---
description: >-
  This article provides recommendations for ensuring seamless interaction between Endpoint Protector and various security vendors, proxies, cloud access security brokers (CASBs), and web browsers.
keywords:
  - Endpoint Protector
  - security vendors
  - proxies
  - CASBs
  - web browsers
sidebar_label: Recommendations for Endpoint Protector Interaction
tags:
  - features-and-operations
title: "Recommendations for Endpoint Protector Interaction with Security Vendors, Proxies, CASBs, and Browsers"
knowledge_article_id: kA0Qk0000002B7HKAU
products:
  - endpoint-protector
---

# Recommendations for Endpoint Protector Interaction with Security Vendors, Proxies, CASBs, and Browsers

## Overview

This article provides recommendations for ensuring seamless interaction between Endpoint Protector and various security vendors, proxies, cloud access security brokers (CASBs), and web browsers.

## General Recommendations

- **Network Configuration and SSL Inspection:**
  - If network routing is properly configured and no SSL inspection occurs, client-server communication should work without issues.

- **Peer Certificate Validation:**
  - Disable peer certificate validation if other security vendors perform SSL inspection.

## Specific Vendor Solutions

### Zscaler and Cisco VPNs (AnyConnect and Umbrella)

- **Issue:** Difficulties in making the Deep Packet Inspection (DPI) filter work due to Zscaler.
- **Resolution:**
  - Add custom ports for the proxies used.
  - Disable DPI peer certificate validation:
    - In the Endpoint Protector UI, navigate to **CAP > Deep Packet Inspection**.
    - Check **Custom Ports** to enable them, select **Proxy type**, and add the customer's proxy port.
    - Set **Peer Certificate Validation** to OFF.

### Netskope

- **Issue:** Netskope logs show `sslsplit.exe` instead of the original application name under traffic tunneling.
- **Resolution:** Enable the "Stealthy DPI driver" globally, per group, or per user/computer.

### Forcepoint

- **Issue:** Websites are inaccessible on Firefox with the Forcepoint certificate present and DPI enabled.
- **Resolution:**
  - Add custom ports for the Forcepoint proxies.
  - Disable Peer Certificate Validation.
  - Clear the browser cache.

### Sophos

- **Issue:** Deep Packet Inspection prevents the use of Sophos WebControl's URL Categories Blocking.
- **Action:** Establish collaboration with Sophos to address the issue.

### Firefox on macOS

- **Issue:** Firefox on macOS does not use system certificates for validation by default, but rather the local Firefox profile (pre-cached) certificates.
- **Resolution:** Set `security.enterprise_roots.enabled` to TRUE in Firefox settings to trust third-party certificates such as those used by Endpoint Protector.