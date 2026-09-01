---
title: "Dashboard Tab"
description: "Dashboard Tab"
sidebar_position: 10
---

# Dashboard Tab

The **Dashboard** gives a visual indicator of both unusual change volumes and change activity times.

The Dashboard provides a dynamic view of changes within the estate and immediate notification of new
changes as they are reported. Most elements are ‘active’, so clicking the **Unplanned** section of
the Pie Chart displays Events pre-filtered for the Device Group and Time/Date range that the
Dashboard displays.

The **Dashboard** shows recent System Events including:

- Planned and Unplanned changes for the selected device group. Clicking any chart links
  to a detailed event view of the events in question.
- Overview of trends in compliance report results.
- Summaries of active planned changes.
- Highlighted problems with individual devices.

:::note

:::

- The **Welcome to Netwrix Change Tracker** widget provides **Guided Setup Wizards**.
- Click **Settings** and select an auto refresh period for a dynamic, active Dashboard.
- You can add more widgets and create additional dashboard tabs. Resize and reposition widgets by
  clicking and dragging them.
- You can drag the **Dashboard** ‘widgets’ around and stretch them to increase their size.
- To change the Time Period or Devices/Groups displayed, hover over the left-hand margin of the
  Dashboard. The **Groups and Devices** and **Date and Time Range** selection panels appear. The
  time doesn't affect the dashboard widgets but applies to the other tabs.

The local agent installed on the Netwrix Change Tracker host server is already running and has
registered with the **Change Tracker Hub**. See the
[Netwrix Change Tracker Documentation](/docs/changetracker/index.md) topic for additional information.

The [Agent Updates](/docs/changetracker/admin/settingstab/agentsanddevices/agentupdates.md) topic
describes the auto-enrollment, or registration, process in more depth. Depending on server speed,
the Local Agent might be in an ‘Awaiting Registration’ state or already registered in the system.

If you don't see an Agent at all, contact
[Netwrix Support](https://www.netwrix.com/support.html) for further help or see the Agent
Troubleshooting topic in the Admin Guide.

:::note
You can pop out the **Groups and Device** selection panel by clicking the tag. Ensure
‘Search Groups’ is set to ‘All Devices.’
:::

After the Agent registration process completes, you see that Change Tracker has identified the
Device Name, IP Address, and Operating System. By default, Netwrix Change Tracker includes a full
list of built-in Device Groups corresponding to the Operating System of the Device.

Default Groups come with an appropriate monitoring template and CIS Benchmark Report. As soon as
you register a device to a Group, Change Tracker automatically monitors the device for change and
CIS compliance.
