---
description: >-
  Shows how to migrate Netwrix Auditor databases to another Microsoft SQL Server
  instance, including prerequisites and step-by-step instructions for backing
  up, restoring, and reconfiguring reporting services.
keywords:
  - Netwrix Auditor
  - SQL Server
  - SSRS
  - migrate databases
  - restore
  - ReportServer
  - audit database
  - backup
  - Reporting Services
products:
  - auditor
sidebar_label: How to Migrate Netwrix Auditor Databases to Anothe
tags: []
title: "How to Migrate Netwrix Auditor Databases to Another SQL Server Instance"
knowledge_article_id: kA00g000000Pbd8CAC
---

# How to Migrate Netwrix Auditor Databases to Another SQL Server Instance

## Question

Can you migrate audit databases to another Microsoft SQL Server instance?

## Answer

Yes, you are able to migrate audit databases to another Microsoft SQL Server instance. Follow the steps below to complete this process.

### Prerequisites

- Required Permissions: The account used by Netwrix Auditor must have **db_owner** rights on the target audit databases. For SQL Server Reporting Services (SSRS), the account must have the **Content Manager** role on the Home folder, and users must have the **Browser** role on the Report Server. For detailed steps on assigning these permissions, see [How to Assign db_owner Permissions](/docs/kb/auditor/system-administration/database-management/how-to-assign-db-owner-permissions) and [SQL Server Reporting Services](https://docs.netwrix.com/docs/auditor/10_8/requirements/overview)
- SQL Server and SSRS must be installed and configured on the new server.

### Instructions

1. Configure a new SQL Server instance.
2. On the Netwrix Auditor server, stop `Netwrix Auditor Archive Service` and `Netwrix Auditor Management Service`.
3. Back up all Netwrix databases in the old SQL Server instance except for **Netwrix_CommonDB**, **Netwrix_ImportDB**, **Netwrix_Auditor_EventLog**, **ReportServer**, and **ReportServerTempDB**. To back up databases:
   1. Open **Microsoft SQL Server Management Studio** and connect to the original SQL Server instance.
   2. Select an **audit database**, right-click it, and select **Tasks** > **Back Up...**
   3. In the **Back Up Database** window, review the path where the database backup will be stored in the **Destination** section.
4. Copy the database backups to your new SQL Server. In the new **SQL Server** instance:
   1. Open **Microsoft SQL Server Management Studio** and connect to the destination SQL Server instance.
   2. Right-click the **Databases** node and select **Restore Database...**
   3. Under the **Source** section, select the **Device** option, and click **...** to browse for databases.
   4. In the **Specify Backup Devices** window, click **Add** and select the backup database file. Click **OK**.
   5. Specify the database name and check the **Restore** checkbox under the **Backup sets to restore** section.
5. Deploy the new Report Database. For more information, see [Deploying the Report Server Database](/docs/kb/auditor/system-administration/database-management/deploying-the-report-server-database)
6. Stop the old **SQL Server (%instance_name%)** service.
7. Start `Netwrix Auditor Archive Service` and `Netwrix Auditor Management Service`.
8. In the main Netwrix Auditor menu, select **Settings** > **Audit Database** tab, and specify the new SQL Server and Reporting Service settings.

> **NOTE:** If you receive the following pop-up message, click **Yes** to proceed with modifying the Audit Database settings:
> ![Audit Database modification prompt]./../0-images/servlet_image_3823966b1661.png)

9. Click **Yes** when the following message appears:
   ![Confirmation dialog: Data will become unavailable until the new database is configured]./../0-images/servlet_image_3823966b1661.png)
10. In the main Netwrix Auditor menu, select **Settings** > **Investigations** tab. Click **Modify** to specify the new SQL Server settings.
11. Run a search with the filter **When | Equals | Last 7 days**. If you see the relevant data, the databases were migrated successfully and the new SQL Server is being used.
12. **Optional:** Start the old SQL Server instance if it is used for any other tasks.

## Related Links

- [How to Assign db_owner Permissions](/docs/kb/auditor/system-administration/database-management/how-to-assign-db-owner-permissions)
- [SQL Server Reporting Services](https://docs.netwrix.com/docs/auditor/10_8/requirements/overview)
- [How to Prepare the Netwrix Server for a SQL Upgrade](/docs/kb/auditor/system-administration/migration-and-upgrade/how-to-prepare-the-netwrix-server-for-a-sql-upgrade)
- [Deploying the Report Server Database](/docs/kb/auditor/system-administration/database-management/deploying-the-report-server-database)

