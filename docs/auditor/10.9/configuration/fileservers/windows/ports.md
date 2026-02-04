---
title: "Windows File Server Ports"
description: "Windows File Server Ports"
sidebar_position: 10
---

# Windows File Server Ports

Review a full list of Windows File Server protocols and ports required for Netwrix Auditor for File
Servers.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to local 389 TCP port.

| Port                       | Protocol | Source                 | Target             | Purpose                                                                                                     |
| -------------------------- | -------- | ---------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------- |
| Windows File Servers       |          |                        |                    |                                                                                                             |
| 389                        | TCP/UDP  | Netwrix Auditor Server | Domain controllers | LDAP DC query Account resolve                                                                               |
| 135 + Dynamic: 1024 -65535 | TCP      | Netwrix Auditor Server | Monitored computer | Windows Management Instrumentation Firewall configuration Network Traffic Compression Service communication |
| 135                        | TCP      | Netwrix Auditor Server | Monitored computer | Service Control Manager Remote Protocol (Network Traffic Compression Service) installation                  |
| 137                        | UDP      | Netwrix Auditor Server | Monitored computer | File and Printer Sharing (NetBIOS Name Resolution)                                                          |
| 138                        | UDP      | Netwrix Auditor Server | Monitored computer | File and Printer Sharing (NetBIOS Datagram Service)                                                         |
| 139                        | TCP      | Netwrix Auditor Server | Monitored computer | File and Printer Sharing (NetBIOS Session Service)                                                          |
| 445                        | TCP      | Netwrix Auditor Server | Monitored computer | SMB 2.0/3.0                                                                                                 |
| 3268                       | TCP      | Netwrix Auditor Server | Domain controllers | LDAP Group membership GC search                                                                             |

## Configure Windows Firewall Inbound Connection Rules

You can also configure Windows Firewall settings through Group Policy settings. To do this, edit the
GPO affecting your firewall settings. Navigate to Computer Configuration > Administrative
Templates > Network >Network Connections > Windows Firewall, select Domain Profile or Standard
Profile. Then, enable the Allow inbound remote administration exception.

**Step 1 –** On each audited server, navigate to **Start** > **Control Panel** and select **Windows
Firewall**.

**Step 2 –** In the Help Protect your computer with Windows Firewall page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select **Inbound Rules** on the
left.

![manualconfig_nla_inbound_connections2016](/images/1secure/configuration/logonactivity/manualconfig_nla_inbound_connections2016.webp)

**Step 4 –** Enable the following inbound connection rules:

- Remote Event Log Management (NP-In)
- Remote Event Log Management (RPC)
- Remote Event Log Management (RPC-EPMAP)
- Windows Management Instrumentation (ASync-In)
- Windows Management Instrumentation (DCOM-In)
- Windows Management Instrumentation (WMI-In)
- Network Discovery (NB-Name-In)
- File and Printer Sharing (NB-Name-In)
- File and Printer Sharing (Echo Request - ICMPv4-In)
- File and Printer Sharing (Echo Request - ICMPv6-In)
- Remote Service Management (NP-In)
- Remote Service Management (RPC)
- Performance Logs and Alerts (DCOM-In)
- Performance Logs and Alerts (Tcp-In)
