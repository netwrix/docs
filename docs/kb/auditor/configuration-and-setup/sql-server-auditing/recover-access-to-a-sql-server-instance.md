---
description: >-
  Use PSExec to run SQL Server Management Studio as the Local System account to
  regain sysadmin access and assign another account sysadmin permissions.
keywords:
  - SQL Server
  - SQL Server Management Studio
  - sysadmin
  - PSExec
  - Local System
  - recover access
  - ssms
  - Sysinternals
products:
  - auditor
sidebar_label: Recover access to a SQL Server Instance
tags: []
title: "Recover access to a SQL Server Instance"
knowledge_article_id: kA00g000000H9WRCA0
---

# Recover access to a SQL Server Instance

How to log into SQL Server Management Studio if there is no sysadmin account or you don't know the password.

By default the Local System account on the SQL Server instance has sysadmin rights. To log into SQL Server Management Studio and assign another account sysadmin permissions, follow these steps:

1. Download PSExec: http://technet.microsoft.com/en-us/sysinternals/bb897553.aspx
2. Run the following command in the command prompt, replace the wildcard with the number depending on deployed SQL Server version:
   ```
   PsExec -s -i "C:\Program Files (x86)\Microsoft SQL Server*\Tools\Binn\ManagementStudio\Ssms.exe"
   ```
   (path in the parentheses is the default installation path to SQL Server Management Studio, it might differ if you have installed it elsewhere)
3. SQL Server Management Studio runs; after you click **Connect** you will be connected with sysadmin permissions.

**Note**: SQL Server Management Studio might be installed on a different drive, therefore you should change the path to `Ssms.exe` before running the command.
