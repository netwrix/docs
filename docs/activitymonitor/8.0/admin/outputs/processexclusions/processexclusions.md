---
title: "Process Exclusions Tab"
description: "Process Exclusions Tab"
sidebar_position: 80
---

# Process Exclusions Tab

The Process Exclusions tab on an output Properties window is where monitoring scope by Windows
processes can be modified. These settings are initially configured when the output is added.

:::note
Netwrix product processes are excluded by default from activity monitoring.
:::


Select an output for a Windows file server host on the Monitored Hosts tab and click **Edit** to
open the output Properties window.

![Process Exclusions Tab](/images/activitymonitor/8.0/admin/outputs/processexclusions.webp)

The tab contains the following settings and features:

- Add – Opens the Add or Edit Process window to add a new process to the list. See the
  [Add or Edit Process Window](/docs/activitymonitor/8.0/admin/outputs/processexclusions/addeditprocess.md) topic for additional information.
- Remove – Removes the selected path from the list. Confirmation is not requested.

    :::warning
    If a process is removed by accident, use the **Cancel** button to discard the
    change.
    :::


- Edit – Opens the Add or Edit Process window to modify the selected process. See the
  [Add or Edit Process Window](/docs/activitymonitor/8.0/admin/outputs/processexclusions/addeditprocess.md) topic for additional information.

The table lists process that will be excluded, displaying columns for Process Name and Events.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.
