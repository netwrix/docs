---
description: >-
  Explains how to change the trace log path on an audited SQL Server by editing
  the `pathstotracelogs.txt` file in the SQL Server Auditing collector
  directory, with syntax and example.
keywords:
  - SQL Server
  - trace logs
  - pathstotracelogs
  - Netwrix Auditor
  - UNC path
  - sys.fn_trace_getinfo
  - SQLServerInstance
  - SQL trace
products:
  - auditor
sidebar_label: How I can change the trace log path on the audited
tags: []
title: "How I can change the trace log path on the audited SQL Server?"
knowledge_article_id: kA00g000000H9dYCAS
---

# How I can change the trace log path on the audited SQL Server?

To change the log path on the audited SQL Server, perform the following:

1. Navigate to the `SQL Server Auditing` collector directory (by default `C:\Program Files (x86)\Netwrix Auditor\SQL Server Auditing`).
2. Open the `pathstotracelogs.txt` file for editing.
3. Populate this file with the UNC path where you want the trace logs to be stored on your SQL Servers. (You can check the current log path by executing the following command: `SELECT * FROM sys.fn_trace_getinfo(NULL) WHERE property=2`)

Syntax: `SQLServerInstance|UNC path`

For example: `serverinstance|C:\Program Files\Microsoft SQL Server\MSSQL\LOG`

**NOTE**: Replace `SQLServer` with the SQL server machine name. Replace `Instance` with the SQL server instance name.
