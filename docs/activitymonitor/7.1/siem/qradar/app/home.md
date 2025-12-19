---
title: "Home Dashboard"
description: "Home Dashboard"
sidebar_position: 10
---

# Home Dashboard

The File System Activity Home dashboard contains the following cards:

![Home Dashboard for Stealthbits Activivty Monitor App for QRadar](/images/activitymonitor/7.1/siem/qradar/dashboard/homedashboard.webp)

- Active Users – Number of distinct users recorded performing any type of file activity to/from any
  host over the specified time interval
- Active Servers – Number of distinct servers accessed (destination IP Addresses) with any type of
  file activity recorded over the specified time interval
- Open Offenses – Number of ransomware offenses detected within QRadar from the file activity event
  data

    - The value for this card is a hyperlink to the
      [Ransomware Dashboard](/docs/activitymonitor/7.1/siem/qradar/app/ransomware.md).

- File Activity – Timeline of all file activity over the specified time interval
- Top Users – Displays up-to the top five users associated with file activity over the specified
  time interval
- Top Servers – Displays up-to the top five servers (destination IP Addresses) associated with file
  activity over the specified time interval
- Latest Events – Tabular format of all file activity events which occurred over the specified time
  interval

    - See the
      [Table Card Features ](/docs/activitymonitor/7.1/siem/qradar/app/app.md#table-card-features)
      topic for additional information.

The time interval is identified in the upper-right corner with the Start and End boxes. This is set
by default to the “past day,” or 24 hours. To search within a different interval, either manually
type the desired date and time or use the calendar buttons to set the desired date and time
interval. Then click Search to refresh the card data.
