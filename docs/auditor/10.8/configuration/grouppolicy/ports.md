---
title: "Group Policy Ports"
description: "Group Policy Ports"
sidebar_position: 10
---

# Group Policy Ports

Review a full list of protocols and ports required for monitoring Active Directory, Exchange, and
Group Policy.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to the local 389 TCP port.

| Port                               | Protocol | Source                 | Target             | Purpose                                                                                        |
| ---------------------------------- | -------- | ---------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| 389                                | TCP/UDP  | Netwrix Auditor Server | Domain controllers | LDAP Common queries                                                                            |
| 3268                               | TCP      | Netwrix Auditor Server | Domain controllers | LDAP Group membership GC search                                                                |
| 3269                               | TCP      | Netwrix Auditor Server | Domain controllers | Global catalog LDAP over SSL                                                                   |
| 88                                 | TCP/UDP  | Netwrix Auditor Server | Domain controllers | Kerberos authentication                                                                        |
| 135 and dynamic range: 1024 -65535 | TCP      | Netwrix Auditor Server | Domain controllers | Windows Management Instrumentation. `gpupdate /force `                                         |
| 445                                | TCP      | Netwrix Auditor Server | Domain controllers | SMB 2.0/3.0 Authenticated communication between Netwrix Auditor Server and domain controllers. |
| 53                                 | UDP      | Netwrix Auditor Server | DNS Server         | DNS Client                                                                                     |
