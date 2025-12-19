---
title: "Integration API Ports"
description: "Integration API Ports"
sidebar_position: 20
---

# Integration API Ports

Review a full list of protocols and ports required for add-ons or any queries leveraging Netwrix
Auditor Integration API.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

On any computer you plan to host the add-on (source), allow outbound connections to remote 9699 TCP
port. On the computer where Netwrix Auditor Server resides (target), allow inbound connections to
local 9699 TCP port.

| Add-on                                                                                                 | Port    | Protocol     | Source                | Target                       | Purpose                                                                                                                         |
| ------------------------------------------------------------------------------------------------------ | ------- | ------------ | --------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| All add-ons or queries                                                                                 | 9699    | TCP          | Script or query host  | Netwrix Auditor  Server      | The default Netwrix Auditor Integration API port. However, you can configure another TCP port for that purpose.                 |
| AlienVault USM                                                                                         | 53      | UDP/TCP      | Script host           | DNS Server                   | DNS Client                                                                                                                      |
| Amazon Web Services                                                                                    | 443     | TCP          | Script host           | Amazon Web Services          | —                                                                                                                               |
| 53                                                                                                     | UDP/TCP | Script host  | DNS server            | DNS Client                   |                                                                                                                                 |
| - Event Log Export - IBM QRadar - Intel Security - LogRhythm - SolarWinds Log & Event Manager - Splunk | 53      | UDP/TCP      | Script host           | DNS server                   | DNS Client                                                                                                                      |
| CEF Export                                                                                             | 53      | UDP/TCP      | Script host           | DNS server                   | DNS Client                                                                                                                      |
| - Cisco Network Devices - Privileged User Monitoring - General Linux Syslog                            | 514     | UDP          | Cisco network devices | Service host                 | The default port for Cisco network devices remote Syslog logging. However, you can configure another UDP port for that purpose. |
| 53                                                                                                     | UDP     | Service host | DNS server            | DNS Client                   |                                                                                                                                 |
| HPE ArcSight                                                                                           | 515     | TCP          | Script host           | ArcSight Logger              | —                                                                                                                               |
| 514                                                                                                    | UDP     | Script host  | ArcSight Logger       | —                            |                                                                                                                                 |
| 53                                                                                                     | UDP/TCP | Script host  | DNS server            | DNS Client                   |                                                                                                                                 |
| 53                                                                                                     | UDP     | Script host  | DNS server            | DNS Client                   |                                                                                                                                 |
| RADIUS Server                                                                                          | 139     | TCP          | Script host           | RADIUS server                | RPC/NP Eventlog                                                                                                                 |
| 445                                                                                                    | TCP     | Script host  | RADIUS server         | RPC/NP Eventlog              |                                                                                                                                 |
| 137                                                                                                    | UDP     | Script host  | RADIUS server         | RPC/NP Eventlog              |                                                                                                                                 |
| 138                                                                                                    | UDP     | Script host  | RADIUS server         | RPC/NP Eventlog              |                                                                                                                                 |
| 135                                                                                                    | TCP     | Script host  | RADIUS server         | RPC Endpoint Mapper Eventlog |                                                                                                                                 |
| 1024 – 65535 (Dynamically assigned)                                                                    | TCP     | Script host  | RADIUS server         | RPC Eventlog                 |                                                                                                                                 |
| 53                                                                                                     | UDP/TCP | Script host  | DNS server            | DNS Client                   |                                                                                                                                 |
