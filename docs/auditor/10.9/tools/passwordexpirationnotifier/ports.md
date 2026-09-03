---
title: "Password Expiration Notifier Ports"
description: "Password Expiration Notifier Ports"
sidebar_position: 10
---

# Password Expiration Notifier Ports

Review a protocol and port required for Netwrix Auditor Password Expiration Notifier.

:::note
Tip for reading the table – On the computer where the Netwrix Auditor server resides (source), allow outbound connections to remote TCP port 389. On domain controllers in your domain (target), allow inbound connections to local TCP port 389.
:::

| Port                         | Protocol | Source                 | Target             | Purpose             |
| ---------------------------- | -------- | ---------------------- | ------------------ | ------------------- |
| Password Expiration Notifier |          |                        |                    |                     |
| 389                          | TCP      | Netwrix Auditor Server | Domain controllers | LDAP Common queries |
