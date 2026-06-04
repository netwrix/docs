---
title: "Netwrix Activity Monitor Integration"
description: "Configure the Gen 7 Agent to use Netwrix Activity Monitor as the data source for file change attribution on Windows"
sidebar_position: 20
---

# Netwrix Activity Monitor Integration

Netwrix Change Tracker can use the **Netwrix Activity Monitor** (via its `SBTService` Windows
service, displayed as **Netwrix Windows File Monitoring Service** in `services.msc`) as an
alternative data source for file change attribution on Windows. When you enable this integration,
the Gen 7 Agent reads user and process information from log files that Activity Monitor produces
instead of relying on the built-in kernel mini-filter driver (`NNTInfo.sys`).

This is useful in environments where the system cannot load the kernel driver, for example systems
with strict kernel security policies (Secure Boot / HVCI), certain hypervisor configurations, or
where you already deploy Activity Monitor and want a single audit trail for file activity.

:::note
This feature applies to **Windows only** and to **file integrity monitoring (FIM) with live
tracking**. This feature does not affect Linux devices.
:::

## Prerequisites

- Netwrix Change Tracker Gen 7 Agent (8.2 or later) installed on the same server. The Gen 7
  Agent MSI installs Netwrix Activity Monitor (including the `SBTService` Windows service)
  automatically as part of the agent installation.
- A FIM policy with live tracking applied to the device from the Hub. See
  [Policy Templates: FIM File Integrity](/docs/changetracker/8.2/admin/settingstab/policytemplates/fimfiles.md)
  for additional information.

## How it works

When you enable the integration:

1. The Gen 7 Agent automatically generates a configuration file (`SBTFileMon.ChangeTracker.ini`)
   in the Activity Monitor configuration directory whenever it receives a FIM policy from the Hub.
   This file instructs Activity Monitor which paths to monitor and in what format to log events.
2. Activity Monitor's `SBTService` writes file change events, including the user account and
   process name responsible, to a daily JSON log file on the local disk. The service names these
   files `{hostname}_CT_Log_{YYYYMMDD}.json`.
3. The Gen 7 Agent continuously reads these log files and caches attribution data keyed by file
   path.
4. When the agent's file system watcher detects a file change, it attaches the cached attribution
   data to the event before sending it to the Hub.

The agent and the kernel driver are mutually exclusive as attribution sources. If you configure
both, Activity Monitor takes precedence and the agent does not load the kernel driver.

## Configuration

Configure Activity Monitor integration in the Gen 7 Agent's configuration file, located at:

```
C:\Program Files\NNT Change Tracker Suite\Gen7Agent (NetCore)\Gen7Agent.App.NetCore.dll.config
```

Add or update the following keys in the `<appSettings>` section:

| Key | Value | Description |
|---|---|---|
| `useActivityMonitorChangeSource` | `true` | Enables Activity Monitor as the attribution source. Set to `false` (or omit) to use the default kernel driver. |
| `activityMonitorChangeSourceDirectory` | Path to log directory | The folder where Activity Monitor writes its log files. The default is `C:\ProgramData\Netwrix\Activity Monitor\Agent\ActivityLogs`. Must match the `LOG_FILE` directory in the [auto-generated INI file](#auto-generated-ini-file). |
| `changeSourceFileFormat` | `json` (default) or `tsv` | Log file format that Activity Monitor writes. Leave as `json` unless you explicitly configure Activity Monitor for TSV output. |

Example `<appSettings>` entries:

```xml
<add key="useActivityMonitorChangeSource" value="true" />
<add key="activityMonitorChangeSourceDirectory" value="C:\ProgramData\Netwrix\Activity Monitor\Agent\ActivityLogs" />
<add key="changeSourceFileFormat" value="json" />
```

:::note
The `useActivityMonitorChangeSource` and `loaddriver` settings are mutually exclusive as
attribution sources. If you set both to `true`, the agent automatically uses Activity Monitor
and disables the kernel driver. You don't need to explicitly set `loaddriver=false`, but you
can do so to make the configuration clearer.
:::

**Step 1 –** Open `Gen7Agent.App.NetCore.dll.config` in a text editor with administrator
privileges and add the keys above with the appropriate values for your environment.

**Step 2 –** Restart the Gen 7 Agent service for the changes to take effect:

```powershell
Restart-Service Gen7AgentCore
```

**Step 3 –** Confirm that the Hub applies a FIM live-tracking policy to the device. The
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
`activityMonitorChangeSourceDirectory`, using the path filters that the Hub's FIM policy
defines. You don't need to manually edit this file, as the agent regenerates it each
time the FIM policy changes.

If you remove the FIM policy from a device, the agent automatically disables the corresponding
section in the INI file.

:::note
The `SBTFileMon.ChangeTracker.ini` file is separate from Activity Monitor's main
`SBTFileMon.ini`. This file does not change other monitoring sections in the main INI.
:::

## Troubleshooting

**No user attribution in events**

- Confirm `SBTService` is running: `Get-Service SBTService`. This service appears as
  **Netwrix Windows File Monitoring Service** in `services.msc`.
- Verify the `activityMonitorChangeSourceDirectory` path exists and contains files matching
  the pattern `*_CT_Log_{YYYYMMDD}.json`.
- Check the agent's `rolling-log.txt` for warnings from `ActivityMonitorChangeSource`. Look
  for messages indicating the directory or log file cannot be found.

**INI file not generated**

- Check that the registry key
  `HKLM\SYSTEM\CurrentControlSet\Services\SBTLogging\Parameters\ConfigPath` exists and
  contains a valid path. The Activity Monitor installer creates this key; if it is
  missing, Activity Monitor may not be installed correctly.
- Confirm that the Hub assigns the FIM policy to the device and that the policy template
  enables live tracking.

**Both driver and Activity Monitor appear active**

- If you set both `loaddriver` and `useActivityMonitorChangeSource` to `true` in
  `Gen7Agent.App.NetCore.dll.config`, the agent automatically uses Activity Monitor and
  disables the kernel driver. You can optionally set `loaddriver` to `false` to make the
  configuration explicit.
