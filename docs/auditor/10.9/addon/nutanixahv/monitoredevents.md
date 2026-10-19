---
title: "Monitoring Scope"
description: "Monitoring Scope"
sidebar_position: 40
---

# Monitoring Scope

Review a full list of object types and activities monitored on Nutanix Prism with the add-on.

| Object                       | Source            | Action                                                                                                                                        | Property                                                                                                                                       |
| ---------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Virtual Machine              | Syslog            | Create/Delete, Clone, Migrate, Rename, State change (Power off/on, Pause, etc.), Restore from snapshot, Hardware configuration change         | Name, MAC Address, VLAN Name, Connection State, Number of Processors, Cores per Processor, Memory Size (MiB), Disk Size (Bytes), Host IP       |
| Host (Node)                  | Events (API v2.0) | Add, Remove                                                                                                                                   | IP                                                                                                                                             |
| Cluster Configuration        | Events (API v2.0) | Modified                                                                                                                                      | NTP Servers, DNS Servers, HTTP Proxy, SNMP, SMTP, Remote Syslog, SSL Certificate                                                               |
| VM Network (Subnet)          | Events (API v2.0) | —                                                                                                                                             | —                                                                                                                                              |
| Local User                   | Events (API v2.0) | Create/Delete, Properties change (UI API), Roles change (UI API), Log in/out, Password change                                                 | Username, First Name (UI API), Last Name (UI API), Email (UI API), Language (UI API), Roles (UI API)                                           |
| Authentication Configuration | Events (API v2.0) | Authentication type change                                                                                                                    | Authentication Types                                                                                                                           |

Notes on Host events:

- **Host add:** the "Who" field isn't populated (user not applicable). The IP recorded is the
  Controller VM IP, not the host IP.
- **Host remove:** consists of two events — "Host marked for removal" (has a "Who") and "Host
  deleted" (occurs when the host deletion task completes).
