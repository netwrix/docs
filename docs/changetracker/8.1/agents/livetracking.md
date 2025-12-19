---
title: "Live Tracking"
description: "Live Tracking"
sidebar_position: 20
---

# Live Tracking

Live Tracking is a style of tracking to capture all changes in real-time that can be set when
configuring a tracking policy. See the
[Policy Templates: FIM File Integrity](/docs/changetracker/8.1/admin/settingstab/policytemplates/fimfiles.md) topic for additional
information.

## Windows

The Gen 7 Agent minifilter driver is a small, lightweight kernel driver used to collect real-time
file I/O changes. When a Gen 7 Agent is configured for live tracking on a Windows server, it relies
on the file I/O monitoring that the minifilter driver provides. The driver is installed during the
installation of the Gen 7 Agent and is registered with the Windows Filter Manager when live tracking
is required. See Microsoft's article
[Filter Manager Concepts](https://learn.microsoft.com/en-us/windows-hardware/drivers/ifs/filter-manager-concepts)
for additional information.

The Windows Filter Manager calls out to all registered drivers sequentially when any I/O activity
occurs (see the diagram below). The order in which they are called is based upon a given driver’s
altitude value, going from lowest to highest. The Netwrix Gen 7 Agent minifilter driver has been
allocated an altitude value of 388790. This was allocated by Microsoft when the driver was submitted
for approval as seen here Allocated filter altitudes – see the Activity Monitor section
(NNTInfo.sys).

Common minifilter drivers that are installed on a given Windows server are those associated with
Virus Scanning, Encryption and/or Continuous Backup. Many of these can lock files whilst processing
the request and in some cases, such as Encryption, modify the request.

:::note
The Gen 7 Agent minifilter driver does not lock files or modify the I/O request, it simply
monitors change.
:::


Logging of changes is only done for those files that meet the filter requirements of the Change
Tracker Policy Tracking Template applied to the running Gen 7 Agent.

For I/O changes that are part of the Tracking Template, the driver simply logs the change to a
memory buffer. This memory buffer is monitored by the installed Gen 7 Agent which queries and
empties it every 100 milliseconds.

Neither the server nor the agent requires a restart after live tracking has been enabled.

![minifilter_767x740](/images/changetracker/8.1/admin/agents/minifilter_767x740.webp)

The Change Tracker minifilter doesn't make any alterations to user requests, it only monitors I/O
activity.

## Linux

On Linux devices, The Gen 7 Agent uses Sysdig to capture low level data like who made the change.
See Github's article [Sysdig](https://github.com/draios/sysdig/) for additional information.
