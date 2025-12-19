---
description: >-
  Access violations can occur when running Data Collectors that use associated
  .exe files. This article lists affected collectors and provides a workaround
  to run those executables with elevated privileges.
keywords:
  - access violation
  - data collector
  - UAC
  - run as administrator
  - Private Assemblies
  - Netwrix Access Analyzer
  - StealthAUDIT.exe
  - ExchangePS
  - PowerShell
products:
  - access-analyzer
sidebar_label: Access Violations
tags:
  - troubleshooting-and-errors
title: "Access Violations"
knowledge_article_id: kA04u0000000II7CAM
---

# Access Violations

## Summary:
**Summary:** Access Violation when running Data Collectors that have an `.exe` associated to them

## Issue:
**Issue:** Experiencing access violations

## Instructions:
**Instructions:** There are a few data collectors that have associated `.exe` files with them:

- Blackberry Data Collector
- Powershell Data Collector
- ExchangePS DC
- Exchange2k DC
- Smartlog DC

This issue can be caused by having UAC turned on, or the account running Netwrix Access Analyzer (formerly Enterprise Auditor) not having sufficient local administrator privileges.

A workaround for this is to set all `.exe` files in the Private Assemblies folder to always Run as Administrator.

1. Go to ` %sainstalldir%\Private Assemblies`
2. Search for `.exe`
3. For each `.exe` file:
   1. Right click > **Properties**
   2. **Compatibility** tab
   3. **Change settings for all users** button
   4. Check the **Run this program as an administrator** box
   5. **OK** > **OK**

You can do this for the `StealthAUDIT.exe`, as well.

## Module:
**Module:** Netwrix Access Analyzer - DC - Blackberry; Netwrix Access Analyzer - DC - Exchange2k; Netwrix Access Analyzer - DC - ExchangePS; Netwrix Access Analyzer - DC - PowerShell; Netwrix Access Analyzer - DC - Smartlog EventLog; Netwrix Access Analyzer - DC - Smartlog IIS

**Salesforce Article ID:** 000001060
