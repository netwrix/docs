---
title: "Host Investigation Dashboard"
description: "Host Investigation Dashboard"
sidebar_position: 90
---

# Host Investigation Dashboard

The Host Investigation dashboard only appears when you conduct a search. You can do this by
clicking a computer-account hyperlink within the Source IP or Destination IP columns of a table
card. Alternatively, enter the complete host IP address in the Search box on the right side of the
navigation bar.

The Host Investigation dashboard contains the following cards:

![Host Investigation Dashboard](/images/threatprevention/8.1/siemdashboard/qradar/dashboard/hostinvestigation.webp)

- Total Events from Host – Number of all events associated with the host over the specified time
  interval
- Users – Number of usernames associated with the host over the specified time interval
- Top Users (Authenticating from Host) – Displays up to the top five (5) users associated with the
  host (as source) over the specified time interval
- Top Users (Authenticating to Host) – Displays up to the top five (5) users associated with the
  host (as destination) over the specified time interval
- Activity – Timeline of all events associated with the host over the specified time interval. See
  the [Graph Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#graph-card-features) topic for additional information.
- Latest Events – Tabular format of all events associated with the host that occurred over the
  specified time interval. See the [Table Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#table-card-features) topic
  for additional information.
- Offenses Related to Host – QRadar offenses associated with the host that occurred over the
  specified time interval. See the [Table Card Features](/docs/threatprevention/8.1/siemdashboard/qradar/navigate/navigate.md#table-card-features) topic
  for additional information.

The time interval is identified in the upper-right corner with the _Start_ and _End_ boxes. This
defaults to the past three (3) hours. To search within a different interval, either manually
enter the date and time you want or use the calendar buttons to set them
interval. Then click **Search** to refresh the card data.

When you instigate a search using a time interval longer than twelve (12) hours, the app breaks the
database query into multiple mini-queries. This visibly resets the dashboard display at the end of
each mini-query until the app has retrieved all data for the selected time interval.

Additionally, use this feature to scope the report data to just Threat Prevention collected
events or to all information within QRadar for the selected host, which opens in another tab. Click
Search and select Threat Prevention from the dropdown menu to refresh the card data or select
QRadar from the dropdown menu to open the host’s List of Events.
