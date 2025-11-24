---
description: >-
  Explains why Netwrix Auditor displays "Archive Service is busy processing
  activity records" and provides troubleshooting steps for SQL Server and
  Long-Term Archive causes.
keywords:
  - Archive Service busy
  - activity records
  - Short-Term Storage
  - SQL Server
  - Long-Term Archive
  - SQL Server Express 10GB
  - database statistics
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Archive Service is Busy Processing Activity Record
tags: []
title: "Archive Service is Busy Processing Activity Records"
knowledge_article_id: kA04u0000000JuQCAU
---

# Archive Service is Busy Processing Activity Records

## Symptom

Netwrix Auditor prompts the following error in one of your monitoring plans:

```text
Data collection has failed.
Error: The Netwrix Auditor Archive Service is busy processing activity records
```

## Causes

Netwrix Auditor collects data faster than it transfers data from the Short-Term Storage to the SQL Server instance or the Long-Term Archive. Refer to the following commonly associated causes:

- SQL Server-based causes:
  - The SQL Server Express database size reached 10 GB.
  - SQL Server connection issues.
- Long-Term Archive-based causes:
  - Long-Term Archive connection issues.

> **IMPORTANT:** Netwrix Auditor prompts the error once the amount of Activity Records in the Short-Term Storage has reached 5 million.

## Troubleshooting

### SQL Server-based Causes

Refer to the following steps to troubleshoot the SQL Server-based causes:

1. Review the **Database Statistics** screen:
   1. In the main Netwrix Auditor screen, select **Health Status** and click **View details** in the **Database Statistics** pane.
   2. Review the database states. If a database state reads **Failed to store data**, review the database details.

      > **IMPORTANT:** The SQL Server Express databases have a 10 GB size limit. In case the affected database states **Failed to store data** with the size limit of **10 GB**, refer to the following article: [SQL Server Express Database Size Reached 10GB](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/sql-server-express-database-size-reached-10gb)
   3. If multiple or all databases state **Failed to store data** with no size limits, refer to the following troubleshooting steps.
2. Verify that the SQL Server instance is available.
3. Verify the credentials of the SQL Server instance account:
   1. In the main Netwrix Auditor screen, select **Settings** > **Audit Database**.
   2. Click **Modify** under the **Audit Database Settings** section.
   3. Verify the account credentials and the authentication method. Click **Next** > **Finish** to complete the setup.
4. Optional—Verify the credentials of the custom SQL Server settings for the affected monitoring plan:
   1. In the left pane of the affected monitoring plan, select **Edit settings** under the **Monitoring plan** section.
   2. In the **Audit Database** tab, review the custom connection parameters if set. Verify the authentication method and the credetials used.
   3. Click **Save & Close** to save changes.

### Long-Term Archive-based Causes

Refer to the following steps to troubleshoot the Long-Term Archive-based causes:

1. Verify that the Long-Term Archive can be accessed. Review the Long-Term Archive path in **Settings** > **Long-Term Archive**.
2. If using a custom account to connect to the Long-Term Account, verify the credentials of the account used:
   1. In the main Netwrix Auditor screen, select **Settings** > **Long-Term Archive**.
   2. Click **Modify** under the **Location and Retention Settings** section.
   3. Verify the account credentials. Click **OK** to save the changes.
3. If using a custom account to connect to the Long-Term Account, assign the permissions to the account used. Refer to the following article for additional information on required permissions: [Configure Long-Term Archive Account](https://docs.netwrix.com/docs/auditor/10_8/requirements/longtermarchive#configure-long-term-archive-account).

### Other Causes

Verify that the Audit Database account has the correct permissions—refer to the following article for additional information: [Configure Audit Database Account](https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserver#configure-audit-database-account).

## Related Articles

- [SQL Server Express Database Size Reached 10GB](/docs/kb/auditor/configuration-and-setup/sql-server-auditing/sql-server-express-database-size-reached-10gb)
- [Configure Audit Database Account](https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserver#configure-audit-database-account)
- [Configure Long-Term Archive Account](https://docs.netwrix.com/docs/auditor/10_8/requirements/longtermarchive#configure-long-term-archive-account)
