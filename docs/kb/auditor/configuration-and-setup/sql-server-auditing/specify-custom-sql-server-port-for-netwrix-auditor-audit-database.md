---
description: >-
  This article explains how to specify a custom SQL Server port for Netwrix
  Auditor so it can communicate with the Audit Database.
keywords:
  - Netwrix Auditor
  - SQL Server
  - custom port
  - audit database
  - SQL instance
  - database connection
  - port configuration
  - SERVER-SQL
products:
  - auditor
sidebar_label: Specify Custom SQL Server Port for Netwrix Auditor
tags: []
title: "Specify Custom SQL Server Port for Netwrix Auditor Audit Database"
knowledge_article_id: kA04u00000110rCCAQ
---

# Specify Custom SQL Server Port for Netwrix Auditor Audit Database

## Question

How to specify a custom port for Netwrix Auditor to communicate with the SQL Server instance?

## Answer

1. In the main Netwrix Auditor menu, open **Settings**.
2. In the left pane, select **Audit Database** and click **Modify** under **Audit database settings**.
3. Specify your computer and instance name, followed by a comma, and the port in the **SQL Server instance** field:

```
SERVER-SQL\TEST-SQL,14337
```

![Specify custom SQL Server port image]./../0-images/ka04u00000117sv_0EM4u000008LXSz.png)

