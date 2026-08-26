---
title: "Requirements for SQL Server to Store Audit Data"
description: "Requirements for SQL Server to Store Audit Data"
sidebar_position: 40
---

# Requirements for SQL Server to Store Audit Data

If you plan to generate reports, use alerts, and run search queries in Netwrix Auditor, your
deployment must include Microsoft SQL Server where Netwrix Auditor stores audit data. Report
generation also requires Reporting Services (or Advanced Services).

The following table lists supported SQL Server versions and editions.

Due to limited database size, Netwrix recommends Express Edition (with Reporting Services) only for
evaluation, proof of concept (PoC), or small environments **when using SQL Server 2022 or earlier**.
For production environments, consider using Standard or Enterprise Edition.

**NOTE:** SQL Server 2025 Express Edition doesn't include Power BI Report Server (PBIRS) or any
built-in reporting services. If you require reporting functionality, use Standard or Enterprise
Edition with SQL Server 2025, or remain on SQL Server Express 2022 or earlier. See the SQL Server
2025 row in the following table for details.

| Version                                                                      | Edition                                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL Server 2025                                                              | - Standard or Enterprise Edition<br/>**NOTE:** SQL Server 2025 supports Express Edition, but that edition doesn't include Power BI Report Server (PBIRS) or any built-in reporting services. Reporting functionality isn't available with SQL Server 2025 Express. If you require reporting, use Standard or Enterprise Edition with SQL Server 2025, or remain on [SQL Server 2022 Express](https://www.microsoft.com/en-us/download/details.aspx?id=104781) with [SQL Server Reporting Services 2022](https://www.microsoft.com/en-us/download/details.aspx?id=104502). Using SSRS 2022 (or earlier) with SQL Server 2025 Express isn't an officially supported configuration and may break if Microsoft introduces incompatible changes in a future update. |
| SQL Server 2022                                                              | - Standard or Enterprise Edition - [Express Edition](https://www.microsoft.com/en-us/download/details.aspx?id=104781) with [Reporting Services](https://www.microsoft.com/en-us/download/details.aspx?id=104502) (for evaluation, PoC, and small environments) |
| SQL Server 2019 (on-premises Windows version) cumulative update 10 and above | - Standard or Enterprise Edition - [Express Edition](https://www.microsoft.com/en-us/download/details.aspx?id=101064) with [Reporting Services](https://www.microsoft.com/en-us/download/details.aspx?id=100122) (for evaluation, PoC, and small environments)                  |
| SQL Server 2017                                                              | - Standard or Enterprise Edition - [Express Edition](https://www.microsoft.com/en-us/download/details.aspx?id=55994) with [Reporting Services](https://www.microsoft.com/en-us/download/details.aspx?id=55252) (for evaluation, PoC, and small environments)                  |
| SQL Server 2016                                                              | - Standard or Enterprise Edition - [Express Edition with Advanced Services (SP2)](https://www.microsoft.com/en-us/download/details.aspx?id=56840) (for evaluation, PoC, and small environments)                                                                |
| SQL Server 2014                                                              | - Standard or Enterprise Edition - [Express Edition with Advanced Services](https://www.microsoft.com/en-us/download/details.aspx?id=42299) (for evaluation, PoC, and small environments)                                                                      |
| SQL Server 2012                                                              | - Standard or Enterprise Edition - [Express Edition with Advanced Services](https://www.microsoft.com/en-us/download/details.aspx?id=56042) (for evaluation, PoC, and small environments)                                                                       |

**NOTE:** Netwrix supports SQL Express only for small environments. It might cause performance
issues in medium and large environments.

You can also host Netwrix Auditor audit databases on a SQL Server
[AlwaysOn Availability Group](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/overview-of-always-on-availability-groups-sql-server).
After you specify audit database settings in Netwrix Auditor, manually add the new database to a
properly configured AlwaysOn Availability Group. Repeat this step each time Netwrix Auditor creates a new audit database.

**NOTE:** Netwrix Auditor doesn't support Multi-subnet Listener configurations for SQL Server AlwaysOn.

See the
[Add a database to an Always On availability group with the 'Availability Group Wizard'](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/availability-group-add-database-to-group-wizard)
Microsoft article for details on adding a database to AlwaysOn Availability Group.

You can configure Netwrix Auditor to use an existing SQL Server instance, or deploy a new instance.

If your deployment planning shows that SQL Server Express Edition suits your production environment,
you can install, for example, SQL Server 2016 SP2 Express with Advanced Services using the Audit
Database Settings wizard, or download it manually from the Microsoft website. See the Install
Microsoft SQL Server and Reporting Services section for additional information.

## SQL Server and Databases

Netwrix Auditor uses SQL Server databases as operational storages that keep audit data for analysis,
search, and reporting purposes. Supported versions are SQL Server 2012 and later (Reporting Services
versions should be 2012 R2 or later).

- Netwrix Auditor prompts you to configure the default SQL Server instance when you create the first
  monitoring plan; also, you can specify it in Netwrix Auditor settings.
- You can configure Netwrix Auditor to use an existing instance of SQL Server, or deploy a new
  instance, as described in the [Create a New Monitoring Plan](/docs/auditor/10.9/admin/monitoringplans/create.md)
  topic.

For evaluation and PoC projects you can deploy Microsoft SQL Server 2016 SP2 Express Edition with
Advanced Services (sufficient for report generation).

For production deployment in bigger environments, Netwrix recommends Microsoft SQL Server
Standard Edition or higher because of the limited database size and other limitations of Express
Edition.

Make your choice based on the size of the environment you plan to monitor, the number of users, and
other factors. This refers, for example, to Netwrix Auditor for Network Devices: if you need to
audit successful logons to these devices, your data sources produce a large number of activity records, so plan for SQL Server Standard or Enterprise edition (Express edition won't be sufficient).

Netwrix Auditor supports automated size calculation for all its databases in total, displaying the
result, in particular, in the
[Database Statistics](/docs/auditor/10.9/admin/healthstatus/dashboard/databasestatistics.md) of the Health Status
dashboard. This feature, however, works only with SQL Server 2012 SP3 and later.

### Databases

To store data from the data sources included in the monitoring plan, the Monitoring Plan Wizard
creates an Audit Database. Default database name is `Netwrix_Auditor_<monitoring_plan_name>`.

Netwrix strongly recommends targeting each monitoring plan at a separate database.

Also, Netwrix Auditor automatically creates several dedicated databases on the default SQL Server instance.
These databases store various data, as listed in the following table.

| Database name                   | Description                                                                                                                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Netwrix_AlertsDB`              | Stores alerts.                                                                                                                                                                            |
| `Netwrix_Auditor_API`           | Stores activity records collected using Integration API.                                                                                                                                  |
| `Netwrix_Auditor_EventLog`      | Stores internal event records.                                                                                                                                                            |
| **`Netwrix_CategoriesDB`**      | Intended for integration with Netwrix Data Classification. Netwrix Auditor always creates this database, but it participates in the workflow only when you enable the DDC Provider. See [Sensitive Data Discovery](/docs/auditor/10.9//admin/settings/sensitivedatadiscovery.md) for instructions on enabling the DDC Provider. |
| `Netwrix_CommonDB`              | Stores views to provide cross-database reporting.                                                                                                                                         |
| `Netwrix_ImportDB`              | Stores data imported from Long-Term Archive.                                                                                                                                              |
| **`Netwrix_OverviewReportsDB`** | Stores data required for overview reports.                                                                                                                                                |
| **`Netwrix_Self_Audit`**        | Stores data collected by Netwrix Auditor self-audit (optional, created if the corresponding feature is enabled).                                                                          |

These databases usually don't appear in the UI; they appear only in the **Database statistics**
widget of the **Health Status** dashboard. If you need to modify their settings via SQL Server
Management Studio, contact your database administrator. For example, you may need to change
the logging and recovery model (by default, all these databases and the Audit databases use the **simple** recovery model).

## Install Microsoft SQL Server and Reporting Services

Netwrix Auditor uses Microsoft SQL Server database as short-term data storage and uses SQL
Server Reporting Services engine for report generation. You can either use your existing SQL Server
for these purposes, or deploy a new server instance. See the corresponding section of this guide for SQL Server system requirements.

Consider the following:

- Supported versions are 2012 and later.
- Reporting Services supports only English-language operating systems.
- Supported editions are Enterprise, Standard, and Express with Advanced Services (it includes
  Reporting Services). **Note:** SQL Server 2025 Express Edition doesn't include any reporting
  services. For SQL Server 2025, only Standard and Enterprise Editions support report generation.
- If you download SQL Server Express Edition with Advanced Services from the Microsoft site, ensure
  the file name contains SQLEXPRADV. Otherwise, the installer won't deploy Reporting Services, and you can't analyze and report on collected data.

For example, this section provides instructions on how to:

- [SQL Server Reporting Services](/docs/auditor/10.9/requirements/sqlserverreportingservice.md)

For detailed information on installing other versions/editions, refer to Microsoft website.

The maximum database size in SQL Server Express editions may be insufficient for storing data
in bigger infrastructures. Thus, when planning for SQL Server, compare the maximum database capacity
in different editions against the size of the audited environment.

## SQL Server

When planning for SQL Server that will host Auditor databases, consider the following:

- For PoC, evaluation scenario, or small environment SQL Server can run on the same computer where
  you install Netwrix Auditor Server, or on a remote machine accessible by Netwrix Auditor.
  Remember to check connection settings and access rights.
- In large and extra-large infrastructures, install SQL Server on a separate server or cluster.
  Netwrix doesn't recommend installing Netwrix Auditor and SQL Server on the same server in such environments.
- If you plan to have Netwrix Auditor and SQL Server running on different machines, establish fast
  and reliable connection between them (100 Mbps or higher).
- Netwrix Auditor supports both standalone servers and SQL Server clusters, as well as AlwaysOn
  Availability Groups (it doesn't support Multi-subnet Listener configurations for SQL Server AlwaysOn).
- You can configure Netwrix Auditor to use an existing SQL Server instance, or create a new one. As
  an option, you can install SQL Server 2016 Express Edition, using the Audit Database Settings
  wizard, or download it manually from the Microsoft website (see Install Microsoft SQL Server and
  Reporting Services).

**CAUTION:** Don't install Netwrix Auditor databases to a production SQL Server instance. Such instances may run many maintenance plans or scripts that can affect the data
the product uploads. The product databases are designed for reporting and searching and don't
require maintenance or backup. For the long-term data storage, Netwrix Auditor uses Long-Term
Archive. See [File-Based Repository for Long-Term Archive](/docs/auditor/10.9/requirements/longtermarchive.md) for additional
information.

If you choose to set up a new SQL Server instance, Netwrix Auditor assigns the _sysadmin_ server role to the current user account (which must be a member of the local Administrators group).

Specify the data drive for storing the SQL Server databases (the default is the system drive).

- If you plan to have more than one Netwrix Auditor Server in your network, ensure you configure them to use different SQL Server instances. Several Netwrix Auditor Servers can't share the same
  SQL Server instance for storing audit data.
- Ensure the account that writes data to the audit databases hosted on the default SQL Server has
  sufficient access rights. Assign this account the following roles:

    1. **Database owner (db_owner)** database-level role
    2. dbcreator server-level role

    You can specify this account when you configure the
    [Audit Database](/docs/auditor/10.9/admin/settings/auditdatabase.md) settings.

## Database Sizing

For database sizing, estimate the following:

- Size of the environment you plan to monitor
- Amount of activity records produced by the audited system
- Retention policy for the audit databases
- Maximum database size supported by different SQL Server versions

To estimate the number of activity records that your data sources produce and that Auditor collects
and saves during the week, use the Activity records by date widget of the Health Status
dashboard. See the
[Activity Records Statistics](/docs/auditor/10.9/admin/healthstatus/dashboard/activityrecordstatistics.md) topic for
additional information.

Auditor supports automated size calculation for all its databases in total, displaying the result,
in particular, in the Database Statistics widget of the Health Status dashboard. To estimate current
capacity and daily growth for each database, you can click View details and examine information in
the table. See the [Database Statistics](/docs/auditor/10.9/admin/healthstatus/dashboard/databasestatistics.md)
topic for additional information.

This feature works only with SQL Server 2012 SP3 and later.

Remember that database size in SQL Server Express editions may be insufficient. For example,
Microsoft SQL Server 2012 SP3 Express Edition has the following limitations which may affect
performance:

- Each instance uses only up to 1 GB of RAM
- Each instance uses only up to 4 cores of the first CPU
- Database size can't exceed 10 GB

## Database Settings

You can specify the settings for each Audit database, including the hosting SQL Server, when you
create a monitoring plan and configure data collection for an audited system. Consider the
following:

- To store data from the data sources included in the monitoring plan, you can configure the Audit
  database on the default SQL Server (recommended), or select another server.
- By default, database name will be `Netwrix_Auditor_<monitoring_plan_name>`; you can name the
  database as you need, for example, `Active_Directory_Audit_Data`.

To avoid syntax errors, for instance in PowerShell cmdlets, use the
underscore character (`_`) instead of the space character in database names.

If the database doesn't yet exist on the specified SQL Server instance, Netwrix Auditor creates it there. For
this operation to succeed, ensure that the Netwrix Auditor service account has sufficient rights on that
SQL Server.

You can't modify the settings of other Auditor databases.

### Example

As a database administrator, you can have SQL Server cluster of 2 servers, and 2 Oracle servers. If
so, you can create 2 monitoring plans:

1. First monitoring plan for collecting data from SQL Servers, targeted at
   `Netwrix_Auditor_SQL_Monitoring` database.
2. Second monitoring plan for collecting data from Oracle servers, targeted at
   `Netwrix_Auditor_Oracle_Monitoring` database.

### Database Retention

Retention is a global setting that applies to all Audit databases you configure for your monitoring plans.

To change database retention after product deployment:

**Step 1 –** In the Auditor main screen, select Settings > Audit Database.

![audit_db_settings](/images/auditor/10.9/requirements/audit_db_settings.webp)

**Step 2 –** In the dialog displayed, set Clear stale data when a database retention
period is exceeded: to ON, then click Modify to specify the required retention period (in
days).

This setting also applies to the `Netwrix_Auditor_API` database.

## Configure Audit Database Account

This is the account that Auditor uses to write the collected audit data to the audit databases.

Grant this account the **Database owner (`db_owner`)** role and the **dbcreator** server
role on the SQL Server instance hosting your audit databases.

To assign the **dbcreator** and **`db_owner`** roles:

**Step 3 –** On the computer where SQL Server instance with the Audit Database resides, navigate to
**Start** > **All Programs** > **Microsoft SQL Server** > **SQL Server Management Studio**.

**Step 4 –** Connect to the server.

**Step 5 –** In the left pane, expand the **Security** node. Right-click the **Logins** node and
select **New Login** from the pop-up menu.

![manualconfig_ssms_newlogin2016](/images/1secure/configuration/sqlserver/manualconfig_ssms_newlogin2016.webp)

**Step 6 –** Click **Search** next to **Login Name** and specify the user that you want to assign
the **`db_owner`** role to.

**Step 7 –** Select **Server roles** on the left and assign the **dbcreator** role to the new login.

**Step 8 –** Select the **User Mapping** tab. Select all databases used by Auditor to store audit
data in the upper pane and check **`db_owner`** in the lower pane.

**NOTE:** Perform this step only when you change the existing Audit Database Account to a new one.

**Step 9 –** If the account that you want to assign the **`db_owner`** role to already exists
in **SQL Server Logins**, expand the **Security** > **Logins** node, right-click the account,
select **Properties** from the pop-up menu, and edit its roles.

Starting with version 9.96, you can use Group Managed Service Account (gMSA) for that purpose.

**NOTE:** If you use a Group Managed Service Account (gMSA) to access the SQL Server instance that hosts the Netwrix Auditor database, Netwrix Auditor can't generate SSRS-based reports.
This limitation occurs because SQL Server Reporting Services doesn't support using gMSA for the Unattended Execution Account.
For more details, see the Microsoft documentation:
[Configure the Unattended Execution Account (Report Server Configuration Manager)](https://docs.microsoft.com/en-us/sql/reporting-services/install-windows/configure-the-unattended-execution-account-ssrs-configuration-manager?view=sql-server-ver15).


If you need to migrate the Audit Database, see the
[How to Migrate Netwrix Auditor Databases to Another SQL Server Instance](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/how-to-migrate-netwrix-auditor-databases-to-another-sql-server-instance)
knowledge base article.
