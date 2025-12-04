---
description: >-
  When you perform bulk inserts, not all modified rows may appear in Database
  content audit reports. Change the SQL Server data source setting that defines
  how many row changes per SQL transaction are included in a report (default is
  `10`).
keywords:
  - SQL Server
  - bulk insert
  - transactions
  - Database content audit
  - data source settings
  - change reporting
  - rows per transaction
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Not all changes are included in reports for Databa
tags: []
title: "Not all changes are included in reports for Database content audit"
knowledge_article_id: kA00g000000H9cpCAC
---

# Not all changes are included in reports for Database content audit

When you perform bulk inserts, not all modified rows are reported. How do you change this?

---

In the **SQL Server data source settings** there is a value that defines the number of data changes per SQL transaction to be included in a report. By default it is set to `10`.

![sql_transactions_9]./../0-images/ka04u00000116R6_0EM0g000000hUdK.png)

