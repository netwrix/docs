---
title: "Netwrix Activity Monitor Integration"
description: "Configure the Gen 7 Agent to use Netwrix Activity Monitor as the data source for file change attribution on Windows"
sidebar_position: 20
---

# Netwrix Activity Monitor Integration

Netwrix Change Tracker can use the **Netwrix Activity Monitor** (via its `SBTService` Windows
service) as an alternative data source for file change attribution on Windows. When this
integration is enabled, the Gen 7 Agent reads user and process information from log files written
by Activity Monitor instead of relying on the built-in kernel mini-filter driver (`NNTInfo.sys`).

This is useful in environments where the kernel driver cannot be loaded — for example, systems
with strict kernel security policies (Secure Boot / HVCI), certain hypervisor configurations, or
where Activity Monitor is already deployed and you want a single audit trail for file activity.

:::note
This feature applies to **Windows only** and to **file integrity monitoring (FIM) with live
tracking**. Linux devices are unaffected.
:::

## Prerequisites

- Netwrix Activity Monitor installed on the monitored Windows server, with the `SBTService`
  Windows service running.
- Netwrix Change Tracker Gen 7 Agent (8.2 or later) installed on the same server.
- A FIM policy with live tracking applied to the device from the Hub. See
  [Policy Templates: FIM File Integrity](/docs/changetracker/8.2/admin/settingstab/policytemplates/fimfiles.md)
  for additional information.

## How it works

When the integration is enabled:

1. The Gen 7 Agent automatically generates a configuration file (`SBTFileMon.ChangeTracker.ini`)
   in the Activity Monitor configuration directory whenever it receives a FIM policy from the Hub.
   This file instructs Activity Monitor which paths to monitor and in what format to log events.
2. Activity Monitor's `SBTService` writes file change events — including the user account and
   process name responsible — to a daily JSON log file on the local disk. Files are named
   `{hostname}_CT_Log_{YYYYMMDD}.json`.
3. The Gen 7 Agent continuously reads these log files and caches attribution data keyed by file
   path.
4. When a file change is detected by the agent's file system watcher, the cached attribution data
   is attached to the event before it is sent to the Hub.

The agent and the kernel driver are mutually exclusive as attribution sources. If both are
configured, Activity Monitor takes precedence and the kernel driver is not loaded.

## Configuration

Activity Monitor integration is configured in the Gen 7 Agent's `app.config` file, located at:

```
%PROGRAMDATA%\NNT\gen7agent.service\app.config
```

Add or update the following keys in the `<appSettings>` section:

| Key | Value | Description |
|---|---|---|
| `useActivityMonitorChangeSource` | `true` | Enables Activity Monitor as the attribution source. Set to `false` (or omit) to use the default kernel driver. |
| `activityMonitorChangeSourceDirectory` | Path to log directory | The folder where Activity Monitor writes its `_CT_Log_` JSON files. Must match the `LOG_FILE` directory in the generated INI (see below). |
| `changeSourceFileFormat` | `json` (default) or `tsv` | Log file format written by Activity Monitor. Leave as `json` unless Activity Monitor is explicitly configured for TSV output. |

Example `<appSettings>` entries:

```xml
<add key="useActivityMonitorChangeSource" value="true" />
<add key="activityMonitorChangeSourceDirectory" value="C:\ProgramData\Netwrix\ActivityMonitor\CTLogs" />
<add key="changeSourceFileFormat" value="json" />
```

:::warning
Do not set both `useActivityMonitorChangeSource=true` and `loaddriver=true`. These are mutually
exclusive. If both are present, Activity Monitor will be used and the kernel driver will be
disabled automatically, but it is best practice to explicitly set `loaddriver=false` to avoid
ambiguity.
:::

**Step 1 –** Open `app.config` in a text editor with administrator privileges and add the keys
above with the appropriate values for your environment.

**Step 2 –** Restart the Gen 7 Agent service for the changes to take effect:

```powershell
Restart-Service gen7agent.service
```

**Step 3 –** Confirm that a FIM live-tracking policy is applied to the device from the Hub. The
agent generates the Activity Monitor INI file the next time it receives a device configuration
update. To trigger this immediately, navigate to **Settings > Agents and Devices**, select the
device, and click **Refresh Configuration**.

## Auto-generated INI file

When the agent receives a FIM policy, it automatically writes
`SBTFileMon.ChangeTracker.ini` alongside the Activity Monitor's existing main configuration
file. The agent discovers the correct directory by reading the registry key:

```
HKLM\SYSTEM\CurrentControlSet\Services\SBTLogging\Parameters\ConfigPath
```

The INI file instructs Activity Monitor to log file events to the directory specified by
`activityMonitorChangeSourceDirectory`, using the path filters derived from the FIM policy
configured in the Hub. You do not need to edit this file manually — it is regenerated each
time the FIM policy changes.

If the FIM policy is removed from a device, the agent disables the corresponding section in
the INI file automatically.

:::note
The `SBTFileMon.ChangeTracker.ini` file is separate from Activity Monitor's main
`SBTFileMon.ini`. Other monitoring sections in the main INI are not affected.
:::

## Troubleshooting

**No user attribution in events**

- Confirm `SBTService` is running: `Get-Service SBTService`.
- Verify the `activityMonitorChangeSourceDirectory` path exists and contains files matching
  the pattern `*_CT_Log_{YYYYMMDD}.json`.
- Check the agent's `rolling-log.txt` for warnings from `ActivityMonitorChangeSource`. Look
  for messages indicating the directory or log file cannot be found.

**INI file not generated**

- Check that the registry key
  `HKLM\SYSTEM\CurrentControlSet\Services\SBTLogging\Parameters\ConfigPath` exists and
  contains a valid path. This key is created by the Activity Monitor installer; if it is
  missing, Activity Monitor may not be installed correctly.
- Confirm the FIM policy is assigned to the device in the Hub and that live tracking is
  enabled in the policy template.

**Both driver and Activity Monitor appear active**

- Review `app.config` and ensure `loaddriver` is set to `false` or removed. The agent logs a
  warning to `rolling-log.txt` if both settings are enabled simultaneously.
