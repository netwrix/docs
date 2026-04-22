---
title: "Activity Monitor Integration"
description: "How to configure Netwrix Activity Monitor to send real-time file system activity data to Access Analyzer"
sidebar_position: 85
---

# Activity Monitor Integration

## Overview

By default, Access Analyzer collects permissions, access rights, sensitive data findings, and identity data on a scheduled basis. It does not capture real-time file system events — such as file opens, reads, writes, and deletes — on its own.

Real-time file system activity in Access Analyzer comes from Netwrix Activity Monitor (NAM). When NAM is monitoring a host and an Access Analyzer output is configured, NAM routes file activity events into Access Analyzer continuously. This enables Access Analyzer to display near-real-time activity alongside its scheduled scan findings.

## What this integration provides

Once configured, Access Analyzer receives the following event types from NAM for each monitored host:

- File open
- File read
- File write
- File delete
- File rename
- Permission change (where supported by the monitored platform)

These events appear in Access Analyzer in the context of the affected resource and are correlated with the permissions and sensitive data findings that Access Analyzer collects through its scan engine.

## Prerequisites

Before you begin:

- Netwrix Activity Monitor must be installed and running in your environment.
- NAM must already be monitoring the hosts for which you want real-time activity in Access Analyzer. Confirm that monitoring is active and that NAM is collecting events for the target hosts before adding the Access Analyzer output.
- Upgrade NAM to the latest version. The Access Analyzer output type requires a NAM version that supports it. Check the [Netwrix Activity Monitor release notes](https://www.netwrix.com/activity_monitor.html) for the minimum version requirement.
- The Access Analyzer instance must be reachable from the NAM server over the network on TCP port 1514.

:::note
Real-time activity data flows from NAM to Access Analyzer. Access Analyzer does not initiate the connection. Ensure that any firewalls between the NAM server and the Access Analyzer instance allow outbound traffic from NAM on TCP port 1514.
:::

## Ports

| Port | Protocol | Direction | Description |
|------|----------|-----------|-------------|
| 1514 | TCP | NAM → Access Analyzer | Activity event stream from Netwrix Activity Monitor |

## Configure the Access Analyzer output in Netwrix Activity Monitor

Add an Access Analyzer output destination to each monitoring policy in NAM that covers the hosts you want to stream into Access Analyzer.

:::note
The following steps describe the general configuration flow. Exact menu labels and field names in the NAM console might differ depending on your NAM version. Verify the steps against the NAM documentation for your installed version.
:::

1. Open the Netwrix Activity Monitor console.
2. Navigate to the monitoring policy for the target host or host group.
3. Open the output configuration for that policy.
4. Add a new output destination and select the **Netwrix Access Analyzer** output type.
5. In the connection settings for the output, enter the hostname or IP address of your Access Analyzer instance and set the port to `1514`.
6. Configure authentication if required by your Access Analyzer deployment.
7. Save the output configuration.
8. Repeat steps 2 through 7 for each monitoring policy that covers additional hosts you want to stream into Access Analyzer.

After saving, NAM begins forwarding file activity events from the monitored hosts to Access Analyzer. There is no additional configuration required in Access Analyzer to receive the data.

## Verify the integration

To confirm that Access Analyzer is receiving activity events from NAM:

1. Log in to Access Analyzer.
2. Navigate to **Reports** and open the **Activity Investigation** report for a source group that covers a host NAM is monitoring.
3. Review the activity data for recent file events.

If no events appear after a few minutes, check the following:

- Confirm that the NAM monitoring policy is in an active state and that events are being generated on the target host.
- Confirm that the Access Analyzer output in NAM shows a healthy connection status.
- Check NAM logs for errors related to the Access Analyzer output destination.
- Verify network connectivity and firewall rules between the NAM server and the Access Analyzer instance on TCP port 1514.

## Related links

- [Netwrix Activity Monitor Documentation](https://docs.netwrix.com/docs/activitymonitor)
