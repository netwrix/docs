---
description: >-
  Netwrix Auditor for SQL Server may show "System" in the WHO field when it
  cannot find the corresponding SQL Server native auditing event; this article
  explains why that happens and how to verify the change in the SQL Server audit
  logs.
keywords:
  - Netwrix Auditor
  - SQL Server
  - WHO field
  - System
  - native auditing
  - SQL Server Profiler
  - audit log
  - snapshot
  - WHO CHANGED
  - WHEN CHANGED
products:
  - auditor
sidebar_label: WHO changed is showing "System" in Netwrix Auditor
tags: []
title: WHO changed is showing "System" in Netwrix Auditor for SQL Server reports
knowledge_article_id: kA00g000000H9VyCAK
---

# WHO changed is showing "System" in Netwrix Auditor for SQL Server reports

Netwrix Auditor for SQL Server changes have "System" reported in the WHO field.

## Explanation

Netwrix Auditor for SQL Server is using two sources of data for analysis:

- [SQL Server native auditing](http://technet.microsoft.com/en-us/library/dd392015(v=sql.100).aspx) - used for retrieving change details
- SQL Server configuration snapshot - used for determining what has changed since the previous data collection

For example: you have changed the column parameters. This action must be captured by SQL Server native auditing and logged into the auditing log on the SQL Server (with information on Who made the change and When the change was made). Netwrix Auditor for SQL Server will detect that change during the snapshot comparison (the column parameter has been changed) and then search the SQL Server native auditing logs for corresponding events to add WHO CHANGED and WHEN CHANGED information. If the corresponding event cannot be found, the product reports WHO as SYSTEM.

You can always prove the system changes by reviewing the SQL Server native auditing logs. In order to do that please open the SQL Server Profiler application and open SQL traces from `C:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\Log`

Note: the path above may vary depending on the version of SQL Server you have installed.
