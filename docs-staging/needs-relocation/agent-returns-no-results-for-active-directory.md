---
description: >-
  Describes how to resolve a CannotFindProcess error when SIWindowsAgent cannot
  access LSASS.exe on a domain controller due to endpoint protection blocking
  the process.
keywords:
  - LSASS
  - SIWindowsAgent
  - CannotFindProcess
  - Active Directory
  - endpoint protection
  - antivirus exclusions
  - Task Manager
  - SI.ActiveDirectoryMonitor
products:
  - threat-prevention
sidebar_label: Agent Returns No Results for Active Directory
tags: [Troubleshooting]
title: "Agent Returns No Results for Active Directory"
knowledge_article_id: kA04u000000LLO2CAO
---

# Agent Returns No Results for Active Directory

## Symptoms

1. You encounter the following `Cannot Find Process` error in the Netwrix Threat Prevention logs:

   * `Failed loading monitor DLL: C:\Program Files\STEALTHbits\StealthINTERCEPT\SIWindowsAgent\SI.ActiveDirectoryMonitor.dll, status: CannotFindProcess`

2. When inspecting `C:\Program Files\Netwrix\Netwrix Threat Prevention\SIWindowsAgent\ADMonitor_Logs`, if there is no recent `HookTrace<yyyy-mm-dd>.log` present, the agent is blocked from hooking `LSASS.exe` by a third party.

3. When attempting to create a dump of `LSASS.exe` via Task Manager on the affected domain controller, it fails or creates a 0-KB file. If the dump creation succeeds, it does not indicate that `SIWindowsAgent.exe` is not blocked, only that `Taskmgr.exe` is allowed to access `LSASS.exe`.

## Cause

Endpoint protection is hiding the `LSASS.exe` process from `SIWindowsAgent.exe` or otherwise blocking the hook into the LSASS API. Common endpoint protection (EPP) solutions include Carbon Black, Cylance, and CrowdStrike.

> **NOTE:** Not all endpoint protection software properly logs when they block the attempted `LSASS.exe` hook.

## Resolution

1. Refer to the following article for recommended exclusions for your antivirus and endpoint protection solutions: [Installation — Antivirus Software Considerations](https://docs.netwrix.com/docs/threatprevention/7_5/install/overview#antivirus-software-considerations).
2. Inspect the following registry key:
   `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa`
3. If this location contains the value `RunAsPPL` of type `REG_DWORD` set to `1`, change it to **`0`** and reboot the machine.
4. If this change allows `SIWindowsAgent.exe` to inject into `LSASS.exe` (i.e., no `processNotFound` error is returned), then you must add the file **`plsahlp.sys`** to the allowlist of the EDR/antivirus solution before setting the registry value back to `1`.
5. If, after validating these exclusions and restarting the SIWindowsAgent, the hook to `LSASS.exe` still fails, contact your endpoint protection vendor's support for assistance with proper configuration.

## Related Links

* [Installation — Antivirus Software Considerations](https://docs.netwrix.com/docs/threatprevention/7_5/install/overview#antivirus-software-considerations)
* [Configuring Additional LSA Protection](https://docs.microsoft.com/en-us/windows-server/security/credentials-protection-and-management/configuring-additional-lsa-protection)
