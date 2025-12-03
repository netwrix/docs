---
description: >-
  Explains why SQL Server recovery model for Netwrix Auditor databases can
  change between simple and bulk-logged during State-in-Time snapshot uploads
  and how to handle backups for these databases.
keywords:
  - SQL Server
  - recovery model
  - Netwrix Auditor
  - State-in-Time
  - Long-Term Archive
  - backup
  - .mdf
  - .ldf
  - bulk-logged
  - simple
products:
  - auditor
sidebar_label: Recovery Mode Changes in SQL Databases
tags: []
title: "Recovery Mode Changes in SQL Databases"
knowledge_article_id: kA00g000000H9drCAC
---

# Recovery Mode Changes in SQL Databases

## Questions

1. Why does recovery mode change in SQL databases used in Netwrix Auditor?
2. The backup software solution deployed in our environment does not handle revolving recovery models well. Is it possible to keep them static?

## Answers

1. Netwrix Auditor databases use simple recovery model by default. The simple model ensures optimal performance and efficient SQL Server resources usage, aimed to minimize the transaction log size. Occasionally the recovery model of Netwrix Auditor databases may switch to bulk-logged to revert back to simple. The change happens during the State-in-Time snapshots upload − the bulk-logged recovery model ensures data consistency when uploading larger data, like State-in-Time snapshots. This behavior is intended for the normal product workflow and cannot be changed.

2. Netwrix Auditor stores copied collected data in Long-Term Archive to allow the import to a dedicated database when required. There is no need to back up Netwrix databases − it is recommended to exclude them from the scope of your backup software solution. If backup is absolutely needed, it is recommended to use native SQL Server backup functionality instead of backing up `*.mdf` and `*.ldf` files via the file system. If this is not an option, the only solution would be disabling State-in-Time feature for the monitoring plans that use the corresponding databases.

## Related articles

- [Recovery Models (SQL Server) ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/recovery-models-sql-server?view=sql-server-ver16)
- Reports − State-in-Time Reports ⸱ v10.6
