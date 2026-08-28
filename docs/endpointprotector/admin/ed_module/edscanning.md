---
title: "Scanning configuration"
description: "Configure automatic scan scheduling, user-initiated scan settings, and scan targets"
sidebar_position: 52
---


# Scanning configuration

This section covers the configuration options for eDiscovery scan scheduling, user-initiated scans, and scan resource management.

## Automatic scanning

eDiscovery supports automatic scan scheduling, so you can run scans at regular intervals without manual intervention.

To configure automatic scanning:

1. Navigate to **eDiscovery** > **Policies and Scans**.
2. Select a policy and configure the automatic scanning options.

The following scheduling options are available:

| Option | Description |
|--------|-------------|
| **One time** | The scan runs once at the specified date and time |
| **Weekly** | The scan runs every seven days from the configured start date and time |
| **Monthly** | The scan runs every 30 days from the configured start date and time |

### Scan priorities

When multiple scans are active simultaneously, scan priorities determine the execution order. Assign a higher priority to critical compliance scans to ensure they complete first.

### Resource-aware constraints

To minimize disruption to endpoint users, you can configure the following resource-aware scan constraints:

- **Pause on battery**—pauses the scan when the endpoint is running on battery power
- **Stop when battery is below x%**—stops the scan when the battery level drops below the specified percentage
- **Pause on user activity**—pauses the scan when the endpoint user is actively working
- **User activity timeout**—resumes the scan after the user has been idle for the specified duration

## User-initiated scan settings

User-initiated scans let end users start data-at-rest scans directly from the Endpoint Protector agent on their endpoint. Configure user-initiated scan settings from **Device Control** > **Global Settings** > **eDiscovery Settings**.

### Scan retention

Control how long user-initiated scan results are kept on the endpoint:

- **Number of Scans**—retain a specified number of scan results (range: 1–10, default: 1)
- **Number of Days**—retain scan results for a specified number of days (range: 1–30, default: 1)

These two settings are mutually exclusive—select one retention method.

### Log rollover

Configure log rollover limits to prevent eDiscovery logs from consuming excessive disk space on endpoints:

- **Rollover After**—rolls over the eDiscovery log when it reaches the specified size (range: 0–10,240 MB, default: 5,120 MB)
- **Rollover When**—rolls over the eDiscovery log when it consumes the specified percentage of total disk space (range: 1–25%, default: 10%)

Both rollover conditions are enabled by default.

### Send events to server

The **Send user-initiated eDiscovery scan event data to the server** toggle controls whether user-initiated scan results are sent to the EPP server. This setting is **off** by default.

:::warning
User-initiated scans generate many event entries that consume significant database space. Enable this only if you need server-side visibility into user-initiated scan activity.
:::

## Log rotation

eDiscovery scan results are stored in CrateDB alongside Device Control and Content Aware Protection logs. Log rotation applies to eDiscovery logs automatically based on the retention period configured in **System Configuration** > **System Settings** > **Logs Settings**.

The log rotation process runs every five minutes and deletes eDiscovery logs and log details older than the configured retention period. Both the `sdr_logs` and `sdr_log_details` tables in CrateDB are covered by log rotation.
