---
title: "Dell Data Storage Ports"
description: "Dell Data Storage Ports"
sidebar_position: 10
---

# Dell Data Storage Ports

Review a full list of Dell Data Storage protocols and ports required for Netwrix Auditor for File
Servers.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to local 389 TCP port.

| Port        | Protocol | Source                 | Target         | Purpose                                               |
| ----------- | -------- | ---------------------- | -------------- | ----------------------------------------------------- |
| Dell Isilon |          |                        |                |                                                       |
| 8080        | TCP      | Netwrix Auditor Server | Isilon cluster | HTTPS Used to connect to the Isilon Management Server |
