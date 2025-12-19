---
description: >-
  This article explains how to resolve the "Cannot impersonate user for data
  source" error (rsErrorImpersonatingUser) when running reports in Netwrix
  Auditor, including checks for SSRS configuration, account permissions, and
  Audit Database credentials.
keywords:
  - rsErrorImpersonatingUser
  - rsLogonFailed
  - SSRS
  - Audit Database
  - Report Services
  - Netwrix Auditor
  - impersonation error
products:
  - auditor
sidebar_label: Error During Report Processing — rsErrorImpersonat
tags: []
title: "Error During Report Processing — rsErrorImpersonatingUser Running Reports"
knowledge_article_id: kA04u000001110TCAQ
---

# Error During Report Processing — rsErrorImpersonatingUser Running Reports

## Symptom

The following error occurred when trying to run Netwrix Auditor reports:

```text
An error has occurred during report processing. (rsProcessingAborted)
Cannot impersonate user for data source 'DS'. (rsErrorImpersonatingUser)
Log on failed. Ensure the username and password are correct. (rsLogonFailed)
The username or password is incorrect.
```

## Cause

SQL Server Reporting Services (SSRS) connection issues or insufficient permissions for the data collection account.

## Resolution

1. Make sure you are using a supported SQL Server edition. Refer to the following article: [SQL Server Requirements](https://docs.netwrix.com/docs/auditor/10_6/requirements/sqlserver)

2. Check the permissions for your Audit Database account. Refer to the following article: [Configure Audit Database Account](https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserver#configure-audit-database-account)

3. Check the permissions for the account used to collect data in your environment. Refer to the following article: [Data Collecting Accounts](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/dataaccounts)

   > **IMPORTANT:** The account should be a member of the local Administrators group.

   If you use a `gMSA` account for data collection, refer to the following article for additional information: [GMSA](https://docs.netwrix.com/docs/auditor/10_8/requirements/gmsa)

4. Check your Report Services configuration. [Deploying the Report Server Database](/docs/kb/auditor/system-administration/database-management/deploying-the-report-server-database)

5. Check the permissions for your SSRS Account. Refer to the following article:[Configure SSRS Account](https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserverreportingservice#configure-ssrs-account)

   > **IMPORTANT:** The account should be a member of the local Administrators group.

6. On the computer that hosts the Auditor Server, open the **Services** snap-in and restart the **Netwrix Auditor Management Service**.

7. Ensure you provide valid credentials to connect to your Audit Database in Netwrix Auditor. To do so, open Netwrix Auditor, navigate to **Settings** > **Audit Database**, click **Configure** under **Audit Database settings**, and verify your credentials.

**NOTE:** Netwrix also recommends upgrading the product to the latest version to avoid SSRS-related issues.

## Related Links

- [SQL Server Requirements](https://docs.netwrix.com/docs/auditor/10_6/requirements/sqlserver)
- [Configure Audit Database Account](https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserver#configure-audit-database-account)
- [Data Collecting Accounts](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/dataaccounts)
- [Requirements – Use Group Managed Service Account (gMSA](https://docs.netwrix.com/docs/auditor/10_8/requirements/gmsa)
- [Deploying the Report Server Database](/docs/kb/auditor/system-administration/database-management/deploying-the-report-server-database)
- [Configure SSRS Account](https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserverreportingservice#configure-ssrs-account)
