---
description: >-
  This article provides troubleshooting steps for resolving the error "ExecuteScalar requires an open and available Connection" during Entra ID collection.
keywords:
  - Entra ID
  - SQL Server
  - ExecuteScalar
products:
  - access-analyzer
sidebar_label: "Error: ExecuteScalar Requires an Open and Available Connection"
tags:
  - entra-id-and-azure-integration
title: "Error: ExecuteScalar Requires an Open and Available Connection During Entra ID Collection"
knowledge_article_id: kA0Qk0000002AZZKA2
---

# Error: ExecuteScalar Requires an Open and Available Connection During Entra ID Collection

## Symptom

Entra ID collection fails after scanning. The process appears to reach the `Adding domain` stage before hanging, and then the following error appears:

```
ExecuteScalar requires an open and available Connection. The connection's current state is closed.
```

## Cause

This issue is typically caused by a conflict in the SQL data, most likely due to a failed scan.

## Resolution

1. Open the database in **SQL Server Management Studio**.
2. Click **View** and open **Object Explorer Details**.
   
   > **NOTE:** This allows you to run the delete operation multiple times in the following steps until all tables are removed. This is necessary due to constraints within the tables.

3. Filter tables by the **`Name`** value of **AAD**.
4. Review all tables listed. You can select and delete all of them.
5. Update the filter to the **`Name`** value of **AzureADInventory**.
6. Repeat step 4. You should see the tables and be able to delete them.
7. Return to the Netwrix Access Analyzer console and rerun the **.Entra ID Inventory** job group.