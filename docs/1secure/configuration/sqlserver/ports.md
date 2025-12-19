---
title: "SQL Server Ports"
description: "SQL Server Ports"
sidebar_position: 10
---

# SQL Server Ports

Review a full list of protocols and ports required for Netwrix 1Secure for SQL Server.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where the
  Netwrix Cloud Agent resides
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target

Tip for reading the table: on the computer where the Netwrix Cloud Agent resides, allow outbound
connections to the remote 1433 TCP port. On the computer hosting the default SQL Server instance
(target), allow inbound connections to the local 1433 TCP port.

| Port                 | Protocol | Source              | Target                      | Purpose                                                                                                                                  |
| -------------------- | -------- | ------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1433                 | TCP      | Netwrix Cloud Agent | Default SQL Server Instance | Connection to the default named instance server. Port 1433 is the default connections port, however, you can configure another TCP port. |
| 1434                 | UDP      | Netwrix Cloud Agent | SQL Server Browser Service  | Service that helps to resolve named instance servers                                                                                     |
| Dynamic: 1024 -65535 | TCP      | Netwrix Cloud Agent | Named SQL Server Instance   | Connection to the named instance servers                                                                                                 |
