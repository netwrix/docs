---
description: >-
  Explains how to control the size of NetwrixSQLCRAudit databases created by
  Netwrix Auditor on SQL Server instances and describes their purpose.
keywords:
  - NetwrixSQLCRAudit
  - Netwrix Auditor
  - SQL Server
  - database size
  - Audit data changes
  - MSSQL Management Studio
  - shrink database
  - delete database
  - audit
products:
  - auditor
sidebar_label: 'How to control the size of NetwrixSQLCRAudit databases on SQL instances? And what it is needed for?'
tags: []
title: >-
  How to control the size of NetwrixSQLCRAudit databases on SQL instances? And
  what it is needed for?
knowledge_article_id: kA00g000000H9WcCAK
---

# How to control the size of NetwrixSQLCRAudit databases on SQL instances? And what it is needed for?

How to control the size of `NetwrixSQLCRAudit` databases on SQL instances and what they are used for.

If you enable the **Audit data changes** option as part of SQL Server audit, Netwrix Auditor creates an additional database — `NetwrixSQLCRAudit` — on each monitored SQL Server. The database is used as a temporary storage of all changes performed to other server databases. In order to control the size of `NetwrixSQLCRAudit` databases, the following two options are suggested:

1. Disable the **Audit data changes** option if you are not interested in content changes, and delete the `NetwrixSQLCRAudit` database(s) from the SQL Server(s).
2. Shrink the `NetwrixSQLCRAudit` database(s) via MSSQL Management Studio.

For additional information about how Netwrix Auditor for SQL Server works, please refer to the following KB: [How Netwrix Auditor for SQL Server Collects Data](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/how-netwrix-auditor-for-sql-server-collects-data)
