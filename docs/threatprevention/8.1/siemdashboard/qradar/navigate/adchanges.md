---
title: "AD Changes Dashboard"
description: "AD Changes Dashboard"
sidebar_position: 20
---

# AD Changes Dashboard

The AD Changes dashboard contains the following cards:

![AD Changes Dashboard](/images/threatprevention/8.1/siemdashboard/qradar/dashboard/adchanges.webp)

- Changes by Type – Breakdown of changes that have been recorded in the specified timeframe by event
  type. See the [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional
  information.
- Successful/Blocked Events – Breakdown of changes that have been recorded in the specified
  timeframe by successful/failed/blocked status. See the
  [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional information.
- Changes by Domain – Breakdown of changes that have been recorded in the specified timeframe by
  domain. See the [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional
  information.
- Top Client IPs – Displays up to the top five (5) client IP addresses related to events that have
  been recorded in the specified timeframe
- Top Perpetrators – Displays up to the top five (5) perpetrator usernames related to events that
  have been recorded in the specified timeframe
- Change Details – Tabular format of all Active Directory change events that have been recorded in
  the specified timeframe. See the [Table Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#table-card-features) topic
  for additional information.

The time interval is identified in the upper-right corner with the _Start_ and _End_ boxes. This
defaults to the past three (3) hours. To search within a different interval, either manually
enter the date and time you want or use the calendar buttons to set them
interval. Then click **Search** to refresh the card data.

When you instigate a search using a time interval longer than twelve (12) hours, the app breaks the
database query into multiple mini-queries. This visibly resets the dashboard display at the end of
each mini-query until the app has retrieved all data for the selected time interval.
