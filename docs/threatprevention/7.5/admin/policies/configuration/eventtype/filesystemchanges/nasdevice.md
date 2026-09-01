---
title: "Monitor NAS Devices"
description: "Monitor NAS Devices"
sidebar_position: 10
---

# Monitor NAS Devices

Monitoring a NAS device requires the Netwrix Activity Monitor to have an Activity agent
deployed and configured to monitor the device. A Threat Prevention Agent must be deployed on the
same Windows server hosting the Activity agent. Then configure a Threat Prevention policy to monitor file system changes.

:::note
The Threat Prevention policy doesn't change what the Activity Monitor agent monitors. It reads information collected by the Activity Monitor and applies any additional
filters defined in the policy. The Activity Monitor agent must be configured to monitor
the appropriate activity.
:::


**Step 1 –** In Threat Prevention, create a new policy.

**Step 2 –** On the Event Type tab of the policy, add the **File System Changes** event type.

**Step 3 –** In the Event Filters section, go to the Paths filter tab and click the **Add** button
in the Include Paths area to open the
[Select File System Objects Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/selectfilesystemobjects.md).

:::tip
Remember, any files or folders to be excluded need to be a subset of a folder identified in the
Include Paths area.
:::


**Step 4 –** Connect to the Threat Prevention Agent deployed to a Windows server hosting the
Activity agent. The local drives of the Windows server and all NAS devices being monitored by the
Activity agent are listed in the Navigation pane.

**Step 5 –** Select a NAS device in the Navigation pane and enter the paths to be
monitored by this policy in the Results pane, one path per row.

The paths entered can be file or folder names.

- For example, type c:\HR\NewHireProcess.doc for a NAS device with 192.168.16.188 as IP address, and
  it appears in the paths list as c:\HR\NewHireProcess.doc (\192.168.16.188).

:::note
Unlike Windows paths, NAS paths aren't validated by Threat Prevention. You must
accurately enter the path of the file or folder to be monitored. The format of the paths must
match the data in the TSV files produced by the Netwrix Activity Monitor agent. Use the Search feature
in the Netwrix Activity Monitor to validate path formats. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.
:::

**Step 6 –** Click **OK** to close the Select File System Objects window.

**Step 7 –** Save the policy.

The NAS paths are now added to the list of paths to be monitored.
