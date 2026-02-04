---
title: "AD FS Ports"
description: "AD FS Ports"
sidebar_position: 10
---

# AD FS Ports

Review a full list of protocols and ports required for monitoring logon activities performed using
Active Directory Federation Services (AD FS).

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to local 389 TCP port.

| Port                             | Protocol | Source                 | Target             | Purpose                                                                 |
| -------------------------------- | -------- | ---------------------- | ------------------ | ----------------------------------------------------------------------- |
| 389                              | TCP      | Netwrix Auditor Server | Domain controllers | LDAP DC query Account resolve                                           |
| 53                               | TCP      | Netwrix Auditor Server | DNS Server         | DNS Client                                                              |
| 135 + Dynamic: 1024 -65535       | TCP      | Netwrix Auditor Server | Domain controllers | Windows Management Instrumentation Firewall configuration               |
| 135                              | TCP      | Netwrix Auditor Server | Domain controllers | Service Control Manager Remote Protocol (RPC) Core Service installation |
| 137 through 139                  | UDP      | Netwrix Auditor Server | Domain controllers | Service Control Manager Remote Protocol (RPC) Core Service installation |
| 445                              | TCP      | Netwrix Auditor Server | Domain controllers | SMB 2.0/3.0                                                             |
| 5985 (for HTTP) 5986 (for HTTPS) | TCP      | Netwrix Auditor Server | AD FS servers      | Windows Remote Management (WinRM)                                       |
