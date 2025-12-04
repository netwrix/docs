---
description: >-
  Shows how to exclude Backup events from Netwrix Auditor for SQL Server reports
  by editing the omitobjlist.txt file in the product installation folder.
keywords:
  - Netwrix Auditor
  - SQL Server
  - backup events
  - omitobjlist.txt
  - exclude events
  - SQL Server Auditing
  - reports
  - auditing
products:
  - auditor
sidebar_label: How to exclude Backup events from the SQL Server C
tags: []
title: "How to exclude Backup events from the SQL Server Change Reporter reports?"
knowledge_article_id: kA00g000000H9UHCA0
---

# How to exclude Backup events from the Netwrix Auditor for SQL Server reports?

To exclude Backup events from the Netwrix Auditor for SQL Servers reports, perform the following steps:

1. Open the program installation folder (`C:\Program Files (x86)\Netwrix Auditor\SQL Server Auditing` by default).
2. Open the `omitobjlist.txt` file for editing.
3. Add the line called `Backup` (without quotes) at the end of the file and save it.
