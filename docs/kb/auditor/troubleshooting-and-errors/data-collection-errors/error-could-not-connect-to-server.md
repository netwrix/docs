---
description: >-
  This article explains causes and resolutions for the "Could not connect to the
  server" error when configuring the Netwrix Auditor Audit Database and provides
  troubleshooting steps for SQL connectivity.
keywords:
  - SQL Server
  - connection error
  - Named Pipes Provider
  - TCP/IP
  - remote connections
  - Netwrix Auditor
  - Audit Database
  - error 40
  - SQL listener
products:
  - auditor
sidebar_label: 'Error: Could Not Connect to Server'
tags: []
title: 'Error: Could Not Connect to Server'
knowledge_article_id: kA00g000000H9Y2CAK
---

# Error: Could Not Connect to Server

## Related Queries

- "We are moving Netwrix Auditor to a new domain/server and getting a connection error on DB restore."
- "We are migrating our Netwrix DB over to a new domain/server. Netwrix Auditor is installed on the new domain/server. SQL DB is coming from SQL 2019, new DB server is SQL 2022 and we are getting a connection error on the SQL listener."

## Symptoms

When configuring the Audit Database settings in Netwrix Auditor, the following error message appears:

```text
Could not connect to the server.
A network-related or instance-specific error occurred while establishing a connection to SQL Server.
The server was not found or was not accessible.
Verify that the instance name is correct and that SQL Server is configured to allow remote connections.
(provider: Named Pipes Provider, error: 40 - Could not open a connection to SQL Server)
```

## Causes

Refer to the list of possible causes for the error:

1. An incorrect SQL Server name is specified in the Audit Database settings.
2. The SQL Server is not configured to allow remote connections.
3. The SQL Server network protocols are disabled.

## Resolutions

1. Verify the SQL Server instance name specified in the Audit Database settings. Refer to the following article for additional information:[Specifying the SQL Server Instance Name](https://docs.netwrix.com/docs/auditor/10_8/admin/settings/auditdatabase)
2. Configure your SQL Server instance to allow remote connections. Learn more in Microsoft's documentation: [Configure remote access (server configuration option) — Use SQL Server Management Studio ⸱ Microsoft](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-remote-access-server-configuration-option?view=sql-server-ver16#SSMSProcedure)
3. Enable the TCP/IP protocol in the SQL Server—refer to the following article for additional information: [Enable TCP/IP Protocol in SQL Server](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/enable_tcpip_protocol_in_sql_server)

> **NOTE:** Alternatively, review the TCP port used for SQL Server communication—learn more in Microsoft's documentation: [Configure SQL Server to listen on a specific TCP port — Assign a TCP/IP port number to the SQL Server Database Engine ⸱ Microsoft](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port?view=sql-server-ver15#assign-a-tcpip-port-number-to-the-sql-server-database-engine). For additional information on setting a custom TCP port in Netwrix Auditor, refer to the following article: [Specify Custom SQL Server Port for Netwrix Auditor Audit Database](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/specify-custom-sql-server-port-for-netwrix-auditor-audit-database).

## Related Articles

- [Specifying the SQL Server Instance Name](https://docs.netwrix.com/docs/auditor/10_8/admin/settings/auditdatabase)
- [Configure remote access (server configuration option) — Use SQL Server Management Studio ⸱ Microsoft](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-remote-access-server-configuration-option?view=sql-server-ver16#SSMSProcedure)
- [Enable TCP/IP Protocol in SQL Server](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/enable_tcpip_protocol_in_sql_server)
- [Configure SQL Server to listen on a specific TCP port — Assign a TCP/IP port number to the SQL Server Database Engine ⸱ Microsoft](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port?view=sql-server-ver15#assign-a-tcpip-port-number-to-the-sql-server-database-engine)
- [Specify Custom SQL Server Port for Netwrix Auditor Audit Database](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/specify-custom-sql-server-port-for-netwrix-auditor-audit-database)
