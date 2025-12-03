---
description: >-
  When Netwrix Data Classification (NDC) shows "Invalid Config Detected" and the
  Collector Service reports "Error updating SQL schema", follow these steps to
  verify the service account, SQL permissions, and database connectivity to
  resolve the issue.
keywords:
  - Netwrix Data Classification
  - NDC
  - Collector Service
  - SQL schema
  - db_owner
  - service account
  - Internal Server Error
  - SQL Server
  - Repair
products:
  - general
sidebar_label: Error Updating SQL Schema in Collector Service
tags:
  - troubleshooting-and-errors
title: "Error Updating SQL Schema in Collector Service"
knowledge_article_id: kA0Qk0000000bKXKAY
---

# Error Updating SQL Schema in Collector Service

## Symptoms

- When you attempt to run Netwrix Data Classification (NDC), your browser prompts the following error:

```
Internal Server Error (500) — Invalid Config Detected
```

- The Collector Service in Service Viewer prompts the following error message:

```
Invalid configuration: Error updating SQL schema
```

## Causes

1. NDC services use a local system or service account to run instead of a dedicated Netwrix service account.
2. The service account to connect to the dedicated SQL database does not have the `db_owner` role.
3. After a recent migration, your NDC instance cannot connect to the dedicated NDC SQL database.

> NOTE: Refer to the following article to learn more about requirements for the NDC service account: https://docs.netwrix.com/docs/dataclassification/5_7 (Requirements to Install Netwrix Data Classification − Accounts and Required Permissions · v5.7).

## Resolutions

1. Verify the account used to run NDC services is a Windows domain account.

   1. In your NDC server, run **Services**.
   2. Locate the three NDC services in the list, NDC Classifier, NDC Collector, and NDC Indexer. Review the **Log On As** column for the services—verify a Windows domain account runs all services instead of local system or service.
   3. If required, change the **Log On As** account—right-click the affected account and select **Properties**.
   4. In the **Log On** tab, specify the domain account you'd like to use. Once you specify it, click **Apply** to save changes.
   5. Restart the services and start NDC to verify the fix.

2. Verify the service account has the `db_owner` role for the NDC database. Refer to the following steps:

   1. In your SQL server, run **SQL Server Management Studio** and connect to your SQL Server instance.
   2. In the left pane, proceed to **Security** > **Logins** > **target_account**. Right-click the account and select **Properties**.
   3. In the left pane, select **User Mapping**. Locate the NDC database, highlight it, and verify the `db_owner` role is assigned. If not, assign the role. Save the changes.

3. Verify the NDC database still exists in your SQL server. If none exists, you can create a new database to use instead. Refer to the following article for additional information on NDC database configuration: https://docs.netwrix.com/docs/dataclassification/5_7 (Install Netwrix Data Classification − Configure NDC SQL Database · v5.7).

> NOTE: To alter the server name in case of a recent SQL Server migration, run the NDC installer to select the **Repair** option. You can specify the new SQL Server instance there.

## Related Articles

- https://docs.netwrix.com/docs/dataclassification/5_7 (Requirements to Install Netwrix Data Classification − Accounts and Required Permissions · v5.7)
- https://docs.netwrix.com/docs/dataclassification/5_7 (Install Netwrix Data Classification − Configure NDC SQL Database · v5.7)
