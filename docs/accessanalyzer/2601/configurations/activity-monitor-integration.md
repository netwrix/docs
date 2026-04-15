---
title: "Activity Monitor Integration"
description: "How to configure Netwrix Activity Monitor to send real-time file system activity data to Access Analyzer"
sidebar_position: 85
---

# Activity Monitor Integration

## Overview

By default, Access Analyzer 26 collects permissions, access rights, sensitive data findings, and identity data on a scheduled basis. It does not capture real-time file system events — such as file opens, reads, writes, and deletes — on its own.

Real-time file system activity in AA26 comes from Netwrix Activity Monitor (NAM). When NAM is monitoring a host and an AA26 output is configured, NAM routes file activity events into AA26 continuously. This enables AA26 to display near-real-time activity alongside its scheduled scan findings.

---

## What this integration provides

Once configured, AA26 receives the following event types from NAM for each monitored host:

- File open
- File read
- File write
- File delete
- File rename
- Permission change (where supported by the monitored platform)

These events appear in AA26 in the context of the affected resource and are correlated with the permissions and sensitive data findings that AA26 collects through its scan engine.

---

## Prerequisites

Before you begin:

- Netwrix Activity Monitor must be installed and running in your environment.
- NAM must already be monitoring the hosts for which you want real-time activity in AA26. Confirm that monitoring is active and that NAM is collecting events for the target hosts before adding the AA26 output.
- Upgrade NAM to the latest version. The AA26 output type requires a NAM version that supports it. Check the [Netwrix Activity Monitor release notes](https://www.netwrix.com/activity_monitor.html) for the minimum version requirement.
- The AA26 instance must be reachable from the NAM server over the network.

:::note
Real-time activity data flows from NAM to AA26. AA26 does not initiate the connection. Ensure that any firewalls between the NAM server and the AA26 instance allow outbound traffic from NAM on the port that AA26 listens on.
:::

---

## Configure the AA26 output in Netwrix Activity Monitor

Add an AA26 output destination to each monitoring policy in NAM that covers the hosts you want to stream into AA26.

:::note
The following steps describe the general configuration flow. Exact menu labels and field names in the NAM console might differ depending on your NAM version. Verify the steps against the NAM documentation for your installed version.
:::

1. Open the Netwrix Activity Monitor console.
2. Navigate to the monitoring policy for the target host or host group.
3. Open the output configuration for that policy.
4. Add a new output destination and select the **Netwrix Access Analyzer** output type.
5. In the connection settings for the output, enter the hostname or IP address of your AA26 instance and the port that AA26 uses to receive activity data.
6. Configure authentication if required by your AA26 deployment.
7. Save the output configuration.
8. Repeat steps 2 through 7 for each monitoring policy that covers additional hosts you want to stream into AA26.

After saving, NAM begins forwarding file activity events from the monitored hosts to AA26. There is no additional configuration required in AA26 to receive the data.

---

## Verify the integration

To confirm that AA26 is receiving activity events from NAM:

1. Log in to Access Analyzer 26.
2. Navigate to the resource or host that NAM is monitoring.
3. Review the activity data for recent file events.

If no events appear after a few minutes, check the following:

- Confirm that the NAM monitoring policy is in an active state and that events are being generated on the target host.
- Confirm that the AA26 output in NAM shows a healthy connection status.
- Check NAM logs for errors related to the AA26 output destination.
- Verify network connectivity and firewall rules between the NAM server and the AA26 instance.

---

## Related links

- [Netwrix Activity Monitor Documentation](https://docs.netwrix.com/docs/activitymonitor)
- [Migrate Credentials](../kb/migration/migrate-credentials.md)
