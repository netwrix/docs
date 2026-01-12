---
title: "File System"
description: "File System"
sidebar_position: 40
---

# File System

Threat Prevention for File System provides organizations with real-time visibility into and control
over changes and access activities occurring within Windows file systems. It also provides real-time
visibility into file access and change activities occurring on NAS devices.

- Threat Prevention authoritatively records a complete audit trail of events for security,
  compliance, and forensic investigation, and alerts on critical activities in real-time without
  reliance on native logging facilities or impacting system performance.
- Threat Prevention also optionally blocks change and access events from occurring at the share,
  folder, or file level on Windows file systems, enabling complete control over critical data
  regardless of natively supplied access rights.

Some important events Threat Prevention captures within a Windows file system are:

- File Access Events (Create, Read, Write, Move, Copy, Delete, Rename)
- Permission Changes
- Attribute Changes
- Audit Changes
- Owner Changes
- Share Events (Add, Delete, Update, Permission Change)
- I/O Type Events (Native File System, Shadow Copy)

Some important events Threat Prevention captures within a NAS file system are:

- File Access Events (Create, Copy, Delete, Rename, Read, Update)
- Permission Changes

:::note
For NAS monitoring, Threat Prevention employs the Netwrix Activity Monitor component.
:::


## File System Event Types

The following event types are available for File System:

- [File System Changes Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/filesystemchanges/filesystemchanges.md)
- [File System Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/filesystemlockdown.md)
- [File System Enterprise Auditor Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/filesystemaccessanalyzer.md)
