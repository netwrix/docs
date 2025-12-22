---
description: >-
  Explains possible causes and solutions for the "Warning: The NetwrixSQLCRAudit
  database with audit data does not exist or cannot be accessed" error when a
  Change Summary contains incorrect or missing data.
keywords:
  - Netwrix Auditor
  - NetwrixSQLCRAudit
  - Change Summary
  - audit database
  - SQL Server
  - db_owner
  - SQL Server Management Studio
  - Compatibility level
products:
  - auditor
sidebar_label: 'Warning: "The NetwrixSQLCRAudit database with audit data does not exist or cannot be accessed"'
tags: []
title: 'Warning: "The NetwrixSQLCRAudit database with audit data does not exist or cannot be accessed"'
knowledge_article_id: kA00g000000H9ZjCAK
---

# Warning: "The NetwrixSQLCRAudit database with audit data does not exist or cannot be accessed"

You received a Change Summary containing incorrect data or no data at all. You also see the following message: " **Warning: The NetwrixSQLCRAudit database with audit data does not exist or cannot be accessed** ".

---

Review the possible causes of this issue:

1. The database was not created and does not exist on the monitored server.
2. The default Data Processing Account used to collect data from the monitored SQL Servers was changed.
3. The database is in the recovery mode.
4. The account, which is assigned the database owner role of the monitored database, has no access to the **NetwrixSQLCRAudit** database.

---

Depending on the issue cause, try one of the following solutions:

1. Check if the **NetwrixSQLCRAudit** database exists on the monitored server.
2. Make sure that the account under which Netwrix Auditor is running has enough privileges on the SQL Server. Make sure it is assigned the **db_owner** role.
3. Grant all **db_owners** of the monitored databases rights to write into the **NetWrixSQLCRAudit** database. Alternatively, replace all **db_owner** accounts with the account under which Netwrix Auditor runs.
4. In SQL Server Management Studio, right-click the monitored database and select **Properties**, navigate to the **Options** tab. Make sure that the **Compatibility level** is set to the SQL Server version that is currently running.
