---
title: "Oracle Database Ports"
description: "Oracle Database Ports"
sidebar_position: 10
---

# Oracle Database Ports

Review a full list of protocols and ports required for Netwrix Auditor for Oracle Database.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 1521 TCP port. On your Oracle Database Server
(target), allow inbound connections to local 1521 TCP port.

| Port | Protocol | Source                 | Target                 | Purpose                                                                                                                                                                                                                                                                             |
| ---- | -------- | ---------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1521 | TCP      | Netwrix Auditor Server | Oracle Database Server | Allows Oracle client connections to the database via the Oracle's SQL\*Net protocol. You can configure it during installation. Port 1521 is the default client connections port, however, you can configure another TCP port via the Oracle configuration and administration tools. |
| 2484 | TCP      | Netwrix Auditor Server | Oracle Database Server | The default SSL port for secured Oracle client connections to the database via the Oracle's SQL\*Net protocol. Open this port if you need secure connection.                                                                                                                        |
| 53   | UDP      | Netwrix Auditor Server | DNS Server             | DNS Client                                                                                                                                                                                                                                                                          |
