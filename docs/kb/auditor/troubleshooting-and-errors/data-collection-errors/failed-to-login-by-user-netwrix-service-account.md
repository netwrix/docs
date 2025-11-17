---
description: >-
  You receive the "Failed to login by user: &lt;Netwrix service account&gt;" error
  when the Netwrix service account lacks permissions on the SQL database. This
  article shows how to grant the account the required sysadmin role in SQL
  Server Management Studio.
keywords:
  - Netwrix
  - service account
  - SQL Server
  - login failed
  - sysadmin
  - permissions
  - SQL Server Management Studio
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'Failed to login by user: &lt;netwrix service account&gt;'
tags: []
title: 'Failed to login by user: `<netwrix service account>`'
knowledge_article_id: kA00g000000H9ZYCA0
---

# Failed to login by user: `&lt;netwrix service account&gt;`

You receive the error message "Failed to login by user: `<Netwrix service account>`".

---

The Netwrix service account does not have access to login/upload data to the SQL database.

---

## Resolution

Login to SQL Server Management Studio for your SQL instance and perform the following steps:

1. Select **Security**
2. Select **New Login**

<!-- Image not available: ka04u000000HcSZ_0EM700000006XV3.png -->
*Screenshot: SQL Server Management Studio - Select Security > New Login*

3. Enter the netwrix service account into the **Login name** field
4. Select **Server Roles**

<!-- Image not available: ka04u000000HcSZ_0EM700000006XV8.png -->
*Screenshot: Enter Netwrix service account and select Server Roles*

Check **sysadmin** role to give full access to the netwrix service account

<!-- Image not available: ka04u000000HcSZ_0EM700000006XVD.png -->
*Screenshot: Check sysadmin role for the service account*
