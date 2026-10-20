---
title: "GPO Monitoring Dashboard"
description: "GPO Monitoring Dashboard"
sidebar_position: 40
---

# GPO Monitoring Dashboard

The GPO Monitoring dashboard contains the following cards:

![GPO Monitoring Dashboard](/images/threatprevention/7.5/siemdashboard/qradar/dashboard/gpomonitoring.webp)

- Top GPOs – Shows the top five Group Policy Objects associated with events in the specified timeframe. See [Graph Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#graph-card-features) for details.
- Successful/Blocked Events – Breakdown of Group Policy Object changes by successful, failed, or blocked status in the specified timeframe. See [Graph Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#graph-card-features) for details.
- Changes by Domain – Breakdown of Group Policy Object changes by domain in the specified timeframe. See [Graph Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#graph-card-features) for details.
- Change Details – Tabular format of all Group Policy Object change events in the specified timeframe. See [Table Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#table-card-features) for details.

The time interval is identified in the upper-right corner in the _Start_ and _End_ boxes, which default to the past three hours. To search a different timeframe, enter the start and end dates and times, or use the calendar buttons to select them. Click **Search** to refresh the card data.

Searches using a time interval longer than 12 hours split the database query into multiple mini-queries. The dashboard display resets at the end of each mini-query until all data for the selected timeframe is retrieved.
