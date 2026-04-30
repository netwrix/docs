---
title: "SQL Server Ports"
description: "SQL Server Ports"
sidebar_position: 10
---

# SQL Server Ports

Review a full list of protocols and ports required for Netwrix Auditor for SQL Server.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 1433 TCP port. On the computer hosting default SQL
Server instance (target), allow inbound connections to local 1433 TCP port.

| Port                 | Protocol | Source                 | Target                      | Purpose                                                                                                                                  |
| -------------------- | -------- | ---------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1433                 | TCP      | Netwrix Auditor Server | Default SQL Server Instance | Connection to the default named instance server. Port 1433 is the default connections port, however, you can configure another TCP port. |
| 1434                 | UDP      | Netwrix Auditor Server | SQL Server Browser Service  | Service which helps resolving named instance servers                                                                                     |
| Dynamic: 1024 -65535 | TCP      | Netwrix Auditor Server | Named SQL Server Instance   | Connection to the named instance servers                                                                                                 |
