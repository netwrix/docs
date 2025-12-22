---
title: "Protocols and Ports Required for Monitoring File Servers"
description: "Protocols and Ports Required for Monitoring File Servers"
sidebar_position: 10
---

# Protocols and Ports Required for Monitoring File Servers

Review a full list of protocols and ports required for Netwrix 1Secure for File Servers.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Cloud Agent resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Cloud Agent resides (source),
allow outbound connections to remote 389 TCP port. On domain controllers in your domain (target),
allow inbound connections to local 389 TCP port.

| Port | Protocol | Source | Target | Application protocol |
| ---| ---| ---| ---| ---|
| 389 | TCP/UDP | Netwrix Cloud Agent | Domain Controllers | LDAP <br />DC query <br />Account resolve |
| 135 + Dynamic: 1024 -65535 | TCP | Netwrix Cloud Agent | Monitored computer | Windows Management Instrumentation <br />Firewall configuration <br />Core Service communication |
| 135 | TCP | Netwrix Cloud Agent | Monitored computer | Service Control Manager Remote Protocol Core Service installation |
| 137 | UDP | Netwrix Cloud Agent | Monitored computer | File and Printer Sharing (NetBIOS Name Resolution)|
| 138  | UDP | Netwrix Cloud Agent | Monitored computer | File and Printer Sharing (NetBIOS Datagram Service) |
| 139 | TCP | Netwrix Cloud Agent | Monitored computer | File and Printer Sharing (NetBIOS Session Service) |
| 445 + 139 | TCP | Netwrix Cloud Agent | Monitored computer | SMB 2.0/3.0 |
| 3268 | TCP | Netwrix Cloud Agent | Domain controllers | LDAP <br />Group membership <br /> GC search |
