---
description: >-
  Lists the firewall rules and required ports for DMZ, Backend, Domain
  Controllers, DNS, and Mail servers used by Password Manager.
keywords:
  - firewall
  - ports
  - RPC
  - DCOM
  - DMZ
  - domain controllers
  - DNS
  - mail server
  - Lsass
  - Password Manager
products:
  - general
sidebar_label: Firewall rules required by Password Manager
tags:
  - infrastructure-and-network
title: "Firewall rules required by Password Manager"
knowledge_article_id: kA00g000000H9cMCAS
---

# Firewall rules required by Password Manager

The table below lists all necessary properties for the firewall rules:

## On DMZ

| Type    | Local Ports | Remote ports | Remote machine | Protocol   | Application | Action |
|---------|-------------|--------------|----------------|------------|-------------|--------|
| Inbound | `80,443`    | Any          | Any            | TCP        | Any         | Allow  |
| Inbound | `135`       | RPC range*   | Backend        | TCP        | Any         | Allow  |
| Outbound| `RPC range` | `135-139`    | Backend, all DCs | TCP, UDP | Any         | Allow  |
| Outbound| `RPC range` | `88, 389,464`| All DCs        | TCP, UDP   | Any         | Allow  |
| Outbound| `RPC range` | DCOM range   | Backend        | TCP        | Any         | Allow  |
| Outbound| `RPC range` | `53`         | DNS            | UDP        | Any         | Allow  |

## On Backend

| Type    | Local Ports  | Remote ports | Remote machine            | Protocol   | Application     | Action |
|---------|--------------|--------------|---------------------------|------------|-----------------|--------|
| Inbound | DCOM range   | RPC range    | DMZ                       | TCP        | Any             | Allow  |
| Inbound | `135-139`    | RPC range    | DMZ                       | TCP, UDP   | Any             | Allow  |
| Outbound| RPC range    | `135-139`    | DMZ, all DCs              | TCP, UDP   | Any             | Allow  |
| Outbound| RPC range    | `88,389,464` | All DCs                   | TCP, UDP   | Any             | Allow  |
| Outbound| RPC range    | `53`         | DNS                       | UDP        | Any             | Allow  |
| Outbound| RPC range    | RPC range    | All DCs                   | TCP        | `Lsass.exe**`   | Allow  |
| Outbound| RPC range    | `25`         | Mail server               | TCP        | Any             | Allow  |

## On DCs

| Type    | Local ports   | Remote ports | Remote machine      | Protocol   | Application      | Action |
|---------|----------------|--------------|---------------------|------------|------------------|--------|
| Inbound | `88,389,464`   | RPC range    | DMZ, Backend        | TCP, UDP   | Any              | Allow  |
| Inbound | `135-139`      | RPC range    | Backend             | TCP, UDP   | Any              | Allow  |
| Inbound | RPC dynamics   | RPC range    | Backend             | TCP        | `Lsass.exe**`    | Allow  |

## On DNS server

| Type    | Local ports | Remote ports | Remote machine | Protocol | Application | Action |
|---------|-------------|--------------|----------------|----------|-------------|--------|
| Inbound | `53`        | Any          | Any            | UDP      | Any         | Allow  |

## On Mail server

| Type    | Local ports | Remote ports | Remote machine | Protocol | Application | Action |
|---------|-------------|--------------|----------------|----------|-------------|--------|
| Inbound | `25`        | Any          | Any            | TCP      | Any         | Allow  |

* `RPC range` is `1024 – 65535` (Windows NT/XP/2003) or `49152 – 65535` (Windows Vista/2008/7/2k8r2)  
RPC dynamic port allocation can be reconfigured. Refer the following Microsoft Knowledge Base article: [http://support.microsoft.com/kb/154596](http://support.microsoft.com/kb/154596)

** `Lsass.exe is %systemroot%System32lsass.exe`

Note: All Inbound and Outbound connections on all servers are blocked if they do not match the rules.
