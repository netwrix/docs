---
title: "Output for Monitored Hosts"
description: "Output for Monitored Hosts"
sidebar_position: 30
---

# Output for Monitored Hosts

Once a host is being monitored the event stream can be sent to multiple outputs.

![Output Properties Overview](/images/activitymonitor/8.0/admin/monitoredhosts/outputpropertiesoverview.webp)

Configured outputs are grouped under the host. You can have multiple outputs configured for a host.
The host event outputs are:

- File – Creates an activity log as a TSV or JSON file for every day of activity
- Syslog – Sends activity events to the configured SIEM server or Netwrix Threat Manager, where
  supported

## Add File Output

Follow the steps to add a File output.

**Step 1 –** On the Monitored Hosts tab, select the desired host and click **Add Output**.

**Step 2 –** Select **File** from the drop-down menu. The Add New Output window opens.

![addnewoutputfile](/images/activitymonitor/8.0/admin/monitoredhosts/addnewoutputfile.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/8.0/admin/outputs/overview.md) topic for additional
information.

## Add Syslog Output

Follow the steps to add a Syslog output.

**Step 1 –** On the Monitored Hosts tab, select the desired host and click **Add Output**.

**Step 2 –** Select **Syslog** from the drop-down menu. The Add New Output window opens.

![addnewoutputsyslog](/images/activitymonitor/8.0/admin/monitoredhosts/addnewoutputsyslog.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/8.0/admin/outputs/overview.md) topic for additional
information.
