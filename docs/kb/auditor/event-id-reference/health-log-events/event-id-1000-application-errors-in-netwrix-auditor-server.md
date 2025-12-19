---
description: >-
  Describes causes and resolutions for Event ID 1000 application errors on the
  Netwrix Auditor server, including steps to repair corrupted DLLs and run
  system scans.
keywords:
  - Event ID 1000
  - Kernelbase.dll
  - sfc /scannow
  - DISM
  - antivirus exclusions
  - Netwrix Auditor
  - DLL corruption
  - application error
products:
  - auditor
sidebar_label: Event ID 1000 Application Errors in Netwrix Audito
tags: []
title: "Event ID 1000 Application Errors in Netwrix Auditor Server"
knowledge_article_id: kA04u000001119VCAQ
---

# Event ID 1000 Application Errors in Netwrix Auditor Server

## Symptoms

- No data is collected in your Active Directory monitoring plan.
- When attempting to set up a monitoring plan via **Audit Configuration Assistant** in your Netwrix Auditor server, the following error is prompted:

```
Cannot display assessment results
Netwrix Auditor Server is unreachable.
Your network settings are not properly configured.
```

- The following error is prompted in your server event log:

```
Event ID: 1000
Faulting application name: Netwrix.ADA.DirSyncCollector.exe, version: %current Auditor_version%
Faulting module name: Kernelbase.dll, version: %.dll_version%
Exception code: 0xe0434352
Faulting application path: %path%
Faulting module path: %path%
```

> **IMPORTANT:** Both **Faulting application name** and **Faulting module name** may differ — they depend on the affected monitoring plan. The issue may also affect different Netwrix-related executables (e.g., `Netwrix.ADA.SitServiceUpdater.exe`, `Netwrix.ADA.BackwardDataAnalyzer.exe`, `Netwrix.ADA.EventCollector.exe`, etc.) based on the affected monitoring plans, as well as system and (or) Netwrix-related dynamic-link library files.
>
> It is important to refer to the paths stated in error messages to understand the scope of components affected.

## Cause

The **Faulting module name** dynamic-link library file was corrupted. This could happen due to a conflict between your antivirus solution and Netwrix Auditor.

## Resolutions

1. Set up antivirus exclusions to prevent both your antivirus solution and Netwrix Auditor from conflicting — refer to the following article for additional information: [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)

2. Establish the scope of affected `.dll` files. In case the **Faulting module path** links the system folder (e.g., `C:\Windows\System32`), follow these steps:

   1. Once the antivirus exclusions are set up, run elevated Command Prompt in your Netwrix Auditor server. In elevated Command Prompt line, run the following command to scan Windows and restore your system-related files:

   ```bash
   sfc /scannow
   ```

   2. Once the scan is finished, run the following commands one by one allowing each to complete to prepare, scan, and restore the Windows system image via Deployment Image Servicing and Management tool:

   ```bash
   Dism /Online /Cleanup-Image /CheckHealth
   ```

   ```bash
   Dism /Online /Cleanup-Image /ScanHealth
   ```

   ```bash
   Dism /Online /Cleanup-Image /RestoreHealth
   ```

   3. Once the commands are completed and components are restored, restart the server.

3. In case the **Faulting module path** links a Netwrix-related folder (e.g., `C:\Program Files (x86)\Netwrix Auditor\Active Directory Auditing`), repair your Netwrix Auditor installation. Refer to the following article for additional information: [How to Repair Netwrix Auditor Installation](/docs/kb/auditor/configuration-and-setup/general-configuration/how-to-repair-netwrix-auditor-installation)

## Related articles

- [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
- [How to Repair Netwrix Auditor Installation](/docs/kb/auditor/configuration-and-setup/general-configuration/how-to-repair-netwrix-auditor-installation)
