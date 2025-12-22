---
description: >-
  This article addresses the error encountered in the Health Log for Exchange Online monitoring plans related to the inability to load the System.Net.Http assembly.
keywords:
  - Exchange Online
  - System.Net.Http
  - .NET Framework
sidebar_label: Could Not Load System.Net.Http
tags: []
title: "Could Not Load System.Net.Http in Exchange Online Monitoring Plan"
knowledge_article_id: kA04u00000111LWCAY
products:
  - auditor
---

# Could Not Load System.Net.Http in Exchange Online Monitoring Plan

## Symptom

The following error is prompted in the Health Log for your Exchange Online monitoring plan:

```
Source: Office 365 Audit Service
Event ID: 2002
Description: Monitoring Plan: %monitoring_plan_name%
The following error has occurred while processing '%item_name%':
Cannot execute the PowerShell command. Error:
Could not load file or assembly 'System.Net.Http, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a' or one of its dependencies.
The system cannot find the file specified.
```

## Cause

The .NET Framework version installed in your environment does not comply with the software requirements for **Netwrix Auditor**. Refer to the following article for additional information: [Software Requirements ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/requirements/software).

## Resolution

Update the .NET Framework version in both the **Auditor** server and affected client. For the offline .NET Framework v4.8.1 installer, visit [Download .NET Framework 4.8.1 ⸱ Microsoft 🡥](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net481).

## Related Articles

- [Software Requirements ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/requirements/software)
- [Download .NET Framework 4.8.1 ⸱ Microsoft 🡥](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net481)