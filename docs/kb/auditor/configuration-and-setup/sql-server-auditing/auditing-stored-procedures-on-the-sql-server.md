---
description: >-
  Shows how to enable auditing of the "Date Modified" attribute for stored
  procedures in Netwrix Auditor for SQL Server so you can track when procedures
  are modified. It explains which file to edit and what lines to add or comment.
keywords:
  - SQL Server
  - stored procedures
  - auditing
  - Date Modified
  - Netwrix Auditor
  - Omitproplist.txt
  - SQL Server Auditing
  - collection
products:
  - auditor
sidebar_label: Auditing stored procedures on the SQL Server
tags: []
title: "Auditing stored procedures on the SQL Server"
knowledge_article_id: kA00g000000H9eQCAS
---

# Auditing stored procedures on the SQL Server

Netwrix Auditor for SQL Server `reports` creation and `deletion` of the stored procedures by default. However, there is no way to report the `modification` of the stored procedure, e.g. modification of the stored procedure's query. You can adjust Netwrix Auditor configuration to enable auditing of the **"Date Modified"** attribute for stored procedures. This allows you to track the time of the modifications.

**NOTE:** in that case, Netwrix will only report on the **"Date Modified"** attribute. No additional details about the modification performed will be included in the report.

Follow the steps below to enable auditing of the **"Date Modified"** attribute for stored procedure objects:

1. Open `Omitproplist.txt` file located in `%Netwrix Installation folder%\SQL Server Auditing` (default path `C:\Program Files (x86)\Netwrix Auditor\SQL Server Auditing`)
2. Comment `*.Date Modified.*` line by putting the `#` sign in front of the `*` sign. The line should look like this: `#*.Date Modified.*`
3. Exclude **"Date Modified"** attribute for other SQL Server objects by adding the following lines to the same file:

```text
Application Role.Date Modified.*
Constraints.Date Modified.*
Credential.Date Modified.*
Database.Date Modified.*
Database Role.Date Modified.*
Functions.Date Modified.*
Jobs.Date Modified.*
Jobs Schedules.Date Modified.*
Keys.Date Modified.*
Login.Date Modified.*
Schema.Date Modified.*
Server Instance.Date Modified.*
Server Role.Date Modified.*
#Stored Procedure.Date Modified.*
Table.Date Modified.*
Triggers.Date Modified.*
User.Date Modified.*
View.Date Modified.*
```

**You can copy the lines above to the file.**

Starting from the next scheduled collection Netwrix Auditor for SQL Server will collect data about changes made to the **"Date Modified"** attribute for stored procedure objects.
