---
title: "VMware Ports"
description: "VMware Ports"
sidebar_position: 10
---

# VMware Ports

Review a full list of protocols and ports required for Netwrix Auditor for VMware.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 443 TCP port. On the VMware server (target), allow
inbound connections to local 443 TCP port.

| Port | Protocol | Source                 | Target | Purpose                                    |
| ---- | -------- | ---------------------- | ------ | ------------------------------------------ |
| 443  | TCP      | Netwrix Auditor Server | VMware | HTTPS Connection to VMware VSphere via SDK |
