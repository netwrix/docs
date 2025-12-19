---
description: >-
  Antivirus scanning can interfere with Netwrix Auditor performance and
  operations. This article lists the folders and registry locations you should
  exclude from antivirus scans to avoid timeouts and resource strain.
keywords:
  - Netwrix Auditor
  - antivirus
  - exclusions
  - Long-Term Archive
  - DataPathOverride
  - performance
  - registry
  - audited servers
products:
  - auditor
sidebar_label: Antivirus Exclusions for Netwrix Auditor
tags: []
title: "Antivirus Exclusions for Netwrix Auditor"
knowledge_article_id: kA04u0000000HirCAE
---

# Antivirus Exclusions for Netwrix Auditor

## Question

Should Netwrix Auditor-related folders be excluded from antivirus scans?

## Answer

Your antivirus suite can slow down or even prevent correct operation of Netwrix Auditor. Netwrix Auditor writes information in smaller portions at short intervals — an antivirus will attempt to read the entire file looking for threats after each writing session. This considerably slows down processes of Netwrix Auditor as each short writing session is expected to occur frequently, while a full read of a file might take a long time (especially in a larger environment). This might lead to the following issues:

- Timeouts for larger files, as your antivirus suite might require additional time to check them.
- Additional strain on RAM to suit Auditor needs.
- Additional strain on CPU to suit antivirus needs.
- Issues when upgrading your Netwrix Auditor instance.

It is strongly recommended that you add the following paths to the list of exclusions for your antivirus:

### Netwrix Auditor Server

- **Long-Term Archive** located by default in `C:\ProgramData\Netwrix Auditor\Data`. If you've previously changed the default location, you can look it up in Netwrix Auditor settings:
  - **Main Netwrix Auditor menu** > **Settings** > **Long-Term Archive**

- **Netwrix Auditor Working Folder** located by default in `C:\ProgramData\Netwrix Auditor`. If you've previously changed the default location, you can look the **Default** value up in the registry key:
  - `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\DataPathOverride`

- **Netwrix Auditor Installation Folder** located by default in `C:\Program Files (x86)\Netwrix Auditor`. If you've previously changed the default location, you can look the **InstallPath** value up in the registry key:
  - `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor`

### Audited servers

- `C:\ProgramData\Netwrix Auditor`
- `C:\Windows\SysWOW64\NwxExeSvc`
- `C:\Windows\Netwrix`
- `C:\Windows\Netwrix Auditor`
- `C:\Program Files (x86)\Common Files\Netwrix Auditor`
- `C:\Windows\ADCR_Agent`
- `C:\Program Files (x86)\Netwrix Auditor\Windows Server Compression Service`
- `C:\Program Files\Microsoft SQL Server\MSSQL.MSSQLSERVER\MSSQL`

### Access Review for Netwrix Auditor

- `C:\Program Files\Netwrix\Access Information Center\AccessInformationCenter.Service.Exe`

> **TIP:** Refer to your antivirus documentation for details on how to exclude certain paths from scanning
