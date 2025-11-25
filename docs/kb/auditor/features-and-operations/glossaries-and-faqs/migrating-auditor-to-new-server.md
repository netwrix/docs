---
description: >-
  Step-by-step procedure to migrate a Netwrix Auditor instance to a new server,
  including exporting/importing configuration, moving the Long-Term Archive, and
  handling SQL databases.
keywords:
  - Netwrix Auditor migration
  - naconfig.xml
  - Long-Term Archive
  - SQL migration
  - configserverDbProcessor
  - Audit Core
  - migrate Auditor
  - validation checklist
products:
  - auditor
sidebar_label: Migrating Auditor to New Server
tags: []
title: "Migrating Auditor to New Server"
knowledge_article_id: kA00g000000H9ebCAC
---

# Migrating Auditor to New Server

## Overview

This article outlines a step-by-step process for how to migrate a Netwrix Auditor instance to a new server.

## Instructions

### Planning the Migration

1. Installing Netwrix Auditor on the new server.
2. Exporting and importing Netwrix Auditor Configuration.
3. Migration of Long-Term Archive.
4. Migration of SQL databases.
   - Migration of SQL databases is not required if you plan to keep SQL hosted on the original Netwrix Auditor Server or in case SQL is already hosted remotely.
5. Final setup.
6. Important Notes Post-Migration.
7. Validation checklist.

### Installing Netwrix Auditor on the New Server

When moving Netwrix Auditor to a new server, ensure the version and build of the Netwrix Auditor instance on your new server matches the old server version and build. Your new server should meet the Software Requirements and Hardware Requirements for the appropriate version:

