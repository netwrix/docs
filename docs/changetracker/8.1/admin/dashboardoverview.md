---
title: "Dashboard Tab"
description: "Dashboard Tab"
sidebar_position: 10
---

# Dashboard Tab

The **Dashboard** gives a visual indicator of both unusual change volumes and change activity times.

The Dashboard provides a dynamic view of changes within the estate and immediate notification of new
changes as they are reported. Most elements are ‘active’ so click on the **Unplanned** section of
the Pie Chart will display Events pre-filtered for the Device Group and Time/Date range displayed on
the Dashboard.

The **Dashboard** shows recent System Events including:

- Planned and Unplanned changes for the currently selected device group. Clicking on any chart will
  link to a detailed event view of the events in question.
- Overview of trends in compliance report results.
- Summaries of currently active planned changes.
- Highlighted problems with individual devices.

:::note

:::


- The **Welcome to Netwrix Change Tracker** widget provides **Guided Setup Wizard**s – use them!
- Click **Settings** and select an auto refresh period for a dynamic, active Dashboard.
- More widgets can be added, and additional dashboard tabs can be created. Widgets can be resized
  and repositioned using click/drag.
- You can drag the **Dashboard** ‘widgets’ around, stretch them to increase their size – try it now,
  it’s fun!
- To change the Time Period or Devices/Groups displayed, hover over the left-hand margin of the
  Dashboard – the **Groups and Devices**, and **Date and Time Range** selection panels will be
  displayed. The time does not impact the dashboard widgets but will apply to the other tabs.

The local agent installed on the Netwrix Change Tracker host server will already be running and will
have registered with the **Change Tracker Hub**. See the
[Netwrix Change Tracker v8.1 Documentation](/docs/changetracker/8.1/index.md) topic for additional information.

The auto-enrollment, or registration, process is described in more depth in the
[Agent Updates](/docs/changetracker/8.1/admin/settingstab/agentsanddevices/agentupdates.md) topic. but depending on server speed the Local Agent
may be found in an ‘Awaiting Registration’ state or already registered in the system.

If you do not see an Agent at all then please contact
[Netwrix Support](https://www.netwrix.com/support.html) for further help or use the Agent
Troubleshooting of the Admin Guide.

:::note
You can pop-out the **Groups and Device** selection panel by clicking on the tag as shown
above. Make sure the ‘Search Groups’ is set to ‘All Devices.’
:::


Once the Agent registration process has completed you will see that the Device Name and IP Address
have been identified and the Operating System. By default, Netwrix Change Tracker is provided with a
full list of built-in Device Groups corresponding to the Operating System of the Device.

Default Groups are pre-packed with an appropriate monitoring template and CIS Benchmark Report, and
as soon as a device has been registered to a Group the device will be monitored for change and CIS
compliance automatically.
