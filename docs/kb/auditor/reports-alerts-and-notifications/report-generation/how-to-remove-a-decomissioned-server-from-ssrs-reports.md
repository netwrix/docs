---
description: >-
  Shows how to remove a decommissioned file server from the drop-down menu in
  SQL Report Manager by deleting the server's entry from the Sessions table in
  the NetWrix_File_Server_Change_Reporter database.
keywords:
  - SQL
  - SSRS
  - Report Manager
  - NetWrix
  - NetWrix_File_Server_Change_Reporter
  - Sessions
  - decommissioned server
  - remove server
products:
  - auditor
sidebar_label: How to remove a decomissioned server from SSRS rep
tags: []
title: "How to remove a decomissioned server from SSRS rep"
knowledge_article_id: kA00g000000H9VpCAK
---

# How to remove a decomissioned server from SSRS rep

How to remove a decommissioned file server from the drop down menu in SQL Report Manager?

## Resolution

To remove this server from reports, open MS SQL Management Studio, connect to your SQL server which hosts the NetWrix databases, click on **New query** and execute the following query:

```sql
use NetWrix_File_Server_Change_Reporter
delete from Sessions where sessions.Object = 'decommissioned_server_name';
```
