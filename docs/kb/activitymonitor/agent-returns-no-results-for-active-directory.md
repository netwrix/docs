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
  - activitymonitor
  - threat-prevention
sidebar_label: Agent Returns No Results for Active Directory
tags: []
title: "Agent Returns No Results for Active Directory"
knowledge_article_id: kA04u000000LLO2CAO
---

# Agent Returns No Results for Active Directory

## Symptom

You have encountered the following `Cannot Find Process` error in the Netwrix Threat Prevention logs:

```text
Failed loading monitor dll:
C:\Program Files\STEALTHbits\StealthINTERCEPT\SIWindowsAgent\SI.ActiveDirectoryMonitor.dll, status: CannotFindProcess
```

When attempting to create a dump of `LSASS.exe` via Task Manager on the affected domain controller, it fails or creates a 0-kb file. If the dump creation succeeds, it does not indicate that `SIWindowsAgent.exe` is not blocked, only that `Taskmgr.exe` is allowed to access `LSASS.exe`.

## Cause

Endpoint protection is hiding the `LSASS.exe` process from `SIWindowsagent.exe` or otherwise blocking the hook into the LSASS API. Common EPP solutions include CarbonBlack, Cylance, and CrowdStrike.

## Resolution

In the endpoint protection configuration, allow `SIWindowsAgent.exe` and the contents of the SIAgent install directory access to `LSASS.exe`. Refer to the following default folder:

```text
C:\Program Files\STEALTHBits\StealthINTERCEPT\SIWindowsAgent
```

Refer to the following article for additional information on recommended exclusions for your antivirus and endpoint protection solutions: Installation — Antivirus Software Considerations · v7.3
https://docs.netwrix.com/docs/threatprevention/7_5

## Related Article

- Installation — Antivirus Software Considerations · v7.3  
  https://docs.netwrix.com/docs/threatprevention/7_5
