---
description: >-
  After you change the name of the server that hosts the SQL instance for
  Netwrix Auditor databases, the product can no longer connect to SQL Server and
  Change Summary emails may show a connection error. This article shows how to
  update the SQL Server instance name in the product configuration and verify
  SQL settings.
keywords:
  - SQL Server
  - Netwrix Auditor
  - database error
  - Error 26
  - Change Summary
  - SQL instance
  - Report Server URLs
products:
  - auditor
sidebar_label: Changing the name of your SQL Server causes databa
tags: []
title: "Changing the name of your SQL Server causes database related errors"
knowledge_article_id: kA00g000000H9aPCAS
---

# Changing the name of your SQL Server causes database related errors

After changing the name of the server which hosts the SQL Instance for Netwrix Auditor databases you receive the following in Change Summary emails:

```
Error saving AD history to database: A network-related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible. Verify that the instance name is correct and that SQL Server is configured to allow remote connections. (provider: SQL Network Interfaces, error: 26 - Error Locating Server/Instance Specified)
```

---

The server name is not correct in the product configuration anymore as well as in the SQL server configuration.

---

## Resolution

1. Open the **Netwrix Auditor console**
2. Navigate to **Settings** -> **Reports**
3. Click on **Configure** and change the **SQL Server Instance** name to match the new **SQL Server name**.
4. Verify the **Report Server URLs** are still accurate and change them also if necessary and then hit **OK**.
5. Modify the **SQL Configuration** by following the following technet article: http://msdn.microsoft.com/en-us/library/ms143799.aspx
