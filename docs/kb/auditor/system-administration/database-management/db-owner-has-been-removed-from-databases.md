---
description: >-
  Explains how to restore a database owner if Database Content Audit in Netwrix
  Auditor removes the DB_OWNER role from databases.
keywords:
  - DB_OWNER
  - database owner
  - Database Content Audit
  - TRUSTWORTHY
  - Netwrix Auditor
  - SQL Server
  - ALTER AUTHORIZATION
  - database recovery
products:
  - auditor
sidebar_label: DB_Owner has been removed from Databases
tags: []
title: "DB_Owner has been removed from Databases"
knowledge_article_id: kA00g000000H9apCAC
---

# DB_Owner has been removed from Databases

You have configured **Database Content Audit** in Netwrix Auditor for SQL Servers and ran a collection and `DB_OWNER` has been removed from your databases.

---

When the **Database Content Audit** option is selected, on each data collection the program checks if the `TRUSTWORTHY` property is enabled on the monitored databases, and enables the property when it is disabled. Sometimes this process can corrupt the database owner record.

---

1. In Microsoft SQL Server Management Studio, run the following command:

```sql
ALTER AUTHORIZATION ON DATABASE::db_name TO user_name
```

where `db_name` is a name of the corrupted database and `user_name` is the db owner account name.
