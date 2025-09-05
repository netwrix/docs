---
title: "Password Expiration Notifier Ports"
description: "Password Expiration Notifier Ports"
sidebar_position: 10
---

# Password Expiration Notifier Ports

Review a protocol and port required for Netwrix Auditor Password Expiration Notifier.

**NOTE:** Tip for reading the table – On the compuer where the Netwrix Auditor server resides
(source), allow outbound connections to remote 389 the TCP port. On domain controllers in your
domain (target), allow inbound connections to the local 389 TCP port.

| Port                         | Protocol | Source                 | Target             | Purpose             |
| ---------------------------- | -------- | ---------------------- | ------------------ | ------------------- |
| Password Expiration Notifier |          |                        |                    |                     |
| 389                          | TCP      | Netwrix Auditor Server | Domain controllers | LDAP Common queries |
