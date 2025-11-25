---
description: >-
  This article describes causes and resolutions for the "Error validating
  settings. Check your SQL Server settings." message that can occur when you
  configure the Audit Database in Netwrix Auditor.
keywords:
  - SQL Server
  - Audit Database
  - connection error
  - DBNETLIB
  - Netwrix Auditor
  - TCP/IP
  - remote connections
  - SQL listener
  - SQL port
products:
  - auditor
sidebar_label: 'Error: Check Your SQL Server Settings in Audit Dat'
tags: []
title: 'Error: Check Your SQL Server Settings in Audit Database Settings'
knowledge_article_id: kA0Qk0000001D85KAE
---

# Error: Check Your SQL Server Settings in Audit Database Settings

## Related Queries

- "We are moving Netwrix Auditor to a new domain/server and getting a connection error on DB restore."
- "We are migrating our Netwrix DB over to a new domain/server. Netwrix Auditor is installed on the new domain/server. SQL DB is coming from SQL 2019, new DB server is SQL 2022 and we are getting a connection error on the SQL listener."

## Symptoms

Netwrix Auditor prompts one of the following error messages when you set up the Audit Database:

```text
Error validating settings. Check your SQL Server settings.
The network location cannot be reached. For information about network troubleshooting, see Windows Help
```

```text
Error validating settings. Check your SQL Server settings.
SQL Server error occurred (17, [DBNETLIB][ConnectionOpen (Connect()).] SQL Server does not exist or access denied.)
```

## Causes

Refer to the list of possible causes for the error:

1. An incorrect SQL Server name is specified in the Audit Database settings.
2. The SQL Server is not configured to allow remote connections.
3. The SQL Server network protocols are disabled.

## Resolutions

1. Verify the SQL Server instance name specified in the Audit Database settings. Refer to the following article for additional information: [Specifying the SQL Server Instance Name](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA0Qk0000001D01KAE.html).
2. Configure your SQL Server instance to allow remote connections. Learn more in [Configure remote access (server configuration option) — Use SQL Server Management Studio ⸱ Microsoft 🧩](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-remote-access-server-configuration-option?view=sql-server-ver16#SSMSProcedure).
3. Enable the TCP/IP protocol in the SQL Server—refer to the following article for additional information: Enable TCP/IP Protocol in SQL Server.

> **NOTE:** Alternatively, review the TCP port used for SQL Server communication—learn more in [Configure SQL Server to listen on a specific TCP port — Assign a TCP/IP port number to the SQL Server Database Engine ⸱ Microsoft 🧩](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port?view=sql-server-ver15#assign-a-tcpip-port-number-to-the-sql-server-database-engine). For additional information on setting a custom TCP port in Netwrix Auditor, refer to the following article: [Specify Custom SQL Server Port for Netwrix Auditor Audit Database](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/specify-custom-sql-server-port-for-netwrix-auditor-audit-database).

## Related Articles

- [Specifying the SQL Server Instance Name](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA0Qk0000001D01KAE.html)
- [Configure remote access (server configuration option) — Use SQL Server Management Studio ⸱ Microsoft 🧩](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-remote-access-server-configuration-option?view=sql-server-ver16#SSMSProcedure)
- Enable TCP/IP Protocol in SQL Server
- [Configure SQL Server to listen on a specific TCP port — Assign a TCP/IP port number to the SQL Server Database Engine ⸱ Microsoft 🧩](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port?view=sql-server-ver15#assign-a-tcpip-port-number-to-the-sql-server-database-engine)
- [Specify Custom SQL Server Port for Netwrix Auditor Audit Database](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/specify-custom-sql-server-port-for-netwrix-auditor-audit-database)




