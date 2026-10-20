---
title: "Monitor NAS Devices"
description: "Monitor NAS Devices"
sidebar_position: 10
---

# Monitor NAS Devices

Monitoring a NAS device first requires the Netwrix Activity Monitor to have an Activity agent
deployed and configured to monitor the device. You must deploy a Threat Prevention Agent on the
same Windows server hosting the Activity agent. After monitoring begins, configure a Threat
Prevention policy to monitor file system changes.

:::note
The Threat Prevention policy doesn't change what the Activity Monitor agent is
monitoring. It reads information collected by the Activity Monitor and applies any additional
filters defined in the policy. Therefore, you must configure the Activity Monitor agent to monitor
the activity you want.
:::


To monitor NAS devices:

**Step 1 –** In Threat Prevention, create a new policy.

**Step 2 –** On the Event Type tab of the policy, add the **File System Changes** event type.

**Step 3 –** In the Event Filters section, go to the Paths filter tab and click the **Add** button
in the Include Paths area to open the
[Select File System Objects Window](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/window/selectfilesystemobjects.md).

:::tip
Any files or folders you exclude must be a subset of a folder identified in the
Include Paths area.
:::


**Step 4 –** Connect to the Threat Prevention Agent deployed to a Windows server hosting the
Activity agent. The Navigation pane lists the local drives of the Windows server and all NAS devices
that the Activity agent monitors.

**Step 5 –** Select the NAS device you want in the Navigation pane and enter the paths for this
policy to monitor in the Results pane, one path per row.

The paths you enter can be file or folder names.

- For example, type c:\HR\NewHireProcess.doc for a NAS device with 192.168.16.188 as IP address, and
  it appears in the paths list as c:\HR\NewHireProcess.doc (\192.168.16.188).

:::note
Unlike Windows paths, NAS paths don't go through Threat Prevention validation. You must
accurately enter the path of the file or folder to monitor. The format of the paths needs to
match the data in the TSV files produced by the Netwrix Activity Monitor agent. Use the Search
feature in the Netwrix Activity Monitor to validate path formats. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.
:::

**Step 6 –** Click **OK** to close the Select File System Objects window.

**Step 7 –** Save the policy.

Threat Prevention has now added the NAS paths to the list of monitored paths.
