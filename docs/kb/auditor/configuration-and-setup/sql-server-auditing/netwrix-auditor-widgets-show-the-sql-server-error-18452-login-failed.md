---
description: >-
  When you specify the default SQL instance in Netwrix Auditor, SQL Server may
  return error 18452 indicating a Windows authentication/login issue. This
  article describes possible causes and step-by-step resolutions to fix the
  error.
keywords:
  - SQL Server
  - error 18452
  - login failed
  - Windows authentication
  - mixed authentication
  - SQL Server Management Studio
  - Netwrix Auditor
  - untrusted domain
  - SQL login
products:
  - auditor
sidebar_label: 'Netwrix Auditor Widgets Show the SQL Server Error '
tags: []
title: 'Netwrix Auditor Widgets Show the SQL Server Error 18452, Login Failed'
knowledge_article_id: kA04u00000111CoCAI
---

# Netwrix Auditor Widgets Show the SQL Server Error 18452, Login Failed

## Symptom

When attempting to specify the default SQL instance, the following error is prompted:

```
SQL Server error occurred (18452, Login failed. The login is from an untrusted domain and cannot be used with Windows authentication.).
```

## Causes

An SQL Server instance is refusing the connection and Netwrix Auditor is just passing the message along. The below are possible causes of the error:

1. The default **Windows Authentication** mode may cause issues when connecting to the SQL Server.
2. An unrecognized Windows principal is used when trying to connect to SQL Server. In this case, Windows can’t verify the login. This might be because the Windows login is from an untrusted domain.
3. The **SQL Server Authentication** connection mode is used; however, the login does not exist on SQL Server.

## Resolutions

Review the possible resolution scenarios:

1. For cause 1. Switch to the **Mixed** authentication mode.
   1. Open **SQL Server Management Studio**.
   2. Right-click your server and select **Properties**.
   3. In the **Server Properties** dialog, select the **Security** tab.
   4. Enable the **SQL Server and Windows Authentication mode** checkbox.
2. For cause 2. Make sure that you are logged in to the correct domain.
3. For cause 3. Verify that this SQL login exists.
