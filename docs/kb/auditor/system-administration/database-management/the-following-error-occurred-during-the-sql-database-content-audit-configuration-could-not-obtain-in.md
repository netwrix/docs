---
description: >-
  Explains how to resolve the SQL database content audit error "Could not obtain
  information about Windows NT group/user '......', error code 0x5" by granting
  the Netwrix Data Processing Account appropriate permissions on the SQL Server
  and restarting services.
keywords:
  - SQL error 0x5
  - Windows NT group
  - Netwrix
  - Data Processing Account
  - sysadmin
  - SQL Server Management Studio
  - SQL Agent
  - Reporting Services
products:
  - auditor
sidebar_label: 'The following error occurred during the SQL database content audit configuration'
tags: []
title: 'The following error occurred during the SQL database content audit configuration: Could not obtain information about Windows NT group/user "......", error code 0x5.'
knowledge_article_id: kA00g000000H9ZtCAK
---

# The following error occurred during the SQL database content audit configuration: Could not obtain information about Windows NT group/user ''......'', error code 0x5.

You are getting the following error message in the summary reports and the product: "The following error occurred during the SQL database content audit configuration: Could not obtain information about Windows NT group/user '......', error code 0x5."

---

There is a permission issue with the Netwrix Data Processing Account.

---

In order to resolve the issue please perform the following steps:

1. Run **SQL Server Management Studio**;
2. Connect to the target SQL server with `sa` or owner of the server account;
3. Under **Security -> Logins** find the the Netwrix Data processing account and open it's properties;
4. Open the **Server Roles** tab and select **sysadmin** role;
5. Restart the **SQL service**, **SQL Agent Service** and **Reporting** and **Analysis services** if installed.
