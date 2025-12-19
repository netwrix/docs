---
title: "User Investigation Dashboard"
description: "User Investigation Dashboard"
sidebar_position: 80
---

# User Investigation Dashboard

The User Investigation dashboard only appears when a search is conducted. This can be done by
clicking a user-account hyperlink in the Perpetrator or Affected Object columns of a table card.
Alternatively, type the complete user name in the Search box on the right side of the navigation
bar.

The User Investigation dashboard contains the following cards:

![User Investigation Dashboard](/images/threatprevention/7.4/siemdashboard/qradar/dashboard/userinvestigation.webp)

- Total Actions – Number of all events associated with the user over the specified time interval
- Source Hosts – Number of source IP addresses associated with the user over the specified time
  interval
- Destination Hosts – Number of destination IP addresses associated with the user over the specified
  time interval
- Activity – Timeline of all events associated with the user over the specified time interval. See
  the
  [Graph Card Features](/docs/threatprevention/7.4/siemdashboard/qradar/navigate/navigate.md#graph-card-features)
  topic for additional information.
- Latest Events – Tabular format of all events associated with the user over the specified time
  interval. See the
  [Table Card Features](/docs/threatprevention/7.4/siemdashboard/qradar/navigate/navigate.md#table-card-features)
  topic for additional information.
- Offenses Related to User – QRadar offenses associated with the user during the specified time
  interval. See the
  [Table Card Features](/docs/threatprevention/7.4/siemdashboard/qradar/navigate/navigate.md#table-card-features)
  topic for additional information.

The time interval is identified in the upper-right corner with the _Start_ and _End_ boxes. This is
set by default to the past three (3) hours. To search within a different interval, either manually
type the desired date and time or use the calendar buttons to set the desired date and time
interval. Then click **Search** to refresh the card data.

When a search using a time interval longer than twelve (12) hours is instigated, the database query
is broken into multiple mini-queries. This will result in a visible reset of the dashboard display
at the end of each mini-query until all data for the selected time interval has been retrieved.

Additionally, this feature allows you to scope the report data to just Threat Prevention collected
events or to all information in QRadar for the selected user, which opens in another tab. Click
Search and select Threat Prevention from the drop-down menu to refresh the card data or select
QRadar from the drop-down menu to open the user’s _List of Events_.
