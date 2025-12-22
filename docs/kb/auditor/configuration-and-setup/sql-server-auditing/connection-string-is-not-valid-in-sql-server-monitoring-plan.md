---
description: >-
  This article explains how to resolve the "Connection string is not valid"
  error in a SQL Server monitoring plan in Netwrix Auditor by correcting the SQL
  Server instance name in the monitoring plan item. It provides steps to review
  and edit the monitored instance and shows default vs named instance formats.
keywords:
  - SQL Server
  - monitoring plan
  - connection string
  - error 25
  - Netwrix Auditor
  - instance name
  - MSSQLSERVER
  - FQDN
  - NetBIOS
products:
  - auditor
sidebar_label: Connection String Is Not Valid in SQL Server Monit
tags: []
title: "Connection String Is Not Valid in SQL Server Monitoring Plan"
knowledge_article_id: kA04u000000wnkxCAA
---

# Connection String Is Not Valid in SQL Server Monitoring Plan

## Symptom

The following error is prompted in Health Log for your SQL Server monitoring plan in Netwrix Auditor:

```
Netwrix Auditor State-in-Time error: 
Monitoring plan: %SQL_monitoring_plan_name%. 
Item: %SQL_server% 
The following error occurred during state-in-time operation snapshot collection:
A network-related or instance-specific error occurred while establishing a connection to SQL Server.
The server was not found or was not accessible.
Verify that the instance name is correct and that SQL Server is configured to allow remote connections.
(provider: SQL Network Interfaces, error: 25 - Connection string is not valid)
```

## Cause

The SQL Server instance name was specified incorrectly in the affected monitoring plan item.

## Resolution

Review the affected item in your SQL Server monitoring plan:

1. In the main Netwrix Auditor menu, click **Monitoring Plans**.
2. Select the affected SQL Server monitoring plan and click **Edit**. Refer to the error message to establish the affected monitoring plan name.
3. Select the affected instance and click **Edit item**. Refer to the error message to establish the affected item name.
4. Review the instance name specified:
   - For a default SQL instance name (`MSSQLSERVER`), only specify the server FQDN or NetBIOS name. See the example for a reference.

     ![Default instance example]./../0-images/ka04u000000wvzg_0EM4u000008pVor.png)

   - For a named SQL instance, specify `FQDN\Instance_name`.

     ![Named instance example]./../0-images/ka04u000000wvzg_0EM4u000008pVow.png)

5. Once the changes are introduced, click **Save & Close**.



