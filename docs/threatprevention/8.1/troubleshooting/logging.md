---
title: "Log Files and Logging Configuration"
description: "Log files and logging configuration for the Enterprise Manager, Administration Console, and Agent"
sidebar_position: 80
---

# Log Files and Logging Configuration

Threat Prevention writes diagnostic logs from two separate logging systems:

- The managed components — Enterprise Manager, Administration Console, and the Agent host service —
  use NLog, configured through a `.log.config` file that ships with each component.
- AD Monitor, the native component that runs inside the LSASS process on a domain controller, uses
  its own configuration file and writes a separate set of logs. See the
  [AD Monitor Logging Configuration](/docs/threatprevention/8.1/troubleshooting/admonitorlogging.md)
  topic for additional information.

This topic covers the managed components.

:::note
Version 8.1 replaces the log4net logging engine with NLog in the Enterprise Manager,
Administration Console, and Agent host. The names of the active log files are unchanged, but the
configuration file format, the naming of archived files, and Windows Event Log integration all
changed. See the [Upgrade Procedure](/docs/threatprevention/8.1/install/upgrade/overview.md) topic
for the changes to expect after an upgrade.
:::

## Log Files by Component

Each component writes its logs to a `logs` folder inside its own installation folder.

| Component | Log file | Contents |
| --- | --- | --- |
| Enterprise Manager | SIEnterpriseManager.log | Main service activity |
| Enterprise Manager | SIEnterpriseManager_startup.log | Service startup sequence |
| Enterprise Manager | SIEnterpriseManager_queries.log | Database queries |
| Administration Console | SIWinConsole.log | Main console activity |
| Administration Console | SIWinConsole_startup.log | Console startup sequence |
| Agent | SIWindowsAgent.log | Main Agent activity |
| Agent | SIWindowsAgent_startup.log | Agent startup sequence |
| Agent | EventComeInSqlite.log | Events entering the local event queue |
| Agent | EventComeOutSqlite.log | Events leaving the local event queue |
| Agent | ADWS.log | Active Directory Web Services channel activity |
| Agent | ADWS_startup.log | Active Directory Web Services channel startup |
| Agent | SIAgentUpdater.log | Agent self-upgrade activity |

The default locations for the Enterprise Manager and Administration Console logs are:

**…\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager\logs\**

**…\Netwrix\Netwrix Threat Prevention\SIWinConsole\logs\**

To collect the Agent logs without connecting to the Agent server, use **Get Agent Log** in the Agents
interface. It downloads a ZIP archive holding the complete contents of the `logs` and
`ADMonitor_logs` folders on that server. See the
[Access Agent Log Files](/docs/threatprevention/8.1/admin/agents/agents-windows/loglevelconfiguration.md#access-agent-log-files)
topic for additional information.

## Archived Log Files

A log file is archived when it reaches its size limit, and again each time the component starts. The
archived file keeps the original name with a timestamp appended, in the format
`_<yyyyMMdd-HHmmss>`. For example, an archived Enterprise Manager log is named:

**SIEnterpriseManager_20260804-153000.log**

Each component keeps up to ten archived files per log. When the eleventh archive is created, the
oldest one is deleted.

:::warning
Archived files were named `SIEnterpriseManager.log.1`, `SIEnterpriseManager.log.2`, and
so on in versions before 8.1. Update any script or monitoring tool that collects archived logs by
matching the `.log.<number>` pattern, because it doesn't match the timestamped names.
:::

## Log Levels

Set log levels for the Enterprise Manager, Administration Console, and Agents from the Log Level
Configuration window in the Administration Console. See the
[Log Level Configuration Window](/docs/threatprevention/8.1/admin/agents/agents-windows/loglevelconfiguration.md)
topic for additional information.

A log level set from the Administration Console or through PowerShell is written back to the
component's `.log.config` file, so the setting survives a service restart.

## Edit the Log Configuration File

Each managed component reads its logging settings from a `.log.config` file in its installation
folder: `SIEnterpriseManager.log.config`, `SIWinConsole.log.config`, `SIWindowsAgent.log.config`,
and `SIAgentUpdater.log.config`. Edit this file to enable logging for an individual feature, which
is more targeted than raising the log level for the whole component.

Each file ships with a set of example rules that are commented out. To enable one:

**Step 1 –** Open the `.log.config` file for the component in a text editor.

**Step 2 –** Find the example rule block for the feature you want to log and remove the comment
markers around it.

**Step 3 –** Move the rule above the catch-all rule, `<logger name="*" … />`, and confirm the rule
has `final="true"` so the catch-all rule doesn't write the same entry a second time.

**Step 4 –** Save the file.

The change applies immediately. No service or console restart is needed.

:::note
This applies only to the managed components. AD Monitor reads its configuration when it
loads into the LSASS process, so a change to its configuration takes effect only after the Agent
service restarts.
:::

The following example enables detailed logging for DCSync event processing in the Enterprise
Manager:

```xml
<logger name="SI.SIMonitor.Core.GrpcCommunication.AgentService" minlevel="Debug" writeTo="mainFile" final="true" />
<logger name="SI.SIMonitor.Core.EventSystem" minlevel="Debug" writeTo="mainFile" final="true" />
<logger name="SI.SIMonitor.Core.BasePolicyCollection" minlevel="Debug" writeTo="mainFile" final="true" />
<logger name="*" minlevel="Warn" writeTo="mainFile" />
```

### Available Example Rules

| Component | Feature | Loggers enabled |
| --- | --- | --- |
| Enterprise Manager | DNS resolution | HostsActualizer, SI.SIMonitor.Core.AgentCollection |
| Enterprise Manager | Account resolution | DynamicCollectionsResolver |
| Enterprise Manager | DCSync events | AgentService, EventSystem, BasePolicyCollection |
| Enterprise Manager | Authentication events | AgentService, EventSystem, BruteforceAttacksRecognizer, GoldenTicketsRecognizer |
| Agent | DNS resolution | SI.Common.Ad.LocalDns, SI.Common.Ad.NativeDnsResolver, OriginatingClient |
| Agent | Account resolution | SI.Common.Ad.AdUtil |
| Agent | DCSync event reader | AdMonitorModule, DcSyncEventDataParser, DcSyncIpcDataParser |
| Agent | Authentication event reader | AdMonitorModule, AdIpcEventDataParser |

:::tip
Return the log configuration to its original state after you finish collecting logs.
Feature-level logging at the Debug level produces a high volume of entries.
:::

## Windows Event Log Entries

The Enterprise Manager and Administration Console don't write entries to the **SI Events** source
in the Windows Event Log. Use the file logs described in this topic instead.

For system alerts that Threat Prevention raises deliberately, such as a stopped Agent or a failed
database connection, configure event log alerting. See the
[Event Log Tab](/docs/threatprevention/8.1/admin/configuration/systemalerting/eventlog.md) topic
for additional information.

See the [Best Practices and Troubleshooting](/docs/threatprevention/8.1/troubleshooting/overview.md)
topic for additional information.
