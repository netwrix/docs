---
title: "User Investigation Dashboard"
description: "User Investigation Dashboard"
sidebar_position: 50
---

# User Investigation Dashboard

The User Investigation dashboard only appears when a search is conducted. This can be done by
clicking a hyperlink within the Username column of a table card. Alternatively, type the complete
user name in the Search box on the right side of the navigation bar.

![User Investigation Dashboard for Stealthbits Activivty Monitor App for QRadar](/images/activitymonitor/8.0/siem/qradar/dashboard/userinvestigationdashboard.webp)

The User Investigation dashboard contains the following cards:

- Total Actions – Number of all file activity events associated with the user over the specified
  time interval
- File Servers – Number of destination IP Addresses associated with the user over the specified time
  interval
- Resources – Number of distinct files associated with the user over the specified time interval
- File Activity – Timeline of all events associated with the user over the specified time interval
    - The graph values can be toggled on an off by clicking on individual elements in the legend.
- Details of File Activity – Tabular format of all file activity events associated with the user
  which occurred over the specified time interval
    - See the [Table Card Features ](/docs/activitymonitor/8.0/siem/qradar/app/app.md#table-card-features) topic for additional
      information.
- Destination Host Offenses – QRadar offenses associated with the destination IP Addresses accessed
  by the user during the specified time interval
    - See the [Table Card Features ](/docs/activitymonitor/8.0/siem/qradar/app/app.md#table-card-features) topic for additional
      information.

The time interval is identified in the upper-right corner with the Start and End boxes. This is set
by default to the “past day,” or 24 hours. To search within a different interval, either manually
type the desired date and time or use the calendar buttons to set the desired date and time
interval. Then click Search to refresh the card data.
