---
title: "Exchange Ports"
description: "Exchange Ports"
sidebar_position: 10
---

# Exchange Ports

Review a full list of protocols and ports required for monitoring Exchange.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 389 TCP port. On domain controllers in your domain
(target), allow inbound connections to the local 389 TCP port.

| Port                               | Protocol | Source                 | Target          | Purpose                                                                                                                |
| ---------------------------------- | -------- | ---------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 135 and dynamic range: 1024 -65535 | TCP      | Netwrix Auditor Server | Exchange Server | - Windows Management Instrumentation. - Retrieve Exchange Server configuration settings\* - Run `gpupdate /force   `\* |
| 5985 5986                          | TCP      | Netwrix Auditor Server | Exchange server | - Windows Remote Management. - PowerShell connections: - 5985 - for HTTP - 5986 - for HTTPS                            |
| 80 443                             | TCP      | Netwrix Auditor Server | Exchange server | PowerShell connections                                                                                                 |

\* - for Exchange 2010 only
