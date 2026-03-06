---
description: >-
  This article outlines the .NET dependencies required for Netwrix Access Analyzer and related products.
keywords:
  - .NET Framework
  - Netwrix Access Analyzer
  - system requirements
products:
  - accessanalyzer
sidebar_label: .NET Dependencies for Access Analyzer
tags: []
title: ".NET Dependencies for Netwrix Access Analyzer"
knowledge_article_id: kA0Qk0000001hxNKAQ
---

# .NET Dependencies for Netwrix Access Analyzer

## Related Query

- ".NET on the Netwrix application server is End-Of-Life (EOL). Is it safe to remove it?"

## Question

Which version of .NET is required for Netwrix Access Analyzer?

## Answer

Here is a list of products and their .NET requirements:

### Netwrix Access Analyzer

- .NET Framework 4.7.2 or newer

This includes:

- Netwrix Enterprise Auditor 11.6
- Netwrix Access Information Center version 11.6
- Netwrix Sensitive Data Discovery Add-on version 11.6
- Netwrix Enterprise Auditor File System Scanning Proxy (FSAA Proxy) 11.6

You can also navigate to the [Netwrix Access Analyzer Requirements](https://docs.netwrix.com/docs/accessanalyzer/12_0/requirements/overview) located under **Getting Started**.

> **NOTE:** .NET Framework is not the same as ASP.NET Core, and having one does not mean you have the other. ASP.NET Core and .NET Desktop Runtime should appear on the list of installed Apps & Features; however, .NET Framework does not appear on that list. You can check which versions of .NET Framework you have installed by running the following command in PowerShell:

```powershell
Get-ChildItem 'HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP' -Recurse | 
Get-ItemProperty -Name version -EA 0 | Where { $_.PSChildName -Match '^(?!S)\p{L}'} | 
Select PSChildName, version
```

Example:

![PowerShell Example Output](../0-images/ka0Qk000000DG8bIAG.png)

## Related Articles

- [Netwrix Access Analyzer Requirements](https://docs.netwrix.com/docs/accessanalyzer/12_0/requirements/overview)
