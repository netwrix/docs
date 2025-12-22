---
description: >-
  This article explains how to resolve the 'permissions granted to user are
  insufficient' error when accessing SQL Server Reporting Services (SSRS) Report
  Manager or viewing reports in Netwrix Auditor by disabling UAC and enabling
  active scripting.
keywords:
  - SSRS
  - rsAccessDenied
  - UAC
  - EnableLUA
  - Active scripting
  - Netwrix Auditor
  - Report Manager
  - permissions
products:
  - auditor
visibility: public
sidebar_label: Permissions Granted Are Insufficient in SQL Server
tags: []
title: "Permissions Granted Are Insufficient in SQL Server Reporting Services"
knowledge_article_id: kA00g000000H9Y0CAK
---

# Permissions Granted Are Insufficient in SQL Server Reporting Services

## Symptoms

- The following error is prompted when accessing SSRS Report Manager or viewing reports in Netwrix Auditor:

```
The permissions granted to user '%domain\\user%' are insufficient for performing this operation. (rsAccessDenied)
```

- In older SSRS versions, the error reads as follows:

```
User "%domain\\user" does not have required permissions.
Verify that sufficient permissions have been granted and Windows User Account Control (UAC) restrictions have been addressed.
```

- The affected user has sufficient roles granted in the **Security** tab of both **Site Settings** and the Netwrix Auditor **reports** folder. Refer to the following article for additional information on roles required for a service account: https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserverreportingservice (Configure Netwrix Auditor Service Accounts − Configure SSRS Account · v10.6).

## Causes

1. User Account Control (UAC) is enabled in the Netwrix Auditor server preventing the access.
2. The active scripting support is disabled.

## Resolutions

### Cause #1 − Disable UAC in the Netwrix Auditor server

1. Launch **Registry Editor**, and locate the `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System` key.
2. Locate the `EnableLUA` subkey. Right-click it, select **Modify** > change the value data to `0`, and click **OK**.
3. Reboot the server for changes to take effect.

### Cause #2 − Enable active scripting support in the Netwrix Auditor server

1. In **Control Panel**, select **Internet Options**.

> NOTE: Alternatively, you can find the **Internet Properties** menu via the **Search** bar.

2. Under the **Security** tab, click **Custom level**.
3. Locate the **Scripting** node, and check the **Enable** option under the **Active scripting** subnode.
4. Click **OK** > **OK** twice to save the changes. A reboot is required for changes to take effect.

## Related articles

- Configure Netwrix Auditor Service Accounts − Configure SSRS Account · v10.6  
  https://docs.netwrix.com/docs/auditor/10_8/requirements/sqlserverreportingservice
