---
title: "Navigate the App"
description: "Navigate the Threat Hunting App for Splunk"
sidebar_position: 10
---

# Navigate the Threat Hunting App for Splunk

The Netwrix Threat Hunting App for Splunk contains only one dashboard called Threat Hunting.

![ribbon](/images/threatprevention/8.1/siemdashboard/splunk/threathunting/ribbon.webp)

- The Timeframe interval is identified in the upper-left corner of each dashboard and uses the
  default Splunk search features. The dropdown menu provides additional options. To search within a
  different interval, choose a new option from the menu.
- The Threat Type dropdown menu contains several predefined options: Perpetrator Hunting, Sensitive
  Data Hunting, and Privilege Creep/Escalation. The textbox changes based on the selection as
  follows:

  - Perpetrator Hunting – Perpetrator Name (A Perpetrator is any security principal that is making
    a change)
  - Sensitive Data Hunting – File Name
  - Privilege Creep/Escalation – Account Name

- The Day of Week checklist provides the option to choose which days of the week to filter
  out when looking for threats. By default, all of the days are checked. When you uncheck a day,
  Splunk filters out events that occurred on that day.
- The Time of Day checklist provides the option to choose which times of day to filter out
  when looking for threats. By default, all of the times of day are checked. When you uncheck a day,
  Splunk filters out events that occurred on that day.

Click Submit to refresh the card data and reload the page with the current parameters (Timeframe,
search term, Day of Week, and Time of Day).
