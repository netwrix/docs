---
title: "Network Devices Ports"
description: "Network Devices Ports"
sidebar_position: 10
---

# Network Devices Ports

Review a full list of protocols and ports required for Netwrix Auditor for Network Devices.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports on the computer where Netwrix Auditor Server
  resides.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 514 UDP port.

| Port | Protocol | Source                    | Target                 | Purpose                               |
| ---- | -------- | ------------------------- | ---------------------- | ------------------------------------- |
| 514  | UDP      | Monitored network devices | Netwrix Auditor Server | Getting events from monitored devices |
| 443  | TCP      | Netwrix Auditor Server    | Cisco Meraki Dashboard | \*.meraki.com                         |
