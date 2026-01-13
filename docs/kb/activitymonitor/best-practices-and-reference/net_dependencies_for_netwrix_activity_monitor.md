---
description: >-
  This article outlines the .NET Framework requirements for the Netwrix Activity Monitor and provides guidance on checking installed versions.
keywords:
  - .NET Framework
  - Netwrix Activity Monitor
  - PowerShell
sidebar_label: .NET Dependencies for Activity Monitor
tags: []
title: ".NET Dependencies for Netwrix Activity Monitor"
knowledge_article_id: kA0Qk0000002LBdKAM
products:
  - activitymonitor
---

# .NET Dependencies for Netwrix Activity Monitor

## Related Query

- ".NET on the Netwrix application server is End-Of-Life (EOL). Is it safe to remove it?"

## Question

Which version of .NET is required for Netwrix Activity Monitor?

## Answer

.NET Framework 4.7.2 or newer is required. You can also navigate to the [Netwrix Activity Monitor Requirements](https://docs.netwrix.com/docs/activitymonitor/8_0/requirements/overview) located under **Getting Started**.

> **NOTE:** .NET Framework is not the same as ASP.NET Core, and having one does not mean you have the other. ASP.NET Core and .NET Desktop Runtime should appear on the list of installed Apps & Features. However, .NET Framework does not appear on that list.

You can check which versions of .NET Framework you have installed by running the following command in PowerShell:

```powershell
Get-ChildItem 'HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP' -Recurse | 
Get-ItemProperty -Name version -EA 0 | Where { $_.PSChildName -Match '^(?!S)\p{L}'} | 
Select PSChildName, version
```

![PowerShell Example Output](https://nwxcorp.file.force.com/servlet/rtaImage?eid=ka0Qk000000E7Hl&feoid=00N0g000004CA0p&refid=0EMQk00000BprDf)

## Related Articles

- [Netwrix Activity Monitor Requirements](https://docs.netwrix.com/docs/activitymonitor/8_0/requirements/overview)
- [.NET Dependencies for Netwrix Access Analyzer](/docs/kb/accessanalyzer/reference-and-technical-specifications/net_dependencies_for_netwrix_access_analyzer)
- [.NET Dependencies for Netwrix Threat Prevention](/docs/kb/threatprevention/configuration-and-administration/net_dependencies_for_netwrix_threat_prevention)
- [.NET Dependencies for Netwrix Recovery for Active Directory](/docs/kb/recoveryad/configuration-and-administration/net_dependencies_for_netwrix_recovery_for_active_directory)
- [.NET Dependencies for Netwrix Threat Manager](/docs/kb/threatmanager/configuration-and-administration/net_dependencies_for_netwrix_threat_manager)