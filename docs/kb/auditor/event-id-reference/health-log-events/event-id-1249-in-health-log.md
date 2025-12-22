---
description: >-
  Explains Event ID 1249 in the Health Log for Netwrix Auditor SharePoint
  monitoring plans and provides causes and step-by-step resolutions when audit
  data cannot be written to the SQL database.
keywords:
  - Event ID 1249
  - Health Log
  - Audit Database
  - SQL Server
  - permissions
  - SharePoint
  - Netwrix Auditor
  - Data Processing Account
  - ping
products:
  - auditor
sidebar_label: Event ID 1249 in Health Log
tags: []
title: "Event ID 1249 in Health Log"
knowledge_article_id: kA00g000000H9cyCAC
---

# Event ID 1249 in Health Log

## Symptoms

One of the following error messages under Event ID 1249 is prompted in the **Health Log** for your SharePoint monitoring plan:

```
The following error occurred when trying to write audit data to the SQL database:
The database is unreachable.
```

```
The following error occurred when trying to write audit data to the SQL database:
Data Processing Account has insufficient permissions to write data to the database.
```

## Causes

1. The Audit Database is unreachable.
2. The Audit Database account has insufficient permissions to write data to the database.

## Resolutions

- Cause #1 − Verify the SQL Server instance is reachable and the database is accessible.

  1. Open Command Prompt. Ping the SQL server the audit data is stored:
  
     ```bash
     ping %SQL_server_IP_or_fqdn%
     ```
  2. In the SQL server, start SQL Server Management Studio, connect to the instance, and make sure the Audit Database exists.
  
     > **NOTE:** To establish the name of the Audit Database, click **Edit settings** in the monitoring plan view > review the database name in the **Audit Database** tab.

- Cause #2 − Verify the Data Collecting Account has the correct permissions to write to the Audit Database. Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 Database − Configure Default SQL Server Settings · v10.6).

## Related articles

- Audit Database − Configure Default SQL Server Settings · v10.6  
  https://docs.netwrix.com/docs/auditor/10_8
