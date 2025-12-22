---
description: >-
  This article describes symptoms, cause, and resolutions for Error 1053 when
  the SQL Server Reporting Services (SSRS) service fails to start on a Netwrix
  Auditor server. It explains how to identify SSRS corruption and how to repair
  or reinstall SSRS to resolve the issue.
keywords:
  - SSRS
  - SQL Server Reporting Services
  - Error 1053
  - service did not respond
  - Netwrix Auditor
  - web.config
  - rssrvpolicy.config
  - RSPortal.exe.config
  - ReportServer
products:
  - auditor
sidebar_label: 'Error: Service Did Not Respond to Start or Control'
tags: []
title: 'Error: Service Did Not Respond to Start or Control Request in SSRS'
knowledge_article_id: kA0Qk0000001PE5KAM
---

# Error: Service Did Not Respond to Start or Control Request in SSRS

## Symptoms

The following symptoms affect your Netwrix Auditor and SQL Server Reporting Services (SSRS) server:

- When you attempt to run reports via the Auditor console, you see the following message:

```text
Can't reach this page.
```

- The `SQL Server Reporting Services` service fails to start and displays error 1053:

```text
Error 1053: The service did not respond to the start or control request in a timely fashion.
```

- The SSRS log files located in `C:\Program Files\Microsoft SQL Server Reporting Services\SSRS\LogFiles` contain the following error:

```text
System.IO.FileLoadException: Could not load file or assembly '%name%' or one of its dependencies. 
The located assembly's manifest definition does not match the assembly reference. 
(Exception from HRESULT: 0x80131040)
```

## Cause

Your SSRS instance is corrupted.

> **NOTE:** In some cases of SSRS corruption, the following SSRS files are blank or contain illegible symbols:
>
> ```text
> C:\Program Files\Microsoft SQL Server Reporting Services\SSRS\ReportServer\web.config
> ```
>
> ```text
> C:\Program Files\Microsoft SQL Server Reporting Services\SSRS\ReportServer\rssrvpolicy.config
> ```
>
> ```text
> C:\Program Files\Microsoft SQL Server Reporting Services\SSRS\Portal\RSPortal.exe.config
> ```

## Resolutions

Apply one of the following options to resolve the issue:

- Repair the SSRS instance.

  1. In **Programs and Features**, select **Microsoft SQL Server Reporting Services** and click **Uninstall/Change**.
  2. In the new window, select **Repair** and proceed with the prompted steps.

- Uninstall SQL Server Reporting Services and install the application on the Auditor server.

  > **IMPORTANT:** This resolution applies only to SQL Server Standard and Enterprise editions.
