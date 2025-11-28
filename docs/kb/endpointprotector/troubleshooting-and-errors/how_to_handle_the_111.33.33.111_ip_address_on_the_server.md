---
description: >-
  This article explains the purpose and handling of the 111.33.33.111 IP address configured on the Endpoint Protector (EPP) server, along with important considerations for firewall and routing settings.
keywords:
  - IP address
  - Endpoint Protector
  - firewall settings
sidebar_label: Handle 111.33.33.111 IP Address
tags:
  - troubleshooting-and-errors
title: "How to Handle the 111.33.33.111 IP Address on the Server"
knowledge_article_id: kA0Qk0000002B4EKAU
products:
  - endpoint-protector
---

# How to Handle the 111.33.33.111 IP Address on the Server

## Overview

This article explains the purpose and handling of the **111.33.33.111** IP address configured on the Endpoint Protector (EPP) server, as well as important considerations for firewall and routing settings.

## Instructions

- The IP address **111.33.33.111** is used for internal routing on the EPP server. Do not block this IP address, as doing so may affect server functionality.
- If the IP address is blocked in the firewall or by other means, a new IP address will be assigned via NAT. The EPP server may continue to work temporarily, but after a reboot, the user interface will not be accessible until the original IP is restored.

### Technical Background

- Duplicate IP addresses on the public internet are prevented by the Border Gateway Protocol (BGP) and the assignment of unique IP addresses by the Internet Assigned Numbers Authority (IANA) and Regional Internet Registries (RIRs).
- **IP Address Allocation:** IANA and RIRs allocate unique IP address blocks to organizations. Assigning a static public IP address to a device does not guarantee internet reachability.
- **BGP (Border Gateway Protocol):** BGP is the primary routing protocol on the internet. Routers use BGP to determine the best path to reach a particular IP address, relying on unique Autonomous System Numbers (ASNs) to distinguish networks.
- Internet Service Providers (ISPs) use BGP to exchange routing information. BGP routes are advertised based on IP prefixes associated with each ASN.
- Duplicate IP addresses can cause conflicts in BGP, and routers will not accept conflicting route advertisements. BGP routers are configured to filter and validate route announcements to prevent propagation of conflicting information.

### Example Scenario

If you manually configure a different IP address instead of **111.33.33.111** (for example, **8.8.8.8** or **216.58.194.174**), the EPP server will not be able to receive or intercept traffic intended for the legitimate owners of those IP addresses. BGP will drop such traffic, and any attempt to spoof those IPs will fail.