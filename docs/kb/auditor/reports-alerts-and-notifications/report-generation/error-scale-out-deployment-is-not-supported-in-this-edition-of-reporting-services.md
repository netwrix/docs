---
description: >-
  After migrating SQL Server or restoring the Report Server encryption key,
  Reporting Services may throw an rsOperationNotSupported error about "Scale-out
  deployment." This article explains the cause and gives steps to remove old
  encryption key entries from the Report Server database.
keywords:
  - Scale-out deployment
  - Reporting Services
  - SQL Server
  - encryption key
  - Report Server Configuration Manager
  - rsOperationNotSupported
  - Keys table
  - DELETE statement
products:
  - auditor
sidebar_label: 'Error: "Scale-out Deployment" Is Not Supported in This Edition of Reporting Services'
tags: []
title: 'Error: "Scale-out Deployment" Is Not Supported in This Edition of Reporting Services'
knowledge_article_id: kA0Qk0000000WntKAE
---

# Error: "Scale-out Deployment" Is Not Supported in This Edition of Reporting Services

## Symptom

After migration to a new SQL Server instance or backup/restore of the SQL Server encryption key, the following error appears in the **SQL Server Reporting Services Manager**

```
The feature: “Scale-out deployment” is not supported in this edition of Reporting Services. (rsOperationNotSupported)
```

## Cause

This error indicates that the restored key corresponds to the previous server, leading your Reporting Server instance to perceive itself as part of a multi-server deployment, which is not supported in the standard edition of Reporting Services.

## Resolution

To resolve the issue, check the servers currently in use and remove the encryption key of the old server:

1. Open the **Report Server Configuration Manager**.
2. Navigate to the **Scale-out deployment** tab.
3. Review your current configuration for any old servers.
4. Navigate to your Report Server database and check the [Keys] table. Delete the extra entries with the following statement:

```sql
DELETE from dbo.Keys WHERE MachineName='X'
```

where `'X'` is your old server name.

### Related Articles:

- [The feature: "Scale-out deployment" is not supported in this edition of Reporting Services ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/answers/questions/653685/the-feature-scale-out-deployment-is-not-supported)
