---
description: >-
  Explains prerequisites and verification steps for upgrading a SQL Server
  instance used by Netwrix Auditor, including stopping and starting services and
  validating database and reporting settings.
keywords:
  - SQL Server
  - upgrade
  - Netwrix Auditor
  - Audit Database
  - PowerShell
  - SSRS
  - Database Statistics
  - Report Server
products:
  - auditor
  - SQL_Server
sidebar_label: Upgrading SQL Server Instance
tags: []
title: "Upgrading SQL Server Instance"
knowledge_article_id: kA04u0000011154CAA
---

# Upgrading SQL Server Instance

## Question

SQL Server upgrade is required in our environment—are there any special requirements or prerequisites to comply with when upgrading a SQL Server instance?

## Answer

1. Prior to the upgrade, stop **Netwrix Auditor Archive Service** and **Netwrix Auditor Management Service** on your Netwrix Auditor server. Run the following commands in elevated PowerShell:
```powershell
Stop-Service -DisplayName "Netwrix Auditor Archive Service"
Stop-Service -DisplayName "Netwrix Auditor Management Service"
```

2. Once stopped, proceed with the upgrade procedure as recommended by Microsoft.

3. After the upgrade is complete, start the previously stopped services on your Netwrix Auditor server. Use the following commands in elevated PowerShell:
```powershell
Start-Service -DisplayName "Netwrix Auditor Archive Service"
Start-Service -DisplayName "Netwrix Auditor Management Service"
```

Learn more about SQL Server upgrades in Upgrade SQL Server ⸱ Upgrade documentation ⸱ Microsoft: https://learn.microsoft.com/en-us/sql/database-engine/install-windows/upgrade-sql-server?view=sql-server-ver16#upgrade-documentation

## Post-upgrade verification

Refer to the following steps to verify Netwrix Auditor has detected the change after the SQL Server upgrade:

1. In the main Netwrix Auditor menu, select **Health Status** > click **View details** under the **Database Statistics** pane. The top **SQL Server instance** line should reflect the server FQDN and the current SQL Server version. For additional information on the SQL Server setup, refer to the following article: Netwrix Auditor Settings − Audit Database · v10.7: https://docs.netwrix.com/docs/auditor/10_8

2. Verify SQL Server Reporting Services operate as intended — in the main Netwrix Auditor menu, select **Settings** > **Audit Database** > verify both the **Report Server URL** and **Report Manager URL** are operational. For additional information on the SSRS setup, refer to the following article: Requirements − SQL Server Reporting Services · v10.7: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview

## Related articles

- Netwrix Auditor Settings − Audit Database · v10.7: https://docs.netwrix.com/docs/auditor/10_8
- Requirements − SQL Server Reporting Services · v10.7: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview
- Upgrade SQL Server ⸱ Upgrade documentation ⸱ Microsoft: https://learn.microsoft.com/en-us/sql/database-engine/install-windows/upgrade-sql-server?view=sql-server-ver16#upgrade-documentation
