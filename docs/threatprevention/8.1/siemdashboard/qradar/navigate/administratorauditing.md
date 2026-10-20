---
title: "Administrator Auditing Dashboard"
description: "Administrator Auditing Dashboard"
sidebar_position: 50
---

# Administrator Auditing Dashboard

A Threat Prevention policy named Domain Admin Activity specifically feeds the Administrator Auditing
dashboard. See the [SIEM Folder Templates](/docs/threatprevention/8.1/admin/templates/folder/siem.md) topic for
information on this policy template. If this policy template isn't enabled and actively monitoring,
this dashboard is blank.

The Administrator Auditing dashboard contains the following cards:

![Administrator Auditing Dashboard](/images/threatprevention/8.1/siemdashboard/qradar/dashboard/administratorauditing.webp)

- Top Clint IPs – Displays up to the top five (5) client IP addresses related to events that have
  been recorded in the specified timeframe
- Events – Breakdown of changes that have been recorded in the specified timeframe by
  successful/failed/blocked status. See the
  [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional information.
- Most Active Administrators – Displays up to the top five (5) usernames related to change events
  that have been recorded in the specified timeframe
- All Administrator Activity – Tabular format of all events that have been recorded in the specified
  timeframe. See the [Table Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#table-card-features) topic for additional
  information.
- Administrator Offenses – Tabular format of all offenses related to Administrators. See the
  [Table Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#table-card-features) topic for additional information.
- Administrator Group Changes – Tabular format of all group changes to the Domain, Schema, and
  Enterprise Admin groups that have been recorded in the specified timeframe. See the
  [Table Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#table-card-features) topic for additional information.

The time interval is identified in the upper-right corner with the _Start_ and _End_ boxes. This
defaults to the past three (3) hours. To search within a different interval, either manually
enter the date and time you want or use the calendar buttons to set them
interval. Then click **Search** to refresh the card data.

When you instigate a search using a time interval longer than twelve (12) hours, the app breaks the
database query into multiple mini-queries. This visibly resets the dashboard display at the end of
each mini-query until the app has retrieved all data for the selected time interval.
