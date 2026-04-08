---
description: >-
  This article outlines the required .NET version for Netwrix Threat Prevention and provides guidance on checking installed .NET Framework versions.
keywords:
  - .NET Framework
  - Netwrix Threat Prevention
  - system requirements
sidebar_label: .NET Dependencies for Threat Prevention
tags: []
title: ".NET Dependencies for Netwrix Threat Prevention"
knowledge_article_id: kA0Qk0000002DxFKAU
products:
  - threat-prevention
---

# .NET Dependencies for Netwrix Threat Prevention

## Related Query

- ".NET on the Netwrix application server is End-Of-Life (EOL). Is it safe to remove it?"

## Question

Which version of .NET is required for Netwrix Threat Prevention?

## Answer

.NET Framework 4.7.2 or newer is required. You can also navigate to the [Netwrix Threat Prevention Requirements](https://docs.netwrix.com/docs/threatprevention/7_5/requirements/overview) located under **Getting Started**.

> **NOTE:** .NET Framework is not the same as ASP .NET Core, and having one does not mean you have the other. ASP.NET Core and .NET Desktop Runtime should show on the list of installed Apps & features; however, .NET Framework does not appear on that list. You can check which versions of .NET Framework you have installed by running the following command in PowerShell:

```powershell
Get-ChildItem 'HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP' -Recurse | 
    Get-ItemProperty -Name version -EA 0 | Where { $_.PSChildName -Match '^(?!S)\p{L}'} | 
    Select PSChildName, version
```

Example:

![PowerShell Example Output](../0-images/ka0Qk000000DG8bIAG.png)

## Related Articles

- [Netwrix Threat Prevention Requirements](https://docs.netwrix.com/docs/threatprevention/7_5/requirements/overview)