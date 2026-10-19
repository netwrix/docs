---
title: "Host Investigation Dashboard"
description: "Host Investigation Dashboard"
sidebar_position: 90
---

# Host Investigation Dashboard

The Host Investigation dashboard only appears when a search is conducted. Click a computer-account hyperlink within the Source IP or Destination IP columns of a table card, or enter the complete host IP address in the Search box on the right side of the navigation bar.

The Host Investigation dashboard contains the following cards:

![Host Investigation Dashboard](/images/threatprevention/7.5/siemdashboard/qradar/dashboard/hostinvestigation.webp)

- Total Events from Host – Number of all events associated with the host in the specified time interval
- Users – Number of usernames associated with the host in the specified time interval
- Top Users (Authenticating from Host) – Shows the top five users associated with the host (as source) in the specified time interval
- Top Users (Authenticating to Host) – Shows the top five users associated with the host (as destination) in the specified time interval
- Activity – Timeline of all events associated with the host in the specified time interval. See [Graph Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#graph-card-features) for details.
- Latest Events – Tabular format of all events associated with the host in the specified time interval. See [Table Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#table-card-features) for details.
- Offenses Related to Host – QRadar offenses associated with the host in the specified time interval. See [Table Card Features](/docs/threatprevention/7.5/siemdashboard/qradar/navigate/navigate.md#table-card-features) for details.

The time interval is identified in the upper-right corner in the _Start_ and _End_ boxes, which default to the past three hours. To search a different timeframe, enter the start and end dates and times, or use the calendar buttons to select them. Click **Search** to refresh the card data.

Searches using a time interval longer than 12 hours split the database query into multiple mini-queries. The dashboard display resets at the end of each mini-query until all data for the selected timeframe is retrieved.

Use this feature to scope the report data to Threat Prevention collected events or all information within QRadar for the selected host, which opens in another tab. Click Search and select Threat Prevention from the dropdown menu to refresh the card data, or select QRadar from the dropdown menu to open the host’s List of Events.
