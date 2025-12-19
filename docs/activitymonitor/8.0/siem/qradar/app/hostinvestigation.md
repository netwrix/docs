---
title: "Host Investigation Dashboard"
description: "Host Investigation Dashboard"
sidebar_position: 60
---

# Host Investigation Dashboard

The Host Investigation dashboard only appears when a search is conducted. This can be done by
clicking a hyperlink within the Destination IP column of a table card. Alternatively, type the
complete host IP Address in the Search box on the right side of the navigation bar.

![Home Investigation Dashboard for Stealthbits Activivty Monitor App for QRadar](/images/activitymonitor/8.0/siem/qradar/dashboard/userinvestigationdashboard.webp)

The Host Investigation dashboard contains the following cards:

- Total Actions – Number of all file activity events associated with the host over the specified
  time interval
- Users – Number of usernames associated with the host over the specified time interval
- Resources – Number of distinct files associated with the host over the specified time interval
- File Activity – Timeline of all events associated with the host over the specified time interval

    - The graph values can be toggled on an off by clicking on individual elements in the legend.

- Details of File Activity – Tabular format of all file activity events associated with the host
  which occurred over the specified time interval

    - See the [Table Card Features ](/docs/activitymonitor/8.0/siem/qradar/app/app.md#table-card-features) topic for additional
      information.

- Destination Host Offenses – QRadar offenses associated with the host which occurred over the
  specified time interval

    - See the [Table Card Features ](/docs/activitymonitor/8.0/siem/qradar/app/app.md#table-card-features) topic for additional
      information.

The time interval is identified in the upper-right corner with the Start and End boxes. This is set
by default to the “past day,” or 24 hours. To search within a different interval, either manually
type the desired date and time or use the calendar buttons to set the desired date and time
interval. Then click Search to refresh the card data.
