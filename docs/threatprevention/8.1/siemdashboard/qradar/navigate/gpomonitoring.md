---
title: "GPO Monitoring Dashboard"
description: "GPO Monitoring Dashboard"
sidebar_position: 40
---

# GPO Monitoring Dashboard

The GPO Monitoring dashboard contains the following cards:

![GPO Monitoring Dashboard](/images/threatprevention/8.1/siemdashboard/qradar/dashboard/gpomonitoring.webp)

- Top GPOs – Displays up to the top five (5) Group Policy Objects related to events that have been
  recorded in the specified timeframe. See the
  [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional information.
- Successful/Blocked Events – Breakdown of Group Policy Object changes that have been recorded in
  the specified timeframe by successful/failed/blocked status. See the
  [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional information.
- Changes by Domain – Breakdown of Group Policy Object changes that have been recorded in the
  specified timeframe by domain. See the [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features)
  topic for additional information.
- Change Details – Tabular format of all Group Policy Object change events that have been recorded
  in the specified timeframe. See the [Table Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#table-card-features)
  topic for additional information.

The time interval is identified in the upper-right corner with the _Start_ and _End_ boxes. This
defaults to the past three (3) hours. To search within a different interval, either manually
enter the date and time you want or use the calendar buttons to set them
interval. Then click **Search** to refresh the card data.

When you instigate a search using a time interval longer than twelve (12) hours, the app breaks the
database query into multiple mini-queries. This visibly resets the dashboard display at the end of
each mini-query until the app has retrieved all data for the selected time interval.
