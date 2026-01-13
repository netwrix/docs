---
description: >-
  This article outlines the .NET dependencies required for Netwrix Threat Manager, including installation instructions and verification steps.
keywords:
  - .NET dependencies
  - Netwrix Threat Manager
  - ASP.NET Core
products:
  - threat-manager
sidebar_label: .NET Dependencies for Threat Manager
tags: []
title: ".NET Dependencies for Netwrix Threat Manager"
knowledge_article_id: kA0Qk0000002E25KAE
---

# .NET Dependencies for Netwrix Threat Manager

## Related Query

- ".NET on the Netwrix application server is End-Of-Life (EOL). Is it safe to remove it?"

## Question

Which version of .NET is required for Netwrix Threat Manager?

## Answer

ASP.NET Core 8.0.11 (or newer) and .NET Desktop Runtime 8.0.11 (or newer) are required. You can also navigate to the [Netwrix Threat Manager](https://docs.netwrix.com/docs/threatmanager/3_0) landing page for the product **Requirements** located under **Getting Started**.

> **NOTE:** .NET Framework is not the same as ASP.NET Core, and having one does not mean you have the other. ASP.NET Core and .NET Desktop Runtime should show on the list of installed Apps & features; however, .NET Framework does not appear on that list. You can check which versions of .NET Framework you have installed by running the following command in PowerShell:

```powershell
Get-ChildItem 'HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP' -Recurse | 
    Get-ItemProperty -Name version -EA 0 | Where { $_.PSChildName -Match '^(?!S)\p{L}'} | 
    Select PSChildName, version
```

Example:

![Dialog box for selecting monitoring plan settings with the Schedule tab active](https://nwxcorp.file.force.com/servlet/rtaImage?eid=ka0Qk000000DNd7&feoid=00N0g000004CA0p&refid=0EMQk00000BsCU5)

## Related Articles

- [Netwrix Threat Manager Requirements](https://docs.netwrix.com/docs/threatmanager/3_0/requirements/server)
- [.NET Dependencies for Netwrix Access Analyzer](/docs/kb/accessanalyzer/reference-and-technical-specifications/net_dependencies_for_netwrix_access_analyzer)
- [.NET Dependencies for Netwrix Recovery for Active Directory](/docs/kb/recoveryad/configuration-and-administration/net_dependencies_for_netwrix_recovery_for_active_directory)
- [.NET Dependencies for Netwrix Threat Prevention](/docs/kb/threatprevention/configuration-and-administration/net_dependencies_for_netwrix_threat_prevention)
- [.NET Dependencies for Netwrix Activity Monitor](/docs/kb/activitymonitor/best-practices-and-reference/net_dependencies_for_netwrix_activity_monitor)