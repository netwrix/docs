---
description: >-
  When the Netwrix Threat Prevention Database Maintenance job fails with Error
  15404 (0x5), the SQL Server service account typically lacks Active Directory
  access. This article explains the cause and shows how to resolve it by
  changing the SQL Server service logon to Network Service.
keywords:
  - Error 15404
  - 5
  - SQL Server
  - Database Maintenance
  - Network Service
  - SQL Server Configuration Manager
  - Active Directory
  - Netwrix Threat Prevention
products:
  - threat-prevention
sidebar_label: 'Error: Database Maintenance Failing with Error Cod'
tags: []
title: 'Error: Database Maintenance Failing with Error Code 0x5 (Error 15404)'
knowledge_article_id: kA0Qk0000001YndKAE
---

# Error: Database Maintenance Failing with Error Code 0x5 (Error 15404)

## Symptom

The Netwrix Threat Prevention Database Maintenance job fails with the following error:

```
The job failed. Unable to determine if the owner ("Domain/User") of job SiDbMainJob has server access (reason: Could not obtain information about Windows NT group/user 'Domain/User', error code 0x5 [SQLSTATE42000] (Error 15404))
```

## Cause

The account running the SQL Server Service on the SQL server does not have access to Active Directory, i.e., it is a local account.

## Resolution

1. On the SQL server, launch **SQL Server Configuration Manager**.
2. Select **SQL Server Services** in the navigation pane.
3. Right-click **SQL Server (Instance name)**, then click **Properties**. Navigate to the **Log On** tab, select **Built-in account**, and choose **Network Service** from the drop-down menu.
4. Click **Apply** to save the change and then click **Restart**.
5. Repeat steps 1–4 for **SQL Server Agent (Instance name)**.

![SQL Server Configuration Manager showing Log On tab settings for Network Service](./images/ka0Qk000000E6NJ_0EMQk000009RgNm.png)
