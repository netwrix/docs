---
description: >-
  Describes how to grant a specific user read-only permissions for SQL Server
  Reporting Services reports and how to assign database read access for
  Netwrix-related databases.
keywords:
  - SQL Server
  - Reporting Services
  - Report Manager
  - read-only
  - permissions
  - db_datareader
  - SQL Server Management Studio
  - Netwrix
products:
  - auditor
sidebar_label: How can I assign a specific user read-only permiss
tags: []
title: "How can I assign a specific user read-only permissions for the SQL Server Reporting Services reports?"
knowledge_article_id: kA00g000000H9TfCAK
---

# How can I assign a specific user read-only permissions for the SQL Server Reporting Services reports?

To grant a user read-only permissions, perform the following steps:

1. Start **Report Manager**.
2. Depending on SQL Server you use:
   - For **SQL Server 2005 (including Express)** proceed with the following:
     1. Select the **Properties** tab and click the **New Role Assignment** button.
     2. Add the user or users group name, check the **Browser** box and click **OK**.
   - For **SQL Server 2008 / 2008 R2 / 2012 (including Express)** proceed with the following:
     1. Click **Site Settings** -> **Security** and select **New Role Assignment**.
     2. In **Group or user name**, specify a Windows domain user or group account in this format: `<domain>\<account>`. Select **System User**, and then click **OK**.
3. Open **SQL Server Management Studio Express** and connect to a server.
4. Navigate to **Security**, right-click **Logins** and select **New Login**.
5. On the **General** screen, select a user or users group.
6. On the **User Mappings** screen, assign all tables related to Netwrix software the `db_datareader` role (for example `NetWrix_FS_Change_Reporter`, or `NetWrix_Event_Log_Manager` etc).

**Note:** If you are still unable to access the **Report Manager** after following this KB, add your user account to the local administrators group on the SQL server.