- [Software Requirements](https://docs.netwrix.com/docs/auditor/10_8/requirements/software)
- [Hardware Requirements](https://docs.netwrix.com/docs/auditor/10_8/requirements/console)

### Exporting the Netwrix Auditor configuration file

1. Stop and disable all Netwrix Auditor services except for **Netwrix Auditor Configuration Server Service** and **Netwrix Auditor Core Service** running in your original Netwrix Auditor server. This prevents Netwrix Auditor from running collections during the migration process.
2. Disable any scheduled tasks for your Netwrix Auditor instance. These will be present in case any monitoring plan for Netwrix Password Reset, Netwrix Inactive Users Tracker, or Event Log Manager have ever been set up.

Now you can safely export the configuration by following the next steps:

1. Run Command Prompt as administrator.
2. Execute the following commands:

```text
cd C:\Program Files (x86)\Netwrix Auditor\Audit Core
configserverDbProcessor.exe export -target "C:\naconfig.xml"
```

3. Input an encryption password for the backup file.

> **NOTE:** You can use any target path to export the config file. Make sure to include the file name **naconfig.xml** to the end of the export path.

The configuration file has been successfully exported. Navigate to the target path to copy the config file to your new server. The file will be imported to the new Netwrix Auditor instance towards the end of the migration process.

### Long-Term Archive

By default, Long-Term Archive is located at `C:\ProgramData\Netwrix Auditor\Data`. If you have previously migrated your Long-Term Archive, you can find the location in your main Netwrix Auditor menu > **Settings** > **Long-Term Archive**.

Navigate to your Long-Term Archive location and copy the entire folder. Proceed by transferring Long-Term Archive to the new Netwrix Auditor server. While you can migrate it to the default location, it is recommended to keep Long-Term Archive on a separate drive. This will prevent rapid storage consumption on the C drive. Take note of where you have placed Long-Term Archive on the new Netwrix Auditor server.

> **NOTE:** You can split the Long-Term Archive migration into two steps if the size of your ActivityRecords folder doesn't allow for a quick migration. For additional information, refer to the following article: How to Move Long-Term Archive to a New Location: [How to Move Long-Term Archive to a New Location](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-move-long-term-archive-to-a-new-location)

### SQL Databases

It is important to decide on migration of your SQL databases or keeping them in your current SQL Server instance during the Netwrix Auditor migration. In case you'd like to migrate your SQL Server databases, refer to the following article for additional information:[How to Migrate Netwrix Auditor Databases to Another SQL Server Instance](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/how-to-migrate-netwrix-auditor-databases-to-another-sql-server-instance)
Once SQL migration is complete, refer to the following article for additional information on Report Server Database deployment:[Deploying the Report Server Database](/docs/kb/auditor/system-administration/database-management/deploying-the-report-server-database)

### Final Steps

> **NOTE:** All further steps should be performed in your new Netwrix Auditor server instance.

1. Stop all Netwrix services in your new Netwrix Auditor server instance except for **Netwrix Auditor Configuration Server Service** and **Netwrix Auditor Core Service**.
2. Import the naconfig.xml file.
   1. Run Command Prompt as administrator.
   2. Execute the following commands:

```text
cd C:\Program Files (x86)\Netwrix Auditor\Audit Core
configserverDbProcessor.exe import -source %PATH_OF_EXPORTED_NACONFIG.XML% -target "C:\ProgramData\Netwrix Auditor\AuditCore\ConfigServer\Configuration.xml"
```

3. Run PowerShell as administrator and execute the following command to start all Netwrix Auditor services:

```powershell
Start-Service -Displayname Netwrix*
```

4. Launch Netwrix Auditor and proceed to **Settings** > **Long-Term Archive**. Change the path for Long-Term Archive to reflect the migrated Long-Term Archive location.

> **NOTE:** If you did not migrate the SQL databases, skip Step 5 and proceed to the next section.

5. Netwrix Auditor requires a reference to the new SQL Server instance. Refer to the following steps to find the instance name:
   1. Launch SQL Server Management Studio.
   2. Click **Properties** for the instance name.
   3. In Netwrix Auditor **Settings** menu, select **Audit Databse** in the left pane and click **Modify** under **Audit database settings**.
   4. Specify the SQL Server instance name and credentials of the account used to write data to SQL databases. Refer to the following articles for additional information on SQL permissions and report server database deployment:
      - [Requirements for SQL Server to Store Audit Data](https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserver)
      - [Deploying the Report Server Database](/docs/kb/auditor/system-administration/database-management/deploying-the-report-server-database)

### Important Notes Post-Migration

- If you've previously had any omit lists configured, you will have to either copy the contents of these omit lists or copy the files to the new server. For additional information on omit lists and their locations, refer to the following article: [How to Use Omit Lists](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-use-omit-lists)
- You cannot migrate Event Log Manager or its configuration files. Remember to manually copy the configuration over to the new server. Event Log Manager data will be migrated in case you've migrated SQL databases.
- Netwrix Password Expiration Notifier and Netwrix Inactive Users Tracker do not store any data — their reports are sent daily via email. For more information on how to migrate these Netwrix tools, refer to the following articles:
  - [Migrate PEN to a Different Server](/docs/kb/auditor/monitoring-plans/password-expiration-notifier/migrate-netwrix-password-expiration-notifier-to-a-different-server)
  - How to migrate Netwrix Inactive Users Tracker to other servers: [How to Migrate Netwrix Inactive Users Tracker to Other Servers](/docs/kb/auditor/monitoring-plans/user-activity-monitoring/how-to-migrate-netwrix-inactive-users-tracker-to-other-servers)
- User Activity data will not be collected until the Core Service is redeployed after migration. For more information on how to reset Netwrix Auditor User Activity Core Service to allow the monitoring plan to redeploy with the new configuration settings and registry keys, review the following article: [Uninstalling User Activity Monitoring Agents](/docs/kb/auditor/monitoring-plans/user-activity-monitoring/uninstalling-user-activity-monitoring-agents)

### Validation Checklist

Run the following checks for your migrated Netwrix Auditor instance:

- Run a search with blank parameters (an open search).
- Run a report on a data source you are auditing.
- Confirm your monitoring plans have carried over.
- Apply the Auditor license. Refer to the following article for additional information: [How to Apply Netwrix Auditor License](/docs/kb/auditor/system-administration/licensing-and-compliance/how-to-apply-netwrix-auditor-license)

> **IMPORTANT:** The SSL certificate previously used for Integration API will be missing from the certificate store in your new Netwrix Auditor server. Generate a new SSL certificate for Netwrix Auditor Integration API − refer to the following article for additional information: [Integration API](https://docs.netwrix.com/docs/auditor/10_8/api/overview)

Monitor the system over the next few days to confirm the migration has been completed successfully. As long as the system is operable and you can view migrated data, you can delete all traces of Netwrix Auditor from your former server, including the software uninstallation.

## Related Articles

- [Software Requirements](https://docs.netwrix.com/docs/auditor/10_8/requirements/software)
- [Hardware Requirements](https://docs.netwrix.com/docs/auditor/10_8/requirements/console)
- [How to Move Long-Term Archive to a New Location](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-move-long-term-archive-to-a-new-location)
- [How to Migrate Netwrix Auditor Databases to Another SQL Server Instance](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/how-to-migrate-netwrix-auditor-databases-to-another-sql-server-instance)
- [Deploying the Report Server Database](/docs/kb/auditor/system-administration/database-management/deploying-the-report-server-database)
- [Requirements for SQL Server to Store Audit Data](https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserver)
[Integration API](https://docs.netwrix.com/docs/auditor/10_8/api/overview)
- [Specified Logon Session Does Not Exist Error in Netwrix Auditor](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/specified-logon-session-does-not-exist-error-in-netwrix-auditor)
- [How to Apply Netwrix Auditor License](/docs/kb/auditor/system-administration/licensing-and-compliance/how-to-apply-netwrix-auditor-license)
- [Migrate PEN to a Different Server](/docs/kb/auditor/monitoring-plans/password-expiration-notifier/migrate-netwrix-password-expiration-notifier-to-a-different-server)
- [How to Migrate Netwrix Inactive Users Tracker to Other Servers](/docs/kb/auditor/monitoring-plans/user-activity-monitoring/how-to-migrate-netwrix-inactive-users-tracker-to-other-servers)
