---
description: >-
  Instructions to manually enable advanced SQL tracing by deploying the sqlcr
  stored procedures to the audited SQL Server using SQL Server Management Studio
  (SSMS).
keywords:
  - advanced SQL tracing
  - sqlcr
  - SQL Server
  - Netwrix Auditor
  - SSMS
  - sql tracing
  - stored procedures
  - auditing
products:
  - auditor
sidebar_label: How to manually enable advanced SQL tracing
tags: []
title: "How to manually enable advanced SQL tracing"
knowledge_article_id: kA04u0000000HFBCA2
---

# How to manually enable advanced SQL tracing

To manually enable advanced SQL tracing, follow these simple steps:

1. On the Netwrix Auditor host, navigate to `C:\Program Files(x86)\Netwrix Auditor\SQL Server Auditing`
2. Find the file `sqlcr_audit_db.sql`
3. The set of files here, starting with `sqlcr_` are tied to the monitoring plan configuration.
   - Follow the table below to determine which files are needed and then continue with the steps.
4. Copy this file to the SQL Server host
5. Launch **SQL Server Management Studio (SSMS)** and connect to the audited SQL Server
6. Drag and drop the `sqlcr_audit_db.sql` file into the open blue space right of the **Object Explorer** window
7. After the text from the stored procedure appears, click the **Execute** button on the tool bar at the top of the screen.

| Auditing Configuration Changes | `sqlcr_audit_db.sql` |
|---|---|
| Failed SQL and Windows logons | `sqlcr_sp_logon_failed.sql` |
| Successful SQL logons | `sqlcr_sp_logon_success.sql` |
| *If all logon boxes are checked* | `sqlcr_sp_logon_success_failed.sql` |
|  |  |
