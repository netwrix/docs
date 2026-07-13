---
description: >-
  Resolving the "file is being used by another process" error when running a
  report in Netwrix Change Tracker, typically caused by antivirus or EDR
  solutions locking the report file.
keywords:
  - file in use
  - antivirus exclusion
  - EDR
  - real-time scan
  - report error
  - file locked
  - C:\Windows\TEMP
  - process cannot access file
  - AV conflict
  - report generation error
products:
  - change-tracker
sidebar_label: File Is Being Used by Another Process Error
tags:
  - kb
  - troubleshooting-and-errors
title: File Is Being Used by Another Process Error in Netwrix Change Tracker
knowledge_article_id: ""
---

# File Is Being Used by Another Process Error in Netwrix Change Tracker

## Symptom

The following error appears when attempting to run a report in Netwrix Change Tracker:

```text
The process cannot access the file '<path_to_file>' because it is being used by another process.
```

The `<path_to_file>` may differ depending on the affected report. For example: `C:\Windows\TEMP\1-11530090-NNT CIS Microsoft Windows Server 2012 R2 Benchmark - Level 2 Member Server.json`.

## Cause

An antivirus (AV) or endpoint detection and response (EDR) solution in the environment is conflicting with Change Tracker.

## Resolution

- Exclude the top-level folder of the affected path from the monitoring scope of your AV or EDR solution to prevent further conflicts. This applies to real-time scans and backups. For the example path above, exclude `C:\Windows\TEMP`.
- Exclude Change Tracker folders, services, and processes from the monitoring scope of your AV and EDR. Refer to [Antivirus Exclusions for Netwrix Change Tracker](../configuration-and-setup/antivirus-exclusions-for-netwrix-change-tracker.md) for additional information.
