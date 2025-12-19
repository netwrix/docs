---
description: >-
  Explains how to resolve the "A transport-level error has occurred when sending
  the request to the server" error that appears when assigning users read access
  to view reports after using the Clear all database entries functionality.
keywords:
  - transport-level error
  - SQL Database Access
  - NetWrix_ReportViewer_ReadOnly
  - NetWrix_Windows_Server_Change_Reporter
  - Clear all database entries
  - report permissions
  - Netwrix
  - database error
products:
  - auditor
sidebar_label: 'Error: A transport-level error has occurred when s'
tags: []
title: "Error: A transport-level error has occurred when sending the request to the server"
knowledge_article_id: kA00g000000H9bvCAC
---

# Error: A transport-level error has occurred when sending the request to the server

You see this error when assigning users read access permissions to view reports.

## Cause

This error occurs because the Clear all database entries functionality has been applied. It allows you to clear all audit data and the information on user access permissions.

## Resolution

To resolve the issue, do the following:

1. Click **OK** on the error message.
2. Close the **SQL Database Access** dialog.

Note: If you proceed with the user assignment without closing the **SQL Database Access** dialog, the following error message will be displayed:

```text
The role 'NetWrix_ReportViewer_ReadOnly' does not exist in the current database.
Changed database context to 'NetWrix_Windows_Server_Change_Reporter'.
```

3. Click the **Assign** link and specify the users who can access the database.
