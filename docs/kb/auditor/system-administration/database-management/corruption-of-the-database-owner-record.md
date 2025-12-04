---
description: >-
  If you cannot access a database and receive "invalid owner" errors, the
  database owner record may be corrupted. This article explains why Netwrix
  Auditor can cause this and how to fix it with an ALTER AUTHORIZATION command.
keywords:
  - database owner
  - invalid owner
  - TRUSTWORTHY
  - ALTER AUTHORIZATION
  - Netwrix Auditor
  - SQL Server
  - database corruption
  - db owner
products:
  - auditor
sidebar_label: Corruption of the database owner record
tags: []
title: "Corruption of the database owner record"
knowledge_article_id: kA00g000000H9bZCAS
---

# Corruption of the database owner record

Database cannot be accessed and you receive an error messages containing the `invalid owner` text.

## Cause

When the **Database Content Audit** option is selected, on each data collection Netwrix Auditor checks if the `TRUSTWORTHY` property is enabled on the monitored databases, and enables the property when it is disabled. Sometimes this process can corrupt the database owner record.

## Resolution

1. In Microsoft SQL Server Management Studio, run the following command:
   ```
   ALTER AUTHORIZATION ON DATABASE::db_name TO user_name
   ```
   - Replace `db_name` with the name of the corrupted database.
   - Replace `user_name` with the database owner account name.
