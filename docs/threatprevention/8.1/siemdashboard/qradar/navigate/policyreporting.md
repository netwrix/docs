---
title: "Policy Reporting Dashboard"
description: "Policy Reporting Dashboard"
sidebar_position: 70
---

# Policy Reporting Dashboard

Use the Policy Reporting dashboard to view Threat Prevention events from any enabled policy that
is sending events to QRadar. This dashboard requires the SEC token saved in the Settings
interface so that QRadar can actively see Threat Prevention policies and associated recent
events. See the [Settings](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/settings.md) topic for additional information.

The Policies tab on the left side of the dashboard toggles the Policies panel open and close. The
panel lists all the enabled Threat Prevention policies sending event data to QRadar in alphanumeric
order. When you select a policy, the dashboard cards load the event data from that policy and
reset to a data search of the past three (3) hours.

The Policy Reporting dashboard contains the following cards:

![policyreporting](/images/threatprevention/8.1/siemdashboard/qradar/dashboard/policyreporting.webp)

- Activity (Successful/Blocked) – Timeline of successful/failed/blocked events related to the
  selected policy that have been recorded in the specified timeframe. See the
  [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional information.
- Successful/Blocked Events – Breakdown of events related to the selected policy that have been
  recorded in the specified timeframe by successful/failed/blocked status. See the
  [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional information.
- Top Perpetrators – Displays up to the top five (5) usernames related to the selected policy that
  have been recorded in the specified timeframe. See the
  [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional information.
- Events by Domain – Breakdown of events related to the selected policy that have been recorded in
  the specified timeframe by domain. See the
  [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional information.
- Events by Perpetrator – Tabular format of all usernames related to the selected policy for events
  that have been recorded in the specified timeframe. See the
  [Table Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#table-card-features) topic for additional information.
- Events by Domain – Tabular format of all domains related to the selected policy for events that
  have been recorded in the specified timeframe. See the
  [Table Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#table-card-features) topic for additional information.
- Latest Events – Tabular format of all events related to the selected policy that have been
  recorded in the specified timeframe. See the
  [Table Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#table-card-features) topic for additional information.

The time interval is identified in the upper-right corner with the _Start_ and _End_ boxes. This
defaults to the past three (3) hours. To search within a different interval, either manually
enter the date and time you want or use the calendar buttons to set them
interval. Then click **Search** to refresh the card data.

When you instigate a search using a time interval longer than twelve (12) hours, the app breaks the
database query into multiple mini-queries. This visibly resets the dashboard display at the end of
each mini-query until the app has retrieved all data for the selected time interval.
