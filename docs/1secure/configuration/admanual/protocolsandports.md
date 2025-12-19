---
title: "Protocols and Ports Required for Monitoring Active Directory, Exchange, and Group Policy"
description: "Protocols and Ports Required for Monitoring Active Directory, Exchange, and Group Policy"
sidebar_position: 90
---

# Protocols and Ports Required for Monitoring Active Directory, Exchange, and Group Policy

Review a full list of protocols and ports required for monitoring Active Directory, Exchange, and
Group Policy.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Cloud Agent resides.

- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to local 389 TCP port.

| Port | Protocol | Source | Target | Purpose |
| ---| ---| ---| ---| --- |
| 389 | TCP | Netwrix Cloud Agent | Domain controllers | LDAP Common queries |
| 3268 | TCP | Netwrix Cloud Agent | Domain controllers | LDAP Group membership GC search  |
| 3269 | TCP      | Netwrix Cloud Agent | Domain controllers | Global catalog LDAP over SSL |
| 88 | TCP/UDP  | Netwrix Cloud Agent | Domain controllers | Kerberos authentication                                                                                                           |
| 135 and dynamic range: 1024 -65535 | TCP      | Netwrix Cloud Agent | Domain controllers | Windows Management Instrumentation gpupdate /force                                                                                |
| 445 | TCP | Netwrix Cloud Agent | Domain controllers | SMB 2.0/3.0 Authenticated communication between Netwrix Cloud Agent and domain controllers.                                       |
| 53 | UDP | Netwrix Cloud Agent | Domain controllers | DNS Client |
| 135 and dynamic range: 1024 -65535 | TCP | Netwrix Cloud Agent | Exchange Server |<ul><li>Windows Management Instrumentation</li><li>Retrieve Exchange Server configuration settings</li><li>Run gpupdate /force</li></ul> <br /> gpupdate /force |
| 5985 <br />5986 | TCP | Netwrix Cloud Agent | Exchange Server | <ul><li>Windows Remote Management</li><li>PowerShell connections<ul><li>5985 - for HTTP</li><li>5986 - for HTTPS</li></ul></li></ul>                                        |
