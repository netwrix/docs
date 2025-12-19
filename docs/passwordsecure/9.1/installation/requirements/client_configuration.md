---
title: "Client configuration"
description: "Client configuration"
sidebar_position: 30
---

# Client configuration

#### System Components

NOTE: Our Windows Application (Win App) is not available for MSP-customers!

| Attribute                   | Minimum                             | Recommended            |
| --------------------------- | ----------------------------------- | ---------------------- |
| OS                          | Win 10 21H2 19044 Win 11 21H2 22000 | Win 11 23H2 22631.3235 |
| Architecture                | x64                                 | x64                    |
| CPU [Cores]                 | 4                                   | 8                      |
| RAM [GB]                    | 8                                   | 16                     |
| Disk Space [GB]             | 50                                  | 100                    |
| MS .NET Framework           | 4.8                                 | 4.8.1                  |
| RDP-Version (if applicable) | 10                                  | 12                     |

#### Required Configuration

- Mandatory ports/firewall rules  
  **a**. Port 11011 TCP for communication with the application server (outgoing)  
  **b**. Port 11016 TCP for WebSocket communication with the server (outgoing)

- WAN/VPN connection to application server: MTU-size = 1500 bytes (1472 bytes + 28 bytes for the
  header)
