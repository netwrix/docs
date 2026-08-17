---
title: "Dell Isilon/PowerScale Ports"
description: "Dell Isilon/PowerScale Ports"
sidebar_position: 10
---

# Dell Isilon/PowerScale Ports

Review a full list of protocols and ports required for Netwrix Auditor for Dell Isilon/PowerScale:

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

| Port | Protocol | Source                 | Target                    | Purpose                                                          |
| ---- | -------- | ---------------------- | ------------------------- | ---------------------------------------------------------------- |
| 8080 | TCP      | Netwrix Auditor Server | Isilon/PowerScale cluster | HTTPS Used to connect to the Isilon/PowerScale Management Server |
