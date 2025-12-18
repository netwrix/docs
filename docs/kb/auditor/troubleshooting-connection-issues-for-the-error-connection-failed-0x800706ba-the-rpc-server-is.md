---
description: >
  Troubleshooting guide for resolving "RPC Server Unavailable (0x800706BA)" connection issues in Netwrix Auditor, covering network stability, antivirus interference, and resource limitations.
keywords:
  - RPC server unavailable
  - 0x800706BA
  - Netwrix Auditor
  - compression service
  - connection issues
  - antivirus exclusions
  - network instability
  - insufficient resources
products:
  - auditor
sidebar_label: Troubleshooting Connection Issues - RPC Server Unavailable
title: Troubleshooting Connection Issues - RPC Server Unavailable (0x800706BA)
knowledge_article_id: kA0Qk000000XXXXKAA
---

# Troubleshooting Connection Issues - RPC Server Unavailable (0x800706BA)

> **IMPORTANT:** This error, especially when it occurs infrequently, does not result in audit data loss. The collector continues gathering data from where it was last interrupted. Verify data timeliness in reports to determine whether this impacts the delivery of audit data by the collector.

## Overview

This error occurs when the Netwrix Auditor File Server collector cannot establish or maintain a connection with the RPC server. Common causes include network instability, antivirus interference, or insufficient system resources. The following sections provide steps to identify and resolve these issues.

## Instructions

### 1. Connection Dropping with Compression Service During Data Collection

When collecting data from the target audited server, it is essential to maintain a stable and reliable connection with the **Compression service**. Network instability can interrupt data transmission and cause connection drops.

To resolve this issue:

- Inspect and configure network equipment to ensure a consistent connection.
- Verify bandwidth stability and latency thresholds.
- Test network reliability between the **Auditor Server** and **target audited server**.

Maintaining a stable network connection helps the data collection process complete without interruption.

### 2. Unstable Connection During Large-Scale Audits

During large-scale audits, unstable connections may disrupt the process. To reduce network load and improve reliability, divide large audit scopes into smaller parts — for example, add each server share separately as an individual item instead of adding the entire server at once.

> **IMPORTANT:** Apply this recommendation to critical audit objects only. For example, if a file server includes many shared folders but not all need auditing, exclude the unnecessary folders using **Excludes**. The collector will then focus on necessary data only. Use the **Resource Estimation Tool (RET)** to calculate your audit scope and estimate server resources: [Resource Estimation Tool](https://releases.netwrix.com/products/auditor/10.7/auditor-resource-estimation-tool-1.2.39.zip)

### 3. Antivirus Interference on the Auditor Server or Target Audited Server

Antivirus software is essential for system protection but can sometimes interfere with Netwrix Auditor or its **Compression service** by blocking or delaying connections.

Common interference causes include:

- **Connection blocking:** Legitimate network connections may be flagged as threats and blocked.
- **Traffic scanning:** Continuous scanning may delay or disrupt communication.
- **False positives:** Antivirus may isolate or delete Auditor or Compression service files.

To prevent this interference, add the following exclusions to your antivirus configuration.

#### Netwrix Auditor Server

**Paths:**

- `C:\ProgramData\Netwrix Auditor`

> **NOTE:** If the default data location has changed, verify the current path in the registry key:
> `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\DataPathOverride`

**Processes:**

- `NwFileStorageSvc (NwCoreSvc.exe)`

#### Target Audited Server (if Compression Service Is Enabled)

**Paths:**

- `C:\Windows\SysWOW64\NwxExeSvc`

**Processes:**

- `NwxExeSvc.exe`
- `NwxFsAgent.exe`
- `NwxEventCollectorAgent.exe`
- `NwxSaclTunerAgent.exe`

For a complete list of antivirus exclusions, see [Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor).

### 4. Insufficient Disk Space on the Target Audited Server

Low disk space on the agent’s system drive can cause the **Compression service** to malfunction or fail.

To resolve:

- Free up disk space by removing unnecessary files or logs.
- Move large data files to secondary storage.
- Extend the disk volume if necessary.

Ensure that sufficient free space exists for both system operations and Netwrix Auditor processes.

### 5. Insufficient System Resources (CPU or RAM) for the Compression Service

If the target audited server lacks sufficient CPU or RAM resources to handle large audit volumes, the **Compression service** may fail or slow down significantly.

Recommended actions:

- Segment or limit the audit scope to reduce processing demand.
- Exclude unnecessary targets from the audit.
- Increase available CPU and memory resources on the target server.

## Related Links

- [Error: 0x800706BA - RPC Server Is Unavailable](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/error-0x800706ba-rpc-server-is-unavailable)
