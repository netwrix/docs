---
title: "Policy Reporting Dashboard"
description: "Policy Reporting Dashboard"
sidebar_position: 70
---

# Policy Reporting Dashboard

The Policy Reporting dashboard displays Threat Prevention events from any enabled policy that sends events to QRadar. This dashboard requires the SEC token to be saved in the Settings interface so QRadar can see Threat Prevention policies and associated recent events. See the [Settings](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/settings.md) topic for additional information.

The Policies tab on the left side toggles the Policies panel open and closed. All enabled Threat Prevention policies sending event data to QRadar appear in alphanumeric order. When you select a policy, the dashboard cards load the event data from that policy and reset to the past three hours of data.

The Policy Reporting dashboard contains the following cards:

![policyreporting](/images/threatprevention/7.5/siemdashboard/qradar/dashboard/policyreporting.webp)

- Activity (Successful/Blocked) – Timeline of successful, failed, or blocked events related to the selected policy in the specified timeframe. See [Graph Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#graph-card-features) for details.
- Successful/Blocked Events – Breakdown of events related to the selected policy by successful, failed, or blocked status in the specified timeframe. See [Graph Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#graph-card-features) for details.
- Top Perpetrators – Shows the top five usernames related to the selected policy in the specified timeframe. See [Graph Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#graph-card-features) for details.
- Events by Domain – Breakdown of events related to the selected policy by domain in the specified timeframe. See [Graph Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#graph-card-features) for details.
- Events by Perpetrator – Tabular format of all usernames related to the selected policy for events in the specified timeframe. See [Table Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#table-card-features) for details.
- Events by Domain – Tabular format of all domains related to the selected policy for events in the specified timeframe. See [Table Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#table-card-features) for details.
- Latest Events – Tabular format of all events related to the selected policy in the specified timeframe. See [Table Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#table-card-features) for details.

The time interval is identified in the upper-right corner in the _Start_ and _End_ boxes, which default to the past three hours. To search a different timeframe, enter the start and end dates and times, or use the calendar buttons to select them. Click **Search** to refresh the card data.

Searches using a time interval longer than 12 hours split the database query into multiple mini-queries. The dashboard display resets at the end of each mini-query until all data for the selected timeframe is retrieved.
