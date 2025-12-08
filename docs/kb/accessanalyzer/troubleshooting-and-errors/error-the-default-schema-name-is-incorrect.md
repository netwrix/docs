---
description: >-
  This article describes the "FAILED: the default schema name is incorrect"
  error that appears when you open or close Netwrix Access Analyzer and provides
  possible causes and resolutions to restore database access.
keywords:
  - default schema name
  - SQL permissions
  - SSMS
  - Netwrix Access Analyzer
  - '{''FAILED'': ''the default schema name is incorrect''}'
  - database access
  - Run as different user
products:
  - access-analyzer
sidebar_label: 'Error: The Default Schema Name Is Incorrect'
tags:
  - troubleshooting-and-errors
title: 'Error: The Default Schema Name Is Incorrect'
knowledge_article_id: kA04u0000000IILCA2
---

# Error: The Default Schema Name Is Incorrect

## Symptom

You see the following error when you open or close Netwrix Access Analyzer (NEA):

```
FAILED: the default schema name is incorrect
```

## Causes

Refer to the following possible causes:

1. You (the user working in NEA) do not have sufficient permissions to access the NEA database.
2. When using the Windows authentication method for the database service account, the account has insufficient permissions to access the database.

## Resolutions

Refer to the corresponding resolution:

1. Log in to Netwrix Access Analyzer (NEA) with a user account that has properly provisioned permissions to the SQL database. Hold **Shift** and right-click the **Netwrix Access Analyzer** icon. Select **Run as different user**.

   ![Netwrix Access Analyzer Run as different user](./../0-images/ka0Qk0000006PDR_0EMQk000007SBir.png)

2. Grant the correct SQL DB permissions to the current user via the SQL Server Management Studio (SSMS) application. Refer to the following article for additional information on required permissions: Netwrix Access Analyzer Database — Database Creation & First Level of Security · v11.6.

## Related Articles

- Netwrix Access Analyzer Database — Database Creation & First Level of Security · v11.6
