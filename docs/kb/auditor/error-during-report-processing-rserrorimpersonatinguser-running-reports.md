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

1. Make sure you are using a supported SQL Server edition. Refer to the following article: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview

2. Check the permissions for your Audit Database account. Refer to the following article: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview

3. Check the permissions for the account used to collect data in your environment. Refer to the following article: https://docs.netwrix.com/docs/auditor/10_8

   > **IMPORTANT:** The account should be a member of the local Administrators group.

   If you use a `gMSA` account for data collection, refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview

4. Check your Report Services configuration. Refer to the following article: /docs/kb/auditor/deploying-the-report-server-database

5. Check the permissions for your SSRS Account. Refer to the following article: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview

   > **IMPORTANT:** The account should be a member of the local Administrators group.

6. On the computer that hosts the Auditor Server, open the **Services** snap-in and restart the **Netwrix Auditor Management Service**.

7. Ensure you provide valid credentials to connect to your Audit Database in Netwrix Auditor. To do so, open Netwrix Auditor, navigate to **Settings** > **Audit Database**, click **Configure** under **Audit Database settings**, and verify your credentials.

**NOTE:** Netwrix also recommends upgrading the product to the latest version to avoid SSRS-related issues.

## Related Links

- Requirements for SQL Server to Store Audit Data: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview
- Requirements for SQL Server to Store Audit Data: Configure Audit Database Account: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview
- Monitoring Plans – Data Collecting Account: https://docs.netwrix.com/docs/auditor/10_8
- Requirements – Use Group Managed Service Account (gMSA): https://docs.netwrix.com/docs/auditor/10_8/requirements/overview
- Deploying the Report Server Database: /docs/kb/auditor/deploying-the-report-server-database
- SQL Server Reporting Services: Configure SSRS Account: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview
