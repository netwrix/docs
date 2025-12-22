---
description: >-
  This article outlines the required .NET version for Netwrix Recovery for Active Directory and provides guidance on checking installed .NET Framework versions.
keywords:
  - .NET
  - Netwrix Recovery for Active Directory
  - ASP.NET Core
products:
  - recoveryad
sidebar_label: .NET Dependencies for Recovery
tags: []
title: ".NET Dependencies for Netwrix Recovery for Active Directory"
knowledge_article_id: kA0Qk0000002DyrKAE
---

# .NET Dependencies for Netwrix Recovery for Active Directory

## Related Query

- ".NET on the Netwrix application server is End-Of-Life (EOL). Is it safe to remove it?"

## Question

Which version of .NET is required for Netwrix Recovery for Active Directory?

## Answer

ASP.NET Core 8.06 or newer is required. You can also navigate to the [Recovery for Active Directory](https://docs.netwrix.com/docs/recoveryforactivedirectory/2_6) landing page for the product **Requirements** located under **Getting Started**.

> **NOTE:** .NET Framework is not the same as ASP.NET Core, and having one does not mean you have the other. ASP.NET Core and .NET Desktop Runtime should show on the list of installed Apps & features; however, .NET Framework does not appear on that list. You can check which versions of .NET Framework you have installed by running the following command in PowerShell:

```powershell
Get-ChildItem 'HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP' -Recurse | 
    Get-ItemProperty -Name version -EA 0 | Where { $_.PSChildName -Match '^(?!S)\p{L}'} | 
    Select PSChildName, version
```

Example:

![Dialog box for selecting monitoring plan settings with the Schedule tab active](https://nwxcorp.file.force.com/servlet/rtaImage?eid=ka0Qk000000DMqk&feoid=00N0g000004CA0p&refid=0EMQk00000Bs0kh)

## Related Articles

- [Recovery for Active Directory](https://docs.netwrix.com/docs/recoveryforactivedirectory/2_6)
- [.NET Dependencies for Netwrix Access Analyzer](/docs/kb/activitymonitor/best-practices-and-reference/net_dependencies_for_netwrix_access_analyzer.md)
- [.NET Dependencies for Netwrix Threat Prevention](/docs/kb/activitymonitor/best-practices-and-reference/net_dependencies_for_netwrix_threat_prevention.md)
- [.NET Dependencies for Netwrix Threat Manager](/docs/kb/activitymonitor/best-practices-and-reference/net_dependencies_for_netwrix_threat_manager.md)
- [.NET Dependencies for Netwrix Activity Monitor](/docs/kb/activitymonitor/best-practices-and-reference/net_dependencies_for_netwrix_activity_monitor.md)